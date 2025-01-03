const express = require('express')
const app = express()
const PORT = 3000;
const nicknames = ["Superstar", "Champion", "Hero", "Legend", "Rockstar", "Explorer"];

app.use((req,res,next)=>{
    console.log(`${req.method}request to ${req.url}`)
    next();
})
app.get('/', (req,res) => {
    console.log(`Received a ${req.method} request at ${req.url}`);
    res.send(`
        <html>
            <head>
                <title>Welcome 🌍</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        margin: 0;
                        padding: 0;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: #fff;
                    }
                    h1 {
                        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                    }
                    a {
                        color: #ffeb3b;
                        text-decoration: none;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div style="text-align: center;">
                    <h1>Hello, World! 🌍</h1>
                    <p>Welcome to my interactive Node.js app! 🚀</p>
                    <p>Try visiting: <a href="/greet?name=">/greet?name=John</a></p>
                </div>
            </body>
        </html>
    `)
    
})
app.get('/greet', (req,res) => {
    const name = req.query.name || 'Guest' 
    const randomNickname = nicknames[Math.floor(Math.random() * nicknames.length)];

    res.send(`
        <html>
            <head>
                <title>Greeting 🎉</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        margin: 0;
                        padding: 0;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: linear-gradient(135deg, #43cea2 0%,rgb(12, 38, 65) 100%);
                        color: #fff;
                    }
                    h1 {
                        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                    }
                    a {
                        color: #ffeb3b;
                        text-decoration: none;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div style="text-align: center;">
                    <h1>Hello, ${name} the ${randomNickname}! 🎉</h1>
                    <p>You're amazing and welcome to the world of Node.js! 🚀</p>
                    <p>Try changing the name in the URL, like: <a href="/greet?name=Alex">/greet?name=</a></p>
                </div>
            </body>
        </html>
    `)
    
})


app.listen(PORT, ()=>{
    console.log(`🚀 Server running at http://localhost:${PORT}`)

})