import * as React from 'react';
import Box from '@mui/material/Box';
import styles from "../css/override.css"

export default function DescriptionBox({ data }) {

    const content = data.content
    const header = data.header
    const mode = data.mode

    return (
        <Box className={`${mode} widgetBox`} sx={{...data.style, width: '100%' }}>
            {header}
            <Box
                sx={{
                    padding: '15px 3px'
                }}
            >
                <div
                    dangerouslySetInnerHTML={{ __html: content }}
                    style={{
                        fontSize: '11px',
                        textAlign: 'left',
                        maxHeight: '146px',
                        overflowY: 'auto',
                        padding: '0px 15px'
                    }} 
                    className={'custom'}   
                />
            </Box>
        </Box>
    );
}