import React, { useImperativeHandle, useState } from 'react'

import Button from '@mui/material/Button';

 export const Changebtn=()=>{
    const [state, setstate] = useState(true);
    

 const onChange =  () => {
    setstate(!state)
    
  };

    return(
    
<div className='container'>
    
        <Button variant="contained" onClick={onChange} >{state?'hide':'show'}</Button>
        
        {state &&<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nihil maiores placeat magnam asperiores nam, necessitatibus sint praesentium debitis, 
            cum deserunt odit molestiae rerum facilis dolorem optio vero. Magni, asperiores?</p>
       } 
       
  
</div>
    )
        
      }
