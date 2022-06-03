import Image from 'next/image'

export default function Planetas({ id, nome, passageiros, tamanho, imgNave, velocidade}) {
    const NaveImg = "/images/nave/" + imgNave + ".jpeg";

    return (
        <div className="card">
            <span>
                <Image
                    width = "485px"
                    height = "100%"
                    src = { NaveImg.replaceAll(" ", "") }
                    ></Image>
            </span>
            <ul>
                <li
                    key={id}>
                    <div className='label'>Nome</div>
                    { nome }
                </li>

                <li
                    key={id}
                    className="person">

                    <div>
                        <div className='label'>Passageiros</div>
                        { passageiros }
                    </div>

                    <div>
                        <div className='label'>Velocidade</div>
                        { velocidade }
                    </div>
                    
                </li>

                <li key={id}>
                    <div className='label'>Tamanho</div>
                    { tamanho }
                </li>
            </ul>
        </div>
    )
}