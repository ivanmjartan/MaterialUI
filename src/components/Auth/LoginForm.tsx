import React from "react";
import cx from "classnames";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { withFormik, FormikProps } from "formik";
import { string, object } from "yup";

import { backend } from "../../constants";
import SignInButton from "./SignInButton";

import sharedStyles from "../../shared.module.scss";
import styles from "./LoginForm.module.scss";

import logoUri from "../../media/logo-new.png";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export interface FormValues {
    email: string;
    password: string;
}

export interface MyFormProps extends FormValues, RouteComponentProps {
    login: (username: string, password: string) => Promise<void>;
    loginError?: string;
}

const LoginFormComponent: React.FC<MyFormProps & FormikProps<FormValues>> = (props) => {
    const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit, loginError } =
        props;

    return (
        <>
            {loginError && <Snackbar
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={Boolean(loginError)}
            >
                <Alert severity="error" variant="filled">{loginError}</Alert>
            </Snackbar>
            }
            <form onSubmit={handleSubmit} className={cx(styles.Login, "s-login-form")}>
                <Box sx={{
                    width: "100%",
                    textAlign: "center",
                }}>
                    <Box
                        component="img"
                        src={logoUri}
                        alt="GoodData"
                        sx={{
                            height: 70,
                            width: 70,
                            textAlign: "center",
                            marginBottom: "10px"
                        }}
                    />
                </Box>

                <Typography variant="h5" component="div" gutterBottom >
                    <Box sx={{ fontWeight: 'bold' }}>
                        Please sign in to the:
                        <br />
                        <a className={cx(sharedStyles.Link, sharedStyles.BreakWord)} href={backend}>
                            {backend.replace(/https?:\/\//, "")}
                        </a>{" "}
                        domain
                    </Box>
                </Typography>


                <TextField
                    fullWidth
                    error={!!errors.email && touched.email}
                    type="email"
                    id="email"
                    name="email"
                    label="E-mail"
                    autoComplete="e-mail"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.email && touched.email) ? errors.email : null}
                    sx={{
                        marginBottom: "10px"
                    }}
                />


                <TextField
                    fullWidth
                    error={!!errors.password && touched.password}
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.password && touched.password) ? errors.password : null}
                    sx={{
                        marginBottom: "10px"
                    }}
                />


                <SignInButton isSubmitting={isSubmitting} />

            </form>
        </>
    );
};

const formikConnector = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: ({ email = "", password = "" }) => ({
        email,
        password,
    }),
    validationSchema: object().shape({
        email: string().email("Invalid e-mail address").required("E-mail is required"),
        password: string().required("Password is required"),
    }),
    handleSubmit: ({ email, password }, { props: { login, history }, setFieldError, setSubmitting }) => {
        return login(email, password).then(
            () => history.push("/"),
            (error) => {
                setSubmitting(false);
                if (error.response && error.response.status === 401) {
                    setFieldError("password", "E-mail or password is invalid");
                } else {
                    setFieldError("password", "Unknown error");
                }
            },
        );
    },
});

export default withRouter(formikConnector(LoginFormComponent));
