import React from "react"

const RepositoryItem = ({repository}) => {
    return (
        <li>
            <strong>{repository?.name ??"default"}</strong>
            <p>forms in React</p>

            <a href={repository?.link}>Acessar repositorio</a>
        </li>
    );
}


export default RepositoryItem