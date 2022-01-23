const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://woojin:asdf1234@socialsoseol.cpmkp.mongodb.net/prac?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useFindAndModify: false
});

var usersRouter = require('./routes/users');


app.use('./users', usersRouter);
const db = mongoose.connection;

db.on('error', console.error.bind(console,  'connection error:'));
db.once('open', function () {
    console.log('DB connected!!!');
});