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
import { Avatar, Button, InputAdornment, TextField } from '@mui/material';
import Logo from '../icons/LogoIcon';
import Avatarprofile from "../images/Avatarprofile.png"
import HomeIcon from '../icons/HomeIcon';
import ActivityIcon from '../icons/ActivityIcon';
import MessageIcon from '../icons/MessageIcon';
import LayersIcon from '../icons/LayersIcon';
import BarChartIcon from '../icons/BarChartIcon';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import SettingsIcon from '../icons/SettingsIcon';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { navTabs } from '../constants/data';
import DoneIcon from '@mui/icons-material/Done';

const drawerWidth = 70;
const toolBarHeight = 60
const appBarBackGroundColor = '#FFFFFF'

export default function NavBar({ open, handleOpen }) {

    const [newTabfield, setNewTabfield] = React.useState(false)
    const [newTabVal, setNewTabVal] = React.useState('')
    const [tabs, setTabs] = React.useState([...navTabs]);
    const [activePage, setActivePage] = React.useState(3)

    const handleClick = () => {
        if (newTabfield) {
            if (newTabVal !== '')
                setTabs([...tabs, {
                    active: false,
                    editable: false,
                    label: newTabVal,

                }])
            setNewTabfield(false);

        }
        else setNewTabfield(true);

    };

    const handleDelete = () => {

    }


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

                            {tabs?.map((tab, i) => <TextField
                                key={i}
                                value={tab.label}
                                variant="outlined"
                                // onClick={handleClick}
                                onDelete={tab.active ? handleDelete : null}
                                deleteIcon={<CloseIcon sx={{ fill: '#5E5ADB' }} />}
                                inputProps={{
                                    style: {
                                        padding: 10,
                                        color: tab.active ? '#5E5ADB' : '#8d8d8d',
                                        "&:disabled": {
                                            opacity: 0,
                                            "-webkit-text-fill-color": "none",
                                        },
                                        textAlign: 'center',
                                        fontSize: '14px'
                                    },

                                }}

                                disabled={!tab.editable}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                        {tab.active && <CloseIcon
                                            sx={{ fill: '#5E5ADB', fontSize: 20 }}
                                        />}
                                    </InputAdornment>,
                                }}
                                sx={{
                                    borderRadius: '10px',
                                    width: '140px',
                                    "& fieldset": { border: 'none' },
                                    height: '40px',
                                    backgroundColor: tab.active ? 'rgba(94, 90, 219, 0.05)' : 'transparent',
                                    border: '1px solid rgba(94, 90, 219, 0.15)',
                                }}
                            />)}

                            {newTabfield && <TextField
                                value={newTabVal}
                                variant="outlined"
                                onChange={(e) => setNewTabVal(e.target.value)}
                                inputProps={{
                                    style: {
                                        padding: 10,
                                        color: '#8d8d8d',
                                        textAlign: 'center',
                                        fontSize: '14px'
                                    },

                                }}

                                sx={{
                                    borderRadius: '10px',
                                    width: '140px',
                                    "& fieldset": { border: 'none' },
                                    height: '40px',
                                    border: '1px solid rgba(94, 90, 219, 0.15)',
                                }}
                                fullWidth
                            />}
                            <Button
                                variant="outlined"
                                onClick={handleClick}
                                sx={{
                                    borderRadius: '10px',
                                    height: '40px',
                                    backgroundColor: 'rgba(94, 90, 219, 0.05)',
                                    border: '1px solid rgba(94, 90, 219, 0.15)',
                                    color: '#5E5ADB',
                                    fontSize: '35px',
                                    fontWeight: "300"
                                }}
                            >
                                {
                                    newTabfield ?
                                        <DoneIcon />
                                        :
                                        <AddIcon />
                                }
                            </Button>
                        </Stack>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Stack direction="row" spacing={1}>
                            <Chip
                                label="Add Widget"
                                variant="outlined"
                                onClick={handleOpen}
                                icon={<AddIcon sx={{ fill: '#5E5ADB' }} />}
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
                        {[<ActivityIcon />, <MessageIcon />, <LayersIcon />, <BarChartIcon color="active"/>].map((item, index) => (
                            <ListItem disablePadding>
                                <ListItemButton sx={{ justifyContent: 'center' }}>
                                    <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                                        <div className={index===activePage ? "active-page" : ""}>{item}</div>
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </div>

                <Button sx={{ position: 'absolute', bottom: "20px" }}>
                    <Avatar alt="Remy Sharp" src={Avatarprofile} sx={{ width: "50px", height: "50px" }} />
                </Button>
            </Drawer>
        </Box>
    );
}