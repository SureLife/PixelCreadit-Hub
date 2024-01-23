export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_IMAGE":
      return { ...state, searchImage: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_UPLOAD_HISTORY":
      return { ...state, uploadHistory: action.payload };
    case "SET_DOWNLOAD_HISTORY":
      return { ...state, downloadHistory: action.payload };
    case "setMembers":
      return { ...state, members: action.payload };
    case "setsingleMember":
      return { ...state, singleMember: action.payload };
    case "setSlideMenuOpen":
      return { ...state, slideMenuOpen: action.payload };
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    case "SetSelectedFile":
      return {
        ...state,
        selectedFile: action.payload,
      };
      case "SetUploadedImages":
      return {
        ...state,
        uploadedImages: action.payload,
      };
      case "SetTags":
        return {
          ...state,
          tags: action.payload,
        };
    default:
      return state;
  }
};

export const initialState = {
  searchImage: [],
  searchQuery: "",
  user: null,
  uploadHistory: [],
  downloadHistory: [],
  members: [],
  singleMember: [],
  slideMenuOpen: false,
  token: null,
  selectedFile: [],
  tags:"",
  uploadedImages:[],
};
