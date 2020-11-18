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
        "@media (min-width : 760px) and (max-width : 949px)": {
            width: "100%",
            height: "125px",
            flexDirection: "column-reverse",
        },
        "@media (min-width : 319px) and (max-width : 759px)": {
            marginTop:"0px",
            height: "176px",
            flexDirection: "column-reverse",
            justifyContent: "flex-end",
        },
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
        '@media (max-width:325px)': {
            textAlign: "center",
            margin: "8px auto 0px auto ",
        },
        "@media (min-width : 760px) and (max-width : 949px)": {
            marginTop: "5px",
            alignSelf:"center",
            display:"flex",
            marginBottom:"unset",
            justifyContent:"center",
            width:"100%",
            marginLeft:"unset"
        },
    },
    basementContacts: {
        marginTop: "16px",
        display: "flex",
        flexDirection: "column",
        width: "630px",
        height: "65px",
        flex: "0.6",
        alignItems: "center",
        '@media (max-width:325px)': {
            marginTop: "23px",
            width: "unset",
            height: "unset",
            flex: "unset"
        },
        "@media (min-width : 760px) and (max-width : 949px)": {
            width: "100%",
        },
        "@media (min-width : 319px) and (max-width : 759px)": {
            marginTop: "23px",
        },
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
        '@media (max-width:325px)': {
            margin: "1px 17px 8px 17px",
            textAlign: "center",
            width: "234px"
        }
    },
    basementCallNumber: {
        fontFamily: "Fira Sans",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "23px",
        lineHeight: "32px",
        color: "#120806",
    },
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
        <Grid className={classes.footerContainer}>

            <Grid className={classes.basementTextProperties}>
                <Grid>
                    © 2020, «Акти»
                </Grid>
                <Grid>
                    Все права защищены.
                </Grid>
            </Grid>

            <Grid className={classes.basementContacts}>
                <Grid className={classes.basementCallNumber}>
                    8 (909) 444-45-13
                </Grid>
                <Grid className={classes.basementCallInfo}>
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
