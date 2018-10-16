import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { DemoProps } from "typings";
import "./demo.scss";

class Demo extends Component<DemoProps> {
  static defaultProps: DemoProps = {
    count: 0,
    outstr: "Hello World",
    Add: () => void {},
    Reverse: () => void {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { Add, Reverse, count, outstr } = this.props;
    return (
      <div>
        <Button type="primary" onClick={Reverse}>
          click me to Reverse words
        </Button>
        <span className="output">{outstr}</span>
        <Button onClick={() => Add(1)}>click me to add number</Button> now
        number is : {count}
      </div>
    );
  }
}

const mapStateToProps = (store: any) => ({ ...store.demo });
const mapDispatchToProps = (dispatch: any) => ({
  Add: dispatch.demo.add,
  Reverse: dispatch.demo.reverse
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo);
