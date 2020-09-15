import React from "react";
import "./Image.css";
import { showModal } from "../../../../../../redux/actions";
import { useDispatch } from "react-redux";

function Image(props) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showModal(props.image.id));
  };
  return (
    <div className="col-4" onClick={handleClick}>
      <div
        className="image"
        style={{ backgroundImage: "url(" + props.image.url + ")" }}
      ></div>
    </div>
  );
}

export default Image;
