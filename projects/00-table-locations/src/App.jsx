import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "cesarchs",
    name: "Cesar Chamale",
    isFollowing: true,
  },
  {
    userName: "marcoss",
    name: "marquinios",
    isFollowing: false,
  },
  {
    userName: "gabi_munoz",
    name: "gabriela muñoz",
    isFollowing: true,
  },
];

export function App() {
  const [isFollowing, setIsFollowing] = useState(true);
  console.log(" [App] render estado inicial en App: ", isFollowing);

  /*
  SE PUEDE DE CUALQUIERA DE LAS 2 MANERAS, EJEMPLO DE FUNCION FLECHA
  users.map((user) => {
    console.log(user);
  });

  users.map(({userName,name,isFollowing}) =>
  console.log(userName,name, isFollowing)
  );
*/ 
  return (
    // con el return le decimos lo que tiene que renderizar
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            userName={userName}
            initialIsFollowing={isFollowing}
            key={userName}
          >
            {name}
          </TwitterFollowCard>
        );
      })}

      <TwitterFollowCard userName="cesarchs" initialIsFollowing={isFollowing}>
        Leonel Sican
      </TwitterFollowCard>
      <TwitterFollowCard userName="marcoss" name="Marcos kw" />
      <button
        className="tw-followCard-button"
        onClick={() => setIsFollowing(!isFollowing)}
      >
        Cambiar de estado a prop en padre
      </button>
    </section>
  );
}
