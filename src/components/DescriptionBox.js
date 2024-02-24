import * as React from 'react';
import Box from '@mui/material/Box';
import ProductTableTabs from './ProductTableTabs';
import ProductTableDropDown from './ProductTableDropDown';

export default function DescriptionBox({ data }) {

    const content = data.content
    const header = data.header
    const mode = data.mode

    return (
        <Box className={`${mode} widget-box desc-box`}>
            {header==="tabs" ? <ProductTableTabs /> : <ProductTableDropDown />}
            <Box
                sx={{
                    padding: '15px 3px'
                }}
            >
                <div
                    dangerouslySetInnerHTML={{ __html: `<div>${content}</div>` }}
                    style={{
                        maxHeight: '146px',
                        overflowY: 'auto',
                        padding: '0px 15px',
                        fontSize: '11px'
                    }} 
                    className={'custom'}   
                />
            </Box>
        </Box>
    );
}