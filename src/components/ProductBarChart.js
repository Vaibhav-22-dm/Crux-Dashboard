import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Box from '@mui/material/Box';
import ProductTableTabs from './ProductTableTabs';
import ProductTableDropDown from './ProductTableDropDown';
import { colors } from "../constants/data"


const valueFormatter = (value) => `${value}K`;

export default function ProductBarChart({ data }) {

    const rows = data.rows
    const header = data.header
    const mode = data.mode


    return (
        <Box className={`${mode} widget-box bar-chart`}>
            {header === "tabs" ? <ProductTableTabs /> : <ProductTableDropDown />}
            <BarChart
                dataset={rows}
                xAxis={[{ scaleType: 'band', dataKey: 'platform' }]}
                series={[
                    { dataKey: 'customers', valueFormatter },
                ]}
                slots={{
                    bar: (props) => {
                        return <rect
                            fill={colors[props.ownerState.dataIndex]}
                            height={props.style.height.animation.to}
                            width={'5px'}
                            x={props.style.x.animation.to + 10}
                            y={props.style.y.animation.to}
                        />
                    }
                }}
                height={data.size==="2x1" ? 400 : 200}
                bottomAxis={null}
            >
            </BarChart>
        </Box>
    );
}