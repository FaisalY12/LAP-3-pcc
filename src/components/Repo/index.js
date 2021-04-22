import React, { useState }  from 'react';
import { useSelector } from 'react-redux';
import {NavLink, Switch} from 'react-router-dom'

const Repo = () => {
    
    const repoList = useSelector(state => state.repos);

    const list =  repoList.map( (name,index) => <NavLink to={`/Repopage/${index + 1}`}><h1>{name}</h1></NavLink>)


    return (        
        <>
        <h1>Repolist</h1>        
       {list}
        </>
    )


}

export default Repo