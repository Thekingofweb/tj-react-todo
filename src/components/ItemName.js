import React from "react";

const ItemName = props => {
    if (props.isEditing) {
        return (
            <input
                className="input w-9/12 mr-2 p-4 pr-0 border rounded"
                type="text"
                value={props.children}
                onChange={props.handleNameEdits}
            />
        );
    }
    return <span onClick={props.toggleIsEditingAt}>{props.children}</span>;
};

export default ItemName;
