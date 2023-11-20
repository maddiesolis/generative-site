import React, { useState } from 'react'; 
import styled from 'styled-components';
import { Question } from './Question';
import sample1 from "../images/sample1.png"
import result_120 from "../images/result_120.png"
import { Result } from './Result';

const questions = [ 
	{ 
		question: 'Which of the following do you spend the most time doing?', 
		choices: ['Self-reflecting and introspecting', 'Observing others and the surrounding world', 'Exploring the imaginative realm']
	}, 
	{ 
		question: 'How do you perceive time?', 
		choices: ['Linear: moments progress uniformly', 'Fluid: moments can stretch or contract', 'Episodic: time unfolds in distinct, meaningful moments']
	}, 
	{ 
		question: 'When contemplating the unknown, which thought process resonates with you the most?', 
		choices: ['Pondering all of the different possibilities and potential outcomes', 'Embracing uncertainty and feeling comfortable with ambiguity', 'Finding patterns and connections within the unknown in order to form a clearer understanding']
	}
]; 


export const Quiz: React.FC = () => { 
	const [currentQuestion, setCurrentQuestion] = useState(0); 
	const [answers, setAnswers] = useState<number[]>([]);

	const handleAnswer = (answer: string) => {
		const answerIndex = questions[currentQuestion].choices.indexOf(answer)
		setAnswers(prevAnswers => [...prevAnswers, answerIndex]);
		const nextQuestion = currentQuestion + 1; 
		if (nextQuestion <= questions.length) { 
			setCurrentQuestion(nextQuestion); 
		}
	}

	return ( 
		<> 
			{currentQuestion < questions.length && ( 
				<Question 
					question={questions[currentQuestion].question} 
					choices={questions[currentQuestion].choices} 
					onAnswer={handleAnswer}
					first={currentQuestion === 0}
					last={currentQuestion === questions.length - 1}
				/> 
			)}
			{currentQuestion === questions.length && (
				<Result image={result_120}/>
			)} 
		</> 
	) 
} 
