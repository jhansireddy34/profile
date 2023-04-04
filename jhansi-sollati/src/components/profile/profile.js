import {AppBar,Toolbar,Grid} from "@mui/material";
import ProfileCard from "../profilecard/profileCard";
import {useState,useEffect} from 'react';



const Profile = (props)=>{
  const [text, setText] = useState("")
  const [fullText, setFullText] = useState(props.text)
  const [index, setIndex] = useState(0)
   

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 50)
     
    }
   
  }, [index])

    return (
        <>
        
        
        <Grid container spacing={2}className={"profile"}>
      

        
   
        <Grid xs={8} item={true}>
          <h3 className="welcome"> Welcome!</h3>
        <h3>{text}</h3>
        </Grid>
        </Grid>
         




        </>
    )
}

export default Profile;