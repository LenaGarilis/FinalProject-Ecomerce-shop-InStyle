import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./features/productList/productListSlice";
import productDetailsReducer from "./features/productDetails/productDetailsSlice";
import cartReducer from "./features/cart/cartSlice";
import UserLoginSlice from "./features/user/UserLoginSlice";
import UserRegisterSlice from "./features/user/UserRegisterSlice";
import UserProfileSlice from "./features/user/UserDetailSlice";
import UpdateUserProfileSlice from "./features/user/UpdateUserDetails";
import UserDeleteSlice from "./features/user/UserDeleteSlice";
import UserUpdateSlice from "./features/user/UserUpdateSlice";
import shippingSlice from "./features/shippingReducer";
import paymentSlice from "./features/paymentReducer";
import orderCreateSlice from "./features/order/orderReducer";
import OrderDetailSlice from "./features/order/orderDetailReducer";

export const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: UserLoginSlice,
    userRegister: UserRegisterSlice,
    userProfile: UserProfileSlice,
    updateUserProfile: UpdateUserProfileSlice,
    userdelete: UserDeleteSlice,
    userUpdate: UserUpdateSlice,
    shipping: shippingSlice,
    payment: paymentSlice,
    createdOrder: orderCreateSlice,
    viewOrderDetail: OrderDetailSlice,
  },
});
