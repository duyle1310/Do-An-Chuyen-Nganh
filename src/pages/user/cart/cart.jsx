import React from "react";
import BreadCrumb from "component/BreadCrumb";
import { Link } from "react-router-dom";
import { BsArrowRepeat } from "react-icons/bs";
import './style.scss'
const Cart = () =>{
    return (
        <>
            <BreadCrumb title="Shopping Cart" />
            <section class="shopping-cart spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="shopping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="product__cart__item">
                                                <div class="product__cart__item__pic">
                                                    <img className="imgCart" src={require('../images/products/AoDau_San_Khach_DTuyen_Argentina.jpg')} alt=""/>
                                                </div>
                                                <div class="product__cart__item__text">
                                                    <h6>T-shirt Contrast Pocket</h6>
                                                    <h5>$98.49</h5>
                                                </div>
                                            </td>
                                            <td class="quantity__item">
                                                <div class="quantity">
                                                    <div class="pro-qty-2">
                                                        <input type="text" value="1"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="cart__price">$ 30.00</td>
                                            <td class="cart__close"><i class="fa fa-close"></i></td>
                                        </tr>

                                        <tr>
                                            <td class="product__cart__item">
                                                <div class="product__cart__item__pic">
                                                    <img className="imgCart" src={require('../images/products/Giay_Samba_OG_WonderWhite.jpg')} alt=""/>
                                                </div>
                                                <div class="product__cart__item__text">
                                                    <h6>T-shirt Contrast Pocket</h6>
                                                    <h5>$98.49</h5>
                                                </div>
                                            </td>
                                            <td class="quantity__item">
                                                <div class="quantity">
                                                    <div class="pro-qty-2">
                                                        <input type="text" value="1"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="cart__price">$ 30.00</td>
                                            <td class="cart__close"><i class="fa fa-close"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="continue__btn">
                                        <Link to="/shop">Continue Shopping</Link>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="continue__btn update__btn">
                                        <Link to="/"><BsArrowRepeat/> Update cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="cart__discount">
                                <h6>Discount codes</h6>
                                <form action="#">
                                    <input type="text" placeholder="Coupon code"/>
                                    <button type="submit">Apply</button>
                                </form>
                            </div>
                            <div class="cart__total">
                                <h6>Cart total</h6>
                                <ul>
                                    <li>Subtotal <span>$ 169.50</span></li>
                                    <li>Total <span>$ 169.50</span></li>
                                </ul>
                                <a href="#" class="primary-btn">Proceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;