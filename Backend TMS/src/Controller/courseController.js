const course = require("../Model/CoursesModel");

exports.getAllCourse = async (req, res) => {
    try {
        const allCourse = await course.find();
        res.status(200).send(allCourse);
    } catch (error) {
        res.status(400).json({
            message: "no data found",
            error
        });
    }
};
exports.postCourse = async (req, res) => {
    try {
        const Course = new course({
            title: req.body.title,
            description: req.body.description,
            instructor: req.body.instructor
        });
        await Course.save();
        res.status(200).json({
            message: "Course Created Successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Course Not Generated"
        });
    }
};

exports.updateCourse = async (req, res) => {
    try {
        const { title, description, instructor} = req.body;
        const updatingCourse = await course.findOne({
            _id: req.params.id
        });
        if (title) {
            updatingCourse.title = title;
        }
        if (description) {
            updatingCourse.description = description;
        }
        if (instructor) {
            updatingCourse.instructor = instructor;
        }

        await updatingCourse.save();
        console.log(updatingCourse)
        res.status(200).json({
            message: "Course update"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "we cannot find data against this Course ID"
        });
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        const deleteCourse = await course.deleteOne({
            _id: req.params.id
        });
        await deleteCourse.delete();
        res.status(200).json({
            message: "Course Delete"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "we cannot find data against this Course ID"
        });
    }
};
