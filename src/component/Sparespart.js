import React, { useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap'
import axios from 'axios';
import '../component/spares.css'
import { useNavigate } from 'react-router-dom';


function Spares() {
    let [result,setresult]=useState([])
    let navigate = useNavigate()

    useEffect(() => {
        axios.get('http://www.nandha.fun/mechandspares/spareshops')
            .then(res => {
                setresult(res.data.data);
            });
    }, []);

    let handleapi = (_id) => {
      navigate('/Sparesview/'+ _id)
      console.log(_id)
    }
    
  return (
    <div className='z6'>
     
       <Card className='spare1'>
        {result.slice(0,1).map(item=>(
            <div className='sparepo1'>
          <div>
         <img src={'http://www.nandha.fun/uploads//1725534804034.jpg'} className='sparimgc1'/>
          </div>
          <div className='spare1-c2'>
            <h2>{item.shopname}</h2>
            <p className='spare1-c2_p1'>Ratting:{item.shoprating}</p>
            <p className='spare1-c2_p2'>Shoptime:"10am-to-9:30"</p>
            <button onClick={() => handleapi(item._id)}>view details</button>
          </div>
         </div>
      ))}
      </Card>
      <Card className='spare1'>
        {result.slice(1,2).map(item=>(
            <div className='sparepo2'>
          <div>
         <img src={'http://www.nandha.fun/uploads//1725342050880.jpg'} className='sparimgc2'/>
          </div>
          <div className='spare2-c2'>
            <h2>{item.shopname}</h2>
            <p className='spare2-c2_p1'>Ratting:{item.shoprating}</p>
            <p className='spare2-c2_p2'>Shoptime:"10am-to-9:30"</p>
            <button onClick={() => handleapi(item._id)}>view details</button>
          </div>
         </div>
      ))}
      </Card>
      <Card className='spare1'>
        {result.slice(2,3).map(item=>(
            <div className='sparepo3'>
          <div>
         <img src={'http://www.nandha.fun/uploads//1725342173358.jpg'} className='sparimgc3'/>
          </div>
          <div className='spare3-c2'>
            <h2>{item.shopname}</h2>
            <p className='spare3-c2_p1'>Ratting:{item.shoprating}</p>
            <p className='spare3-c2_p2'>Shoptime:"10am-to-9:30"</p>
            <button onClick={() => handleapi(item._id)}>view details</button>
          </div>
         </div>
      ))}
      </Card>
      <Card className='spare1'>
        {result.slice(3,4).map(item=>(
            <div className='sparepo4'>
          <div>
         <img src={'http://www.nandha.fun/uploads//1725342259927.jpg'} className='sparimgc4'/>
          </div>
          <div  className='spare4-c2'>
            <h2>{item.shopname}</h2>
            <p  className='spare4-c2_p1'>Ratting:{item.shoprating}</p>
            <p className='spare4-c2_p2'>Shoptime:"10am-to-9:30"</p>
            <button onClick={() => handleapi(item._id)}>view details</button>
          </div>
         </div>
      ))}
      </Card>
      <Card className='spare1'>
        {result.slice(4,5).map(item=>(
            <div className='sparepo3'>
          <div >
         <img src={'http://www.nandha.fun/uploads//1725342556804.jpg'} className='sparimgc3'/>
          </div>
          <div className='spare3-c2'>
            <h2>{item.shopname}</h2>
            <p className='spare3-c2_p1'>Ratting:{item.shoprating}</p>
            <p  className='spare3-c2_p2'>Shoptime:"10am-to-9:30"</p>
            <button onClick={() => handleapi(item._id)}>view details</button>
          </div>
         </div>
      ))}
      </Card>
      <Card className='spare1'>
        {result.slice(5,6).map(item=>(
            <div className='sparepo6'>
          <div>
         <img src={'http://www.nandha.fun/uploads//1725342666913.jpeg'} className='sparimgc6'/>
          </div>
          <div  className='spare6-c2'>
            <h2>{item.shopname}</h2>
            <p className='spare6-c2_p1'>Ratting:{item.shoprating}</p>
            <p className='spare6-c2_p2'>Shoptime:"10am-to-9:30"</p>
            <button onClick={() => handleapi(item._id)}>view details</button>
          </div>
         </div>
      ))}
      </Card>

      <Card className='spare1'>
        {result.slice(6,7).map(item=>(
            <div className='sparepo3'>
          <div>
         <img src={'http://www.nandha.fun/uploads//1725342787616.jpg'} className='sparimgc3'/>
          </div>
          <div className='spare3-c2'>
            <h2>{item.shopname}</h2>
            <p className='spare3-c2_p1'>Ratting:{item.shoprating}</p>
            <p className='spare3-c2_p2'>Shoptime:"10am-to-9:30"</p>
            <button onClick={() => handleapi(item._id)}>view details</button>
          </div>
         </div>
      ))}
      </Card>
      <Card className='spare1'>
        {result.slice(7,8).map(item=>(
            <div className='sparepo3'>
          <div>
         <img src={'http://www.nandha.fun/uploads//1725343039298.jpg'} className='sparimgc3'/>
          </div>
          <div className='spare3-c2'>
            <h2>{item.shopname}</h2>
            <p className='spare3-c2_p1'>Ratting:{item.shoprating}</p>
            <p className='spare3-c2_p2'>Shoptime:"10am-to-9:30"</p>
            <button onClick={() => handleapi(item._id)}>view details</button>
          </div>
         </div>
      ))}
      </Card>
      <Card className='spare1'>
        {result.slice(8,9).map(item=>(
            <div className='sparepo3'>
          <div>
         <img src={'http://www.nandha.fun/uploads//1725343162715.jpg'} className='sparimgc3'/>
          </div>
          <div className='spare3-c2'>
            <h2>{item.shopname}</h2>
            <p className='spare3-c2_p1'>Ratting:{item.shoprating}</p>
            <p className='spare3-c2_p2'>Shoptime:"10am-to-9:30"</p>
            <button onClick={() => handleapi(item._id)}>view details</button>
          </div>
         </div>
      ))}
      </Card>
      <Card className='spare1'>
        {result.slice(9,10).map(item=>(
            <div className='sparepo3'>
          <div>
         <img src={'http://www.nandha.fun/uploads//1725343244830.JPG'} className='sparimgc3'/>
          </div>
          <div className='spare3-c2'>
            <h2>{item.shopname}</h2>
            <p className='spare3-c2_p1'>Ratting:{item.shoprating}</p>
            <p className='spare3-c2_p2'>Shoptime:"10am-to-9:30"</p>
            <button onClick={() => handleapi(item._id)}>view details</button>
          </div>
         </div>
      ))}
      </Card>
      <Card className='spare1'>
        {result.slice(10,11).map(item=>(
            <div className='sparepo3'>
          <div>
         <img src={'http://www.nandha.fun/uploads//1725343324471.jpg'} className='sparimgc3'/>
          </div>
          <div className='spare3-c2'>
            <h2>{item.shopname}</h2>
            <p className='spare3-c2_p1'>Ratting:{item.shoprating}</p>
            <p className='spare3-c2_p2'>Shoptime:"10am-to-9:30"</p>
            <button onClick={() => handleapi(item._id)}>view details</button>
          </div>
         </div>
      ))}
      </Card>
      <Card className='spare1'>
        {result.slice(11,12).map(item=>(
            <div className='sparepo12'>
          <div>
         <img src={'http://www.nandha.fun/uploads//1725343435367.jpg'} className='sparimgc12'/>
          </div>
          <div  className='spare12-c2'>
            <h2>{item.shopname}</h2>
            <p className='spare12-c2_p1'>Ratting:{item.shoprating}</p>
            <p className='spare12-c2_p2'>Shoptime:"10am-to-9:30"</p>
            <button onClick={() => handleapi(item._id)}>view details</button>
          </div>
         </div>
      ))}
      </Card>
    </div>
    
  )
}

export default Spares