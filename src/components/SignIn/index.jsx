import React from "react";

import {
  SignInContainer,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SignIn.styles";

function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Success");
  };

  return (
    <SignInContainer>
      <FormWrap>
        <Icon to="/">白鹿my</Icon>
        <FormContent>
          <Form onSubmit={handleSubmit}>
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput type="email" required id="email" />
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput type="password" required id="password" />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot Password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </SignInContainer>
  );
}

export default SignIn;
