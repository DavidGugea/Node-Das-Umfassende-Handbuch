const target = new EventTarget();

target.addEventListener('customEvent', (event) => {
	console.log(`${event.type} was dispatched`);
});

const event = new Event('customEvent');

target.dispatchEvent(event);