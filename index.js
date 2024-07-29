const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('SSE test')
})

app.get('/ping', (req, res) => {
    res.send('pong 🏓')
})

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

// app.post('/sse', (req, res) => {
//     console.log("Nowe połączenie SSE");
//     res.setHeader('Content-Type', 'text/event-stream');
//     res.setHeader('Cache-Control', 'no-cache');
//     res.setHeader('Connection', 'keep-alive');
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.flushHeaders();

//     const sendEvent = (data) => {
//         try {
//             res.write(`data: ${JSON.stringify(data)}\n\n`);
//         } catch (err) {
//             console.error('Error send data:', err);
//             clearInterval(intervalId);
//             res.end();
//         }
//     };

//     let counter = 0;
//     const exampleData = () => ({
//         content: `Mock message ${counter++}`,
//     });

//     const intervalId = setInterval(() => {
//         if (counter >= 10) {
//             clearInterval(intervalId);
//             console.log('Stop 10 message');
//             res.end();
//             return;
//         }
//         const data = exampleData();
//         console.log('Send data:', data);
//         sendEvent(data);
//     }, 500);

//     req.on('close', () => {
//         clearInterval(intervalId);
//         console.log('Close connection');
//         res.end();
//     });

//     req.on('error', (err) => {
//         clearInterval(intervalId);
//         console.error('Error connection:', err);
//         res.end();
//     });
// });

const port = process.env.PORT || 8080

app.listen(port, (err, res) => {
    if (err) {
        console.log(err)
        return res.status(500).send(err.message)
    } else {
        console.log('[INFO] Server Running on port:', port)
    }
})