import React, {Component} from 'react';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias'
import Formulario from './componentes/Formulario'

class App extends Component {

  state = {
    noticias : []
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = (categoria = 'general') => {

    let url = `http://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=6a46b62656b34d0387f0f2279bb5f8da`
    
              console.log(url)
    
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(noticias => {
        this.setState({
          noticias : noticias.articles
        })
      })
  }
    

  render() {
    return (
      <div className="contenedor-app">
        
        <Header 
           titulo = 'Noticias'
        />
        <div className="container white contenedor-noticias">
            <Formulario 
              consultarNoticias = {this.consultarNoticias}
            />

            <Noticias 
              noticias = {this.state.noticias}
            />
        </div>

      </div>

     );
  }
  
}
  

export default App;
