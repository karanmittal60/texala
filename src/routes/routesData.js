import {routeRules} from "./routeRules";
import ProductList from "../container/productList";
import AddProduct from "../container/AddProduct";

export const routesData = [
    {
        key: routeRules.addProduct,
        path: routeRules.addProduct,
        component: AddProduct,
        auth: true,
        exact: false
    },
    {
        key: routeRules.productList,
        path: routeRules.productList,
        component: ProductList,
        auth: true,
        exact: false
    }
];