import inputEl from "../components/Modal/res/AddComment/AddComment";

const initialState = {
  loading: true,
  opened: null,
  images: [],
  loadingComments: false,
  comments: [],
  fullSizeUrl: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "load_images_start":
      return {
        ...state,
        loading: true,
      };

    case "load_images_success":
      return {
        ...state,
        loading: false,
        images: action.payload,
      };

    case "show_image_start":
      return {
        ...state,
        opened: action.payload,
      };

    case "show_image_success":
      return {
        ...state,
        comments: action.payload.comments,
        fullSizeUrl: action.payload.url,
      };

    case "close":
      return {
        ...state,
        opened: null,
      };

    default:
      return state;
  }
}
