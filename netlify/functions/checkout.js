exports.handler = async (event) => {
  const params = event.queryStringParameters || {};
  const productsParam = params.products || '';

  if (!productsParam) {
    return {
      statusCode: 302,
      headers: { Location: 'https://portalcandle.com/shop', 'Cache-Control': 'no-cache' },
    };
  }

  return {
    statusCode: 302,
    headers: {
      Location: `https://portalcandle.com/shop?meta_products=${encodeURIComponent(productsParam)}`,
      'Cache-Control': 'no-cache',
    },
  };
};
