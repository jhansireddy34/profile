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
//import Profile from '../profile/profile';


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
            overflow= {"auto"}
          >
            <JSlogo />
            <Box height={30}></Box>
            <SideList menuList={sideMenu} />
            
          </Drawer> 
          
    
 
    </div>
  );
}