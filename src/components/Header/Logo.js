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
        height: "100%"
    },
    imgLogo: {
        marginLeft: "16px",
        width: "166px",
        height: "100%"
    },

    imgContainer: {
        display: "flex",
        width: "292px",
        marginLeft: "48px",
        marginTop: "16px",
        height: "48px",
    },
    imgContainerMobile: {
        display: "flex",
        width: "150px",
        marginLeft: "16px",
        marginTop: "16px",
        height: "26px",
    },
    imgMobile:{
        marginLeft: "8px",
        width: "24px",
        height: "24px"
    },
    imgLogoMobile:{
        width: "83px",
        height: "24px"
    }

});

function Logo(props) {
    const classes = useStyles();
    return (
        <>
            <Grid className={!props.isMobile ? classes.imgContainerMobile : classes.imgContainer}>
                <img className={!props.isMobile ? classes.imgLogoMobile : classes.imgLogo} src={logo3} alt={"logo"}/>
                <img className={!props.isMobile ? classes.imgMobile : classes.img} src={logo2} alt={"logo1"}/>
                <img className={!props.isMobile ? classes.imgMobile : classes.img} src={logo1} alt={"logo2"}/>
            </Grid>
        </>
    )
}

export default Logo
