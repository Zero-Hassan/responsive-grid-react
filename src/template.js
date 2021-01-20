import React from 'react';
import {MEDIA,MARGINS,Gutters } from "./mediaQueries";
import useMedia from "./hooks/useMedia";
import { useEffect, useState } from "react";

const defaultStyle={
    display:'grid'
}
const queries = Object.values(MEDIA);

export default function Template({children,margins, gutters,template /*[["a a b","a a c"]]*/}){

    const _margins=margins||Object.values(MARGINS);
    const _gutters=gutters||Object.values(Gutters);
    let gap=null;
    let padding=null;   
    let gridTemplate=null;
    const values = queries.map((q,index)=>{
    if(template && template[index]) gridTemplate=template[index].map(t=>`"${t}"`).join(" ");
    if(_margins[index]) padding=_margins[index];
    if(_gutters[index]) gap=_gutters[index];

    return {gridTemplate,gap,padding};
})
const currentvalue = useMedia(queries,values);
const [style,setStyle]=useState({});

useEffect(()=>{
   if(currentvalue) setStyle(currentvalue);
},[currentvalue])

return<div style={{...defaultStyle, ...style}}>
    {children}
</div>
}