import React from "react";

const InputForm = props => {
    return (
        <form 
            onSubmit={props.newItemSubmitHandler} 
            // onSubmit={(e) => {console.log(e)}} 
            className="todoInput w-full flex justify-between mb-12">
            <input
                className="input w-9/12 mr-2 p-4 pr-0 border rounded"
                type="text"
                onChange={props.handleItemInput}
                value={props.pendingItem}
                placeholder="填写事项"
            />
            <button type="submit" name="submit" value="submit" className="bg-green-300 text-base px-5 py-3.5 ">
                +
            </button>
        </form>
    );
};

export default InputForm;
