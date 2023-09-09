import $ from 'jquery';

export const isHorizontal = (x, y) => {
	return Math.abs(x) > Math.abs(y);
};

export const isVertical = (x, y) => {
	return Math.abs(x) < Math.abs(y);
};

export function lerp(v1, v2, t, maxMove = 0, minDiff = 0.0001) {
	let dif = v2 - v1;
	if (maxMove > 0) {
		dif = Math.min(dif, maxMove);
		dif = Math.max(dif, -maxMove);
	}
	if (Math.abs(dif) < minDiff) {
		return v2;
	}
	return v1 + dif * t;
}

let instance = null;
export class MouseUtil {
	static x = 0;
	static y = 0;
	static vx = 0;
	static vy = 0;
	static distX = 0;
	static distY = 0;
	static lastX = 0;
	static lastY = 0;
	static isDown = false;
	static life = 0;
	static isTouch = false;

	doc;
	target;
	draggableElement;

	isAllowed = null;
	allowHorizontal = false;
	allowVertical = false;

	constructor() {
		if (!instance) instance = this;
		this.$doc = $(document);
		this.init();
		return instance;
	}

	init() {
		this.$doc.on('mousedown', this.onMouseDown);
		this.$doc.on('mousemove', this.onMouseMove);
		this.$doc.on('mouseup', this.onMouseUp);
		this.$doc.on('touchstart', this.onTouchStart);
		this.$doc.on('touchend', this.onTouchEnd);
		this.$doc.on('touchmove', this.onTouchMove);
		setInterval(this.onRefresh, 40);
	}

	onMouseDown = (event) => {
		if (MouseUtil.isDown) return;
		MouseUtil.distX = 0;
		MouseUtil.distY = 0;
		this.draggableElement = $(event.target)
			.closest('.is-draggable')
			.addClass('is-dragging');
		if (this.draggableElement.length === 0) return;
		MouseUtil.isDown = true;
		MouseUtil.x = event.screenX;
		MouseUtil.y = event.screenY;
		this.target = $(event.target);
		this.target.on('click', this.onTargetClick);
		this.$doc.trigger('MOUSE_UTIL_DOWN');
	};

	onMouseMove = (event) => {
		this.$doc.trigger('MOUSE_UTIL_DRAGGING');
		MouseUtil.x = event.screenX;
		MouseUtil.y = event.screenY;
	};

	onMouseUp = (event) => {
		if (!MouseUtil.isDown) return;
		MouseUtil.isDown = false;
		MouseUtil.x = event.screenX;
		MouseUtil.y = event.screenY;
		this.$doc.trigger('MOUSE_UTIL_UP');
		this.draggableElement.removeClass('is-dragging');
		this.draggableElement = null;
	};

	onTouchStart = (event) => {
		this.draggableElement = $(event.target).closest('.is-draggable');
		if (this.draggableElement.length > 0) {
			MouseUtil.distX = 0;
			MouseUtil.distY = 0;
			this.isAllowed = null;
			this.allowHorizontal = this.draggableElement.hasClass('is-horizontal');
			this.allowVertical = this.draggableElement.hasClass('is-vertical');
			this.draggableElement.addClass('is-dragging');
			MouseUtil.isDown = true;
			MouseUtil.isTouch = true;
			MouseUtil.x = MouseUtil.lastX = event['originalEvent'].touches[0].screenX;
			MouseUtil.y = MouseUtil.lastY = event['originalEvent'].touches[0].screenY;
			this.draggableElement.trigger('mousedown');
			this.$doc.trigger('MOUSE_UTIL_DOWN');
		} else {
			this.draggableElement.removeClass('is-dragging');
			this.draggableElement = null;
			this.isAllowed = false;
		}
	};

	onTouchMove = (event) => {
		MouseUtil.x = event['originalEvent'].touches[0].screenX;
		MouseUtil.y = event['originalEvent'].touches[0].screenY;
		if (this.allowHorizontal && this.allowVertical) {
			this.isAllowed = true;
		}
		if (this.isAllowed === null) {
			if (this.allowHorizontal) {
				if (isHorizontal(MouseUtil.x - MouseUtil.lastX, MouseUtil.y - MouseUtil.lastY)) {
					this.isAllowed = true;
				} else {
					this.isAllowed = false;
				}
			} else {
				if (isVertical(MouseUtil.x - MouseUtil.lastX, MouseUtil.y - MouseUtil.lastY)) {
					this.isAllowed = true;
				} else {
					this.isAllowed = false;
				}
			}
		}
		if (!this.isAllowed) {
			MouseUtil.vx = 0;
			MouseUtil.vy = 0;
			MouseUtil.lastX = 0;
			MouseUtil.lastY = 0;
			MouseUtil.isDown = false;
			MouseUtil.isTouch = false;
			this.$doc.trigger('MOUSE_UTIL_UP');
		}
		this.$doc.trigger('MOUSE_UTIL_DRAGGING');
	};

	onTouchEnd = (event) => {
		if (!MouseUtil.isDown) return;
		if (event['originalEvent'].touches.length === 0) {
			MouseUtil.isDown = false;
			MouseUtil.isTouch = false;
			this.isAllowed = null;
			this.$doc.trigger('MOUSE_UTIL_UP');
			if (MouseUtil.life > 10 && MouseUtil.life < 250) {
				if (isHorizontal(MouseUtil.vx, MouseUtil.vy) && this.allowHorizontal && Math.abs(MouseUtil.vx) > 10) {
					if (MouseUtil.vx < 0) {
						this.draggableElement.trigger('ON_SWIPE_LEFT');
					} else {
						this.draggableElement.trigger('ON_SWIPE_RIGHT');
					}
				}
			}
			this.draggableElement.removeClass('is-dragging');
			this.draggableElement = null;
		}
	};

	onRefresh = () => {
		MouseUtil.vx = MouseUtil.x - MouseUtil.lastX;
		MouseUtil.vy = MouseUtil.y - MouseUtil.lastY;
		MouseUtil.distX += Math.abs(MouseUtil.vx);
		MouseUtil.distY += Math.abs(MouseUtil.vy);
		MouseUtil.lastX = MouseUtil.x;
		MouseUtil.lastY = MouseUtil.y;
		this.$doc.trigger('MOUSE_UTIL_UPDATE');
		if (MouseUtil.isDown) {
			MouseUtil.life += 35;
		} else {
			MouseUtil.life = 0;
		}
	};

	onTargetClick = (event) => {
		if ((MouseUtil.life > 150 && this.target) || (MouseUtil.distX + MouseUtil.distY > 100 && this.target)) {
			event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();
			this.target.off('click', this.onTargetClick);
			this.target = null;
		}
	};
}

new MouseUtil();
export default MouseUtil;
