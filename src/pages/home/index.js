
import React from 'react'
import Navbar from '../../components/navbar'
import ProfileBar from '../../components/DriverData/ProfileBar'
import {CgPaypal} from 'react-icons/cg'
import {RiVisaFill} from 'react-icons/ri'
import BookingeBar from '../../components/bookingBar/bookingBar'
import {FaCcMastercard, FaCcApplePay} from 'react-icons/fa'
import './home.css'
import Card from '../../components/Cards/cards'
import Description from '../../components/HowItWorks/description'
import HistoryData from '../../components/HistoryData/historyData'

import Footer from '../../components/Footer/footer'
import ReviewCard from '../../components/Review/reviewCard'
import ServiceDetails from '../../components/serviceDetails/serviceDetails'



export default function index() {
  return (
    <>
   
    
    <div className='main'>
    
    <div className='info'> 
    
      <p>  Aiport transfer today and save upto 40% </p>
      <h1  style={{fontSize:'50px'}}>Start planning your<br/> <span style={{color:'#F12797'}}> dream trip</span><br/>today!</h1> 
      <p   style={{fontSize:'25px'}}>You have come to the right place</p>
      <div style={{display:'flex' , justifyContent:'space-between'  , width:'15rem' , marginTop:'2rem'}} ><CgPaypal style={{fontSize:'2rem'}} /> <RiVisaFill style={{fontSize:'2rem'}}/> <FaCcMastercard style={{fontSize:'2rem'}}/> <FaCcApplePay style={{fontSize:'2rem'}}/> </div>
   
    </div>
    
    <div>
    <ProfileBar/>
      <img style={{position:'relative' , top:'100px'}} src='./Car.png' width='550px' />
      <img style={{position:'relative' , right:'45px' , top:'45px'}} src = './hero.png' width='200px'/>
   
    
    </div>

      <div className='booking'>
      <BookingeBar/>
      </div>

      

    </div>
    
    <div className='cards'>

    <div className='advantages'>


   

      <h2 style={{fontSize:'16px' , fontWeight:'bold' , color:'#F12797', marginTop:'2rem'}} >OUR ADVANTAGES</h2>
        <h1 style={{fontWeight:'400'  , fontSize:'45px'}}>Why Choose Us</h1>

        <div  className="card-list" >
        <Card className='card' information={'24 Hour Service'} image={'./test.png'} />
        <Card  className='card'information={'Book online or call us'} image={'./test.png'} />
        <Card  className='card'information={'Booking Notification'} image={'./test.png'}/>
        <Card  className='card'information={'Flight monitoring'} image={'./test.png'}/>
        <Card  className='card'information={'Fully Lincensed Drivers'} image={'./test.png'}/>
        <Card  className='card'information={'Instant Quote'} image={'./test.png'}/>
        <Card  className='card'information={'Vehicle Selection'} image={'./test.png'}/>
        <Card className='card' information={'NationWide Coverage'} image={'./test.png'}/>
        </div>

    </div>

    </div>

      <div className='description'>
        
        <div className='desc__image'>
        <Description/>
        </div>
     
      </div>

      <div className='history__data' >
        <div className='history__data__cards'>
          <div className='card-list'>
        <HistoryData   image="./test.png"  name="250" description="Fleet vehicles"/>
        <HistoryData   image="./test.png"  name="25,800+" description="Kilometers Driven"/>
        <HistoryData   image="./test.png"  name="20" description="Expert Driver Members"/>
        <HistoryData   image="./test.png"  name="710" description="Happy Clients"/>
        </div>
        </div>
     
      </div>

      <div className='car__details'>
      <div className='car__details__arrangement'>
      <h2 style={{fontSize:'16px' , fontWeight:'bold' , color:'#F12797', marginTop:'2rem'}} >EASY WAY TO MOVE</h2>
        <h1 style={{fontWeight:'400'  , fontSize:'45px'}}>Our Services </h1>

         <div className='car__details__grid1'>
         <ServiceDetails name = {'Lorum Standard'} imageSrc={"./sideCar.png"}  />
         {/* <div style={{ backgroundColor: '#F15BB5', display: 'flex', justifyContent: 'space-between', padding: '10px' ,width:'70px' , position:'relative' }}>
         <button onClick={''} style={{ color: 'white', backgroundColor: 'transparent', border: 'none', fontSize: '20px', cursor: 'pointer' }}>&#8249;</button> 
       
         <button onClick={''} style={{ color: 'white', backgroundColor: 'transparent', border: 'none', fontSize: '20px', cursor: 'pointer' }}>&#8250;</button>
        </div> */}

         </div>
           
        </div>
      </div>


      <div className='review'>

        <div className='review__grid2'>


        <h2 style={{fontSize:'16px' , fontWeight:'bold' , color:'#F12797', marginTop:'2rem'}} >WHAT PEOPLE SAY</h2>
        <h1 style={{fontWeight:'400'  , fontSize:'45px'}}>About Us </h1>
        <p style={{width:'28rem'}}>Request Quotes and check for the previous feedback by the customer and find your ride according to your need</p>
 
        <div style={{marginTop:'5rem' , width:'20%'}}>
         <ReviewCard rating={3} review ={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet!.”'} name="Very Good" />
         </div>
        </div> 


         <div className='review__grid3'>
         <ReviewCard rating={3} review ={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet!.”'} name="Very Good" />
         </div>

          <div className='review__grid4'>
         <ReviewCard rating={3} review ={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet!.”'} name="Very Good" />
         <ReviewCard rating={3} review ={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet!.”'} name="Very Good" />
          </div>

          <div className='review__grid5'>
         <ReviewCard rating={3} review ={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet!.”'} name="Very Good" />
          <div style={{marginTop:'2.5rem'}}>
         <ReviewCard rating={3} review ={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet!.”'} name="Very Good" />
         </div>
         </div>
       

      
      </div>

          <div className='get__started' >
          <div className='get__start'>
          <h1>Ready to get Started?</h1>
          <p style={{width:'25rem'}}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet!. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet! ”</p>
          <button style={{width:'12rem', border:'none' ,height:'3rem' , borderRadius:'5px' , backgroundColor:'#4699FB' , color:'white' , marginLeft:'6rem'}} >Get Started</button>
          </div>
          </div>

      <Footer/>
    </>
  )
}
