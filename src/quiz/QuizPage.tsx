import React, { useState } from 'react';
import styled from 'styled-components'; 
import { Question } from './Question';
import { Result } from './Result';
import { AnswerCombos } from './AnswerCombos';
import { LayoutDiv } from '../home/HomePage';
import Navbar from '../Navbar';
import { QuizIntro } from './QuizIntro';

const questions = [ 
	{ 
		question: 'Which of the following do you spend the most time doing?', 
		options: ['Self-reflecting and introspecting', 'Observing others and the surrounding world', 'Exploring the imaginative realm']
	}, 
	{ 
		question: 'How do you perceive time?', 
		options: ['Linear: moments progress uniformly', 'Fluid: moments can stretch or contract', 'Episodic: time unfolds in distinct, meaningful moments']
	}, 
	{ 
		question: 'When contemplating the unknown, which thought process resonates with you the most?', 
		options: ['Pondering all of the different possibilities and potential outcomes', 'Embracing uncertainty and feeling comfortable with ambiguity', 'Finding patterns and connections within the unknown in order to form a clearer understanding']
	}
]; 

const QuizPageDiv = styled.div`
    display: flex;
    justify-content: center;
`

export const QuizPage: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(-1);
    const [answers, setAnswers] = useState<number[]>([]);

    const handleStart = () => {
        setCurrentQuestion(0); // Start from the first question
    };

    const handleAnswer = (answer: string) => {
        const answerIndex = questions[currentQuestion].options.indexOf(answer);
        setAnswers((prevAnswers) => [...prevAnswers, answerIndex]);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion <= questions.length) {
            setCurrentQuestion(nextQuestion);
        }
    };

    let resultImage = null;
	let resultTitle = '';
	let resultDescription = '';
	AnswerCombos.forEach((item) => {
		if (JSON.stringify(item.result) === JSON.stringify(answers)) {
			resultImage = item.image;
			resultTitle = item.title;
			resultDescription = item.description;
		}
	});

    return (
        <LayoutDiv>
            <Navbar />
            <QuizPageDiv>
                {currentQuestion === -1 && (
                    <QuizIntro onStart={handleStart}/>
                )}
                {currentQuestion >= 0 && currentQuestion < questions.length && (
                    <Question
                        question={questions[currentQuestion].question}
                        options={questions[currentQuestion].options}
                        onAnswer={handleAnswer}
                    />
                )}
                {currentQuestion === questions.length && (
                    <Result image={resultImage} title={resultTitle} description={resultDescription}/>
                )}
            </QuizPageDiv>
        </LayoutDiv>
    );
};

