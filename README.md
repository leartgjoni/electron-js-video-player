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
![alt text](https://test_path/img.png)
![alt text](https://test_path/img.png)
![alt text](https://test_path/img.png)

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
