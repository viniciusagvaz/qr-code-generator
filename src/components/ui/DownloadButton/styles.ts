import styled from "styled-components";

export const DownloadButton = styled.input`
  width: 60%;

  padding: 1.2rem 2.4rem;
  margin-top: 2rem;

  font-size: 1.6rem;
  font-weight: bold;
  color: ${(props) => props.theme["--primary-200"]};

  background-color: transparent;
  border: 1px solid ${(props) => props.theme["--primary-200"]};
  border-radius: 4px;

  transition: background-color 0.6s ease, color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["--primary-200"]};
    color: #000;
  }

  &.disabled-button {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #ccc;
    color: ${(props) => props.theme["--primary-200"]};
  }
`;
