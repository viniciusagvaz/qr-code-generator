import styled from "styled-components";

export const Title = styled.h1`
  height: 100%;
  width: 100%;

  font-size: 2.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme["--primary-200"]};

  &:after {
    display: inline-block;
    vertical-align: bottom;

    width: 15%;
    height: 0.4em;
    margin-right: -100%;
    margin-left: 0.5rem;

    border-top: 2px solid ${(props) => props.theme["--primary-200"]};

    content: "";
  }
`;
