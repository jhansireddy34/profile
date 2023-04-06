import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


export default function SideItem(props){
   

   return (
    <>
    <ListItem className='sideItem'>
        <ListItemButton onClick = {props.item.handleClick}>
              <a href={props.item.href}>
              <ListItemText className='sideItemText' primary={props.item.label} />
              </a>

        </ListItemButton>

        </ListItem>
    </>

   )




}