const express = require('express');

const PORT = 5000;

const server = express();

server.use('/api/v1/songoku', (req, res) => {
    res.send("Hola son goku");

})

server.use('/api/v1/Namek', (req, res) => {
    res.send("Bienvenido al planeta Namek");

})

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
}) 