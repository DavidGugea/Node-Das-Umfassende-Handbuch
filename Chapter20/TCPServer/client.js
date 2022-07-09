import { connect } from 'net';

const port = 8080;
const host = '127.0.0.1';

const client = connect({ port, host }, () => {
    client.end("Hello Server!");
});