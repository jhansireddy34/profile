import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import SideItem from '../sideItem/sideItem';

export default function SideList(props) {


    return (
     <>
  <List>
    {props.menuList.map((item,index) => (
        <Divider>
        <SideItem item={item}/>
        </Divider>
      
    ))}
    
    
    </List>
     </>
 
    )
 
 
 
 
 }