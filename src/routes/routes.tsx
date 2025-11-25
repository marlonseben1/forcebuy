import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/app/mainLayout/mainLayout";
import { Despesas } from "../pages/despesas/despesas.tsx";
import Contas from "../pages/contas/contas";
import Categorias from "../pages/categorias/categorias.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "contas", element: <Contas /> },
      { path: "despesas", element: <Despesas /> },
      { path: "categorias", element: <Categorias /> },
    ],
  },
]);
