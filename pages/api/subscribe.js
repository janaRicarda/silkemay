export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({message: "Method not allowed"});
  }
  
    const {email} =  req.body;

    if (!email) {
      return res.status(400).json({error: "Email is required"});
    }

      const API_KEY = process.env.MAILCHIMP_KEY;
      const SERVER_PREFIX = process.env.MAILCHIMP_SERVER;
      const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

      const data = {
        email_address: email,
        status: "subscribed",
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

    const responseData = await response.json();
      if (response.status >= 400) {
        switch (responseData.title) {
          case "Member Exists":
          return res.status(400).json({message: "Sie sind bereits angemeldet. Das freut uns sehr!"});
          case "Invalid Resource":
          return res.status(400).json({message: "Die Email-Adresse ist leider ungültig"});
          default:
          return res.status(400).json({message: "Leider ist etwas schiefgelaufen. Bitte versuchen Sie es zu einem späteren Zeitpunkt erneut."});
        }
      } 
      return res.status(201).json({message: "Ihre Anmeldung war erfolgreich! Schauen Sie bitte in Ihrem Email Postfach nach, um die Anmeldung zu bestätigen."});
  }
