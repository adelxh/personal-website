import React from 'react'
import './App.css'
import { Link , BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Work from './Pages/Work';





export const App = () => {
  
    return (
        <Router>
    <div>
        {/* navigation system */}
        <nav>
            <ul>
          <li><Link to="/">Home</Link></li>  
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">My Work</Link></li>
            </ul>    
        </nav>
       
       
      
      {/* routing system */}
      <Switch>
          <Route path="/" exact component={Home} />
         <Route  path="/about" component={About} />
         <Route path="/work" component={Work} />
 
      </Switch>
    </div>

    </Router>

    
    )
}



export default App