export function sendEmail(userEmail, subject, text) {
    // return fetch('http://localhost:3001/send-email', {
    return fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userEmail,
        subject,
        text,
      }),
    })
    .then(response => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
  }