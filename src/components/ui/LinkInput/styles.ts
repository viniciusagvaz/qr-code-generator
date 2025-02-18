import styled from "styled-components";

export const LinkInput = styled.input`
  width: 70%;

  font-size: 1.6rem;
  color: ${(props) => props.theme["--primary-200"]};

  padding: 1.25rem;
  margin-top: 0.5rem;

  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 2px;

  onfocus {
    border: 1px solid ${(props) => props.theme["--primary-200"]};
  }
`;
