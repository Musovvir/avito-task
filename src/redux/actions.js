export function loadImages() {
    return (dispatch) => {
        dispatch({ type: 'load_images_start' });

        fetch("https://boiling-refuge-66454.herokuapp.com/images")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'load_images_success',
                    payload: json
                });
            });
    }
}
