import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyle/style'

import { ScrollToTop } from './components/ScroolToTop'
import { Home } from './routes/Home'
import { Stories } from './routes/Stories'
import { Features } from './routes/Features'
import { Pricing } from './routes/Pricing'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <ScrollToTop></ScrollToTop>
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Stories />} path='/stories' />
            <Route element={<Features />} path='/features' />
            <Route element={<Pricing />} path='/pricing' />
        </Routes>
        <GlobalStyles />
    </Router>
)
