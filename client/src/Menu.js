import React, {Component} from 'react';
import M from 'materialize-css';
import gitlogo from './img/github.png';
import logo32 from './img/logo32.png';

export class TopMenu extends React.Component{
    constructor(props){
      super(props);
      this.state ={
        isAdmin: props.isAdmin,
      };
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var options ={};
        var instances = M.Sidenav.init(elems, options);
      });
    }

    renderOptions(isAdmin){
      if(isAdmin){
        return(
          <div>
          <li><a>Log Out</a></li>
          </div>
        );
      }else{
        return(
          <div>
          <li><a>Log Out</a></li>
          <li><a>2</a></li>
          <li><a>3</a></li>
          </div>
        );
      }
    }

    render(){
      return(
        <div className="navbar">
          <nav>
            <div className="nav-wrapper red accent-4">
              <ul className="left hide-on-med-and-down">
                <li><a href="#" className="brand-logo left">
                  <img src={logo32} alt="deSCubra logo" />
                  #deSCubra
                </a></li>
              </ul>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                {this.renderOptions(this.state.isAdmin)}
              </ul>
            </div>
          </nav>
          <ul className="sidenav" id="mobile-demo">
            {this.renderOptions(this.state.isAdmin)}
          </ul>
        </div>
      );
    }
}

export class FootMenu extends React.Component{
  render(){
  return(
      <footer className="page-footer red accent-4">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">#deSCubra</h5>
              <p className="grey-text text-lighten-4">Projeto da disciplina SSC0130 - Engenharia de Software</p>
              <p className="grey-text text-lighten-4">Professora: Drª. Simone do Rocio Senger de Souza</p>
              <p className="grey-text text-lighten-4">Estagiário PAE: Leo Natan Paschoal</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Integrantes</h5>
              <ul>
                <li>David Souza Rodrigues</li>
                <li>Fernanda Marana</li>
                <li>Gabriel Toschi de Oliveira</li>
                <li>Juliana de Mello Crivelli</li>
                <li>Marcelo de Moraes Carvalho da Silva</li>
                <li>Marcos Wendell Souza de Oliveira Santos</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2018 Copyright Text
            <a className="grey-text text-lighten-4 right" href="https://github.com/gabrieltoschi/deSCubra">
              <img src={gitlogo} alt="git logo" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
