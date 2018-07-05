import React from 'react';
import Client from './Client.js';
import {ListaPercursos} from './ListaPercursos.js';
import M from 'materialize-css';
import axios from 'axios';
import Client from './Client.js';

export class PainelAdmin extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			percursos: null,
		}
		//inicializacao de elementos do materialize
		document.addEventListener('DOMContentLoaded', function() {
    		var elems = document.querySelectorAll('.modal');
				var options = {};
				M.Modal.init(elems, options);
 		});
	}

	componentDidMount(){
		Client.selectPercursos(res => {
			console.log(res.sucess);
			if(res.sucess = "True"){
				console.log("Percursos obtidos")
				this.setState({percursos: res.percursos})
			} else{
				console.log("Não foi possível encontrar os percursos")
			}
		})
	}

	componentDidMount(){
		Client.listPercursos(res => {
			this.setState({percursos: res.percursos})
		})
	}

	render(){
		return(
		<div class="container">
 	     			<div align='center'>
   	    			<div id="tituloPainelAdmin" class='black-text'>
								<h3>Painel de Administração</h3>
								<h5>Percursos Disponíveis</h5>
							</div>

					<ListaPercursos percursos={this.state.percursos} />
					{/*render da colecao dos percursos disponiveis no sistema*/}

					<button class="btn green">Cadastrar Novo Percurso</button><br /><br />
			</div>
		</div>
		);
	}
}
