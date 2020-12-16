const { Router } = require('express');

const router = Router();

// route
router.post('/auth/login', (req, res) => {
    console.log(req.body);
    res.send({ body: req.body, headers: req.headers });

    // //DBの接続
    // const con = require('../../database/createCollection');

    // //SQL
    // const sql = `SELECT * FROM users WHERE users.email = "${req.body.email}"`;

    // //データベースに対してクエリを実行
    // con.query(sql, req.body, (err, user) => {
    //     if (err) {
    //         return res.status(400).send({ error: err.message });
    //     }
    //     console.log(user);
    //     if (!user) {
    //         return res.send({ message: 'メールアドレスかパスワードが間違っています' });
    //     }

    //     return res.send({ message: 'ログイン成功', headers: req.headers });
    // });
});

module.exports = router;
