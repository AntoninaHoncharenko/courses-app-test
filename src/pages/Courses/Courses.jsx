import { useState, useEffect } from 'react';
import { getAllCourses } from 'api';

import { CourseList } from 'components/CourseList/CourseList';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    async function getCourses() {
      try {
        setIsloading(true);
        const data = await getAllCourses();
        setCourses(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsloading(false);
      }
    }

    getCourses();
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      {isLoading && <p>Loading</p>}
      <CourseList courses={courses} />
    </div>
  );
};

export default Courses;
