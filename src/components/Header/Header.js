import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Logo from "./Logo"
import Menu from "./Menu"
import Personals from "./Personals"
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    root: {
        display:"flex",
        width: "100%",
        height: "80px",
    },
    menuMobile:{
        width:"100%",
        height:"100%",
        fill:"#FFFFFF"
    },
    menuIcon:{
        marginTop:"13px",
        marginLeft:"111px",
        width:"30px",
        height:"30px"
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
                <MenuIcon className={classes.menuMobile} />
                </Grid>
            }
        </Grid>

    )
}

export default Header