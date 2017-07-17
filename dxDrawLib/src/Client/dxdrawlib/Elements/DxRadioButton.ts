/// <reference path="../../dxdrawlib.d.ts" />

class DxRadioButton extends DxElement {

	private _group: string;
	private _clicked: boolean = false;
	private _selected: boolean;
	private get _innerRectangel(): number { return (this.height * 0.1) }
	private _radioButtonKeys: DxRadioButtonKeys;
	private _selectedColor: Color = new Color(0, 0, 0, 0);

	set selected(value: boolean) { this._selected = value; }
	get selected(): boolean { return this._selected }

	set group(value: string) { this._radioButtonKeys.changeKey(value, this); this._group = value; this._radioButtonKeys.add(this); }
	get group(): string { return this._group; }

	public enabled: boolean = true;
	public backColor: Color;
	public colorUnselected: Color = new Color(0, 0, 0, 0);

	constructor(public text: string, group: string, X: number, Y: number, width: number, height: number, selected: boolean = false, relative?: boolean, color?: Color, parent?: DxElement) {
		super(X, Y, width, height, relative, color, parent);
		this._group = ((group != null) ? group : "");
		if (this.parent != null) {
			this._radioButtonKeys = this.parent.RadioButtonKeys;
		}
		else {
			this._radioButtonKeys = DxScreen.RadioButtonKeys;
		}
		this._radioButtonKeys.add(this);

		this.backColor = new Color(255, 255, 255, 255);
		this.selected = selected;
	}

	public draw(): void {
		if (this.visible) {
			this.calculate();
			API.drawRectangle(this.X, this.Y, this.height, this.height, this.backColor.r, this.backColor.g, this.backColor.b, this.backColor.a);
			API.drawRectangle(this.X + this._innerRectangel, this.Y + this._innerRectangel, this.height - (this._innerRectangel * 2), this.height - (this._innerRectangel * 2), this._selectedColor.r, this._selectedColor.g, this._selectedColor.b, this._selectedColor.a);
		}
	}

	protected calculate(): void {
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
						if (!this.selected) {
							this._radioButtonKeys.changeSelected(this);
							this._selectedColor = this.color;
						}
						else {
							this.selected = false;
							this._selectedColor = this.colorUnselected;
						}
						this.debugMessage(3, "Change selected index");
					}
					this._clicked = false;
				}
				if (this.isPointInElement(mPos)) {
					
				}
			}
			else {

			}
		}
		if (this.selected) this._selectedColor.a = 255;
		else this._selectedColor.a = 0;
	}
	
	public sync(data): void {
		
	}
}
