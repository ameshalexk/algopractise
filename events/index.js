// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {}
  }
  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}


const divEvents = new Events()

divEvents.on('click', () => {
  console.log('i have been clicked')
}),
divEvents.on('click', () => {
  console.log('i have been clicked again')
})
divEvents.on('submit', () => {
  console.log('i have been clicked again')
})
divEvents.trigger('click')
console.log(divEvents.events)
divEvents.off('click')
console.log(divEvents.events)

module.exports = Events;
