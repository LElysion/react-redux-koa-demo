import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

class ModalTest extends Component {

  constructor(props) {
    super(props)
    let defaultState ={
      modalIsOpen: false
    }
    this.state = defaultState
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true
    })
  }

  afterOpenModal = () => {
    this.subtitle.style.color = '#f00'
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    })
  }

  render() {
    return (
      <div className="">
        <a className="btn" onClick={this.openModal}>Open Modal</a>
        <Modal 
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.title}</h2>
          <a className="btn" onClick={this.closeModal}>close</a>
          <div>I am a modal</div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => 
  bindActionCreators({
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ModalTest);
