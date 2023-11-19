import React from 'react'; 


interface QuestionProps { 
	question: string; 
	choices: string[]; 
	answer: string; 
	onAnswer: (answer: string) => void; 
} 

const Question: React.FC<QuestionProps> = ( 
	{ question, choices, answer, onAnswer }) => { 
	return ( 
        <>
            <h2>{question}</h2> 
            <div> 
                {choices.map((choice) => ( 
                    <button className="btn btn-success m-2" onClick={() => onAnswer(choice)}> 
                        {choice}
                    </button> 
                ))} 
            </div> 
        </>
	); 
}; 

export default Question; 
