import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Button, Popconfirm } from "antd";
import { AuthContext } from "../contex/AuthContex";
import { useContext } from "react";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header>
      <div className="max-w-6xl mx-auto p-2">
        <div className="grid grid-cols-3 gap-8 items-center">
          <div>
            <img src="/logo.svg" alt="NhShop" />
          </div>
          <nav>
            <ul className="flex justify-center space-x-5 ">
              <li>
                <Link to="/" className="hover:text-red-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-red-500">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-500">
                  Contact
                </Link>
              </li>

              <li className="flex"></li>
            </ul>
          </nav>
          <div className="flex justify-end space-x-4">
            {user && (
              <div className="flex space-x-1 items-center">
                Hello,{" "}
                <span className="font-bold text-orange-500 ml-1">
                  {user.username}!
                </span>
                <Popconfirm
                  title="Logout?"
                  description="Bạn có chắc muốn logout không?"
                  onConfirm={logout}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button danger>Logout</Button>
                </Popconfirm>
              </div>
            )}
            <div className="flex justify-end space-x-4 mt-2">
              <Link to="/login">
                <AiOutlineUser />
              </Link>
              <Link to="/search">
                <AiOutlineSearch />
              </Link>
              <Link to="/wishlist">
                <AiOutlineHeart />
              </Link>
              <Link to="/wishlist">
                <AiOutlineShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
