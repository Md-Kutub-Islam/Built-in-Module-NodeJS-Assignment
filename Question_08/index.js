// 08 Let's simulate a subscription feature similar to YouTube1 Using the events module, we'll create a custom
// event named "subscribe"1 When this event is triggered, it should display a message in the console indicating
// that the user has subscribed1

const event = require('events')

const eventEmitter = new event()

const subscribeMassage = (channelName) => {
    console.log('Thankyou For subscribing to ' + channelName);
}

eventEmitter.addListener('subscribe', subscribeMassage)

eventEmitter.emit('subscribe', 'College Wallah')