import express from "express"
import { createCourse, deleteCourse, getAllCourses, getCoursesById, updateCourse } from "../controller/course_controller.js"

const router = express.Router();

router.post('/', createCourse);
router.get('/', getAllCourses);
router.get('/:id', getCoursesById);
router.put('/', updateCourse);
router.delete('/', deleteCourse);

export default router;