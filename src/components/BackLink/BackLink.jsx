import { useRef } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useLocation } from "react-router";
import { Linkk } from "./BackLink.styled";
// import { Link } from "react-router-dom";

export const BackLink = () => {
    const location = useLocation();
    const backLocation = useRef(location.state?.from ?? '/');

    return (<Linkk to={backLocation.current} state={{ from: location }}>
        <HiArrowLeft size="24" />
        Back
      </Linkk>)
}