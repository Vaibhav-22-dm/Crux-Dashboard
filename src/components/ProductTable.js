import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ProductTableTabs from './ProductTableTabs';
import ProductTableDropDown from './ProductTableDropDown';


export default function ProductTable({ data }) {
    const rows = data?.rows
    const header = data?.header
    const mode = data?.mode


    return (
        <Box className={`${mode} widget-box product-table`} sx={{width: '100%' }}>
            {header === "tabs" ? <ProductTableTabs /> : <ProductTableDropDown />}
            <TableContainer sx={{ padding: "0px 20px" }}>
                <Table sx={{ minWidth: 0, fontSize: '11px' }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ border: 0 }}>
                            {Object.keys(rows[0]).map((key, index) => (
                                <TableCell
                                    className={
                                        `table-head-cell 
                                        ${index === Object.keys(rows[0]).length - 1 ? "" : 'has-border'}
                                        ${index === 0 ? "first-cell" : ""}
                                        `}
                                    align={index === 0 ? 'left' : 'center'}>{key}</TableCell>
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
                                    <TableCell
                                        className={
                                            `table-body-cell 
                                        ${idx === Object.keys(row).length - 1 === Object.keys(rows[0]).length - 1 ? "" : 'has-border'}
                                        ${index === rows.length - 1 ? "last-cell" : ""}
                                        `}
                                        align={idx === 0 ? 'left' : 'center'}>{row[key]}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}