import RepositoryItems from "./RepositoryItem";

export default function RepositoryList(){
    const repository = {
        name:'unform',
        description:'forms in React',
        link:'https://youtube.com'
    }
    return(
        <section className="repository-list">
            <h1>Lista de repositorios</h1>

            <ul>
                <RepositoryItems repository={repository} />
                <RepositoryItems repository={repository} />
                <RepositoryItems />
            </ul>
        </section>
    )
}