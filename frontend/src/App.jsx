import { useState } from 'react'
import './style.css'
import { RiLockPasswordLine } from "react-icons/ri";
import { RiBookletLine } from "react-icons/ri";

import AddPassword from './components/AddPassword';
import PasswordList from './components/PasswordList'

function App() {
  //State to store passowrds
  const [passwords, setPasswords] = useState([]); 


  //Parent function to add a new password to the list
  const addPassword = (password) => {
    setPasswords([...passwords, password]); //Updates the state by adding the new password 
  };

  return (
      <div className="app">
        <div>
          <h1>
            <RiLockPasswordLine />
            Passwords Manager
            <RiBookletLine />
          </h1>
        </div>
        <div className='app-subsection'>
          <AddPassword addPassword={addPassword}/>
          <PasswordList passwords={passwords}/>
        </div>
      </div>
  )
}

export default App
