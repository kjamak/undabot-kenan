import { Row } from "react-grid-system";
import styled from "styled-components";

const _Row = styled(Row)`
  margin-top: ${({ marginTop }) => marginTop || 0};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  padding: ${({ padding }) => padding || 0};
  min-height: 100vh;
`;

export default _Row;
