import app from './app';

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log("server statrted on http://localhost:%d", PORT);
});