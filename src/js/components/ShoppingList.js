import React, {Component} from "react";
import ReactDOM from "react-dom";

class ShoppingList extends Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Lista de compras para {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}