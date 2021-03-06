import React from "react";
import { makeStyles } from "@mui/styles";
import Head from "next/head";
//** */
import TopBar from "./topBar";
import NavBar from "./navBar";


const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100vh",
    overflow: "hidden",
    width: "100vw",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

function Layout({ children, title }: any) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale-1.0, width-device-width" />
      </Head>
      <div className={classes.root}>
        <TopBar/>
        <NavBar/>

        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>{children}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Layout;
