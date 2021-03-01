const router = require('express').Router()

router.route("/").get((req, res, err) => {
    if(err) {
        console.log(err)
    }

    res.render('/var/app/current/views/index.html')
})

module.exports = router