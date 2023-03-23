
import {Avatar,Card, CardContent, CardHeader} from "@mui/material";




const ProfileCard= (props)=> {

return (
    <>
    
    <Card  className = "profilecard">
        
        <CardContent className = "profileText">
            <h1>{props.name}</h1>
            <h2>{props.desc}</h2>
            <h4>{props.notes}</h4>
        </CardContent>
    
    
    
    
    </Card>
    
    </>
       )





}
export default ProfileCard;