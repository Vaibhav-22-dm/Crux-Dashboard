import React, { Component, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ProductTable from "./ProductTable";
import ProductTableTabs from "./ProductTableTabs";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Typography } from "@mui/material";


export default function ZoomBox({ component, title }) {
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
                    <div className="tools">
                        <div className="scale">{zoomScale.toFixed(0)}%</div>
                        <button onClick={() => zoomIn()}><ZoomInIcon /></button>
                        <button onClick={() => zoomOut()}><ZoomOutIcon /></button>
                        <button onClick={() => resetTransform()}><CloseIcon /></button>
                    </div>
                    <TransformComponent>
                        <div className="zoombox-component-container">
                            <Typography className="zoombox-component-title">{title}</Typography>
                            <div>
                                {component}
                            </div>
                        </div>
                    </TransformComponent>
                </React.Fragment>
            )
            }
        </TransformWrapper >
    );
};