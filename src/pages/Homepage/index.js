import React from 'react';
import { useSelector } from 'react-redux';

import {Form, Repo} from '../../components';
import{ Header } from '../../layout';


const Homepage = () => {

    const error = useSelector(state => state.error);
    const avatarLink = useSelector(state => state.avatar);
    

    let message = error && error.includes("No repos") ?
    "Theres no repositories for this User !" : "We cannot find that user.  Try a different name."
    
   
    return (
        <>
        <Header />
        <Form />
        { avatarLink ? <img src={avatarLink} alt="avatar image" style={{width:"5rem"}} /> : <span id="no-image-here"></span> } 
        { error ? <p role='alert'>{message}</p> : <Repo /> }
        </>
    )
}

export default Homepage;