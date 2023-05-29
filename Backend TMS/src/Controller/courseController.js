const course = require("../Model/CoursesModel");
const path = require("path");
const multer = require("multer");

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

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./src/images/courses");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

exports.upload = multer({ storage: storage });

exports.postCourse = async (req, res) => {
    try {
        const url = path.join(
            "D:/MERN/React/Training-Management-System/Backend TMS/src/images/courses/" + req.file.filename
        );
        const Course = new course({
            title: req.body.title,
            description: req.body.description,
            instructor: req.body.instructor,
            image:url,
        });
        await Course.save();
        res.status(200).json({
            message: "Course Created Successfully"
        });
    } catch (error) {
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
