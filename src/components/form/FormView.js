import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Input, {InputLabel} from 'material-ui/Input';
import {MenuItem} from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form';
import Select from 'material-ui/Select';
import styled from 'styled-components';

const FormViewInitialState = {
  name: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zipCode: '',
  errorMessages: {}
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

class FormView extends Component {
  state = FormViewInitialState;

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  states = [
    {id: 1, name: 'California'},
    {id: 2, name: 'Florida'},
    {id: 3, name: 'New York'},
    {id: 4, name: 'Michigan'},
    {id: 5, name: 'Oregon'},
    {id: 6, name: 'Rhode Island'},
    {id: 7, name: 'Texas'}
  ];

  resetForm = () => {
    this.setState(FormViewInitialState);
  };

  checkForm = () => {
    const errorMessages = {};
    const requiredFieldMessage = 'This field is required!';

    if (!this.state.name) {
      errorMessages.name = [requiredFieldMessage];
    }
    if (!this.state.address1) {
      errorMessages.address1 = [requiredFieldMessage];
    }
    if (!this.state.city) {
      errorMessages.city = [requiredFieldMessage];
    }
    if (!this.state.state) {
      errorMessages.state = [requiredFieldMessage];
    }
    if (!this.state.zipCode) {
      errorMessages.zipCode = [requiredFieldMessage];
    }

    this.setState({errorMessages});
  };

  renderErrorMessages = messages => {
    const messageStyle = {
      fontSize: '12px'
    };

    return messages.map(message => (
      <span style={messageStyle}>{message}</span>
    ));
  };

  render() {
    return (
      <StyledForm>
        <InputContainer>
          <TextField id="name"
                     label="Name"
                     value={this.state.name}
                     onChange={this.handleChange('name')}
                     margin="normal"
                     error={this.state.errorMessages.name}
                     required/>
          {this.state.errorMessages.name && this.renderErrorMessages(this.state.errorMessages.name)}
        </InputContainer>
        <InputContainer>
          <TextField id="address1"
                     label="Address Line 1"
                     value={this.state.address1}
                     onChange={this.handleChange('address1')}
                     margin="normal"
                     error={this.state.errorMessages.address1}
                     required/>
          {this.state.errorMessages.address1 && this.renderErrorMessages(this.state.errorMessages.address1)}
        </InputContainer>
        <InputContainer>
          <TextField id="address2"
                     label="Address Line 2"
                     max-length="2"
                     value={this.state.address2}
                     onChange={this.handleChange('address2')}
                     error={this.state.errorMessages.address2}
                     margin="normal"/>
        </InputContainer>
        <InputContainer>
          <TextField id="city"
                     label="City"
                     value={this.state.city}
                     onChange={this.handleChange('city')}
                     error={this.state.errorMessages.city}
                     margin="normal"
                     required/>
          {this.state.errorMessages.city && this.renderErrorMessages(this.state.errorMessages.city)}
        </InputContainer>
        <InputContainer>
          <FormControl>
            <InputLabel htmlFor="state-multiple">State</InputLabel>
            <Select value={this.state.state}
                    onChange={this.handleChange('state')}
                    input={<Input id="state-multiple"/>}
                    error={this.state.errorMessages.state}
                    required>
              {this.states.map(state => (
                <MenuItem key={state.id}
                          value={state.name}
                          style={{
                            fontWeight: this.state.name.indexOf(state.name) !== -1 ? '500' : '400',
                          }}>
                  {state.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {this.state.errorMessages.state && this.renderErrorMessages(this.state.errorMessages.state)}
        </InputContainer>
        <InputContainer>
          <TextField id="zipCode"
                     type="number"
                     label="Zip Code"
                     value={this.state.zipCode}
                     error={this.state.errorMessages.zipCode}
                     onChange={this.handleChange('zipCode')}
                     margin="normal"
                     required/>
          {this.state.errorMessages.zipCode && this.renderErrorMessages(this.state.errorMessages.zipCode)}
        </InputContainer>
        <Button color="accent" onClick={this.resetForm}>
          cancel
        </Button>
        <Button color="primary"
                raised
                onClick={this.checkForm}>
          Ok
        </Button>
      </StyledForm>
    )
  }
}

export default FormView;
