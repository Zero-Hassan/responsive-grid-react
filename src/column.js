import React from 'react';
import {MEDIA } from "./mediaQueries";
import useMedia from "./hooks/useMedia";
import { useEffect, useState } from "react";

const defaultStyle={
}
const queries = Object.values(MEDIA);

export default function Column({children,template}){
var valid_template=null;
    const values = queries.map((q,index)=>{
    if(!template) return null;
    if(template[index]) valid_template=template[index];

    return `${valid_template.start} / span ${valid_template.span}`;
})
const currentvalue = useMedia(queries,values);
const [gridColumn,setGridColumn]=useState({});

useEffect(()=>{
   if(currentvalue) setGridColumn({gridColumn:currentvalue});
},[currentvalue])

return<div style={{...gridColumn}}>
    {children}
</div>
}