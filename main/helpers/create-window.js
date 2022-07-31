import {
  screen,
  BrowserWindow,
  ipcMain,
  dialog,
} from 'electron';
import Store from 'electron-store';

export default function createWindow(windowName, options) {
  const key = 'window-state';
  const name = `window-state-${windowName}`;
  const store = new Store({ name });
  const defaultSize = {
    width: options.width,
    height: options.height,
  };
  let state = {};
  let win;

  const restore = () => store.get(key, defaultSize);

  const getCurrentPosition = () => {
    const position = win.getPosition();
    const size = win.getSize();
    return {
      x: position[0],
      y: position[1],
      width: size[0],
      height: size[1],
    };
  };

  const windowWithinBounds = (windowState, bounds) => {
    return (
      windowState.x >= bounds.x &&
      windowState.y >= bounds.y &&
      windowState.x + windowState.width <= bounds.x + bounds.width &&
      windowState.y + windowState.height <= bounds.y + bounds.height
    );
  };

  const resetToDefaults = () => {
    const bounds = screen.getPrimaryDisplay().bounds;
    return Object.assign({}, defaultSize, {
      x: (bounds.width - defaultSize.width) / 2,
      y: (bounds.height - defaultSize.height) / 2
    });
  };

  const ensureVisibleOnSomeDisplay = (windowState) => {
    const visible = screen.getAllDisplays().some(display => {
      return windowWithinBounds(windowState, display.bounds)
    });
    if (!visible) {
      // Window is partially or fully not visible now.
      // Reset it to safe defaults.
      return resetToDefaults();
    }
    return windowState;
  };

  const saveState = () => {
    if (!win.isMinimized() && !win.isMaximized()) {
      Object.assign(state, getCurrentPosition());
    }
    store.set(key, state);
  };

  state = ensureVisibleOnSomeDisplay(restore());

  win = new BrowserWindow({
    ...options,
    ...state,
    icon:'resources/best-global-logo.ico'
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      ...options.webPreferences,
    },
  });

  win.on('close', saveState);

  ipcMain.handle("showDialog", (e, message) => {
    dialog.showErrorBox( 'Error en datos ingresados', message)
  })

  ipcMain.handle("showConfirmation", async (e, message) => {
    let option = {
      buttons: ["Yes","No"],
      message: message,
      title: "Confirmar",
      type: "question",
      cancelId: 1,
     }
     let window = e.sender.getOwnerBrowserWindow()
     let result = await dialog.showMessageBox(window, option)
     return result
  })

  return win;
};
