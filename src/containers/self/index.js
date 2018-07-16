import React, { Component } from 'react';
import './index.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { changeMessage } from '../../modules/selfer';
import { getLoginMessage } from './../../modules/selfer';

import User from './user';
import ModalTest from './modal';

class Self extends Component {

  constructor(props) {
    super(props)
    let defaultState ={
      date: new Date().toLocaleTimeString(),
      timer: null
    }
    console.log(defaultState)
    this.state = defaultState
  }

  loginMEssageHandler = () => {
    const { getLoginMessage } = this.props;
    getLoginMessage({ userName: 'elys', password: '123' });
  }

  changeTime() {
    this.state.timer = setInterval(() => {
      if(!this.state.is) { return ; }
      this.setState({
        date: new Date().toLocaleTimeString()
      })
    }, 1000)
  }

  componentDidMount() {
    this.changeTime();
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }


  render() {
    return (
      <div className="selfer">
        <p>{ this.state.date }</p>
        <p>{ this.props.message }</p>
        <p>异步获取的数据：{ 
          JSON.stringify(this.props.data) 
            ? JSON.stringify(this.props.data) 
            : <span className="tipword">(please click getLoginMessage and make sure you node app.js)</span> 
        }</p>
        <p><a 
          className="btn"
          onClick={this.props.changeMessage}
          >changeMessage</a></p>
        <p><a 
          className="btn"
          onClick={this.loginMEssageHandler}
          >getLoginMessage</a></p>
        <hr />
        <User />
        <hr />
        <ModalTest title='title'/>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.selfer.message,
  data: state.selfer.data
})

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    changeMessage,
    getLoginMessage
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Self);
