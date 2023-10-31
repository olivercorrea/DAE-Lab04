import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [
        {
          codigo: 1,
          descripcion: 'coca-cola',
          precio: 2.50,
        },
        {
          codigo: 2,
          descripcion: 'inka-cola',
          precio: 2.20,
        },
        {
          codigo: 3,
          descripcion: 'fanta',
          precio: 1.70,
        },
      ],
    };
    this.borrar = this.borrar.bind(this);
  }

  // borrar() {
  //   // Agrega aquí la lógica para borrar un artículo si es necesario.
  // }

  render() {
    return (
      <div className="container">
        <table className="table table-bordered table-dark">
          <thead className="thead-dark">
            <tr>
              <th>Código</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Borra</th>
            </tr>
          </thead>
          <tbody>
            {this.state.articulos.map((elemento) => {
              return (
                <tr key={elemento.codigo}>
                  <td>{elemento.codigo}</td>
                  <td>{elemento.descripcion}</td>
                  <td>{elemento.precio}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => this.borrar(elemento.codigo)}
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  

  borrar(cod) {
    var temp = this.state.articulos.filter((el)=>el.codigo !== cod);
    this.setState({
      articulos: temp
    })
}

}

export default App;