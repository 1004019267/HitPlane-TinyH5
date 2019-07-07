/*
 * AUTO-GENERATED, DO NOT EDIT BY HAND
 */
// In order to process bindings, we first need type registry from compiled code to be available.
ut.meta.registerTypes();
var game = game || {};
game.GameState = {
  Initialize: 0,
  Menu: 1,
  Play: 2,
  GameOver: 3
};
game.GameState._typeDesc = (function() {
  var enumType = ut.meta.getType('int32');
  return ut.meta.allocType(6, 'game.GameState', 4, [
    {name: 'Initialize', offset: 0, type: enumType},
    {name: 'Menu', offset: 1, type: enumType},
    {name: 'Play', offset: 2, type: enumType},
    {name: 'GameOver', offset: 3, type: enumType}
  ]);
})();
game.LaserTag = {
  Raider: 0,
  Spaceship: 1
};
game.LaserTag._typeDesc = (function() {
  var enumType = ut.meta.getType('int32');
  return ut.meta.allocType(6, 'game.LaserTag', 4, [
    {name: 'Raider', offset: 0, type: enumType},
    {name: 'Spaceship', offset: 1, type: enumType}
  ]);
})();
var entities = entities || {};
entities.game = entities.game || {};
entities.game.Bootstrap = entities.game.Bootstrap || {};
entities.game.Bootstrap.Component = function() {
};
entities.game.Bootstrap.Component.prototype = Object.create(null);
entities.game.Bootstrap.Component.prototype.constructor = entities.game.Bootstrap.Component;
Object.defineProperties(entities.game.Bootstrap.Component.prototype, {
});
entities.game.Bootstrap.Component._size = 1;
entities.game.Bootstrap.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Bootstrap.Component.prototype);
  return v;
};
entities.game.Bootstrap.Component._toPtr = function(ptr, v) {
};
entities.game.Bootstrap.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Bootstrap.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Bootstrap.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Bootstrap.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Bootstrap.Component.StorageView.prototype = Object.create(null);
entities.game.Bootstrap.Component.StorageView.prototype.constructor = entities.game.Bootstrap.Component.StorageView;
entities.game.Bootstrap.Component._view = entities.game.Bootstrap.Component.StorageView;
entities.game.Bootstrap.Component.StorageView._isSharedComp = entities.game.Bootstrap.Component._isSharedComp = false;
entities.game.Bootstrap.Component.StorageView._fromPtr = entities.game.Bootstrap.Component._fromPtr;
entities.game.Bootstrap.Component.StorageView._toPtr = entities.game.Bootstrap.Component._toPtr;
entities.game.Bootstrap.Component.StorageView._tempHeapPtr = entities.game.Bootstrap.Component._tempHeapPtr;
entities.game.Bootstrap.Component.StorageView._size = entities.game.Bootstrap.Component._size;
entities.game.Bootstrap.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Bootstrap.Component.StorageView.prototype, {
});
entities.game.Bootstrap.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Bootstrap.Component is a POD type, so a JavaScript side copy constructor entities.game.Bootstrap.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Bootstrap.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Bootstrap.Component', 1, []);
})();
Object.defineProperties(entities.game.Bootstrap.Component, { cid: { configurable: true, get: function() { delete entities.game.Bootstrap.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Bootstrap.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Bootstrap.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Bootstrap.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Bootstrap.Component.cid; } } });
entities.game.Explosion = entities.game.Explosion || {};
entities.game.Explosion.Component = function() {
};
entities.game.Explosion.Component.prototype = Object.create(null);
entities.game.Explosion.Component.prototype.constructor = entities.game.Explosion.Component;
Object.defineProperties(entities.game.Explosion.Component.prototype, {
});
entities.game.Explosion.Component._size = 1;
entities.game.Explosion.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Explosion.Component.prototype);
  return v;
};
entities.game.Explosion.Component._toPtr = function(ptr, v) {
};
entities.game.Explosion.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Explosion.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Explosion.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Explosion.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Explosion.Component.StorageView.prototype = Object.create(null);
entities.game.Explosion.Component.StorageView.prototype.constructor = entities.game.Explosion.Component.StorageView;
entities.game.Explosion.Component._view = entities.game.Explosion.Component.StorageView;
entities.game.Explosion.Component.StorageView._isSharedComp = entities.game.Explosion.Component._isSharedComp = false;
entities.game.Explosion.Component.StorageView._fromPtr = entities.game.Explosion.Component._fromPtr;
entities.game.Explosion.Component.StorageView._toPtr = entities.game.Explosion.Component._toPtr;
entities.game.Explosion.Component.StorageView._tempHeapPtr = entities.game.Explosion.Component._tempHeapPtr;
entities.game.Explosion.Component.StorageView._size = entities.game.Explosion.Component._size;
entities.game.Explosion.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Explosion.Component.StorageView.prototype, {
});
entities.game.Explosion.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Explosion.Component is a POD type, so a JavaScript side copy constructor entities.game.Explosion.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Explosion.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Explosion.Component', 1, []);
})();
Object.defineProperties(entities.game.Explosion.Component, { cid: { configurable: true, get: function() { delete entities.game.Explosion.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Explosion.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Explosion.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Explosion.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Explosion.Component.cid; } } });
entities.game.GameMenu = entities.game.GameMenu || {};
entities.game.GameMenu.Component = function() {
};
entities.game.GameMenu.Component.prototype = Object.create(null);
entities.game.GameMenu.Component.prototype.constructor = entities.game.GameMenu.Component;
Object.defineProperties(entities.game.GameMenu.Component.prototype, {
});
entities.game.GameMenu.Component._size = 1;
entities.game.GameMenu.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GameMenu.Component.prototype);
  return v;
};
entities.game.GameMenu.Component._toPtr = function(ptr, v) {
};
entities.game.GameMenu.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GameMenu.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GameMenu.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GameMenu.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GameMenu.Component.StorageView.prototype = Object.create(null);
entities.game.GameMenu.Component.StorageView.prototype.constructor = entities.game.GameMenu.Component.StorageView;
entities.game.GameMenu.Component._view = entities.game.GameMenu.Component.StorageView;
entities.game.GameMenu.Component.StorageView._isSharedComp = entities.game.GameMenu.Component._isSharedComp = false;
entities.game.GameMenu.Component.StorageView._fromPtr = entities.game.GameMenu.Component._fromPtr;
entities.game.GameMenu.Component.StorageView._toPtr = entities.game.GameMenu.Component._toPtr;
entities.game.GameMenu.Component.StorageView._tempHeapPtr = entities.game.GameMenu.Component._tempHeapPtr;
entities.game.GameMenu.Component.StorageView._size = entities.game.GameMenu.Component._size;
entities.game.GameMenu.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GameMenu.Component.StorageView.prototype, {
});
entities.game.GameMenu.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GameMenu.Component is a POD type, so a JavaScript side copy constructor entities.game.GameMenu.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.GameMenu.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.GameMenu.Component', 1, []);
})();
Object.defineProperties(entities.game.GameMenu.Component, { cid: { configurable: true, get: function() { delete entities.game.GameMenu.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GameMenu.Component.cid = Module._ut_component_register_cid_with_type(entities.game.GameMenu.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.GameMenu.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GameMenu.Component.cid; } } });
entities.game.GameOver = entities.game.GameOver || {};
entities.game.GameOver.Component = function() {
};
entities.game.GameOver.Component.prototype = Object.create(null);
entities.game.GameOver.Component.prototype.constructor = entities.game.GameOver.Component;
Object.defineProperties(entities.game.GameOver.Component.prototype, {
});
entities.game.GameOver.Component._size = 1;
entities.game.GameOver.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GameOver.Component.prototype);
  return v;
};
entities.game.GameOver.Component._toPtr = function(ptr, v) {
};
entities.game.GameOver.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GameOver.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GameOver.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GameOver.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GameOver.Component.StorageView.prototype = Object.create(null);
entities.game.GameOver.Component.StorageView.prototype.constructor = entities.game.GameOver.Component.StorageView;
entities.game.GameOver.Component._view = entities.game.GameOver.Component.StorageView;
entities.game.GameOver.Component.StorageView._isSharedComp = entities.game.GameOver.Component._isSharedComp = false;
entities.game.GameOver.Component.StorageView._fromPtr = entities.game.GameOver.Component._fromPtr;
entities.game.GameOver.Component.StorageView._toPtr = entities.game.GameOver.Component._toPtr;
entities.game.GameOver.Component.StorageView._tempHeapPtr = entities.game.GameOver.Component._tempHeapPtr;
entities.game.GameOver.Component.StorageView._size = entities.game.GameOver.Component._size;
entities.game.GameOver.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GameOver.Component.StorageView.prototype, {
});
entities.game.GameOver.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GameOver.Component is a POD type, so a JavaScript side copy constructor entities.game.GameOver.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.GameOver.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.GameOver.Component', 1, []);
})();
Object.defineProperties(entities.game.GameOver.Component, { cid: { configurable: true, get: function() { delete entities.game.GameOver.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GameOver.Component.cid = Module._ut_component_register_cid_with_type(entities.game.GameOver.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.GameOver.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GameOver.Component.cid; } } });
entities.game.GameScene = entities.game.GameScene || {};
entities.game.GameScene.Component = function() {
};
entities.game.GameScene.Component.prototype = Object.create(null);
entities.game.GameScene.Component.prototype.constructor = entities.game.GameScene.Component;
Object.defineProperties(entities.game.GameScene.Component.prototype, {
});
entities.game.GameScene.Component._size = 1;
entities.game.GameScene.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GameScene.Component.prototype);
  return v;
};
entities.game.GameScene.Component._toPtr = function(ptr, v) {
};
entities.game.GameScene.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GameScene.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GameScene.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GameScene.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GameScene.Component.StorageView.prototype = Object.create(null);
entities.game.GameScene.Component.StorageView.prototype.constructor = entities.game.GameScene.Component.StorageView;
entities.game.GameScene.Component._view = entities.game.GameScene.Component.StorageView;
entities.game.GameScene.Component.StorageView._isSharedComp = entities.game.GameScene.Component._isSharedComp = false;
entities.game.GameScene.Component.StorageView._fromPtr = entities.game.GameScene.Component._fromPtr;
entities.game.GameScene.Component.StorageView._toPtr = entities.game.GameScene.Component._toPtr;
entities.game.GameScene.Component.StorageView._tempHeapPtr = entities.game.GameScene.Component._tempHeapPtr;
entities.game.GameScene.Component.StorageView._size = entities.game.GameScene.Component._size;
entities.game.GameScene.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GameScene.Component.StorageView.prototype, {
});
entities.game.GameScene.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GameScene.Component is a POD type, so a JavaScript side copy constructor entities.game.GameScene.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.GameScene.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.GameScene.Component', 1, []);
})();
Object.defineProperties(entities.game.GameScene.Component, { cid: { configurable: true, get: function() { delete entities.game.GameScene.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GameScene.Component.cid = Module._ut_component_register_cid_with_type(entities.game.GameScene.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.GameScene.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GameScene.Component.cid; } } });
entities.game.GameWin = entities.game.GameWin || {};
entities.game.GameWin.Component = function() {
};
entities.game.GameWin.Component.prototype = Object.create(null);
entities.game.GameWin.Component.prototype.constructor = entities.game.GameWin.Component;
Object.defineProperties(entities.game.GameWin.Component.prototype, {
});
entities.game.GameWin.Component._size = 1;
entities.game.GameWin.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GameWin.Component.prototype);
  return v;
};
entities.game.GameWin.Component._toPtr = function(ptr, v) {
};
entities.game.GameWin.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GameWin.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GameWin.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GameWin.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GameWin.Component.StorageView.prototype = Object.create(null);
entities.game.GameWin.Component.StorageView.prototype.constructor = entities.game.GameWin.Component.StorageView;
entities.game.GameWin.Component._view = entities.game.GameWin.Component.StorageView;
entities.game.GameWin.Component.StorageView._isSharedComp = entities.game.GameWin.Component._isSharedComp = false;
entities.game.GameWin.Component.StorageView._fromPtr = entities.game.GameWin.Component._fromPtr;
entities.game.GameWin.Component.StorageView._toPtr = entities.game.GameWin.Component._toPtr;
entities.game.GameWin.Component.StorageView._tempHeapPtr = entities.game.GameWin.Component._tempHeapPtr;
entities.game.GameWin.Component.StorageView._size = entities.game.GameWin.Component._size;
entities.game.GameWin.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GameWin.Component.StorageView.prototype, {
});
entities.game.GameWin.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GameWin.Component is a POD type, so a JavaScript side copy constructor entities.game.GameWin.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.GameWin.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.GameWin.Component', 1, []);
})();
Object.defineProperties(entities.game.GameWin.Component, { cid: { configurable: true, get: function() { delete entities.game.GameWin.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GameWin.Component.cid = Module._ut_component_register_cid_with_type(entities.game.GameWin.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.GameWin.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GameWin.Component.cid; } } });
entities.game.RaiderLaser = entities.game.RaiderLaser || {};
entities.game.RaiderLaser.Component = function() {
};
entities.game.RaiderLaser.Component.prototype = Object.create(null);
entities.game.RaiderLaser.Component.prototype.constructor = entities.game.RaiderLaser.Component;
Object.defineProperties(entities.game.RaiderLaser.Component.prototype, {
});
entities.game.RaiderLaser.Component._size = 1;
entities.game.RaiderLaser.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.RaiderLaser.Component.prototype);
  return v;
};
entities.game.RaiderLaser.Component._toPtr = function(ptr, v) {
};
entities.game.RaiderLaser.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.RaiderLaser.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.RaiderLaser.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.RaiderLaser.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.RaiderLaser.Component.StorageView.prototype = Object.create(null);
entities.game.RaiderLaser.Component.StorageView.prototype.constructor = entities.game.RaiderLaser.Component.StorageView;
entities.game.RaiderLaser.Component._view = entities.game.RaiderLaser.Component.StorageView;
entities.game.RaiderLaser.Component.StorageView._isSharedComp = entities.game.RaiderLaser.Component._isSharedComp = false;
entities.game.RaiderLaser.Component.StorageView._fromPtr = entities.game.RaiderLaser.Component._fromPtr;
entities.game.RaiderLaser.Component.StorageView._toPtr = entities.game.RaiderLaser.Component._toPtr;
entities.game.RaiderLaser.Component.StorageView._tempHeapPtr = entities.game.RaiderLaser.Component._tempHeapPtr;
entities.game.RaiderLaser.Component.StorageView._size = entities.game.RaiderLaser.Component._size;
entities.game.RaiderLaser.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.RaiderLaser.Component.StorageView.prototype, {
});
entities.game.RaiderLaser.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.RaiderLaser.Component is a POD type, so a JavaScript side copy constructor entities.game.RaiderLaser.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.RaiderLaser.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.RaiderLaser.Component', 1, []);
})();
Object.defineProperties(entities.game.RaiderLaser.Component, { cid: { configurable: true, get: function() { delete entities.game.RaiderLaser.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.RaiderLaser.Component.cid = Module._ut_component_register_cid_with_type(entities.game.RaiderLaser.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.RaiderLaser.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.RaiderLaser.Component.cid; } } });
entities.game.SpaceshipLaser = entities.game.SpaceshipLaser || {};
entities.game.SpaceshipLaser.Component = function() {
};
entities.game.SpaceshipLaser.Component.prototype = Object.create(null);
entities.game.SpaceshipLaser.Component.prototype.constructor = entities.game.SpaceshipLaser.Component;
Object.defineProperties(entities.game.SpaceshipLaser.Component.prototype, {
});
entities.game.SpaceshipLaser.Component._size = 1;
entities.game.SpaceshipLaser.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.SpaceshipLaser.Component.prototype);
  return v;
};
entities.game.SpaceshipLaser.Component._toPtr = function(ptr, v) {
};
entities.game.SpaceshipLaser.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.SpaceshipLaser.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.SpaceshipLaser.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.SpaceshipLaser.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.SpaceshipLaser.Component.StorageView.prototype = Object.create(null);
entities.game.SpaceshipLaser.Component.StorageView.prototype.constructor = entities.game.SpaceshipLaser.Component.StorageView;
entities.game.SpaceshipLaser.Component._view = entities.game.SpaceshipLaser.Component.StorageView;
entities.game.SpaceshipLaser.Component.StorageView._isSharedComp = entities.game.SpaceshipLaser.Component._isSharedComp = false;
entities.game.SpaceshipLaser.Component.StorageView._fromPtr = entities.game.SpaceshipLaser.Component._fromPtr;
entities.game.SpaceshipLaser.Component.StorageView._toPtr = entities.game.SpaceshipLaser.Component._toPtr;
entities.game.SpaceshipLaser.Component.StorageView._tempHeapPtr = entities.game.SpaceshipLaser.Component._tempHeapPtr;
entities.game.SpaceshipLaser.Component.StorageView._size = entities.game.SpaceshipLaser.Component._size;
entities.game.SpaceshipLaser.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.SpaceshipLaser.Component.StorageView.prototype, {
});
entities.game.SpaceshipLaser.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.SpaceshipLaser.Component is a POD type, so a JavaScript side copy constructor entities.game.SpaceshipLaser.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.SpaceshipLaser.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.SpaceshipLaser.Component', 1, []);
})();
Object.defineProperties(entities.game.SpaceshipLaser.Component, { cid: { configurable: true, get: function() { delete entities.game.SpaceshipLaser.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.SpaceshipLaser.Component.cid = Module._ut_component_register_cid_with_type(entities.game.SpaceshipLaser.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.SpaceshipLaser.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.SpaceshipLaser.Component.cid; } } });
game.Boundary = function() {
};
game.Boundary.prototype = Object.create(null);
game.Boundary.prototype.constructor = game.Boundary;
Object.defineProperties(game.Boundary.prototype, {
});
game.Boundary._size = 1;
game.Boundary._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Boundary.prototype);
  return v;
};
game.Boundary._toPtr = function(ptr, v) {
};
game.Boundary._toTempHeapPtr = function(ptr, v) {
};
game.Boundary._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Boundary._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Boundary.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Boundary.StorageView.prototype = Object.create(null);
game.Boundary.StorageView.prototype.constructor = game.Boundary.StorageView;
game.Boundary._view = game.Boundary.StorageView;
game.Boundary.StorageView._isSharedComp = game.Boundary._isSharedComp = false;
game.Boundary.StorageView._fromPtr = game.Boundary._fromPtr;
game.Boundary.StorageView._toPtr = game.Boundary._toPtr;
game.Boundary.StorageView._tempHeapPtr = game.Boundary._tempHeapPtr;
game.Boundary.StorageView._size = game.Boundary._size;
game.Boundary.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Boundary.StorageView.prototype, {
});
game.Boundary._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Boundary is a POD type, so a JavaScript side copy constructor game.Boundary._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Boundary._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Boundary', 1, []);
})();
Object.defineProperties(game.Boundary, { cid: { configurable: true, get: function() { delete game.Boundary.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Boundary.cid = Module._ut_component_register_cid_with_type(game.Boundary._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Boundary.StorageView, { cid: { configurable: true, get: function() { return game.Boundary.cid; } } });
game.DefensePoint = function() {
};
game.DefensePoint.prototype = Object.create(null);
game.DefensePoint.prototype.constructor = game.DefensePoint;
Object.defineProperties(game.DefensePoint.prototype, {
});
game.DefensePoint._size = 1;
game.DefensePoint._fromPtr = function(ptr, v) {
  v = v || Object.create(game.DefensePoint.prototype);
  return v;
};
game.DefensePoint._toPtr = function(ptr, v) {
};
game.DefensePoint._toTempHeapPtr = function(ptr, v) {
};
game.DefensePoint._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.DefensePoint._toTempHeapPtr(ptr, v);
  return ptr;
};
game.DefensePoint.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.DefensePoint.StorageView.prototype = Object.create(null);
game.DefensePoint.StorageView.prototype.constructor = game.DefensePoint.StorageView;
game.DefensePoint._view = game.DefensePoint.StorageView;
game.DefensePoint.StorageView._isSharedComp = game.DefensePoint._isSharedComp = false;
game.DefensePoint.StorageView._fromPtr = game.DefensePoint._fromPtr;
game.DefensePoint.StorageView._toPtr = game.DefensePoint._toPtr;
game.DefensePoint.StorageView._tempHeapPtr = game.DefensePoint._tempHeapPtr;
game.DefensePoint.StorageView._size = game.DefensePoint._size;
game.DefensePoint.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.DefensePoint.StorageView.prototype, {
});
game.DefensePoint._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.DefensePoint is a POD type, so a JavaScript side copy constructor game.DefensePoint._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.DefensePoint._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.DefensePoint', 1, []);
})();
Object.defineProperties(game.DefensePoint, { cid: { configurable: true, get: function() { delete game.DefensePoint.cid; var offsetsPtr = 0, offsetsCount = 0; return game.DefensePoint.cid = Module._ut_component_register_cid_with_type(game.DefensePoint._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.DefensePoint.StorageView, { cid: { configurable: true, get: function() { return game.DefensePoint.cid; } } });
game.Explosion = function(arg0) {
  this._duration = (arg0|0);
};
game.Explosion.prototype = Object.create(null);
game.Explosion.prototype.constructor = game.Explosion;
Object.defineProperties(game.Explosion.prototype, {
  duration: {
    get: function() { return this._duration; },
    set: function(v) { this._duration = (v|0); },
  },
});
game.Explosion._size = 4;
game.Explosion._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Explosion.prototype);
  v._duration = HEAP32[(ptr+0)>>2];
  return v;
};
game.Explosion._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.duration;
};
game.Explosion._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.duration;
};
game.Explosion._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.Explosion._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Explosion.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Explosion.StorageView.prototype = Object.create(null);
game.Explosion.StorageView.prototype.constructor = game.Explosion.StorageView;
game.Explosion._view = game.Explosion.StorageView;
game.Explosion.StorageView._isSharedComp = game.Explosion._isSharedComp = false;
game.Explosion.StorageView._fromPtr = game.Explosion._fromPtr;
game.Explosion.StorageView._toPtr = game.Explosion._toPtr;
game.Explosion.StorageView._tempHeapPtr = game.Explosion._tempHeapPtr;
game.Explosion.StorageView._size = game.Explosion._size;
game.Explosion.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.Explosion.StorageView.prototype, {
  duration: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
game.Explosion._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Explosion is a POD type, so a JavaScript side copy constructor game.Explosion._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Explosion._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Explosion', 4, [
    {name: 'duration', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(game.Explosion, { cid: { configurable: true, get: function() { delete game.Explosion.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Explosion.cid = Module._ut_component_register_cid_with_type(game.Explosion._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Explosion.StorageView, { cid: { configurable: true, get: function() { return game.Explosion.cid; } } });
game.Explosion.duration = { $ofs:0, $t:"int32_t", $c:game.Explosion };
game.GameOverLine = function() {
};
game.GameOverLine.prototype = Object.create(null);
game.GameOverLine.prototype.constructor = game.GameOverLine;
Object.defineProperties(game.GameOverLine.prototype, {
});
game.GameOverLine._size = 1;
game.GameOverLine._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GameOverLine.prototype);
  return v;
};
game.GameOverLine._toPtr = function(ptr, v) {
};
game.GameOverLine._toTempHeapPtr = function(ptr, v) {
};
game.GameOverLine._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.GameOverLine._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GameOverLine.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GameOverLine.StorageView.prototype = Object.create(null);
game.GameOverLine.StorageView.prototype.constructor = game.GameOverLine.StorageView;
game.GameOverLine._view = game.GameOverLine.StorageView;
game.GameOverLine.StorageView._isSharedComp = game.GameOverLine._isSharedComp = false;
game.GameOverLine.StorageView._fromPtr = game.GameOverLine._fromPtr;
game.GameOverLine.StorageView._toPtr = game.GameOverLine._toPtr;
game.GameOverLine.StorageView._tempHeapPtr = game.GameOverLine._tempHeapPtr;
game.GameOverLine.StorageView._size = game.GameOverLine._size;
game.GameOverLine.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.GameOverLine.StorageView.prototype, {
});
game.GameOverLine._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.GameOverLine is a POD type, so a JavaScript side copy constructor game.GameOverLine._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.GameOverLine._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.GameOverLine', 1, []);
})();
Object.defineProperties(game.GameOverLine, { cid: { configurable: true, get: function() { delete game.GameOverLine.cid; var offsetsPtr = 0, offsetsCount = 0; return game.GameOverLine.cid = Module._ut_component_register_cid_with_type(game.GameOverLine._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.GameOverLine.StorageView, { cid: { configurable: true, get: function() { return game.GameOverLine.cid; } } });
game.Hit = function() {
};
game.Hit.prototype = Object.create(null);
game.Hit.prototype.constructor = game.Hit;
Object.defineProperties(game.Hit.prototype, {
});
game.Hit._size = 1;
game.Hit._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Hit.prototype);
  return v;
};
game.Hit._toPtr = function(ptr, v) {
};
game.Hit._toTempHeapPtr = function(ptr, v) {
};
game.Hit._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Hit._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Hit.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Hit.StorageView.prototype = Object.create(null);
game.Hit.StorageView.prototype.constructor = game.Hit.StorageView;
game.Hit._view = game.Hit.StorageView;
game.Hit.StorageView._isSharedComp = game.Hit._isSharedComp = false;
game.Hit.StorageView._fromPtr = game.Hit._fromPtr;
game.Hit.StorageView._toPtr = game.Hit._toPtr;
game.Hit.StorageView._tempHeapPtr = game.Hit._tempHeapPtr;
game.Hit.StorageView._size = game.Hit._size;
game.Hit.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Hit.StorageView.prototype, {
});
game.Hit._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Hit is a POD type, so a JavaScript side copy constructor game.Hit._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Hit._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Hit', 1, []);
})();
Object.defineProperties(game.Hit, { cid: { configurable: true, get: function() { delete game.Hit.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Hit.cid = Module._ut_component_register_cid_with_type(game.Hit._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Hit.StorageView, { cid: { configurable: true, get: function() { return game.Hit.cid; } } });
game.Laser = function(arg0, arg1, arg2) {
  this._speed = (arg0|0);
  this._tag = (arg1|0);
  this._reference = (arg2 === undefined ? new ut.Entity : arg2);
};
game.Laser.prototype = Object.create(null);
game.Laser.prototype.constructor = game.Laser;
Object.defineProperties(game.Laser.prototype, {
  speed: {
    get: function() { return this._speed; },
    set: function(v) { this._speed = (v|0); },
  },
  tag: {
    get: function() { return this._tag; },
    set: function(v) { this._tag = (v|0); },
  },
  reference: {
    get: function() { return this._reference; },
    set: function(v) { this._reference = (v === undefined ? new ut.Entity : v); },
  },
});
game.Laser._size = 16;
game.Laser._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Laser.prototype);
  v._speed = HEAP32[(ptr+0)>>2];
  v._tag = HEAP32[(ptr+4)>>2];
  v._reference = ut.Entity._fromPtr(ptr+8);
  return v;
};
game.Laser._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.speed;
  HEAP32[(ptr+4)>>2] = v.tag;
  ut.Entity._toPtr(ptr+8, v.reference);
};
game.Laser._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.speed;
  HEAP32[(ptr+4)>>2] = v.tag;
  ut.Entity._toPtr(ptr+8, v.reference);
};
game.Laser._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.Laser._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Laser.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Laser.StorageView.prototype = Object.create(null);
game.Laser.StorageView.prototype.constructor = game.Laser.StorageView;
game.Laser._view = game.Laser.StorageView;
game.Laser.StorageView._isSharedComp = game.Laser._isSharedComp = false;
game.Laser.StorageView._fromPtr = game.Laser._fromPtr;
game.Laser.StorageView._toPtr = game.Laser._toPtr;
game.Laser.StorageView._tempHeapPtr = game.Laser._tempHeapPtr;
game.Laser.StorageView._size = game.Laser._size;
game.Laser.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.Laser.StorageView.prototype, {
  speed: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  tag: {
    get: function() { return HEAP32[(this._ptr+4)>>2]; },
    set: function(v) { HEAP32[(this._ptr+4)>>2] = v; },
  },
  reference: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
});
game.Laser._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Laser is a POD type, so a JavaScript side copy constructor game.Laser._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Laser._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Laser', 16, [
    {name: 'speed', offset: 0, type: ut.meta.getType('int32')},
    {name: 'tag', offset: 4, type: ut.meta.getType('game.LaserTag')},
    {name: 'reference', offset: 8, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.Laser, { cid: { configurable: true, get: function() { delete game.Laser.cid; var offsetsPtr = ut.tempHeapPtrI32([8]); var offsetsCount = 1; return game.Laser.cid = Module._ut_component_register_cid_with_type(game.Laser._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Laser.StorageView, { cid: { configurable: true, get: function() { return game.Laser.cid; } } });
game.Laser.speed = { $ofs:0, $t:"int32_t", $c:game.Laser };
game.Laser.tag = { $ofs:4, $t:"game.LaserTag", $c:game.Laser };
game.Laser.reference = { $ofs:8, $t:"ut.Entity", $c:game.Laser };
game.Laser.reference.index = { $ofs:8, $t:"int32_t", $c:game.Laser };
game.Laser.reference.version = { $ofs:12, $t:"int32_t", $c:game.Laser };
game.LifeManager = function(arg0, arg1) {
  this._LifeSprites = (arg0 === undefined ? new Array() : ((arg0 instanceof Array) ? arg0 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._LifeCount = (arg1 === undefined ? new ut.Entity : arg1);
};
game.LifeManager.prototype = Object.create(null);
game.LifeManager.prototype.constructor = game.LifeManager;
Object.defineProperties(game.LifeManager.prototype, {
  LifeSprites: {
    get: function() { return this._LifeSprites; },
    set: function(v) { this._LifeSprites = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  LifeCount: {
    get: function() { return this._LifeCount; },
    set: function(v) { this._LifeCount = (v === undefined ? new ut.Entity : v); },
  },
});
game.LifeManager._size = 20;
game.LifeManager._fromPtr = function(ptr, v) {
  v = v || Object.create(game.LifeManager.prototype);
  v._LifeSprites = ut.nativeBufferToJsArray(ptr+0, 8, function(p) { return ut.Entity._fromPtr(p); });
  v._LifeCount = ut.Entity._fromPtr(ptr+12);
  return v;
};
game.LifeManager._toPtr = function(ptr, v) {
  ut.jsArrayToExistingNativeBuffer_pod(v.LifeSprites, ptr+0, 8, function(p, v) { ut.Entity._toPtr(p, v); });
  ut.Entity._toPtr(ptr+12, v.LifeCount);
};
game.LifeManager._toTempHeapPtr = function(ptr, v) {
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.LifeSprites, ptr+0, 8, function(p, v) { ut.Entity._toPtr(p, v); });
  ut.Entity._toPtr(ptr+12, v.LifeCount);
};
game.LifeManager._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.LifeManager._toTempHeapPtr(ptr, v);
  return ptr;
};
game.LifeManager.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.LifeManager.StorageView.prototype = Object.create(null);
game.LifeManager.StorageView.prototype.constructor = game.LifeManager.StorageView;
game.LifeManager._view = game.LifeManager.StorageView;
game.LifeManager.StorageView._isSharedComp = game.LifeManager._isSharedComp = false;
game.LifeManager.StorageView._fromPtr = game.LifeManager._fromPtr;
game.LifeManager.StorageView._toPtr = game.LifeManager._toPtr;
game.LifeManager.StorageView._tempHeapPtr = game.LifeManager._tempHeapPtr;
game.LifeManager.StorageView._size = game.LifeManager._size;
game.LifeManager.StorageView.prototype.$advance = function() {
  this._ptr += 20;
};
Object.defineProperties(game.LifeManager.StorageView.prototype, {
  LifeSprites: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+0, 8, function(p) { return ut.Entity._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+0, 8, function(p, v) { ut.Entity._toPtr(p, v); }); },
  },
  LifeCount: {
    get: function() { return ut.Entity._fromPtr(this._ptr+12); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+12, v); },
  },
});
game.LifeManager._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativebuffer_pod_placement_delete(ptr + 0);
};
game.LifeManager._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativebuffer_pod_copy_construct(dst + 0, src + 0, 8);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+12+i] = HEAPU8[src+12+i];
};
game.LifeManager._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.LifeManager', 20, [
    {name: 'LifeSprites', offset: 0, type: ut.meta.getType('ut.NativeBuffer<ut.Entity>')},
    {name: 'LifeCount', offset: 12, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.LifeManager, { cid: { configurable: true, get: function() { delete game.LifeManager.cid; var offsetsPtr = ut.tempHeapPtrI32([-1,12]); var offsetsCount = 2; return game.LifeManager.cid = Module._ut_component_register_cid_with_type(game.LifeManager._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.LifeManager._dtorFn), ut.CopyFn._cb.token_for(game.LifeManager._copyFn)); } } });
