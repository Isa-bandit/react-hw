import React from "react";
import { Todo } from "../../components/Todo";


export function TodosPage(params) {
    const arr = ["todo 1","todo 2","todo 3"]
    return(
        <>
        <Todo arr={arr}/>
        </>
    )
}