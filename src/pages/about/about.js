import React from 'react'
import './about.css'
import ProfileBar from '../../components/DriverData/ProfileBar'
import BookingeBar from '../../components/bookingBar/bookingBar'
import Card from '../../components/Cards/cards'
import Description from '../../components/HowItWorks/description'
import {CgPaypal} from 'react-icons/cg'
import {RiVisaFill} from 'react-icons/ri'
import {FaCcMastercard, FaCcApplePay} from 'react-icons/fa'
import ServiceDetails from '../../components/serviceDetails/serviceDetails'
import Footer from '../../components/Footer/footer'
import Review2 from '../../components/Review2/review2'
import {FiArrowUpRight} from "react-icons/fi"
import Article from '../../components/article/article'

export default function about() {
    return (
        <>
       
        
        <div className='main'>
        
        <div className='info'> 
        

          <h1  style={{fontSize:'50px',color:'#F12797'}}>Luton Airport</h1> 
          <p  style={{fontSize:'50px',fontSize:'45px'}}>Hassle Free</p> 
          <p  style={{fontSize:'50px',fontSize:'45px'}}>Transfer Service</p> 
          <p   style={{fontSize:'25px'}}>Aiport transfer today and save upto 40%</p>
          <div style={{display:'flex' , justifyContent:'space-between'  , width:'15rem' , marginTop:'2rem'}} ><CgPaypal style={{fontSize:'2rem'}} /> <RiVisaFill style={{fontSize:'2rem'}}/> <FaCcMastercard style={{fontSize:'2rem'}}/> <FaCcApplePay style={{fontSize:'2rem'}}/> </div>
       
        </div>
        
        <div>
      
       
        
        </div>
    
          <div className='booking'>
          <BookingeBar/>
          </div>
    
          
    
        </div>
        
        <div className='cards'>
    
        <div className='advantages'>
    
    
       
    
          <h1 style={{ fontWeight:'bold' , marginTop:'2rem' , width:'25rem' , textAlign:'center'}} >Let us Take care of <span style={{color:'#F12797'}}>Your Journey</span></h1>
       
    
            <div  className="card-list" >
            <Card className='card' information={'24 Hour Service'} image={'./test.png'} details={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'} />
            <Card  className='card'information={'Book online or call us'} image={'./test.png'}  details={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'}  />
            <Card  className='card'information={'Booking Notification'} image={'./test.png'}  details={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'}/>
            <Card  className='card'information={'Flight monitoring'} image={'./test.png'}  details={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'}/>
            <Card  className='card'information={'Fully Lincensed Drivers'} image={'./test.png'}  details={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'}/>
            <Card  className='card'information={'Instant Quote'} image={'./test.png'}  details={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'}/>
            <Card  className='card'information={'Vehicle Selection'} image={'./test.png'}  details={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'}/>
            <Card className='card' information={'NationWide Coverage'} image={'./test.png'}  details={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'}/>
            </div>
    
        </div>
    
        </div>
    
          <div className='welcome'>
            
            <div className='welcome__grid'>
            <h1 style={{width:'32rem'}}><span style={{color:'#F12797'}}> Welcome to </span> Luton Airport Taxi Transfer! </h1>
            <p style={{fontSize:'22px',width:'39rem' , marginTop:'2rem' , color:'#74729B'}}>Going to or from Luton airport has never been easier with lutonairporttaxis.co.uk</p>
            <p style={{fontSize:'18px' ,fontWeight:'400',width:'39rem' , marginTop:'2rem' , color:'#74729B'}}>Going to or from Luton airport has never been easier with LUTONAIRPORT.TAXI. We provide affordable, convenient, and safe airport transfers around the clock with just a click or call. Our fleet is up to date with the latest vehicles and technology with vetted, reliable hand picked drivers allowing a comfortable, hassle free journey.</p>
            <button style={{fontSize:"16px",width:'9rem' , height:'3rem' , border:'none' , backgroundColor:'#4699FB' , color:'white' , borderRadius:'6px' , margin:'6rem 0rem'}}>About us <FiArrowUpRight style={{fontSize:'1.2rem'}}/></button>
            </div>
           
          </div>
    


            <div className='cards'>
            <div className='advantages'>
           
            <h1 style={{ fontWeight:'bold'  ,marginTop:'2rem' , width:'25rem' , textAlign:'center'}} >What out customers <span style={{color:'#F12797'}}>say about us</span></h1>
            <div className='card-list'> 
            <Review2  image = "./man.png"  name = 'huzaifa'  rating = '5' description = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum euismod mauris ipsum et, tempor'/>
            <Review2  image = "./man.png"  name = 'huzaifa'  rating = '5' description = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum euismod mauris ipsum et, tempor'/>
            <Review2  image = "./man.png"  name = 'huzaifa'  rating = '5' description = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum euismod mauris ipsum et, tempor'/>
            <Review2  image = "./man.png"  name = 'huzaifa'  rating = '5' description = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum euismod mauris ipsum et, tempor'/>
           
                
            </div>
                <div style={{display:'flex' , marginTop:'5rem'}}>
                <button style={{width:'3rem' , height:'3rem' , border:"none", color:'white' ,borderRadius:'2px' ,backgroundColor:'#4699FB', marginRight:'1rem'}}>{'<'}</button>
            <button style={{width:'3rem' , height:'3rem' , border:"none", color:'white' ,borderRadius:'2px' ,backgroundColor:'#4699FB'}}>{'>'}</button>
                </div>


           </div>
            </div>

        
        <div className='cards'>

        <div className='advantages'>
        <h1 style={{ fontWeight:'bold' , marginTop:'10rem'  , width:'25rem' , textAlign:'center'}} ><span style={{color:'#F12797'}}>News </span> and <span style={{color:'#F12797'}}> Articles</span></h1>
        
        <div style={{display:'flex' , marginTop:'6rem'}}>
        
        <Article   imageSrc="./TaxiShot.jpg" name ="Taxi from Luton" description = "Lorem ipsum dolor amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,"/>
        <Article   imageSrc="./TaxiShot.jpg" name ="Taxi from Luton" description = "Lorem ipsum dolor amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,"/>
        <Article   imageSrc="./TaxiShot.jpg" name ="Taxi from Luton" description = "Lorem ipsum dolor amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,"/>
      
        </div>

        </div>

        </div>         
    
          <Footer/>
        </>
      )
}
