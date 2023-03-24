import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


export default function SideItem(props){
   console.log(props.item);

   return (
    <>
    <ListItem>
        <ListItemButton onClick = {props.item.handleClick}>
        <ListItemIcon>
                {props.item.icon}
              </ListItemIcon>
              <ListItemText primary={props.item.label} />

        </ListItemButton>

        </ListItem>
    </>

   )




}