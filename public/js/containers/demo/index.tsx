import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

interface DemoProps {
  count?: number,
  outstr?: string,
  Add?: React.MouseEventHandler<HTMLButtonElement>,
  Reverse?: React.MouseEventHandler<HTMLButtonElement> 
};

interface DemoState {
  count: Number,
  outstr: String,
}

class Demo extends Component<DemoProps, DemoState> {
  static propTypes = {
    count: PropTypes.number,
    outstr: PropTypes.string,
    Add: PropTypes.func,
    Reverse: PropTypes.func
  }

  static defaultProps = {
    count: 0,
    outstr: 'Hello World',
    Add: () => {},
    Reverse: () => {}
  }

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
        <button onClick={Reverse}>click me to Reverse words</button>{outstr}
        <button onClick={Add}>click me to add number</button> now number is : {count}
      </div>
    );
  }
}

const mapStateToProps = (store: any) => ({ ...store.demo });
const mapDispatchToProps = (store: any) => ({
  Add: store.demo.add,
  Reverse: store.demo.reverse
})
export default connect(mapStateToProps, mapDispatchToProps)(Demo);