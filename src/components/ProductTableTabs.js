import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';


export default function ProductTableTabs(props) {
    const [value, setValue] = React.useState(0);

    const bottomBorderColor = props.bottomBorderColor
    const color = props.color
    const activeColor = props.activeColor

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClick = (event, newValue) => {
        console.log(event, newValue);
    }

    return (
        <Box sx={{ borderBottom: 1, borderColor: `${bottomBorderColor}`, display: 'flex', justifyContent: 'space-between', padding: '10px 0px 0px 0px' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                style={{ minHeight: 0, width: 'auto' }}
            >
                <Tab label="7d" style={{ minWidth: 0, minHeight: 0, fontSize: '11px', padding: '5px 5px 5px 25px', textTransform: "lowercase" }} />
                <Tab label="14d" style={{ minWidth: 0, minHeight: 0, fontSize: '11px', padding: '5px 15px', textTransform: "lowercase" }} />
                <Tab label="30d" style={{ minWidth: 0, minHeight: 0, fontSize: '11px', padding: '5px 25px 5px 5px', textTransform: "lowercase" }} />
            </Tabs>
            <IconButton
                aria-label="more"
                id="long-button"
                // aria-controls={open ? 'long-menu' : undefined}
                // aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={{
                    padding: '0px 10px',
                }}
            >
                <MoreHorizIcon />
            </IconButton>
        </Box>
    );
}