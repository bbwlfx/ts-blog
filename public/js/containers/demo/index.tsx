import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from './model';


interface DemoProps {
  count?: number,
  outstr?: string,
  Add?: React.MouseEventHandler<HTMLButtonElement>,
  Reserve?: React.MouseEventHandler<HTMLButtonElement> 
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
    Reserve: PropTypes.func
  }

  static defaultProps = {
    count: 0,
    outstr: 'Hello World',
    Add: () => {},
    Reserve: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      outstr: props.outstr
    };
  }

  render() {
    const { Add, Reserve, count, outstr } = this.props;
    return (
      <div>
        <button onClick={Reserve}>click me to reserve words</button>{outstr}
        <button onClick={Add}>click me to add number</button> now number is : {count}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  Add: dispatch.demo.add,
  Reserve: dispatch.demo.reserve
})
export default connect(mapStateToProps, mapDispatchToProps)(Demo);