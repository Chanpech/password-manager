import React, {useState}from "react";

const PasswordItem = ({password}) =>{
    const [visible, setVisible] = useState(false);

    return (
        <div className="password-item">
            <h3>{password.site}</h3>
            <p className="username">
                Username: {password.username}
            </p>
            <p className="password">
                Password: {visible ? password.password : '**********'}
            </p>
            <button className="button" onClick={() => setVisible(!visible)}>
                {visible ? 'Hide' : 'Show'}
            </button>
        </div>
    );
}

export default PasswordItem;