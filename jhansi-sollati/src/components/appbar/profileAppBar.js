import {AppBar,Toolbar, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import {motion } from "framer-motion";



const ProfileAppBar = (props)=>{
       

    return (
        <>
        <AppBar position="static"color='secondary'className="profile-appbar">
            <Toolbar >
                <IconButton className="appBar-menuIcon" onClick={props.handleMenuClick}>

                    <MenuIcon/>

                </IconButton>

             {props.appBarLogo && (<motion.h3 className="appBarLogo"
                                    animate={{scale: 1.25}}>JS</motion.h3>)}
               
            </Toolbar>
            

        </AppBar>
    
        </>
        
    )
}

export default ProfileAppBar;