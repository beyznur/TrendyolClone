import React from "react";
import "./addCart.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const AddCart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const stripePublicKey =
    "pk_test_51O7hL8HFsfgZuVOLDXRt67GYpCFsKJJFESDH5XyeS0XGVcVxPC63MQyGfch7ngZaVB1UjWz18tMgCPUqDU8ATnXR00HYgmT2d0";
  const stripePromise = loadStripe(stripePublicKey);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", { products });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="addCart">
      <h5>Sepetim</h5>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={`${process.env.REACT_APP_UPLOAD_URL}${item.img}`} alt="" />
          <div className="details">
            <span className="title">{item.title}</span>
            <span className="piece">Adet: {item.quantity}</span>
            <span className="price">{`${item.price} TL`}</span>
          </div>
          <DeleteIcon
            className="icon"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <hr />

      <button onClick={handlePayment}>Siparişi Tamamla</button>
      <button id="reset" onClick={() => dispatch(resetCart())}>
        Sepeti Sıfırla
      </button>
    </div>
  );
};

export default AddCart;
