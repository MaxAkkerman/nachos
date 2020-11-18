import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import BgImage from "../BgImage/BgImage";
import img6 from "../../static/media/bg/Vector.png";
import FireMidMobile from "../../static/media/mobile/fireMidMobile.png";

const useStyles = makeStyles({
    root: {
        display:"flex",
        width: "100%",
        height: "720px",
        flexDirection: "column",
        "@media (min-width : 950px) and (max-width : 1220px)": {
            height: "550px",
        },
        "@media (min-width : 760px) and (max-width : 949px)": {
            height: "550px",
        },
        "@media (min-width : 319px) and (max-width : 759px)": {
            height:"895px",
        }
    },
    advInfo: {
        display: "flex",
        marginLeft: "48px",
        marginTop: "16px",
        height: "350px",
        flexDirection: "column",
        width:"569px",
        "@media (min-width : 950px) and (max-width : 1220px)": {
            width: "595px",
            height: "373px",
        },
        "@media (min-width : 760px) and (max-width : 949px)": {
            top: "283px",
            right: "262px",
            width: "314px",
            minWidth:"unset",
            marginTop: "26px",
        },
        "@media (min-width : 319px) and (max-width : 759px)": {
            marginTop: "0px",
            marginLeft: "16px",
            marginRight: "16px",
            width: "unset",
            height:"420px",
        }
    },
    text1: {
        fontFamily: "Lora",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "54px",
        lineHeight: "112%",
        letterSpacing: "1px",
        color: "#FFFFFF",
        marginBottom: "16px",
        width:"435px",
        "@media (max-width : 1220px)": {
            fontSize: "35px",
            width:"379px",
        },
        "@media (max-width : 949px)": {
            width: "100%",
            fontSize: "38px",
        },
        "@media (max-width : 759px)": {
            marginBottom: "8px",
            fontSize: "40px",
        }
    },
    text2: {
        fontFamily: "Fira Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "31px",
        color: "#FFFFFF",
        marginBottom:"26px",
        "@media (min-width : 950px) and (max-width : 1220px)": {
            fontSize: "16px",
            lineHeight: "26px",
            width:"405px"
        },
        "@media (min-width : 760px) and (max-width : 949px)": {
            fontSize: "16px",
            lineHeight: "27px",
            marginBottom:"unset",
            width:"100%"
        },
        "@media (max-width : 759px)": {
            marginBottom: "16px",
            fontWeight: "unset",
            lineHeight: "26px",
            fontSize: "16px",
        }
    },
    text3: {
        fontFamily: "Fira Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "31px",
        color: "#FFFFFF",
        marginBottom:"26px",
        "@media (min-width : 950px) and (max-width : 1220px)": {
            fontSize: "18px",
            lineHeight: "25px",
        },
        "@media (min-width : 760px) and (max-width : 949px)": {
            fontSize: "16px",
        },
        "@media (max-width : 759px)": {
            fontWeight: "unset",
            lineHeight: "25px",
            fontSize: "18px",
        }
    },
    btn: {
        background: "#C84916",
        boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.13)",
        borderRadius: "6px",
        width:"312px",
        height: "56px",
        outline:"none",
        borderStyle:"none",
        "@media (min-width : 950px) and (max-width : 1220px)": {
            width:"250px",
            height:"45px"
        },
        "@media (min-width : 760px) and (max-width : 949px)": {
            width:"250px",
            height: "45px",
            margin:"auto 0 auto 0"
        },
        "@media (min-width : 319px) and (max-width : 759px)": {
            width:"auto",
        }

    },
    img6: {
        marginBottom:"-5px",
        width: "100%",
        maxHeight:"225px",
        zIndex: "0",
        "@media (min-width : 760px) and (max-width : 949px)": {
            width:"100%",
            height: "auto",
            margin:"auto 0 0 0",
            maxHeight:"151px"
        },
        "@media (min-width : 319) and (max-width : 759px)": {
            width:"558px",
            height: "65px",
            margin:"auto 0 0 0",
            maxHeight:"151px"
        }
    },
    FireMidMobile:{
        width: "558px",
        height: "72px",
        margin:"auto 0 0 0",
        position: "relative",
        left: "-108px",
        top:"unset"
    }
});

function InfoBlock(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>

            <Grid className={classes.advInfo}>
               <Grid className={classes.text1}>
                    Чертовски хорошие начосы!
               </Grid>
                <Grid className={classes.text2}>
                    Купи пачку начасов в Нагнате или Шестерочке, зарегистрируй чек и получи возможность выиграть крутые призы! Главный приз — путешествие в Португалию, чтобы вживую увидеть пасть дьявола «Boca de inferno»
                </Grid>
                <button className={classes.btn}>
                    <span className={classes.text3}>
                        Зарегестрировать чек
                    </span>
                </button>
            </Grid>

            <BgImage
            isMobile={props.isMobile}/>
            <img className={classes.img6} src={props.isMobile - 630 < 320 ? img6 : FireMidMobile} alt={"img6"}/>
        </Grid>

    )
}

export default InfoBlock