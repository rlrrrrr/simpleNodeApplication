const sayMyWord = require("..");

test('shouldSayMyWord', function () {
    expect(sayMyWord("test")).toBe("test");
});
