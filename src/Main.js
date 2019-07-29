import React, {Component} from 'react';

import logo from './imgs/TechDayLogo.png';
import Principal from "./Components/Principal/Principal";
import Contato from "./Components/Contato/Contato";
import Equipe from "./Components/Equipe/Equipe";
import Inscreva from "./Components/Inscreva/Inscreva";
import Techtrends from "./Components/Techtrends/Techtrends";
import Techjobs from "./Components/Techjobs/Techjobs";

class Main extends Component {

    constructor(props){
        super(props)
        
        this.techjobsRef = React.createRef()
        this.techtrendsRef = React.createRef()
        this.inscrevaRef = React.createRef()
        this.equipeRef = React.createRef()
        this.contatoRef = React.createRef()
        
        this.handleScroll = this.handleScroll.bind(this)
        this.setActive = this.setActive.bind(this)
        
        this.state = {
            atTop: window.scrollY === 0
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(){
        this.setState({
          atTop: window.scrollY === 0
        });
    }

    setActive(id){
        let currentlyActive = document.getElementsByClassName('active');
        if(currentlyActive.length)
            currentlyActive[0].setAttribute('class', '')
        document.getElementById(id).setAttribute('class', 'active')
    }

    moveTo(ref){
        this.setActive(ref.current.className)
        window.scrollTo({
            top: ref.current.offsetTop - 60,
            behavior: 'smooth',
            block: 'start',
        });
    }

    moveToTop(){
        this.setActive('Home')
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            block: 'start',
        });
    }

    render() {
        return (
            <div className="Main-Content">
                <header className="header">
                    <ul className={"navBar "+(this.state.atTop ? "" : "with-background")}>
                        <li id="Home" className="active" onClick={() => this.moveToTop()}>TechDay</li>
                        <li id="TechJobs" onClick={() => this.moveTo(this.techjobsRef)}>TechJobs</li>
                        <li id="TechTrends" onClick={() => this.moveTo(this.techtrendsRef)}>TechTrends</li>
                        <li id="Inscreva-se" onClick={() => this.moveTo(this.inscrevaRef)}>Inscreva-se</li>
                        <li id="Equipe" onClick={() => this.moveTo(this.equipeRef)}>Equipe</li>
                        <li id="Contate-nos" onClick={() => this.moveTo(this.contatoRef)}>Contate-nos</li>
                    </ul>
                    <img className="logo" src={logo} alt="logo"/>
                </header>
                <div className="body">
                    <Principal />

                    <hr/>
                    
                    <div className="TechJobs" ref={this.techjobsRef}>
                        <Techjobs />
                    </div>

                    <hr/>
                    
                    <div className="TechTrends" ref={this.techtrendsRef}>
                        <Techtrends />
                    </div>

                    <hr/>
                    
                    <div className="Inscreva-se" ref={this.inscrevaRef}>
                        <Inscreva />
                    </div>

                    <hr/>
                    
                    <div className="Equipe" ref={this.equipeRef}>
                        <Equipe />
                    </div>

                    <hr/>
                    
                    <div className="Contate-nos" ref={this.contatoRef}>
                        <Contato />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;