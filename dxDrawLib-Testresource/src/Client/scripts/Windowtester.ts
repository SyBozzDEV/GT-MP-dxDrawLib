/// <reference path="../dxdrawlibtest.d.ts" />

API.onResourceStart.connect(function() {
    API.sendChatMessage("~r~[DxDrawLibRes] Starting testing resource...");
});

var testWindow = new DxWindow("Testwindow", 0.4, 0.4, 0.35, 0.25, true, new Color(100));
var childWindow = new DxWindow("Children", 0.1, 0, 0.5, 0.2, true, null, testWindow);
var testButton = new DxButton("ButtonButton", 0.1, 0.25, 0.15, 0.1, null, null, testWindow);
//var testWindow = new DxButton("Button", 0, 0, 1, 1, null, null);

API.onKeyDown.connect(
	function (sender, e) {
		if (e.KeyCode == Keys.F9) {
			//testWindow.closeButton = true;
			//testWindow.moveable = true;
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
		/*API.drawRectangle(502, 517, 38, 43, 0, 0, 0, 200);
		API.drawText("A", 500, 500, 1, 255, 255, 255, 255, 0, 0, false, false, 0);
		API.drawRectangle(tx, ty + (15 * ts), (38 * ts), (43 * ts), 0, 0, 0, 200);
		API.drawText("B", tx, ty, ts, 255, 255, 255, 255, 0, 0, false, false, 0);
		if (API.isCursorShown()) {
			var mPos = API.getCursorPositionMaintainRatio();
			if (API.isDisabledControlJustPressed(24)) {
				API.sendChatMessage("maus: " + mPos.ToString());
			}
		}*/
	}
);
