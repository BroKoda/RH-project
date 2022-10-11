import './App.css';
import React from "react";
import {useFetch} from "./useFetch";

function App({login}) {
	const {loading, data, error} = useFetch(`https://api.github.com/users/${login}`)

	if(loading) {
		return (
			<h3>Loading...</h3>
		)
	}

	if(error) {
		return (
			<pre>{JSON.stringify(error, null, 2)}</pre>
		)
	}

	return(
		<>
			<img src={data.avatar_url} height={100} />
			<p>Name: {data.login}</p>
			{data.location && <p>Location: {data.location}</p>}
			<p>Location: {data.location || 'not given'}</p>
			<p>Name: {data.name || '-'}</p>
			<p>Type: {data.type || '-'}</p>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</>
	)
}

export default App;

// ---------- ---------- ---------- USECONTEXT ---------- ---------- ---------- //
// const {trees} = useTrees();
// return(
// 	<>
// 		<h3>Trees I've heard of:</h3>
// 		<ul>
// 			{trees.map((tree) => (
// 				<li key={tree.id}>{tree.type}</li>
// 			))}
// 		</ul>
// 	</>
// )

// ---------- ---------- ---------- CUSTOM HOOK ---------- ---------- ---------- //
// const [titleProps, resetTitle] = useInput('')
// const [colorProps, resetColor] = useInput('#FFFFFF');
// const submit = (e) => {
// 	e.preventDefault();
// 	console.log(`${titleProps.value} sounds like ${colorProps.value}`);
// 	resetColor();
// 	resetTitle()
// }
// return(
// 	<>
// 		<form onSubmit={submit}>
// 			<input type={'text'} placeholder={'Sound...'} {...titleProps}/>
// 			<input type={'color'} {...colorProps}/>
// 			<button>Add!</button>
// 		</form>
// 	</>
// )

// ---------- ---------- ---------- USESTATE FORM ---------- ---------- ---------- //
// const [sound, setSound] = useState('');
// const [color, setColor] = useState('#FFFFFF');
// const submit = (e) => {
// 	e.preventDefault();
// 	console.log(`${sound} sounds like ${color}`);
// 	setColor('#FFFFFF');
// 	setSound('')
// }
// return(
// 	<>
// 		<form onSubmit={submit}>
// 			<input type={'text'} placeholder={'Sound...'} value={sound}
// 			       onChange={(e) => setSound(e.target.value)}/>
// 			<input type={'color'} value={color}
// 			       onChange={(e) => setColor(e.target.value)}/>
// 			<button>Add!</button>
// 		</form>
// 	</>
// )

// ---------- ---------- ---------- USEREF FORM ---------- ---------- ---------- //
// const sound = useRef();
// const color = useRef();
// const submit = (e) => {
// 	e.preventDefault();
// 	const soundVal = sound.current.value
// 	const colorVal = color.current.value
// 	console.log(`${soundVal} sounds like ${colorVal}`);
// 	sound.current.value = '';
// 	color.current.value = '';
// }
// return(
// 	<>
// 		<form onSubmit={submit}>
// 			<input type={'text'} placeholder={'Sound...'} ref={sound}/>
// 			<input type={'color'} ref={color}/>
// 			<button>Add!</button>
// 		</form>
// 	</>
// )

// ---------- ---------- ---------- USEREDUCER EXAMPLE ---------- ---------- ---------- //
// const initialState = {
// 	message: 'Hi'
// }
// const [state, dispatch] = useReducer(reducer, initialState)
// function reducer(state, action) {
// 	switch (action.type) {
// 		case 'yell':
// 			return {
// 				message: `HEY I JUST SAID ${state.message}`
// 			}
// 		case 'whisper':
// 			return {
// 				message: `sorry, I just said ${state.message}`
// 			}
// 	}
// }
// return (
// 	<>
// 		<p>Message: {state.message}</p>
// 		<button onClick={() => dispatch({type: "yell"})}>Yell</button>
// 		<button onClick={() => dispatch({type: "whisper"})}>Yell</button>
// 	</>
// )

// ---------- ---------- ---------- SIMPLE USEREDUCEREXAMPLE ---------- ---------- ---------- //
// const [number, setNumber] = useReducer((number, newNumber)=> (
// 	number + newNumber
// ), 0)
// return (
// 	<>
// 		<h3>{number}</h3>
// 		<button onClick={() => setNumber(1)}>Set Number</button>
// 	</>
// );

// ---------- ---------- ---------- FETCH DATA FROM API ---------- ---------- ---------- //
// const [data, setData] = useState([]);
// useEffect(() => {
// 	fetch(`https://api.github.com/users`)
// 		.then(response => response.json())
// 		.then(setData)
// }, [])
// if (data) {
// 	return (
// 		<>
// 			<ul>{data.map(user => (
// 				<li key={user.id}>{user.login}</li>
// 			))}</ul>
//
// 			<button onClick={() => setData([])}>Remove Data</button>
// 		</>
// 	)
// }

// ---------- ---------- ---------- CHANGE TITLE AND NAME ---------- ---------- ---------- //
// const [name, setName] = useState('Jane')
// const [admin, setAdmin] = useState(false)
// useEffect(() => {
// 	console.log(`Celebreate ${name}`)
// }, [name])
// useEffect(() => {
// 	console.log(`The user is: ${admin ? 'admin' : 'not admin'}`)
// }, [admin])
// return(
// 	<section>
// 		<h3>Congratulations {name}!</h3>
// 		<button onClick={() => setName('David')}>Change winner:</button>
// 		<p>{admin ? 'Logged in' : 'Not logged in'}</p>
// 		<button onClick={() => setAdmin(true)}>Log In</button>
// 	</section>
// )

// ---------- ---------- ---------- STAR RATING ---------- ---------- ---------- //
// const createArray = (length) => [...Array(length)]
// function Star({selected = false, onSelect}) {
// 	return (
// 		<FaStar color={selected ? 'blue' : 'gray'} onClick={onSelect}/>
// 	)
// }
// function StarRating({totalStars = 5}) {
// 	const [selectedStars, setSelectedStars] = useState(0)
// 	return (
// 		<>
// 			{
// 				createArray(totalStars).map((n, i) => (
// 					<Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)}/>
// 				))
// 			}
// 			<p>{selectedStars} of {totalStars}</p>
// 		</>
// 	)
// }
// return(<StarRating totalStars={5}/>)

// ---------- ---------- ---------- CHECKBOX USEREDUCER ---------- ---------- ---------- //
// const [checked, toggle] = useReducer((checked) => !checked, false)
// return (
// 	<div className={'App container my-5'}>
// 		<div className={'row'}>
// 			<div className={'col-12 text-start'}>
// 				<input type={'checkbox'} value={checked}
// 				       onChange={toggle}/>
// 				<p>{checked ? "checked" : "not checked"}</p>
// 			</div>
// 		</div>
// 	</div>
// )

// ---------- ---------- ---------- CHECKBOX ---------- ---------- ---------- //
// const [checked, setChecked] = useState(false)
// return(
// 	<div className={'App container my-5'}>
// 		<div className={'row'}>
// 			<div className={'col-12 text-start'}>
// 				<input type={'checkbox'} value={checked}
// 				       onChange={() => setChecked((checked) => !checked)}/>
// 				<p>{checked ? "checked" : "not checked"}</p>
// 			</div>
// 		</div>
// 	</div>
// )