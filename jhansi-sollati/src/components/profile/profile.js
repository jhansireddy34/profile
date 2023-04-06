import {AppBar,Toolbar,Grid, Box} from "@mui/material";
import ProfileCard from "../profilecard/profileCard";
import {useState,useEffect} from 'react';
import { motion } from "framer-motion";



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
          <h3 sx={{zIndex: 1000}} className="welcome"> Welcome!</h3>
        <h3>{text}</h3>
        
        </Grid>
        </Grid>

        
       </>
         


      

        
    )
}

export default Profile;