import React from 'react'
import "./style.css"
// import { SignInBtn } from '../../components'
import { CreatePost, Navbar } from '../../containers'
import Feed from '../../containers/feed'
import { Footer } from "../../containers"

export default function Home() {
    return (
        <div className="home">
            <Navbar />

            <CreatePost />

            <Feed />

            <Footer />
            
        </div>
    )
}