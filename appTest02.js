const express = require('express')
const os = require('os')
const app = express()
const port = 5600

app.set('view engine', 'ejs')

/* 
app.use('css', express.static(__dirname + 'public/css'))
app.use('js', express.static(__dirname + 'public/js'))
app.use('img', express.static(__dirname + 'public/img'))

*/

app.get('', (req, res) => {
    var dateTime = new Date()
    var osRelease = os.release()
    var osTotalMem = os.totalmem()
    var osArch = os.arch()
    var osPlatform = os.platform()
    res.render('index', {
        dateTime : dateTime,
        osPlatform : osPlatform,
        osRelease : osRelease,
        osTotalMem : osTotalMem,
        osArch : osArch
    })

})

app.listen(port, () => console.info(`Listening on port ${port}`))
