//modules
const express = require('express');

// expressインスタンス
const app = express();

//body-parserが標準搭載（req.body）
// https://qiita.com/atlansien/items/c587a0bf2f7f9022107c
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Route
const login = require('./routes/login');
const user = require('./routes/user');

// Import API route
app.use(login);
app.use(user);

// Export express
module.exports = app;

// server
if (require.main === module) {
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
        console.log(`API server listening on port ${port}`);
    });
}
