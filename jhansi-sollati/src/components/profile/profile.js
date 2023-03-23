import {AppBar,Toolbar,Grid} from "@mui/material";
import ProfileCard from "../profilecard/profileCard";
import ProfileAppBar from "../appbar/profileAppBar";


const Profile = (props)=>{

    return (
        <>
        
        
        <Grid container spacing={2}>
        <Grid xs={12} item={true}>
        <ProfileAppBar />
        </Grid>

        <Grid xs={12}md={3}item={true}>
            
        <ProfileCard name="Jhansi Sollati"desc="Aspiring Developer"notes="React/Flutter/Python"imageUrl="https://i.pinimg.com/280x280_RS/d7/b5/21/d7b5212f77583ae60aa05feb2844aae9.jpg" />
        
          </Grid >




        </Grid>
        </>
    )
}

export default Profile;