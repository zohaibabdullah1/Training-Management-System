const instructor = require("../Model/InstructorModel");
const path = require("path");
const multer = require("multer");

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
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./src/images/instructor");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

exports.upload = multer({ storage: storage });

exports.postInstructor = async (req, res) => {
    try {
        const url = path.join(
            "D:/MERN/React/Training-Management-System/Backend TMS/src/images/instructor/" + req.file.filename
        );
        console.log(url)
        const Instructor = new instructor({
            name: req.body.name,
            qualification: req.body.qualification,
            course: req.body.course,
            image:url
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
