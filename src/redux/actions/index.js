import axios from 'axios';

export const getResult = (userSearch) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`https://api.github.com/users/${userSearch}/repos`)
            if(!data.length) throw new Error("Theres no repositories for this User !" );
            let username = data[0].owner.login;
            let list = data.map(repo => repo.name);
            let avatar = data[0].owner.avatar_url;
            dispatch({
                type: 'LOAD_REPOS',
                payload: { username, list, avatar}
            })
        } catch (err) {
            
            dispatch({
                type: 'SET_ERROR',
                payload: err.message
            })
        }
    }
}

export const getRepoInfo = (userSearch, params) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`https://api.github.com/users/${userSearch}/repos`);
            let url = data[params.id - 1].url;
            let description = data[params.id - 1].description;
            let language = data[params.id - 1].language;
            let createdAt = data[params.id - 1].created_at;
            let updatedAt = data[params.id - 1].updated_at;
            let forksCount = data[params.id - 1].forks_count;
            let stargazersCount = data[params.id - 1].stargazers_count;
            let watchersCount = data[params.id - 1].watchers_count;
            let collaboratorsUrl= data[params.id - 1].collaborators_url;
            let contributorsUrl = data[params.id - 1].contributors_url;
            let deploymentsUrl = data[params.id - 1].deployments_url;
            let repoInfo = {
                url, 
                description, 
                language, 
                createdAt, 
                updatedAt, 
                forksCount, 
                stargazersCount, 
                watchersCount, 
                collaboratorsUrl, 
                contributorsUrl, 
                deploymentsUrl
            }
            dispatch({
                type: 'LOAD_REPO_INFO',
                payload: repoInfo
            })                        
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err.message
            })
        }
    }
}