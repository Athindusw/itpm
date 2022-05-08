import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const UserPDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <p>{props.Income_date}</p>
      </div>
      <Pdf targetRef={ref} filename="UserReport.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>

      
    </>
  );
}

export default UserPDF;