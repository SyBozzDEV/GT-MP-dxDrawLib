/// <reference path="../dxdrawlibtest.d.ts" />
let testWindow: DxWindow;
let testButton: DxButton;
let testRadioButton1: DxRadioButton;
let testRadioButton2: DxRadioButton;

API.onResourceStart.connect(function() {
    API.sendChatMessage("~r~[DxDrawLibRes] Starting testing resource...");

	testWindow = new DxWindow("Testwindow", 0.4, 0.4, 0.35, 0.25, true, new Color(100));
	//var childWindow = new DxWindow("Children", 0.1, 0, 0.5, 0.2, true, null, testWindow);
	testButton = new DxButton("ButtonButton", 0, 0, 0.25, 0.2, null, null, testWindow);
	//var testWindow = new DxButton("Button", 0, 0, 1, 1, null, null);
	testRadioButton1 = new DxRadioButton("RadioButton", "key_1", 0.1, 0.5, 0.17, 0.1, true, true, new Color(255, 0, 255, 0), testWindow);
	testRadioButton2 = new DxRadioButton("RadioButton", "key_2", 0.1, 0.61, 0.1, 0.1, true, true, new Color(255, 0, 255, 0), testWindow);
    
	var testCheckbox1 = new DxCheckbox("Checkbox", 0.5, 0, 0.1, 0.1, true, true, null, testWindow);
    var testCheckbox2 = new DxCheckbox("Checkbox", 0.5, 0.11, 0.2, 0.1, false, true, null, testWindow);
    
    var testRadioButton3 = new DxRadioButton("RadioButton", "key_2", 0.5, 0.5, 0.17, 0.1, true, true, new Color(255, 0, 255, 0), testWindow);
    var testRadioButton4 = new DxRadioButton("RadioButton", "key_2", 0.5, 0.61, 0.1, 0.1, true, true, new Color(255, 0, 255, 0), testWindow);

    testRadioButton2.group = "key_1";
    testRadioButton2.pointOffset = 0.5;


    testButton.onClick = function() { API.sendChatMessage("Hello World"); };
    
});

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
