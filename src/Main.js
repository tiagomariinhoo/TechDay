import React, {Component} from 'react';

import{
    Route, NavLink, HashRouter
} from "react-router-dom";

import Principal from "./Components/Principal/Principal";
import Contato from "./Components/Contato/Contato";
import Equipe from "./Components/Equipe/Equipe";
import Inscreva from "./Components/Inscreva/Inscreva";
import Techtrends from "./Components/Techtrends/Techtrends";
import Techjobs from "./Components/Techjobs/Techjobs";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                <h1>TechDay</h1>
                <ul className="header">
                <li><NavLink exact to="/">Principal</NavLink></li>
                <li><NavLink to="/techjobs">TechJobs</NavLink></li>
                <li><NavLink to="/techtrends">TechTrends</NavLink></li>
                <li><NavLink to="/inscreva">Inscreva-se</NavLink></li>
                <li><NavLink to="/equipe">Equipe</NavLink></li>
                <li><NavLink to="/contato">Contate-nos</NavLink></li>
                </ul>

                <div className="content">
                <Route exact path="/" component={Principal}/>
                <Route path="/techjobs" component={Techjobs}/>
                <Route path="/techtrends" component={Techtrends}/>
                <Route path="/inscreva" component={Inscreva}/>
                <Route path="/equipe" component={Equipe}/>
                <Route path="/contato" component={Contato}/>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;