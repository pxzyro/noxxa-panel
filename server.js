const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>PANEL NOXXA V2 PRO</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Inter,sans-serif}
body{background:#0a0a0f;color:white;display:flex;min-height:100vh}
.sidebar{width:260px;background:#11111a;border-right:1px solid #222;padding:20px}
.logo{font-size:24px;font-weight:900;background:linear-gradient(90deg,#00d4ff,#9d00ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:30px}
.menu a{display:block;padding:12px 15px;margin:5px 0;border-radius:10px;color:#888;text-decoration:none;transition:.2s}
.menu a.active,.menu a:hover{background:linear-gradient(90deg,#1a1a2e,#16213e);color:white;border-left:3px solid #00d4ff}
.main{flex:1;padding:30px;background:radial-gradient(circle at top,#1a1a2e, #0a0a0f)}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin:20px 0}
.card{background:linear-gradient(145deg,#11111a,#151525);border:1px solid #222;border-radius:16px;padding:20px;box-shadow:0 0 20px rgba(0,212,255,0.1)}
.card h3{color:#888;font-size:14px}
.card h1{font-size:36px;margin:10px 0}
.card span{color:#00ff88;font-size:13px;background:#002a14;padding:4px 10px;border-radius:20px}
.header{display:flex;justify-content:space-between;align-items:center}
.btn{background:linear-gradient(90deg,#00d4ff,#9d00ff);padding:12px 20px;border:none;border-radius:10px;color:white;font-weight:bold;cursor:pointer}
.status{margin-top:30px;background:#11111a;padding:20px;border-radius:16px;border:1px solid #222}
</style>
</head>
<body>
<div class="sidebar">
<div class="logo">PANEL NOXXA V2<br><small style="font-size:12px;color:#888">V2 • PRO</small></div>
<div class="menu">
<a class="active">📊 Dashboard</a>
<a>🤖 Servers</a>
<a>👥 Users</a>
<a>📦 Bots</a>
<a>⚙️ Settings</a>
</div>
</div>
<div class="main">
<div class="header">
<div><h1>Dashboard</h1><p style="color:#888">Welcome back, Admin Noxxa</p></div>
<button class="btn">+ Deploy New Bot</button>
</div>
<div class="cards">
<div class="card"><h3>ACTIVE BOTS</h3><h1>128</h1><span>↗ +12 this week</span></div>
<div class="card"><h3>TOTAL USERS</h3><h1>2,341</h1><span>↗ +84 this month</span></div>
<div class="card"><h3>SYSTEM UPTIME</h3><h1>99.98%</h1><span>✓ Running 42d</span></div>
</div>
<div class="status">
<h3>🚀 PANEL NOXXA V2 AKTIF!</h3>
<p style="color:#888;margin-top:10px">Server Status: <span style="color:#00ff88">● Online</span> | Railway Deployment: Active | Version: 2.0 PRO</p>
<p style="margin-top:15px">Link Panel: <b>noxxa-panel-production.up.railway.app</b></p>
</div>
</div>
</body>
</html>
  `);
});

app.listen(PORT, () => console.log('NOXXA V2 PRO Running on', PORT));
