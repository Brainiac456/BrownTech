import React from 'react'
import './description.css'

const description = () => {
  return (

    <>
    <div className='desc'>

      <div className='grid1'>  
     <div className="centered-images">
      <img src="./DescMan.png" alt="Image 1" style={{transform: "scaleX(-1)" , position:'relative', top:'50px'}} width="300px" height="300px" />
      <img src="./DescBrowser.png" alt="Image 2" width="350px" height="350px" />
    </div>
   
    </div>
    <div className='grid2'>

    <p style={{color:'#F12797' , position:'relative', top:'5rem', fontSize:'16px' ,fontWeight: "700"}}>THE EASY WAY TO MOVE</p>
    <p style={{position:'relative', top:'5rem', fontSize:'45px'}}>HOW IT WORKS </p>

    <p style={{color:"rgba(24, 20, 88, 0.5)", position:'relative', top:'10rem', fontSize:'16px',fontWeight: "400"}}>Search</p>
    <p style={{position:'relative', top:'10rem', fontSize:'40px'}}>Some Details </p>
    <p style={{color:"rgba(24, 20, 88, 0.5)", position:'relative', top:'10rem', fontSize:'16px',fontWeight: "400"}}>Request quote and read previous customers feedback to learn more and choose right quote for yourself </p>


    </div>
    </div>
    </>
  )
}
export default description