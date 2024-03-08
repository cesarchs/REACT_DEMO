import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
    const [isFollowing, setIsFollowing] = useState (true)
    console.log(" [App] render estado inicial en App: ", isFollowing)
    return ( // con el return le decimos lo que tiene que renderizar
    <section className='App'>
        <TwitterFollowCard userName="cesarchs" initialIsFollowing = {isFollowing}>
            Leonel Sican
        </TwitterFollowCard>
        <TwitterFollowCard userName="marcoss" name="Marcos kw"/>
        <button className='tw-followCard-button' onClick={()=> setIsFollowing(!isFollowing)}>Cambiar de estado a prop en padre</button>
    </section>
    )
}