import React, {useState} from 'react';

const AddPassword = ({addPassword}) =>{
    const [site, setSite] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hashedPassword, setHashedPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Send the password details to the backend for hashing using fetch
          const response = await fetch('http://localhost:3050/hash-password', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              site,
              username,
              password,
              hashedPassword,
            }),
          });
          
          console.log(response)
          // Check if the response is okay
          if (!response.ok) {
            throw new Error('Failed to hash password');
          }
    
          // Parse the JSON response
          const data = await response.json();

          console.log(data.hashedPassword);
    
          // Add the returned data (with hashed password) to the state
          addPassword(data);
    
          // Clear input fields
          setSite('');
          setUsername('');
          setPassword('');
        } catch (error) {
          console.error('Error hashing password:', error);
        }
      };

    return (
        <div className='add-password'>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='Site'
                    value={site}
                    onChange={(e)=> setSite(e.target.value)}
                    required
                />
                <input 
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    required
                />
                <input 
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                />
                <button type="submit">Store Information</button>
            </form>
        </div>
    );
}; 

export default AddPassword;