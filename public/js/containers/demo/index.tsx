import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { DemoProps, DemoState } from "typings";

class Demo extends Component<DemoProps, DemoState> {
  static defaultProps = {
    count: 0,
    outstr: "Hello World",
    Add: () => {},
    Reverse: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      outstr: props.outstr
    };
  }

  render() {
    const { Add, Reverse, count, outstr } = this.props;
    return (
      <div>
        <Button type="primary" onClick={Reverse}>
          click me to Reverse words
        </Button>
        {outstr}
        <Button onClick={Add}>click me to add number</Button> now number is :{" "}
        {count}
      </div>
    );
  }
}

const mapStateToProps = (store: any) => ({ ...store.demo });
const mapDispatchToProps = (store: any) => ({
  Add: store.demo.add,
  Reverse: store.demo.reverse
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo);
