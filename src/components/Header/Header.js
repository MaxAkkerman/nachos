import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Logo from "./Logo"
import Menu from "./Menu"
import Personals from "./Personals"
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    root: {
        display: "flex",
        width: "100%",
        height: "80px",
        "@media (min-width : 319px) and (max-width : 760px)": {
            height: "72px",
        },
    },
    menuMobile: {
        height: "91%",
        fill: "#FFFFFF",
        margin: "0 13px auto",
        width: "60px",
        "@media (min-width : 319px) and (max-width : 760px)": {
            width: "33px",
            height: "32px",
            margin: "0px",
        },
    },
    menuIcon: {
        marginTop: "13px",
        display: "flex",
        marginLeft: "auto",
        marginRight: "10px",
        "@media (min-width : 319px) and (max-width : 760px)": {
            margin: "15px 16px unset auto"
        },
    }
});

function Header(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Logo
                isMobile={props.isMobile}
            />
            {props.isMobile ?
                <>
                    <Menu/>
                    <Personals/>
                </>
                :
                <Grid className={classes.menuIcon}>
                    <MenuIcon className={classes.menuMobile}/>
                </Grid>
            }
        </Grid>

    )
}

export default Header