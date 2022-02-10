import React from "react";
import { Link } from "react-router-dom";

import Page from "../components/Page";

import styles from "./Welcome.module.scss";

import kpiUri from "../media/kpi.png";
import successUri from "../media/success.svg";
import { Box, Typography } from "@mui/material";

const Code: React.FC = ({ children, ...restProps }) => (
    <code className={styles.code} {...restProps}>
        {children}
    </code>
);
const Pre: React.FC = ({ children }) => (
    <Box component="pre" sx={{ padding: "10px", borderLeft: "3px solid ", borderLeftColor: "secondary.main", color: "success.main"}}>
        {children}
    </Box>
);

const Welcome: React.FC = () => {

    return (
        <Page>
            <Box sx={{ width: '100%', textAlign: "center" }}>
                <Box
                    component="img"
                    src={successUri}
                />
                <Typography variant="h5" component="div" gutterBottom color="success.main">
                    Congratulations!
                    <br />
                    Your GoodData-powered app is created.
                </Typography>
            </Box>
            <br />
            <Typography variant="h5" component="div" gutterBottom >
                <Box sx={{ fontWeight: 'bold' }}>
                    Your new GoodData-powered app is ready!
                </Box>
            </Typography>



            <Typography variant="body1" gutterBottom >
                Now, let’s take one more step and set up your home dashboard with a test headline report
                widget. This will help verify that everything is set up correctly.
            </Typography>

            <ol>
                <li>
                    <Typography variant="body1" gutterBottom >
                        In <Code>/src/constants.ts</Code>, check that <Code>backend</Code> is set to your
                        domain URI. For example, <Code>https://secure.gooddata.com</Code> or{" "}
                        <Code>https://developer.na.gooddata.com</Code>.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom >
                        In the root of the boilerplate, run <Code>yarn refresh-md</Code>, the terminal then
                        will prompt you to enter <Code>Username/Password</Code> and <Code>workspace</Code>
                        selection.
                        <br />
                        After that, the script will create a file <Code>/src/md/full.ts</Code> which will
                        contain all <Code>MD</Code> objects, metrics and insights that are in the selected
                        <Code>workspace</Code>.
                        <br />
                        You will be able to utilize those generated objects. To read more about generating MD
                        objects, refer to <Code>npm run refresh-md</Code> section in <Code>README.md</Code>
                        file.
                        <br />
                        The script will also print out a workspace ID for the project used for the generating.
                        You can use this value in <Code>/src/constants.ts</Code> to set the{" "}
                        <Code>workspace</Code> property.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom >
                        In <Code>Home.tsx</Code>, replace <Code>Place your content here</Code> with actual code.
                    </Typography>
                    <Typography variant="body1" gutterBottom >
                        For example, <Code> {`<InsightView insight={Md.Insights.Headline}/>`}</Code>. We
                        access the <Code>Headline</Code> identifier through the generated <Code>MD</Code>
                        objects.
                        <br />
                        The main benefit of utilizing the generated MD objects is that you have the access to
                        all MD objects, metrics and insights in the workspace that you selected.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom >
                        In <Code>/src/routes/AppRouter.tsx</Code>, find the line that says{" "}
                        <Code>DELETE THIS LINE</Code>, and delete it.
                        <br />
                        This removes the redirect to this help page and sets up the default landing page
                        dashboard for your app.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom >
                        Log in to your app at <Link to="/login">/login</Link>.
                    </Typography>
                </li>

                <li>
                    <Typography variant="body1" gutterBottom >
                        Check the headline report on the <Link to="/">Home route</Link>.
                    </Typography>

                     <Box
                        component="div"
                        sx={{ backgroundColor: '#f2f2f2', border: "30px solid #f2f2f2" }}
                    >
                        <Box
                            component="img"
                            src={kpiUri}
                            sx={{ maxWidth: "100%"}}
                            alt="KPI example"
                        />
                    </Box>
                    <Typography variant="body1" gutterBottom >
                        Most likely, the value of your headline report would be different. As long as you do
                        not see an error, you are good to go. If you do see an error, please use one of the{" "}
                        <a href="https://sdk.gooddata.com/gooddata-ui/docs/support_options.html">
                            GoodData.UI support options
                        </a>
                        .
                    </Typography>
                </li>
            </ol>

            <Typography variant="body1" gutterBottom > Now, you are ready to play around with your app.  </Typography>

            <Typography variant="h5" component="div" gutterBottom >
                <Box sx={{ fontWeight: 'bold' }}>
                Things to try next
                </Box>
            </Typography>

            <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }} >
                Add a page (route)
            </Typography>

            <ol>
                <li>
                    <Typography variant="body1" gutterBottom >
                        Duplicate a route in <Code>/src/routes</Code>.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" gutterBottom >
                        Add the new route to <Code>/src/routes/AppRouter.tsx</Code>.
                    </Typography>
                </li>
            </ol>

            <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }} >
                Add a link to the navigation / menu
            </Typography>

            <Typography variant="body1" gutterBottom >
                Add a new <Code>{`<NavLink>`}</Code> component to{" "}
                <Code>/src/components/Header/Links.tsx</Code>.
            </Typography>

            <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }} >
                Add the multi-tenant functionality and the optional workspace picker
            </Typography>

            <Typography variant="body1" gutterBottom >
            <ul>
                <li>
                    The <Code>Workspace</Code> context object in <Code>/src/contexts/Workspace.tsx</Code>{" "}
                    stores the actual workspace ID and provides it to the rest of the app. It also stores it
                    in URL query string so that the app can be easily embedded or linked with a particular
                    workspace pre-selected. If no workspace ID is found in the URL, <Code>workspace</Code>{" "}
                    from <Code>/src/constants.ts</Code> is used as the default value.
                </li>
                <li>
                    The <Code>WorkspaceList</Code> context object in{" "}
                    <Code>/src/contexts/WorkspaceList.tsx</Code> provides a list of all workspaces available
                    for a logged-in user. To allow users to select a workspace within the app, use the
                    WorkspacePicker component in <Code>/src/components/controls/WorkspacePicker.tsx</Code>.
                </li>
                <li>
                    To filter workspaces available for the user by workspace name, use{" "}
                    <Code>workspaceFilter</Code> in <Code>/src/constants.ts</Code>.
                </li>
            </ul>
            </Typography>

            <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                Add an example from the Examples Gallery
            </Typography>

            <Typography variant="body1" gutterBottom >
                Explore the <a href="https://gdui-examples.herokuapp.com/">Examples Gallery</a> and try out
                some code snippets.
            </Typography>

            <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                Deploy your app to <a href="https://www.heroku.com/">Heroku</a>
            </Typography>

            <Typography variant="body1" gutterBottom >
            <ol>
                <li>
                    <p>
                        Create a new Heroku app with the{" "}
                        <a href="https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack">
                            create-react-app buildpack
                        </a>{" "}
                        (<Code>mars/create-react-app</Code>).
                    </p>
                    <Pre>{`heroku create $APP_NAME --buildpack mars/create-react-app`}</Pre>
                </li>
                <li>
                    Commit your changes.
                    <Pre>{`git add .git commit -m "Setup Heroku deployment"`}</Pre>
                </li>
                <li>
                    Send a request to <a href="https://support.gooddata.com/">GoodData Support</a> to allow
                    cross-domain requests for your domains.
                    <br />
                    In the request, include the domain of your app (for example,{" "}
                    <Code>gooddata-examples.herokuapp.com</Code>) and the target GoodData domain (for example,{" "}
                    <Code>developer.na.gooddata.com</Code>).
                    <br />
                    <b>NOTE:</b> If cross-domain requests are not allowed, you will not be able to log in and
                    will see a cross-domain error message.
                </li>
                <li>
                    Trigger deployment, and open your app in a browser.
                    <Pre>{`git push heroku master heroku open`}</Pre>
                </li>
            </ol>
            </Typography>
        </Page>
    );
};

export default Welcome;
