import Grid from "@material-ui/core/Grid";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    winnersHeaderText1: {
        fontFamily: "Lora",
        fontStyle: "Regular",
        fontSize: "36px",
        lineHeight: "32px",
        align: "Center",
        verticalAlign: "Center",
        color: "#F9F9F8",
        marginBottom: "16px",
        textAlign: "center"
    },
    winnersHeaderText2: {
        textAlign: "center",
        marginTop: "8px",
        fontFamily: "Fira Sans",
        fontStyle: "Regular",
        fontSize: "16px",
        lineHeight: "16px",
        align: "Center",
        verticalAlign: "Center",
        color: "#F9F9F8",
        paragraphSpacing: "8px"
    },
    winnersHeaderText3: {
        fontFamily: "Fira Sans",
        fontStyle: "Regular",
        fontSize: "17px",
        lineHeight: "25px",
        align: "Center",
        verticalAlign: "Center",
        color: "#F9F9F8",
    },
    winnersHeader: {
        display: "flex",
        flexDirection: "column",
    },
})

function WinnersHeader() {
    const classes = useStyles();

    return (
        <Grid className={classes.winnersHeader}>
            <span className={classes.winnersHeaderText1}>
                Победители Розыгрыша
            </span>
            <span className={classes.winnersHeaderText2}>
                    Все победители будут опубликованы не позднее 31 декабря 2020 года.
            </span>
            <span className={classes.winnersHeaderText2}>
                    Чтобы проверить победу, введите номер телефона:
            </span>
        </Grid>
    )
}

export default WinnersHeader
