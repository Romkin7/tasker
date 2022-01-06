describe('Auth Routes testing', function () {
    test('responds to /login', () => {
        const req = { email: 'john.doe@test.com', password: '1234567890ABC' };

        const res = {
            text: '',
            send: function (input) {
                this.text = input;
            },
        };
        index(req, res);

        expect(res.text).toEqual('hello world!');
    });

    test('responds to /hello/:name', () => {
        const req = { params: { name: 'Bob' } };

        const res = {
            text: '',
            send: function (input) {
                this.text = input;
            },
        };
        hello(req, res);

        expect(res.text).toEqual('hello Bob!');
    });
});
