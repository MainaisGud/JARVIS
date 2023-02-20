const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//connection to mongodb

mongoose.connect('mongodb://127.0.0.1:27017/jarvis', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const Data = require('./jarvisSchema')
const { waitFor } = require('@testing-library/react')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))


router.route('/search').post((req, res) => {
    console.log(req.body)
    Data.findOne({customer_id: req.body.name_id}) 
    .then(data => {
        if(data){
            res.status(200).send(data)
        }else{
            res.status(400).send('Data not found')
        }
    })
    .catch(err => {
        res.status(400).send(err)
    })
})

router.route('/add').post((req, res) => {
    console.log(req.body)
    const data = new Data(req.body)
    data.save()
    .then(data => {
        console.log (data)
        res.status(200).send(data)
    })
    .catch(err => {
        console.log (err)
        res.status(400).send(err)
    })
})

const getStats = async () => {
    const stats = []
    await Data.countDocuments({}, (err, count) => {
        stats.push(count)
        console.log(stats[0])
    }).clone()
    await Data.countDocuments({churn_value: 1}, (err, count) => {
        stats.push(count)
        console.log(stats[1])
    }).clone()
    await Data.countDocuments({churn_value: 0}, (err, count) => {
        stats.push(count)
        console.log(stats[2])
    }).clone()
    await Data.countDocuments({gender: "Male"}, (err, count) => {
        stats.push(count)
        console.log(stats[3])
    }).clone()
    await Data.countDocuments({gender: "Female"}, (err, count) => {
        stats.push(count)
        console.log(stats[4])
    }).clone()


    //make sure all promises are resolved
    await Promise.all([stats[0], stats[1], stats[2], stats[3], stats[4]])

    const returnStats = {
        total: stats[0],
        churned: stats[1],
        retained: stats[2],
        male: stats[3],
        female: stats[4]
    }
    return returnStats
}

router.route('/stats').post((req, res) => {
    getStats().then(stats => {
        console. log(stats)
        res.status(200).send(stats)
    })
    .catch(err => {
        res.status (400).send(err)
        console.log (err)
    })
})

module.exports = router
