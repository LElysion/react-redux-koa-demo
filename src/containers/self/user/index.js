import React, { Component } from 'react';
import './index.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import axios from 'axios'

const NoLogin = () => {
  return (
    <span>你尚未登录</span>
  )
}

const IsLogin = () => {
  return (
    <span>你已成功登录</span>
  )
}

class User extends Component {

  constructor(props) {
    super(props)
    let defaultState ={
      username: '',
      password: '',
      isLogin: false
    }
    this.state = defaultState
  }


  handleChange = (e) => {
    let o = {};
    o[e.target.name] = e.target.value;
    this.setState(o);
  } 

  getLogin = () => {
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      console.log(res);
      if(res.data.code === 0) {
        this.setState({
          isLogin: true
        })
      }
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="user">
        {this.state.isLogin ? <IsLogin /> : <NoLogin />}
        <hr />
        <form >
          <div className="from-item">
            <label htmlFor="username">username: </label>
            <input type="text" 
            id="username"
            placeholder="username" 
            className="from-input" 
            value={this.state.username} 
            onChange={this.handleChange}
            name="username"
            />
          </div>
          <div className="from-item">
            <label htmlFor="password">password: </label>
            <input type="password" 
            id="password"
            placeholder="password" 
            className="from-input"
            value={this.state.password} 
            onChange={this.handleChange}
            name='password'
            />
          </div>
          <div>
            <a onClick={this.getLogin} className="btn">提交表单</a>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => 
  bindActionCreators({
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(User);
