import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person2Outlined";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StoreIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import "./navbar.scss";
import AddCart from "../AddCart/AddCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  navbarLogo,
  navbarCategories,
  bottomNavbarItems,
} from "../../constants";

const Navbar = () => {
  const [openAddCart, setOpenAddCart] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <nav className="navbar">
      <div className="centerNavbar">
        <div className="left">
          <Link to="/">
            <img className="topImg" src={navbarLogo} alt="" />
          </Link>
        </div>
        <div className="center">
          <div className="topItem">
            <input
              type="text"
              placeholder="Aradığınız ürün, kategori veya markayı yazınız"
            />
            <SearchIcon className="searchIcon" />
          </div>
        </div>
        <div className="right">
          <div className="icons">
            <PersonIcon /> <span>Giriş Yap</span>
            <FavoriteIcon className="myicon" /> <span>Favorilerim</span>
            <div
              className="storeIcon"
              onClick={() => setOpenAddCart(!openAddCart)}>
              <StoreIcon />
              <span>Sepetim</span>
              <div className="count">{products.length}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomNavbar">
        <ul>
          {navbarCategories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
          {bottomNavbarItems.map((item, index) => (
            <li key={index}>
              {item.label}
              {item.isNew && <span>Yeni</span>}
            </li>
          ))}
        </ul>
        <hr />
      </div>
      {openAddCart && <AddCart />}
    </nav>
  );
};

export default Navbar;
