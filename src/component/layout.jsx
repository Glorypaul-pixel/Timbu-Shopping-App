import PropTypes from 'prop-types';
import Advert from "./advert/advert"; // Adjust the path as necessary

const Layout = ({ showAdvert = true, children }) => {
  return (
    <div>
      {showAdvert && <Advert />}
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  showAdvert: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
