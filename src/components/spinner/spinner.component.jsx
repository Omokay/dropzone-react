import { css } from "@emotion/react";
import {PuffLoader} from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


const Spinner = ({loading}) => {

    let color = "#09009B";

    return (
        <>
         <PuffLoader color={color} loading={loading} css={override}  />
        </>
    )
}

export default Spinner;
