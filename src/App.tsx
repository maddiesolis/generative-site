import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PoetryPage } from './poetry/PoetryPage';
import { HomePage } from './HomePage';
import { QuizPage } from './QuizPage';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<PoetryPage />} />
            <Route path="skills" element={<QuizPage />} />
        </Routes>
    </BrowserRouter>
);
}

export default App;
