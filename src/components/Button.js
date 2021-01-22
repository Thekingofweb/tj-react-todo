import React from "react";

const Button = props => {
    if (props.isEditing) {
        return (
            <button className="action" onClick={props.toggleIsEditingAt}>
                保存
            </button>
        );
    }
    return (
        <button className="action" onClick={props.handleRemove}>
            －
        </button>
    );
};

export default Button;
