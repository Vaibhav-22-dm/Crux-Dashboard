import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import WidgetIcon from '../icons/WidgetIcon';
import CloseIcon from '@mui/icons-material/Close';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import HistoryIcon from '@mui/icons-material/History';
import ZoomBox from './ZoomBox';
import ToggleMenu from './ToggleMenu';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 525,
    bgcolor: '#FFFFFF',
    borderRadius: '20px',
    boxShadow: 24,
};

export default function Widget({ open, handleClose }) {
    const handleClick = () => {
        // console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        // console.info('You clicked the delete icon.');
    };

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
                                    padding: "20px 20px 0 20px",
                                }}>
                                    <Button variant="dark" sx={{ float: "right" }} >
                                        <CloseIcon onClick={handleClose} />
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container style={{ width: "100%", padding: "0 20px", alignItems: "end" }}>
                                        <Grid item xs={1}>
                                            <div style={{
                                                padding: "9px",
                                                border: "1px solid #E0DFF8",
                                                borderRadius: "6px",
                                                width: "45px",
                                                height: "45px",
                                            }}>
                                                <WidgetIcon />
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography sx={{ color: "#5E5ADB", fontSize: "18px", fontWeight: "600" }}>Create Widget</Typography>
                                            <Typography sx={{ color: "#888891", fontSize: "13px" }}>Manage the glossary of terms of your Database</Typography>
                                        </Grid>
                                        <Grid item xs={5} sx={{ textAlign: "end" }}>
                                            <Chip
                                                label="Reusability Scores"
                                                variant="outlined"
                                                onClick={handleClick}
                                                onDelete={handleDelete}
                                                deleteIcon={<CloseIcon style={{ fill: '#888891', fontSize: "15px" }} />}
                                                sx={{
                                                    borderRadius: '10px',
                                                    width: '90%',
                                                    height: '35px',
                                                    border: '1px solid #E1E1E1',
                                                    color: '#888891',
                                                    justifyContent: "space-between",
                                                    fontSize: "13px",
                                                    borderRadius: "5px"
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{
                            padding: "10px 20px 20px 20px"
                        }}>
                            <Grid container >
                                <Grid item xs={8}>
                                    <Box sx={{
                                        margin: "10px 15px 0 0",
                                        height: "97%",
                                        background: "#F8F8FF",
                                        border: "1px solid #E0DFF8",
                                        borderRadius: "6px"
                                    }}>
                                        <ZoomBox />
                                    </Box>
                                </Grid>
                                <Grid item xs={4} >
                                    <Typography sx={{ color: '#888891', fontWeigth: "200", fontSize: "13px" }}>COMPONENTS</Typography>
                                    <Box style={{ border: '1px solid #E1E1E1', borderRadius: "5px", padding: "10px", margin: "5px 0" }}>
                                        <Typography sx={{ fontSize: "16px", color: "#585858" }}>Data</Typography>
                                        <TextField id="data" label="" variant="standard" placeholder="Random Description"
                                            InputProps={{ disableUnderline: true }} sx={{ fontSize: "11px", color: "#585858" }} />
                                    </Box>
                                    <Box style={{ border: '1px solid #E1E1E1', borderRadius: "5px", padding: "10px", margin: "5px 0" }}>
                                        <Typography sx={{ fontSize: "16px", color: "#585858" }}>Graph</Typography>
                                        <TextField id="graph" label="" variant="standard" placeholder="Random Description"
                                            InputProps={{ disableUnderline: true }} sx={{ fontSize: "11px", color: "#585858" }} />
                                        <ToggleMenu />
                                    </Box>
                                    <Box style={{ border: '1px solid #E1E1E1', borderRadius: "5px", padding: "10px", margin: "5px 0" }}>
                                        <Typography sx={{ fontSize: "16px", color: "#585858" }}>Summary</Typography>
                                        <TextField id="summary" label="" variant="standard" placeholder="Random Description"
                                            InputProps={{ disableUnderline: true }} sx={{ fontSize: "11px", color: "#585858" }} />
                                    </Box>

                                    <Box style={{
                                        marginTop: "40px",
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "space-between"
                                    }}>
                                        <Button sx={{ color: "#9F9F9F", backgroundColor: "#F8F8FF", border: '1px solid #E0DFF8', padding: "10px 10px" }}><HistoryIcon /></Button>
                                        <Button sx={{ color: "#9F9F9F", fontSize: "14px", border: '1px solid #E1E1E1', padding: "10px 25px" }} onClick={handleClose}>Cancel</Button>
                                        <Button variant="contained" sx={{ background: "#5E5ADB", fontSize: "14px", padding: "10px 25px" }}>Save</Button>
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