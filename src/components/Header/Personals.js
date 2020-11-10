import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    text: {
        fontFamily: "Fira Sans",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "25px",
        display: "flex",
        alignItems: "center",
        color: "#FFFFFF",
    },
    button: {
        border: "2px solid #FFFFFF",
        outline: "none",
        background: "none",
        boxSizing: "border-box",
        borderRadius: "6px",
        width: "192.5px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    menuContainer: {
        marginTop: "24px",
        marginRight: "48px",
        marginLeft: "auto"
    }

});


function Personals() {
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.menuContainer}>
                <button className={classes.button}>
                        <span className={classes.text}>
                            Личный кабинет
                        </span>
                </button>
            </Grid>


        </>

    )
}

export default Personals
