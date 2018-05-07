const express = require('express')
const router = express.Router()

module.exports = io => {
  io.on('connection', () => {
    console.log('Client connected')
  })

  router.get('/post', (req, res) => {
    try {
      io.sockets.emit('sms', req.query)
      res.json({
          status: 200
      })
    } catch (e) {
      res.json({
          status: 500,
          message: e
      })
    }
  })

  return router
}
