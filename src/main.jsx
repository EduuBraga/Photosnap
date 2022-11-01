import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyle/style'

import { Home } from './routes/Home'
import { Stories } from './routes/Stories'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Stories />} path='/stories' />
        </Routes>
        <GlobalStyles />
    </Router>
)
