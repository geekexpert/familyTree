import React from 'react';
import './Member.css';
import m from './m.png';
import f from './f.png';

interface Details  {
    id: number,
    name: string,
    gender: string,
    children: number[],
    parents: number[]
  }

  interface Props  {
    person:Details
  }
  
 const Member:React.FC<Props> =({person}) => {
  
  return (
    <div style={{ backgroundColor: person.gender === "female"? 'lightpink': 'lightblue'}} className='Member'>
        <span><img src={person.gender === "female"? f: m} alt={person.gender} /></span>{person.name}
        </div>
  )
}

export default Member