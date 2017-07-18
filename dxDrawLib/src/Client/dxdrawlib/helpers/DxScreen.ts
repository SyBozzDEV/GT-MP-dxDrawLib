/// <reference path="../../dxdrawlib.d.ts" />

class DxScreen {
	static width: number = API.getScreenResolutionMaintainRatio().Width;
	static height: number = API.getScreenResolutionMaintainRatio().Height;
	static RadioButtonGroups: DxRadioButtonGroups = new DxRadioButtonGroups();
	
	static vRatio: number;
	static hRatio: number;
	
	public static Init() {
		let baseWidth = 1920;
		let baseHeight = 1080;
		
		let resolution = API.getScreenResolution();

		DxScreen.vRatio = resolution.Height / baseHeight;
		DxScreen.hRatio = resolution.Width / baseWidth;
		
	}

	public static maintainVertical(height: number): number {
		return height / DxScreen.vRatio;
	}

	public static maintainHorizontal(width: number): number {
		return width / DxScreen.hRatio;
	}
	
}

DxScreen.Init();
