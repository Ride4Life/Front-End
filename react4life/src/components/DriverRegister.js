import React from 'react';
import {
  Button,
  Form,
  FormLayout,
  TextField,
  TextContainer,
  Card,
  ButtonGroup,
  Typography
} from '@material-ui/core';




export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            password: "",
            confirm_password: "",
            phone: ""
        };
    }

    render() {
        const {
            firstname,
            lastname,
            email,
            username,
            password,
            confirm_password,
            phone
        } = this.state;

        return (
            <div className="centerWithWidth">
                <Form onSubmit={this.handleSubmit} implicitSubmit={true}>
                    <FormLayout>
                        <Card sectioned>
                            <Card.Section>
                                <Typography size="large">Registration</Typography>
                            </Card.Section>
                            <Card.Section>
                                <TextContainer spacing="loose">
                                    <FormLayout.Group>
                                        <TextField
                                          value={firstname}
                                          onChange={this.handleChange("firstname")}
                                          label="First Name"
                                          type="text"
                                          placeholder="Enter first name here..."
                                          helpText={<span/>}
                                        />
                                        <TextField
                                          value={lastname}
                                          onChange={this.handleChange("lastname")}
                                          label="Last Name"
                                          type="text"
                                          placeholder="Enter last name here..."
                                          helpText={<span/>}
                                        />
                                        <TextField
                                          value={username}
                                          onChange={this.handleChange("username")}
                                          label="Username"
                                          type="text"
                                          placeholder="Enter username here..."
                                          helpText={<span/>}
                                        />
                                    </FormLayout.Group>
                                    <FormLayout.Group>
                                        <TextField
                                          value={email}
                                          onChange={this.handleChange("email")}
                                          label="Email"
                                          type="email"
                                          placeholder="e.g. youremail@example.com"
                                          helpText={<span />}
                                        />
                                    </FormLayout.Group>
                                    <FormLayout.Group>
                                        <TextField
                                          value={password}
                                          onChange={this.handleChange("password")}
                                          label="Password"
                                          type="password"
                                          placeholder="Enter password here..."
                                          helpText={<span />}
                                        />
                                        <TextField
                                          value={confirm_password}
                                          onChange={this.handleChange("confirm_password")}
                                          label="Confirm Password"
                                          type="password"
                                          placeholder="Re-enter password here..."
                                          helpText={<span />}
                                        />
                                        <TextField
                                          value={phone}
                                          onChange={this.handleChange("phone")}
                                          label="Phone Number"
                                          type="text"
                                          placeholder="Enter phone number here..."
                                          helpText={<span/>}
                                        />
                                    </FormLayout.Group>
                                    <ButtonGroup>
                                      <Button submit primary>
                                        Register
                                      </Button>
                                      <Button>Already have an account?</Button>
                                    </ButtonGroup>
                                </TextContainer>
                            </Card.Section>
                        </Card>
                    </FormLayout>
                </Form>
            </div>
        )
    }
}