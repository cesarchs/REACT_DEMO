import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
    return ( // con el return le decimos lo que tiene que renderizar
    <section className='App'>
        <TwitterFollowCard isFollowing={true} userName="cesarchs" >
            Leonel Sican
        </TwitterFollowCard>
        <TwitterFollowCard isFollowing={true} userName="cesarchs" name="Cesar Chamale" >
            Cesar Chamale 
        </TwitterFollowCard>
        <TwitterFollowCard isFollowing={false} name="wicho "/>
        <TwitterFollowCard isFollowing userName="marcoss" name="Marcos kw"/>
    </section>
    )
}