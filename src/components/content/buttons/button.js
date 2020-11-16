import React, {component} from "react";

import './button.scss';

function Button({text, style, type, href=""}) {
    let temp = <button className={`button ${style}`} type={`${type}`}>{text}</button>;

    if (type === "a"){
        temp = <a className={`button ${style}`} href={`${href}`}>{text}</a>
    }

    return (
       temp
    );
}

export default Button;