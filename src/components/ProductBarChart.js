import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import Box from '@mui/material/Box';
import styles from "../css/override.css"

const colors = [
    "#F1E254",
    "#FF8E8E",
    "#96D3FF",
    "#5FDC8F",
    "#F182F3",
    "#5E5ADB"
]


const valueFormatter = (value) => `${value}K`;

export default function ProductBarChart({ data }) {

    const rows = data.rows
    const header = data.header
    const mode = data.mode
    const height = data?.height
    const color1 = data.color1
    const color2 = data.color2
    const color3 = data.color3


    return (
        <Box className={`${mode} widgetBox`} sx={{
            ...data.style, 
            width: '100%',
            height: height ? `${height}px` : '212px',
        }}
        >
            {header}
            <BarChart
                dataset={rows}
                xAxis={[{ scaleType: 'band', dataKey: 'platform' }]}
                series={[
                    { dataKey: 'customers', valueFormatter },
                ]}
                slots={{
                    bar: (props) => {
                        // const radius = 7;
                        // const { x, y, height, width, ownerState, ...restProps } = props
                        // const d = `M${x},${y} h${width - radius} a${radius},${radius} 0 0 1 ${radius},${radius}v ${height - 2 * radius} a${radius},${radius} 0 0 1 ${-radius},${radius} h${radius - width}z`
                        // return <path d={d} {...restProps} />
                        // console.log(props.ownerState.dataIndex)
                        return <rect
                            fill={colors[props.ownerState.dataIndex]}
                            height={props.style.height.animation.to}
                            width={'5px'}
                            x={props.style.x.animation.to + 10}
                            y={props.style.y.animation.to}
                        />
                    }
                }}
                height={height ? height-30 : 220}
                sx={{
                    width: '100%',
                }}
                bottomAxis={null}
            >
            </BarChart>
        </Box>
    );
}