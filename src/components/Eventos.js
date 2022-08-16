import Button from "./evento/Button"

function Evento({numero}){
    function meuEvento(){
        console.log(`Ativando 1º evento`)
    }

    function segundoEvento(){
        console.log(`Ativando 2º evento`)
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Evento