import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function ProductTable({ data }) {
    
    const rows = data.rows
    const header = data.header
    const mode = data.mode
    const color1 = data.color1
    const color2 = data.color2
    const color3 = data.color3
    const tableBorderColor = data.tableBorderColor

    return (
        <Box className={`${mode} widgetBox`} sx={{ ...data.style, width: '100%' }}>
            {header}
            <TableContainer sx={{ padding: '0px 20px' }}>
                <Table sx={{ minWidth: 0, fontSize: '11px' }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ border: 0 }}>
                            {Object.keys(rows[0]).map((key, index) => (
                                <TableCell sx={{ 
                                    fontSize: '11px', 
                                    padding: '15px 5px 5px 5px', 
                                    border: '0', 
                                    borderRight: `1px solid ${index === Object.keys(rows[0]).length - 1 ? 'rgba(0,0,0,0)' : tableBorderColor}`, 
                                    fontWeight: 'bold', 
                                    color: `${color1}`,
                                    opacity: `${index ? 0.7 : 1}`,
                                    textTransform: 'uppercase',
                                }} align={index === 0 ? 'left' : 'center'}>{key}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ border: 0 }}
                            >
                                {Object.keys(row).map((key, idx) => (
                                    <TableCell sx={{ 
                                        fontSize: '11px', 
                                        padding: `${index === rows.length - 1 ? '5px 5px 10px 5px' : '5px'}`, 
                                        border: '0', 
                                        borderRight: `1px solid ${idx === Object.keys(row).length - 1 ? 'rgba(0,0,0,0)' : tableBorderColor}`, 
                                        fontWeight: `${index === rows.length - 1 ? 'bold' : 'normal'}`,
                                        color: `${index === rows.length - 1 ? color3 : color2}`,
                                    }} 
                                        align={idx ===0 ? 'left' : 'center'}>{row[key]}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
}