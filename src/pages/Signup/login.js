import { Link } from 'react-router-dom';
import React from 'react';
import * as authAction  from '../../actions/authAction';
import { connect } from 'react-redux';
import { Row, Col, Form, Button } from 'react-bootstrap';
import ListErrors from '../../components/listerrors';
import { trls } from '../../components/translate';
import Select from 'react-select';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
    authLogin: (params) =>
              dispatch(authAction.fetchLoginData(params)),
    changeLan: (params) =>
              dispatch(authAction.changeLan(params)),
});

class Login extends React.Component {
  constructor() {   
    super();
    this.state = {  
      roles:[{"value":"en_US","label":"English"},{"value":"nl_BE","label":"Dutch"}],
      selectrolvalue:window.localStorage.getItem('fri_lang'),
      selectrollabel:window.localStorage.getItem('fri_label'),
    };
  };

  changeLangauge = (val) => {
    this.setState({selectrolvalue:val.value, selectrollabel: val.label});
    this.props.changeLan(val)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const clientFormData = new FormData(event.target);
    const data = {};
    for (let key of clientFormData.keys()) {
        data[key] = clientFormData.get(key);
    }
    this.props.authLogin(data);
  }
  render() {
    console.log('33323', this.state.selectrollabel);
    return (
      <div className="auth-page" style={{height:"100%"}}>
        <div className="container login-page">
          <div className="row addQuestion">
            <div className="col-md-5 offset-md-1 col-xs-12  vertical-center">
                <Row style={{height:"100%",width:"100%"}}>
                  <div className="login-side-div">
                    <img src={require('../../assets/images/img_admin_side.png')} alt="appzmakerz" className="login-side-grad"></img>
                  </div>
                  <Col  className="login-form-div">
                    <svg viewBox="0 0 335 110" xmlns="http://www.w3.org/2000/svg" className="c-logo__image"> <g fillRule="nonzero" fill="none"> <path fill="currentColor" d="M63.8 63.9v5.9h10.4v5.6H63.8v11h-6.5V58.1h17.8v5.8zM86 70.2v-6.6h3.5c.5 0 1 0 1.5.1s1 .2 1.4.5c.4.2.8.5 1 1 .3.4.4 1 .4 1.6 0 .7-.1 1.3-.4 1.8-.3.5-.7.8-1.1 1-.5.2-1 .4-1.5.5-.6.1-1.1.1-1.6.1H86zm3.3 6.9c1.1-1.5 2.8-2.5 4.8-2.5.3 0 .6 0 .9.1l-.2-.4c1.8-.6 3.1-1.5 4.1-2.8 1-1.3 1.5-2.9 1.5-4.9 0-1.6-.3-3-.9-4.1-.6-1.1-1.4-2-2.3-2.6-1-.7-2.1-1.1-3.3-1.4-1.2-.3-2.5-.4-3.8-.4H79.8v28.4h6.4V75.2h2.2l.9 1.9zM105.3 58.1h6.6v28.4h-6.6zM117.8 86.4V58.1H136v5.7h-11.9v5.4h11.2v5.5h-11.2v5.9h12.6v5.8zM155.6 65.4c-.6-.7-1.3-1.3-2.2-1.8-.9-.4-1.8-.7-2.6-.7-.4 0-.9 0-1.3.1s-.8.2-1.2.5c-.4.2-.7.5-.9.9-.2.4-.4.8-.4 1.4 0 .5.1.9.3 1.2.2.3.5.6.8.8.4.2.8.5 1.3.7.5.2 1.1.4 1.7.6.9.3 1.9.7 2.9 1.1 1 .4 1.9.9 2.7 1.5.8.6 1.5 1.4 2 2.4.5.9.8 2.1.8 3.5 0 1.6-.3 3-.9 4.2-.6 1.2-1.3 2.2-2.3 2.9-1 .8-2.1 1.3-3.3 1.7-1.2.4-2.5.6-3.8.6-1.9 0-3.8-.4-5.6-1.1-1.8-.7-3.3-1.7-4.5-3l4.3-4.6c.7.9 1.5 1.6 2.6 2.1 1.1.6 2.2.9 3.2.9.5 0 1-.1 1.4-.2.5-.1.9-.3 1.2-.5.3-.2.6-.6.8-1 .2-.4.3-.9.3-1.4 0-.5-.1-1-.4-1.4-.3-.4-.6-.7-1.1-1-.5-.3-1.1-.6-1.8-.8-.7-.3-1.5-.5-2.4-.8-.9-.3-1.7-.6-2.5-1s-1.6-.9-2.2-1.5c-.6-.6-1.2-1.4-1.6-2.3-.4-.9-.6-2-.6-3.3 0-1.6.3-2.9.9-4.1.6-1.1 1.4-2 2.4-2.8 1-.7 2.1-1.2 3.4-1.6 1.2-.3 2.5-.5 3.8-.5 1.5 0 3.1.3 4.7.9 1.6.6 3 1.5 4.2 2.6l-4.1 4.8zM164.2 86.4V58.1h18.2v5.7h-11.9v5.4h11.2v5.5h-11.2v5.9h12.6v5.8zM211.6 66.8c0-.7-.1-1.2-.4-1.6-.3-.4-.6-.8-1-1-.4-.2-.9-.4-1.5-.5-.5-.1-1.1-.1-1.7-.1h-2.9v6.7h2.7c.6 0 1.2-.1 1.8-.2.6-.1 1.1-.3 1.5-.6.4-.3.8-.6 1-1.1.4-.3.5-.9.5-1.6m6.5 0c0 1.7-.3 3.1-.9 4.2-.6 1.1-1.4 2.1-2.4 2.7-1 .7-2.1 1.2-3.4 1.5-1.3.3-2.6.5-4 .5h-3.2v10.7h-6.5V58h9.9c1.5 0 2.9.2 4.1.5 1.3.3 2.4.8 3.4 1.5s1.7 1.6 2.2 2.7c.6 1.1.8 2.5.8 4.1M243.6 72.1c0-1.2-.2-2.4-.6-3.5-.4-1.1-.9-2-1.6-2.7-.7-.8-1.5-1.4-2.4-1.8-1-.4-2-.7-3.1-.7s-2.2.2-3.1.7c-.9.4-1.8 1-2.4 1.8-.7.8-1.2 1.7-1.6 2.7-.4 1.1-.6 2.2-.6 3.5 0 1.3.2 2.5.6 3.6.4 1.1.9 2 1.6 2.8.7.8 1.5 1.4 2.4 1.8.9.4 2 .7 3.1.7s2.2-.2 3.1-.7c.9-.4 1.8-1 2.4-1.8.7-.8 1.2-1.7 1.6-2.8.4-1.1.6-2.3.6-3.6m7 0c0 2.2-.4 4.3-1.1 6.2-.7 1.9-1.8 3.5-3.1 4.8-1.3 1.3-2.9 2.3-4.7 3.1-1.8.7-3.8 1.1-5.9 1.1-2.1 0-4.1-.4-5.8-1.1-1.7-.7-3.3-1.7-4.7-3.1-1.3-1.3-2.3-2.9-3.1-4.8-.7-1.9-1.1-3.9-1.1-6.2 0-2.3.4-4.3 1.1-6.2.7-1.8 1.8-3.4 3.1-4.7 1.3-1.3 2.9-2.3 4.7-3 1.8-.7 3.7-1 5.8-1 2.1 0 4.1.4 5.9 1 1.8.7 3.4 1.7 4.7 3 1.3 1.3 2.3 2.8 3.1 4.7.7 1.9 1.1 4 1.1 6.2M276.4 72.1c0-1.2-.2-2.4-.6-3.5-.4-1.1-.9-2-1.6-2.7-.7-.8-1.5-1.4-2.4-1.8-1-.4-2-.7-3.1-.7s-2.2.2-3.1.7c-.9.4-1.8 1-2.4 1.8-.7.8-1.2 1.7-1.6 2.7-.4 1.1-.6 2.2-.6 3.5 0 1.3.2 2.5.6 3.6.4 1.1.9 2 1.6 2.8.7.8 1.5 1.4 2.4 1.8.9.4 2 .7 3.1.7s2.2-.2 3.1-.7c.9-.4 1.8-1 2.4-1.8.7-.8 1.2-1.7 1.6-2.8.4-1.1.6-2.3.6-3.6m7 0c0 2.2-.4 4.3-1.1 6.2-.7 1.9-1.8 3.5-3.1 4.8-1.3 1.3-2.9 2.3-4.7 3.1-1.8.8-3.8 1.1-5.9 1.1-2.1 0-4.1-.4-5.9-1.1-1.8-.7-3.3-1.7-4.6-3.1-1.3-1.3-2.3-2.9-3.1-4.8-.7-1.9-1.1-3.9-1.1-6.2 0-2.3.4-4.3 1.1-6.2.7-1.8 1.8-3.4 3.1-4.7 1.3-1.3 2.9-2.3 4.6-3 1.8-.7 3.7-1 5.9-1 2.1 0 4.1.4 5.9 1 1.8.7 3.4 1.7 4.7 3 1.3 1.3 2.3 2.8 3.1 4.7.7 1.9 1.1 4 1.1 6.2M302.2 66.8c0-.7-.1-1.2-.4-1.6-.3-.4-.6-.7-1-1-.4-.2-.9-.4-1.4-.5-.5-.1-1-.1-1.5-.1h-3.5v6.6h3.1c.5 0 1.1 0 1.6-.1.6-.1 1.1-.3 1.5-.5.5-.2.8-.6 1.1-1 .4-.5.5-1.1.5-1.8zm.3 19.6l-5.9-11.3h-2.2v11.3H288V58h10.3c1.3 0 2.6.1 3.8.4 1.2.3 2.3.8 3.3 1.4 1 .7 1.8 1.6 2.3 2.6.6 1.1.9 2.5.9 4.1 0 1.9-.5 3.5-1.5 4.9-1 1.3-2.4 2.2-4.1 2.8l7 12.2h-7.5zM324.8 63.9v22.5h-6.5V63.9h-7.7v-5.8h21.8v5.8z"></path><path d="M94.7 73.8c-.1 0-.7.1-.8.1-.1 0-.2 0-.3.1-.8.2-1.5.3-2.3.2-.7.1-1.3.3-2 .4-.3.1-.6.1-1 .1l-.1.1c3.3 8.9 22.3 45.3 73.4 28.2-21.2 6.3-55.9 1.3-66.9-29.2" fill="currentColor"></path><path className="c-logo__image-red" d="M96.9 8.2C77.5 22 79 45.4 79.9 52.4h6.3c-.7-6-1.4-24.9 8.9-36.3C109.2.5 123.9 3.3 134 9.7c-9.1-9.9-27.4-8.5-37.1-1.5M137.7 31.6s7.8 7.6 17.2 3.9c24.7-11.2 39.6 3.1 35.4 23.6-.1-5.5-3.4-17.4-11.9-21.4-12.7-5.8-29.2 9.6-40.7-6.1" fill="currentColor"></path><path d="M6.8 71.9c.4 0 .7 0 1.1-.1.4-.1.7-.2 1-.3.3-.2.5-.4.7-.6.2-.3.3-.6.3-1.1 0-.4-.1-.7-.3-1-.2-.3-.4-.5-.7-.6-.3-.1-.6-.3-.9-.3-.3-.1-.7-.1-1-.1H4.7v4.1h2.1zm-4.7-6.3h5c.7 0 1.3.1 2 .2.6.1 1.2.4 1.7.7.5.3.9.8 1.2 1.3.3.5.4 1.2.4 1.9 0 1-.3 1.9-.9 2.6-.6.7-1.4 1.1-2.4 1.3L13 80H9.9l-3.3-6.1H4.7V80H2.1V65.6zM17.8 72.8c0 .8.1 1.5.4 2.1.2.6.6 1.2 1 1.7s1 .8 1.6 1.1c.6.3 1.3.4 2 .4s1.4-.1 2-.4c.6-.3 1.1-.6 1.6-1.1.4-.5.8-1 1-1.7.2-.6.4-1.4.4-2.1 0-.7-.1-1.4-.4-2.1-.2-.6-.6-1.2-1-1.7s-1-.9-1.6-1.1c-.6-.3-1.3-.4-2-.4s-1.4.1-2 .4c-.6.3-1.1.6-1.6 1.1-.4.5-.8 1-1 1.7-.2.7-.4 1.4-.4 2.1m-2.8 0c0-1.2.2-2.2.6-3.1.4-.9.9-1.7 1.6-2.4.7-.7 1.5-1.2 2.5-1.5.9-.4 2-.5 3.1-.5s2.2.2 3.1.5c1 .4 1.8.9 2.5 1.5.7.7 1.2 1.4 1.6 2.4.4.9.6 2 .6 3.1s-.2 2.2-.6 3.1c-.4.9-.9 1.7-1.6 2.4-.7.7-1.5 1.2-2.5 1.6-1 .4-2 .6-3.1.6s-2.1-.2-3.1-.6c-.9-.4-1.8-.9-2.5-1.6-.7-.7-1.2-1.5-1.6-2.4-.4-.9-.6-2-.6-3.1M44.3 69c-.4-.5-.9-.9-1.5-1.1-.6-.2-1.2-.4-1.8-.4-.7 0-1.4.1-2 .4-.6.3-1.1.6-1.6 1.1-.4.5-.8 1-1 1.7-.2.6-.4 1.3-.4 2.1s.1 1.5.3 2.2c.2.7.6 1.2 1 1.7s.9.8 1.5 1.1c.6.3 1.3.4 2 .4.8 0 1.5-.2 2.1-.5.6-.3 1.1-.7 1.4-1.2l2.1 1.5c-.6.8-1.4 1.4-2.3 1.9-.9.4-2 .7-3.2.7-1.1 0-2.2-.2-3.1-.6-.9-.4-1.8-.9-2.4-1.6-.7-.7-1.2-1.5-1.6-2.4-.4-.9-.6-2-.6-3.1 0-1.2.2-2.2.6-3.1.4-.9 1-1.7 1.7-2.4s1.5-1.2 2.5-1.5c1-.4 2-.5 3.1-.5.5 0 .9 0 1.4.1.5.1 1 .2 1.5.4s.9.4 1.3.7c.4.3.8.6 1 1l-2 1.4z" fill="currentColor"></path> </g> </svg>
                    <Form className="container login-form" onSubmit = { this.handleSubmit }>
                        <ListErrors errors={this.props.error} />
                        <Form.Group as={Row} controlId="form" style={{textAlign:'left'}}>
                            <Select
                                name="lan"
                                options={this.state.roles}
                                className="login-select-lang-class"
                                value={{"label":this.state.selectrollabel,"value":this.state.selectrolvalue}}
                                onChange={val => this.changeLangauge(val)}
                            />
                        </Form.Group>
                        <Form.Group as={Row} controlId="form">
                            <Form.Control type="text" name="username" className="login-input-email" required placeholder={trls("Username")}/>
                        </Form.Group>
                        <Form.Group as={Row} controlId="form">
                            <Form.Control type="password" name="password" className="login-input-password" required placeholder={trls("Password")}/>
                        </Form.Group>
                        <p className="text-xs-center">
                            <Link to="/register" style={{color:"rgb(21, 140, 186)"}}>
                              {trls("Forgot_password")}
                            </Link>
                        </p>
                        <Button type="submit" variant="info" style={{textTransform:"uppercase"}}><i className="fas fa-sign-in-alt" style={{paddingRight:5}}></i>{trls('Sign_in')}</Button>
                    </Form>
                  </Col>
                </Row>
                
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
