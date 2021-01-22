import React from "react";
import ListItem from "./ListItem";

const List = props => {
    return (
        <ul className="mb-5">
            {props.list.map((item, index) => (
                <ListItem
                    key={index}
                    item={item.name}
                    isEditing={item.isEditing}
                    handleRemove={() => props.removeItemAt(item.id)}
                    toggleIsEditingAt={() => props.toggleIsEditingAt(item.id,item)}
                    setName={text => props.setNameAt(text, item.id)}
                />
            ))}
        </ul>
    );
};

export default List;
