import { Route } from "react-router";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import Hero from "./Hero";
import Parallex from "./Parallex";
import Pdf from "./Pdf";

function Layout() {
  return (
    <>
      <Header />
      <Route exact path="/">
        <Hero />
        <Gallery />
        <Parallex />
      </Route>
      <Route exact path="/pdf">
        <Pdf/>
      </Route>
      <Footer />
    </>
  );
}

export default Layout;
