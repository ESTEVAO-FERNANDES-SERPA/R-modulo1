import React from "react"

const RepositoryItem = ({repository}) => {
    return (
        <li>
            <strong>{repository?.name}</strong>
            <p>forms in React</p>

            <a href={repository?.html_url}>Acessar repositorio</a>
        </li>
    );
}


export default RepositoryItem