Object.defineProperties(game.LifeManager.StorageView, { cid: { configurable: true, get: function() { return game.LifeManager.cid; } } });
game.LifeManager.LifeSprites = { $ofs:0, $t:"ut.DynamicArray`1", $c:game.LifeManager };
game.LifeManager.LifeCount = { $ofs:12, $t:"ut.Entity", $c:game.LifeManager };
game.LifeManager.LifeCount.index = { $ofs:12, $t:"int32_t", $c:game.LifeManager };
game.LifeManager.LifeCount.version = { $ofs:16, $t:"int32_t", $c:game.LifeManager };
game.Move = function(arg0, arg1, arg2) {
  this._speed = (arg0|0);
  this._threshold = (arg1|0);
  this._touchSwipe = new ut.Math.Vector2(); if ((arg2) !== undefined) { this._touchSwipe.copy(arg2); };
};
game.Move.prototype = Object.create(null);
game.Move.prototype.constructor = game.Move;
Object.defineProperties(game.Move.prototype, {
  speed: {
    get: function() { return this._speed; },
    set: function(v) { this._speed = (v|0); },
  },
  threshold: {
    get: function() { return this._threshold; },
    set: function(v) { this._threshold = (v|0); },
  },
  touchSwipe: {
    get: function() { return this._touchSwipe; },
    set: function(v) { this._touchSwipe.copy(v); },
  },
});
game.Move._size = 16;
game.Move._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Move.prototype);
  v._speed = HEAP32[(ptr+0)>>2];
  v._threshold = HEAP32[(ptr+4)>>2];
  v._touchSwipe = ut._utils.vec2FromHeap(null, ptr+8);
  return v;
};
game.Move._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.speed;
  HEAP32[(ptr+4)>>2] = v.threshold;
  ut._utils.vec2ToHeap(v.touchSwipe, ptr+8);
};
game.Move._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.speed;
  HEAP32[(ptr+4)>>2] = v.threshold;
  ut._utils.vec2ToHeap(v.touchSwipe, ptr+8);
};
game.Move._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.Move._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Move.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Move.StorageView.prototype = Object.create(null);
game.Move.StorageView.prototype.constructor = game.Move.StorageView;
game.Move._view = game.Move.StorageView;
game.Move.StorageView._isSharedComp = game.Move._isSharedComp = false;
game.Move.StorageView._fromPtr = game.Move._fromPtr;
game.Move.StorageView._toPtr = game.Move._toPtr;
game.Move.StorageView._tempHeapPtr = game.Move._tempHeapPtr;
game.Move.StorageView._size = game.Move._size;
game.Move.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.Move.StorageView.prototype, {
  speed: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  threshold: {
    get: function() { return HEAP32[(this._ptr+4)>>2]; },
    set: function(v) { HEAP32[(this._ptr+4)>>2] = v; },
  },
  touchSwipe: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+8); },
  },
});
game.Move._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Move is a POD type, so a JavaScript side copy constructor game.Move._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Move._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Move', 16, [
    {name: 'speed', offset: 0, type: ut.meta.getType('int32')},
    {name: 'threshold', offset: 4, type: ut.meta.getType('int32')},
    {name: 'touchSwipe', offset: 8, type: ut.meta.getType('ut.Math.Vector2')}
  ]);
})();
Object.defineProperties(game.Move, { cid: { configurable: true, get: function() { delete game.Move.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Move.cid = Module._ut_component_register_cid_with_type(game.Move._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Move.StorageView, { cid: { configurable: true, get: function() { return game.Move.cid; } } });
game.Move.speed = { $ofs:0, $t:"int32_t", $c:game.Move };
game.Move.threshold = { $ofs:4, $t:"int32_t", $c:game.Move };
game.Move.touchSwipe = { $ofs:8, $t:"ut.Math.Vector2", $c:game.Move };
game.Move.touchSwipe.y = { $ofs:12, $t:"float", $c:game.Move };
game.Move.touchSwipe.x = { $ofs:8, $t:"float", $c:game.Move };
game.Raider = function(arg0) {
  this._points = (arg0|0);
};
game.Raider.prototype = Object.create(null);
game.Raider.prototype.constructor = game.Raider;
Object.defineProperties(game.Raider.prototype, {
  points: {
    get: function() { return this._points; },
    set: function(v) { this._points = (v|0); },
  },
});
game.Raider._size = 4;
game.Raider._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Raider.prototype);
  v._points = HEAP32[(ptr+0)>>2];
  return v;
};
game.Raider._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.points;
};
game.Raider._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.points;
};
game.Raider._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.Raider._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Raider.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Raider.StorageView.prototype = Object.create(null);
game.Raider.StorageView.prototype.constructor = game.Raider.StorageView;
game.Raider._view = game.Raider.StorageView;
game.Raider.StorageView._isSharedComp = game.Raider._isSharedComp = false;
game.Raider.StorageView._fromPtr = game.Raider._fromPtr;
game.Raider.StorageView._toPtr = game.Raider._toPtr;
game.Raider.StorageView._tempHeapPtr = game.Raider._tempHeapPtr;
game.Raider.StorageView._size = game.Raider._size;
game.Raider.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.Raider.StorageView.prototype, {
  points: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
game.Raider._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Raider is a POD type, so a JavaScript side copy constructor game.Raider._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Raider._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Raider', 4, [
    {name: 'points', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(game.Raider, { cid: { configurable: true, get: function() { delete game.Raider.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Raider.cid = Module._ut_component_register_cid_with_type(game.Raider._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Raider.StorageView, { cid: { configurable: true, get: function() { return game.Raider.cid; } } });
game.Raider.points = { $ofs:0, $t:"int32_t", $c:game.Raider };
game.Raiders = function(arg0, arg1, arg2) {
  this._speed = (+(arg0===undefined ? 0 : arg0));
  this._isMovingRight = (arg1 ? true : false);
  this._threshold = (arg2|0);
};
game.Raiders.prototype = Object.create(null);
game.Raiders.prototype.constructor = game.Raiders;
Object.defineProperties(game.Raiders.prototype, {
  speed: {
    get: function() { return this._speed; },
    set: function(v) { this._speed = (+(v===undefined ? 0 : v)); },
  },
  isMovingRight: {
    get: function() { return this._isMovingRight; },
    set: function(v) { this._isMovingRight = (v ? true : false); },
  },
  threshold: {
    get: function() { return this._threshold; },
    set: function(v) { this._threshold = (v|0); },
  },
});
game.Raiders._size = 12;
game.Raiders._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Raiders.prototype);
  v._speed = HEAPF32[(ptr+0)>>2];
  v._isMovingRight = (HEAP8[ptr+4]?true:false);
  v._threshold = HEAP32[(ptr+8)>>2];
  return v;
};
game.Raiders._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.speed;
  HEAP8[ptr+4] = (v.isMovingRight)?1:0;
  HEAP32[(ptr+8)>>2] = v.threshold;
};
game.Raiders._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.speed;
  HEAP8[ptr+4] = (v.isMovingRight)?1:0;
  HEAP32[(ptr+8)>>2] = v.threshold;
};
game.Raiders._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(12);
  if (v) game.Raiders._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Raiders.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Raiders.StorageView.prototype = Object.create(null);
game.Raiders.StorageView.prototype.constructor = game.Raiders.StorageView;
game.Raiders._view = game.Raiders.StorageView;
game.Raiders.StorageView._isSharedComp = game.Raiders._isSharedComp = false;
game.Raiders.StorageView._fromPtr = game.Raiders._fromPtr;
game.Raiders.StorageView._toPtr = game.Raiders._toPtr;
game.Raiders.StorageView._tempHeapPtr = game.Raiders._tempHeapPtr;
game.Raiders.StorageView._size = game.Raiders._size;
game.Raiders.StorageView.prototype.$advance = function() {
  this._ptr += 12;
};
Object.defineProperties(game.Raiders.StorageView.prototype, {
  speed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  isMovingRight: {
    get: function() { return (HEAP8[this._ptr+4]?true:false); },
    set: function(v) { HEAP8[this._ptr+4] = (v)?1:0; },
  },
  threshold: {
    get: function() { return HEAP32[(this._ptr+8)>>2]; },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = v; },
  },
});
game.Raiders._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Raiders is a POD type, so a JavaScript side copy constructor game.Raiders._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Raiders._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Raiders', 12, [
    {name: 'speed', offset: 0, type: ut.meta.getType('float')},
    {name: 'isMovingRight', offset: 4, type: ut.meta.getType('bool')},
    {name: 'threshold', offset: 8, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(game.Raiders, { cid: { configurable: true, get: function() { delete game.Raiders.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Raiders.cid = Module._ut_component_register_cid_with_type(game.Raiders._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Raiders.StorageView, { cid: { configurable: true, get: function() { return game.Raiders.cid; } } });
game.Raiders.speed = { $ofs:0, $t:"float", $c:game.Raiders };
game.Raiders.isMovingRight = { $ofs:4, $t:"bool", $c:game.Raiders };
game.Raiders.threshold = { $ofs:8, $t:"int32_t", $c:game.Raiders };
game.Score = function() {
};
game.Score.prototype = Object.create(null);
game.Score.prototype.constructor = game.Score;
Object.defineProperties(game.Score.prototype, {
});
game.Score._size = 1;
game.Score._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Score.prototype);
  return v;
};
game.Score._toPtr = function(ptr, v) {
};
game.Score._toTempHeapPtr = function(ptr, v) {
};
game.Score._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Score._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Score.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Score.StorageView.prototype = Object.create(null);
game.Score.StorageView.prototype.constructor = game.Score.StorageView;
game.Score._view = game.Score.StorageView;
game.Score.StorageView._isSharedComp = game.Score._isSharedComp = false;
game.Score.StorageView._fromPtr = game.Score._fromPtr;
game.Score.StorageView._toPtr = game.Score._toPtr;
game.Score.StorageView._tempHeapPtr = game.Score._tempHeapPtr;
game.Score.StorageView._size = game.Score._size;
game.Score.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Score.StorageView.prototype, {
});
game.Score._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Score is a POD type, so a JavaScript side copy constructor game.Score._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Score._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Score', 1, []);
})();
Object.defineProperties(game.Score, { cid: { configurable: true, get: function() { delete game.Score.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Score.cid = Module._ut_component_register_cid_with_type(game.Score._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Score.StorageView, { cid: { configurable: true, get: function() { return game.Score.cid; } } });
game.Spaceship = function() {
};
game.Spaceship.prototype = Object.create(null);
game.Spaceship.prototype.constructor = game.Spaceship;
Object.defineProperties(game.Spaceship.prototype, {
});
game.Spaceship._size = 1;
game.Spaceship._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Spaceship.prototype);
  return v;
};
game.Spaceship._toPtr = function(ptr, v) {
};
game.Spaceship._toTempHeapPtr = function(ptr, v) {
};
game.Spaceship._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Spaceship._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Spaceship.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Spaceship.StorageView.prototype = Object.create(null);
game.Spaceship.StorageView.prototype.constructor = game.Spaceship.StorageView;
game.Spaceship._view = game.Spaceship.StorageView;
game.Spaceship.StorageView._isSharedComp = game.Spaceship._isSharedComp = false;
game.Spaceship.StorageView._fromPtr = game.Spaceship._fromPtr;
game.Spaceship.StorageView._toPtr = game.Spaceship._toPtr;
game.Spaceship.StorageView._tempHeapPtr = game.Spaceship._tempHeapPtr;
game.Spaceship.StorageView._size = game.Spaceship._size;
game.Spaceship.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Spaceship.StorageView.prototype, {
});
game.Spaceship._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Spaceship is a POD type, so a JavaScript side copy constructor game.Spaceship._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Spaceship._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Spaceship', 1, []);
})();
Object.defineProperties(game.Spaceship, { cid: { configurable: true, get: function() { delete game.Spaceship.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Spaceship.cid = Module._ut_component_register_cid_with_type(game.Spaceship._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Spaceship.StorageView, { cid: { configurable: true, get: function() { return game.Spaceship.cid; } } });
game.GameContext = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
  this._RaidersCanShoot = (arg0 ? true : false);
  this._PlayerCanShoot = (arg1 ? true : false);
  this._Score = (arg2|0);
  this._Life = (arg3|0);
  this._State = (arg4|0);
  this._FlickeringInterval = (+(arg5===undefined ? 0 : arg5));
  this._FlickeringTime = (+(arg6===undefined ? 0 : arg6));
  this._RaiderIndex = (arg7|0);
  this._StartShootingDelay = (+(arg8===undefined ? 0 : arg8));
  this._TimeElapsedSinceStart = (+(arg9===undefined ? 0 : arg9));
};
game.GameContext.prototype = Object.create(null);
game.GameContext.prototype.constructor = game.GameContext;
Object.defineProperties(game.GameContext.prototype, {
  RaidersCanShoot: {
    get: function() { return this._RaidersCanShoot; },
    set: function(v) { this._RaidersCanShoot = (v ? true : false); },
  },
  PlayerCanShoot: {
    get: function() { return this._PlayerCanShoot; },
    set: function(v) { this._PlayerCanShoot = (v ? true : false); },
  },
  Score: {
    get: function() { return this._Score; },
    set: function(v) { this._Score = (v|0); },
  },
  Life: {
    get: function() { return this._Life; },
    set: function(v) { this._Life = (v|0); },
  },
  State: {
    get: function() { return this._State; },
    set: function(v) { this._State = (v|0); },
  },
  FlickeringInterval: {
    get: function() { return this._FlickeringInterval; },
    set: function(v) { this._FlickeringInterval = (+(v===undefined ? 0 : v)); },
  },
  FlickeringTime: {
    get: function() { return this._FlickeringTime; },
    set: function(v) { this._FlickeringTime = (+(v===undefined ? 0 : v)); },
  },
  RaiderIndex: {
    get: function() { return this._RaiderIndex; },
    set: function(v) { this._RaiderIndex = (v|0); },
  },
  StartShootingDelay: {
    get: function() { return this._StartShootingDelay; },
    set: function(v) { this._StartShootingDelay = (+(v===undefined ? 0 : v)); },
  },
  TimeElapsedSinceStart: {
    get: function() { return this._TimeElapsedSinceStart; },
    set: function(v) { this._TimeElapsedSinceStart = (+(v===undefined ? 0 : v)); },
  },
});
game.GameContext._size = 32;
game.GameContext._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GameContext.prototype);
  v._RaidersCanShoot = (HEAP8[ptr+0]?true:false);
  v._PlayerCanShoot = (HEAP8[ptr+1]?true:false);
  v._Score = HEAPU16[(ptr+2)>>1];
  v._Life = HEAP8[ptr+4];
  v._State = HEAP32[(ptr+8)>>2];
  v._FlickeringInterval = HEAPF32[(ptr+12)>>2];
  v._FlickeringTime = HEAPF32[(ptr+16)>>2];
  v._RaiderIndex = HEAPU8[ptr+20];
  v._StartShootingDelay = HEAPF32[(ptr+24)>>2];
  v._TimeElapsedSinceStart = HEAPF32[(ptr+28)>>2];
  return v;
};
game.GameContext._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.RaidersCanShoot)?1:0;
  HEAP8[ptr+1] = (v.PlayerCanShoot)?1:0;
  HEAPU16[(ptr+2)>>1] = v.Score;
  HEAP8[ptr+4] = v.Life;
  HEAP32[(ptr+8)>>2] = v.State;
  HEAPF32[(ptr+12)>>2] = v.FlickeringInterval;
  HEAPF32[(ptr+16)>>2] = v.FlickeringTime;
  HEAPU8[ptr+20] = v.RaiderIndex;
  HEAPF32[(ptr+24)>>2] = v.StartShootingDelay;
  HEAPF32[(ptr+28)>>2] = v.TimeElapsedSinceStart;
};
game.GameContext._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.RaidersCanShoot)?1:0;
  HEAP8[ptr+1] = (v.PlayerCanShoot)?1:0;
  HEAPU16[(ptr+2)>>1] = v.Score;
  HEAP8[ptr+4] = v.Life;
  HEAP32[(ptr+8)>>2] = v.State;
  HEAPF32[(ptr+12)>>2] = v.FlickeringInterval;
  HEAPF32[(ptr+16)>>2] = v.FlickeringTime;
  HEAPU8[ptr+20] = v.RaiderIndex;
  HEAPF32[(ptr+24)>>2] = v.StartShootingDelay;
  HEAPF32[(ptr+28)>>2] = v.TimeElapsedSinceStart;
};
game.GameContext._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(32);
  if (v) game.GameContext._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GameContext.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GameContext.StorageView.prototype = Object.create(null);
