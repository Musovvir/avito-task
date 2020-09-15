export function loadImages() {
  return (dispatch) => {
    dispatch({ type: "load_images_start" });

    fetch("https://boiling-refuge-66454.herokuapp.com/images")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load_images_success",
          payload: json,
        });
      });
  };
}

export function showModal(id) {
  return (dispatch) => {
    dispatch({ type: "show_image_start", payload: id });

    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "show_image_success",
          payload: json,
        });
      });
  };
}

export function closeModal() {
  return (dispatch) => {
    dispatch({ type: "close" });
  };
}
