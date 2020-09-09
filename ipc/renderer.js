const {ipcRenderer, remote} = require('electron');

// ipcRenderer.send('do-some-work', 1, 2);

// ipcRenderer.on('do-some-render-work', () => {
//     alert('do some work');
// })

// 渲染进程间通信-- demo 失败
let sharedObject = remote.getGlobal('sharedObject');
let win2WebContantsId = sharedObject.win2WebContantsId;

ipcRenderer.sendTo(win2WebContantsId, 'do-some-work', 1);