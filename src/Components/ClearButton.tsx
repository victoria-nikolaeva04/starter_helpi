import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";


export function ClearButton(): JSX.Element{
    const [text, setText] = useState("");

    return<div>
        <button onClick={() => setText("")}>Clear</button>
    </div>; 
}