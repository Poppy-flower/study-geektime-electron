const {ipcRenderer} = require('electron');

ipcRenderer.on('do-some-work', (e, a) => {
    alert('do some work', a);
})