import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./product.scss";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const handleQuantityDecrease = () => {
    setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
  };

  const handleQuantityIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: data.id,
        title: data.attributes.title,
        desc: data.attributes.desc,
        price: data.attributes.price,
        img: data.attributes.img.data.attributes.url,
        quantity,
      })
    );
  };

  return (
    <div className="product">
      <div className="left">
        <div className="mainImg">
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes[selectedImg]?.data?.attributes?.url
            }
            alt=""
          />
        </div>
        <div className="images">
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.img?.data?.attributes?.url
            }
            alt=""
            onClick={() => setSelectedImg("img")}
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            onClick={() => setSelectedImg("img2")}
          />
        </div>
      </div>
      <div className="right">
        <span>{data?.attributes?.title}</span>
        <span className="price">{data?.attributes?.price} TL</span>
        <div className="quantity">
          <button onClick={handleQuantityDecrease}>-</button>
          {quantity}
          <button onClick={handleQuantityIncrease}>+</button>
        </div>

        <hr />
        <div className="cart">
          <button onClick={handleAddToCart}>Sepete Ekle</button>
          <FavoriteIcon className="icon" />
        </div>

        <div className="detail">
          <h3>Öne Çıkan Özellikler:</h3>
          <ul>
            <li className="listItem">
              Bu ürün Trendyol tarafından gönderilecektir.
            </li>
            <li className="listItem">
              Kampanya fiyatından satılmak üzere 100 adetten fazla stok
              sunulmuştur.
            </li>
            <li className="listItem">
              Ürünlerimiz TRENDYOL etiketi ile gönderilecektir.
            </li>
            <li className="listItem">
              Bu üründen en fazla 10 adet sipariş verilebilir. 10 adedin
              üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.
              Belirlenen bu limit kurumsal siparişlerde geçerli olmayıp,
              kurumsal siparişler için farklı limitler belirlenebilmektedir.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
