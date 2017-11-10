module.exports  = {
    port:process.env.PORT || 3000,
    db: process.env.MONGO || 'mongodb://localhost:27017/eventosIg',
    host: process.env.HOST || 'localhost' 
}