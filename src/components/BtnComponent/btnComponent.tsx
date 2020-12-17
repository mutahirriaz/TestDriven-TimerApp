import React from 'react'

type props = {
    startButton: () => void,
    stopButton: () => void,
    resetButton:() =>void,
    resumeButton: () => void
    buttonvalue: String,
    status: number
}

function btnComponent(props: props) {

    // destructuring
    const { startButton } = props
    const {stopButton} = props
    const {resetButton} = props
    const {resumeButton} = props

    return (
        <div className='watch_button'>
            {(props.status === 0) ?
                <button onClick={startButton} className='start_button' >{props.buttonvalue}</button> : ""}

            {(props.status === 1) ?
                <div className='button_space1'>
                    <button className='stop_button' onClick={stopButton} >Stop</button>
                    <button  className='reset_button' onClick={resetButton} >Reset</button>
                </div> : ""}

                {(props.status === 2) ?
                <div className='button_space2'>
                    <button className='resume_button' onClick={resumeButton} >Resume</button>
                    <button className='reset_button' onClick={resetButton} >Reset</button>
                </div> : ""}
        </div>
    )
}

export default btnComponent
