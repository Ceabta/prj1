function OutraLista({itens}) {
    return(
        <>
            <h3>Lista de coisas boas:</h3>
            {
                itens.length > 0 ? (
                    // Map precisa que cada item tenha uma key/id
                    itens.map((item, index) => (<p key={index}>{item}</p>))
                ) 
                : (
                    <p>Não há itens na lista</p>
                )
            }
        </>
    )
}

export default OutraLista