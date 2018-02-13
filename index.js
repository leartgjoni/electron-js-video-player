const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
const fs = require('fs');
const MOVIES_PATH = `${__dirname}/public/movies` /*'C:\\movies'*/;
const PAGINATION_STEP = 12;

let mainWindow;
let categories;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ /*skipTaskbar: true*/ });
  mainWindow.setFullScreen(true);

  const startUrl = process.env.ELECTRON_START_URL || `file://${__dirname}/build/index.html`;
  mainWindow.loadURL(startUrl);
});

ipcMain.on('getCategories', () => {
  fs.readdir(MOVIES_PATH, function(err, items){
    categories = items;
    mainWindow.webContents.send('categories', categories);
  });
});

ipcMain.on('getMovies', (event, { category_id, page }) => {
  const CATEGORY_FOLDER = categories[category_id];
  const FOLDER_PATH = (process.env.ELECTRON_START_URL) ? `/movies/${CATEGORY_FOLDER}` : `file://${MOVIES_PATH}/${CATEGORY_FOLDER}`;
  const PATH = `${MOVIES_PATH}/${CATEGORY_FOLDER}/image`;
  fs.readdir(PATH, function(err, items){
    const length = (items) ? items.length : 0;
    const maxPage = Math.ceil(length / PAGINATION_STEP);
    const movies = (items) ? items.slice( (page-1) * PAGINATION_STEP, page * PAGINATION_STEP) : null;
    mainWindow.webContents.send('movies', { movies, maxPage, FOLDER_PATH });
  });
});
