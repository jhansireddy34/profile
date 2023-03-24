import {AppBar,Toolbar, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";



const ProfileAppBar = (props)=>{

    return (
        <>
        <AppBar position="static"color='secondary'className="profile-appbar">
            <Toolbar >
                <IconButton className="appBar-menuIcon">

                    <MenuIcon/>
                </IconButton>



            </Toolbar>

        </AppBar>
    
        </>
    )
}

export default ProfileAppBar;