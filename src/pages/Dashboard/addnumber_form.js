import React, {Component} from 'react'
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { trls } from '../../components/translate';
import * as authAction  from '../../actions/authAction';
import SessionManager from '../../components/session_manage';
import API from '../../components/api'
import Axios from 'axios';

const mapStateToProps = state => ({ 
    ...state.auth,
});

const mapDispatchToProps = (dispatch) => ({
    blankdispatch: () =>
              dispatch(authAction.blankdispatch()),
});
class Addpurchaseform extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {  
        };
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    
    componentDidMount() {
        this.props.blankdispatch();
    }

    handleSubmit = (event) => {
        this._isMounted = true;
        event.preventDefault();
        const clientFormData = new FormData(event.target);
        const data = {};
        for (let key of clientFormData.keys()) {
            data[key] = clientFormData.get(key);
        }
        var headers = SessionManager.shared().getAuthorizationHeader();
        Axios.post(API.GetUrl+'postRegistrationNumber', data, headers)
        .then(result => {
            this.props.onHide();
            this.props.onGetNumberData();
        })
    }

    onHide = () => {
        this.props.onHide() 
        this.props.blankdispatch();
    }
    
    render(){
        return (
            <Modal
                show={this.props.show}
                onHide={this.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                backdrop= "static"
                centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {trls('Number')}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="container product-form" onSubmit = { this.handleSubmit }>
                    <Form.Group as={Row} controlId="email">
                        <Form.Label column sm="3">
                        {trls('Studentnumber')}   
                        </Form.Label>
                        <Col sm="9" className="product-text input-div">
                            <Form.Control type="number" name="student" className="input-text" required placeholder={trls('Studentnumber')} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="email">
                        <Form.Label column sm="3">
                        {trls('Number')}   
                        </Form.Label>
                        <Col sm="9" className="product-text input-div">
                            <Form.Control type="number" name="number" className="input-text" required placeholder={trls('Number')} />
                        </Col>
                    </Form.Group>
                    <Form.Group style={{textAlign:"center"}}>
                        <Button type="submit" variant="primary" style={{width:"100px"}}><i className="fas fa-save" style={{paddingRight:5}}></i>{trls('Save')}</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
            </Modal>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Addpurchaseform);