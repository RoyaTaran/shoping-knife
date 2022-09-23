import React, { useContext } from "react";
import DashboardEmptyRoutes from "../../../Components/DashboardAdmin/DashboardEmptyRoutes/DashboardEmptyRoutes";
import DataGridTabeleProducts from "../../../Components/DashboardAdmin/DataGridTabeleProducts/DataGridTabeleProducts";
import InsertNewProductForm from "../../../Components/DashboardAdmin/InsertNewProductForm/InsertNewProductForm";
import { AllProductContext } from "../../../Contexts/ProductContext";

import "./DashboardProduct.css";
export default function DashboardProduct() {
  const DataProductContext = useContext(AllProductContext);
  return (
    <div>
      <DashboardEmptyRoutes title="لیست محصولات خالی می باشد 😔" />
      <div className="Insert-New-Product">
        <h2>
          اضافه کردن محصول جدید
          {!DataProductContext.showFormInsertProduct && (
            <span
              onClick={() => DataProductContext.setShowFormInsertProduct(true)}
            >
              (برای افزودن کلیک کنید)
            </span>
          )}
        </h2>
        <InsertNewProductForm />
      </div>
      <DataGridTabeleProducts />
    </div>
  );
}
