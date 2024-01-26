import React,{useState,useEffect} from 'react'

function Progressbar() {
    const[filled,setFilled] =useState(0);
    const[isRunning,setIsRunning] = useState(false)
    const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };
  return (
  
    <div className='body'>
    <h1 id='h1'>Progress Bar</h1>
    <input type="text" name="" id="input" value={inputValue} onChange={handleInputChange} />
    <div> <label id='label'   >Input Percentage:</label>
    <input type="number" name="" id="small" value={inputValue} onChange={handleInputChange} /></div>
   

    </div>
  )
}

export default Progressbar