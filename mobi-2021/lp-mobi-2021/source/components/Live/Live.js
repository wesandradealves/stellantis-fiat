
import React, { useRef, useState, useEffect } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from '@cerebral/react';
import { Quote } from '~/components/Quote';
import { SwitchButton, WheelIcon, CarIcon } from '~/components/SwitchButton';
import { DataLayer } from '@dcode/react/components/DataLayer';
import css from './Live.scss';

export const classes = {
	// 0.
	root: css.live,

	// 1. BACKGROUND
	background: css.liveBackground,

	// 1. CONTENT
	content: css.liveContent,

	// 2. QUOTE
	quote: css.liveQuote,


	 // 3. VIDEO
	video: css.liveVideo,
    imglive: css.liveImglive,

	 // 4. TIPOGRAFIA
	 text: css.liveText,

	 // 5. TIPOGRAFIA
	 box: css.liveBox,

	 // 5. TITULO
     title: css.liveTitle,
     

	 // 5. BOTAO
	 switch: css.liveSwitch,

	 alert: css.alert,
	 alertText: css.alertText,
 	 textAlert: css.textAlert,
 };
 
 export const propTypes = {
	 className: PropTypes.string,
	 classes: PropTypes.object,
 };

 export const defaultProps = { 
 	 className: '',
	 classes,
 };


 class Live extends React.Component{
	constructor(props) {
		super(props);
	
		this.state = {
		  value: "",
		  suggestions: [],
		  nomeBotao:'Esconder',
		  classeDiv:'show'
		};

		console.log('constructor DEALERS', this.props.dealers)
	  }
	state = {
		isActive: true
	  };
	
	  handleShow = () => {
		this.setState({isActive: true});
	  };
	
	  handleHide = () => {
		this.setState({isActive: false});
	  };
	
	  renderTeste() {
		  return (
			<div>
			  {this.state.isActive || <div className="alert">
			  <div className="textAlert">
			  <p className="size-14 size-26-mobile u-light text alert-text">Visando a segurança de todos, informamos que nossas concessionárias estão com horários reduzidos e com o atendimento online disponível. Caso necessite de algum serviço ou informação, pedimos que entre em contato com a concessionária de seu interesse ou envie seus dados que retornaremos assim que possível.</p>
			  </div>
			 
			  <div className="button">
			  {this.state.isActive ?(
   			   <a className="btn-send btn-upper u-bold size-24 size-26-mobile botao" onClick={this.handleHide}>Entendi</a> ) : (
   			   <a className="btn-send btn-upper u-bold size-24 size-26-mobile botao" onClick={this.handleShow}>Entendi</a>
			   
			   )}
			  
			  </div> 
		  </div>
}
			</div>
		  )
	  }
	render(){
		return (
			<div>
			</div>
		  )
	}
 }

 Live.propTypes = propTypes;
Live.defaultProps = defaultProps;
Live.displayName = 'Live';
export default Live;

