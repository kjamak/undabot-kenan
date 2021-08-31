import { Col } from "react-grid-system";
import styled from "styled-components";

const _Col = styled(Col)`
  margin-top: ${({ marginTop }) => marginTop || 0};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  padding: ${({ padding }) => padding || 0};
`;

export default _Col;
