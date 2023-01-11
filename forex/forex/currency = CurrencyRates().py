from forex_python.converter import CurrencyRates

currency = CurrencyRates(force_decimal=False)

amount = int(input("Enter the Amount : " ))
    

from_curr = input("From Currency: ").upper()
to_curr = input("To Currency: ").upper()

print(from_curr, "To", to_curr, amount)

result = currency.convert(from_curr, to_curr, amount)

print("Conversion Amount:", result)
