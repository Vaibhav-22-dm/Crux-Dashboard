import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProductTable from '../components/ProductTable';
import ProductTableTabs from '../components/ProductTableTabs';
import ProductTableDropDown from '../components/ProductTableDropDown';
import DescriptionBox from '../components/DescriptionBox';
import ProductBarChart from '../components/ProductBarChart';
import ProductPieChart from '../components/ProductPieChart';
import ProductLineChart from '../components/ProductLineChart';
import styles from "../css/override.css"

export default function Dashboard() {

    const data1 = {
        rows: [
            {
                Product: 'Reusable',
                'Q1-23': '10%',
                'Q2-23': '4%'
            },
            {
                Product: 'Natural',
                'Q1-23': '2%',
                'Q2-23': '11%'
            },
            {
                Product: 'Compost',
                'Q1-23': '7%',
                'Q2-23': '5%'
            },
            {
                Product: 'Reusable',
                'Q1-23': '3%',
                'Q2-23': '4%'
            },
            {
                Product: 'Total',
                'Q1-23': '8%',
                'Q2-23': '12%'
            }
        ],
        header: <ProductTableTabs bottomBorderColor='rgba(225, 225, 225, 1)' color='rgba(187, 187, 187, 1)' activeColor='rgba(94, 90, 219, 1)'/>,
        mode: 'light',
        style: {
            borderRadius: '15px',
            boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#FFFFFF'
        },
        color1: '#5E5ADB',
        color2: '#474747',
        color3: '#393939',
        tableBorderColor: '#F6F6F6'
    }

    const data2 = {
        rows: [
            {
                Product: 'Reusable',
                'Q1-23': '10%',
                'Q2-23': '4%'
            },
            {
                Product: 'Natural',
                'Q1-23': '2%',
                'Q2-23': '11%'
            },
            {
                Product: 'Compost',
                'Q1-23': '7%',
                'Q2-23': '5%'
            },
            {
                Product: 'Reusable',
                'Q1-23': '3%',
                'Q2-23': '4%'
            },
            {
                Product: 'Total',
                'Q1-23': '8%',
                'Q2-23': '12%'
            }
        ],
        header: <ProductTableDropDown bottomBorderColor='rgba(225, 225, 225, 1)' color='rgba(244, 244, 244, 0.9)' activeColor='rgba(244, 244, 244, 0.9)'  />,
        mode: 'primary',
        style: {
            borderRadius: '15px',
            boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#5E5ADB'
        },
        color1: '#F1F1F2',
        color2: 'rgba(255, 255, 255, 0.65)',
        color3: 'rgba(244, 244, 244, 0.9)',
        tableBorderColor: 'rgba(246, 246, 246, 0.1)'
    }

    const data3 = {
        rows: [
            {
                Product: 'Reusable',
                'Q1-23': '10%',
                'Q2-23': '4%',
                'Q3-23': '10%',
                'Q4-23': '4%',
                'Q1-24': '4%'
            },
            {
                Product: 'Natural Resource',
                'Q1-23': '2%',
                'Q2-23': '11%',
                'Q3-23': '10%',
                'Q4-23': '4%',
                'Q1-24': '4%'
            },
            {
                Product: 'Compost Compound',
                'Q1-23': '7%',
                'Q2-23': '5%',
                'Q3-23': '10%',
                'Q4-23': '4%',
                'Q1-24': '4%'
            },
            {
                Product: 'Reusable Materials',
                'Q1-23': '3%',
                'Q2-23': '4%',
                'Q3-23': '10%',
                'Q4-23': '4%',
                'Q1-24': '4%'
            },
            {
                Product: 'Reusable',
                'Q1-23': '10%',
                'Q2-23': '4%',
                'Q3-23': '10%',
                'Q4-23': '4%',
                'Q1-24': '4%'
            },
            {
                Product: 'Natural Resource',
                'Q1-23': '2%',
                'Q2-23': '11%',
                'Q3-23': '10%',
                'Q4-23': '4%',
                'Q1-24': '4%'
            },
            {
                Product: 'Compost Compound',
                'Q1-23': '7%',
                'Q2-23': '5%',
                'Q3-23': '10%',
                'Q4-23': '4%',
                'Q1-24': '4%'
            },
            {
                Product: 'Reusable Materials',
                'Q1-23': '3%',
                'Q2-23': '4%',
                'Q3-23': '10%',
                'Q4-23': '4%',
                'Q1-24': '4%'
            },
            {
                Product: 'Reusable',
                'Q1-23': '10%',
                'Q2-23': '4%',
                'Q3-23': '10%',
                'Q4-23': '4%',
                'Q1-24': '4%'
            },
            {
                Product: 'Natural Resource',
                'Q1-23': '2%',
                'Q2-23': '11%',
                'Q3-23': '10%',
                'Q4-23': '4%',
                'Q1-24': '4%'
            },
            {
                Product: 'Compost Compound',
                'Q1-23': '7%',
                'Q2-23': '5%',
                'Q3-23': '10%',
                'Q4-23': '4%',
                'Q1-24': '4%'
            },
            {
                Product: 'Reusable Materials',
                'Q1-23': '3%',
                'Q2-23': '4%',
                'Q3-23': '10%',
                'Q4-23': '4%',
                'Q1-24': '4%'
            },
            {
                Product: 'Total',
                'Q1-23': '8%',
                'Q2-23': '12%',
                'Q3-23': '10%',
                'Q4-23': '4%',
                'Q1-24': '4%'
            }
        ],
        header: <ProductTableTabs bottomBorderColor='rgba(225, 225, 225, 1)' color='rgba(187, 187, 187, 1)' activeColor='rgba(94, 90, 219, 1)' />,
        mode: 'dark',
        style: {
            borderRadius: '15px',
            boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'rgba(40, 40, 40, 1)'
        },
        color1: '#F1F1F2',
        color2: 'rgba(255, 255, 255, 0.65)',
        color3: 'rgba(244, 244, 244, 0.9)', 
        tableBorderColor: 'rgba(246, 246, 246, 0.1)'
    }

    const data4 = {
        rows: [
            {
                Product: 'Reusable',
                'Q1-23': '10%',
                'Q2-23': '4%'
            },
            {
                Product: 'Natural',
                'Q1-23': '2%',
                'Q2-23': '11%'
            },
            {
                Product: 'Compost',
                'Q1-23': '7%',
                'Q2-23': '5%'
            },
            {
                Product: 'Reusable',
                'Q1-23': '3%',
                'Q2-23': '4%'
            },
            {
                Product: 'Total',
                'Q1-23': '8%',
                'Q2-23': '12%'
            }
        ],
        header: <ProductTableTabs bottomBorderColor='rgba(225, 225, 225, 1)' color='rgba(187, 187, 187, 1)' activeColor='rgba(94, 90, 219, 1)' />,
        mode: 'primary',
        style: {
            borderRadius: '15px',
            boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'rgba(40, 40, 40, 1)'
        },
        color1: '#F1F1F2',
        color2: 'rgba(255, 255, 255, 0.65)',
        color3: 'rgba(244, 244, 244, 0.9)', 
        tableBorderColor: 'rgba(246, 246, 246, 0.1)'

    }

    const data5 = {
        rows: [
            {
                Product: 'Reusable',
                'Q1-23': '10%',
                'Q2-23': '4%'
            },
            {
                Product: 'Natural',
                'Q1-23': '2%',
                'Q2-23': '11%'
            },
            {
                Product: 'Compost',
                'Q1-23': '7%',
                'Q2-23': '5%'
            },
            {
                Product: 'Reusable',
                'Q1-23': '3%',
                'Q2-23': '4%'
            },
            {
                Product: 'Total',
                'Q1-23': '8%',
                'Q2-23': '12%'
            }
        ],
        header: <ProductTableDropDown bottomBorderColor = 'rgba(225, 225, 225, 1)' color = 'rgba(187, 187, 187, 1)' activeColor = 'rgba(94, 90, 219, 1)' />,
        mode: 'primary',
        style: {

            borderRadius: '15px',
            boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'rgba(94, 90, 219, 1)'
        },
        color1: '#F1F1F2',
        color2: 'rgba(255, 255, 255, 0.65)',
        color3: 'rgba(244, 244, 244, 0.9)',
        tableBorderColor: 'rgba(246, 246, 246, 0.1)'
    }

    const data6 = {
        content: `<p>Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with the highest engagement after opening, is at 15:00(3 PM), with a total of 5041 emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with <strong>5007</strong> and <strong>4785</strong> emails opened respectively. There is a noticeable drop in</p>
        <p>Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with the highest engagement after opening, is at 15:00(3 PM), with a total of 5041 emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with <strong>5007</strong> and <strong>4785</strong> emails opened respectively. There is a noticeable drop in</p>
        <p>Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with the highest engagement after opening, is at 15:00(3 PM), with a total of 5041 emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with <strong>5007</strong> and <strong>4785</strong> emails opened respectively. There is a noticeable drop in</p>
        `,
        header: <ProductTableDropDown bottomBorderColor='rgba(225, 225, 225, 1)' color='rgba(187, 187, 187, 1)' activeColor='rgba(94, 90, 219, 1)' />,
        mode: 'light',
        style: {
            borderRadius: '15px',
            boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#FFFFFF'
        },

        color1: '#5E5ADB',
        color2: '#474747',
        color3: '#393939',
    }

    const data7 = {
        rows: [
            {
                customers: 59,
                platform: 'Google',
            },
            {
                customers: 50,
                platform: 'Instagram',
            },
            {
                customers: 47,
                platform: 'Facebook',
            },
            {
                customers: 54,
                platform: 'Tiktok',
            },
            {
                customers: 57,
                platform: 'X (twitter)',
            },
            {
                customers: 60,
                platform: 'Youtube',
            },
        ],
        header: <ProductTableTabs bottomBorderColor='rgba(225, 225, 225, 1)' color='rgba(187, 187, 187, 1)' activeColor='#5E5ADB' />,
        mode: 'dark',
        style: {
            borderRadius: '15px 0px 0px 15px',
            boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'rgba(40, 40, 40, 1)',
            borderLeft: 'none'
        },

        color1: '#5E5ADB',
        color2: '#474747',
        color3: '#393939',
    }

    const data8 = {
        rows: [
            {
                Product: 'Reusable',
                'Q1-23': '10%',
                'Q2-23': '4%'
            },
            {
                Product: 'Natural',
                'Q1-23': '2%',
                'Q2-23': '11%'
            },
            {
                Product: 'Compost',
                'Q1-23': '7%',
                'Q2-23': '5%'
            },
            {
                Product: 'Reusable',
                'Q1-23': '3%',
                'Q2-23': '4%'
            },
            {
                Product: 'Total',
                'Q1-23': '8%',
                'Q2-23': '12%'
            }
        ],
        header: <ProductTableTabs bottomBorderColor='rgba(225, 225, 225, 1)' color='rgba(187, 187, 187, 1)' activeColor='rgba(94, 90, 219, 1)' />,
        mode: 'light',
        style: {
            borderRadius: '0',
            boxShadow: '10px 0 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#FFFFFF',
            borderLeft: '1px solid rgba(0, 0, 0, 0.1)'
        },

        color1: '#5E5ADB',
        color2: '#474747',
        color3: '#393939',
        tableBorderColor: '#F6F6F6',
    }

    const data9 = {
        content: `<p>Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with the highest engagement after opening, is at 15:00(3 PM), with a total of 5041 emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with <strong>5007</strong> and <strong>4785</strong> emails opened respectively. There is a noticeable drop in</p>
        <p>Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with the highest engagement after opening, is at 15:00(3 PM), with a total of 5041 emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with <strong>5007</strong> and <strong>4785</strong> emails opened respectively. There is a noticeable drop in</p>
        <p>Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with the highest engagement after opening, is at 15:00(3 PM), with a total of 5041 emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with <strong>5007</strong> and <strong>4785</strong> emails opened respectively. There is a noticeable drop in</p>
        `,
        header: <ProductTableDropDown bottomBorderColor='rgba(225, 225, 225, 1)' color='#5E5ADB' activeColor='rgba(94, 90, 219, 1)' />,
        mode: 'light',
        style: {
            borderRadius: '0 15px 15px 0',
            boxShadow: '10px 0 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#FFFFFF',
            borderLeft: '1px solid rgba(0, 0, 0, 0.1)'
        },

        color1: '#5E5ADB',
        color2: '#474747',
        color3: '#393939',
    }

    const data10 = {
        rows: [
            {
                customers: 30,
                platform: 'Google',
            },
            {
                customers: 40,
                platform: 'Instagram',
            },
            {
                customers: 25,
                platform: 'Facebook',
            },
            {
                customers: 35,
                platform: 'Tiktok',
            },
            {
                customers: 10,
                platform: 'X (Twitter)',
            },
            {
                customers: 25,
                platform: 'Youtube',
            },
        ],
        header: <ProductTableTabs bottomBorderColor='rgba(225, 225, 225, 1)' color='rgba(187, 187, 187, 1)' activeColor='rgba(94, 90, 219, 1)' />,
        mode: 'light',
        style: {
            borderRadius: '15px',
            boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#FFFFFF'
        },
        height: 450,

        color1: '#5E5ADB',
        color2: '#474747',
        color3: '#393939',
    }

    const data11 = {
        rows: [
            { id: 0, value: 100, label: 'Google' },
            { id: 1, value: 100, label: 'Instagram' },
            { id: 2, value: 90, label: 'Facebook' },
            { id: 3, value: 70, label: 'Tiktok' },
        ],
        header: <ProductTableTabs bottomBorderColor='rgba(225, 225, 225, 1)' color='rgba(187, 187, 187, 1)' activeColor='rgba(94, 90, 219, 1)' />,
        mode: 'light',
        style: {
            borderRadius: '15px',
            boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#FFFFFF'
        },
        height: 212,

        color1: '#5E5ADB',
        color2: '#474747',
        color3: '#393939',
    }

    const data12 = {
        rows: {
            'Christmax25': [{ x: '', y: 15 }, { x: 'Google', y: 11 }, { x: 'Instagram', y: 5 }, { x: 'Facebook', y: 9 }, { x: 'Tiktok', y: 6 }],
            'BirthdaySpecial25': [{ x: '', y: 0 }, { x: 'Google', y: 20 }, { x: 'Instagram', y: 28 }, { x: 'Facebook', y: 5 }, { x: 'Tiktok', y: 0 }],
            'Newuser30': [{ x: '', y: 20 }, { x: 'Google', y: 28 }, { x: 'Instagram', y: 11 }, { x: 'Facebook', y: 13 }, { x: 'Tiktok', y: 26 }],
        },
        header: <ProductTableTabs bottomBorderColor='rgba(225, 225, 225, 1)' color='rgba(187, 187, 187, 1)' activeColor='rgba(94, 90, 219, 1)' />,
        mode: 'light',
        style: {
            borderRadius: '15px',
            boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#FFFFFF'  
        },
        height: 212,
        xAxis: false,
        metaData: null,

        color1: '#5E5ADB',
        color2: '#474747',
        color3: '#393939',
    }

    const data13 = {
        rows: {
            'Christmas25': [{ x: '', y: 15 }, { x: 'Google', y: 11 }, { x: 'Instagram', y: 5 }, { x: 'Facebook', y: 9 }, { x: 'Tiktok', y: 6 }],
            'BirthdaySpecial25': [{ x: '', y: 0 }, { x: 'Google', y: 20 }, { x: 'Instagram', y: 28 }, { x: 'Facebook', y: 5 }, { x: 'Tiktok', y: 0 }],
            'Newuser30': [{ x: '', y: 20 }, { x: 'Google', y: 28 }, { x: 'Instagram', y: 11 }, { x: 'Facebook', y: 13 }, { x: 'Tiktok', y: 26 }],
        },
        header: <ProductTableTabs bottomBorderColor='rgba(225, 225, 225, 1)' color='rgba(187, 187, 187, 1)' activeColor='rgba(94, 90, 219, 1)' />,
        mode: 'light',
        style: {
            borderRadius: '15px',
            boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#FFFFFF'  
        },
        height: 452,
        xAxis: true,
        metaData: {
            'Christmas25': 5700,
            'BirthdaySpecial25': 27000,
            'Newuser30': 12500,
        },

        color1: '#5E5ADB',
        color2: '#474747',
        color3: '#393939',
    }

    const data14 = {
        rows: {
            'Christmas25': [{ x: '', y: 15 }, { x: 'Google', y: 11 }, { x: 'Instagram', y: 5 }, { x: 'Facebook', y: 9 }, { x: 'Tiktok', y: 6 }],
            'BirthdaySpecial25': [{ x: '', y: 0 }, { x: 'Google', y: 20 }, { x: 'Instagram', y: 28 }, { x: 'Facebook', y: 20 }, { x: 'Tiktok', y: 0 }],
            'Newuser30': [{ x: '', y: 20 }, { x: 'Google', y: 28 }, { x: 'Instagram', y: 11 }, { x: 'Facebook', y: 13 }, { x: 'Tiktok', y: 26 }],
            'Newuser40': [{ x: '', y: 30 }, { x: 'Google', y: 20 }, { x: 'Instagram', y: 19 }, { x: 'Facebook', y: 35 }, { x: 'Tiktok', y: 16 }],
            'Newuser50': [{ x: '', y: 40 }, { x: 'Google', y: 2 }, { x: 'Instagram', y: 5 }, { x: 'Facebook', y: 3 }, { x: 'Tiktok', y: 40 }],
        },
        header: <ProductTableTabs bottomBorderColor='rgba(225, 225, 225, 1)' color='rgba(187, 187, 187, 1)' activeColor='rgba(94, 90, 219, 1)' />,
        mode: 'dark',
        style: {
            borderRadius: '15px',
            boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'rgba(40, 40, 40, 1)'
        },
        height: 650,
        xAxis: true,
        metaData: {
            'Christmas25': 5700,
            'BirthdaySpecial25': 27000,
            'Newuser30': 12500,
            'Newuser40': 16000,
            'Newuser50': 17500,
        },

        color1: '#F1F1F2',
        color2: 'rgba(255, 255, 255, 0.65)',
        color3: '#393939',
    }


    return (
        <Box sx={{ display: 'flex', mt: '60px', ml: '70px', padding: '30px' }}>
            <CssBaseline />
            <Grid container spacing={3.5}>
                <Grid item xs={4}>
                    <Grid container spacing={3.5}>
                        <Grid item xs={6}>
                            <ProductTable data={data1} />
                        </Grid>
                        <Grid item xs={6}>
                            <ProductTable data={data2} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Grid container spacing={0}>
                                <Grid item xs={6}>
                                    <ProductBarChart data={data7} />
                                </Grid>
                                <Grid item xs={6}>
                                    <ProductTable data={data8} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <DescriptionBox data={data9} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container spacing={3.5}>
                        <Grid item xs={12}>
                            <ProductTable data={data3} />
                        </Grid>
                        <Grid item xs={6}>
                            <ProductTable data={data4} />
                        </Grid>
                        <Grid item xs={6}>
                            <ProductTable data={data5} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container spacing={3.5}>
                        <Grid item xs={12}>
                            <DescriptionBox data={data6} />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={3.5}>
                                <Grid item xs={6}>
                                    <ProductLineChart data={data13} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container direction="row" spacing={3.5}>
                                        <Grid item xs={12}>
                                            <ProductTable data={data4} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ProductLineChart data={data12} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container spacing={3.5}>
                        <Grid item xs={6}>
                            <ProductLineChart data={data14} />
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container direction="column" spacing={3.5}>
                                <Grid item xs={12}>
                                    <ProductPieChart data={data11} />
                                </Grid>
                                <Grid item xs={12}>
                                    <ProductBarChart data={data10} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    )
}