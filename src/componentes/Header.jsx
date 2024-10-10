import React from 'react'


//react arrow function component
const Header = ({autor, titulo, ficha, info}) => {

    const HeaderSytles = {
        backgroundColor : "#888",
        color: "#000",
        textAlign: "center",
        height: "150px",
        marginTop: "20px",
    }

    const Titulo = {
        fontWeight: "500"
    }
    
    return (
    <header style={HeaderSytles}>

        {/* trayendo el prop de titulo desde app.jsx*/}
        <div className='container'>
            <h1 style={Titulo}> {titulo} </h1>
            <p>Autor: {autor}</p>
            <p style={
                {
                    color : "#39255d"
                }
            }>Ficha: {ficha}</p>
        </div>
    </header>
  )
}

export default Header