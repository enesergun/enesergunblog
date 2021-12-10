import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Article from './Article'
import Home from './Home'

function RouteComponent(props) {
    return (
        <div className="routes">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path={`/${props.title}`} element={<Article postID={props.id} />} />
            </Routes>
        </div>
    )
}

export default RouteComponent
