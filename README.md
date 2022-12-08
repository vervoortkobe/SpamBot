# SpamBot  
An automated script to spam chat messages.  
It types your message out and presses enter wherever your mouse-pointer is.  
  
## py  
### Usage  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; range(10) stands for iteration count (how many times it will run)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Change the for-loop to a while-loop (while(true): ...) to set the iteration count to infinite.  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; Change the "str(i)" to another string ("...") to send your own message.  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; sleep(1) stands for 1s wait time (change to another value if wanted)
### Installation  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; python has to be installed for it to work (obviously).  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; pip has to be installed to install the required libraries/packages.  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; Don't forget to set python to environment variables table!  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Go to system variables -> Path -> New -> Paste path to your python installation (FOR ME: C:\Users\xxxx\AppData\Local\Programs\Python\Python310\) -> New -> Paste path to your python installation scripts (FOR ME: C:\Users\Gebruiker\AppData\Local\Programs\Python\Python310\Scripts\)  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; Run `pip install pyautogui` in your console/terminal  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; Run `pip install keyboard` in your console/terminal  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; To start the script, simply run `py main.py` in your console/terminal  
  
## nodejs  
### Usage  
&nbsp;&nbsp;&nbsp;&nbsp; Almost the same as the py version:  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; Change the "6" to the iteration count wanted (how many times it will run)  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; Change the "5000" to the wait time wanted in s  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; Change the "discord" to another string ("...") to send your own message.  
### Installation  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; nodejs (or usage with nvm) has to be installed for it to work (obviously).  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; npm has to be installed to install the required libraries/packages.  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; Don't forget to set nodejs (or nvm if used) to environment variables table!  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Go to system variables -> Path -> New -> Paste path to your nodejs installation (FOR ME: C:\Program Files\nodejs)  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; Run `npm install node-gyp` in your console/terminal  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; node-gyp has to be installed correctly for the nodejs version to work (needed for robotjs)!!!  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To install node-gyp, you need a python installation and some MSVS installations as well; don't forget to configure those!)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (You might also install node-gyp globally, as it's easier to use in the future, by doing `npm install -g node-gyp`.)  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; Run `npm install robotjs` in your console/terminal  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (You might also install robotjs globally, as it's easier to use in the future, by doing `npm install -g robotjs`.)  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; To start the script, simply run `node index.js` in your console/terminal  
### Development  
&nbsp;&nbsp;&nbsp;&nbsp;&bull; When rebuilding, using `node-gyp rebuild`, make sure you are in the `./node_modules/robotjs/` folder (cd), as the binding.gyp file is located somewhere in there!  
