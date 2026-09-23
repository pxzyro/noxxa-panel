const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head><title>NOXXA V2 PANEL</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      body{background:#0f0f10;color:white;font-family:sans-serif;text-align:center;padding:40px}
      .card{background:#1e1e20;padding:30px;border-radius:15px;max-width:400px;margin:auto}
      button{background:#5865F2;color:white;border:none;padding:15px 30px;border-radius:10px;font-size:18px}
      .btn{margin:10px;display:block;background:#2a2a2d;padding:12px;border-radius:8px}
    </style>
    </head>
    <body>
      <div class="card">
        <h1>NOXXA V2</h1>
        <p>Web Panel Gratis</p>
        <a href="/dashboard"><button>BUKA PANEL</button></a>
        <hr style="margin:20px 0;border-color:#333">
        <div class="btn">Anti-Link: ON</div>
        <div class="btn">Anti-Spam: ON</div>
        <div class="btn">Welcome: ON</div>
        <div class="btn">Server Stats</div>
      </div>
    </body>
    </html>
  `);
});

app.get('/dashboard', (req, res) => {
  res.send('<h1 style="font-family:sans-serif;text-align:center;margin-top:50px">PANEL NOXXA V2 AKTIF!<br><br><a href="/">Kembali</a></h1>');
});

app.listen(PORT, () => console.log('Noxxa running'));
