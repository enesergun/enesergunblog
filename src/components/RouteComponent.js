import React from 'react'
import { Routes, Route } from "react-router-dom";
import Article from './Article'
import Home from './Home'

function RouteComponent(props) {
    return (
        <div className="routes">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path={`/${props.pathname}`} element={<Article postID={props.id} />} />
            </Routes>
        </div>
    )
}

export default RouteComponent
