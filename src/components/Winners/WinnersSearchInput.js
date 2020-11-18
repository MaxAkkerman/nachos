import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputMask from 'react-input-mask';

const useStyles = makeStyles({
    winnersSearchInput: {
        marginTop: "16px",
        borderRadius: "3px",
        fontSize: "20px",
        width: "288px",
        border: "1px solid #000",
        minHeight: "20px",
        height: "40px",
        background: "#FFFFFF"
    },
    winnersInputTN: {
        border: "none",
        outline: "none",
        background: "white",
        width: "236px",
        height: "24px",
        marginTop: "8px",
        marginLeft: "16px",
    },
    winnersChangePrizeType: {
        display: "flex",
        flexDirection: "row"
    },

    winnersButtonsChangeType: {
        background: "#C84916",
        marginTop: "30px",
        borderRadius: "4px",
        width: "100%",
        height: "44px",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        fontSize: "17px",
        textTransform: "none",
        '&:hover': {
            backgroundColor: '#FFFFFF',
        },
    },
    winnersButtonsChangetext: {
        fontFamily: "Fira Sans",
        fontStyle: "Regular",
        fontSize: "17px",
        lineHeight: "25px",
        align: "Center",
        verticalAlign: "Center",
        width: "200px",
        color: "#F2F2F2",
    },
    winnersButtonsChangelabel: {
        color: "#F2F2F2",
        width: "200px",
        '&:hover': {
            color: '#333333',
        },
    }
});


function WinnersSearchInput(props) {

    const classes = useStyles();
    const [tellNumber, setTellNumber] = useState("")

    function handleTellNumber(e) {
        setTellNumber(e.target.value)
    }

    function handleChoosePeriod(e) {
        props.getData(e.currentTarget.id)
    }

    return (
        <>
            <Grid className={classes.winnersSearchInput}>
                <InputMask
                    className={classes.winnersInputTN}
                    maskChar={"_"}
                    alwaysShowMask={true}
                    onChange={(e) => handleTellNumber(e)}
                    value={tellNumber}
                    mask={"+7(999) 999-99-99"}
                />
                <SearchIcon
                    style={{marginRight: "8px", color: "#c84916", verticalAlign: "middle"}}
                />
            </Grid>

            <Grid className={classes.winnersChangePrizeType}>

                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button id={"day"} onClick={(e) => handleChoosePeriod(e)} classes={{
                        root: classes.winnersButtonsChangeType,
                        text: classes.winnersButtonsChangetext,
                        label: classes.winnersButtonsChangelabel
                    }}>
                        Ежедневный приз
                    </Button>
                    <Button id={"week"} onClick={(e) => handleChoosePeriod(e)} classes={{
                        root: classes.winnersButtonsChangeType,
                        text: classes.winnersButtonsChangetext,
                        label: classes.winnersButtonsChangelabel
                    }}>
                        Еженедельный приз
                    </Button>
                    <Button id={"main"} classes={{
                        root: classes.winnersButtonsChangeType,
                        text: classes.winnersButtonsChangetext,
                        label: classes.winnersButtonsChangelabel
                    }}>
                        Главный приз
                    </Button>

                </ButtonGroup>

            </Grid>

        </>
    )
}

export default WinnersSearchInput

