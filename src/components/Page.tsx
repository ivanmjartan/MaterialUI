import React from "react";
import { Helmet } from "react-helmet";
import cx from "classnames";
import Footer from "./Footer";

import styles from "./Page.module.scss";
import AppHeader from "./HeaderMui/AppHeader";
import { Box } from "@mui/material";

interface IPageProps {
    className?: string;
    mainClassName?: string;
    title?: string;
}

const Page: React.FC<IPageProps> = ({
    children,
    className = null,
    mainClassName = null,
    title = "GoodData App",
}) => {
    return (
        <Box className={cx(styles.Page, className)} sx={{backgroundColor:"background.default"}}>
            <Helmet>
                <title>{title}</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Helmet>
            <AppHeader />
            <main className={cx(styles.Main, mainClassName, "s-page")}>{children}</main>
            <Footer />
        </Box>
    );
};

export default Page;
