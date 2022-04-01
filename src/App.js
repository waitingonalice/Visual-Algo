import React from 'react';
import ErrorPage from './Pages/ErrorPage';
import Test from './Pages/Test'
import Quiz from './Pages/Quiz';
import Result from './Pages/Result'
import SortingVisual from './Pages/SortingVisual';
import "./app.css"
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IconButton, useColorMode, Center} from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { HelpModal } from './components/Modal'
import {BsGithub} from 'react-icons/bs'
import axios from 'axios';


export default function App() {
	const { colorMode, toggleColorMode } = useColorMode();
	const [name, setName] = useState("");
	const [question, setQuestion] = useState();
	const [score, setScore] = useState(0);
	

	function ColorMode() {
		return (
			 <IconButton
					icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
					isRound='true'
					size='md'
					onClick={toggleColorMode}
					float={"right"}
				/>
		);
	}
	//fetch data from open trivia db, and checks if 
	const fetchQuestions = async(category="", difficulty="") => {
		const { data } = await axios.get(`https://opentdb.com/api.php?amount=10&type=multiple${
			
			category && `&category=${category}`
			}${difficulty && `&difficulty=${difficulty}`}`
		);
		
		setQuestion(data.results)
	}

																																																																																																																																																																															 
	return (
		<Router>
			<div className='main'>
				<div className='header'>
					<HelpModal/>
					<ColorMode />	
				</div>
				<div className='body'>
					<Routes>
						<Route path='/VisualAlgo' element={<SortingVisual/>}/>
						<Route path='/quiz' element={
							<Quiz
								name = {name}
								setName={setName}
								fetchQuestions={fetchQuestions}
							/>}
						/>
						
						<Route path='/test' element={
							<Test
								question={question}
								setQuestion={setQuestion}
								name={name}
								score={score}
								setScore={setScore}
							/>}
						/>
						
						<Route path='/results' element={
							<Result
								name={name}
								score={score}
								setScore={setScore}
								question={question}
								setQuestion={setQuestion}
							/>}
						/>
						
						<Route path='*' element={<ErrorPage/>}/>
					</Routes>											
				</div>
				<Center className='footer'>
					<div className='links'>
						Links:
						<a id = 'github-link' href='https://github.com/waitingonalice/VisualAlgo'>
							Github
							<div id='gh-icon'><BsGithub size={20} /></div> 
						</a>
					</div>
				</Center>
			</div>	
		</Router>		 
	);
}




