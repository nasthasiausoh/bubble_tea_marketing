// // Function to make the Zeta API call
// export const sendZetaAPIRequest = async () => {
//       const zetaEndpoint = 'https://api.zetaglobal.net/ver2/partner-dev-tap-cxm/activities';
//       const zetaUsername = 'api';
//       const zetaPassword = 'b086689ce02a877850244af1e35e906b';
//       const apiKey = '5fdb6ce56e78867987aeda63399ada00';
  
//       const basicAuth = btoa(`${zetaUsername}:${zetaPassword}`);
  
//       return fetch(zetaEndpoint, {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           'Authorization': `Basic ${btoa(`api:${apiKey}`)}`,
//     },
//         body: JSON.stringify({
//           activity: {
//             subscriber: {
//               uid: 'frodo.baggins', // Replace with actual subscriber UID
//             },
//             event: 'unsubscribed',
//             timestamp: new Date().toISOString(),
//             properties: {
//               location: 'mount_doom', // Replace with actual location value
//               ring_owner: 'sauron', // Replace with actual ring owner value
//               product_owner: 'Natasha', // Replace with actual product owner value
//             },
//           },
//         }),
//       });
//   }
  