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

        // Check if shoppingCartItems is defined before mapping over it
        const purchasedItems = shoppingCartItems ? shoppingCartItems.map(item => ({
          id: item.id,
          resourceType: item.resourceType,
          price: item.price,
          quantity: item.quantity,
          itemName: item.name, 
          itemImage: item.image 
        })) : [];

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

        // Clear the cart after tracking the purchase event
        // setCart([]);

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


const trackAbandonedCartEvent = (cartData) => {

  // Extract relevant data from cartData
  const { promoCode, discountedTotal, shoppingCartItems, firstName, lastName, email } = cartData;

  // Check if shoppingCartItems is present before attempting to map
  const cartItemList = shoppingCartItems ? shoppingCartItems.map(item => ({
    id: item.id,
    resourceType: item.resourceType,
    price: item.price,
    quantity: item.quantity,
    itemName: item.name || '',
    itemImage: item.image || '',
  })) : [];

  // Calculate the total price of the cart
  const totalCartPrice = cartItemList.reduce((total, item) => total + (item.price * item.quantity), 0);


  // Track the abandoned cart event using Zeta
  window.bt('track', 'abandoned_cart', {
    shoppingCartItems: cartItemList,
    promoCode: promoCode || '', // Use actual coupon code or empty string
    discountedTotal: discountedTotal || 0, // Use actual discounted total or 0
    firstName: firstName || '', // Use actual first name or empty string
    lastName: lastName || '', // Use actual last name or empty string
    email: email || '', // Use actual email or empty string
    totalCartPrice: totalCartPrice || 0, // Add the total price of the cart
  });

  console.log("Zeta abandoned cart event fired");
};


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

export { initializeZeta, trackSignedUpEvent, trackPurchaseEvent, trackPageTimeSpent, trackAbandonedCartEvent};