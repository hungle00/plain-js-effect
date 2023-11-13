HTMLElement.prototype.slideToggle = function(duration, callback) {
  if (window.getComputedStyle(this).display === 'none') {
    _slideDown(this);
  } else {
    _slideUp(this);
  }
};

HTMLElement.prototype.slideUp = function(duration, callback) {
  _slideUp(this)
};

HTMLElement.prototype.slideDown = function (duration, callback) {
  _slideDown(this)
};

HTMLElement.prototype.toggle = function() {
  if(this.style.display === 'none') {
    this.show();
  } else {
    this.hide();
  }
}

HTMLElement.prototype.show = function() {
  this.style.display = 'block'
}

HTMLElement.prototype.hide = function() {
  this.style.display = 'none'
}

function _slideUp(element, duration = 500) {
  const target = element;
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = `${duration}ms`;
  target.style.boxSizing = 'border-box';
  target.style.height = `${target.offsetHeight}px`;
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

function _slideDown(element, duration = 500) {
  const target = element;
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none') { display = 'block'; }
  target.style.display = display;
  const height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = `${duration}ms`;
  target.style.height = `${height}px`;
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}


