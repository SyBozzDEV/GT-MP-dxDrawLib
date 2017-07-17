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
		if (this.keys.indexOf(element.group) > -1) {
			var index = this.keys[element.group].indexOf(element);
			if (index > -1) {
				this.keys[element.group].splice(index, 1);
				this.add(element);
			}
		}
	}

	public changeSelected(element: DxRadioButton): void {
		var key = element.group;
		for (var i = 0; i < this.keys[key].length; i++) {
			if (this.keys[key][i] != element) {
				this.keys[key][i].selected = false;
				API.sendChatMessage("false");
			}
			else {
				element.selected = true;
				API.sendChatMessage("true");
			}
		}
	}
}
