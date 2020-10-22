import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const SignInContainer = styled.div`
  background-color: #01bf71;
  width: 100%;
  min-height: 100vh;
`;
export const FormWrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Icon = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  margin-top: 20px;
  padding-left: 20px;
`;
export const FormContent = styled.div`
  max-width: 350px;
  margin: 40px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #010606;
  border-radius: 5px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
`;
export const Form = styled.form`
  color: #fff;
  padding: 80px 40px;
  width: 100%;
`;
export const FormH1 = styled.h1`
  font-size: 1rem;
  text-align: center;
  font-weight: 400;
`;
export const FormLabel = styled.label`
  font-size: 12px;
  margin-top: 20px;
  display: block;
`;
export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  margin-top: 5px;
  padding-left: 10px;
`;
export const FormButton = styled.button`
  width: 100%;
  background-color: #01bf71;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 0;
  font-size: 1rem;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
  }
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 20px;
  display: block;
  font-size: 12px;
`;
