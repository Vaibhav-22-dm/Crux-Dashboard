import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import WidgetIcon from '../icons/WidgetIcon';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import HistoryIcon from '@mui/icons-material/History';
import ZoomBox from './ZoomBox';
import ToggleMenu from './ToggleMenu';
import ProductTableTabs from './ProductTableTabs';
import ProductTable from './ProductTable';
import ProductBarChart from './ProductBarChart';
import ProductLineChart from './ProductLineChart';
import ProductPieChart from './ProductPieChart';
import DescriptionBox from './DescriptionBox';
import ProductTableDropDown from './ProductTableDropDown';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height: 540,
    bgcolor: '#FFFFFF',
    borderRadius: '20px',
    boxShadow: 24,
};

export default function Widget({ open, handleClose, setWidgets }) {
    const [title, setTitle] = React.useState("")
    const [type, setType] = React.useState("data")
    const [chartType, setChartType] = React.useState("bar")
    const [data, setData] = React.useState("")
    const [chartData, setChartData] = React.useState("")
    const [summary, setSummary] = React.useState("")
    const [mode, setMode] = React.useState("light")
    const [component, setComponent] = React.useState(null)
    const [obj, setObj] = React.useState({})

    const handleSave = () => {
        let widgets = JSON.parse(localStorage.getItem("widgets"))
        widgets.push(obj)     
        localStorage.setItem("widgets", JSON.stringify(widgets))
        setWidgets(widgets)
    };


    const handleCancel = () => {
        setComponent("")
    }

    React.useEffect(() => {
        setComponent("")
        try{
            if (type === "data") {
                const item = {
                    mode: mode,
                    header: "tabs",
                    style: {},
                    rows: JSON.parse(data),
                    type: "table"
                }
                setComponent(<ProductTable data={item} />)
                setObj(item)
            }
            else if (type === "chart") {
                const item = {
                    mode: mode,
                    header: "tabs",
                    style: {},
                    rows: JSON.parse(chartData),
                    type: "chart",
                    chartType: chartType
                }
                console.log(item)
                if (chartType === "bar") setComponent(<ProductBarChart data={item} />)
                else if (chartType === "line") setComponent(<ProductLineChart data={item} />)
                else setComponent(<ProductPieChart data={item} />)
                setObj(item)
            }
            else {
                const item = {
                    mode: mode,
                    header: "tabs",
                    style: {},
                    content: summary,
                    type: "dropdown"
                }
                setComponent(<DescriptionBox data={item} />)
                setObj(item)
            }
        }
        catch (e) {
            console.log(e)
        }
        
    }, [ type, data, chartData, summary, mode ])


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container >
                        <Grid item xs={12} sx={{ borderBottom: "1px solid #E1E1E1", paddingBottom: "15px" }}>
                            <Grid container>
                                <Grid item xs={12} style={{
                                    width: "100%",
                                    padding: "10px 20px 0 20px",
                                }}>
                                    <Button variant="dark" sx={{ float: "right" }} >
                                        <CloseIcon onClick={() => {
                                            setComponent("")
                                            handleClose()
                                        }} />
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container style={{ width: "100%", padding: "0 20px", alignItems: "end" }}>
                                        <Grid item xs={1}>
                                            <div className='widget-icon-box'>
                                                <WidgetIcon />
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography sx={{ color: "#5E5ADB", fontSize: "18px", fontWeight: "600" }}>Create Widget</Typography>
                                            <Typography sx={{ color: "#888891", fontSize: "13px" }}>Manage the glossary of terms of your Database</Typography>
                                        </Grid>
                                        <Grid item xs={5} sx={{ textAlign: "end" }}>
                                            <TextField
                                                sx={{
                                                    width: '90%',
                                                    fontSize: "13px",
                                                }}
                                                inputProps={{
                                                    style: {
                                                        padding: 10
                                                    }
                                                }}
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                placeholder='Add title'
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{
                            padding: "10px 20px 20px 20px"
                        }}>
                            <Grid container>
                                <Grid item xs={8}>
                                    <Box className="widget-zoom-container">
                                        {component && <ZoomBox component={component} title={title} />}
                                        <div className="widget-color-button-group">
                                            <button
                                                style={{ background: "#282828" }}
                                                className={`colorPicker ${mode === "dark" ? "active-mode" : ""}`}
                                                onClick={() => setMode("dark")}
                                            ></button>
                                            <button
                                                style={{ background: "#FFFFFF" }}
                                                className={`colorPicker ${mode === "light" ? "active-mode" : ""}`}
                                                onClick={() => setMode("light")}
                                            ></button>
                                            <button
                                                style={{ background: "#5E5ADB" }}
                                                className={`colorPicker ${mode === "primary" ? "active-mode" : ""}`}
                                                onClick={() => setMode("primary")}
                                            ></button>
                                        </div>
                                    </Box>
                                </Grid>
                                <Grid item xs={4} >
                                    <Typography sx={{ color: '#888891', fontWeigth: "200", fontSize: "13px" }}>COMPONENTS</Typography>
                                    <Box 
                                        className={`widget-form-group ${type==="data" ? "active-form-group" : ""}`}
                                        onClick={() => setType("data")}    
                                    >
                                        <Typography sx={{ fontSize: "16px", color: "#585858" }}>Data</Typography>
                                        <TextField id="data" label="" variant="standard" placeholder="Random Description"
                                            InputProps={{ disableUnderline: true }} sx={{ fontSize: "11px", color: "#585858" }}
                                            value={data}
                                            onChange={(e) => setData(e.target.value)}
                                        />
                                    </Box>
                                    <Box 
                                        className={`widget-form-group ${type === "chart" ? "active-form-group" : ""}`}
                                        onClick={() => setType("chart")}    
                                    >
                                        <Typography sx={{ fontSize: "16px", color: "#585858" }}>Graph</Typography>
                                        <TextField id="graph" label="" variant="standard" placeholder="Random Description"
                                            InputProps={{ disableUnderline: true }} sx={{ fontSize: "11px", color: "#585858" }} 
                                            value={chartData}
                                            onChange={(e) => setChartData(e.target.value)}    
                                        />
                                        <ToggleMenu chartType={chartType} setChartType={setChartType}/>
                                    </Box>
                                    <Box 
                                        className={`widget-form-group ${type === "summary" ? "active-form-group" : ""}`}
                                        onClick={() => setType("summary")}    
                                    >
                                        <Typography sx={{ fontSize: "16px", color: "#585858" }}>Summary</Typography>
                                        <TextField id="summary" label="" variant="standard" placeholder="Random Description"
                                            InputProps={{ disableUnderline: true }} sx={{ fontSize: "11px", color: "#585858" }} 
                                            value={summary}
                                            onChange={(e) => setSummary(e.target.value)}    
                                        />
                                    </Box>
                                    <Box className="widget-button-group">
                                        <Button sx={{ color: "#9F9F9F", backgroundColor: "#F8F8FF", border: '1px solid #E0DFF8', padding: "10px 10px" }}><HistoryIcon /></Button>
                                        <Button sx={{ color: "#9F9F9F", fontSize: "14px", border: '1px solid #E1E1E1', padding: "10px 35px" }} onClick={handleCancel}>Cancel</Button>
                                        <Button 
                                            variant="contained" 
                                            sx={{ background: "#5E5ADB", fontSize: "14px", padding: "10px 35px" }}
                                            onClick={handleSave}    
                                        >Save</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div >
    );
}