const MAILCHIMP_URL = `https://r9gewflsa6.execute-api.us-east-1.amazonaws.com/dev`

//const MAILCHIMP_URL = `http://localhost:3000/dev`

class MailChimp {

  static async submitEmailForm(form) {

    const res = await fetch(`${MAILCHIMP_URL}/audience`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(form)
    })
    if (res.status >= 400 && res.status < 600) {
      const errMessage = await res.json()
      throw new Error(errMessage.message)
    }
    return await res.json()
  }

}

export default MailChimp