game.GameContext.StorageView.prototype.constructor = game.GameContext.StorageView;
game.GameContext._view = game.GameContext.StorageView;
game.GameContext.StorageView._isSharedComp = game.GameContext._isSharedComp = false;
game.GameContext.StorageView._fromPtr = game.GameContext._fromPtr;
game.GameContext.StorageView._toPtr = game.GameContext._toPtr;
game.GameContext.StorageView._tempHeapPtr = game.GameContext._tempHeapPtr;
game.GameContext.StorageView._size = game.GameContext._size;
game.GameContext.StorageView.prototype.$advance = function() {
  this._ptr += 32;
};
Object.defineProperties(game.GameContext.StorageView.prototype, {
  RaidersCanShoot: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  PlayerCanShoot: {
    get: function() { return (HEAP8[this._ptr+1]?true:false); },
    set: function(v) { HEAP8[this._ptr+1] = (v)?1:0; },
  },
  Score: {
    get: function() { return HEAPU16[(this._ptr+2)>>1]; },
    set: function(v) { HEAPU16[(this._ptr+2)>>1] = v; },
  },
  Life: {
    get: function() { return HEAP8[this._ptr+4]; },
    set: function(v) { HEAP8[this._ptr+4] = v; },
  },
  State: {
    get: function() { return HEAP32[(this._ptr+8)>>2]; },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = v; },
  },
  FlickeringInterval: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
  FlickeringTime: {
    get: function() { return HEAPF32[(this._ptr+16)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+16)>>2] = v; },
  },
  RaiderIndex: {
    get: function() { return HEAPU8[this._ptr+20]; },
    set: function(v) { HEAPU8[this._ptr+20] = v; },
  },
  StartShootingDelay: {
    get: function() { return HEAPF32[(this._ptr+24)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+24)>>2] = v; },
  },
  TimeElapsedSinceStart: {
    get: function() { return HEAPF32[(this._ptr+28)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+28)>>2] = v; },
  },
});
game.GameContext._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.GameContext is a POD type, so a JavaScript side copy constructor game.GameContext._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.GameContext._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.GameContext', 32, [
    {name: 'RaidersCanShoot', offset: 0, type: ut.meta.getType('bool')},
    {name: 'PlayerCanShoot', offset: 1, type: ut.meta.getType('bool')},
    {name: 'Score', offset: 2, type: ut.meta.getType('uint16')},
    {name: 'Life', offset: 4, type: ut.meta.getType('int8')},
    {name: 'State', offset: 8, type: ut.meta.getType('game.GameState')},
    {name: 'FlickeringInterval', offset: 12, type: ut.meta.getType('float')},
    {name: 'FlickeringTime', offset: 16, type: ut.meta.getType('float')},
    {name: 'RaiderIndex', offset: 20, type: ut.meta.getType('uint8')},
    {name: 'StartShootingDelay', offset: 24, type: ut.meta.getType('float')},
    {name: 'TimeElapsedSinceStart', offset: 28, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.GameContext, { cid: { configurable: true, get: function() { delete game.GameContext.cid; var offsetsPtr = 0, offsetsCount = 0; return game.GameContext.cid = Module._ut_component_register_cid_with_type(game.GameContext._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.GameContext.StorageView, { cid: { configurable: true, get: function() { return game.GameContext.cid; } } });
game.GameContext.RaidersCanShoot = { $ofs:0, $t:"bool", $c:game.GameContext };
game.GameContext.PlayerCanShoot = { $ofs:1, $t:"bool", $c:game.GameContext };
game.GameContext.Score = { $ofs:2, $t:"uint16_t", $c:game.GameContext };
game.GameContext.Life = { $ofs:4, $t:"int8_t", $c:game.GameContext };
game.GameContext.State = { $ofs:8, $t:"game.GameState", $c:game.GameContext };
game.GameContext.FlickeringInterval = { $ofs:12, $t:"float", $c:game.GameContext };
game.GameContext.FlickeringTime = { $ofs:16, $t:"float", $c:game.GameContext };
game.GameContext.RaiderIndex = { $ofs:20, $t:"uint8_t", $c:game.GameContext };
game.GameContext.StartShootingDelay = { $ofs:24, $t:"float", $c:game.GameContext };
game.GameContext.TimeElapsedSinceStart = { $ofs:28, $t:"float", $c:game.GameContext };
var ut = ut || {};
ut.Core2D = ut.Core2D || {};
ut.Core2D.layers = ut.Core2D.layers || {};
ut.Core2D.layers.Default = function() {
};
ut.Core2D.layers.Default.prototype = Object.create(null);
ut.Core2D.layers.Default.prototype.constructor = ut.Core2D.layers.Default;
Object.defineProperties(ut.Core2D.layers.Default.prototype, {
});
ut.Core2D.layers.Default._size = 1;
ut.Core2D.layers.Default._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Default.prototype);
  return v;
};
ut.Core2D.layers.Default._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Default._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Default.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Default.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Default.StorageView.prototype.constructor = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default._view = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default.StorageView._isSharedComp = ut.Core2D.layers.Default._isSharedComp = false;
ut.Core2D.layers.Default.StorageView._fromPtr = ut.Core2D.layers.Default._fromPtr;
ut.Core2D.layers.Default.StorageView._toPtr = ut.Core2D.layers.Default._toPtr;
ut.Core2D.layers.Default.StorageView._tempHeapPtr = ut.Core2D.layers.Default._tempHeapPtr;
ut.Core2D.layers.Default.StorageView._size = ut.Core2D.layers.Default._size;
ut.Core2D.layers.Default.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Default.StorageView.prototype, {
});
ut.Core2D.layers.Default._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Default is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Default._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Default._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Default', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Default, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Default.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Default.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Default._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Default.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Default.cid; } } });
ut.Core2D.layers.TransparentFX = function() {
};
ut.Core2D.layers.TransparentFX.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.prototype.constructor = ut.Core2D.layers.TransparentFX;
Object.defineProperties(ut.Core2D.layers.TransparentFX.prototype, {
});
ut.Core2D.layers.TransparentFX._size = 1;
ut.Core2D.layers.TransparentFX._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.TransparentFX.prototype);
  return v;
};
ut.Core2D.layers.TransparentFX._toPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.TransparentFX._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.TransparentFX.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.TransparentFX.StorageView.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.StorageView.prototype.constructor = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX._view = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX.StorageView._isSharedComp = ut.Core2D.layers.TransparentFX._isSharedComp = false;
ut.Core2D.layers.TransparentFX.StorageView._fromPtr = ut.Core2D.layers.TransparentFX._fromPtr;
ut.Core2D.layers.TransparentFX.StorageView._toPtr = ut.Core2D.layers.TransparentFX._toPtr;
ut.Core2D.layers.TransparentFX.StorageView._tempHeapPtr = ut.Core2D.layers.TransparentFX._tempHeapPtr;
ut.Core2D.layers.TransparentFX.StorageView._size = ut.Core2D.layers.TransparentFX._size;
ut.Core2D.layers.TransparentFX.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView.prototype, {
});
ut.Core2D.layers.TransparentFX._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.TransparentFX is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.TransparentFX._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.TransparentFX._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.TransparentFX', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.TransparentFX, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.TransparentFX.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.TransparentFX.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.TransparentFX._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.TransparentFX.cid; } } });
ut.Core2D.layers.IgnoreRaycast = function() {
};
ut.Core2D.layers.IgnoreRaycast.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.prototype.constructor = ut.Core2D.layers.IgnoreRaycast;
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._size = 1;
ut.Core2D.layers.IgnoreRaycast._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.IgnoreRaycast.prototype);
  return v;
};
ut.Core2D.layers.IgnoreRaycast._toPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.constructor = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast._view = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast.StorageView._isSharedComp = ut.Core2D.layers.IgnoreRaycast._isSharedComp = false;
ut.Core2D.layers.IgnoreRaycast.StorageView._fromPtr = ut.Core2D.layers.IgnoreRaycast._fromPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._toPtr = ut.Core2D.layers.IgnoreRaycast._toPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._tempHeapPtr = ut.Core2D.layers.IgnoreRaycast._tempHeapPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._size = ut.Core2D.layers.IgnoreRaycast._size;
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.IgnoreRaycast is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.IgnoreRaycast._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.IgnoreRaycast._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.IgnoreRaycast', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.IgnoreRaycast.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.IgnoreRaycast.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.IgnoreRaycast._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.IgnoreRaycast.cid; } } });
ut.Core2D.layers.Water = function() {
};
ut.Core2D.layers.Water.prototype = Object.create(null);
ut.Core2D.layers.Water.prototype.constructor = ut.Core2D.layers.Water;
Object.defineProperties(ut.Core2D.layers.Water.prototype, {
});
ut.Core2D.layers.Water._size = 1;
ut.Core2D.layers.Water._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Water.prototype);
  return v;
};
ut.Core2D.layers.Water._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Water._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Water.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Water.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Water.StorageView.prototype.constructor = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water._view = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water.StorageView._isSharedComp = ut.Core2D.layers.Water._isSharedComp = false;
ut.Core2D.layers.Water.StorageView._fromPtr = ut.Core2D.layers.Water._fromPtr;
ut.Core2D.layers.Water.StorageView._toPtr = ut.Core2D.layers.Water._toPtr;
ut.Core2D.layers.Water.StorageView._tempHeapPtr = ut.Core2D.layers.Water._tempHeapPtr;
ut.Core2D.layers.Water.StorageView._size = ut.Core2D.layers.Water._size;
ut.Core2D.layers.Water.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Water.StorageView.prototype, {
});
ut.Core2D.layers.Water._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Water is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Water._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Water._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Water', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Water, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Water.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Water.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Water._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Water.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Water.cid; } } });
ut.Core2D.layers.UI = function() {
};
ut.Core2D.layers.UI.prototype = Object.create(null);
ut.Core2D.layers.UI.prototype.constructor = ut.Core2D.layers.UI;
Object.defineProperties(ut.Core2D.layers.UI.prototype, {
});
ut.Core2D.layers.UI._size = 1;
ut.Core2D.layers.UI._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.UI.prototype);
  return v;
};
ut.Core2D.layers.UI._toPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.UI._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.UI.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.UI.StorageView.prototype = Object.create(null);
ut.Core2D.layers.UI.StorageView.prototype.constructor = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI._view = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI.StorageView._isSharedComp = ut.Core2D.layers.UI._isSharedComp = false;
ut.Core2D.layers.UI.StorageView._fromPtr = ut.Core2D.layers.UI._fromPtr;
ut.Core2D.layers.UI.StorageView._toPtr = ut.Core2D.layers.UI._toPtr;
ut.Core2D.layers.UI.StorageView._tempHeapPtr = ut.Core2D.layers.UI._tempHeapPtr;
ut.Core2D.layers.UI.StorageView._size = ut.Core2D.layers.UI._size;
ut.Core2D.layers.UI.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.UI.StorageView.prototype, {
});
ut.Core2D.layers.UI._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.UI is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.UI._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.UI._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.UI', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.UI, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.UI.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.UI.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.UI._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.UI.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.UI.cid; } } });
ut.Core2D.layers.PostProcessing = function() {
};
ut.Core2D.layers.PostProcessing.prototype = Object.create(null);
ut.Core2D.layers.PostProcessing.prototype.constructor = ut.Core2D.layers.PostProcessing;
Object.defineProperties(ut.Core2D.layers.PostProcessing.prototype, {
});
ut.Core2D.layers.PostProcessing._size = 1;
ut.Core2D.layers.PostProcessing._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.PostProcessing.prototype);
  return v;
};
ut.Core2D.layers.PostProcessing._toPtr = function(ptr, v) {
};
ut.Core2D.layers.PostProcessing._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.PostProcessing._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.PostProcessing._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.PostProcessing.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.PostProcessing.StorageView.prototype = Object.create(null);
ut.Core2D.layers.PostProcessing.StorageView.prototype.constructor = ut.Core2D.layers.PostProcessing.StorageView;
ut.Core2D.layers.PostProcessing._view = ut.Core2D.layers.PostProcessing.StorageView;
ut.Core2D.layers.PostProcessing.StorageView._isSharedComp = ut.Core2D.layers.PostProcessing._isSharedComp = false;
ut.Core2D.layers.PostProcessing.StorageView._fromPtr = ut.Core2D.layers.PostProcessing._fromPtr;
ut.Core2D.layers.PostProcessing.StorageView._toPtr = ut.Core2D.layers.PostProcessing._toPtr;
ut.Core2D.layers.PostProcessing.StorageView._tempHeapPtr = ut.Core2D.layers.PostProcessing._tempHeapPtr;
ut.Core2D.layers.PostProcessing.StorageView._size = ut.Core2D.layers.PostProcessing._size;
ut.Core2D.layers.PostProcessing.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.PostProcessing.StorageView.prototype, {
});
ut.Core2D.layers.PostProcessing._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.PostProcessing is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.PostProcessing._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.PostProcessing._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.PostProcessing', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.PostProcessing, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.PostProcessing.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.PostProcessing.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.PostProcessing._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.PostProcessing.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.PostProcessing.cid; } } });
ut.Core2D.layers.Cutscene = function() {
};
ut.Core2D.layers.Cutscene.prototype = Object.create(null);
ut.Core2D.layers.Cutscene.prototype.constructor = ut.Core2D.layers.Cutscene;
Object.defineProperties(ut.Core2D.layers.Cutscene.prototype, {
});
ut.Core2D.layers.Cutscene._size = 1;
ut.Core2D.layers.Cutscene._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Cutscene.prototype);
  return v;
};
ut.Core2D.layers.Cutscene._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Cutscene._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Cutscene._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Cutscene._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Cutscene.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Cutscene.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Cutscene.StorageView.prototype.constructor = ut.Core2D.layers.Cutscene.StorageView;
ut.Core2D.layers.Cutscene._view = ut.Core2D.layers.Cutscene.StorageView;
ut.Core2D.layers.Cutscene.StorageView._isSharedComp = ut.Core2D.layers.Cutscene._isSharedComp = false;
ut.Core2D.layers.Cutscene.StorageView._fromPtr = ut.Core2D.layers.Cutscene._fromPtr;
ut.Core2D.layers.Cutscene.StorageView._toPtr = ut.Core2D.layers.Cutscene._toPtr;
ut.Core2D.layers.Cutscene.StorageView._tempHeapPtr = ut.Core2D.layers.Cutscene._tempHeapPtr;
ut.Core2D.layers.Cutscene.StorageView._size = ut.Core2D.layers.Cutscene._size;
ut.Core2D.layers.Cutscene.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView.prototype, {
});
ut.Core2D.layers.Cutscene._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Cutscene is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Cutscene._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Cutscene._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Cutscene', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Cutscene, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Cutscene.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Cutscene.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Cutscene._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Cutscene.cid; } } });
ut.EditorExtensions = ut.EditorExtensions || {};
ut.EditorExtensions.AssetReferenceAnimationClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAnimationClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._size = 24;
ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAnimationClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip._view = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAnimationClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAnimationClip._toPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._size = ut.EditorExtensions.AssetReferenceAnimationClip._size;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAnimationClip._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAnimationClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAnimationClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAnimationClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAnimationClip.cid; } } });
ut.EditorExtensions.AssetReferenceAnimationClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAudioClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAudioClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._size = 24;
ut.EditorExtensions.AssetReferenceAudioClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAudioClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAudioClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip._view = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAudioClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAudioClip._fromPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAudioClip._toPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._size = ut.EditorExtensions.AssetReferenceAudioClip._size;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAudioClip._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAudioClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAudioClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAudioClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAudioClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAudioClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAudioClip.cid; } } });
ut.EditorExtensions.AssetReferenceAudioClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceSprite = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSprite.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSprite._size = 24;
ut.EditorExtensions.AssetReferenceSprite._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSprite.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSprite._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite._view = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSprite._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSprite.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSprite._fromPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSprite._toPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._size = ut.EditorExtensions.AssetReferenceSprite._size;
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSprite._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSprite._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSprite._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSprite', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSprite.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSprite.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSprite._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSprite.cid; } } });
ut.EditorExtensions.AssetReferenceSprite.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSpriteAtlas = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._size = 24;
ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas._view = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSpriteAtlas._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._size = ut.EditorExtensions.AssetReferenceSpriteAtlas._size;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSpriteAtlas', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; } } });
ut.EditorExtensions.AssetReferenceSpriteAtlas.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceTexture2D = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTexture2D.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._size = 24;
ut.EditorExtensions.AssetReferenceTexture2D._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTexture2D.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTexture2D._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D._view = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTexture2D._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTexture2D._fromPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTexture2D._toPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._size = ut.EditorExtensions.AssetReferenceTexture2D._size;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTexture2D._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTexture2D._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTexture2D', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTexture2D.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTexture2D.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTexture2D._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTexture2D.cid; } } });
ut.EditorExtensions.AssetReferenceTexture2D.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTileBase = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTileBase.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTileBase.prototype.constructor = ut.EditorExtensions.AssetReferenceTileBase;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTileBase._size = 24;
ut.EditorExtensions.AssetReferenceTileBase._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTileBase.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTileBase._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTileBase._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTileBase._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTileBase._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTileBase.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTileBase.StorageView;
ut.EditorExtensions.AssetReferenceTileBase._view = ut.EditorExtensions.AssetReferenceTileBase.StorageView;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTileBase._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTileBase._fromPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTileBase._toPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTileBase._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._size = ut.EditorExtensions.AssetReferenceTileBase._size;
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTileBase._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTileBase._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTileBase._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTileBase', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTileBase.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTileBase.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTileBase._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTileBase.cid; } } });
ut.EditorExtensions.AssetReferenceTileBase.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTileBase.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTileBase.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTMP_FontAsset = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._size = 24;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._view = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTMP_FontAsset._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._size = ut.EditorExtensions.AssetReferenceTMP_FontAsset._size;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTMP_FontAsset', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; } } });
ut.EditorExtensions.AssetReferenceTMP_FontAsset.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.CameraCullingMask = function(arg0) {
  this._mask = (arg0|0);
};
ut.EditorExtensions.CameraCullingMask.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.prototype.constructor = ut.EditorExtensions.CameraCullingMask;
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.prototype, {
  mask: {
    get: function() { return this._mask; },
    set: function(v) { this._mask = (v|0); },
  },
});
ut.EditorExtensions.CameraCullingMask._size = 4;
ut.EditorExtensions.CameraCullingMask._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.CameraCullingMask.prototype);
  v._mask = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.CameraCullingMask._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.CameraCullingMask._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.constructor = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask._view = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask.StorageView._isSharedComp = ut.EditorExtensions.CameraCullingMask._isSharedComp = false;
