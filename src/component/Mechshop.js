import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../component/mechshop.css'
import img20 from '../images/img20.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';



function Mechshop() {
  let [result,setresult] = useState([])

  let navigate = useNavigate()

  useEffect(() => {
    axios.get("http://www.nandha.fun/mechandspares/shops")
      .then(res => {
        setresult(res.data.data)
      })
  }, [])
  console.log(result)

  let handleapi = (_id) => {
    navigate('/Mechview/'+ _id)
    console.log(_id)
  }

  return (
    <>
    <div className='z7'>
      <div>

        <Card className='mech1'>
          {result.slice(1, 2).map(item => (
            <div className='mechp1'>
              <div>
                <img src={`http://www.nandha.fun/uploads//1725343647923.jpg`} className='mechp1-c1' />
              </div>
              <div className='mechp1-c2'>
                <h2>{item.shopname}</h2>
                <p className='mechp1-c2_p1'>Rating- {item.shoprating}<i class="bi bi-star-fill mechp1-icon1"></i>
                  <i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-half mechp1-icon1"></i></p>
                <p className='mechp1-c2_p2'>Shoptime:"10am-to-9:30"</p>
                <button onClick={() => handleapi(item._id)}>view details</button>
              </div>
            </div>
          ))}
        </Card>

        <Card className='mech1'>
          {result.slice(2, 3).map(item => (
            <div className='mechp1'>
              <div>
                <img src={`http://www.nandha.fun/uploads//1725343695304.jpg`} className='mechp1-c1' />
              </div>
              <div className='mechp1-c2'>
                <h2>{item.shopname}</h2>
                <p className='mechp1-c2_p1'>Rating- {item.shoprating}<i class="bi bi-star-fill mechp1-icon1"></i>
                  <i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1">
                  </i><i class="bi bi-star-half mechp1-icon1"></i></p>
                <p className='mechp1-c2_p2'>Shoptime:"10am-to-9:30"</p>
                <button onClick={() => handleapi(item._id)}>view details</button>
              </div>
            </div>
          ))}
        </Card>


        <Card className='mech1'>
          {result.slice(3, 4).map(item => (
            <div className='mechp1'>
              <div>
                <img src={`http://www.nandha.fun/uploads//1725343723402.jpg`} className='mechp1-c1-change1' />
              </div>
              <div className='mechp1-c2'>
                <h2>{item.shopname}</h2>
                <p className='mechp1-c2_p1'>Rating- {item.shoprating}<i class="bi bi-star-fill mechp1-icon1"></i>
                  <i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1">
                  </i><i class="bi bi-star-half mechp1-icon1"></i></p>
                <p className='mechp1-c2_p2'>Shoptime:"10am-to-9:30"</p>
                <button onClick={() => handleapi(item._id)}>view details</button>
              </div>
            </div>
          ))}
        </Card>


        <Card className='mech1'>
          {result.slice(4, 5).map(item => (
            <div className='mechp2'>
              <div>
                <img src={`http://www.nandha.fun/uploads//1725534354792.jpg`} className='mechp2-c1' />
              </div>
              <div className='mechp2-c2'>
                <h2>{item.shopname}</h2>
                <p className='mechp2-c2_p1'>Rating- {item.shoprating}<i class="bi bi-star-fill mechp1-icon1"></i>
                  <i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1">
                  </i><i class="bi bi-star-half mechp1-icon1"></i></p>
                <p className='mechp2-c2_p2'>Shoptime:"10am-to-9:30"</p>
                <button onClick={() => handleapi(item._id)}>view details</button>
              </div>
            </div>
          ))}
        </Card><Card className='mech1'>
          {result.slice(5, 6).map(item => (
            <div className='mechp1'>
              <div>
                <img src={`http://www.nandha.fun/uploads//1725343763782.jpg`} className='mechp1-c1' />
              </div>
              <div className='mechp1-c2'>
                <h2>{item.shopname}</h2>
                <p className='mechp1-c2_p1'>Rating- {item.shoprating} <i class="bi bi-star-fill mechp1-icon1"></i>
                  <i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1">
                  </i><i class="bi bi-star-half mechp1-icon1"></i></p>
                <p className='mechp1-c2_p2'>Shoptime:"10am-to-9:30"</p>
                <button onClick={() => handleapi(item._id)}>view details</button>
              </div>
            </div>
          ))}
        </Card><Card className='mech1'>
          {result.slice(6, 7).map(item => (
            <div className='mechp1'>
              <div>
                <img src={`http://www.nandha.fun/uploads//1725343788825.jpg`} className='mechp1-c1-change2' />
              </div>
              <div className='mechp1-c2'>
                <h2>{item.shopname}</h2>
                <p className='mechp1-c2_p1'>Rating- {item.shoprating}<i class="bi bi-star-fill mechp1-icon1"></i>
                  <i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1">
                  </i><i class="bi bi-star-half mechp1-icon1"></i></p>
                <p className='mechp1-c2_p2'>Shoptime:"10am-to-9:30"</p>
                <button onClick={() => handleapi(item._id)}>view details</button>
              </div>
            </div>
          ))}
        </Card><Card className='mech1'>
          {result.slice(7, 8).map(item => (
            <div className='mechp1'>
              <div>
                <img src={`http://www.nandha.fun/uploads//1725344223787.jpg`} className='mechp1-c1-change3' />
              </div>
              <div className='mechp1-c2'>
                <h2>{item.shopname}</h2>
                <p className='mechp1-c2_p1'>Rating- {item.shoprating}<i class="bi bi-star-fill mechp1-icon1"></i>
                  <i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1">
                  </i><i class="bi bi-star-half mechp1-icon1"></i></p>
                <p className='mechp1-c2_p2'>Shoptime:"10am-to-9:30"</p>
                <button onClick={() => handleapi(item._id)}>view details</button>
              </div>
            </div>
          ))}
        </Card><Card className='mech1'>
          {result.slice(8, 9).map(item => (
            <div className='mechp1'>
              <div>
                <img src={`http://www.nandha.fun/uploads//1725343835097.jpg`} className='mechp1-c1-change4' />
              </div>
              <div className='mechp1-c2'>
                <h2>{item.shopname}</h2>
                <p className='mechp1-c2_p1'>Rating- {item.shoprating}<i class="bi bi-star-fill mechp1-icon1"></i>
                  <i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1">
                  </i><i class="bi bi-star-half mechp1-icon1"></i></p>
                <p className='mechp1-c2_p2'>Shoptime:"10am-to-9:30"</p>
                <button onClick={() => handleapi(item._id)}>view details</button>
              </div>
            </div>
          ))}
        </Card><Card className='mech1'>
          {result.slice(9, 10).map(item => (
            <div className='mechp3'>
              <div>
                <img src={`http://www.nandha.fun/uploads//1725343859783.png`} className='mechp3-c1' />
              </div>
              <div className='mechp3-c2'>
                <h2>{item.shopname}</h2>
                <p className='mechp3-c2_p1'>Rating- {item.shoprating}<i class="bi bi-star-fill mechp1-icon1"></i>
                  <i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1">
                  </i><i class="bi bi-star-half mechp1-icon1"></i></p>
                <p className='mechp3-c2_p2'>Shoptime:"10am-to-9:30"</p>
                <button onClick={() => handleapi(item._id)}>view details</button>
              </div>
            </div>
          ))}
        </Card><Card className='mech1'>
          {result.slice(10, 11).map(item => (
            <div className='mechp1'>
              <div>
                <img src={`http://www.nandha.fun/uploads//1725343880152.jpeg`} className='mechp4-c1' />
              </div>
              <div className='mechp4-c2'>
                <h2>{item.shopname}</h2>
                <p className='mechp4-c2_p1'>Rating- {item.shoprating}<i class="bi bi-star-fill mechp1-icon1"></i>
                  <i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1">
                  </i><i class="bi bi-star-half mechp1-icon1"></i></p>
                <p className='mechp4-c2_p1'>Shoptime:"10am-to-9:30"</p>
                <button onClick={() => handleapi(item._id)}>view details</button>
              </div>
            </div>
          ))}
        </Card>

        <Card className='mech1'>
          {result.slice(11, 12).map(item => (
            <div className='mechp4'>
              <div>
                <img src={`http://www.nandha.fun/uploads//1725343904373.jpeg`} className='mechp4-c1' />
              </div>
              <div className='mechp4-c2'>
                <h2>{item.shopname}</h2>
                <p className='mechp4-c2_p1'>Rating- {item.shoprating}<i class="bi bi-star-fill mechp1-icon1"></i>
                  <i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1">
                  </i><i class="bi bi-star-half mechp1-icon1"></i></p>
                <p className='mechp4-c2_p2'>Shoptime:"10am-to-9:30"</p>
                <button onClick={() => handleapi(item._id)}>view details</button>
              </div>
            </div>
          ))}
        </Card>

        <Card className='mech1'>
          {result.slice(12, 13).map(item => (
            <div className='mechp4'>
              <div>
                <img src={`http://www.nandha.fun/uploads//1725534662798.jpg`} className='mechp4-c1-change5' />
              </div>
              <div className='mechp1-c2'>
                <h2>{item.shopname}</h2>
                <p className='mechp1-c2_p1'>Rating- {item.shoprating}<i class="bi bi-star-fill mechp1-icon1"></i>
                  <i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1">
                  </i><i class="bi bi-star-half mechp1-icon1"></i></p>
                <p className='mechp1-c2_p2'>Shoptime:"10am-to-9:30"</p>
                <button onClick={() => handleapi(item._id)}>view details</button>
              </div>
            </div>
          ))}
        </Card>
      </div>
      </div>

    </>
  )
}

export default Mechshop