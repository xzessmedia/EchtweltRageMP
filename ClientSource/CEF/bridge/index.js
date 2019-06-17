let browser

mp.events.add('guiReady', () => {
    browser = mp.browsers.new('package://ui/index.html')
})

// Handle event from server and send data to react app
mp.events.add('onMessageFromServer', (value) => {
    browser.execute(`trigger('onMessage', '${value}')`)
})

// Handle event from react app
mp.events.add('showUrl', (url) => {
    mp.gui.chat.push(url)
})

// F12 - trigger cursor
mp.keys.bind(0x7B, true, () => {
    let state = !mp.gui.cursor.visible
    mp.gui.cursor.show(state, state)
})