import json
from flask import Flask, render_template, request, redirect, session, url_for, abort
from forex_python.converter import CurrencyCodes, CurrencyRates

app = Flask(__name__)
app.config["secret key"] = "yeah"
app.config["DEBUG_TB_INTERCEPT_REDIRECTS"] = False

responses_key = "responses"


@app.route("/", methods=["GET", "POST"])
def index():

    return render_template("form.html")


@app.errorhandler(Exception)
def exception_handler(err):
    return "this is not a valid currency" + repr(err)


currency_rates = CurrencyRates()


@app.route("/conversion", methods=["GET", "POST"])
def conversion():
    if request.method == "POST":
        print(request)
        print(json.dumps(request.form))
        convert_from = request.form.get("convert_from", None)
        convert_to = request.form.get("convert_to", None)
        amount = request.form.get("amount", None)
        print(convert_from, convert_to, amount)
        try:
            rate = currency_rates.convert(convert_from, convert_to, int(amount))
            print(rate)
            details = {
                "convert_from": convert_from,
                "convert_to": convert_to,
                "amount": amount,
                "rate": rate,
            }
            return render_template("result.html", values=details)

        except Exception:
            print("Value Entered for one or more fields was incorrct")
            return render_template("error.html")



if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
    app.run(debug=True)
