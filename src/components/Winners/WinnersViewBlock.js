import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    winnersViewBlock: {
        width: "605.97px",
        height: "48px",
        marginBottom: "7px",
        background: "white",
        borderRadius: "4px",
        display: "flex"
    },
    winnersViewBlockWrapper: {
        display: "flex",
        alignItems: "center",
    },
    winnersViewBlockContainer: {
        width: "605.97px",
        height:"fit-content",
        display: "flex",
        flexDirection: "column",
        margin: "22px auto",
    },
    btn: {
        background: "#120806",
        boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.13)",
        borderRadius: "4px",
        width: "224px",
        height: "40px",
        border: "2px solid #646C70",
        margin: "auto",
        marginTop: "7px",
        '&:hover': {
            backgroundColor: '#FFFFFF',
        },
    },
    winnersBtnText: {
        fontFamily: "Fira Sans",
        fontStyle: "normal",
        fontSize: "17px",
        lineHeight: "25px",
        align: "Center",
        verticalAlign: "Center",
        width: "200px",
        color: "#F9F9F8",
        textTransform:"none"
    },
    winnersBtnLabel: {
        color: "#F2F2F2",
        width: "222px",
        height:"38px",
        '&:hover': {
            color: '#333333',
        },
    }
});


function WinnersViewBlock(props) {
    const classes = useStyles();

    const [dataView, setDataView] = useState([])
    useEffect(()=>{
        setDataView(props.data)
    }, [props])

    return (
        <Grid className={classes.winnersViewBlockContainer}>

            {dataView && dataView.slice(0,5).map((item)=>{

          return(
                    <Grid key={item.fd} className={classes.winnersViewBlock}>
                        <Grid className={classes.winnersViewBlockWrapper}>
                            <Grid style={{width: "178px", marginLeft: "24px"}}>
                                {item.prise}
                            </Grid>
                            <Grid style={{width: "164px", marginLeft: "11px"}}>
                                {item.phone}
                            </Grid>
                            <Grid style={{width: "173px", marginLeft: "34px"}}>
                                {item.draw_period}
                            </Grid>
                        </Grid>
                    </Grid>
          )
            })}

        <Button classes={{
            root: classes.btn,
            text: classes.winnersBtnText,
            label: classes.winnersBtnLabel
        }}>
            Показать еще
        </Button>
        </Grid>
    )
}

export default WinnersViewBlock

