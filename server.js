const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'Online', version: '3.0 ULTIMATE', panel: 'NOXXA' });
});

app.listen(PORT, () => {
  console.log(`PANEL NOXXA V3 RUNNING ON PORT ${PORT}`);
});
