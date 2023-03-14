import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneCourse } from 'api';
import { Lessons } from 'components/Lessons/Lessons';

const OneCourse = () => {
  const [course, setCourse] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const { courseId } = useParams();

  useEffect(() => {
    async function getCourse() {
      try {
        setIsloading(true);
        const data = await getOneCourse(courseId);
        setCourse(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsloading(false);
      }
    }

    getCourse();
  }, [courseId]);

  const { title, lessons, description } = course;

  return (
    <div>
      {isLoading && <p>Loading</p>}
      <p>{title}</p>
      {/* <video
        src={lessons && lessons[0].link}
        autoPlay
        controls
        crossOrigin="true"
      ></video> */}

      <p>{description}</p>

      <Lessons lessons={lessons} />
    </div>
  );
};

export default OneCourse;
