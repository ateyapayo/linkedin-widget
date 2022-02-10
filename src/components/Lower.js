import React from "react"

export default function Main() {
    return (
        <div className="main">
            <header>
                <h1>Andrea Piano</h1>
                <h2>Frontend Developer</h2>
                <a href="http://andreapiano.github.io"><h3>andreapiano.github.io</h3></a>
            </header>
            
            <div className="buttons">
                <a href="mailto:andreapiano1992@gmail.com"><button className="email"><img src="../images/letter.svg"/>Email</button></a>
                <a href="https://www.linkedin.com/in/andreapiano" target="_blank"><button className="linkedin"><img src="../images/linkedin.svg"/>LinkedIn</button></a>
            </div>
            
            <div className="presentation">
                <h1>About</h1>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                
                <h1>Interests</h1>
                <p>Programming, foreign languages, photography, traveling, facing new challenges in life, getting to know people, music, health, powerlifting and finance.</p>
            </div>
            
            <footer>
                <div className="icon">
                    <a href="https://www.facebook.com/andreapianolandia" target="_BLANK"><img src="../images/facebook.svg"/></a>
                    <a href="https://www.instagram.com/andreapiano.photography" target="_BLANK"><img src="../images/instagram.svg"/></a>
                    <a href="http://andreapiano.github.io" target="_BLANK"><img src="../images/github.svg"/></a>
                </div>
            </footer>
            
            
        </div>
    )
}