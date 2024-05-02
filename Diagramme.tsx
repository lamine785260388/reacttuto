import React, {FunctionComponent, useState} from 'react';

import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
import Index from './pages';
import Chart from "react-apexcharts";
  
const App: FunctionComponent = () => {
const [state,setState]=useState({
  options: {
    colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    },
    {
      name: "series-2",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    },
    
  ]

})

    
 return (
  
  <div className='App'>
    <h1>React Charts demo</h1>
    <div className='row'>
      <div className='col-4'>

      <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
            />
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="500"
            />
              <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="500"
            />
            
      </div>
    </div>

  </div>
//   <Router>
  
//   <Route exact path='/' component={Index} />

// </Router>


 )
}
  
export default App;