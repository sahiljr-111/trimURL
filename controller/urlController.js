const urlModel = require('../model/urls')
const shortID = require('shortid')

exports.createid = async (req, res) => {
  try {
    const originalURL = req.body.url
    if (!originalURL) {
      res.status(400).json({
        status: "url is requried!"
      })
    } else {
      const shortid = shortID()
      const data = await urlModel.create({
        urlID: shortid,
        originalURL: originalURL,
      })
      res.json({
        shortid
      })
    }
  } catch (error) {
    res.status(500).json({
      error: error.toString()
    })
  }
}

exports.findid = async (req, res) => {
  try {
    const cutID = req.params.cutedURL;
    const data = await urlModel.findOneAndUpdate({
      urlID: cutID
    }, {
      $push: {
        history: {
          timestemps: Date.now()
        }
      }
    })
    res.redirect(data.originalURL)
  } catch (error) {
    res.status(500).json({
      error: error.toString()
    })
  }
}

exports.statistics = async (req, res) => {
  try {
    const cutID = req.params.cutedURL;
    const data = await urlModel.findOne({ urlID: cutID })
    res.status(200).json({
      data,
      visited: data.history.length
    })
  } catch (error) {
    res.status(500).json({
      error: error.toString()
    })
  }
}