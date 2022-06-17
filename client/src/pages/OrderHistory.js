import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_USER } from "../utils/queries";

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  console.log("I am {data}", { data });

  let user;
  // console.log("I am outside user", user);
  let username;
  // console.log("I am username", username);
  if (data) {
    // console.log("I am data.user.username", data.user.username);
    user = data.user;
    username = data.user.username;
    console.log("I am inside username", username);
    console.log("I am inside user", user);
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Products</Link>

        {user ? (
          <>
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p className="movie-title">{name}</p>
                      </Link>
                      <div>
                        <span className="movie-price">${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
