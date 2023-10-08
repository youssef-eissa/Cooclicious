import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
const [state, setState] = React.useState({
    right: false,
});

const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
    }

    setState({ ...state, [anchor]: open });
};

const list = (anchor) => (
    <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
    >
    <List >
        <ListItem className='col-12 d-flex flex-column'  disablePadding>
            <ListItemButton className='col-12'>
            <Link style={{color:'black',textDecoration:'none',fontFamily: 'Mukta, sans-serif',fontWeight:'bold'}} reloadDocument to='/' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}  className='col-12 text-center navLink'>Home</Link>
                </ListItemButton>
                <ListItemButton className='col-12'>
            <Link style={{color:'black',textDecoration:'none',fontFamily: 'Mukta, sans-serif',fontWeight:'bold'}} reloadDocument to='/about' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}  className='col-12 text-center navLink'>About</Link>
            </ListItemButton>
            <ListItemButton className='col-12'>
            <Link style={{color:'black',textDecoration:'none',fontFamily: 'Mukta, sans-serif',fontWeight:'bold'}} reloadDocument to='/menu' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}  className='col-12 text-center navLink'>Menu</Link>
            </ListItemButton>
            <ListItemButton className='col-12'>
            <Link style={{color:'black',textDecoration:'none',fontFamily: 'Mukta, sans-serif',fontWeight:'bold'}} reloadDocument to='/gallery' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}  className='col-12 text-center navLink'>Gallery</Link>
            </ListItemButton>
            <ListItemButton className='col-12'>
            <Link style={{color:'black',textDecoration:'none',fontFamily: 'Mukta, sans-serif',fontWeight:'bold'}} reloadDocument to='/contact' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}  className='col-12 text-center navLink'>Contact</Link>
                </ListItemButton>

        </ListItem>
    </List>
    <Divider />

    </Box>
);
return (
    <div>
    {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
        <Button sx={{color:'white'}} onClick={toggleDrawer(anchor, true)}><MenuIcon fontSize='large'/></Button>
        <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
        >
            {list(anchor)}
        </Drawer>
        </React.Fragment>
    ))}
    </div>
);
}