import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
    return ( // con el return le decimos lo que tiene que renderizar
    <section className='App'>
        <TwitterFollowCard userName="cesarchs" >
            Leonel Sican
        </TwitterFollowCard>
        <TwitterFollowCard userName="cesarchs" name="Cesar Chamale" >
            Cesar Chamale 
        </TwitterFollowCard>
        <TwitterFollowCard name="wicho "/>
        <TwitterFollowCard userName="marcoss" name="Marcos kw"/>
    </section>
    )
}