ut.EditorExtensions.CameraCullingMask.StorageView._fromPtr = ut.EditorExtensions.CameraCullingMask._fromPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._toPtr = ut.EditorExtensions.CameraCullingMask._toPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._tempHeapPtr = ut.EditorExtensions.CameraCullingMask._tempHeapPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._size = ut.EditorExtensions.CameraCullingMask._size;
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView.prototype, {
  mask: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.CameraCullingMask._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.CameraCullingMask is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.CameraCullingMask._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.EditorExtensions.CameraCullingMask._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.CameraCullingMask', 4, [
    {name: 'mask', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.CameraCullingMask, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.CameraCullingMask.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.CameraCullingMask.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.CameraCullingMask._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.CameraCullingMask.cid; } } });
ut.EditorExtensions.CameraCullingMask.mask = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.CameraCullingMask };
ut.EditorExtensions.EntityLayer = function(arg0) {
  this._layer = (arg0|0);
};
ut.EditorExtensions.EntityLayer.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.prototype.constructor = ut.EditorExtensions.EntityLayer;
Object.defineProperties(ut.EditorExtensions.EntityLayer.prototype, {
  layer: {
    get: function() { return this._layer; },
    set: function(v) { this._layer = (v|0); },
  },
});
ut.EditorExtensions.EntityLayer._size = 4;
ut.EditorExtensions.EntityLayer._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.EntityLayer.prototype);
  v._layer = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.EntityLayer._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.EntityLayer._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.EntityLayer.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.EntityLayer.StorageView.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.StorageView.prototype.constructor = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer._view = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer.StorageView._isSharedComp = ut.EditorExtensions.EntityLayer._isSharedComp = false;
