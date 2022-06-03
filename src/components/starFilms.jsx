import Image from 'next/image'

export default function Films({ films, id, data, diretor, img }) {

    const filmsImg = "/images/films/" + img + ".png";

    return (
        <div className="card">
            <span>
                <Image
                    width = "485px"
                    height = "100%"
                    src = { filmsImg }
                    ></Image>
            </span>
            <ul>
                <li
                    key={id}>
                    <div className='label'>Nome</div>
                    { films }
                </li>

                <li
                    key={id}>
                    <div>
                        <div className='label'>Lançamento</div>
                        { data }
                    </div>
                    
                </li>

                <li key={id}>
                    <div className='label'>Data de Nascimento</div>
                    { diretor }
                </li>
            </ul>
        </div>
    )
}
