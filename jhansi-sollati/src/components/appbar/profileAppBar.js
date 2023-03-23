import {AppBar,Toolbar, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ProfileCard from "../profilecard/profileCard";


const ProfileAppBar = (props)=>{

    return (
        <>
        <AppBar position="static"color='secondary'className="profile-appbar">
            <Toolbar >
                <IconButton>

                    <MenuIcon/>
                </IconButton>



            </Toolbar>

        </AppBar>
    
        </>
    )
}

export default ProfileAppBar;