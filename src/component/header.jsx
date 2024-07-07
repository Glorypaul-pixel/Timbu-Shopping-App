const header = () => {
  return (
    <div className="flex items-center">
      <div className="logo">
        <h1> AceHub</h1>
      </div>
      <nav>
        <ul className="flex">
          <li>Home</li>
          <li>Categories</li>
          <li>Shop</li>
          <li>Help</li>
        </ul>
      </nav>
      <div className="search">
        <img src="" alt="" />
        <input type="search" name="Search devices..." />
      </div>
      <div className="cart">
        <img src="" alt="" />
        <p>Cart</p>
        <img src="" alt="" />
        <p>Hi, Blessing</p>
      </div>
    </div>
  );
};

export default header;