ut.EditorExtensions.EntityLayer.StorageView._fromPtr = ut.EditorExtensions.EntityLayer._fromPtr;
ut.EditorExtensions.EntityLayer.StorageView._toPtr = ut.EditorExtensions.EntityLayer._toPtr;
ut.EditorExtensions.EntityLayer.StorageView._tempHeapPtr = ut.EditorExtensions.EntityLayer._tempHeapPtr;
ut.EditorExtensions.EntityLayer.StorageView._size = ut.EditorExtensions.EntityLayer._size;
ut.EditorExtensions.EntityLayer.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView.prototype, {
  layer: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.EntityLayer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.EntityLayer is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.EntityLayer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.EditorExtensions.EntityLayer._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.EntityLayer', 4, [
    {name: 'layer', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.EntityLayer, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.EntityLayer.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.EntityLayer.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.EntityLayer._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.EntityLayer.cid; } } });
ut.EditorExtensions.EntityLayer.layer = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.EntityLayer };
game.DamageSystemJS = ut.System.define({
  name: "game.DamageSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart","UTiny.HitBox2D.HitBox2DSystem"]
});
game.ExplosionSystemJS = ut.System.define({
  name: "game.ExplosionSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart","game.DamageSystemJS"]
});
game.GameManagerSystemJS = ut.System.define({
  name: "game.GameManagerSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart","game.DamageSystemJS"]
});
game.HitSystemJS = ut.System.define({
  name: "game.HitSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart","game.DamageSystemJS"]
});
game.LaserSystemJS = ut.System.define({
  name: "game.LaserSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart","game.DamageSystemJS"]
});
game.LifeManagerSystemJS = ut.System.define({
  name: "game.LifeManagerSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart","game.DamageSystemJS"]
});
game.MoveSystemJS = ut.System.define({
  name: "game.MoveSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart","UTiny.HTML.InputHandler","game.DamageSystemJS"]
});
game.RaiderSystemJS = ut.System.define({
  name: "game.RaiderSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart","game.DamageSystemJS"]
});
game.RaidersSystemJS = ut.System.define({
  name: "game.RaidersSystemJS"
 ,updatesBefore: ["game.RaiderSystemJS","UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart","game.DamageSystemJS"]
});
game.ScoreSystemJS = ut.System.define({
  name: "game.ScoreSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart","game.DamageSystemJS"]
});
game.SpaceshipSystemJS = ut.System.define({
  name: "game.SpaceshipSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart","UTiny.HTML.InputHandler","game.DamageSystemJS"]
});




