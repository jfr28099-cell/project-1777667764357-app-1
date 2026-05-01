const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/posts', (req, res) => {
    res.json([{ id: 1, title: 'First Post', content: 'This is the first post' }]);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});