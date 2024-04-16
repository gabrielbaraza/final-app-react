import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="bg-blue-100">
      <h1 className="text-3xl font-bold text-center my-6">
        Portfolio Page
      </h1>
      <section className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="images/project-fashion.jpg"
              alt="Fashion web page project"
              className="rounded-md"
            />
            <h3 className="text-xl font-bold mt-2">Fashion Web Page</h3>
            <p className="text-gray-600">A modern fashion retail web experience.</p>
            <a href="https://gabrielbaraza.github.io/portfolio/fashion/index.html" target =   "_blank" className="text-blue-500 hover:text-blue-600">View project</a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="images/project-smoothie.jpg"
              alt="Smoothie web page project"
              className="rounded-md"
            />
            <h3 className="text-xl font-bold mt-2">Smoothie Web Page</h3>
            <p className="text-gray-600">Explore delicious smoothie recipes.</p>
            <a href="https://gabrielbaraza.github.io/portfolio/smoothies/index.html" target =   "_blank" className="text-blue-500 hover:text-blue-600">View project</a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="images/project-crypto-wallet.jpg"
              alt="Crypto wallet web page project"
              className="rounded-md"
            />
            <h3 className="text-xl font-bold mt-2">Crypto Wallet Web Page</h3>
            <p className="text-gray-600">Secure and innovative crypto wallet solution.</p>
            <a href="https://gabrielbaraza.github.io/portfolio/crypto-wallet/index.html" target =   "_blank" className="text-blue-500 hover:text-blue-600">View project</a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="images/project-hero.png"
              alt="Hero blocks web page project"
              className="rounded-md"
            />
            <h3 className="text-xl font-bold mt-2">Hero Blocks Web Page</h3>
            <p className="text-gray-600">Stunning hero block designs for any website.</p>
            <a href="https://gabrielbaraza.github.io/portfolio/project-hero/index-1.html" target =   "_blank" className="text-blue-500 hover:text-blue-600">View project</a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="images/project-multi-col.png"
              alt="Multi-column web page project"
              className="rounded-md"
            />
            <h3 className="text-xl font-bold mt-2">Multi-Column Layout</h3>
            <p className="text-gray-600">Effective multi-column layouts for content-rich sites.</p>
            <a href="https://gabrielbaraza.github.io/portfolio/project-multi-column/index.html" target =   "_blank" className="text-blue-500 hover:text-blue-600">View project</a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="images/store.png"
              alt="Amazon affiliate web page project"
              className="rounded-md"
            />
            <h3 className="text-xl font-bold mt-2">Amazon Affiliate Store</h3>
            <p className="text-gray-600">A curated selection of Amazon products in a custom store.</p>
            <a href="https://gabrielbaraza.github.io/store/index.html" target =   "_blank" className="text-blue-500 hover:text-blue-600">View project</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
