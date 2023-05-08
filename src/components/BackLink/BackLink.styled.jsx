import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Linkk = styled(Link)`
    display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  width: 196px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;


  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;

  &:hover {
    background: #3d9273;
  }
`