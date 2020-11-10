import './App.css';
import React, {useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "./components/Header/Header";
import InfoBlock from "./components/InfoBlock/InfoBlock";
import Winners from "./components/Winners/Winners";
import Footer from "./components/Footer/Footer";
import img6 from "./static/media/bg/Vector.png";
import Grid from "@material-ui/core/Grid";
import bg from "./static/media/Rectangle.png"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BgImage from "./components/BgImage/BgImage";

const useStyles = makeStyles({
    img6: {
        position: "absolute",
        top: "575px",
        width: "100%",
        height: "225px",
        zIndex: "0"
    },
    img6Mobile: {
        position: "absolute",
        width: "100%",
        height: "85px",
        zIndex: "0",
        marginTop: "115px",
    },
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
    },
    headAndInfoWrapperMobile: {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        height: "1000px"
    }
});


function App() {
    const classes = useStyles();

    const isMobile = useMediaQuery('(min-width:325px')
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
            <Grid className={!isMobile ? classes.headAndInfoWrapperMobile : classes.headAndInfoWrapper}>
                <Header
                    isMobile={isMobile}
                />

                <InfoBlock
                    isMobile={isMobile}
                />

                <img className={!isMobile ? classes.img6Mobile : classes.img6} src={img6} alt={"img6"}/>
            </Grid>

            {isMobile ?
                <Winners
                    onData={onData}
                />
                :
                null
            }

            <BgImage
                isMobile={isMobile}
            />
            <Footer
                isMobile={isMobile}
            />
        </div>
    );
}

export default App;
