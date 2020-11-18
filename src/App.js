import './App.css';
import React, {useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "./components/Header/Header";
import InfoBlock from "./components/InfoBlock/InfoBlock";
import Winners from "./components/Winners/Winners";
import Footer from "./components/Footer/Footer";
import Grid from "@material-ui/core/Grid";
import bg from "./static/media/Rectangle.png"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import bgMobile from "./static/media/mobile/bgMountainsMobile.png"

const useStyles = makeStyles({
    bg: {
        margin: "0",
        width: "100%",
        height: "800px",
        padding: "0",
        zIndex: "-5",
        position: "absolute",
    },
    headAndInfoWrapper: {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        '@media (max-width:325px)': {
            height: '967px',
            backgroundImage: `url(${bgMobile})`,
        }
    },
});


function App() {
    const classes = useStyles();

    const isMobile = useMediaQuery('(min-width:950px')
    const [onData, setOnData] = useState([])

    async function getData(url) {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Actie-Promo-Action': '0a3cfda0-21fb-4510-878a-8016a0c18e15'
            },

        });
        return await response.json();
    }

    function handleSearch() {
        getData("https://stage.actie.ru/api/v1/checks/winners")
            .then((data) => {
                setOnData(data)
                console.log(data);
            })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }

    useEffect(() => {
        handleSearch()
    }, [])


    return (
        <div className="App">
            <Grid className={classes.headAndInfoWrapper}>
                <Header
                    isMobile={isMobile}
                />
                <InfoBlock
                    isMobile={isMobile}
                />
            </Grid>
            {isMobile ?
                <Winners
                    onData={onData}
                />
                :
                null
            }
            <Footer
                isMobile={isMobile}
            />
        </div>
    );
}

export default App;
