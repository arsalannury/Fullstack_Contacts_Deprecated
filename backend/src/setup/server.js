const expressApp = require('./index');

expressApp.listen(4000, () => {
    // eslint-disable-next-line no-console
    console.log('server start on port 4000');
});

