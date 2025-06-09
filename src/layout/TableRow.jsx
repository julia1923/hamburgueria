import React from "react";
import { data } from "react-router-dom";

const TableRow = ({item, handleRemoveItem, handleUpdateItem}) => {
    return (
        <tr>
            <td>
                <div className="product">
                    <img src={item.image} alt={item.name} style={{ width: '130px', height: '100px', objectFit: 'cover' }} />
                    <div className="info">
                        <div className="name">{item.name}</div>
                        <div className="description">descrição</div>
                    </div>
                </div>
            </td>
            <td>R$ {item.price}</td>
            <td>
                <div className="qty">
                    <button onClick={() => {handleUpdateItem(item, 'decrease');}}>
                        <i className="bx bx-minus"></i>
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => {handleUpdateItem(item, 'increase');}}>
                        <i className="bx bx-plus"></i>
                    </button>
                </div>
            </td>
            <td>R$ {item.price * item.quantity}</td>
            <td>
                <button className="remove" onClick={() => {handleRemoveItem(item);}}><i className="bxr bx-trash-x"></i></button>
            </td>
        </tr>
    );
};

export default TableRow;