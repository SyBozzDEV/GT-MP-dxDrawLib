/// <reference path="../dxdrawlibtest.d.ts" />

API.onResourceStart.connect(function() {
    API.sendChatMessage("~r~[DxDrawLibRes] Starting testing resource...");
});

var testWindow = new DxWindow("Testwindow", 0.4, 0.4, 0.35, 0.25, true, new Color(100));
var childWindow = new DxWindow("Children", 0.1, 0, 0.5, 0.2, true, null, testWindow);
var testButton = new DxButton("Button", 0.1, 0.25, 0.25, 0.2, null, null, testWindow);
//var testWindow = new DxButton("Button", 0, 0, 1, 1, null, null);

API.onKeyDown.connect(
	function (sender, e) {
		if (e.KeyCode == Keys.F9) {
			testWindow.closeButton = true;
			testWindow.moveable = true;
			//childWindow.moveable = true;
			testWindow.visible = !testWindow.visible;
			API.showCursor(testWindow.visible);
			//API.showCursor(!API.isCursorShown());
		}
	}
);

var tx = 690;
var ty = 100;
var ts = 15;

API.onUpdate.connect(
	function () {
		testWindow.draw();
	}
);
