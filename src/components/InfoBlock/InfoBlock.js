import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        display:"flex",
        width: "100%",
        height: "720px",
    },
    advInfo: {
        display: "flex",
        marginLeft: "48px",
        marginTop: "16px",
        height: "350px",
        flexDirection: "column",
        width:"569px"
    },
    advInfoMobile: {
        display: "flex",
        width: "595px",
        margin:"0px 16px 0px 16px",
        height: "373px",
        flexDirection: "column"
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
        width:"435px"
    },
    text1Mobile:{
        fontFamily: "Lora",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "40px",
        lineHeight: "112%",
        letterSpacing: "1px",
        color: "#FFFFFF",
        marginBottom: "16px",
        width:"288px",
        height:"136px"
    },
    text2: {
        fontFamily: "Fira Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "31px",
        color: "#FFFFFF",
        marginBottom:"26px"
    },
    text3Mobile: {
        fontFamily: "Fira Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "25px",
        color: "#FFFFFF",
        marginBottom:"26px"
    },
    text2Mobile: {
        fontFamily: "Fira Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "26px",
        color: "#FFFFFF",
        marginBottom:"16px"
    },
    btn: {
        background: "#C84916",
        boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.13)",
        borderRadius: "6px",
        width:"312px",
        height: "56px"
    },
    btnMobile: {
        background: "#C84916",
        boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.13)",
        borderRadius: "6px",
        width:"288px",
        height: "56px"
    },

});

function InfoBlock(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Grid className={!props.isMobile ? classes.advInfoMobile : classes.advInfo}>
               <Grid className={!props.isMobile ? classes.text1Mobile : classes.text1}>
                    Чертовски хорошие начосы!
               </Grid>
                <Grid className={!props.isMobile ? classes.text2Mobile : classes.text2}>
                    Купи пачку начасов в Нагнате или Шестерочке, зарегистрируй чек и получи возможность выиграть крутые призы! Главный приз — путешествие в Португалию, чтобы вживую увидеть пасть дьявола «Boca de inferno»
                </Grid>
                <button className={!props.isMobile ? classes.btnMobile : classes.btn}>
                    <span className={!props.isMobile ? classes.text3Mobile : classes.text2}>
                        Зарегестрировать чек
                    </span>
                </button>
            </Grid>

        </Grid>

    )
}

export default InfoBlock