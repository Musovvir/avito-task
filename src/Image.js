import React from 'react';
import "./Image.css"

function Image(props) {
    return (
        <div className="col-4">
            <div className="image" style={{ backgroundImage: "url("+ props.image.url +")" }}>

            </div>
        </div>
    );
}

export default Image;
