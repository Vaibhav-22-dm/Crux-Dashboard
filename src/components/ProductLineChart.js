import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Box from '@mui/material/Box';
import styles from "../css/override.css"
import { LineChart } from '@mui/x-charts';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Divider, Typography } from '@mui/material';

const colors = [
    "#F1E254",
    "#FF8E8E",
    "#96D3FF",
    "#5FDC8F",
    "#F182F3",
    "#5E5ADB"
]

const xLabels = [
    '',
    "Google",
    "Instagram",
    "Facebook",
    "Tiktok"
]

const valueFormatter = (value) => xLabels[value % 10];

export default function ProductLineChart({ data }) {

    const rows = data.rows
    const header = data.header
    const mode = data.mode
    const height = data?.height
    const bottomAxis = data.xAxis
    const metaData = data.metaData
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
            <LineChart
                xAxis={[{
                    data: xLabels,
                    id: 'bottomAxis',
                    scaleType: 'band',
                    tickLabelStyle: {
                        fill: '#000',
                        fontSize: 11,
                        textAnchor: 'middle',
                        angle: 300
                    }
                }]}
                series={
                    Object.keys(rows).map((row) => {
                        return {
                            curve: "linear",
                            data: rows[row].map((item) => {
                                return item['y']
                            }),
                            showMark: false,
                        }
                    })
                }
                width={270}
                height={200}
                bottomAxis={bottomAxis ? { axisId: 'bottomAxis' } : null}
                sx={{
                    marginTop: '-25px',
                    marginLeft: '-30px',
                    color: 'black'
                }}

            />
            {metaData ? <Divider sx={{ width: '85%', margin: 'auto', marginTop: '10px', backgroundColor: `${color2}` }} /> : null}
            {metaData ?

                <List sx={{ padding: "20px" }}>
                    {Object.keys(metaData).map((key, index) => (
                        <ListItem sx={{ padding: "0px" }}>
                            <ListItemText
                                sx={{
                                    borderLeft: `5px solid ${colors[index]}`,
                                    paddingLeft: "5px",
                                    display: "flex",
                                    flexDirection: "column-reverse",
                                    color: `${color2}`
                                }}
                                disableTypography
                                primary={<Typography variant="body2" style={{ color: `${color1}`, fontSize: '20px' }}>{metaData[key]}</Typography>}
                                secondary={<Typography variant="body2" style={{ color: `${color2}`, fontSize: '13px' }}>{key}</Typography>}
                            />
                        </ListItem>
                    ))}
                </List>
                : null}
        </Box>
    );
}