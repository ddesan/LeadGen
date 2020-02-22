const MAILCHIMP_URL = `https://r9gewflsa6.execute-api.us-east-1.amazonaws.com/dev`

class MailChimp {

    static async submitEmailForm(form) {
        fetch(`${MAILCHIMP_URL}/audience`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: form
        })
        .then((response) => {
            console.log("SUCCESSFUL", response)
        })
        .catch(error => {
            console.log(error)
        });
    }

}

export default MailChimp
