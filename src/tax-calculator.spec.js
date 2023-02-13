const test = require("tape");
const target = require("./tax-calculator", {});

test("tax calculator", (t) => {
  t.test("no tax is paid on income below £12,570", (assert) => {
    assert.plan(1);
    const actual = target.calculate(12569);
    assert.equals(actual, 0, "Tax should be zero");
  });

  t.test("Basic rate tax (20%) is paid on income above £12,570", (assert) => {
    assert.plan(1);
    const actual = target.calculate(13000);
    assert.equals(actual, 86, "Tax should be £86 (20% of £430)");
  });

  t.test("Basic rate tax (20%) and higher rate tax (40%) is paid on income above £50,270", (assert) => {
    assert.plan(1);
    const actual = target.calculate(100000);
    assert.equals(actual, 27432, "Tax should be £27,432 (20% of £37,700 + 40% of £49,730)");
  });

  // There is some complexity around the personal allowance above £150,000 - this is ignored for the purpose of this test
  t.test("Basic rate tax (20%), higher rate tax (40%) and additional rate tax (45%) is paid on income above £150,000", (assert) => {
    assert.plan(1);
    const actual = target.calculate(200000);
    assert.equals(actual, 69932, "Tax should be 69932 (20% of £37,700 + 40% of £99,729 + 45% of 50000)");
  });
});