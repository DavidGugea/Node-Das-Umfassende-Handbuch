import { WebSocketServer } from "ws";

function getName(connections, socket) {
    let name;

    for (const key in connections) {
        if (socket === connections[key]) {
            name = key;
        }
    }

    return name;
}

export default function init(app) {
    const connections = {};

    io.sockets.on(
        'connection',
        socket => {
            socket.on('msg', message => {
                const name = getName(connections, socket);

                const msg = {
                    name,
                    msg: message.msg
                };

                socket.emit('msg', msg);
                socket.broadcast.emit('msg', msg);
            });

            socket.on('join', message => {
                const name = getName(connections, socket);

                connections[message.name] = socket;

                const msg = { names: Object.keys(connecitions )};

                socket.emit('join', msg);
                socket.broadcast.emit('join', msg);
            });
        }
    )

    return function logout(user) {
        const msg = JSON.stringify({
            type: 'join',
            names: Object.keys(connections)
        });

        connections[user].broadcast.emit('join', msg);
        connections[user].disconnect();

        delete connections[user];
    }
}