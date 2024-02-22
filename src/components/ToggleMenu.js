import * as React from 'react';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleMenu() {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{ padding: "5px" }}
        >
            <ToggleButton value="left" aria-label="left aligned">
                <BarChartIcon />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
                <ShowChartIcon />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
                <PieChartOutlineIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
