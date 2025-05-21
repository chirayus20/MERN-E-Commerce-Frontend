import { Link, Navigate, useParams } from "react-router-dom";
import { fetchItemsByUserIdAsync, resetCartAsync } from "../features/cart/cartSlice";
import { createOrderAsync, resetOrder } from '../features/order/orderSlice';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../features/auth/authSlice";

function OrderSuccessPage() {
    const params = useParams()
    const dispatch = useDispatch();
    const user = useSelector(selectLoggedInUser)

    //here we can do reset of this cart and order

    useEffect(()=>{
      //reset cart
      dispatch(resetCartAsync(user.id))
      //reset currentOrder
    dispatch(resetOrder())
    },[dispatch,user])


   

  return (
    <>
    {!params.id && <Navigate to="/" replace={true}></Navigate>}
    <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-base font-semibold text-indigo-600">
          Order Successfully placed
        </p>
        <h1 class="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Order Number #{params?.id}
        </h1>
        <p class="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          You can check your order in My Account &gt; My Orders
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <a href="#" class="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
    </>
    
  );
}


export default OrderSuccessPage;
