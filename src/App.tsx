import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './home/HomePage';
import { NewPoetryPage } from './poetry/NewPoetryPage';
import { QuizPage } from './quiz/QuizPage';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="gallery" element={<NewPoetryPage />} />
            <Route path="you" element={<QuizPage />} />
        </Routes>
    </BrowserRouter>
);
}

export default App;
