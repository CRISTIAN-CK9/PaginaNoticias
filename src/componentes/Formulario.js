import React, {Component} from 'react'
import PropTypes from 'prop-types';


class Formulario extends Component {

    categoriaRef = React.createRef();

    cambiarCategoria = (e) => {
        e.preventDefault();

        this.props.consultarNoticias(this.categoriaRef.current.value);
    };

    render() { 
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form onSubmit={this.cambiarCategoria}>
                        <h2>Noticias por categoria</h2>
                        <div className="input-field col s12 m8">
                            <select ref={this.categoriaRef}>
                                <option value="business" defaultValue>General</option>
                                <option value="entertainment" >Entretenimineto</option>
                                <option value="health" >Salud</option>
                                <option value="science" >Ciencia</option>
                                <option value="technology" >Tecnologia</option>
                                <option value="sports" >Deportes</option>
                            </select>
                        </div>
                        <div className="input-field col s12 m4 enviar">
                            <input type="submit" className="btn amer darken-2" valur="Buscar" />
                        </div>
                    </form>
                </div>
            </div>
          );
    }
}

Formulario.prototypes = {
    consultarNoticias: PropTypes.func.isRequired
}
export default Formulario;