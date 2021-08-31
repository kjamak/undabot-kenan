import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.card};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  margin-top: ${({ marginTop }) => marginTop || 0};
  border-radius: 6px;
`;
