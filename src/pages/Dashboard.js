import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProductTable from '../components/ProductTable';
import DescriptionBox from '../components/DescriptionBox';
import ProductBarChart from '../components/ProductBarChart';
import ProductPieChart from '../components/ProductPieChart';
import ProductLineChart from '../components/ProductLineChart';
import { data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14 } from "../constants/data.js"

export default function Dashboard({ widgets }) {

    return (
        <Box className="main-container">
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
                    <Grid container spacing={0} className="combine-all">
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
                        <Grid item xs={6} className="size-3-x-1">
                            <ProductLineChart data={data14} />
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container direction="column" spacing={3.5}>
                                <Grid item xs={12}>
                                    <ProductPieChart data={data11} />
                                </Grid>
                                <Grid item xs={12} className="size-2-x-1">
                                    <ProductBarChart data={data10} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3.5}>
                        {widgets?.map((widget) => {
                            if (widget.type === "table") return (
                                <Grid item xs={2}>
                                    <ProductTable data={widget} />
                                </Grid>)
                            else if(widget.type === "chart"){
                                if(widget.chartType === "bar") return (
                                    <Grid item xs={2}>
                                        <ProductBarChart data={widget} />
                                    </Grid> 
                                )
                                else if (widget.chartType === "line") return (
                                    <Grid item xs={2}>
                                        <ProductLineChart data={widget} />
                                    </Grid>)
                                else if (widget.chartType === "pie") (
                                    <Grid item xs={2}>
                                        <ProductPieChart data={widget} />
                                    </Grid>)
                            }
                            else return (
                                <Grid item xs={2}>
                                    <DescriptionBox data={widget} />
                                </Grid>)
                        }
                        )}
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    )
}