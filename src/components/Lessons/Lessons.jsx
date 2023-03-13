export const Lessons = ({ lessons }) => {
  return (
    <>
      <h2>Lessons</h2>
      <ul>
        {lessons?.map(lesson => (
          <li key={lesson.id}>
            <p>{lesson.title}</p>
            <video
              src={lessons && lessons[0].link}
              autoPlay
              controls
              crossOrigin="true"
            ></video>
            <p>
              Status <span>{lesson.status}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
