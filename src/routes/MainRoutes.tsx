// import {Route, Routes} from 'react-router-dom';

import { useRoutes } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { AboutItem } from "../pages/AboutItem";
import { NotFound } from "../pages/NotFound";
import { RequireAuth } from "../RequireAuth";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/sobre",
      element: (
        <RequireAuth>
          <About />
        </RequireAuth>
      ),
    },
    {
      path: "/sobreMOD/:slug",
      element: (
        <RequireAuth>
          <AboutItem />
        </RequireAuth>
      ),
    },
    { path: "*", element: <NotFound /> },
  ]);

  // return (
  //     <Routes>
  //         {/* Rotas estática */}
  //         <Route path="/" element={<Home />} />
  //         <Route
  //         path="/sobre"
  //         element={
  //         <RequireAuth>
  //             <About />
  //         </RequireAuth>}
  //         />

  //         {/* Rota dinâmica */}
  //         <Route path="/sobre/:slug" element={<AboutItem />} />

  //         {/* Rota 404 Not Found */}
  //         <Route path="*" element={<NotFound />} />
  //     </Routes>
  // )
};
