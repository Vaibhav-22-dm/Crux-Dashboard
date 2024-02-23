import * as React from 'react';
import Box from '@mui/material/Box';
import styles from "../css/override.css"
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts';
import { styled } from '@mui/material/styles';

const colors = [
    "#F1E254",
    "#FF8E8E",
    "#96D3FF",
    "#5FDC8F",
    "#F182F3",
    "#5E5ADB"
]

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <>
            <StyledText x={left + width / 2 + 50} y={top + height / 2 - 30} sx={{fontSize: '18px'}}>
                {children[0]}
            </StyledText>
            <StyledText x={left + width / 2 + 50} y={top + height / 2 - 10} sx={{ fontSize: '10px' }}>
                {children[1]}
            </StyledText>
        </>
        
    );
}

export default function ProductPieChart({ data }) {

    const rows = data.rows
    const header = data.header
    const mode = data.mode
    const height = data?.height

    return (
        <Box className={`${mode} widgetBox`} sx={{
            ...data.style,
            height: height ? `${height}px` : '212px',
            overflow: 'hidden'
        }}>
            {header}
            <PieChart
                series={
                    [
                        {
                            arcLabelMinAngle: 45,
                            data: rows,
                            innerRadius: 40,
                            outerRadius: 60,
                            paddingAngle: 2,
                            cornerRadius: 3,
                            startAngle: -90,
                            endAngle: 270,
                            cx: 100,
                            cy: 80,
                        },
                    ]
                }
                slotProps={{
                    legend: {
                        hidden: true
                    }
                }}
                size={{
                    width: 200,
                    height: 100
                }}
            >
                <PieCenterLabel>
                    {['89,000', 'Orders']}
                </PieCenterLabel>
            </PieChart>

        </Box>
    );
}