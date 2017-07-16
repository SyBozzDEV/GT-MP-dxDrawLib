/// <reference path="../dxdrawlibtest.d.ts" />

API.onResourceStart.connect(function() {
    API.sendChatMessage("~r~[DxDrawLibRes] Starting testing resource...");
});

var testWindow = new DxWindow("Testwindow", 0.4, 0.4, 0.35, 0.25, true, new Color(100));

API.onKeyDown.connect(
	function (sender, e) {
		if (e.KeyCode == Keys.F9) {
			testWindow.closeButton = true;
			testWindow.moveable = true;
			testWindow.visible = !testWindow.visible;
			API.showCursor(testWindow.visible);
		}
	}
);

API.onUpdate.connect(
	function () {
		testWindow.draw();
	}
);