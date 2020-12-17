import React from 'react'
import './App.css'
import DisplayComponent from '../DisplayComponent/displayComponent'


function App() {

    ;
    
    return (
        <div className='main_section'>
            <div className='clock_holder'>
                <h2>Stopwatch</h2>
                <div className='stopwatch'>
                    <DisplayComponent />
                </div>
            </div>
        </div>
    )
}

export default App
