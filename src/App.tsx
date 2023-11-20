import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PoetryPage } from './poetry/PoetryPage';
import { QuizPage } from './quiz/QuizPage';
import { HomePage } from './home/HomePage';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="poetry" element={<PoetryPage />} />
            <Route path="quiz" element={<QuizPage />} />
        </Routes>
    </BrowserRouter>
);
}

export default App;
