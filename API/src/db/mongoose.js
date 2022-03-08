const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect(process.env.MONGODB_URL, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
});

