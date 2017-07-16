/// <reference path="../dxdrawlibtest.d.ts" />

API.onResourceStart.connect(function() {
    API.sendChatMessage("~r~[DxDrawLibRes] Starting testing resource...");
});

var testWindow = new DxWindow("Testwindow", 0.5, 0.5, 0.25, 0.25, true);;
testWindow.visible = false;
var drawbool = false;

API.onKeyDown.connect(
	function (sender, e) {
		if (e.KeyCode == Keys.F9) {
			//testWindow = new DxWindow("Testwindow", 0.5, 0.5, 0.25, 0.25, true);
			drawbool = true;
			testWindow.visible = !testWindow.visible;
			//API.sendChatMessage(testWindow.title + " " + testWindow.X.toString() + " " + testWindow.Y.toString());
			//API.sendChatMessage(testWindow.width.toString() + " " + testWindow.height.toString());
			//API.sendChatMessage();
		}
	}
);

API.onUpdate.connect(
	function () {
		testWindow.draw();
		if (drawbool) {
			
		}
	}
);