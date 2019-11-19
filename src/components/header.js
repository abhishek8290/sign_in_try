import React, { Component } from "react";
import SignIn from "./sign_in";
import SignUp from "./sign_up";
import "../styles/common.css";
import Modal from "react-responsive-modal";
import { Button } from "antd";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      signin_open: false,
      signup_open: false
    };
  }
  Signin_OpenModal = () => {
    this.setState({ signin_open: true });
  };

  Signup_OpenModal = () => {
    this.setState({ signup_open: true });
  };

  onCloseModal = () => {
    this.setState({ signin_open: false, signup_open: false });
  };

  render() {
    const { signin_open } = this.state;
    const { signup_open } = this.state;

    return (
      <div className="head-bgcolor d-flex justify-content-between">
      <div className="d-flex align-items-start">
        <span>
        <h2>Welcome Shribhi and Abhishri! </h2>
        <h2> Comfort yourself here.</h2>
        </span>
      </div>

      <div className="mb-4 d-flex align-items-end">
        <div className="mr-3">
          <Button onClick={this.Signin_OpenModal}>Sign In</Button>

          <Modal open={signin_open} onClose={this.onCloseModal}>
            <SignIn />
          </Modal>
        </div>

        <div>
          <Button onClick={this.Signup_OpenModal}>Sign Up</Button>

          <Modal open={signup_open} onClose={this.onCloseModal}>
            <SignUp />
          </Modal>
        </div>
      </div>
    </div>
    );
  }
}
export default Header;

