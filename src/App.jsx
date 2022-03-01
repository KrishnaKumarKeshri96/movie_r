import "./App.scss";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { MovieDetail } from "./components/MovieDetail/MovieDetail";
import { Footer } from "./components/Footer/Footer";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

console.log("Route:", Route);
console.log("Routes:", Routes);

export const App = () => {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Header></Header>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/movie/:imdbId" element={<MovieDetail />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};
