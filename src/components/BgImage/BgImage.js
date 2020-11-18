import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import img1 from "../../static/media/bg/imageChips.png";
import img2 from "./../../static/media/bg/image 13.png";
import Grid from "@material-ui/core/Grid";
import img3 from "./../../static/media/bg/image 14.png"
import img4 from "./../../static/media/bg/image 15.png"
import img5 from "./../../static/media/bg/image 30.png"
import imgMain from "../../static/media/bg/imageChipsReady.png"

const useStyles = makeStyles({
    img1: {
        right: "76px",
        position: "absolute",
        top: "91px",
        zIndex: "2",
        width: "94%",
        minWidth: "300px",
        maxWidth:"574px",
        "@media (min-width : 950px) and (max-width : 1220px)": {
            top: "125px",
            right: "64px",
            width: "415px",
            minWidth:"unset"
        },
        "@media (min-width : 760px) and (max-width : 949px)": {
            top: "152px",
            right: "4px",
            width: "372px",
            minWidth:"unset"
        },
        "@media (min-width : 319px) and (max-width : 759px)": {
            top: "44px",
            left: "10px",
            width: "296px",
            minWidth:"unset"
        }
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
        top: "560px",
        width: "212px",
        height: "auto",
        zIndex: "1",
        "@media (min-width : 950px) and (max-width : 1220px)": {
            top: "476px",
            right: "158px",
            width: "160px",
        },
        "@media (min-width : 760px) and (max-width : 949px)": {
            top: "464px",
            right: "86px",
            width: "141px",
            minWidth:"unset"
        },
        "@media (min-width : 319px) and (max-width : 759px)": {
            top: "290px",
            right: "67px",
            width:"111px"
        },
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
        top: "360px",
        width: "177px",
        height: "auto",
        zIndex: "2",
        "@media (min-width : 950px) and (max-width : 1220px)": {
            top: "318px",
            right: "37px",
            width: "138px",
        },
        "@media (min-width : 760px) and (max-width : 949px)": {
            top: "332px",
            right: "-5px",
            width: "106px",
            minWidth:"unset",
        },
        "@media (min-width : 319px) and (max-width : 759px)": {
            top: "181px",
            right: "-10px",
            width: "92px",
        },
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
        top: "289px",
        width: "303px",
        height: "auto",
        zIndex: "1",
        "@media (min-width : 950px) and (max-width : 1220px)": {
            top: "268px",
            right: "356px",
            width: "229px",
        },
        "@media (min-width : 760px) and (max-width : 949px)": {
            top: "283px",
            right: "262px",
            width: "208px",
            minWidth:"unset",
        },
        "@media (min-width : 319px) and (max-width : 759px)": {
            top: "150px",
            left: "-46px",
            width: "159px",
        },
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
        top: "79px",
        width: "233px",
        height: "auto",
        zIndex: "1",
        "@media (min-width : 950px) and (max-width : 1220px)": {
            top: "110px",
            right: "266px",
            width: "185px",
        }
    },
    advImg: {
        flexGrow:"3",
        "@media (min-width : 319px) and (max-width : 759px)": {
           position:"relative"
        },
    },
});

function BgImage(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.advImg}>
            <img className={classes.img1} src={img1} alt={"img1"}/>
            <img className={classes.img2} src={img2} alt={"img2"}/>
            <img className={classes.img3} src={img3} alt={"img3"}/>
            <img className={classes.img4} src={img4} alt={"img4"}/>
            <img src={imgMain} alt={"img4"}/>
            {props.isMobile ? <img className={classes.img5} src={img5} alt={"img5"}/> : null}
        </Grid>
    );
}

export default BgImage;
