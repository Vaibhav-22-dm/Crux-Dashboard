import * as React from 'react';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleMenu( {chartType, setChartType} ) {

    const handleChartType = (event, chartType) => {
        setChartType(chartType);
    };

    return (
        <ToggleButtonGroup
            value={chartType}
            exclusive
            onChange={handleChartType}
            aria-label="chart type"
            sx={{ padding: "5px" }}
        >
            <ToggleButton value="bar" aria-label="Bar Graph">
                <BarChartIcon />
            </ToggleButton>
            <ToggleButton value="line" aria-label="Line Graph">
                <ShowChartIcon />
            </ToggleButton>
            <ToggleButton value="pie" aria-label="Pie Chart">
                <PieChartOutlineIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
