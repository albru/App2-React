import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import Navbar from './layout/Navbar'

class App extends React.Component {
  constructor(props) { 
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <BrowserRouter> 
        <div className="App">
          <Navbar />
        </div>
      </BrowserRouter> 
    )
  }
}

export default App


