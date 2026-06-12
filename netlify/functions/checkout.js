exports.handler = async (event) => {
  const params = event.queryStringParameters || {};
  const productsParam = params.products || '';

  const productMap = {
    '675c7dada75d8b573bd9ef72': 'alpha',
    '675c80a984cc816fc3335b84': 'beta',
    '675c810fa5c9013d84ff4a9d': 'theta',
    '68855d0e41a7fe0160320ed0': 'sample',
  };

  if (!productsParam) {
    return {
      statusCode: 302,
      headers: { Location: 'https://portalcandle.com/shop', 'Cache-Control': 'no-cache' },
    };
  }

  const firstEntry = productsParam.split(',')[0];
  const [productId] = firstEntry.split(':');
  const slug = productMap[productId];

  return {
    statusCode: 302,
    headers: {
      Location: slug ? `https://portalcandle.com/shop/p/${slug}` : 'https://portalcandle.com/shop',
      'Cache-Control': 'no-cache',
    },
  };
};
