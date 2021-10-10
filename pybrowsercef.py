from kivy.app import App
from libtest import CefBrowser, CefBrowserApp
import threading as td
import time

from cefpython3 import cefpython as cef
from pynput.keyboard import Key, Controller


# class CefBrowserApp(App):
#     def build(self):
#         return CefBrowser(start_url="http://localhost:5000")


stop = True
keyboard = Controller()


def game_thread():
    while stop:
        time.sleep(1)
        keyboard.press(Key.up)
        keyboard.release(Key.up)


loop_thread = td.Thread(target=game_thread)
loop_thread.start()

cef.Shutdown()
CefBrowserApp().run()
cef.Shutdown()
stop = False
