import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

const FooterApp = () => {
  return (
    <Footer className="bg-blue-200 dark:bg-blue-800">
      <div className="w-full text-center py-4">
        <div className="justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
      </div>
    </Footer>
  );
};

export default FooterApp;
