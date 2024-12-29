import React from 'react'
import styled from 'styled-components'
import Tabs from './Tabs'
import { useCoursesContext } from '../context/coursesContext'

const CourseList = () => {

  const {courses} = useCoursesContext();

  return (
    <CourseListWrapper>
      <div className="container">
        <div className="courses-list-top">
          <h2>Uma ampla seleção de cursos</h2>
          <p>Escolha entre 204.000 cursos em vídeo online, com novas adições publicadas a cada mês.</p>
        </div>

        <Tabs courses={courses}/>
      </div>
    </CourseListWrapper>
  )
}

const CourseListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p{
    font-size: 1.8rem;
  }
`;

export default CourseList