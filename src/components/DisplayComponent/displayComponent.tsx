import React, { useState } from 'react'
import ButtonComponent from '../BtnComponent/btnComponent'

function DisplayComponent() {


    // state for manage time
    let [hour, setHour] = useState<number>(0);
    let [minutes, setMinutes] = useState<number>(0);
    let [seconds, setSeconds] = useState<number>(0);
    let [miliSeconds, setmiliSeconds] = useState<number>(0);
    let [interv, setInterv] = useState<any>();
    let [status, setStatus] =useState(0)

    const start = ()=> {
        run();
        setStatus(1);
        setInterv(setInterval(run , 10));
    };
  

    function run(){
        if (minutes === 60){
            setHour(hour++);
            minutes = 0
        }

        if (seconds === 60){
            setMinutes(minutes++)
            seconds = 0
        }

        if (miliSeconds === 100){
            setSeconds(seconds ++)
            miliSeconds = 0
        }
        setmiliSeconds(miliSeconds++)
    }

    // stop function 
   
    const stop = () =>{
        clearInterval(interv);
        setStatus(2)
    }

    // reset function

    const reset = () => {
        clearInterval(interv);
        setStatus(0)
        setHour(hour=0)
        setMinutes(minutes=0)
        setmiliSeconds(miliSeconds=0)
        setSeconds(seconds=0)
    };

    // resume function

    const resume = () =>{
        start()
    }

   
 
    return (
        <div>
            <div className='time_number'>
            <span><span className='' >{(hour >= 10) ? hour : "0" + hour}:</span></span>
            <span className='minutes' >{(minutes >= 10) ? minutes : "0" + minutes}:</span>
            <span className='seconds' >{(seconds >= 10) ? seconds : "0" + seconds}:</span>
            <span className='mili-second'>{(miliSeconds >= 10) ? miliSeconds : "0"+ miliSeconds}</span>
            </div>
             <ButtonComponent status={status} resetButton={reset} resumeButton={resume} stopButton={stop}  startButton = {start} buttonvalue={'start'}  /> 
        </div>
    );
}

export default DisplayComponent
