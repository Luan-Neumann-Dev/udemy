import {useContext, useReducer, useEffect, createContext} from "react";
import { GET_CATEGORIES, GET_COURSES, GET_SINGLE_COURSE } from "../actions";
import reducer from "../reducers/coursesReducer";
import courses from "../utils/data";

const initialState = {
    courses: [],
    single_course: {},
    categories: [],
}

const CoursesContext = createContext()

export const CoursesProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchCourses = () => {
        dispatch({type: GET_COURSES, payload: courses})
    }

    const fetchSingleCourse = (id) => {
        const singleCourse = courses.find(course => course.id === id)        
        dispatch({type: GET_SINGLE_COURSE, payload: singleCourse})
    }

    const fetchCategories = () => {
        const categories = [...new Set(courses.map(item => item.category))];
        dispatch({type: GET_CATEGORIES, payload: categories});
    }

    useEffect(() => {
        fetchCourses();
        fetchCategories();
    }, [])

    return (
        <CoursesContext.Provider value = {{
            ...state,
            fetchSingleCourse
        }}>
            {children}
        </CoursesContext.Provider>
    )
}

export const useCoursesContext = () => {
    return useContext(CoursesContext);
}