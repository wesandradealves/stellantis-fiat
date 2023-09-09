import React from 'react';
import { Route } from 'react-router-dom';
import { ModalSwitch, ModalRoute } from 'react-router-modal-gallery';
import { history } from '@dcode/react/history';
import { DataLayer } from '@dcode/react/components/DataLayer';
import { Modal } from '~/components/Modal';

const ModalRenderer = ({ routes, mobile, ...props }) => (
	<Modal
		visible={props.open}
		lockScrollBody={true}
		animation={mobile ? 'fade' : 'slideUp'}
		onClose={() => {
			const pathname = window.location.hash.split(/#?\//)[1];
			DataLayer.push('Modal_Fechou', pathname);
		}}
		onExited={() => {
			history.push('#/');
		}}>
		{routes}
	</Modal>
);

const mountComponent = (route, props) => (renderProps) => {
 const wrappedProps = {
	 ...props,
	 ...renderProps
 };
 if (route.component) {
	 return route.component(wrappedProps);
 }
 if (route.render) {
	 return route.render(wrappedProps);
 }
 return null;
};

const Routes = ({ routes, modalRoutes, ...props }) => {
 return (
	 <ModalSwitch
		 renderModal={(renderProps) => (
			 <ModalRenderer
				 routes={modalRoutes}
				 mobile={props.mobile}
				 {...renderProps}
			 />
		 )}>
		 {routes.map((route) => {
			 const { render, component, ...routeProps } = route;
			 const Component = mountComponent(route, props);
			 if (route.modal) {
				 return (
					 <ModalRoute
						 key={routeProps.path}
						 {...routeProps}
						 render={Component}
					 />
				 );
			 }
			 return (
				 <Route
					 key={routeProps.path}
					 {...routeProps}
					 render={Component}
				 />
			 );
		 })}
	 </ModalSwitch>
 );
};

export const router = (routes) => {
 const modalRoutes = routes
 .filter((route) => route.modal)
 .map((route) => <ModalRoute
	 key={route.path}
	 {...route}
 />);
 return (props) => <Routes
	 routes={routes}
	 modalRoutes={modalRoutes}
	 {...props}
 />;
};

export default router;
