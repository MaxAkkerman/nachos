import Grid from "@material-ui/core/Grid";
import logo3 from "../../static/media/image 9.png";
import logo2 from "../../static/media/Frame (1).png";
import logo1 from "../../static/media/Frame (2).png";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    img: {
        marginLeft: "16px",
        width: "100%",
        height: "100%",
        "@media (min-width : 950px) and (max-width : 1220px)": {
            width: "20%",
            height: "auto",
            objectFit: "contain",
        },
        "@media (max-width : 949px)": {
            width: "20%",
            height: "auto",
            objectFit: "contain",
        },
        "@media (min-width : 319px) and (max-width : 760px)": {
            marginLeft: "8px",
        },

    },
    imgLogo: {
        marginLeft: "16px",
        width: "166px",
        height: "100%",
        "@media (min-width : 950px) and (max-width : 1220px)": {
            width: "60%",
            height: "auto",
            objectFit: "contain",
        },
        "@media (max-width : 949px)": {
            width: "60%",
            height: "auto",
            objectFit: "contain",
        },
        "@media (min-width : 319px) and (max-width : 760px)": {
            width: "70%",
            height: "auto",
            objectFit: "contain",
            marginLeft: "0px",
        },
    },
    imgContainer: {
        display: "flex",
        width: "292px",
        marginLeft: "48px",
        marginTop: "16px",
        height: "48px",
        "@media (min-width : 950px) and (max-width : 1220px)": {
            width: "20%",
            marginLeft: "48px",
            height: "48px",
        },
        "@media (min-width : 760px) and (max-width : 949px)": {
            width: "29%",
            marginLeft: "48px",
            height: "48px",
            marginTop:"23px"
        },
        "@media (min-width : 319px) and (max-width : 760px)": {
            width: "120px",
            marginLeft: "16px",
            height: "24px",
            marginTop:"16px"
        },
    },
});

function Logo() {
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.imgContainer}>
                <img className={classes.imgLogo} src={logo3} alt={"logo"}/>
                <img className={classes.img} src={logo2} alt={"logo1"}/>
                <img className={classes.img} src={logo1} alt={"logo2"}/>
            </Grid>
        </>
    )
}

export default Logo
