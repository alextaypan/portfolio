import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { addBackToTop } from 'vanilla-back-to-top';

import Container from './components/Container';
import Layout from './components/Layout';
import LoaderComponent from './components/LoaderComponent';

import { accentColor } from './assets/stylesVariables';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */),
);

const ProjectsView = lazy(() =>
  import('./views/ProjectsView' /* webpackChunkName: "projects-view" */),
);

const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "not-found-view" */),
);

function App() {
  useEffect(() => {
    addBackToTop({
      backgroundColor: accentColor,
    });
  }, []);

  return (
    <>
      <Suspense fallback={<LoaderComponent />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route path="projects" element={<ProjectsView />} />
            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
