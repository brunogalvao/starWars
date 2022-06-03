import Image from 'next/image'

export default function StarPeople({ nome, peso, altura, id, filme, starship, dataAni, ...props }) {

    const img = "/images/"+ nome +".png";

    console.log(img);

    return(
        <div className="card">
            <span>
                <Image
                    width = "485px"
                    height = "100%"
                    src = { img.replace(' ', '').replace(' ', '') }
                    ></Image>
            </span>
            <ul>
                <li key={id}>
                    <div className='label'>Nome</div>
                    { nome }
                </li>

                <li
                    key={id}
                    className="person">
                    <div>
                        <div className='label'>Altura</div>
                        { altura }
                    </div>
                    <div>
                        <div className='label'>Peso</div>
                        { peso }
                    </div>
                </li>

                <li key={id}>
                    <div className='label'>Data de Nascimento</div>
                    { dataAni }
                </li>
            </ul>
        </div>
    )
}
