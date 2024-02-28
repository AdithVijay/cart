import React from 'react'
import list  from '../Data'
import Card from './Card'
import './Amazon.css'
const Amazon = () => {
  return (
    <section>
       {list.map((item)=>(
        <Card key={item.id} item={item}/>
       ))}
    </section>
  )
}

export default Amazon