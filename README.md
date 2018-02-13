# CROSS PLATFORM MOVIE PLAYER WITH ELECTRON JS AND REACT JS.

The application needs a folder filled with categories and movies in this pattern:

- main_folder
	- name_of_category_folder
		- image
			- movie_title.png 
		- video
			- movie_title.mp4
---
You can change the main_folder path inside index.js at MOVIES_PATH const.

# Here some examples:
![alt text](https://raw.githubusercontent.com/leartgjoni/electron-js-video-player/master/examples/screen1.png)
![alt text](https://raw.githubusercontent.com/leartgjoni/electron-js-video-player/master/examples/screen2.png)
![alt text](https://raw.githubusercontent.com/leartgjoni/electron-js-video-player/master/examples/screen3.png)

# How to run the app
TO RUN IN DEV:
1. npm start (to run react server)
2. npm run electron-dev

TO RUN IN PRODUCTION:
1. npm run build (to build react into static files)
2. npm run electron

TO PACKAGE:
1. npm run build
2. electron-packager project_folder_name app_name (--asar)

# Don't forget to star this repo ;)
