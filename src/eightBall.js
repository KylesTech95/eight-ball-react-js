import { React,useState } from 'react';
import './App.css';

export default function EightBall() {
    let responses = ['It is certain','Reply hazy, try again',"Don't count on it",'It is decidedly so','Ask again later',"My reply is no","Without a doubt","Better not tell you now","My sources say no","What is wrong with you?", "Seems likely","Stay hopeful","You should be fine","I guess..."]

    var triangle={
        height: '0',
        width: '0',
        borderRight: '90px solid transparent',
        borderLeft: '90px solid transparent',
        borderTop: '120px solid var(--triangle-bd)',
        borderBottom: 'none',
        zIndex:'999',
        marginTop: '1rem'    
      } 
    {/*______________________________________*/}
    {/*Plug index 0s into the rendered elements*/}
    const [response,setResponse] = useState('')
    const [display,setDisplay] = useState('0')
    const [disabled,setDisabled] = useState(false)
    {/*______________________________________*/}
    const handleDisplay = (event) => {
      let bg = document.querySelector('.tri-container')
     if (event.target.value.length > '0')
     {
      setDisplay(()=>'1')
      bg.style = 'background:#333;transition:.2s'
    } 
     else {
      setDisplay(()=>'0')
      bg.style = 'background:#fff;transition:.2s'
    }
    }
    const handleClick = () => {
      let input = document.querySelector('.input-actual');
      if(input.value.length >= 1){
        setResponse(()=>responses[Math.floor(Math.random() * responses.length)])
        {/*disabling input when clicked*/}
        setDisabled(()=>true)
        {/*setTimeout() function to enable the input after disabling the input above*/}
        setTimeout(()=>{
          setDisabled(()=>false)
          setResponse(()=> "")
          setDisplay(()=>"0")
        },1500)
        input.value = '';
      }
      else{
        setResponse(()=>"")
      }
    }
    window.addEventListener('keydown',(e)=>{
    let input = document.querySelector('.input-actual');
      if(e.key=='Enter'){
      setResponse(()=>responses[Math.floor(Math.random() * responses.length)])
      setDisabled(()=>true)
      setTimeout(()=>{
          setDisabled(()=>false)
          setResponse(()=> "")
          setDisplay(()=>"0")
        },1500)
      input.value = '';
      }
    })
      //eventListener that moves the 8-ball's circle
      document.addEventListener('mousemove',(e) =>{
      let elem_parent = document.querySelector('.circle-container'),
          elem_child = document.querySelector('.circle')
      let left = elem_parent.getBoundingClientRect().x,
          right = elem_parent.getBoundingClientRect().x + elem_parent.getBoundingClientRect().width,
          top = elem_parent.getBoundingClientRect().y,
          bottom = elem_parent.getBoundingClientRect().y + elem_parent.getBoundingClientRect().height
      let mx = e.pageX,
          my=e.pageY
      if((mx >= left && mx <= right) && (my >= top && my <= bottom)){
        elem_child.style = `top:${my >= bottom/2 ? (my/my)*-1.75 : (my/my)*1.75}px;left:${mx >= right/2 ? (mx/mx)*-1.75 : (mx/mx)*1.75}px;transition: .25s ease;`
      }
      else {
        elem_child.style = `position: absolute;`
      }
      })   
    
  return (
    <>
      <div className={'circle-container'}>
        <div className={'circle'}>
            <div className="shade-container">
              {/*Hidden 8 behind triangle*/}
              <h1 className="hidden-eight">8</h1>
              <div className="tri-container" style={{opacity: display,transition:'.2s'}}>
              {/*Navy Triangle*/}
              <div style={triangle} className={"ky-tri"}></div>
              <div id="answer" className="ky-color">{response}</div>
              {/*2 divs representing a left and right shadow*/}
              <div className={"shadow-l"}/>
              <div className={"shadow-r"}/>
            </div>
          </div>
        </div>
      </div>

          {/*Input Section*/}
      <div className={"input-div"}>
        <input onChange={handleDisplay} disabled={disabled} className={"input-actual"} type={"text"}/>
        <button onClick={handleClick} className={"input-btn"}>Submit</button>
      </div>
    </>
  )
}
