import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Courses = lazy(() => import('../pages/Courses/Courses'));
const OneCourse = lazy(() => import('../pages/OneCourse/OneCourse'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Courses />}></Route>
          <Route path="/:courseId" element={<OneCourse />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
