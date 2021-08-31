import React from "react";
import styled from "styled-components";
import Loader from "./Loader";

export const Input = (props) => {
  return (
    <InputWrapper {...props}>
      <Icon className={props.icon} />
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        type={props.type}
      />
      {props.verified ? (
        <Icon className="ri-shield-check-fill" />
      ) : (
        props.info && (
          <Icon className="ri-information-fill" onPress={props.onInfoPress} />
        )
      )}
      {props.loading && <Loader strokeMain="white" />}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: ${({ paddingLeft }) => paddingLeft || "20px"};
  padding-right: 20px;
  background-color: ${({ theme }) => theme.colors.cardTransparent};
  height: ${({ height }) => height || "60px"};
  border-radius: 5px;
  margin-top: ${({ marginTop }) => marginTop || 0};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
`;

const TextInput = styled.input`
  color: ${({ theme }) => theme.colors.secondary};
  height: 50px;
  flex: 1;
  font-size: 20px;
  padding-left: 10px;
  font-family: "SFRounded-Medium";
  background-color: transparent;
  border: none;
  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 1;
  }
`;

const Icon = styled.i`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.secondary};
`;
