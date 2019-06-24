import React from 'react';
import '../styles/styles.css';

const Box = (props) => {
    return (
        <div className="wrapper">
            <div style={{ backgroundColor: `${props.color}` }} className="content-box">
                    <button onClick={props.handleClick}>Change Color</button>
            </div>
        </div>
    );
}

export default Box;