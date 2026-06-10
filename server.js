const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

// GET tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST task
app.post('/tasks', (req, res) => {
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        res.send("Server is working");
    });

    app.listen(5001, () => {
        console.log("Server running on port 5001");
    });
    const task = req.body;
    tasks.push(task);
    res.json({ message: "Task added" });
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});