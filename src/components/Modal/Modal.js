import React from "react";
import "./Modal.css";
import { useDispatch, useSelector } from "react-redux";
import Comments from "./res/Comments/Comments";
import { closeModal } from "../../redux/actions";
import AddComment from "./res/AddComment/AddComment";

function Modal() {
  const opened = useSelector((state) => state.opened);

  const loadingComments = useSelector((state) => state.loadingComments);
  const comments = useSelector((state) => state.comments);
  const fullSizeUrl = useSelector((state) => state.fullSizeUrl);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(closeModal());
  };

  if (opened === null) {
    return null;
  }

  return (
    <div className="my-window">
      {loadingComments ? (
        "идет загрузка"
      ) : (
        <div className="dis">
          <div className="modal-win">
            <div className="image-modal">
              <img src={fullSizeUrl} alt="" width="100%" height="100%" />
              <AddComment />
            </div>
            {comments.map((comment) => {
              return <Comments comment={comment} />;
            })}
            <div className="close" onClick={handleClick}>
              x
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
