import styled from "styled-components";


export const DownloadButton = styled.input`
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 70%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
  }
`;