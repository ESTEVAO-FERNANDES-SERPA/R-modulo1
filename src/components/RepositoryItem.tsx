import React from "react"

interface RepositoryItemProps{
    repository:{
        name: string;
        description: string;
        html_url: string
    }
}

const RepositoryItem = ({repository}:RepositoryItemProps) => {
    return (
        <li>
            <strong>{repository?.name}</strong>
            <p>forms in React</p>
            
            <a href={repository?.html_url}>Acessar repositorio</a>
        </li>
    );
}


export default RepositoryItem