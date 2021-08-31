import styled from "styled-components";

const sizes = ["2.369rem", "1.777rem", "1.333rem", "1rem", "0.750rem", "10px"];

export const Heading = styled.div.attrs(({ level }) => ({
  role: "heading",
  "aria-level": level || 1,
}))`
  margin-top: ${({ marginTop }) => marginTop || "0px"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "0px"};
  margin-left: ${({ marginLeft }) => marginLeft || "0px"};
  margin-right: ${(props) => props.marginRight};
  color: ${({ theme, color }) => color || theme.colors.text};
  text-align: ${({ textAlign }) => textAlign || "left"};
  font-weight: bold;
  overflow-wrap: break-word;
  font-size: ${({ level }) => sizes[level - 1]};
  font-family: "SFRounded-Bold", sans-serif;
`;

export const Description = styled.div`
  width: ${({ width }) => width || "100%"};
  color: ${({ theme, color }) => color || theme.colors.text};
  text-align: ${({ textAlign }) => textAlign || "left"};
  font-weight: ${({ textWeight }) => textWeight || "inherit"};
  font-size: ${(props) => props.fontSize || "1em"};
  font-family: "SFRounded-Medium";
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  margin-left: ${(props) => props.marginLeft || "0px"};
`;

export const Text = styled.p`
  width: ${({ width }) => width || "100%"};
  color: ${({ theme, color }) => color || theme.colors.text};
  text-align: ${({ textAlign }) => textAlign || "left"};
  font-weight: ${({ textWeight }) => textWeight || "inherit"};
  font-size: ${(props) => props.fontSize || "1em"};
  font-family: "SFRounded-Medium";
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  margin-left: ${(props) => props.marginLeft || "0px"};
`;
