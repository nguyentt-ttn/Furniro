import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import LayoutAdmin from "./layouts/LayoutAdmin";
import DashBoard from "./pages/admin/DashBoard";
import ProductAdminPage from "./pages/admin/ProductAdminPage";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/admin/ProductEdit";
import LayoutClient from "./layouts/LayoutClient";
import api from "./axios";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserAdminPage from "./pages/admin/UserAdminPage";

function App() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await api.get("products");
      return data;
    },
  });
  if (isLoading)
    return (
      /* From Uiverse.io by Nawsome */
      <div className="cangiua">
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          className="wheel-and-hamster "
        >
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>
      </div>
    );
  if (isError) return <p>{error.message}</p>;
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutClient />}>
          <Route index element={<ProductList products={data} />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<DashBoard />} />
          <Route path="products" element={<ProductAdminPage />} />
          <Route path="products/add" element={<ProductAdd />} />
          <Route path="products/:id" element={<ProductEdit products={data} />} />
          <Route path="users" element={<UserAdminPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
