/// <reference path="../dxdrawlibtest.d.ts" />

API.onResourceStart.connect(function() {
    API.sendChatMessage("~r~[DxDrawLibRes] Starting testing resource...");
});

var testWindow = new DxWindow("Testwindow", 0.5, 0.5, 0.5, 0.25, true, new Color(100));

API.onKeyDown.connect(
	function (sender, e) {
		if (e.KeyCode == Keys.F9) {
			testWindow.visible = !testWindow.visible;
		}
	}
);

API.onUpdate.connect(
	function () {
		testWindow.draw();
	}
);