import React, { Component } from "react";
import "../styles/sign_in_up.css";
import {  MDBContainer,MDBRow, MDBCol, MDBCard,MDBCardBody,MDBInput,MDBBtn,MDBIcon,MDBModalFooter} from "mdbreact";

class SignIn extends Component {
  state = {};
  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <MDBCard className="z-depth-1a">
                <MDBCardBody className="mx-2">
                  <div className="text-center">
                    <h3 className="dark-green-text mb-5">
                      <strong>Sign in</strong>
                    </h3>
                  </div>

                  <MDBInput
                    label="Your Username"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />

                  <MDBInput
                    label="Your password"
                    group
                    type="password"
                    validate
                    containerClass="mb-0"
                  />

                  <p className="font-small blue-text d-flex justify-content-end pb-3">
                    Forgot
                    <a href="#!" className="blue-text ml-1">
                      Password?
                    </a>
                  </p>

                  <div className="text-center mb-3">
                    <MDBBtn
                      type="button"
                      gradient="blue"
                      rounded
                      className="btn-block z-depth-1a"
                    >
                      Sign in
                    </MDBBtn>
                  </div>

                  <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                    or Sign in with:
                  </p>

                  <div className="row my-3 d-flex justify-content-center">
                    <MDBBtn
                      type="button"
                      color="white"
                      rounded
                      className="mr-md-3 z-depth-1a"
                    >
                      <MDBIcon
                        fab
                        icon="facebook-f"
                        className="pink-text text-center"
                      />
                    </MDBBtn>

                    <MDBBtn
                      type="button"
                      color="white"
                      rounded
                      className="mr-md-3 z-depth-1a"
                    >
                      <MDBIcon fab icon="twitter" className="pink-text" />
                    </MDBBtn>

                    <MDBBtn
                      type="button"
                      color="white"
                      rounded
                      className="z-depth-1a"
                    >
                      <MDBIcon fab icon="google-plus-g" className="pink-text" />
                    </MDBBtn>
                  </div>
                </MDBCardBody>

                <MDBModalFooter className="mx-5 pt-3 mb-1">
                  <p className="font-small grey-text d-flex justify-content-end">
                    Not a member?
                    <a href="#!" className="blue-text ml-1">
                      Sign Up
                    </a>
                  </p>
                </MDBModalFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default SignIn;
