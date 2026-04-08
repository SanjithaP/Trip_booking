import React from 'react';
const AboutUs=React.lazy(()=>import('./About'));


const Home = () =>{
    return(
        <div className="'App">
            <h1>Home Page</h1>
            <React.Suspense fallback={<div>Loading</div>}/>
        </div>
    )
}