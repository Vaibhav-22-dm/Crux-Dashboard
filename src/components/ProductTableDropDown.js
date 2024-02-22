import * as React from 'react';
import Box from '@mui/material/Box';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import { Select, MenuItem } from '@mui/material';


export default function ProductTableDropDown(props) {
    const [value, setValue] = React.useState('today');
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
            <Select
                labelId="demo-simple-select-label"
                value={value}
                style={{
                    width: 'auto',
                    padding: '0px 10px',
                    fontSize: '11px', 
                }}
                variant={'standard'}
                disableUnderline={true}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            >
                <MenuItem value={'today'}
                >Today</MenuItem>
                <MenuItem value={'yesterday'}
                >Yesterday</MenuItem>
                <MenuItem value={'day-before-yesterday'}>
                    Day before Yesterday
                </MenuItem>
            </Select> 
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