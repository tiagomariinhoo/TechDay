import React, {Component} from "react";
import persona from '../../imgs/persona.png';
import './equipe.css';

class Equipe extends Component {
    render() {
        return (
            <div className ="galeria">
                <div id = "TechJobs">
                    <h3>TechJobs</h3>
                    <ul className = "linha1">
                        <li><img src={persona} alt = "Persona"></img>
                        <figcaption>Vinicius Costa<br></br> Gerente de Projeto</figcaption></li>
                        <li><img src={persona} alt = "Persona"></img>
                        <figcaption>Tiago Marinho<br></br> Gerente de Comunicação</figcaption></li>
                        <li><img src={persona} alt = "Persona"></img>
                        <figcaption>Igor Theotônio<br></br> Gerente de Escopo</figcaption></li>
                        <li><img src={persona} alt = "Persona"></img>
                        <figcaption>Andressa Oliveira<br></br> Gerente de RH</figcaption></li>
                        <li><img src={persona} alt = "Persona"></img>
                        <figcaption>Glauber Leite<br></br> Gerente de Tempo </figcaption></li>
                        <li><img src={persona} alt = "Persona"></img>
                        <figcaption>Romário Pantaleão<br></br> Gerente de Stakeholders </figcaption></li>
                        <li><img src={persona} alt = "Persona"></img>
                        <figcaption>José Carlos<br></br> Gerente de Aquisição </figcaption></li>
                        <li><img src={persona} alt = "Persona"></img>
                        <figcaption>Gabriel Freire <br></br> Gerente de Custos </figcaption></li>
                        <li><img src={persona} alt = "Persona"></img>
                        <figcaption>Ziran de Moura<br></br> Gerente de Qualidade</figcaption></li>
                        <li><img src={persona} alt = "Persona"></img>
                        <figcaption>Dayvson Sales<br></br> Gerente de Riscos </figcaption></li>
                        <li><img src={persona} alt = "Persona"></img>
                        <figcaption>Caue dos Santos<br></br> Operacional</figcaption></li>
                        <li><img src={persona} alt = "Persona"></img>
                        <figcaption>José Barros<br></br> Operacional</figcaption></li>
                        <li><img src={persona} alt = "Persona"></img>
                        <figcaption>Luan Viana<br></br>Operacional </figcaption></li>
                        
                    </ul>
                </div>

                <div id = "TechTrends">
                    <h3>TechTrends</h3>
                    <ul className = "linha1">
                        <li><img src={persona} alt = "Persona"></img></li>
                        <li><img src={persona} alt = "Persona"></img></li>
                        <li><img src={persona} alt = "Persona"></img></li>
                    </ul>
                </div>
                
            </div>
        );
    }
}

export default Equipe;