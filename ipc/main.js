const {app, BrowserWindow, Notification, ipcMain} = require('electron');

let win;
let win2;

app.on('ready', () => {
    win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('./index.html');
    win.webContents.openDevTools();

    win2 = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win2.loadFile('./index2.html');
    win2.webContents.openDevTools();

    global.sharedObject = {
        win2WebContantsId: win2.webContents.id
    }

    setTimeout(handleIPC, 3 * 1000)  // 这儿有个时序问题，得等渲染进程渲染完，才能处理主进程往渲染进程发的消息
});

function handleIPC() {
//     ipcMain.on('do-some-work', (e, a, b) => {
//         console.log('do-some-work', a, b);
//     });

//     win.webContents.send('do-some-render-work')
}