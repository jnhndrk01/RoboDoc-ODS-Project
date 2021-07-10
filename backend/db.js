var mongoose = require('mongoose');
var uri = ''
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true ,useFindAndModify:false });