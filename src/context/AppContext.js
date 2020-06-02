import React from 'react';

export const AppContext = React.createContext();

export const AppProvider = (props) => {
    const initialSate = {
        isLeftMenuVissible: true,

        token: "",

        productList: [{"enableProduct":true,"productName":"Hand warmer","modelNo":"123456","category":"category1","manufacturerDate":"2020-05-31T23:22:14.996Z","manufacturer":"manufacturer1","sku":"qwerty","attributeSet":"attributeSet3","productStartDate":"2020-06-20T23:22:25.055Z","productEndDate":"2020-07-28T23:22:28.378Z","description":"fb ddjgks","warrentyType":"2","productSpecification":[{"measurementValue":"123","type":"sqFeet","value":"456"}],"productCost":"45","spManufacturer":"45","spResidential":"Delhi","spCommercial":"Delhi","usageUnit":"usageUnit2","qtyOrdered":"456","quantityInStock":"758","reorderLevel":"hell","handler":"handler2","quantityInDemand":"500","id":"LHmfM_77E","images":[{"uid":"rc-upload-1591140086352-3","lastModified":1590091591683,"lastModifiedDate":"2020-05-21T20:06:31.683Z","name":"Shree Hanumanji Jhajar.pdf","size":53003,"type":"application/pdf","percent":100,"originFileObj":{"uid":"rc-upload-1591140086352-3"},"status":"done","response":{"name":"xxx.png","status":"done","url":"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png","thumbUrl":"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},"xhr":{}}]}],

    };

    const [state, setState] = React.useState(initialSate);

    return (
        <AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>
    )
};

