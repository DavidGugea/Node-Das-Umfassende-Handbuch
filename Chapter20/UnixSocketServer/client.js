import { connect } from 'net';

const client = connect('/tmp/nodejs.sock', () => {
    console.log('Connected to the server');
    client.write("Hello server");
});