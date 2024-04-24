import React from "react";
import { Description } from "../../components/description/Description";

export function MainPage(params) {
    const obj = {
        title: 'Title',
        description:"Description"
    }
    return(
        <>
        <Description obj= {obj}/>
        </>
    )
}