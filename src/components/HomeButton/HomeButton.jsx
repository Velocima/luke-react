import React from 'react';
import {  useLocation } from "react-router-dom";

export function HomeButton () {
    const location = useLocation().pathname;
    return (
        location !== "/" ? 
        <i className="fas fa-home"></i> : 
        <i className="fas fa-home invisible"></i>
    )
}