import React from "react";
import {AppContext} from "../context/AppContext";

const usePikachu = () => {

    const [state, setState] = React.useContext(AppContext);

    function toggleLeftMenu() {
        setState(prevState => {
            return {
                ...prevState,
                isLeftMenuVissible: !prevState.isLeftMenuVissible
            }
        })
    }


    function addProductList(product) {
        setState(prevState => {
            return {
                ...prevState,
                productList: [...prevState.productList, product]
            }
        })
    }

    return {
        toggleLeftMenu,

        isLeftMenuVissible: state.isLeftMenuVissible,

        productList: state.productList,

        addProductList,
    }
};

export default usePikachu;