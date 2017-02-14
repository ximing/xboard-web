import Base from './base';
import consts from '../consts';

export default class Pan extends Base {
    constructor(parent) {
        super();
        this.setParent(parent);
        this.name = consts.moduleNames.PAN;
        this._listeners = {
            mousedown: this._onFabricMouseDown.bind(this),
            mousemove: this._onFabricMouseMove.bind(this),
            mouseup: this._onFabricMouseUp.bind(this)
        };
    }

    start() {
        const canvas = this.getCanvas();

        canvas.defaultCursor = 'move';
        canvas.selection = false;

        canvas.forEachObject(obj => {
            obj.set({
                evented: false
            });
        });

        canvas.on({
            'mouse:down': this._listeners.mousedown
        });
    }

    end() {
        const canvas = this.getCanvas();

        canvas.defaultCursor = 'default';
        canvas.selection = true;

        canvas.forEachObject(obj => {
            obj.set({
                evented: true
            });
        });

        canvas.off('mouse:down', this._listeners.mousedown);
    }

    /**
     * Mousedown event handler in fabric canvas
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event object
     * @private
     */
    _onFabricMouseDown(fEvent) {
        const canvas = this.getCanvas();

        canvas.on({
            'mouse:move': this._listeners.mousemove,
            'mouse:up': this._listeners.mouseup
        });
    }

    /**
     * Mousemove event handler in fabric canvas
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event object
     * @private
     */
    _onFabricMouseMove(fEvent) {
        // go out of use because of transform opver
        const canvas = this.getCanvas();
        var delta = new fabric.Point(fEvent.e.movementX, fEvent.e.movementY);
        canvas.relativePan(delta);
    }

    /**
     * Mouseup event handler in fabric canvas
     * @param {{target: fabric.Object, e: MouseEvent}} fEvent - Fabric event object
     * @private
     */
    _onFabricMouseUp() {
        const canvas = this.getCanvas();
        canvas.off({
            'mouse:move': this._listeners.mousemove,
            'mouse:up': this._listeners.mouseup
        });
    }
}
