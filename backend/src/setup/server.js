const app = require('./index');

app.listen(8000, () => {
    // console.log('server start on port 8000'); 
    console.log(process.env);
})