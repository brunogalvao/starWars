export default function StarPeople({ nome, peso, altura, id, filme, ...props }) {

    return(
        <>
            <ul>
                <li key={id} {...props}>{ nome }</li>
                <li key={id} {...props}>altura <b>{ altura }</b></li>
                <li key={id} {...props}>peso <b>{ peso }</b></li>
                <li key={id} className="filme">Filme <li>{ filme }</li></li>
            </ul>
        </>
    )
}