((function (ut) {

    var ComponentSystem = /** @class */ (function () {
        
        function ComponentSystem() {}

        ComponentSystem.prototype._MakeSystemFn = function () {
            var _this = this;
            return function (scheduler, world) {
                _this.scheduler = scheduler;
                _this.world = world;
                _this.OnUpdate();
            };
        };
        return ComponentSystem;
    }());
    ut.ComponentSystem = ComponentSystem;

    function executeAfter() { }
    ut.executeAfter = executeAfter;

    function executeBefore() { }
    ut.executeBefore = executeBefore;

    function requiredComponents() { }
    ut.requiredComponents = requiredComponents;

    function optionalComponents() { }
    ut.optionalComponents = optionalComponents;

    var EntityFilter = /** @class */ (function () {
        function EntityFilter() {}
        EntityFilter.prototype.Read = function (world, entity) {};
        EntityFilter.prototype.Reset = function () {};
        EntityFilter.prototype.ForEach = function (world, callback) {
            var _this = this;
            world.forEach(this.constructor._Components, function(entity) {
                _this.Read(world, entity);
                callback(entity);
                if (world.exists(entity)) {
                    _this.Write(world, entity);
                }
            });
        };
        return EntityFilter;
    }());
    ut.EntityFilter = EntityFilter;

    function usingFilters() { }
    ut.usingFilters = usingFilters;

    var ComponentBehaviour = /** @class */ (function () {
        function ComponentBehaviour() { }
        ComponentBehaviour.prototype.IsEnabled = function (world, entity) {
            var stateType = this.constructor._StateType;
            return world.hasComponent(entity, stateType) && world.getComponentData(entity, stateType).enabled;
        };
        ComponentBehaviour.prototype.Enable = function (world, entity) {
            var stateType = this.constructor._StateType;
            var hasState = world.hasComponent(entity, stateType);
            var state = hasState ? world.getComponentData(entity, stateType) : new stateType;
            if (!state.enabled) {
                state.enabled = true;
                state.onEnableCalled = false;
                state.onDisableCalled = false;
                if (hasState) {
                    world.setComponentData(entity, state);
                } else {
                    world.addComponentData(entity, state);
                }
            }
        };
        ComponentBehaviour.prototype.Disable = function (world, entity) {
            var stateType = this.constructor._StateType;
            var hasState = world.hasComponent(entity, stateType);
            var state = hasState ? world.getComponentData(entity, stateType) : new stateType;
            if (state.enabled) {
                state.enabled = false;
                state.onEnableCalled = false;
                state.onDisableCalled = false;
                if (hasState) {
                    world.setComponentData(entity, state);
                } else {
                    world.addComponentData(entity, state);
                }
            }
        };
        ComponentBehaviour.prototype._MakeOnEntityEnable = function () {
            var _this = this;
            var _stateType = this.constructor._StateType;
            return function (scheduler, world) {
                var _filter = _this._GetFilter();
                _this.scheduler = scheduler;
                _this.world = world;
                _filter.ForEach(_this.world, function(entity) {
                    var hasState = _this.world.hasComponent(entity, _stateType);
                    var state = hasState ? _this.world.getComponentData(entity, _stateType) : new _stateType;
                    if (!hasState || !state.initialized) {
                        state.enabled = true;
                        state.initialized = true;
                    }
                    try {
                        if (!state.onEnableCalled && state.enabled) {
                            state.onEnableCalled = true;
                            _this.entity = entity;
                            _this.OnEntityEnable();
                        }
                    } finally {
                        if (_this.world.exists(entity)) {
                            if (hasState) {
                                _this.world.setComponentData(entity, state);
                            } else {
                                _this.world.addComponentData(entity, state);
                            }
                        }
                    }
                });
                _filter.Reset();
            };
        };
        ComponentBehaviour.prototype._MakeOnEntityUpdate = function () {
            var _this = this;
            var _stateType = this.constructor._StateType;
            return function (scheduler, world) {
                var _filter = _this._GetFilter();
                _this.scheduler = scheduler;
                _this.world = world;
                _filter.ForEach(_this.world, function(entity) {
                    var hasState = _this.world.hasComponent(entity, _stateType);
                    var state = hasState ? _this.world.getComponentData(entity, _stateType) : new _stateType;
                    if (!hasState || !state.initialized) {
                        state.enabled = true;
                        state.initialized = true;
                        if (hasState) {
                            _this.world.setComponentData(entity, state);
                        } else {
                            _this.world.addComponentData(entity, state);
                        }
                    }
                    if (state.enabled) {
                        _this.entity = entity;
                        _this.OnEntityUpdate();
                    }
                });
                _filter.Reset();
            };
        };
        ComponentBehaviour.prototype._MakeOnEntityDisable = function () {
            var _this = this;
            var _stateType = this.constructor._StateType;
            return function (scheduler, world) {
                var _filter = _this._GetFilter();
                _this.scheduler = scheduler;
                _this.world = world;
                _filter.ForEach(_this.world, function(entity) {
                    var hasState = _this.world.hasComponent(entity, _stateType);
                    var state = hasState ? _this.world.getComponentData(entity, _stateType) : new _stateType;
                    if (!hasState || !state.initialized) {
                        state.enabled = true;
                        state.initialized = true;
                    }
                    try {
                        if (!state.onDisableCalled && !state.enabled) {
                            state.onDisableCalled = true;
                            _this.entity = entity;
                            _this.OnEntityDisable();
                        }
                    } finally {
                        if (_this.world.exists(entity)) {
                            if (hasState) {
                                _this.world.setComponentData(entity, state);
                            } else {
                                _this.world.addComponentData(entity, state);
                            }
                        }
                    }
                });
                _filter.Reset();
            };
        };
        return ComponentBehaviour;
    }());
    ut.ComponentBehaviour = ComponentBehaviour;


})(ut || (ut = {})));
