import React, { Component } from "react";
import '../styles/App.css';
import Header from "./Header";
import List from "./List";
import InputForm from "./InputForm";

class App extends Component {
    state = {
        list: [],
        pendingItem: ""
    };

    lastItemId = 0;

    newItemId = () => {
        const id = this.lastItemId;
        this.lastItemId += 1;
        return id;
    };

    // Flips isEditing bool
    toggleIsEditingAt = (id,v) => {
        console.log("isEditingAt", id);
        console.log("isEditingAt", v);
        this.setState({
            list: this.state.list.map(item => {
                console.log(item)
                if (id === item.id) {
                    return {
                        ...item,
                        isEditing: !item["isEditing"]
                    };
                }
                return item;
            })
        });
    };

    removeItemAt = id => {
        this.setState({ list: this.state.list.filter(item => id !== item.id) });
    };

    handleItemInput = e => this.setState({ pendingItem: e.target.value });

    // handle editing items
    setNameAt = (name, id) => {
        this.setState({
            list: this.state.list.map(item => {
                if (id === item.id) {
                    return {
                        ...item,
                        name
                    };
                }
                return item;
            })
        });
    };

    newItemSubmitHandler = e => {
        e.preventDefault();
        const id = this.newItemId();
        console.log(this.state.pendingItem)
        if(!this.state.pendingItem){
            alert("填写事项不能为空")
            return false;
        }
        this.setState({
            list: [
                {
                    name: this.state.pendingItem,
                    isEditing: false,
                    id
                },
                ...this.state.list
            ],
            pendingItem: ""
        });
    };

    render() {
        return (
            <div className="flex mt-40 pb-12 flex-col max-w-lg justify-center p-4 w-full">
                <Header />
                <InputForm
                    newItemSubmitHandler={this.newItemSubmitHandler}
                    handleItemInput={this.handleItemInput}
                    pendingItem={this.state.pendingItem}
                />

                <List
                    list={this.state.list}
                    removeItemAt={this.removeItemAt}
                    toggleIsEditingAt={this.toggleIsEditingAt}
                    setNameAt={this.setNameAt}
                />
            </div>
        );
    }
}

export default App;
