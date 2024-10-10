import {React, useState} from 'react'
import Header from './componentes/Header';
import ComentarioItem from './componentes/ComentarioItem';
import comentarios from './data/Comentarios';

function App() {

    const [comments, setComments] = useState(comentarios)

    //siempre debe haber un solo bloque que los envuelva a todos
    //las clases cambian a ser "className"

    const titulo = "App de comentarios";
    const Autor = "Joan Fontecha";
    const ficha = "2902093";
    const info = "info";
    
    const loading = false;
    const showComments = true;
    if(loading === true) return (
        <h1> Cargando comentarios... </h1>
    );

  return ( 
    <div className='container'> 
        {/* Se pueden usar estilos en linea tambien*/}
        <div style={{backgroundColor: 'brown',
        }}
        ></div>

        {/* prop */}
        <Header titulo={titulo} autor={Autor} ficha={ficha} info={info}/>

        {showComments && (

        <div className='comments'>
            <h3>Comentarios ({ comentarios.length})</h3>
            <ul>
                { 
                    comments.map(comentario => 
                            <ComentarioItem 
                                key={comentario.id} 
                                comentario={comentario.comentario}
                                calificacion={comentario.calificacion}
                            />
                    )
                }
            </ul>
        </div>

        )
        
    }
    </div>
  )
}

export default App