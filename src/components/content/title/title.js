import React, { Component } from "react";
import styled from 'styled-components';

function Title({text, size, color = "black"}) {

    const NewTitle = styled.h2`
        font-size: ${size}px;
        color: ${color}
    `;

    return (
       <NewTitle>
           {text}
       </NewTitle>
    );
}

export default Title;