/// <reference path="../../dxdrawlib.d.ts" />

class DxRadioButton extends DxElement {

	private _group: string;
	private _clicked: boolean = false;
	private _selected: boolean;

	set selected(value: boolean) { this._selected = value; }
	get selected(): boolean { return this._selected }

	set group(value: string) { this.parent.RadioButtonKeys.changeKey(value, this); this._group = value; }
	get group(): string { return this._group; }

	public enabled: boolean = true;

	constructor(public text: string, group: string, X: number, Y: number, width: number, height: number, selected: boolean = false, relative?: boolean, color?: Color, parent?: DxElement) {
		super(X, Y, width, height, relative, color, parent);
		this._group = group;
		this.parent.RadioButtonKeys.add(this);
		this.selected = selected;
	}

	public draw(): void {
		if (this.visible) {
			this.calculate();
			API.drawRectangle(this.X, this.Y, this.width, this.height, this.color.r, this.color.g, this.color.b, this.color.a);
		}
	}

	protected calculate(): void {
		if (this.selected) {
			this.color = new Color(255, 255, 0, 0);
		}
		else {
			this.color = new Color(255, 0, 255, 0);
		}
		if (API.isCursorShown()) {
			var mPos = API.getCursorPositionMaintainRatio();
			if (this.enabled) {
				if (API.isDisabledControlJustPressed(24)) {
					if (this.isPointInElement(mPos)) {
						this._clicked = true;
					}
				}
				if (API.isControlJustReleased(24)) {
					if (this.isPointInElement(mPos) && this._clicked) {
						this.parent.RadioButtonKeys.changeSelected(this);
					}
					this._clicked = false;
				}
				if (this.isPointInElement(mPos)) {
					
				}
			}
			else {

			}
		}
	}
}
