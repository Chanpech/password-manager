const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Server side hashing is running!')
});

//Endpoint to hash a password
app.post('/hash-password', async(req, res) => {
    try {
        const {site,username,password} = req.body;

        //Hash the password with bcrypt
        const hashedPassword = await bcrypt.hash(password,10);

        //Mock response - In a real application, this would be saved to a database
        res.json({
            id: Date.now(),
            site,
            username,
            password,
            hashedPassword,
        });

    } catch (error) {
        res.status(500).json({message: 'Error hashing password', error});
    }
});

//Start the server
app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});