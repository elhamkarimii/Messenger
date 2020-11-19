import React from "react";

const PRODUCTS = [
    { name: "item1", price: 1200 },
    { name: "item2", price: 1500 },
    { name: "item3", price: 2200 },
    { name: "item4", price: 1600 }
]
export default class AvailableProducts extends React.Component {
    render() {
        const { value } = this.props;
        const filteredProducts = PRODUCTS.filter(item => value >= item.price);
        const filterList = filteredProducts.map(item => <li key={item.name}>{item.name}</li>);
        return <ul>{filterList}</ul>
    }
}