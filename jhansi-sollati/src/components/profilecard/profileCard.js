
import {Container} from "@mui/material";
import { AnimatePresence,motion } from "framer-motion";





const ProfileCard= (props)=> {
       const nameWords= props.name.split(" ");
       const firstInitial = nameWords[0][0];
       const lastInitial = nameWords[1][0];

return (
    <>
            <AnimatePresence> 
                
    <Container className= "profilecard">
       
            
        
        
   
      
   
    <motion.h1 
    animate={{ opacity: [0,0.5,1],x: [-100,0]}}
    transition={{ duration: 1 }}
    id="hi">  Hi,</motion.h1>
    <motion.h1 id="name"
    animate={{opacity: [0,0.5,1],x: [-100,0]}}
    transition={{delay: 1,duration: 1 }} >
         <span> I'm </span><span id = "firstInitial"> {firstInitial}</span>
         <span>{nameWords[0].slice(1)}</span><span> </span>
         <span id = "lastInitial">{lastInitial}</span>
         <span>{nameWords[1].slice(1)}</span>
   </motion.h1> 
   <motion.h2 id="designation"
   animate={{opacity: [0,0.5,1],x: [-100,0]}}
   transition={{delay: 2,duration: 1 }}>{props.desc}
   </motion.h2>
            <h4>{props.notes}</h4>
     
    
    
    
    
    </Container>
    
    </AnimatePresence>
    
    </>
       )





}
export default ProfileCard;