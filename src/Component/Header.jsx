// Header.js
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
import React from "react";

const Header = () => {
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      style: { color: "white" },
    },
    {
      label: "Products",
      icon: "pi pi-fw pi-th-large",
    },
    {
      label: "About",
      icon: "pi pi-fw pi-info-circle",
    },
    {
      label: "Contact",
      icon: "pi pi-fw pi-envelope",
    },
  ];
  const end = (
    <div>
      <div className="p-d-flex">
        <div className="p-mr-3 shop-name">Your Mobile Shop</div>
        <Button
          icon="pi pi-shopping-cart"
          className="p-button-rounded p-button-text"
        />
      </div>
      <div className="search-box">
        <InputText
          placeholder="Search for products and brands"
          type="text"
          className="w-full"
        />
      </div>
    </div>
  );

  return (
    <div>
      <div className="card">
        <Menubar
          model={items}
          className="bg-primary-600 text-white border-1 border-primary-600 border-noround"
          end={end}
        ></Menubar>
      </div>
    </div>
  );
};

export default Header;
