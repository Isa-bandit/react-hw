import React from "react";

export function Description({obj}) { // {title : ...}
    return(
        <>
        <h1>{obj.title}</h1>
        <p>{obj.description}</p>
        </>
    )
}