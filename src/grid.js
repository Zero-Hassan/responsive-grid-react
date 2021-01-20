import React from 'react';
import { Gutters, MARGINS, MEDIA } from "./mediaQueries";
import useMedia from "./hooks/useMedia";
import { useEffect, useState } from "react";

const defaultStyle={
    display:'grid',
}
const queries = Object.values(MEDIA);

export default function Grid({children,columns,margins,gutters}){


const _margins=margins||Object.values(MARGINS);
const _gutters=gutters||Object.values(Gutters);
let gap=null;
let padding=null;
let currentColumns=null;
let gridTemplateColumns=1;

const calculteColumnTemplate=(gap,padding,columns)=>{
    const notUsed= padding*2+gap*(columns-2);
    return `repeat(${columns},calc( ( 100% - ${notUsed}px ) / ${columns} ) )`
}
const values=queries.map((q,index)=>{
if(_margins[index]) padding=_margins[index];
if(_gutters[index]) gap=_gutters[index];
if(columns[index]) currentColumns=columns[index];
gridTemplateColumns=calculteColumnTemplate(gap,padding,currentColumns);
return {gridTemplateColumns,gap,padding}
});

const value = useMedia(queries,values);
const [columnTemplate,setColumnTemplate]=useState({});

useEffect(()=>{
    console.log(value);
    setColumnTemplate(value || {});
},[value])

return<div style={{...defaultStyle,...columnTemplate}}>
    {children}
</div>
}