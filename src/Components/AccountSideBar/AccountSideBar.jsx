import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../../Contexts/UsersContext";

import "./AccountSideBar.css";

export default function AccountSideBar() {
  const DataUsersContext = useContext(UsersContext);
  return (
    <div className="Container-AccountSideBar">
      <div className="Wrapper-AccountSideBar">
        <h1 className="Title-AccountSideBar">حساب کاربری من</h1>
        <div className="Hr-AccountSideBar"></div>
        <ul className="ListGroup-AccountSideBar">
          <Link
            to={"/my-account"}
            onClick={() => DataUsersContext.setShowAccountRoute(false)}
          >
            <li>پیشخوان</li>
          </Link>
          <Link
            to={"orders"}
            onClick={() => DataUsersContext.setShowAccountRoute(true)}
          >
            <li>سفارش ها</li>
          </Link>
          <Link
            to={"edit-address"}
            onClick={() => {
              DataUsersContext.setShowBillOrTransportationAddressRoute(false);
              DataUsersContext.setShowAccountRoute(true);
            }}
          >
            <li>آدرس ها</li>
          </Link>
          <Link
            to={"edit-account"}
            onClick={() => DataUsersContext.setShowAccountRoute(true)}
          >
            <li>جزئیات حساب</li>
          </Link>
          <Link
            to={"favorites"}
            onClick={() => DataUsersContext.setShowAccountRoute(true)}
          >
            <li>علاقه مندی ها</li>
          </Link>
          <Link
            to={"/my-account"}
            onClick={() => DataUsersContext.setIsUserInData(false)}
          >
            <li className="close-AccountSideBar">خروج</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
