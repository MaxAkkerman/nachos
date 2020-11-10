import React, {useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import img1 from "./../../static/media/bg/image 1.png";
import img2 from "./../../static/media/bg/image 13.png";
import Grid from "@material-ui/core/Grid";
import img3 from "./../../static/media/bg/image 14.png"
import img4 from "./../../static/media/bg/image 15.png"
import img5 from "./../../static/media/bg/image 30.png"

const useStyles = makeStyles({
    img1: {
        right: "76px",
        position: "absolute",
        top: "171px",
        zIndex: "2",
        width: "574px",
        minWidth: "300px"
    },
    img1Mobile: {
        height: "296px",
        right: "13px",
        position: "absolute",
        top: "524px",
        zIndex: "2",
        width: "296px",
    },
    img2: {
        right: "206px",
        position: "absolute",
        top: "640px",
        width: "212px",
        height: "190px",
        zIndex: "1"
    },
    img2Mobile: {
        right: "67px",
        position: "absolute",
        top: "770px",
        width: "113px",
        height: "99px",
        zIndex: "1"
    },
    img3: {
        right: "58px",
        position: "absolute",
        top: "440px",
        width: "177px",
        height: "157px",
        zIndex: "2"
    },
    img3Mobile: {
        right: "-10px",
        position: "absolute",
        top: "665px",
        width: "113px",
        height: "99px",
        zIndex: "2"
    },
    img4: {
        right: "473px",
        position: "absolute",
        top: "369px",
        width: "303px",
        height: "194px",
        zIndex: "1"
    },
    img4Mobile: {
        left: "-47px",
        position: "absolute",
        top: "627px",
        width: "159px",
        height: "101px",
        zIndex: "1"
    },
    img5: {
        right: "360px",
        position: "absolute",
        top: "159px",
        width: "233px",
        height: "153px",
        zIndex: "1"
    },
    advImg: {
    },
});


function BgImage(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.advImg}>
            <img className={props.isMobile ? classes.img1 : classes.img1Mobile} src={img1} alt={"img1"}/>
            <img className={props.isMobile ? classes.img2 : classes.img2Mobile} src={img2} alt={"img2"}/>
            <img className={props.isMobile ? classes.img3 : classes.img3Mobile} src={img3} alt={"img3"}/>
            <img className={props.isMobile ? classes.img4 : classes.img4Mobile} src={img4} alt={"img4"}/>
            {props.isMobile ? <img className={classes.img5} src={img5} alt={"img5"}/> : null}
        </Grid>
    );
}

export default BgImage;
