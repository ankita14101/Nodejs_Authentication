var mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://root:admin@cluster0.gybfg.mongodb.net/userDB?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
mongoose.Promise = global.Promise;
