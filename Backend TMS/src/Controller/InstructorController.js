const instructor = require("../Model/InstructorModel");

exports.getAllInstructor = async (req, res) => {
    try {
        const allInstructor = await instructor.find();
        res.status(200).send(allInstructor);
    } catch (error) {
        res.status(400).json({
            message: "no data found",
            error
        });
    }
};
exports.postInstructor = async (req, res) => {
    try {
        const Instructor = new instructor({
            name: req.body.name,
            qualification: req.body.qualification,
            course: req.body.course
        });
        await Instructor.save();
        res.status(200).json({
            message: "Instructor Added Successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: "Course Not Generated"
        });
    }
};

exports.updateInstructor = async (req, res) => {
    try {
        const { name, qualification, course} = req.body;
        const updatingInstructor = await instructor.findOne({
            _id: req.params.id
        });
        if (name) {
            updatingInstructor.name = name;
        }
        if (qualification) {
            updatingInstructor.qualification = qualification;
        }
        if (course) {
            updatingInstructor.course = course;
        }

        await updatingInstructor.save();
        res.status(200).json({
            message: "Instructor Info Update Successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: "we cannot find data against this Instructor ID"
        });
    }
};

exports.deleteInstructor = async (req, res) => {
    try {
        const deleteInstructor = await instructor.deleteOne({
            _id: req.params.id
        });
        await deleteInstructor.delete();
        console.log(deleteInstructor)
        res.status(200).json({
            message: "Instructor info Deleted"
        });
    } catch (error) {
        res.status(400).json({
            message: "we cannot find data against this Instructor ID"
        });
    }
};
