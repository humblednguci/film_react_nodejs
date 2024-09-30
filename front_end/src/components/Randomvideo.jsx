import React, { useEffect, useState } from 'react'
import { useFetcher, useParams } from 'react-router-dom'

const Randomvideo = (props) => {
    const slug = useParams()
    const[data,setData] =useState([])
    useEffect(() => {
        get(slug).then(({ data }) => {
            setProduct(data); 
        });
      }, [slug]);
    useEffect(()=>{
        setData(props.products)
    },[props])
  return (
    <div className='grid grid-cols-4 gap-4'>
        {data
          .sort(() => Math.random() - 0.5).slice(0,3)
          .map((item) => (
            <div key={item._id}>
              <Link to={`/video/${item.slug}`}>
                <img
                  className='w-[400px] h-auto'
                  src={item.image}
                  alt={item.name}
                />
                <h1 className='text-3xl'>{item.name}</h1>
              </Link>
            </div>
          ))}
      </div>
  )
}

export default Randomvideo