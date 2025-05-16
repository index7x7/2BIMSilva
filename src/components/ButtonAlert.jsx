import React from "react"

function ButtonAlert( { mensagem , children } ) {
    return (
        <>
            <button onClick={() =>alert((mensagem))}>{children}</button>
        </>

    )

}
export default ButtonAlert