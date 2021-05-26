import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import About from './Pages/About'

export const Navigation = () => {
    return (
        <div>
            <Router> 
                <Route path="/about" component={About}></Route>
                </Router>
           
        </div>
    )
}
