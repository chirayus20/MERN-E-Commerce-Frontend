import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from "./features/cart/Cart";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetailPage from "./pages/ProductDetailPage";
import Producted from "./features/auth/components/Protected";
import { useEffect } from "react";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "./features/auth/authSlice";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Producted>
        <Home></Home>
      </Producted>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },

  {
    path: "/cart",
    element: (
      <Producted>
        <CartPage></CartPage>
      </Producted>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Producted>
        <Checkout></Checkout>
      </Producted>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Producted>
        <ProductDetailPage></ProductDetailPage>
      </Producted>
    ),
  },  
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
    }
  }, [dispatch,user]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
