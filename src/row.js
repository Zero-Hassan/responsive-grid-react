import React from 'react';
import { Gutters, MARGINS, MEDIA } from "./mediaQueries";
import useMedia from "./hooks/useMedia";
import { useEffect, useState } from "react";

const defaultStyle = {
    display: "grid",
    gridTemplateColumns: 'repeat(1,161px)',
    width: '100%',
    overflow: 'auto',
    boxSizing: 'border-box'
}
const queries = Object.values(MEDIA);

export default function Row({ children, margins, gutters, columnWidths }) {


    const _margins = margins || Object.values(MARGINS);
    const _gutters = gutters || Object.values(Gutters);

    let gap = null;
    let padding = null;
    let gridTemplateColumns = null;
    const totalColumns = children && children.length;
    const values = queries.map((q, index) => {
        if (_margins[index]) padding = _margins[index];
        if (_gutters[index]) gap = _gutters[index];
        if (columnWidths[index]) gridTemplateColumns = `repeat(${totalColumns},${columnWidths[index]})`
        return { gridTemplateColumns, gap, padding }
    });

    const value = useMedia(queries, values);
    const [columnTemplate, setColumnTemplate] = useState({});

    useEffect(() => {
        console.log(value);
        setColumnTemplate(value || {});
    }, [value])

    return <div style={{width:'100%',boxSizing: 'border-box'}}>
        <div style={{ ...defaultStyle, ...columnTemplate }}>
            {children}
        </div>
    </div>
}