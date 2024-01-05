// zetaTracking.js

// const initializeZeta = () => {
//   if (window.bt) {
//     return;
//   }

//   const SITEID = 'partner-dev-tap-cxm';

//   (function(b, t, r, a, i, n) {
//     b['bt'] = b['bt'] || function() {
//       (b['_bt'] = b['_bt'] || []).push(arguments);
//     };
//     i = t.createElement(r);
//     n = t.getElementsByTagName(r)[0];
//     i.async = 1;
//     i.src = a;
//     n.parentNode.insertBefore(i, n);
//   })(
//     window, document, 'script', 'https://cdn.boomtrain.com/p13n/' + SITEID + '/p13n.min.js'
//   );

//   window.bt('initialize', SITEID, { externalIds: { zync: '96d8021c-68c9-4db0-8a67-d852e51e949b:1675772676.7032254' } });
//   console.log("Zeta library initialized");
// };

// const trackSignedUpEvent = (userData) => {
//   return new Promise((resolve, reject) => {
//     try {
//       initializeZeta();

//       // Track the signed-up event using Zeta
//       window.bt('track', 'signed_up', userData);
//       console.log("Zeta signed-up event fired");
//       resolve();
//     } catch (error) {
//       reject(error);
//     }
//   });
// };


// const trackPurchaseEvent = (purchaseData) => {
//   return new Promise((resolve, reject) => {
//     try {
//       initializeZeta();

//       // Extract data from purchaseData
//       const {
//         promoCode,
//         discountedTotal,
//         shoppingCartItems,
//         firstName,
//         lastName,
//         email,
//         purchaseTime
//       } = purchaseData;

//       // Create a formatted list of purchased items
//       const purchasedItems = shoppingCartItems.map(item => ({
//         id: item.id,
//         resourceType: item.resourceType,
//         price: item.price,
//         quantity: item.quantity
//       }));

//       // Track the purchase event using Zeta
//       window.bt('track', 'purchased', {
//         shoppingCartItems: purchasedItems,
//         promoCode: promoCode || '', // Use actual coupon code or empty string
//         discountedTotal: discountedTotal || 0, // Use actual discounted total or 0
//         firstName: firstName || '', // Use actual first name or empty string
//         lastName: lastName || '', // Use actual last name or empty string
//         email: email || '', // Use actual email or empty string
//         purchaseTime: purchaseTime || new Date().toISOString() // Use actual purchase time or current time
//       });

//       console.log("Zeta purchased event fired");
//       resolve();
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// export { initializeZeta, trackSignedUpEvent, trackPurchaseEvent };



// zetaTracking.js

let btInitialized = false;
let btCallbacks = [];

const initializeZeta = () => {
  if (window.bt) {
    btInitialized = true;
    btCallbacks.forEach((callback) => callback());
    return;
  }

  const SITEID = 'partner-dev-tap-cxm';

  (function (b, t, r, a, i, n) {
    b['bt'] = b['bt'] || function () {
      (b['_bt'] = b['_bt'] || []).push(arguments);
    };
    i = t.createElement(r);
    n = t.getElementsByTagName(r)[0];
    i.async = 1;
    i.src = a;
    n.parentNode.insertBefore(i, n);
  })(
    window, document, 'script', 'https://cdn.boomtrain.com/p13n/' + SITEID + '/p13n.min.js'
  );

  window.bt('initialize', SITEID, { externalIds: { zync: '96d8021c-68c9-4db0-8a67-d852e51e949b:1675772676.7032254' } });
  console.log("Zeta library initialized");
  btInitialized = true;
  btCallbacks.forEach((callback) => callback());
  btCallbacks = []; // Clear the callbacks
};


const trackSignedUpEvent = (userData) => {
  return new Promise((resolve, reject) => {
    if (btInitialized) {
      try {
        // Track the signed-up event using Zeta
        window.bt('track', 'signed_up', userData);
        console.log("Zeta signed-up event fired");
        resolve();
      } catch (error) {
        reject(error);
      }
    } else {
      // Queue the callback for when bt is initialized
      btCallbacks.push(() => {
        trackSignedUpEvent(userData).then(resolve).catch(reject);
      });
    }
  });
};

const trackPurchaseEvent = (purchaseData) => {
  return new Promise((resolve, reject) => {
    if (btInitialized) {
      try {
        // Extract data from purchaseData
        const {
          promoCode,
          discountedTotal,
          shoppingCartItems,
          firstName,
          lastName,
          email,
          purchaseTime
        } = purchaseData;

        // Create a formatted list of purchased items
        const purchasedItems = shoppingCartItems.map(item => ({
          id: item.id,
          resourceType: item.resourceType,
          price: item.price,
          quantity: item.quantity
        }));

        // Track the purchase event using Zeta
        window.bt('track', 'purchased', {
          shoppingCartItems: purchasedItems,
          promoCode: promoCode || '', // Use actual coupon code or empty string
          discountedTotal: discountedTotal || 0, // Use actual discounted total or 0
          firstName: firstName || '', // Use actual first name or empty string
          lastName: lastName || '', // Use actual last name or empty string
          email: email || '', // Use actual email or empty string
          purchaseTime: purchaseTime || new Date().toISOString() // Use actual purchase time or current time
        });

        console.log("Zeta purchased event fired");
        resolve();
      } catch (error) {
        reject(error);
      }
    } else {
      // Queue the callback for when bt is initialized
      btCallbacks.push(() => {
        trackPurchaseEvent(purchaseData).then(resolve).catch(reject);
      });
    }
  });
};


// for page_time_spent
// export const trackPage = (page, timeSpentInSeconds) => {
//   try {
//     // Track the page time spent using Zeta
//     window.bt('track', 'page_time_spent', {
//       page: page,
//       time_spent: timeSpentInSeconds,
//     });

//     console.log(`Zeta page time spent event for ${page} fired`);
//   } catch (error) {
//     console.error('Error tracking page time spent:', error);
//   }
// };

export const trackProlongedBrowsing = (page, timeSpentInSeconds, thresholdInSeconds) => {
  try {
    if (timeSpentInSeconds >= thresholdInSeconds) {
      // Track the prolonged browsing event using Zeta
      window.bt('track', `prolonged-browsing-${page}`, {
        page,
        time_spent: timeSpentInSeconds,
      });

      console.log(`Zeta prolonged browsing event for ${page} fired`);
    }
  } catch (error) {
    console.error('Error tracking prolonged browsing:', error);
  }
};

const trackPageTimeSpent = (page, timeSpentInSeconds) => {
  // Define an array of pages you want to track
  const pagesToTrack = ['milk-tea', 'fruit-tea', 'signature-drinks'];

  if (btInitialized && pagesToTrack.includes(page)) {
    try {
      // Track the page time spent using Zeta
      window.bt('track', 'page_time_spent', {
        page: page,
        time_spent: timeSpentInSeconds,
      });

      console.log(`Zeta page time spent event for ${page} fired`);
    } catch (error) {
      console.error('Error tracking page time spent:', error);
    }
  } else {
    // Queue the callback for when bt is initialized
    btCallbacks.push(() => {
      trackPageTimeSpent(page, timeSpentInSeconds);
    });
  }
};

export { initializeZeta, trackSignedUpEvent, trackPurchaseEvent, trackPageTimeSpent };