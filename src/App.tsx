import Layout from "#components/layout/Layout";
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router';
import { routes } from "./config/routes.config";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: routes
    }
]);

export default function App() {
    return <RouterProvider router={router} />;
}