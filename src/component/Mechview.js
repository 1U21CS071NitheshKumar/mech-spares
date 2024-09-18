import React, { useContext, useEffect, useState } from 'react'
import { usercontext } from '../App'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import '../component/mechview.css'
import { Card } from 'react-bootstrap'
import img22 from '../images/img22.png'

function Mechview() {
    let [result, setresult] = useState([])
    let { id } = useParams()
    console.log(id)
    let navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://www.nandha.fun/mechandspares/shop/${id}`)
            .then(res => {
                setresult(res.data.data);
                console.log(res.data.data);
                console.log(result.username);


            })
    }, [id])

    return (
        <>
            <div>
                {result.shopimage && (
                    <img
                        src={`http://www.nandha.fun/uploads/${result.shopimage.split('\\').pop()}`}
                        className='mechview1'
                        alt={result.shopname}
                        style={{ width: '500px', height: 'auto' }} />)}
                <Card className='mechview2'>
                    <div className='mechview3'> {result.shopname} </div>
                    <div className='mechview4'>{result.shopdetails}</div><img src={img22} className='mechview5' />
                    <div className='mechview6' > {result.feildin}</div>
                    <div className='mechview7'>rating- {result.shoprating}<i class="bi bi-star-fill mechp1-icon1"></i>
                  <i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1"></i><i class="bi bi-star-fill mechp1-icon1">
                  </i><i class="bi bi-star-half mechp1-icon1"></i></div>
                  <div className='mechview8'><i class="bi bi-geo-alt"></i> Location: {result.shoplocation}</div>
                  <div className='mechview9'><i class="bi bi-telephone-outbound-fill"></i> Moblie-no:{result.shopmobile}</div>
                </Card>
            </div>
        </>
    )
}

export default Mechview