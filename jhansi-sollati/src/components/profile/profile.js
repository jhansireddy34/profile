import {AppBar,Toolbar,Grid} from "@mui/material";
import ProfileCard from "../profilecard/profileCard";
import ProfileAppBar from "../appbar/profileAppBar";


const Profile = (props)=>{

    return (
        <>
        
        
        <Grid container spacing={2}>
      

        <Grid xs={12}item={true}>
        <Grid container spacing={2}>
   
        <Grid xs={12} item={true}>
        <ProfileCard name="Jhansi Sollati"desc="Aspiring Developer/Business Analyst"notes="React/Flutter/Python" />
        </Grid>
        </Grid>
          </Grid >




        </Grid>
        </>
    )
}

export default Profile;