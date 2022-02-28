import React,{useState} from 'react';
import "./App.css" ;





 function Home() {
   const [count,setCount]= useState(0)
   const [click,setClick]= useState(' ')
  


 


   
   const Habdelclick=()=>{
     

     if (click) {
     setClick('x')
    
     clock()
     
     }
     {DisableAfterClick()}
    if (count===1)
  
     setClick('O')
    
     if(click  &&  count===2)
     setClick('x')
    
     if(click && count===3 )
     setClick('O')
     if (click && count===4)
     setClick('x')
     if (click && count===5)
     setClick('O')
     if (click && count===6)
     setClick('x')
     if (click && count===7)
     setClick('O')
     if (click && count===8)
     setClick('x')
     if (click && count===9)
     setClick('O')
   }
   const [click2,setClick2]= useState(' ')
   const Habdelclick2=()=>{
    if (click2) 
    setClick2('x')
    
    clock()
    
    
    if (count===1)
    setClick2('O')
    if(click2  &&  count===2)
    setClick2('x')
    if(click2 && count===3 )
    setClick2('O')
    if (click && count===4)
    setClick2('x')
    if (click2 && count===5)
    setClick2('O')
    if (click2 && count===6)
    setClick2('x')
    if (click2 && count===7)
    setClick2('O')
    if (click2 && count===8)
    setClick2('x')
    if (click2 && count===9)
    setClick2('O')
  }
  const [click3,setClick3]= useState(' ')
  const Habdelclick3=()=>{
    if (click3) 
    setClick3('x')
    clock()
    

    if (count===1)
    setClick3('O')
    if(click3  &&  count===2)
    setClick3('x')
    if(click3 && count===3 )
    setClick3('O')
    if (click3 && count===4)
    setClick3('x')
    if (click && count===5)
    setClick3('O')
    if (click3 && count===6)
    setClick3('x')
    if (click3 && count===7)
    setClick3('O')
    if (click3 && count===8)
    setClick3('x')
    if (click3 && count===9)
    setClick3('O')
  }
  const [click4,setClick4]= useState(' ')
  const Habdelclick4=()=>{
    if (click4) 
    setClick4('x')
    clock()
    

    if (count===1)
    setClick4('O')
    if(click4  &&  count===2)
    setClick4('x')
    if(click4 && count===3 )
    setClick4('O')
    if (click4 && count===4)
    setClick4('x')
    if (click4 && count===5)
    setClick4('O')
    if (click4 && count===6)
    setClick4('x')
    if (click4 && count===7)
    setClick4('O')
    if (click4 && count===8)
    setClick4('x')
    if (click4 && count===9)
    setClick4('O')
  }
  const [click5,setClick5]= useState(' ')
  const Habdelclick5=()=>{
    if (click5) 
    setClick5('x')
    clock()
    if (count===1)
    setClick5('O')
    if(click5  &&  count===2)
    setClick5('x')
    if(click5 && count===3 )
    setClick5('O')
    if (click5 && count===4)
    setClick5('x')
    if (click5 && count===5)
    setClick5('O')
    if (click5 && count===6)
    setClick5('x')
    if (click5 && count===7)
    setClick5('O')
    if (click5 && count===8)
    setClick5('X')
    if (click5 && count===9)
    setClick5('O')
  }
  const [click6,setClick6]= useState(' ')
  const Habdelclick6=()=>{
    if (click6) 
    setClick6('x')
    clock()
    if (count===1)
    setClick6('O')
    if(click6  &&  count===2)
    setClick6('x')
    if(click6 && count===3 )
    setClick6('O')
    if (click6 && count===4)
    setClick6('x')
    if (click6 && count===5)
    setClick6('O')
    if (click && count===6)
    setClick6('x')
    if (click6 && count===7)
    setClick6('O')
    if (click6 && count===8)
    setClick6('x')
    if (click6 && count===9)
    setClick6('O')
  }
  const [click7,setClick7]= useState(' ')
  const Habdelclick7=()=>{
    if (click7) 
    setClick7('x')
    clock()
    if (count===1)
    setClick7('O')
    if(click7  &&  count===2)
    setClick7('x')
    if(click7 && count===3 )
    setClick7('O')
    if (click7 && count===4)
    setClick7('x')
    if (click7 && count===5)
    setClick7('O')
    if (click7 && count===6)
    setClick7('x')
    if (click7 && count===7)
    setClick7('O')
    if (click7 && count===8)
    setClick7('x')
    if (click7 && count===9)
    setClick7('O')
  }
  const [click8,setClick8]= useState(' ')
  const Habdelclick8=()=>{
    if (click) 
    setClick8('x')
    clock()
    if (count===1)
    setClick8('O')
    if(click8  &&  count===2)
    setClick8('x')
    if(click8 && count===3 )
    setClick8('O')
    if (click8 && count===4)
    setClick8('x')
    if (click8 && count===5)
    setClick8('O')
    if (click8 && count===6)
    setClick8('x')
    if (click8 && count===7)
    setClick8('O')
    if (click8 && count===8)
    setClick8('x')
    if (click8 && count===9)
    setClick8('O')
  }
  const [click9,setClick9]= useState(' ')
  const Habdelclick9=()=>{
    if (click9) 
    setClick9('x')
    clock()
    if (count===1)
    setClick9('O')
    if(click9  &&  count===2)
    setClick9('x')
    if(click9 && count===3 )
    setClick9('O')
    if (click9 && count===4)
    setClick9('x')
    if (click9 && count===5)
    setClick9('O')
    if (click9 && count===6)
    setClick9('x')
    if (click9 && count===7)
    setClick9('O')
    if (click9 && count===8)
    setClick9('x')
    if (click9 && count===9)
    setClick9('O')
    if (click9 && count===10)
    setClick9('x')
  }

  

  
   if (count===9){setTimeout(()=>{alert('tico')},500)}
   
   // the X win
   if(  click==='x' && click2==='x' && click3==='x'){
    setTimeout(() => {
    alert("you win")
    },1000); 
    }
    if(  click4==='x' && click5==='x' && click6==='x'){
      setTimeout(() => {
      alert("you win")
      },1000); 
      }
      if(  click7==='x' && click8==='x' && click9==='x'){
        setTimeout(() => {
        alert("you win")
        },1000); 
        }
        if(  click==='x' && click5==='x' && click9==='x'){
          setTimeout(() => {
          alert("you win")
          },1000); 
          }
          if(  click7==='x' && click5==='x' && click3==='x'){
            setTimeout(() => {
            alert("you win")
            },1000); 
            }
            if(  click==='x' && click4==='x' && click7==='x'){
              setTimeout(() => {
              alert("you win")
              },1000); 
              }
              if(  click2==='x' && click5==='x' && click8==='x'){
                setTimeout(() => {
                alert("you win")
                },1000); 
                }
                if(  click3==='x' && click6==='x' && click9==='x'){
                  setTimeout(() => {
                  alert("you win")
                  },1000); 
                  }


                  // the O win
                  if(  click7==='O' && click8==='O' && click9==='O'){
                    setTimeout(() => {
                    alert("you win")
                    },1000); 
                    }
                    if(  click4==='O' && click5==='O' && click6==='O'){
                      setTimeout(() => {
                      alert("you win")
                      },1000); 
                      }
                      if(  click==='x' && click2==='x' && click3==='x'){
                        setTimeout(() => {
                        alert("you win")
                        },1000); 
                        }
                        if(  click==='O' && click5==='O' && click9==='O'){
                          setTimeout(() => {
                          alert("you win")
                          },1000); 
                          }
                          if(  click7==='O' && click5==='O' && click3==='O'){
                            setTimeout(() => {
                            alert("you win")
                            },1000); 
                            }
                            if(  click==='O' && click4==='O' && click7==='O'){
                              setTimeout(() => {
                              alert("you win")
                              },1000); 
                              }
                              if(  click2==='O' && click5==='O' && click8==='O'){
                                setTimeout(() => {
                                alert("you win")
                                },1000); 
                                }
                                if(  click3==='O' && click6==='O' && click9==='O'){
                                  setTimeout(() => {
                                  alert("you win")
                                  },1000); 
                                  }


          function clock(){
            setCount(count+1)
    }
    
    
    
 

  
  return (
  


    <div className='Home'>
    <h1>TIC TAC TOE</h1>
<div className="grid-container">
  
  <button id='b1' onClick={Habdelclick}>{click}</button> 
    


  <button onClick={Habdelclick2} >{click2}</button>
  <button onClick={Habdelclick3} >{click3}</button>  
  <button onClick={Habdelclick4} >{click4}</button>
  <button onClick={Habdelclick5} >{click5}</button>
  <button onClick={Habdelclick6} >{click6}</button>  
  <button onClick={Habdelclick7} >{click7}</button>
  <button onClick={Habdelclick8} >{click8}</button>
  <button onClick={Habdelclick9} >{click9}</button>  


      
    </div>
  );

    


</div>

  )
}
export default Home

