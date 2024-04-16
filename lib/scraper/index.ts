export async function srcapeAmazonProduct(url: string) {
  if (!url) return;

  // Brightdata proxy configuration
  const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;
  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
  };
}

// curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_414fe7f4-zone-scrap_baba:g06088s9rauh -k "http://lumtest.com/myip.json"
