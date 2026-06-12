exports.handler = async (event) => {

  const params = event.queryStringParameters || {};
  const productsParam = params.products || '';

  // If no products passed, just go to the shop
  if (!productsParam) {
    return {
      statusCode: 302,
      headers: {
        Location: 'https://portalcandle.com/shop',
        'Cache-Control': 'no-cache',
      },
    };
  }

  // Meta sends: products=PRODUCT_ID:QUANTITY,PRODUCT_ID2:QUANTITY2
  // Example:    products=675c810fa5c9013d84ff4a9d:1,675c80a984cc816fc3335b84:2
  const productEntries = productsParam.split(',');

  // Take the first product (Squarespace addProductId supports one at a time)
  const firstEntry = productEntries[0];
  const [productId, quantity] = firstEntry.split(':');

  // Build the Squarespace cart URL
  const redirectUrl = `https://portalcandle.com/cart?addProductId=${encodeURIComponent(productId)}&quantity=${encodeURIComponent(quantity || '1')}`;

  return {
    statusCode: 302,
    headers: {
      Location: redirectUrl,
      'Cache-Control': 'no-cache',
    },
  };

};
