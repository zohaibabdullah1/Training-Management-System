const quiz = require("../Model/QuizModel");

exports.getQuiz = async (req, res) => {
    try {
        const allQuiz = await quiz.find();
        res.status(200).send(allQuiz);
    } catch (error) {
        res.status(400).json({
            message: "no data found",
            error
        });
    }
};
exports.postQuiz = async (req, res) => {
    try {
        const Quiz = new quiz({
            subject: req.body.subject,
            question: req.body.question,
            answer: req.body.answer,
            opt1: req.body.opt1,
            opt2: req.body.opt2,
            opt3: req.body.opt3,
            opt4: req.body.opt4
        });
        await Quiz.save();
        res.status(200).json({
            message: "Quiz Created Successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Quiz Not Generated"
        });
    }
};

exports.updateQuiz = async (req, res) => {
    try {
        const { subject, question, answer, opt1, opt2, opt3, opt4 } = req.body;
        const updatingQuiz = await quiz.findOne({
            _id: req.params.id
        });
        if (subject) {
            updatingQuiz.subject = subject;
        }
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
        res.status(200).json({
            message: "Quiz Question update"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
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
        res.status(200).json({
            message: "Quiz Question Delete"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "we cannot find data against this ID"
        });
    }
};
