import React from 'react';
import './App.css';
import Member from './components/Member';
import { Family } from './FamilyTree';

const App:React.FC = () => {
  return (
    <div className="App">
      {Family.map((data, key) => {
          return (
            <Member key={key} person={{id:data.id, name:data.name,gender:data.gender,children:data.children,parents:data.parents}} />
          );
        })}
        <div className='log'>
        <h2>Please kindly note:</h2>
          <ul>
            <li>This is my <strong>first TypeScript</strong> based React app.</li>
            <li><strong>1 hour</strong>develop time.</li>
            <li><strong>15 mins</strong> Online Tutorial Learning for Typescript.</li>
            <li>This is far I could go due to workload, time constraints.</li>
            <span><a href="https://www.youtube.com/watch?v=Z5iWr6Srsj8&t=1087s">Tutorial</a></span>
            <li>Despite outcome, Thank you for the oppurtunity.  </li>
          </ul>
        </div>
    </div>
  );
}

export default App;
