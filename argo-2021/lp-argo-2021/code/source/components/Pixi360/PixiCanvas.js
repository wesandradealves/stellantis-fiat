import * as React from 'react';
import * as PIXI from 'pixi.js';
import cls from 'classnames';
import PropTypes from 'prop-types';

export class PixiCanvas extends React.Component {
	renderer;
	stage;
	mustRender = true;
	interval;

	constructor(props) {
		super(props);
		this.state = {
			t: 0,
		};
	}

	setRender(v) {
		this.mustRender = v;
	}

	componentDidMount() {
		if (this.refs.root) {
			this.refs.root.appendChild(this.renderer.view);
		}
	}

	componentWillMount() {
		this.renderer = PIXI.autoDetectRenderer(this.props.width, this.props.height, { transparent: true });
		this.stage = new PIXI.Container();
		this.interval = setInterval(() => {
			if (this.mustRender) {
				this.renderer.render(this.stage);
				this.mustRender = false;
			}
		}, 45);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
		this.stage = null;
		this.renderer = null;
	}

	getChildContext() {
		return {
			pixiStage: this.stage,
			pixiParent: this.stage,
			pixiCanvas: this,
		};
	}

	render() {
		const { className } = this.props;
		return (
      <div 
        ref='root' 
        key='root' 
        className={cls('PixiCanvas', className)} 
        onClick={this.props.onClick}
        onTouchStart={this.props.onTouchStart}
        onMouseDown={this.props.onMouseDown}>
				<div
					// @todo Por algum motivo, que desconheço, essa div, mesmo por cima do canvas, ainda dá o click nele
					// e precisa dela para que o click do parent funcione. Verificar "cancel bubble" do evento
					// depois, e, porque antes funcionou sem ela, se aparentemente nada mudou nesse componente ou em VersionsPage.
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						zIndex: 1,
					}}
				/>
				{this.props.children}
			</div>
		);
	}

	static childContextTypes = {
		pixiStage: PropTypes.object,
		pixiParent: PropTypes.object,
		pixiCanvas: PropTypes.object,
	};
}

export default PixiCanvas;
