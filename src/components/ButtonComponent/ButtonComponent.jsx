import "./ButtonComponent.css";

// Componenetes siempre en mayuscula
const ButtonComponent = (props) => {
    console.log("Boton!");
    console.log(props);
    return (
      <div>
        <button className="btn">{props.label}</button>
        <br />
        <small>Soy un botón</small>
      </div>
    )
}

export default ButtonComponent;