import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

import ProductItem from "../ProductItem";
import { QUERY_PRODUCTS } from "../../utils/queries";
import spinner from "../../assets/spinner.gif";

import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";

import { idbPromise } from "../../utils/helpers";

function ProductList() {
  const [state, dispatch] = useStoreContext();
  const { currentCategory } = state;
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    // when there is data to be stored
    if (data) {
      console.log("I am data", data);
      // store in the global state object
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      // and store it in IndexedDB
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      // if loading is undefined, the user is offline - get data from the `products` store in IndexedDB
      idbPromise("products", "get").then((products) => {
        // use the IndexedDB data to set the global state for offline browsing
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }
    console.log("I am currentCategory", currentCategory);
    console.log("I am products", state.products);
    console.log(
      "I am StackOverflow",
      state.products.filter(({ categories }) =>
        categories.some(({ _id }) => _id === currentCategory._id)
      )
    );

    // return state.products.filter(
    //   (product) => product.category._id === currentCategory._id
    // );
    return state.products.filter(({ categories }) =>
      categories.some(({ _id }) => _id === currentCategory._id)
    );
  }

  return (
    <div className="my-2">
      <h2 className="category-description">
        {!currentCategory ? (
          <>
            <span className="orange ">Everything</span> <span>is</span>
          </>
        ) : (
          <span className="orange ">{currentCategory.title}</span>
        )}{" "}
        {currentCategory.helpingVerb} Better on VHS{" "}
      </h2>

      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              // quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
