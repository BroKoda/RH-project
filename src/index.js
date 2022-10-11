import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App login={'BroKoda'}/>
	</React.StrictMode>
);

// ---------- ---------- ---------- USECONTEXT ---------- ---------- ---------- //
// const TreesContext = createContext()
//
// export const useTrees = () => (
// 	useContext(TreesContext)
// )
//
// const trees = [
// 	{id: 1, type: 'maple'},
// 	{id: 2, type: 'oak'},
// 	{id: 3, type: 'family'},
// 	{id: 4, type: 'component'}
// ]
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<TreesContext.Provider value={{trees}}>
// 		<App/>
// 	</TreesContext.Provider>
// );