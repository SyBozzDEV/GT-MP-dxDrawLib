/// <reference path="../dxdrawlibtest.d.ts" />

API.onResourceStart.connect(function() {
    API.sendChatMessage("~r~[DxDrawLibRes] Starting testing resource...");
});

var testWindow = new DxWindow("Testwindow", 0.4, 0.4, 0.35, 0.25, true, new Color(100));
//var childWindow = new DxWindow("Children", 0.1, 0, 0.5, 0.2, true, null, testWindow);
var testButton = new DxButton("Button", 0, 0, 0.25, 0.2, null, null, testWindow);
//var testWindow = new DxButton("Button", 0, 0, 1, 1, null, null);
var testRadioButton = new DxRadioButton("RadioBtn", "key_1", 0.1, 0.5, 0.1, 0.1, true, true, new Color(255, 0, 255, 0), testWindow);
var testRadioButton2 = new DxRadioButton("RadioBtn", "key_2", 0.1, 0.61, 0.1, 0.1, true, true, new Color(255, 0, 255, 0), testWindow);

//testRadioButton.selected = true;

testRadioButton2.group = "key_1";

API.onKeyDown.connect(
	function (sender, e) {
		if (e.KeyCode == Keys.F9) {
			//testRadioButton2.parent = testWindow;
			testWindow.closeButton = true;
			testWindow.movable = true;
			testWindow.debug = true;
			//childWindow.moveable = true;
			testWindow.visible = !testWindow.visible;
			API.showCursor(testWindow.visible);
			//API.showCursor(!API.isCursorShown());
			//childWindow.parent = null;
		}
	}
);

/*
API.onUpdate.connect(
	function () {
		testWindow.draw();
		//childWindow.draw();
	}
);*/
