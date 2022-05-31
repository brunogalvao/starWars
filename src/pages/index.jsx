import StarPeople from "../components/starPeople";

export async function getServerSideProps() {

    const cli = 'https://swapi.dev/api/people'
    const movie = 'https://swapi.dev/api/films'

    const cliR = await fetch(cli)
        .then(resp => {
            return resp.json();
        })
        .then((resp) => {
            return resp
        })

    const films = await fetch(movie)
        .then(resp => {
            return resp.json();
        })
        .then((resp) => {
            return resp
        })

    return {
        props: {
            cliR,
            films
        }
    }
}

export default function Home({ cliR, films }) {

    // console.log(cliR.results.map(item => item.films.map(filme => films.results.map(item => item.title))));

    return (
        <div className="main">
            <h1>Star War's Page</h1>

            <div
                className="people">
                {cliR.results.map(item => {
                    return (
                        <StarPeople
                            id = { item.id }
                            nome = { item.name }
                            peso = { item.mass }
                            altura = { item.height }
                            filme = { item.films.map(filme => films.results.map(item => { return ( <div> {item.title} </div> )
                            })) }
                        />
                    )
                })}
            </div>

        </div>
    )
}
