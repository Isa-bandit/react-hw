import React from "react";

export function Todo({arr}) {
    return(
        <>
        {arr.map((el,index) => <h3 key={index}>{el}</h3>)}
        </>
    )
}