const MAILCHIMP_URL = `https://r9gewflsa6.execute-api.us-east-1.amazonaws.com/dev`
//const MAILCHIMP_URL = `http://localhost:3000/dev`

class MailChimp {

    static async submitEmailForm(form) {
        const res = await fetch(`${MAILCHIMP_URL}/audience`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        })
        return res
    }

}

export default MailChimp
