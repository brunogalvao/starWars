import StarPeople from "../components/starPeople";
import Image from "next/image";

export async function getServerSideProps() {

    const cli = 'https://swapi.dev/api/people'
    const movie = 'https://swapi.dev/api/films'
    const starship = 'https://swapi.dev/api/starships/?page=2'

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

    const nave = await fetch(starship)
        .then(resp => {
            return resp.json();
        })
        .then((resp) => {
            return resp
        })

    return {
        props: {
            cliR,
            films,
            nave
        }
    }
}

export default function Home({ cliR, films, nave }) {

    console.log( cliR.results[0].gender );

    const logo = "/images/sw_logo.png";

    return (
        <div className="main"> 

            <div className="logo">
                {/* <img src="images/sw_logo.png" /> */}
                <Image
                    width = "497px"
                    height = "194px"
                    src = {logo}
                />
            </div>

            <div
                className="people">
                {cliR.results.map(item => {
                    return (
                        <StarPeople
                            id = { item.id }
                            nome = { item.name }
                            peso = { item.mass }
                            altura = { item.height }
                            // filme = { item.films.map(filme => films.results.map(item => { return ( <div> {item.title} </div> )
                            // })) }

                            // starship = { item.starships.map(starship => nave.results.map(item => { return ( <div> {item.name} </div> )})) }

                            // starship = { item.starships.map( starships => nave.results.map( i => i.name )) }

                            // starship = { item.starships }
                            dataAni = { item.birth_year }
                        />
                    )
                })}
            </div>

        </div>
    )
}
