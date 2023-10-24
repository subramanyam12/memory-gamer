
import './App.css';
import { useEffect, useState} from 'react';


function App() {
  const [array,setarray]=useState(['❤️','❤️','😂','😂','👍','👍','💔','💔','⚽','⚽','🐐','🐐','🤐','🤐','😭','😭']);
  const [flip,setflip]=useState([]);
  const [match,setmatch]=useState([]);

useEffect(()=>{
  setarray(()=>array.sort(()=>Math.random()-0.5))
},[])

const rload=()=>{
  setmatch([])
  setflip([])
  setTimeout(()=>window.location.reload(),300);
}

   const check=(i)=>{
      if (!flip.length){
        setflip([i])
      }
      else if(flip.length===1){
        setflip([...flip,i])
        setTimeout(()=>{
          if(array[flip[0]]===array[i]){
            if(match.length===array.length-2){
              alert('YOU WON THE GAME')
              return
            } 
            setmatch([...match,flip[0],i])
          }else{
            setflip([])
          }
      },500)
      }
    else{
         setflip([i])
       }
      }
  return (
    <>
    <div className='container'>
    <h1>Memory Game</h1>
    <main>
    {array.map((item,i)=><div className={`box ${(flip.includes(i) || match.includes(i)) && 'spin'}`} onClick={()=>check(i)} key={i}>{item}</div>)}
    </main>
   
    <button onClick={()=>rload()}>reset game</button>
    </div>
    </>
  );
}

export default App;
