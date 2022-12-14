import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFound from "./pages/NotFound";

const UseState = lazy(() => import("./pages/UseState"));
const UseEffect = lazy(() => import("./pages/UseEffect"));

export default function App(): JSX.Element {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={<UseState />}
          />
          <Route
            path="/usestate"
            element={<UseState />}
          />
          <Route
            path="/useeffect"
            element={<UseEffect />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}
