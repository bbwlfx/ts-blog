import React, { Component } from "react";
import { connect } from "react-redux";
import { todolistProps, todolistState } from "typings";
import utils from "lib/utils";
import "./todolist.scss";

class Todolist extends Component<todolistProps, todolistState> {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    utils.bindMethods(
      ["addItem", "changeInput", "deleteItem", "asyncDelete"],
      this
    );
  }

  addItem() {
    const { text } = this.state;
    this.props.addItem(text);
    this.setState({
      text: ""
    });
  }

  deleteItem(id: string) {
    this.props.deleteItem(id);
  }

  asyncDelete(id: string) {
    this.props.asyncDelete(id);
  }
  changeInput(e) {
    this.setState({
      text: e.target.value
    });
  }
  render() {
    const { list = [] } = this.props;
    const { text } = this.state;
    return (
      <>
        <input className="input" value={text} onChange={this.changeInput} />
        <button onClick={this.addItem}>Add</button>
        <ol className="todo-list">
          {list.map(item => {
            return (
              <li className="todo-item" key={item.id}>
                <span>{item.text}</span>
                <button onClick={() => this.deleteItem(item.id)}>delete</button>
                <button onClick={() => this.asyncDelete(item.id)}>
                  async delete
                </button>
              </li>
            );
          })}
        </ol>
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    ...store.todolist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...dispatch.todolist
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todolist);
