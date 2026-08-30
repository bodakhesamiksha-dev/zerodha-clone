

import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://zerodha-backend-g3ew.onrender.com/allOrders",
          {
            withCredentials: true,
          }
        );

        setOrders(response.data);
      } catch (error) {
        console.log("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-page">

      <div className="orders-header">
        <div>
          <h2>Orders</h2>
          <p>Your recent trades</p>
        </div>

        <div className="order-count">
          {orders.length} Orders
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="empty-orders">
          <div className="empty-icon">📊</div>

          <h3>No orders yet</h3>

          <p>
            You haven't placed any orders yet.
          </p>
        </div>
      ) : (
        <div className="orders-card">

          <div className="table-wrapper">
            <table className="orders-table">

              <thead>
                <tr>
                  <th>Stock</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order, index) => (
                  <tr key={order._id || index}>

                    <td>
                      <div className="stock-info">
                        <div className="stock-logo">
                          {order.name.charAt(0)}
                        </div>

                        <strong>{order.name}</strong>
                      </div>
                    </td>

                    <td>
                      {order.qty}
                    </td>

                    <td>
                      ₹{order.price}
                    </td>

                    <td>
                      <span
                        className={
                          order.mode === "BUY"
                            ? "buy-badge"
                            : "sell-badge"
                        }
                      >
                        {order.mode}
                      </span>
                    </td>

                    <td>
                      <span className="completed-badge">
                        ● Completed
                      </span>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      )}

    </div>
  );
};

export default Orders;