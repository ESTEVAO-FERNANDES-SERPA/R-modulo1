import { useState, useEffect } from "react";
import RepositoryItems from "./RepositoryItem";
import "../styles/repositories.scss"


interface Repository{
    name:string;
    description: string;
    html_url: string;
}


export default function RepositoryList(){
    
    const[repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(()=>{
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[])

    return(
        <section className="repository-list">
            <h1>Lista de repositorios</h1>

            <ul>
                {
                    repositories.map((repository)=>{
                        return<RepositoryItems key={repository.name} repository={repository} />
                    })
                }
            </ul>
        </section>
    )
}