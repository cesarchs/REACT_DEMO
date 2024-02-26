import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
    return ( // con el return le decimos lo que tiene que renderizar
    <section className='App'>
        <TwitterFollowCard isFollowing={true} userName="cesarchs" name="Cesar Chamale"/>
        <TwitterFollowCard isFollowing={false} userName="luis" name="wicho "/>
        <TwitterFollowCard isFollowing userName="ale.rodriguez" name="Alejandra moya "/>
    </section>
    )
}