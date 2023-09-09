import React from 'react';
import { ModalSwitch, ModalRoute } from 'react-router-modal-gallery';
import { Route, Redirect } from 'react-router-dom';
import { Modal } from '~/components/Modal';
import FormSchedule from '~/components/FormSchedule/FormSchedule';
import App from '~/App';
import { AirConditioner, Gallery, Luzes, Tabs } from './MainPage/Info';

export const routes = [
	{
		exact: true,
		path: '/',
		component: (props) => {
			const app = <App {...props} />;
			const positionY = parseInt(localStorage.getItem('positionY'), 10);
			localStorage.removeItem('positionY');
			setTimeout(() => {
				window.scrollTo({
					top: positionY,
					behavior: 'smooth',
				});
			}, 500);
			return app;
		},
	},
	{
		modal: true,
		path: '/design/:id?',
		defaultParentPath: '/',
		component: (props) => <Tabs {...props} />,
	},
	{
		modal: true,
		path: '/altura/:id?',
		defaultParentPath: '/',
		component: (props) => <Tabs {...props} />,
	},
	{
		modal: true,
		path: '/motor/:id?',
		defaultParentPath: '/',
		component: (props) => <Tabs {...props} />,
	},
	{
		modal: true,
		path: '/tudo-dominado/:id?',
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
		path: '/agilidade/:id?',
		defaultParentPath: '/',
		component: (props) => <Tabs {...props} />,
	},
	{
		modal: true,
		path: '/interior/:id?',
		defaultParentPath: '/',
		component: (props) => <Tabs {...props} />,
	},
	// {
	// 	path: '/agende',
	// 	render: (props) => {
	// 		localStorage.removeItem('positionY');
	// 		localStorage.setItem('positionY', window.scrollY);
	// 		return <FormSchedule {...props} />
	// 	},
	// },
	{
		path: '*',
		render: () => <Redirect to='/' />,
	},
];

export const modalRoutes = routes
	.filter((route) => route.modal)
	.map((route) => {
		return <ModalRoute key={route.path} {...route} />;
	});

export const Routes = (props) => {
	return (
		<ModalSwitch
			renderModal={({ open, redirectToBack }) => {
				return (
					<Modal
						visible={open}
						onExited={redirectToBack}
						lockScrollBody={true}
						animation={props.mobile ? 'slideLeft' : 'slideUp'}
						onClose={() => {
							const pathname = window.location.hash.split(/#?\//)[1];
							DataLayer.push('Modal_Fechou', pathname);
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
				else return <Route key={route.path} {...route} render={wrappedRender} />;
			})}
		</ModalSwitch>
	);
};

export default Routes;
