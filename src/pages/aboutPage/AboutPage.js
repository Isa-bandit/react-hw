import React from "react";
import { Description } from "../../components/description/Description";

export function AboutPage(params) {
    const obj = {
        title: 'Title 2',
        description:"Description 2"
    }
    return(
        <>
        <Description obj={obj}/>
        </>
    )
}