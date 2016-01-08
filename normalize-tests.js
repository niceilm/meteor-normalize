describe('normalize', function() {
  beforeAll(function() {
    VelocityHelpers.exportGlobals();
  });

  it("limit", function() {
    expect(Normalize.limit(100, 100)).toBe(100);
    expect(Normalize.limit(120, 100)).toBe(100);
    expect(Normalize.limit(150, 100)).toBe(100);
    expect(Normalize.limit(220, 100)).toBe(200);
  });

  it("date", function() {
    var baseDate = new Date("2015-12-25 13:34:22");
    expect(Normalize.date(baseDate).getFullYear()).toBe(2015);
    expect(Normalize.date(baseDate).getMonth()).toBe(11);
    expect(Normalize.date(baseDate).getDate()).toBe(25);
    expect(Normalize.date(baseDate).getMinutes()).toBe(0);
    expect(Normalize.date(baseDate).getSeconds()).toBe(0);
  });
});