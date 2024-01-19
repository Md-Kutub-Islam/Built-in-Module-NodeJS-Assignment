// 09 While working with the events module, one interesting observation is that when an event is created and
// called, the associated event handler is triggered1 However, what happens if we remove an event and then
// try to call it? In this coding challenge letes create an event handler and call it1 Later letes remove the event
// handler and observe what happens when we call it

const event = require('events')

const eventEmitter = new event()

const subscribeMassage = (channelName) => {
    console.log('Thankyou For subscribing to ' + channelName);
}

eventEmitter.addListener('subscribe', subscribeMassage)

console.log("Calling event listner before removing the event");
eventEmitter.emit('subscribe', 'College Wallah')

console.log("calling event after removing the event");
eventEmitter.removeListener("subscribe", subscribeMassage)

eventEmitter.emit('subscribe', 'College Wallah')
