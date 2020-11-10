import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Arrow from "./../../static/media/basementImgs/to top.png"

const useStyles = makeStyles({
    footerContainer: {
        background: "#C84916",
        width: "100%",
        height: "103px",
        border: "none",
        display: "flex",
    },
    basementTextProperties: {
        marginLeft: "48px",
        marginTop: "26px",
        width: "148px",
        height: "48px",
        flex: "0.2",
        fontFamily: "Fira Sans",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "13px",
        lineHeight: "16px",
        color: "#F9F9F8",
    },
    basementContacts: {
        marginTop: "16px",
        display: "flex",
        flexDirection: "column",
        width: "630px",
        height: "65px",
        flex: "0.6",
        alignItems: "center",
    },
    basementArrow: {
        marginTop: "26px",
        flex: "0.2",
        width: "50px",
        height: "50px",
        textAlign: "right",
        marginRight: "48px"
    },
    basementCallInfo: {
        marginTop: "8px",
        fontFamily: "Fira Sans",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "20px",
        color: "#FFFFFF",
    },
    basementCallNumber: {
        fontFamily: "Fira Sans",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "23px",
        lineHeight: "32px",
        color: "#120806",
    },
    footerContainerMobile: {
        width: "100%",
        border: "none",
        height: "164px",
        display: "flex",
        background: "#C84916",
        flexDirection: "column-reverse",
        justifyContent: "flex-end",
    },
    basementTextPropertiesMobile: {
        color: "#F9F9F8",
        fontSize: "13px",
        fontStyle: "normal",
        fontFamily: "Fira Sans",
        fontWeight: "normal",
        lineHeight: "16px",
        textAlign: "center",
        marginBottom: "29px",
    },
    basementContactsMobile: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "23px",
    },
    basementCallInfoMobile: {
        color: "#FFFFFF",
        fontSize: "16px",
        fontStyle: "normal",
        margin: "1px 17px 8px 17px",
        fontFamily: "Fira Sans",
        fontWeight: "normal",
        lineHeight: "20px",
        textAlign: "center",
        width:"209px"
    }
});


function Footer(props) {
    const classes = useStyles();

    function handleArrow() {
        let t, s;
        s = document.body.scrollTop || window.pageYOffset;
        t = setInterval(function () {
            if (s > 0) window.scroll(0, s -= 10); else clearInterval(t)
        }, 5);
    }

    return (
        <Grid className={props.isMobile ? classes.footerContainer : classes.footerContainerMobile}>

            <Grid className={props.isMobile ? classes.basementTextProperties : classes.basementTextPropertiesMobile}>
                <Grid>
                    © 2020, «Акти»
                </Grid>
                <Grid>
                    Все права защищены.
                </Grid>
            </Grid>

            <Grid className={props.isMobile ? classes.basementContacts : classes.basementContactsMobile}>
                <Grid className={classes.basementCallNumber}>
                    8 (909) 444-45-13
                </Grid>
                <Grid className={props.isMobile ? classes.basementCallInfo : classes.basementCallInfoMobile}>
                    Звонок по России бесплатный. Пн-Сб с 9:00 до 19:00 (МСК)
                </Grid>
            </Grid>
            {props.isMobile ?
                <Grid onClick={() => handleArrow()} className={classes.basementArrow}>
                    <img style={{textAlign: "right"}} src={Arrow} alt={"arrow"}/>
                </Grid>
                :
                null
            }
        </Grid>
    );
}

export default Footer;
