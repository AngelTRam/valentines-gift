import "../style/pregunta.css"

export function Pregunta(){
    var size = 14
    var variablesize = "fontSize: "+size+"px"

    function moresize(){
        size= size+5;
        variablesize = "fontSize: "+size+"px"
        console.log(size);
        console.log(variablesize)
    }

    return (
        <div>
            ¿ACEPTAS PERTENECERME TODOS LOS DIAS DE SAN VALENTIN POR EL RESTO DE TU VIDA?
            🙂
            <img className="gatito" src={require("../img/cat-kiss.gif")}/>
            <div className="botonesdiv">
            <button className="button-3" style={{variablesize}}>YES</button>
            <button className="button-2" onClick={moresize}>NO</button>
            </div>
        </div>
    )
}