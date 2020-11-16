import React, {component} from "react";

import "./breadcrumb.scss";

function Breadcrumb({items}) {
    const newList = items.map((item) => {

        if (item.id !== items.length){
                return (
                    <>
                        <a className="item" key={item.id} href={`${item.link}`}>
                            item.title
                        </a>
                        <span className="spliter">
                            {` / `}
                        </span>
                    </>
                );
            }

        return (
            <a className="item" key={item.id} href={`${item.link}`}>
                {item.title}
            </a>
        )
    });

    return (
        <div className="new-list">
            {newList}
        </div>
    );
}

export default Breadcrumb;