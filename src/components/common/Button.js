import styled from "styled-components";

export const Button = styled.button`
  width: ${({ width }) => width || "100%"};
  background-color: ${({ theme, backgroundColor, disabled }) =>
    disabled ? "gray" : backgroundColor || theme.colors.primary};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: all 0.3s;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 24px;
  font-family: "SFRounded-Bold";
  border-radius: 5px;
  margin-top: ${({ marginTop }) => marginTop || 0};
  border: 3px solid
    ${({ theme, backgroundColor, disabled }) =>
      disabled ? "gray" : backgroundColor || theme.colors.primary};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  border-radius: ${({ loading }) => loading && "50px"};
  :hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? "gray" : theme.colors.background};
    color: ${({ theme, backgroundColor, disabled }) =>
      disabled
        ? theme.colors.secondary
        : backgroundColor || theme.colors.primary};
    border: 3px solid
      ${({ theme, backgroundColor, disabled }) =>
        disabled ? "gray" : backgroundColor || theme.colors.primary};

    cursor: ${({ disabled }) => (disabled ? "mouse" : "pointer")};
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;
