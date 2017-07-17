/// <reference path="../../dxdrawlib.d.ts" />

class DxRadioButtonKeys {

	public keys: string[] = [];

	public add(element: DxRadioButton): void {
		var key = element.group;
		if (this.keys[key] == null) {
			this.keys[key] = [];
		}
		this.keys[key].push(element);
	}

	public changeKey(newKey: string, element: DxRadioButton): void {
		var key = element.group;
		if (this.keys[key] != null) {
			var index = this.keys[key].indexOf(element);
			if (index > -1) {
				this.keys[key].splice(index, 1);
			}
		}
	}

	public changeSelected(element: DxRadioButton): void {
		var key = element.group;
		for (var i = 0; i < this.keys[key].length; i++) {
			if (this.keys[key][i] != element) {
				this.keys[key][i].selected = false;
			}
			else {
				element.selected = true;
			}
		}
	}

	public getSelectedFromGroup(key: string): DxRadioButton {
		if (this.keys[key] != null) {
			for (var i = 0; i < this.keys[key].length; i++) {
				var select = this.keys[key][i].selected;
				if (select) {
					return this.keys[key][i];
				}
			}
			return null;
		}
		return null;
	}
}

function getSelectedRadioButton(key: string, parent: DxElement): DxRadioButton {
	return parent.RadioButtonKeys.getSelectedFromGroup(key);
}
