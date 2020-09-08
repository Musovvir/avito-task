const initialState = {
    loading: true,
    images: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'load_images_start':
            return {
                ...state,
                loading: true
            };

        case 'load_images_success':
            return {
                ...state,
                loading: false,
                images: action.payload
            }

        default:
            return state;
    }
}
