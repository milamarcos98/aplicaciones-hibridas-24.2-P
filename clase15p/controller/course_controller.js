import Course from '../models/course_model.js'
import { courseValidation } from '../validation/validation.js';


export const createCourse = async (req, res) => {
    // const {error} = courseValidation(req.body);
    // if(error) return res.status(400).json({error: error.details[0].message})
    try{
        const course = new Course({...req.body});
        const savedCourse = await course.save();
        res.json(savedCourse)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

export const getAllCourses = async (req, res) => {
    try{
        const courses = await Course.find().populate('carrera');
        res.json(courses)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

export const getCoursesById = async (req, res) => {
    try{
        const course = await Course.findById(req.params.id);
        if(!course) return res.status(404).json({error: "curso no encontrado"})
        res.json(course)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

export const updateCourse = async (req, res) => {
    try{
        const updated = await Course.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updated)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

export const deleteCourse = async (req, res) => {
    try{
        const deleted = await Course.findByIdAndDelete(req.params.id);
        res.json(deleted)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}