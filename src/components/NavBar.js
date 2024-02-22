import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Avatar, Button } from '@mui/material';
import Logo from '../icons/LogoIcon';
import HomeIcon from '../icons/HomeIcon';
import ActivityIcon from '../icons/ActivityIcon';
import MessageIcon from '../icons/MessageIcon';
import LayersIcon from '../icons/LayersIcon';
import BarChartIcon from '../icons/BarChartIcon';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import SettingsIcon from '../icons/SettingsIcon';
import PlusIcon from '../icons/PlusIcon';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import  avatar from "../images/logo.svg"

const drawerWidth = 70;
const toolBarHeight = 60
const appBarBackGroundColor = '#FFFFFF'

export default function NavBar({ open, handleOpen }) {
    const handleClick = () => {
        // console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        // console.info('You clicked the delete icon.');
    };



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                    height: `${toolBarHeight}px`,
                }}

                style={{
                    boxShadow: 'None',
                }}
            >
                <Toolbar
                    style={{
                        backgroundColor: `${appBarBackGroundColor}`,
                        borderBottom: '1px solid #E4E4E7',
                        padding: '0px 10px',
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button><HomeIcon /></Button>
                        <Stack direction="row" spacing={1}>
                            <Chip
                                label="Overview"
                                variant="outlined"
                                onClick={handleClick}
                                sx={{
                                    borderRadius: '10px',
                                    width: '125px',
                                    height: '40px',
                                    borderColor: "#F3F2FC",
                                    color: "#8D8D8D"
                                }}
                            // onDelete={handleDelete}
                            />
                            <Chip
                                label="Customers"
                                variant="outlined"
                                onClick={handleClick}
                                onDelete={handleDelete}
                                deleteIcon={<CloseIcon sx={{ fill: '#5E5ADB' }} />}
                                sx={{
                                    borderRadius: '10px',
                                    width: '125px',
                                    height: '40px',
                                    backgroundColor: 'rgba(94, 90, 219, 0.05)',
                                    border: '1px solid rgba(94, 90, 219, 0.15)',
                                    color: '#5E5ADB'
                                }}
                            />
                            <Chip
                                label="Products"
                                variant="outlined"
                                onClick={handleClick}
                                // onDelete={handleDelete}
                                sx={{
                                    borderRadius: '10px',
                                    width: '125px',
                                    height: '40px',
                                    borderColor: "#F3F2FC",
                                    color: "#8D8D8D"
                                }}
                            />
                            <Chip
                                label="Settings"
                                variant="outlined"
                                onClick={handleClick}
                                // onDelete={handleDelete}
                                sx={{
                                    borderRadius: '10px',
                                    width: '125px',
                                    height: '40px',
                                    borderColor: "#F3F2FC",
                                    color: "#8D8D8D"
                                }}
                            />
                            <Chip
                                label="+"
                                variant="outlined"
                                onClick={handleClick}
                                sx={{
                                    borderRadius: '10px',
                                    height: '40px',
                                    backgroundColor: 'rgba(94, 90, 219, 0.05)',
                                    border: '1px solid rgba(94, 90, 219, 0.15)',
                                    color: '#5E5ADB',
                                    fontSize: '35px',
                                    paddingBottom: "2px",
                                    fontWeight: "300"
                                }}
                            />
                        </Stack>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Stack direction="row" spacing={1}>
                            <Chip
                                label="Add Widget"
                                variant="outlined"
                                onClick={handleOpen}
                                icon={<AddIcon sx={{ fill: '#5E5ADB' }}/>}
                                sx={{
                                    borderRadius: '10px',
                                    minWidth: '125px',
                                    height: '40px',
                                    backgroundColor: 'rgba(94, 90, 219, 0.05)',
                                    border: '1px solid rgba(94, 90, 219, 0.15)',
                                    color: '#5E5ADB'
                                }}
                            />
                        </Stack>
                        <Button><SettingsIcon /></Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <div>
                    <Toolbar sx={{ alignItems: "end" }}>
                        <Logo />
                    </Toolbar>
                    <List sx={{ paddingTop: '20px' }}>
                        {[<ActivityIcon />, <MessageIcon />, <LayersIcon />, <BarChartIcon />].map((item, index) => (
                            <ListItem disablePadding>
                                <ListItemButton sx={{ justifyContent: 'center' }}>
                                    <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                                        {item}
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </div>
                
                <Button sx={{ position: 'absolute', bottom: "20px" }}>
                    <Avatar alt="Remy Sharp" src={avatar} sx={{ width: "50px", height: "50px"}}/>
                </Button>
            </Drawer>
        </Box>
    );
}