const quiz = require("../Model/QuizModel");

exports.getQuiz = async (req, res) => {
    try {
        const allQuiz = await quiz.find();
        res.send(allQuiz);
    } catch (error) {
        res.json({
            message: "no data found",
            error
        });
    }
};
exports.postQuiz = async (req, res) => {
    try {
        const Quiz = new quiz({
            question: req.body.question,
            answer: req.body.answer,
            opt1: req.body.opt1,
            opt2: req.body.opt2,
            opt3: req.body.opt3,
            opt4: req.body.opt4,
        });
        await Quiz.save();
        res.json({
            message: "Quiz Created Successfully"
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "Quiz Not Generated"
        });
    }
};

exports.updateQuiz = async (req, res) => {
    try {
        const { question, answer, opt1, opt2, opt3, opt4 } = req.body;
        const updatingQuiz = await quiz.findOne({
            _id: req.params.id
        });
        if (question) {
            updatingQuiz.question = question;
        }
        if (answer) {
            updatingQuiz.answer = answer;
        }
        if (opt1) {
            updatingQuiz.opt1 = opt1;
        }
        if (opt2) {
            updatingQuiz.upt2 = opt2;
        }
        if (opt3) {
            updatingQuiz.upt3 = opt3;
        }
        if (opt4) {
            updatingQuiz.upt4 = opt4;
        }

        await updatingQuiz.save();
        console.log(updatingQuiz)
        res.json({
            message: "Quiz Question update"
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "we cannot find data against this Question ID"
        });
    }
};

exports.deleteQuiz = async (req, res) => {
    try {
        const deleteQuiz = await quiz.deleteOne({
            _id: req.params.id
        });
        await deleteQuiz.delete();
        res.json({
            message: "Quiz Question Delete"
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "we cannot find data against this ID"
        });
    }
};
