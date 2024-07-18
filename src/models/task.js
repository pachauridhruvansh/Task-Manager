import mongoose from "mongoose";

const taskschema = new mongoose.Schema({

	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	addeddate: {
		type: Date,
		required: true,
		default: Date.now(),
	},
	status: {
		type: String,
		enum: ["todo", "inprogress", "completed"],
		default: "todo",
	},
	userid: {
		type: mongoose.ObjectId,
		required: true,
	},

})

export const Task = mongoose.models.tasks || mongoose.model("tasks", taskschema);