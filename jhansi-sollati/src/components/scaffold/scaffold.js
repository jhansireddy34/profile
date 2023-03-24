import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import ProfileAppBar from '../appbar/profileAppBar';
import MailIcon from '@mui/icons-material/Mail';
import SideList from '../sideList/sideList';


const sideMenu = [{"label": "test","icon": <MailIcon/>,"handleClick": ()=>{} }];
export default function Scaffold() {
    



  return (
    <div>
      <ProfileAppBar/>
          <Drawer className="sidedrawer"
            anchor="left"
            open={true}
            onClose={()=>{}}
          >
            <SideList menuList={sideMenu} />
            
          </Drawer>
    <div></div>
      
    </div>
  );
}