import { CourseItem } from 'components/CourseItem/CourseItem';

export const CourseList = ({ courses }) => {
  return (
    <ul>
      {courses.map(course => (
        <CourseItem key={course.id} course={course} />
      ))}
    </ul>
  );
};
