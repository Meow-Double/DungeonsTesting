import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DungeonPage, HomePage } from './pages';
import { ROUTES } from './ROUTES';
import { Layout } from './components';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path={ROUTES.DUNGEON} element={<Layout />}>
          <Route index element={<DungeonPage />} />
          <Route index path=":id" element={<DungeonPage />} />
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
};
