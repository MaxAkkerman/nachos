import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Settings} from "./MenuSettings"
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    button: {
        border: "none",
        outline: "none",
        background: "none",
        fontFamily: "Fira Sans",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "25px",
        alignItems: "center",
        color: "#ffffff",
        flexDirection: "row",
        "@media (min-width : 950px) and (max-width : 1220px)": {
            fontSize: "15px",
        }
    },
    menuContainer: {
        margin: "28px auto",
        flexDirection: "row",
        display: "flex",
    }
});

function ScrollTo(x, y) {
    setInterval(function () {
        if (y <= 800) window.scroll(x, y += 10); else clearInterval(ScrollTo)
    }, 5);
}

function Menu() {

    const classes = useStyles();

    function handleClick(e) {
        switch (e.target.value) {
            case "Победители":
                console.log("here")
                ScrollTo(0, 0)
                break;
            // case 4:
            //
            //     break;
            // case 5:
            //
            //     break;
            default:
                return
        }
    }

    return (
        <>
            <Grid className={classes.menuContainer}>
                {Settings.map(item =>

                    <button
                        onClick={(e) => handleClick(e)}
                        value={item.option}
                        key={item.option}
                        className={classes.button}
                    >
                        {item.option}
                    </button>
                            )
                }
            </Grid>
        </>

    )
}

export default Menu
