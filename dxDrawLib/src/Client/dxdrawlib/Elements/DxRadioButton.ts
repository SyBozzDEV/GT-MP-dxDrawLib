/// <reference path="../../dxdrawlib.d.ts" />

class DxRadioButton extends DxElement {

	constructor(public text: string, public group: string, X: number, Y: number, width: number, height: number, public selected: boolean = false, relative?: boolean, color?: Color, parent?: DxElement) {
		super(X, Y, width, height, relative, color, parent);
	}

	public draw(): void {
		if (this.visible) {
			this.calculate();

		}
	}

	protected calculate(): void {

	}
}
