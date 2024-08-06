import { Scene3D } from 'enable3d';

export default class PreloadScene extends Scene3D {
	box: any;
	constructor() {
		//@ts-ignore
		super('PreloadScene');
	}

	preload() {}
}
