import { createElement } from "react";
import { RouteObject } from "react-router";
import ModList from "../views/ModList/ModList";
import Settings from "../views/Settings";
import Dashboard from "../views/Dashboard/Dashboard";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: createElement(Dashboard)
    },
    {
        path: '/mods',
        element: createElement(ModList)
    },
    {
        path: '/settings',
        element: createElement(Settings)
    }
];