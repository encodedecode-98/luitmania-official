import Test from "../Test";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
const Home = function(){
  return <div>
    <section id="homepage">
      <Navbar/>
      <Sidebar/>
    </section>
    <Test/>
    <Test/><Test/><Test/><Test/><Test/><Test/>
    <section>Hero</section>
    <section>Parallax</section>
    <section>Services</section>
    <section>Parallax</section>
    <section>Portfolio</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="contact">Contact</section>
  </div>
}

export default Home;