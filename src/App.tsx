import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './home/HomePage';
import { GalleryPage } from './gallery/GalleryPage';
import { QuizPage } from './quiz/QuizPage';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/you" element={<QuizPage />} />
            {/* Custom redirects */}
            <Route path="/gallery" element={<Navigate to="/gallery" />} />
            <Route path="/you" element={<Navigate to="/you" />} />
        </Routes>
    </BrowserRouter>
);
}

export default App;
