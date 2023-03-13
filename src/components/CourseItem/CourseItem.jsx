import { NavLink } from 'react-router-dom';

export const CourseItem = ({ course }) => {
  const { id, title, previewImageLink, lessonsCount, meta, rating } = course;

  return (
    <li>
      <NavLink to={`/${id}`}>
        <img src={previewImageLink + '/cover.webp'} alt="courseImage" />
        <p>{title}</p>
      </NavLink>
      <p>
        Number of lessons: <span>{lessonsCount}</span>
      </p>
      <p>Skils: </p>
      <p>{meta.skills?.join(', ')}</p>
      <p>
        Rating: <span>{rating}</span>
      </p>
    </li>
  );
};
