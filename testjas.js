it('should calculate the monthly rate correctly', function() {
    // ...
    const values = {
      amount: 20000,
      years: 10,
      rate: 6.0
    };
    expect(calculateMonthlyPayment(values)).toEqual('222.04');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 10012,
      years: 11,
      rate: 1.2
    };
    expect(calculateMonthlyPayment(values)).toEqual('81.00');
  });
  
  it("should handle terribly high interest rates", function() {
    const values = {
      amount: 10012,
      years: 11,
      rate: 99
    };
    expect(calculateMonthlyPayment(values)).toEqual('826.01');
  });