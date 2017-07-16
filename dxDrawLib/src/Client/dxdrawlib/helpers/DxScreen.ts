/// <reference path="../../dxdrawlib.d.ts" />

class DxScreen {
	static width: number;
	static height: number;
}

API.onResourceStart.connect(
	function () {
		DxScreen.width = API.getScreenResolution().Width;
		DxScreen.height = API.getScreenResolution().Height;
	}
);
