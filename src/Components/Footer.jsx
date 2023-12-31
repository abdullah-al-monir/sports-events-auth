import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="flex justify-between border-t gap-5 border-blue-gray-50 bg-gray-300 py-6 text-center px-4 bottom-0">
      <div className="flex justify-center items-center gap-1 flex-wrap">
        &copy; 2023{" "}
        <span className="luna font-semibold text-lg uppercase">
          Sportacular360
        </span>{" "}
        |
        <h2>
          Website by{" "}
          <Link to="https://github.com/MrColonThree" className="text-blue-500">
            Abdullah Al Monir
          </Link>
        </h2>
      </div>

      <div>
        <ul className="flex flex-wrap justify-center items-center gap-y-2 gap-x-8 ">
          <li>
            <Link className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              Facebook
            </Link>
          </li>
          <li>
            <Link className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              Instagram
            </Link>
          </li>
          <li>
            <Link className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              Twitter
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
