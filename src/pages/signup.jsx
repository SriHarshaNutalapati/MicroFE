import React from "react";
import Input from "../components/input";
import { Container } from "react-bootstrap";
import Text from "../components/text";
import MPButton from "../components/buttons";


function SignUp(props){

    return (
        <>
            <Container>
                <Text class="text_primary" text="Email"></Text>
                <Input></Input>

                <p>Password*</p>
                <Input></Input>

                <MPButton btnText="Confirm Payment" class="mp-primary-btn"></MPButton>
            </Container>
        </>
    )
}

export default SignUp;