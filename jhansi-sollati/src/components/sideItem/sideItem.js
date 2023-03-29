import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


export default function SideItem(props){
   

   return (
    <>
    <ListItem className='sideItem'>
        <ListItemButton onClick = {props.item.handleClick}>
        
              <ListItemText primary={props.item.label} />

        </ListItemButton>

        </ListItem>
    </>

   )




}