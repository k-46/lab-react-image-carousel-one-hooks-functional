import React from 'react'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';



function Button(props) {

    const handleClick = (side) =>{
        props.handleClick(side)
    }

    return (
        <div
          id={props.side + "Button"}
          onClick={() =>
            props.side == "left"
              ? handleClick("left")
              : handleClick("right")
          }
        >
          {props.side == "left" ? (
            <ArrowBackIos style={{ color: "white", fontSize: "30px" }} />
          ) : (
            <ArrowForwardIos style={{ color: "white", fontSize: "30px" }} />
          )}
        </div>
      );
}

export default Button