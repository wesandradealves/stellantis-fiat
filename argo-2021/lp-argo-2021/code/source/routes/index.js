import React from 'react';
import { ModalSwitch, ModalRoute } from 'react-router-modal-gallery';
import { Route, Redirect } from 'react-router-dom';
import { Modal } from '~/components/Modal';
import FormSchedule from '~/components/FormSchedule/FormSchedule';
import App from '~/App';
import { Tabs } from './MainPage/Info';

export const routes = [
	{
		exact: true,
		path: '/',
		component: (props) => <App {...props} />,
	},
	{
		modal: true,
		path: '/design/:id?',
		defaultParentPath: '/',
		component: (props) => <Tabs {...props} />,
	},
	{
		modal: true,
		path: '/central-multimidia/:id?',
		defaultParentPath: '/',
		component: (props) => <Tabs {...props} />,
	},
	{
		modal: true,
		path: '/keyless/:id?',
		defaultParentPath: '/',
		component: (props) => <Tabs {...props} />,
	},
	{
		modal: true,
		path: '/pneus/:id?',
		defaultParentPath: '/',
		component: (props) => <Tabs {...props} />,
	},
	{
		modal: true,
		path: '/ar-digital/:id?',
		defaultParentPath: '/',
		component: (props) => <Tabs {...props} />,
	},
	{
		modal: true,
		path: '/controle-de-tracao/:id?',
		defaultParentPath: '/',
		component: (props) => <Tabs {...props} />,
	},
	{
		path: '/agende',
		render: (props) => <FormSchedule {...props} />,
	},
	{
		path: '*',
		render: () => <Redirect to='/' />,
	},
];

export const modalRoutes = routes
	.filter((route) => route.modal)
	.map((route) => {
		return <ModalRoute key={route.path} {...route}/>;
	});

export const Routes = (props) => {
	return (
		<ModalSwitch
			renderModal={({ open, redirectToBack }) => {
				return (
					<Modal
						visible={open}
						lockScrollBody={true}
						mobile={props.mobile}
						animation={props.mobile ? 'fade' : 'slideUp'}
						onClose={() => {
							const pathname = window.location.hash.split(/#?\//)[1];
							DataLayer.push('Modal_Fechou', pathname);
						}}
						onExited={() => {
							window.location.hash = '#/';
						}}>
						{modalRoutes}
					</Modal>
				);
			}}>
			{routes.map(({ render, component, ...route }) => {
				const wrappedRender = (renderProps) => {
					const wrappedProps = { ...props, ...renderProps };
					return component ? component(wrappedProps) : render(wrappedProps);
				};
				if (route.modal) return <ModalRoute key={route.path} {...route} render={render} />;
				return <Route key={route.path} {...route} render={wrappedRender} />;
			})}
		</ModalSwitch>
	);
};

export default Routes;
