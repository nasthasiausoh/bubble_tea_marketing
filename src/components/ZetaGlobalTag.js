// // ZetaGlobalTag.js
// import React, { useEffect } from 'react';

// const ZetaGlobalTag = ({ customerID }) => {
//   useEffect(() => {
//     function zync_call() {
//       var z = document.createElement("script");
//       var zmpID = "partner-dev-tap-cxm"; // Replace with your actual ZMP client site ID
//       var z_src =
//         `https://live.rezync.com/sync?c=16b6410431b6374e780104abb0443ca8&p=4e23407029914d0e0d24470fd37577e2&p=4e23407029914d0e0d24470fd37577e2&k=partner-dev-tap-cxm&zmpID=${zmpID}&CustID=${customerID}`;
//       z.setAttribute("src", z_src);
//       document.body.appendChild(z);
//     }

//     if (['complete', 'interactive'].indexOf(document.readyState) >= 0) {
//       zync_call();
//     } else {
//       window.addEventListener("DOMContentLoaded", function () {
//         zync_call();
//       });
//     }
//   }, [customerID]);

//   return <></>; // or null, since this component doesn't render anything
// };

// export default ZetaGlobalTag;
