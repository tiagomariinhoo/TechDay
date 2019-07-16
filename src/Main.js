import React, {Component} from 'react';

import{
    Route, NavLink, HashRouter
} from "react-router-dom";

import backgroundHeader from './imgs/background-header2.jpg';
import logo from './imgs/TechDayLogo.png';
import Principal from "./Components/Principal/Principal";
import Contato from "./Components/Contato/Contato";
import Equipe from "./Components/Equipe/Equipe";
import Inscreva from "./Components/Inscreva/Inscreva";
import Techtrends from "./Components/Techtrends/Techtrends";
import Techjobs from "./Components/Techjobs/Techjobs";

class Main extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <div className="Main-Content">
                        <header className="header">
                            <div className="container">
                                <img className="background" src={backgroundHeader} alt="background"/>
                                <img className="logo" src={logo} alt="logo"/>
                            </div>
                            <ul className="navBar">
                                <li><NavLink exact to="/">Principal</NavLink></li>
                                <li><NavLink to="/techjobs">TechJobs</NavLink></li>
                                <li><NavLink to="/techtrends">TechTrends</NavLink></li>
                                <li><NavLink to="/inscreva">Inscreva-se</NavLink></li>
                                <li><NavLink to="/equipe">Equipe</NavLink></li>
                                <li><NavLink to="/contato">Contate-nos</NavLink></li>
                            </ul>
                        </header>
                        <div className="body">
                            <Route exact path="/" component={Principal}/>
                            <Route path="/techjobs" component={Techjobs}/>
                            <Route path="/techtrends" component={Techtrends}/>
                            <Route path="/inscreva" component={Inscreva}/>
                            <Route path="/equipe" component={Equipe}/>
                            <Route path="/contato" component={Contato}/>
                        </div>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default Main;