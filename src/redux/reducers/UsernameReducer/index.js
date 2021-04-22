const initState = { 
    username: "",
    repos: [],
    repoInfo: {},
    loading: false
}


const usernameReducer = (state=initState, action) => {
    switch(action.type){
        case "LOADING":
            return { ...state, username: action.payload, repos: [], repoInfo: {}, loading: true, avatar: null, error: false };
        case "LOAD_REPOS":
            const username = action.payload.username;
            const repoList = action.payload.list;
            const avatar = action.payload.avatar;
            return { ...state, username: username, repos: repoList, avatar: avatar , error: false };
        case "LOAD_REPO_INFO":
            const repoInfo = action.payload;
            return { ... state, repoInfo: repoInfo, avatar: null, error: false };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
}

export default usernameReducer;