// 10 In continuation of the 8th question, let's now explore the concept of the maximum number of listeners
// allowed for event handlers1 For this coding challenge, your task is to determine the current maximum
// number of event listeners associated with an event and then set the maximum number of event listeners to
// 5 Note that the default maximum number of listeners might vary1 Your task is to limit the number of listeners
// to 5

const { channel } = require('diagnostics_channel')
const event = require('events')

const eventEmitter = new event()

const subscribeMassage = (channelName) => {
    console.log("Thankyou for subscribing to " + channelName);
}

eventEmitter.addListener("subscribe", subscribeMassage)

eventEmitter.emit("subcribe", "College Wallah")

console.log("The defualt maximum number of event listners are: " + eventEmitter.getMaxListeners());

eventEmitter.setMaxListeners(5)

console.log("The updated maximum number of event listners are: " + eventEmitter.getMaxListeners());