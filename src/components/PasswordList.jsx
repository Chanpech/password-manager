import React from 'react';
import PasswordItem from "./PasswordItem";

const PasswordList = ({passwords}) => { 
    return(
        <div className="password-list">
            Password Items:
            {passwords.map((password)=>(
              <PasswordItem 
                key={password.id} 
                password={password}
                hashedpassword={password.hashedpassword}
                />  
            ))}
        </div>
    );
}

export default PasswordList;