import './App.css';
import data from './data';
import React from 'react'

function App() {
  const [text,setText] = React.useState([]);
  const [index,setIndex] = React.useState(0);

  const handleChange = (e)=>{
    setIndex(parseInt(e.target.value));
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    let count = index;

    if(count>8){
      count=8
    }else if(count<0){
      count=1
    };
    setText(data.slice(0,count));
  };
  
  const handleCopy = ()=>{
    const copyText = text;
    // copyText.select();
    navigator.clipboard.writeText(copyText);
    alert('text copied!');
  };

  return (
    <div className="App">
      <div className="main">
        <h2 className="title">tired of boring lorem ipsum?</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="amount">Number of Paragraphs:</label>
          <input type="number" name="amount" id="amount" value={index} onChange={(e)=>handleChange(e)}></input>
        <button className="button" ons>generate</button>
        </form>
        
        <div className="paragraphs">
          {text.map((para)=>{
            return <p>{para}</p>
          })}
        </div>
      </div>
      
      <div className="info">
        <div>
          <h3>We have only 8 paragraphs, if you enter more than 8, you will get 8</h3>
          <h3>If you enter a negative number, you will get 1 paragraph</h3>
        </div>          
          <button className="copy" onClick={handleCopy}>Copy Text!</button>
        </div>
    </div>
  );
}

export default App;
