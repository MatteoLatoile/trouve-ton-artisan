import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-m my-4 mx-4 px-[120px] py-4 text-blue-600">
      <ul className="flex items-center space-x-2">
        <li>
          <Link
            to="/"
            className="hover:underline hover:text-blue-800 font-medium"
          >
            Home
          </Link>
        </li>

        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const title = decodeURIComponent(
            value.charAt(0).toUpperCase() + value.slice(1)
          );

          return (
            <Fragment key={to}>
              <li className="text-gray-400">›</li>
              <li>
                {last ? (
                  <span className="text-gray-600">{title}</span>
                ) : (
                  <Link to={to} className="hover:underline hover:text-blue-800">
                    {title}
                  </Link>
                )}
              </li>
            </Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
