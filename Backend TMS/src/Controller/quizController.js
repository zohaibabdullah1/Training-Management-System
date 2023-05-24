const quiz = require("../Model/QuizModel");


exports.Quiz = async (req, res) => {
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