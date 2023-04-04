import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import ProfileAppBar from '../appbar/profileAppBar';
import MailIcon from '@mui/icons-material/Mail';
import SideList from '../sideList/sideList';
import {motion} from 'framer-motion';
import JSlogo from '../Logo/logo';
import { Box } from '@mui/material';
import Profile from '../profile/profile';
//import Profile from '../profile/profile';

const about = "Welcome to my profile! I'm a highly motivated React, Python, and Flutter Developer with a passion for creating cutting-edge applications that drive real-world results. As a self-taught developer, I've honed my skills through hands-on experience and a strong dedication to continuous learning. Whether you're looking to develop a game-changing web app or a robust mobile platform, I have the expertise and drive to help you bring your vision to life. Let's work together to build the next generation of money-making applications!"

const intro = "Hi,there.., Jhansi here"

const sideMenu = [{"label": "About","icon": <MailIcon/>,"handleClick": ()=>{} },
{"label": "Skills","icon": <MailIcon/>,"handleClick": ()=>{} },
{"label": "Projects","icon": <MailIcon/>,"handleClick": ()=>{} }];
export default function Scaffold() {
  const [variant,setVariant]=React.useState("permanent")
  const [drawer,setDrawer]=React.useState(true);
  const theme = useTheme();
  const matches = useMediaQuery('(min-width:600px)');
  var [anchor,setAnchor]=React.useState("left");
  React.useEffect(()=> {
    console.log(matches);
    if (!matches){
    setDrawer(()=>false);
    setAnchor(()=>"bottom");
    setVariant(()=>"temporary");
    
    
    }
    else{
      setDrawer(()=>true);
      setVariant(()=>"permanent");
      setAnchor(()=>"left");
      
     
    }

  },[matches]);
 
  const handleMenuClick =()=>{
      setDrawer(()=>!drawer)


  }



  return (
    <div>
      <ProfileAppBar handleMenuClick={handleMenuClick} appBarLogo = {!matches} />
          <Drawer
            variant={variant}
            anchor={anchor}
            open={drawer}
            onClose={handleMenuClick}
            
          >
            <JSlogo />
            <Box height={30}></Box>
            <SideList menuList={sideMenu} />
            
          </Drawer> 
          <Profile text={intro} />
         
    
 
    </div>
  );
}