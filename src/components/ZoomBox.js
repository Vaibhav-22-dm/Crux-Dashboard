import React, { Component, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ProductTable from "./ProductTable";
import ProductTableTabs from "./ProductTableTabs";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";

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
    header: <ProductTableTabs bottomBorderColor='rgba(225, 225, 225, 1)' color='rgba(187, 187, 187, 1)' activeColor='rgba(94, 90, 219, 1)' />,
    mode: 'light',
    style: {
        borderRadius: '15px',
        boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#FFFFFF'
    },
    color1: '#5E5ADB',
    color2: '#474747',
    color3: '#393939',
    tableBorderColor: 'rgba(246, 246, 246, 0.1)'
}

export default function ZoomBox() {
    const [zoomScale, setZoomScale] = useState(100)

    function handleTransform(e) {
        setZoomScale((e.instance.transformState.scale - 1) * 100 + 100); // output scale factor
    }

    return (
        <TransformWrapper
            initialScale={1}
            initialPositionX={180}
            initialPositionY={50}
            onTransformed={(e) => handleTransform(e)}
        >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <React.Fragment>
                    <div className="tools" style={{
                        float: "right",
                        background: "#FFFFFF",
                        margin: "5px",
                        border: "1px solid #D7D7D7",
                        display: "flex",
                        justifyContent: "flex-end",
                        padding: "3px",
                    }} >
                        <div style={{
                            border: "1px solid #D7D7D7",
                            fontSize: "13px",
                            padding: "0 7px",
                            display: "flex",
                            alignItems: "center"
                        }}>{zoomScale.toFixed(0)}%</div>
                        <button onClick={() => zoomIn()}><ZoomInIcon /></button>
                        <button onClick={() => zoomOut()}><ZoomOutIcon /></button>
                        <button onClick={() => resetTransform()}><CloseIcon /></button>
                    </div>
                    <TransformComponent>
                        <ProductTable data={data1} />
                    </TransformComponent>

                    <div style={{
                        position: "absolute",
                        bottom: "10px",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <button className="colorPicker" style={{ background: "#282828" }}></button>
                        <button className="colorPicker" style={{ background: "#FFFFFF"}}></button>
                        <button className="colorPicker" style={{ background: "#5E5ADB" }}></button>
                    </div>
                </React.Fragment>
            )
            }
        </TransformWrapper >
    );
};