 let express=require('express')
 let states_api =require('./routes/states')
 let  path=require('path')


 let app=express()

 let  vueAppPath =path.join(__dirname,'client','dist')
 app.use(express.static(vueAppPath))// request to the app
 app.use(express.json())// enable parsing Json sent with request

 app.use('/api',states_api)

 app.use(function (req,res,next){
     res.status(404).send('Not found')// if the data is
 })

 app.use(function (err,req,res,next){
     console.log(err)
     res.status(500).send('server error')

 })
 let server =app.listen(process.env.PORT || 3000,function (){
     console.log('server running on port',server.address().port)
 })