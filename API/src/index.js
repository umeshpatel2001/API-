const express = require("express");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const Task = require("./models/task");
const User = require("./models/user");
require("./db/mongoose");

const app = express();
const port = process.env.PORT;
app.use(express.json());

// ---------------User----------------------//
app.use(userRouter);

// ---------------Tasks----------------------//
app.use(taskRouter);

app.listen(port, () => {
	console.log("connected...", port);
});

// const demo = async () => {
// 	// const task = await Task.findById('616126bfec0253d80584ef08')
// 	// await task.populate('owner').execPopulate()
// 	// console.log(task.owner)
// 	const user = await User.findById("6161268bd99d803c802b7e9d");
// 	await user.populate("tasks").execPopulate();
// 	console.log(user.tasks);
// };

// demo();
