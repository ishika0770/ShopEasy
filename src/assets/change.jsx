import { useState } from "react";

function change(){
    const [value,setValue]=useState("");

    const handleChange = (e)=>{
        setValue(e.tatget.value)
    }

    return <>
    <input type="text" id="txt"/>
    </>
}