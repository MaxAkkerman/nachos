import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import WinnersHeader from "./WinnersHeader";
import WinnersSearchInput from "./WinnersSearchInput";
import WinnersViewBlock from "./WinnersViewBlock";
import basement1 from "../../static/media/basementImgs/Vector.png";
import basement2 from "../../static/media/basementImgs/Vector-1.png";
import basement3 from "../../static/media/basementImgs/Vector-2.png";

const useStyles = makeStyles({
    winnersWrapper: {
        width: "100%",
        margin: "59px auto 0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "fit-content",
        minHeight: "500px",
    },
    winnersContainer: {
        width: "100%",
        height: "fit-content",
        maxHeight: "996px",
        padding: "0",
        backgroundColor: "#120806",
        display:"flex",
        flexDirection:"column",
    },
    basement1: {
        position: "absolute",
        width: "100%",
        maxHeight:"225px",
        bottom:"0"
    },
    basement2: {
        position: "absolute",
        width: "100%",
        maxHeight:"225px",
        paddingLeft: '77px',
        bottom:"0"
    },
    basement3: {
        maxHeight:"225px",
        position: "absolute",
        width: "100%",
        right: "68px",
        bottom:"0"
    },
    basementImgWrapper: {
        flexGrow: "3",
        width: "100%",
        height: "300px",
        overflow: "hidden",
        background: "#120806",
        position: "relative",
    },
});



function Winners(props) {
    const classes = useStyles();
    const [data, setData] = useState([])
    function getData(e){
        let filteredData = []

        if(e === "day"){
            filteredData = props.onData.checks && props.onData.checks.filter(item=>
                item.draw_period.length < 10
            )
        }else if(e === "week"){
            filteredData = props.onData.checks && props.onData.checks.filter(item=>
                item.draw_period.length > 10
            )
        }else{
            return
        }
        setData(filteredData)
    }

    return (

        <Grid className={classes.winnersContainer}>
            <Grid className={classes.winnersWrapper}>
                <WinnersHeader />
                <WinnersSearchInput
                    getData={(data)=>getData(data)}
                />
                <WinnersViewBlock
                    data={data}
                />
            </Grid>

            <Grid className={classes.basementImgWrapper}>
                <img className={classes.basement1} src={basement1} alt={"basement1"}/>
                <img className={classes.basement2} src={basement2} alt={"basement2"}/>
                <img className={classes.basement3} src={basement3} alt={"basement3"}/>
            </Grid>

        </Grid>
    )
}

export default Winners

