import React from 'react';
export default function Item({children,area}){


return<div style={{gridArea:area}}>
    {children}
</div>
}