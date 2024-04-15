import { Link } from "react-router-dom";
import { Card } from "flowbite-react";

const Home = () => {
  return (
    <div className="bg-blue-100">
      <div className="text-center py-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-5xl font-bold tracking-normal font-oswald">// Gabriel Baraza</h1>
          <p className="text-xl mt-2 tracking-normal font-oswald">French Student in IT.</p> 
            
            <Link to="/portfolio">
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                See My Portfolio
              </button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="../images/pexels-pixabay-247791.jpg"
              alt="Gabriel Baraza"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>

      <section className="lg:py-13 lg:px-42 px-8 py-6 text-center md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72">
        
      </section>


      <section className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-12 pt-2 px-12 md:gap-6 lg-gap-12">
          <a href="https://gabrielbaraza.github.io/portfolio/project-hero/index-1.html" target="_blank" rel="noopener noreferrer">
            <Card
              imgAlt="Project 1"
              imgSrc="../images/project-hero.png"
              className="max-w-sm mx-auto"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Hero Block Gallery
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                A gallery of hero block elements with split-screen layouts and duotone images.
              </p>
            </Card>
          </a>
          <a href="https://gabrielbaraza.github.io/portfolio/fashion/index.html" target="_blank" rel="noopener noreferrer">
            <Card
              imgAlt="Project 2"
              imgSrc="../images/project-fashion.jpg"
              className="max-w-sm mx-auto"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Snazzy Fashion
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                A web page for a fashion retailer with a background video that plays in a continuous loop.
              </p>
            </Card>
          </a>
          <a href="https://gabrielbaraza.github.io/portfolio/smoothies/index.html" target="_blank" rel="noopener noreferrer">
            <Card
              imgAlt="Project 3"
              imgSrc="../images/project-smoothie.jpg"
              className="max-w-sm mx-auto"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Smooth Smoothies
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                A multi-column, flexbox-based page layout and hero image with a tinted overlay.
              </p>
            </Card>
          </a>
        </section>
    </div>
  );
};

export default Home;
