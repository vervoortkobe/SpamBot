import pyautogui;
import keyboard;
import time;

for i in range(10):
  time.sleep(1);
  pyautogui.typewrite(str(i));
  keyboard.press_and_release("enter");
