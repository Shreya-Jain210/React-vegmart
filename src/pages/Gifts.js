import React from 'react';
import Voucher from "../assests/img.jpg";
import "../styles/Gifts.css";

function Gifts() {
  return (
    <div className="gifts">
        <div className="giftsTop" style={{ backgroundImage: `url(${Voucher})` }}></div>
        <div className="giftsBottom">
            <h1>Gifts and Vouchers</h1>
            <p className="giftsp">50% off on your first order Cashback of upto INR 200 upon the delivery of your first Order</p>
            <p className="giftsp">Invite your friends and get a voucher for 5% off on your next bill </p>
            <p className="giftsp">Follow us on Instagram and share us with your Followers</p>
            <p className="giftsp">Use Credit and Debit cards for payment and get 10% off on your bill </p>
            <p className="giftsp">For orders above INR 1000 get a free voucher of INR 100 on your next order </p>
        </div>  
    </div>
  );
}

export default Gifts;
