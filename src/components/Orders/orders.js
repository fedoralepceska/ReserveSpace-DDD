import React from "react";

const Orders = (props) =>{
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Ordered on</th>

                        </tr>
                        </thead>
                        <tbody>
                        {props.orders.map((term) => {
                            return (
                                <tr>
                                    <td>{term}</td>

                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Orders;