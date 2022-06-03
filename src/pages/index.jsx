import StarPeople from "../components/starPeople";
import StarFilms from "../components/starFilms";
import StarNave from "../components/starNave";
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

    // console.log( cliR.results[0].films.map(i => films.results) );
    console.log( nave.results[0] );

    const logo = "/images/sw_logo.png";

    return (
        <div className="main">

            <div className="logo">
                <Image
                    width="496px"
                    height="194px"
                    src={logo}
                />
            </div>

            <nav>
                <li>People</li>
                <li>Films</li>
                <li>Starship</li>
            </nav>

            <div
                className="people">
                {cliR.results.map(item => {
                    return (
                        <StarPeople
                            id={item.id}
                            nome={item.name}
                            peso={item.mass}
                            altura={item.height}

                            // starship = { item.starships.map(starship => nave.results.map(item => { return ( <div> {item.name} </div> )})) }

                            // starship = { item.starships.map( starships => nave.results.map( i => i.name )) }

                            dataAni={item.birth_year}
                        />
                    )
                })}
            </div>

            <div>
                {films.results.map(item => {
                    return (
                        <StarFilms
                            id={item.id}
                            films={item.title}
                            data={item.release_date}
                            diretor={item.director}
                            img={item.episode_id}
                        />
                    )
                })}
            </div>

            <div>
                {nave.results.map(item => {
                    return (
                        <StarNave
                            id = {item.id}
                            nome = {item.name}
                            passageiros = {item.passengers}
                            tamanho = {item.length}
                            velocidade = {item.hyperdrive_rating}
                            imgNave = {item.name}
                            prod = {item.manufacturer}
                        />
                    )
                })}
            </div>
        </div>
    )
}
