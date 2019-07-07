/*
 * AUTO-GENERATED, DO NOT EDIT BY HAND
 */
// In order to process bindings, we first need type registry from compiled code to be available.
ut.meta.registerTypes();
var game = game || {};
game.GameStateTypes = {
  Boot: 0,
  Loading: 1,
  MainMenu: 2,
  Game: 3,
  GameOver: 4,
  Settings: 5,
  Credits: 6,
  Paused: 7,
  WorldMap: 8,
  Cutscene: 9,
  CutsceneEnd: 10,
  Transition: 11,
  Languages: 12
};
game.GameStateTypes._typeDesc = (function() {
  var enumType = ut.meta.getType('int32');
  return ut.meta.allocType(6, 'game.GameStateTypes', 4, [
    {name: 'Boot', offset: 0, type: enumType},
    {name: 'Loading', offset: 1, type: enumType},
    {name: 'MainMenu', offset: 2, type: enumType},
    {name: 'Game', offset: 3, type: enumType},
    {name: 'GameOver', offset: 4, type: enumType},
    {name: 'Settings', offset: 5, type: enumType},
    {name: 'Credits', offset: 6, type: enumType},
    {name: 'Paused', offset: 7, type: enumType},
    {name: 'WorldMap', offset: 8, type: enumType},
    {name: 'Cutscene', offset: 9, type: enumType},
    {name: 'CutsceneEnd', offset: 10, type: enumType},
    {name: 'Transition', offset: 11, type: enumType},
    {name: 'Languages', offset: 12, type: enumType}
  ]);
})();
game.DinosaurAttackTypes = {
  TailWhip: 0,
  Crush: 1,
  Launch: 2,
  Jump: 3,
  Stomp: 4,
  Bite: 5,
  Laser: 6
};
game.DinosaurAttackTypes._typeDesc = (function() {
  var enumType = ut.meta.getType('int32');
  return ut.meta.allocType(6, 'game.DinosaurAttackTypes', 4, [
    {name: 'TailWhip', offset: 0, type: enumType},
    {name: 'Crush', offset: 1, type: enumType},
    {name: 'Launch', offset: 2, type: enumType},
    {name: 'Jump', offset: 3, type: enumType},
    {name: 'Stomp', offset: 4, type: enumType},
    {name: 'Bite', offset: 5, type: enumType},
    {name: 'Laser', offset: 6, type: enumType}
  ]);
})();
game.PersonState = {
  Appear: 0,
  Fire: 1,
  Walk: 2
};
game.PersonState._typeDesc = (function() {
  var enumType = ut.meta.getType('int32');
  return ut.meta.allocType(6, 'game.PersonState', 4, [
    {name: 'Appear', offset: 0, type: enumType},
    {name: 'Fire', offset: 1, type: enumType},
    {name: 'Walk', offset: 2, type: enumType}
  ]);
})();
game.GemPowerUpTypes = {
  None: 0,
  Row: 1,
  Column: 2,
  Square: 3,
  DiagonalCross: 4,
  SameColor: 5
};
game.GemPowerUpTypes._typeDesc = (function() {
  var enumType = ut.meta.getType('int32');
  return ut.meta.allocType(6, 'game.GemPowerUpTypes', 4, [
    {name: 'None', offset: 0, type: enumType},
    {name: 'Row', offset: 1, type: enumType},
    {name: 'Column', offset: 2, type: enumType},
    {name: 'Square', offset: 3, type: enumType},
    {name: 'DiagonalCross', offset: 4, type: enumType},
    {name: 'SameColor', offset: 5, type: enumType}
  ]);
})();
game.GemTypes = {
  Blue: 0,
  Green: 1,
  Purple: 2,
  Red: 3,
  Silver: 4,
  Yellow: 5,
  Egg: 6,
  ColorBomb: 7
};
game.GemTypes._typeDesc = (function() {
  var enumType = ut.meta.getType('int32');
  return ut.meta.allocType(6, 'game.GemTypes', 4, [
    {name: 'Blue', offset: 0, type: enumType},
    {name: 'Green', offset: 1, type: enumType},
    {name: 'Purple', offset: 2, type: enumType},
    {name: 'Red', offset: 3, type: enumType},
    {name: 'Silver', offset: 4, type: enumType},
    {name: 'Yellow', offset: 5, type: enumType},
    {name: 'Egg', offset: 6, type: enumType},
    {name: 'ColorBomb', offset: 7, type: enumType}
  ]);
})();
game.SkinTypes = {
  Camp: 0,
  Farm: 1,
  City: 2
};
game.SkinTypes._typeDesc = (function() {
  var enumType = ut.meta.getType('int32');
  return ut.meta.allocType(6, 'game.SkinTypes', 4, [
    {name: 'Camp', offset: 0, type: enumType},
    {name: 'Farm', offset: 1, type: enumType},
    {name: 'City', offset: 2, type: enumType}
  ]);
})();
game.CustomLabelAlignment = {
  Left: 0,
  Center: 1,
  Right: 2
};
game.CustomLabelAlignment._typeDesc = (function() {
  var enumType = ut.meta.getType('int32');
  return ut.meta.allocType(6, 'game.CustomLabelAlignment', 4, [
    {name: 'Left', offset: 0, type: enumType},
    {name: 'Center', offset: 1, type: enumType},
    {name: 'Right', offset: 2, type: enumType}
  ]);
})();
game.ScrollingObjectSpawnerDetails = function(arg0, arg1, arg2, arg3) {
  this._Skin = (arg0|0);
  this._MinSpawnIntervalX = (+(arg1===undefined ? 0 : arg1));
  this._MaxSpawnIntervalX = (+(arg2===undefined ? 0 : arg2));
  this._SpawnIntervalFrequency = (+(arg3===undefined ? 0 : arg3));
};
game.ScrollingObjectSpawnerDetails.prototype = Object.create(null);
game.ScrollingObjectSpawnerDetails.prototype.constructor = game.ScrollingObjectSpawnerDetails;
Object.defineProperties(game.ScrollingObjectSpawnerDetails.prototype, {
  Skin: {
    get: function() { return this._Skin; },
    set: function(v) { this._Skin = (v|0); },
  },
  MinSpawnIntervalX: {
    get: function() { return this._MinSpawnIntervalX; },
    set: function(v) { this._MinSpawnIntervalX = (+(v===undefined ? 0 : v)); },
  },
  MaxSpawnIntervalX: {
    get: function() { return this._MaxSpawnIntervalX; },
    set: function(v) { this._MaxSpawnIntervalX = (+(v===undefined ? 0 : v)); },
  },
  SpawnIntervalFrequency: {
    get: function() { return this._SpawnIntervalFrequency; },
    set: function(v) { this._SpawnIntervalFrequency = (+(v===undefined ? 0 : v)); },
  },
});
game.ScrollingObjectSpawnerDetails._size = 16;
game.ScrollingObjectSpawnerDetails._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ScrollingObjectSpawnerDetails.prototype);
  v._Skin = HEAP32[(ptr+0)>>2];
  v._MinSpawnIntervalX = HEAPF32[(ptr+4)>>2];
  v._MaxSpawnIntervalX = HEAPF32[(ptr+8)>>2];
  v._SpawnIntervalFrequency = HEAPF32[(ptr+12)>>2];
  return v;
};
game.ScrollingObjectSpawnerDetails._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.Skin;
  HEAPF32[(ptr+4)>>2] = v.MinSpawnIntervalX;
  HEAPF32[(ptr+8)>>2] = v.MaxSpawnIntervalX;
  HEAPF32[(ptr+12)>>2] = v.SpawnIntervalFrequency;
};
game.ScrollingObjectSpawnerDetails._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.Skin;
  HEAPF32[(ptr+4)>>2] = v.MinSpawnIntervalX;
  HEAPF32[(ptr+8)>>2] = v.MaxSpawnIntervalX;
  HEAPF32[(ptr+12)>>2] = v.SpawnIntervalFrequency;
};
game.ScrollingObjectSpawnerDetails._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.ScrollingObjectSpawnerDetails._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ScrollingObjectSpawnerDetails._typeDesc = (function() {
  return ut.meta.allocType(4, 'game.ScrollingObjectSpawnerDetails', 16, [
    {name: 'Skin', offset: 0, type: ut.meta.getType('game.SkinTypes')},
    {name: 'MinSpawnIntervalX', offset: 4, type: ut.meta.getType('float')},
    {name: 'MaxSpawnIntervalX', offset: 8, type: ut.meta.getType('float')},
    {name: 'SpawnIntervalFrequency', offset: 12, type: ut.meta.getType('float')}
  ]);
})();
game.SpriteRendererSkinColorInfo = function(arg0, arg1) {
  this._Skin = (arg0|0);
  this._Color = (arg1 === undefined ? new ut.Core2D.Color : arg1);
};
game.SpriteRendererSkinColorInfo.prototype = Object.create(null);
game.SpriteRendererSkinColorInfo.prototype.constructor = game.SpriteRendererSkinColorInfo;
Object.defineProperties(game.SpriteRendererSkinColorInfo.prototype, {
  Skin: {
    get: function() { return this._Skin; },
    set: function(v) { this._Skin = (v|0); },
  },
  Color: {
    get: function() { return this._Color; },
    set: function(v) { this._Color = (v === undefined ? new ut.Core2D.Color : v); },
  },
});
game.SpriteRendererSkinColorInfo._size = 20;
game.SpriteRendererSkinColorInfo._fromPtr = function(ptr, v) {
  v = v || Object.create(game.SpriteRendererSkinColorInfo.prototype);
  v._Skin = HEAP32[(ptr+0)>>2];
  v._Color = ut.Core2D.Color._fromPtr(ptr+4);
  return v;
};
game.SpriteRendererSkinColorInfo._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.Skin;
  ut.Core2D.Color._toPtr(ptr+4, v.Color);
};
game.SpriteRendererSkinColorInfo._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.Skin;
  ut.Core2D.Color._toPtr(ptr+4, v.Color);
};
game.SpriteRendererSkinColorInfo._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.SpriteRendererSkinColorInfo._toTempHeapPtr(ptr, v);
  return ptr;
};
game.SpriteRendererSkinColorInfo._typeDesc = (function() {
  return ut.meta.allocType(4, 'game.SpriteRendererSkinColorInfo', 20, [
    {name: 'Skin', offset: 0, type: ut.meta.getType('game.SkinTypes')},
    {name: 'Color', offset: 4, type: ut.meta.getType('ut.Core2D.Color')}
  ]);
})();
game.LocalizationItem = function(arg0, arg1, arg2) {
  this._TextID = (arg0 === undefined ? '' : arg0);
  this._en = (arg1 === undefined ? '' : arg1);
  this._fr = (arg2 === undefined ? '' : arg2);
};
game.LocalizationItem.prototype = Object.create(null);
game.LocalizationItem.prototype.constructor = game.LocalizationItem;
Object.defineProperties(game.LocalizationItem.prototype, {
  TextID: {
    get: function() { return this._TextID; },
    set: function(v) { this._TextID = (v === undefined ? '' : v); },
  },
  en: {
    get: function() { return this._en; },
    set: function(v) { this._en = (v === undefined ? '' : v); },
  },
  fr: {
    get: function() { return this._fr; },
    set: function(v) { this._fr = (v === undefined ? '' : v); },
  },
});
game.LocalizationItem._size = 24;
game.LocalizationItem._fromPtr = function(ptr, v) {
  v = v || Object.create(game.LocalizationItem.prototype);
  v._TextID = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._en = (Module._ut_nativestring_data(ptr+8) ? UTF8ToString(Module._ut_nativestring_data(ptr+8)) : "");
  v._fr = (Module._ut_nativestring_data(ptr+16) ? UTF8ToString(Module._ut_nativestring_data(ptr+16)) : "");
  return v;
};
game.LocalizationItem._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.TextID);
  ut.newHeapNativeString(ptr+8, v.en);
  ut.newHeapNativeString(ptr+16, v.fr);
};
game.LocalizationItem._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.TextID);
  ut.toExistingScratchNativeString(ptr+8, v.en);
  ut.toExistingScratchNativeString(ptr+16, v.fr);
};
game.LocalizationItem._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) game.LocalizationItem._toTempHeapPtr(ptr, v);
  return ptr;
};
game.LocalizationItem._typeDesc = (function() {
  return ut.meta.allocType(4, 'game.LocalizationItem', 24, [
    {name: 'TextID', offset: 0, type: ut.meta.getType('string')},
    {name: 'en', offset: 8, type: ut.meta.getType('string')},
    {name: 'fr', offset: 16, type: ut.meta.getType('string')}
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
entities.game.CutsceneCamera = entities.game.CutsceneCamera || {};
entities.game.CutsceneCamera.Component = function() {
};
entities.game.CutsceneCamera.Component.prototype = Object.create(null);
entities.game.CutsceneCamera.Component.prototype.constructor = entities.game.CutsceneCamera.Component;
Object.defineProperties(entities.game.CutsceneCamera.Component.prototype, {
});
entities.game.CutsceneCamera.Component._size = 1;
entities.game.CutsceneCamera.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.CutsceneCamera.Component.prototype);
  return v;
};
entities.game.CutsceneCamera.Component._toPtr = function(ptr, v) {
};
entities.game.CutsceneCamera.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.CutsceneCamera.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.CutsceneCamera.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.CutsceneCamera.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.CutsceneCamera.Component.StorageView.prototype = Object.create(null);
entities.game.CutsceneCamera.Component.StorageView.prototype.constructor = entities.game.CutsceneCamera.Component.StorageView;
entities.game.CutsceneCamera.Component._view = entities.game.CutsceneCamera.Component.StorageView;
entities.game.CutsceneCamera.Component.StorageView._isSharedComp = entities.game.CutsceneCamera.Component._isSharedComp = false;
entities.game.CutsceneCamera.Component.StorageView._fromPtr = entities.game.CutsceneCamera.Component._fromPtr;
entities.game.CutsceneCamera.Component.StorageView._toPtr = entities.game.CutsceneCamera.Component._toPtr;
entities.game.CutsceneCamera.Component.StorageView._tempHeapPtr = entities.game.CutsceneCamera.Component._tempHeapPtr;
entities.game.CutsceneCamera.Component.StorageView._size = entities.game.CutsceneCamera.Component._size;
entities.game.CutsceneCamera.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.CutsceneCamera.Component.StorageView.prototype, {
});
entities.game.CutsceneCamera.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.CutsceneCamera.Component is a POD type, so a JavaScript side copy constructor entities.game.CutsceneCamera.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.CutsceneCamera.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.CutsceneCamera.Component', 1, []);
})();
Object.defineProperties(entities.game.CutsceneCamera.Component, { cid: { configurable: true, get: function() { delete entities.game.CutsceneCamera.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.CutsceneCamera.Component.cid = Module._ut_component_register_cid_with_type(entities.game.CutsceneCamera.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.CutsceneCamera.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.CutsceneCamera.Component.cid; } } });
entities.game.CutscenePartA = entities.game.CutscenePartA || {};
entities.game.CutscenePartA.Component = function() {
};
entities.game.CutscenePartA.Component.prototype = Object.create(null);
entities.game.CutscenePartA.Component.prototype.constructor = entities.game.CutscenePartA.Component;
Object.defineProperties(entities.game.CutscenePartA.Component.prototype, {
});
entities.game.CutscenePartA.Component._size = 1;
entities.game.CutscenePartA.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.CutscenePartA.Component.prototype);
  return v;
};
entities.game.CutscenePartA.Component._toPtr = function(ptr, v) {
};
entities.game.CutscenePartA.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.CutscenePartA.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.CutscenePartA.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.CutscenePartA.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.CutscenePartA.Component.StorageView.prototype = Object.create(null);
entities.game.CutscenePartA.Component.StorageView.prototype.constructor = entities.game.CutscenePartA.Component.StorageView;
entities.game.CutscenePartA.Component._view = entities.game.CutscenePartA.Component.StorageView;
entities.game.CutscenePartA.Component.StorageView._isSharedComp = entities.game.CutscenePartA.Component._isSharedComp = false;
entities.game.CutscenePartA.Component.StorageView._fromPtr = entities.game.CutscenePartA.Component._fromPtr;
entities.game.CutscenePartA.Component.StorageView._toPtr = entities.game.CutscenePartA.Component._toPtr;
entities.game.CutscenePartA.Component.StorageView._tempHeapPtr = entities.game.CutscenePartA.Component._tempHeapPtr;
entities.game.CutscenePartA.Component.StorageView._size = entities.game.CutscenePartA.Component._size;
entities.game.CutscenePartA.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.CutscenePartA.Component.StorageView.prototype, {
});
entities.game.CutscenePartA.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.CutscenePartA.Component is a POD type, so a JavaScript side copy constructor entities.game.CutscenePartA.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.CutscenePartA.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.CutscenePartA.Component', 1, []);
})();
Object.defineProperties(entities.game.CutscenePartA.Component, { cid: { configurable: true, get: function() { delete entities.game.CutscenePartA.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.CutscenePartA.Component.cid = Module._ut_component_register_cid_with_type(entities.game.CutscenePartA.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.CutscenePartA.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.CutscenePartA.Component.cid; } } });
entities.game.CutscenePartB = entities.game.CutscenePartB || {};
entities.game.CutscenePartB.Component = function() {
};
entities.game.CutscenePartB.Component.prototype = Object.create(null);
entities.game.CutscenePartB.Component.prototype.constructor = entities.game.CutscenePartB.Component;
Object.defineProperties(entities.game.CutscenePartB.Component.prototype, {
});
entities.game.CutscenePartB.Component._size = 1;
entities.game.CutscenePartB.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.CutscenePartB.Component.prototype);
  return v;
};
entities.game.CutscenePartB.Component._toPtr = function(ptr, v) {
};
entities.game.CutscenePartB.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.CutscenePartB.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.CutscenePartB.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.CutscenePartB.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.CutscenePartB.Component.StorageView.prototype = Object.create(null);
entities.game.CutscenePartB.Component.StorageView.prototype.constructor = entities.game.CutscenePartB.Component.StorageView;
entities.game.CutscenePartB.Component._view = entities.game.CutscenePartB.Component.StorageView;
entities.game.CutscenePartB.Component.StorageView._isSharedComp = entities.game.CutscenePartB.Component._isSharedComp = false;
entities.game.CutscenePartB.Component.StorageView._fromPtr = entities.game.CutscenePartB.Component._fromPtr;
entities.game.CutscenePartB.Component.StorageView._toPtr = entities.game.CutscenePartB.Component._toPtr;
entities.game.CutscenePartB.Component.StorageView._tempHeapPtr = entities.game.CutscenePartB.Component._tempHeapPtr;
entities.game.CutscenePartB.Component.StorageView._size = entities.game.CutscenePartB.Component._size;
entities.game.CutscenePartB.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.CutscenePartB.Component.StorageView.prototype, {
});
entities.game.CutscenePartB.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.CutscenePartB.Component is a POD type, so a JavaScript side copy constructor entities.game.CutscenePartB.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.CutscenePartB.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.CutscenePartB.Component', 1, []);
})();
Object.defineProperties(entities.game.CutscenePartB.Component, { cid: { configurable: true, get: function() { delete entities.game.CutscenePartB.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.CutscenePartB.Component.cid = Module._ut_component_register_cid_with_type(entities.game.CutscenePartB.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.CutscenePartB.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.CutscenePartB.Component.cid; } } });
entities.game.CutscenePartC = entities.game.CutscenePartC || {};
entities.game.CutscenePartC.Component = function() {
};
entities.game.CutscenePartC.Component.prototype = Object.create(null);
entities.game.CutscenePartC.Component.prototype.constructor = entities.game.CutscenePartC.Component;
Object.defineProperties(entities.game.CutscenePartC.Component.prototype, {
});
entities.game.CutscenePartC.Component._size = 1;
entities.game.CutscenePartC.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.CutscenePartC.Component.prototype);
  return v;
};
entities.game.CutscenePartC.Component._toPtr = function(ptr, v) {
};
entities.game.CutscenePartC.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.CutscenePartC.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.CutscenePartC.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.CutscenePartC.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.CutscenePartC.Component.StorageView.prototype = Object.create(null);
entities.game.CutscenePartC.Component.StorageView.prototype.constructor = entities.game.CutscenePartC.Component.StorageView;
entities.game.CutscenePartC.Component._view = entities.game.CutscenePartC.Component.StorageView;
entities.game.CutscenePartC.Component.StorageView._isSharedComp = entities.game.CutscenePartC.Component._isSharedComp = false;
entities.game.CutscenePartC.Component.StorageView._fromPtr = entities.game.CutscenePartC.Component._fromPtr;
entities.game.CutscenePartC.Component.StorageView._toPtr = entities.game.CutscenePartC.Component._toPtr;
entities.game.CutscenePartC.Component.StorageView._tempHeapPtr = entities.game.CutscenePartC.Component._tempHeapPtr;
entities.game.CutscenePartC.Component.StorageView._size = entities.game.CutscenePartC.Component._size;
entities.game.CutscenePartC.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.CutscenePartC.Component.StorageView.prototype, {
});
entities.game.CutscenePartC.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.CutscenePartC.Component is a POD type, so a JavaScript side copy constructor entities.game.CutscenePartC.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.CutscenePartC.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.CutscenePartC.Component', 1, []);
})();
Object.defineProperties(entities.game.CutscenePartC.Component, { cid: { configurable: true, get: function() { delete entities.game.CutscenePartC.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.CutscenePartC.Component.cid = Module._ut_component_register_cid_with_type(entities.game.CutscenePartC.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.CutscenePartC.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.CutscenePartC.Component.cid; } } });
entities.game.EndCutscenePartA = entities.game.EndCutscenePartA || {};
entities.game.EndCutscenePartA.Component = function() {
};
entities.game.EndCutscenePartA.Component.prototype = Object.create(null);
entities.game.EndCutscenePartA.Component.prototype.constructor = entities.game.EndCutscenePartA.Component;
Object.defineProperties(entities.game.EndCutscenePartA.Component.prototype, {
});
entities.game.EndCutscenePartA.Component._size = 1;
entities.game.EndCutscenePartA.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.EndCutscenePartA.Component.prototype);
  return v;
};
entities.game.EndCutscenePartA.Component._toPtr = function(ptr, v) {
};
entities.game.EndCutscenePartA.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.EndCutscenePartA.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.EndCutscenePartA.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.EndCutscenePartA.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.EndCutscenePartA.Component.StorageView.prototype = Object.create(null);
entities.game.EndCutscenePartA.Component.StorageView.prototype.constructor = entities.game.EndCutscenePartA.Component.StorageView;
entities.game.EndCutscenePartA.Component._view = entities.game.EndCutscenePartA.Component.StorageView;
entities.game.EndCutscenePartA.Component.StorageView._isSharedComp = entities.game.EndCutscenePartA.Component._isSharedComp = false;
entities.game.EndCutscenePartA.Component.StorageView._fromPtr = entities.game.EndCutscenePartA.Component._fromPtr;
entities.game.EndCutscenePartA.Component.StorageView._toPtr = entities.game.EndCutscenePartA.Component._toPtr;
entities.game.EndCutscenePartA.Component.StorageView._tempHeapPtr = entities.game.EndCutscenePartA.Component._tempHeapPtr;
entities.game.EndCutscenePartA.Component.StorageView._size = entities.game.EndCutscenePartA.Component._size;
entities.game.EndCutscenePartA.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.EndCutscenePartA.Component.StorageView.prototype, {
});
entities.game.EndCutscenePartA.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.EndCutscenePartA.Component is a POD type, so a JavaScript side copy constructor entities.game.EndCutscenePartA.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.EndCutscenePartA.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.EndCutscenePartA.Component', 1, []);
})();
Object.defineProperties(entities.game.EndCutscenePartA.Component, { cid: { configurable: true, get: function() { delete entities.game.EndCutscenePartA.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.EndCutscenePartA.Component.cid = Module._ut_component_register_cid_with_type(entities.game.EndCutscenePartA.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.EndCutscenePartA.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.EndCutscenePartA.Component.cid; } } });
entities.game.EndCutscenePartB = entities.game.EndCutscenePartB || {};
entities.game.EndCutscenePartB.Component = function() {
};
entities.game.EndCutscenePartB.Component.prototype = Object.create(null);
entities.game.EndCutscenePartB.Component.prototype.constructor = entities.game.EndCutscenePartB.Component;
Object.defineProperties(entities.game.EndCutscenePartB.Component.prototype, {
});
entities.game.EndCutscenePartB.Component._size = 1;
entities.game.EndCutscenePartB.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.EndCutscenePartB.Component.prototype);
  return v;
};
entities.game.EndCutscenePartB.Component._toPtr = function(ptr, v) {
};
entities.game.EndCutscenePartB.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.EndCutscenePartB.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.EndCutscenePartB.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.EndCutscenePartB.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.EndCutscenePartB.Component.StorageView.prototype = Object.create(null);
entities.game.EndCutscenePartB.Component.StorageView.prototype.constructor = entities.game.EndCutscenePartB.Component.StorageView;
entities.game.EndCutscenePartB.Component._view = entities.game.EndCutscenePartB.Component.StorageView;
entities.game.EndCutscenePartB.Component.StorageView._isSharedComp = entities.game.EndCutscenePartB.Component._isSharedComp = false;
entities.game.EndCutscenePartB.Component.StorageView._fromPtr = entities.game.EndCutscenePartB.Component._fromPtr;
entities.game.EndCutscenePartB.Component.StorageView._toPtr = entities.game.EndCutscenePartB.Component._toPtr;
entities.game.EndCutscenePartB.Component.StorageView._tempHeapPtr = entities.game.EndCutscenePartB.Component._tempHeapPtr;
entities.game.EndCutscenePartB.Component.StorageView._size = entities.game.EndCutscenePartB.Component._size;
entities.game.EndCutscenePartB.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.EndCutscenePartB.Component.StorageView.prototype, {
});
entities.game.EndCutscenePartB.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.EndCutscenePartB.Component is a POD type, so a JavaScript side copy constructor entities.game.EndCutscenePartB.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.EndCutscenePartB.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.EndCutscenePartB.Component', 1, []);
})();
Object.defineProperties(entities.game.EndCutscenePartB.Component, { cid: { configurable: true, get: function() { delete entities.game.EndCutscenePartB.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.EndCutscenePartB.Component.cid = Module._ut_component_register_cid_with_type(entities.game.EndCutscenePartB.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.EndCutscenePartB.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.EndCutscenePartB.Component.cid; } } });
entities.game.Dinosaur = entities.game.Dinosaur || {};
entities.game.Dinosaur.Component = function() {
};
entities.game.Dinosaur.Component.prototype = Object.create(null);
entities.game.Dinosaur.Component.prototype.constructor = entities.game.Dinosaur.Component;
Object.defineProperties(entities.game.Dinosaur.Component.prototype, {
});
entities.game.Dinosaur.Component._size = 1;
entities.game.Dinosaur.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Dinosaur.Component.prototype);
  return v;
};
entities.game.Dinosaur.Component._toPtr = function(ptr, v) {
};
entities.game.Dinosaur.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Dinosaur.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Dinosaur.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Dinosaur.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Dinosaur.Component.StorageView.prototype = Object.create(null);
entities.game.Dinosaur.Component.StorageView.prototype.constructor = entities.game.Dinosaur.Component.StorageView;
entities.game.Dinosaur.Component._view = entities.game.Dinosaur.Component.StorageView;
entities.game.Dinosaur.Component.StorageView._isSharedComp = entities.game.Dinosaur.Component._isSharedComp = false;
entities.game.Dinosaur.Component.StorageView._fromPtr = entities.game.Dinosaur.Component._fromPtr;
entities.game.Dinosaur.Component.StorageView._toPtr = entities.game.Dinosaur.Component._toPtr;
entities.game.Dinosaur.Component.StorageView._tempHeapPtr = entities.game.Dinosaur.Component._tempHeapPtr;
entities.game.Dinosaur.Component.StorageView._size = entities.game.Dinosaur.Component._size;
entities.game.Dinosaur.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Dinosaur.Component.StorageView.prototype, {
});
entities.game.Dinosaur.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Dinosaur.Component is a POD type, so a JavaScript side copy constructor entities.game.Dinosaur.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Dinosaur.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Dinosaur.Component', 1, []);
})();
Object.defineProperties(entities.game.Dinosaur.Component, { cid: { configurable: true, get: function() { delete entities.game.Dinosaur.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Dinosaur.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Dinosaur.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Dinosaur.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Dinosaur.Component.cid; } } });
entities.game.DinosaurLaserAttackBlackCover = entities.game.DinosaurLaserAttackBlackCover || {};
entities.game.DinosaurLaserAttackBlackCover.Component = function() {
};
entities.game.DinosaurLaserAttackBlackCover.Component.prototype = Object.create(null);
entities.game.DinosaurLaserAttackBlackCover.Component.prototype.constructor = entities.game.DinosaurLaserAttackBlackCover.Component;
Object.defineProperties(entities.game.DinosaurLaserAttackBlackCover.Component.prototype, {
});
entities.game.DinosaurLaserAttackBlackCover.Component._size = 1;
entities.game.DinosaurLaserAttackBlackCover.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.DinosaurLaserAttackBlackCover.Component.prototype);
  return v;
};
entities.game.DinosaurLaserAttackBlackCover.Component._toPtr = function(ptr, v) {
};
entities.game.DinosaurLaserAttackBlackCover.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.DinosaurLaserAttackBlackCover.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.DinosaurLaserAttackBlackCover.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.DinosaurLaserAttackBlackCover.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.DinosaurLaserAttackBlackCover.Component.StorageView.prototype = Object.create(null);
entities.game.DinosaurLaserAttackBlackCover.Component.StorageView.prototype.constructor = entities.game.DinosaurLaserAttackBlackCover.Component.StorageView;
entities.game.DinosaurLaserAttackBlackCover.Component._view = entities.game.DinosaurLaserAttackBlackCover.Component.StorageView;
entities.game.DinosaurLaserAttackBlackCover.Component.StorageView._isSharedComp = entities.game.DinosaurLaserAttackBlackCover.Component._isSharedComp = false;
entities.game.DinosaurLaserAttackBlackCover.Component.StorageView._fromPtr = entities.game.DinosaurLaserAttackBlackCover.Component._fromPtr;
entities.game.DinosaurLaserAttackBlackCover.Component.StorageView._toPtr = entities.game.DinosaurLaserAttackBlackCover.Component._toPtr;
entities.game.DinosaurLaserAttackBlackCover.Component.StorageView._tempHeapPtr = entities.game.DinosaurLaserAttackBlackCover.Component._tempHeapPtr;
entities.game.DinosaurLaserAttackBlackCover.Component.StorageView._size = entities.game.DinosaurLaserAttackBlackCover.Component._size;
entities.game.DinosaurLaserAttackBlackCover.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.DinosaurLaserAttackBlackCover.Component.StorageView.prototype, {
});
entities.game.DinosaurLaserAttackBlackCover.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.DinosaurLaserAttackBlackCover.Component is a POD type, so a JavaScript side copy constructor entities.game.DinosaurLaserAttackBlackCover.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.DinosaurLaserAttackBlackCover.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.DinosaurLaserAttackBlackCover.Component', 1, []);
})();
Object.defineProperties(entities.game.DinosaurLaserAttackBlackCover.Component, { cid: { configurable: true, get: function() { delete entities.game.DinosaurLaserAttackBlackCover.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.DinosaurLaserAttackBlackCover.Component.cid = Module._ut_component_register_cid_with_type(entities.game.DinosaurLaserAttackBlackCover.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.DinosaurLaserAttackBlackCover.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.DinosaurLaserAttackBlackCover.Component.cid; } } });
entities.game.Bird = entities.game.Bird || {};
entities.game.Bird.Component = function() {
};
entities.game.Bird.Component.prototype = Object.create(null);
entities.game.Bird.Component.prototype.constructor = entities.game.Bird.Component;
Object.defineProperties(entities.game.Bird.Component.prototype, {
});
entities.game.Bird.Component._size = 1;
entities.game.Bird.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Bird.Component.prototype);
  return v;
};
entities.game.Bird.Component._toPtr = function(ptr, v) {
};
entities.game.Bird.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Bird.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Bird.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Bird.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Bird.Component.StorageView.prototype = Object.create(null);
entities.game.Bird.Component.StorageView.prototype.constructor = entities.game.Bird.Component.StorageView;
entities.game.Bird.Component._view = entities.game.Bird.Component.StorageView;
entities.game.Bird.Component.StorageView._isSharedComp = entities.game.Bird.Component._isSharedComp = false;
entities.game.Bird.Component.StorageView._fromPtr = entities.game.Bird.Component._fromPtr;
entities.game.Bird.Component.StorageView._toPtr = entities.game.Bird.Component._toPtr;
entities.game.Bird.Component.StorageView._tempHeapPtr = entities.game.Bird.Component._tempHeapPtr;
entities.game.Bird.Component.StorageView._size = entities.game.Bird.Component._size;
entities.game.Bird.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Bird.Component.StorageView.prototype, {
});
entities.game.Bird.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Bird.Component is a POD type, so a JavaScript side copy constructor entities.game.Bird.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Bird.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Bird.Component', 1, []);
})();
Object.defineProperties(entities.game.Bird.Component, { cid: { configurable: true, get: function() { delete entities.game.Bird.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Bird.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Bird.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Bird.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Bird.Component.cid; } } });
entities.game.BuildingMedium = entities.game.BuildingMedium || {};
entities.game.BuildingMedium.Component = function() {
};
entities.game.BuildingMedium.Component.prototype = Object.create(null);
entities.game.BuildingMedium.Component.prototype.constructor = entities.game.BuildingMedium.Component;
Object.defineProperties(entities.game.BuildingMedium.Component.prototype, {
});
entities.game.BuildingMedium.Component._size = 1;
entities.game.BuildingMedium.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.BuildingMedium.Component.prototype);
  return v;
};
entities.game.BuildingMedium.Component._toPtr = function(ptr, v) {
};
entities.game.BuildingMedium.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.BuildingMedium.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.BuildingMedium.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.BuildingMedium.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.BuildingMedium.Component.StorageView.prototype = Object.create(null);
entities.game.BuildingMedium.Component.StorageView.prototype.constructor = entities.game.BuildingMedium.Component.StorageView;
entities.game.BuildingMedium.Component._view = entities.game.BuildingMedium.Component.StorageView;
entities.game.BuildingMedium.Component.StorageView._isSharedComp = entities.game.BuildingMedium.Component._isSharedComp = false;
entities.game.BuildingMedium.Component.StorageView._fromPtr = entities.game.BuildingMedium.Component._fromPtr;
entities.game.BuildingMedium.Component.StorageView._toPtr = entities.game.BuildingMedium.Component._toPtr;
entities.game.BuildingMedium.Component.StorageView._tempHeapPtr = entities.game.BuildingMedium.Component._tempHeapPtr;
entities.game.BuildingMedium.Component.StorageView._size = entities.game.BuildingMedium.Component._size;
entities.game.BuildingMedium.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.BuildingMedium.Component.StorageView.prototype, {
});
entities.game.BuildingMedium.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.BuildingMedium.Component is a POD type, so a JavaScript side copy constructor entities.game.BuildingMedium.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.BuildingMedium.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.BuildingMedium.Component', 1, []);
})();
Object.defineProperties(entities.game.BuildingMedium.Component, { cid: { configurable: true, get: function() { delete entities.game.BuildingMedium.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.BuildingMedium.Component.cid = Module._ut_component_register_cid_with_type(entities.game.BuildingMedium.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.BuildingMedium.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.BuildingMedium.Component.cid; } } });
entities.game.BuildingSmall = entities.game.BuildingSmall || {};
entities.game.BuildingSmall.Component = function() {
};
entities.game.BuildingSmall.Component.prototype = Object.create(null);
entities.game.BuildingSmall.Component.prototype.constructor = entities.game.BuildingSmall.Component;
Object.defineProperties(entities.game.BuildingSmall.Component.prototype, {
});
entities.game.BuildingSmall.Component._size = 1;
entities.game.BuildingSmall.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.BuildingSmall.Component.prototype);
  return v;
};
entities.game.BuildingSmall.Component._toPtr = function(ptr, v) {
};
entities.game.BuildingSmall.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.BuildingSmall.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.BuildingSmall.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.BuildingSmall.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.BuildingSmall.Component.StorageView.prototype = Object.create(null);
entities.game.BuildingSmall.Component.StorageView.prototype.constructor = entities.game.BuildingSmall.Component.StorageView;
entities.game.BuildingSmall.Component._view = entities.game.BuildingSmall.Component.StorageView;
entities.game.BuildingSmall.Component.StorageView._isSharedComp = entities.game.BuildingSmall.Component._isSharedComp = false;
entities.game.BuildingSmall.Component.StorageView._fromPtr = entities.game.BuildingSmall.Component._fromPtr;
entities.game.BuildingSmall.Component.StorageView._toPtr = entities.game.BuildingSmall.Component._toPtr;
entities.game.BuildingSmall.Component.StorageView._tempHeapPtr = entities.game.BuildingSmall.Component._tempHeapPtr;
entities.game.BuildingSmall.Component.StorageView._size = entities.game.BuildingSmall.Component._size;
entities.game.BuildingSmall.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.BuildingSmall.Component.StorageView.prototype, {
});
entities.game.BuildingSmall.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.BuildingSmall.Component is a POD type, so a JavaScript side copy constructor entities.game.BuildingSmall.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.BuildingSmall.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.BuildingSmall.Component', 1, []);
})();
Object.defineProperties(entities.game.BuildingSmall.Component, { cid: { configurable: true, get: function() { delete entities.game.BuildingSmall.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.BuildingSmall.Component.cid = Module._ut_component_register_cid_with_type(entities.game.BuildingSmall.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.BuildingSmall.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.BuildingSmall.Component.cid; } } });
entities.game.BuildingSmall2 = entities.game.BuildingSmall2 || {};
entities.game.BuildingSmall2.Component = function() {
};
entities.game.BuildingSmall2.Component.prototype = Object.create(null);
entities.game.BuildingSmall2.Component.prototype.constructor = entities.game.BuildingSmall2.Component;
Object.defineProperties(entities.game.BuildingSmall2.Component.prototype, {
});
entities.game.BuildingSmall2.Component._size = 1;
entities.game.BuildingSmall2.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.BuildingSmall2.Component.prototype);
  return v;
};
entities.game.BuildingSmall2.Component._toPtr = function(ptr, v) {
};
entities.game.BuildingSmall2.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.BuildingSmall2.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.BuildingSmall2.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.BuildingSmall2.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.BuildingSmall2.Component.StorageView.prototype = Object.create(null);
entities.game.BuildingSmall2.Component.StorageView.prototype.constructor = entities.game.BuildingSmall2.Component.StorageView;
entities.game.BuildingSmall2.Component._view = entities.game.BuildingSmall2.Component.StorageView;
entities.game.BuildingSmall2.Component.StorageView._isSharedComp = entities.game.BuildingSmall2.Component._isSharedComp = false;
entities.game.BuildingSmall2.Component.StorageView._fromPtr = entities.game.BuildingSmall2.Component._fromPtr;
entities.game.BuildingSmall2.Component.StorageView._toPtr = entities.game.BuildingSmall2.Component._toPtr;
entities.game.BuildingSmall2.Component.StorageView._tempHeapPtr = entities.game.BuildingSmall2.Component._tempHeapPtr;
entities.game.BuildingSmall2.Component.StorageView._size = entities.game.BuildingSmall2.Component._size;
entities.game.BuildingSmall2.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.BuildingSmall2.Component.StorageView.prototype, {
});
entities.game.BuildingSmall2.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.BuildingSmall2.Component is a POD type, so a JavaScript side copy constructor entities.game.BuildingSmall2.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.BuildingSmall2.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.BuildingSmall2.Component', 1, []);
})();
Object.defineProperties(entities.game.BuildingSmall2.Component, { cid: { configurable: true, get: function() { delete entities.game.BuildingSmall2.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.BuildingSmall2.Component.cid = Module._ut_component_register_cid_with_type(entities.game.BuildingSmall2.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.BuildingSmall2.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.BuildingSmall2.Component.cid; } } });
entities.game.BuildingTall = entities.game.BuildingTall || {};
entities.game.BuildingTall.Component = function() {
};
entities.game.BuildingTall.Component.prototype = Object.create(null);
entities.game.BuildingTall.Component.prototype.constructor = entities.game.BuildingTall.Component;
Object.defineProperties(entities.game.BuildingTall.Component.prototype, {
});
entities.game.BuildingTall.Component._size = 1;
entities.game.BuildingTall.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.BuildingTall.Component.prototype);
  return v;
};
entities.game.BuildingTall.Component._toPtr = function(ptr, v) {
};
entities.game.BuildingTall.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.BuildingTall.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.BuildingTall.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.BuildingTall.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.BuildingTall.Component.StorageView.prototype = Object.create(null);
entities.game.BuildingTall.Component.StorageView.prototype.constructor = entities.game.BuildingTall.Component.StorageView;
entities.game.BuildingTall.Component._view = entities.game.BuildingTall.Component.StorageView;
entities.game.BuildingTall.Component.StorageView._isSharedComp = entities.game.BuildingTall.Component._isSharedComp = false;
entities.game.BuildingTall.Component.StorageView._fromPtr = entities.game.BuildingTall.Component._fromPtr;
entities.game.BuildingTall.Component.StorageView._toPtr = entities.game.BuildingTall.Component._toPtr;
entities.game.BuildingTall.Component.StorageView._tempHeapPtr = entities.game.BuildingTall.Component._tempHeapPtr;
entities.game.BuildingTall.Component.StorageView._size = entities.game.BuildingTall.Component._size;
entities.game.BuildingTall.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.BuildingTall.Component.StorageView.prototype, {
});
entities.game.BuildingTall.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.BuildingTall.Component is a POD type, so a JavaScript side copy constructor entities.game.BuildingTall.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.BuildingTall.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.BuildingTall.Component', 1, []);
})();
Object.defineProperties(entities.game.BuildingTall.Component, { cid: { configurable: true, get: function() { delete entities.game.BuildingTall.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.BuildingTall.Component.cid = Module._ut_component_register_cid_with_type(entities.game.BuildingTall.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.BuildingTall.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.BuildingTall.Component.cid; } } });
entities.game.Car1 = entities.game.Car1 || {};
entities.game.Car1.Component = function() {
};
entities.game.Car1.Component.prototype = Object.create(null);
entities.game.Car1.Component.prototype.constructor = entities.game.Car1.Component;
Object.defineProperties(entities.game.Car1.Component.prototype, {
});
entities.game.Car1.Component._size = 1;
entities.game.Car1.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Car1.Component.prototype);
  return v;
};
entities.game.Car1.Component._toPtr = function(ptr, v) {
};
entities.game.Car1.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Car1.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Car1.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Car1.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Car1.Component.StorageView.prototype = Object.create(null);
entities.game.Car1.Component.StorageView.prototype.constructor = entities.game.Car1.Component.StorageView;
entities.game.Car1.Component._view = entities.game.Car1.Component.StorageView;
entities.game.Car1.Component.StorageView._isSharedComp = entities.game.Car1.Component._isSharedComp = false;
entities.game.Car1.Component.StorageView._fromPtr = entities.game.Car1.Component._fromPtr;
entities.game.Car1.Component.StorageView._toPtr = entities.game.Car1.Component._toPtr;
entities.game.Car1.Component.StorageView._tempHeapPtr = entities.game.Car1.Component._tempHeapPtr;
entities.game.Car1.Component.StorageView._size = entities.game.Car1.Component._size;
entities.game.Car1.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Car1.Component.StorageView.prototype, {
});
entities.game.Car1.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Car1.Component is a POD type, so a JavaScript side copy constructor entities.game.Car1.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Car1.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Car1.Component', 1, []);
})();
Object.defineProperties(entities.game.Car1.Component, { cid: { configurable: true, get: function() { delete entities.game.Car1.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Car1.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Car1.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Car1.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Car1.Component.cid; } } });
entities.game.Car2 = entities.game.Car2 || {};
entities.game.Car2.Component = function() {
};
entities.game.Car2.Component.prototype = Object.create(null);
entities.game.Car2.Component.prototype.constructor = entities.game.Car2.Component;
Object.defineProperties(entities.game.Car2.Component.prototype, {
});
entities.game.Car2.Component._size = 1;
entities.game.Car2.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Car2.Component.prototype);
  return v;
};
entities.game.Car2.Component._toPtr = function(ptr, v) {
};
entities.game.Car2.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Car2.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Car2.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Car2.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Car2.Component.StorageView.prototype = Object.create(null);
entities.game.Car2.Component.StorageView.prototype.constructor = entities.game.Car2.Component.StorageView;
entities.game.Car2.Component._view = entities.game.Car2.Component.StorageView;
entities.game.Car2.Component.StorageView._isSharedComp = entities.game.Car2.Component._isSharedComp = false;
entities.game.Car2.Component.StorageView._fromPtr = entities.game.Car2.Component._fromPtr;
entities.game.Car2.Component.StorageView._toPtr = entities.game.Car2.Component._toPtr;
entities.game.Car2.Component.StorageView._tempHeapPtr = entities.game.Car2.Component._tempHeapPtr;
entities.game.Car2.Component.StorageView._size = entities.game.Car2.Component._size;
entities.game.Car2.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Car2.Component.StorageView.prototype, {
});
entities.game.Car2.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Car2.Component is a POD type, so a JavaScript side copy constructor entities.game.Car2.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Car2.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Car2.Component', 1, []);
})();
Object.defineProperties(entities.game.Car2.Component, { cid: { configurable: true, get: function() { delete entities.game.Car2.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Car2.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Car2.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Car2.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Car2.Component.cid; } } });
entities.game.CarSkyFall = entities.game.CarSkyFall || {};
entities.game.CarSkyFall.Component = function() {
};
entities.game.CarSkyFall.Component.prototype = Object.create(null);
entities.game.CarSkyFall.Component.prototype.constructor = entities.game.CarSkyFall.Component;
Object.defineProperties(entities.game.CarSkyFall.Component.prototype, {
});
entities.game.CarSkyFall.Component._size = 1;
entities.game.CarSkyFall.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.CarSkyFall.Component.prototype);
  return v;
};
entities.game.CarSkyFall.Component._toPtr = function(ptr, v) {
};
entities.game.CarSkyFall.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.CarSkyFall.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.CarSkyFall.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.CarSkyFall.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.CarSkyFall.Component.StorageView.prototype = Object.create(null);
entities.game.CarSkyFall.Component.StorageView.prototype.constructor = entities.game.CarSkyFall.Component.StorageView;
entities.game.CarSkyFall.Component._view = entities.game.CarSkyFall.Component.StorageView;
entities.game.CarSkyFall.Component.StorageView._isSharedComp = entities.game.CarSkyFall.Component._isSharedComp = false;
entities.game.CarSkyFall.Component.StorageView._fromPtr = entities.game.CarSkyFall.Component._fromPtr;
entities.game.CarSkyFall.Component.StorageView._toPtr = entities.game.CarSkyFall.Component._toPtr;
entities.game.CarSkyFall.Component.StorageView._tempHeapPtr = entities.game.CarSkyFall.Component._tempHeapPtr;
entities.game.CarSkyFall.Component.StorageView._size = entities.game.CarSkyFall.Component._size;
entities.game.CarSkyFall.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.CarSkyFall.Component.StorageView.prototype, {
});
entities.game.CarSkyFall.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.CarSkyFall.Component is a POD type, so a JavaScript side copy constructor entities.game.CarSkyFall.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.CarSkyFall.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.CarSkyFall.Component', 1, []);
})();
Object.defineProperties(entities.game.CarSkyFall.Component, { cid: { configurable: true, get: function() { delete entities.game.CarSkyFall.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.CarSkyFall.Component.cid = Module._ut_component_register_cid_with_type(entities.game.CarSkyFall.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.CarSkyFall.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.CarSkyFall.Component.cid; } } });
entities.game.Cloud1 = entities.game.Cloud1 || {};
entities.game.Cloud1.Component = function() {
};
entities.game.Cloud1.Component.prototype = Object.create(null);
entities.game.Cloud1.Component.prototype.constructor = entities.game.Cloud1.Component;
Object.defineProperties(entities.game.Cloud1.Component.prototype, {
});
entities.game.Cloud1.Component._size = 1;
entities.game.Cloud1.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Cloud1.Component.prototype);
  return v;
};
entities.game.Cloud1.Component._toPtr = function(ptr, v) {
};
entities.game.Cloud1.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Cloud1.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Cloud1.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Cloud1.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Cloud1.Component.StorageView.prototype = Object.create(null);
entities.game.Cloud1.Component.StorageView.prototype.constructor = entities.game.Cloud1.Component.StorageView;
entities.game.Cloud1.Component._view = entities.game.Cloud1.Component.StorageView;
entities.game.Cloud1.Component.StorageView._isSharedComp = entities.game.Cloud1.Component._isSharedComp = false;
entities.game.Cloud1.Component.StorageView._fromPtr = entities.game.Cloud1.Component._fromPtr;
entities.game.Cloud1.Component.StorageView._toPtr = entities.game.Cloud1.Component._toPtr;
entities.game.Cloud1.Component.StorageView._tempHeapPtr = entities.game.Cloud1.Component._tempHeapPtr;
entities.game.Cloud1.Component.StorageView._size = entities.game.Cloud1.Component._size;
entities.game.Cloud1.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Cloud1.Component.StorageView.prototype, {
});
entities.game.Cloud1.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Cloud1.Component is a POD type, so a JavaScript side copy constructor entities.game.Cloud1.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Cloud1.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Cloud1.Component', 1, []);
})();
Object.defineProperties(entities.game.Cloud1.Component, { cid: { configurable: true, get: function() { delete entities.game.Cloud1.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Cloud1.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Cloud1.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Cloud1.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Cloud1.Component.cid; } } });
entities.game.Cloud2 = entities.game.Cloud2 || {};
entities.game.Cloud2.Component = function() {
};
entities.game.Cloud2.Component.prototype = Object.create(null);
entities.game.Cloud2.Component.prototype.constructor = entities.game.Cloud2.Component;
Object.defineProperties(entities.game.Cloud2.Component.prototype, {
});
entities.game.Cloud2.Component._size = 1;
entities.game.Cloud2.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Cloud2.Component.prototype);
  return v;
};
entities.game.Cloud2.Component._toPtr = function(ptr, v) {
};
entities.game.Cloud2.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Cloud2.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Cloud2.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Cloud2.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Cloud2.Component.StorageView.prototype = Object.create(null);
entities.game.Cloud2.Component.StorageView.prototype.constructor = entities.game.Cloud2.Component.StorageView;
entities.game.Cloud2.Component._view = entities.game.Cloud2.Component.StorageView;
entities.game.Cloud2.Component.StorageView._isSharedComp = entities.game.Cloud2.Component._isSharedComp = false;
entities.game.Cloud2.Component.StorageView._fromPtr = entities.game.Cloud2.Component._fromPtr;
entities.game.Cloud2.Component.StorageView._toPtr = entities.game.Cloud2.Component._toPtr;
entities.game.Cloud2.Component.StorageView._tempHeapPtr = entities.game.Cloud2.Component._tempHeapPtr;
entities.game.Cloud2.Component.StorageView._size = entities.game.Cloud2.Component._size;
entities.game.Cloud2.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Cloud2.Component.StorageView.prototype, {
});
entities.game.Cloud2.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Cloud2.Component is a POD type, so a JavaScript side copy constructor entities.game.Cloud2.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Cloud2.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Cloud2.Component', 1, []);
})();
Object.defineProperties(entities.game.Cloud2.Component, { cid: { configurable: true, get: function() { delete entities.game.Cloud2.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Cloud2.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Cloud2.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Cloud2.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Cloud2.Component.cid; } } });
entities.game.Cloud3 = entities.game.Cloud3 || {};
entities.game.Cloud3.Component = function() {
};
entities.game.Cloud3.Component.prototype = Object.create(null);
entities.game.Cloud3.Component.prototype.constructor = entities.game.Cloud3.Component;
Object.defineProperties(entities.game.Cloud3.Component.prototype, {
});
entities.game.Cloud3.Component._size = 1;
entities.game.Cloud3.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Cloud3.Component.prototype);
  return v;
};
entities.game.Cloud3.Component._toPtr = function(ptr, v) {
};
entities.game.Cloud3.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Cloud3.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Cloud3.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Cloud3.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Cloud3.Component.StorageView.prototype = Object.create(null);
entities.game.Cloud3.Component.StorageView.prototype.constructor = entities.game.Cloud3.Component.StorageView;
entities.game.Cloud3.Component._view = entities.game.Cloud3.Component.StorageView;
entities.game.Cloud3.Component.StorageView._isSharedComp = entities.game.Cloud3.Component._isSharedComp = false;
entities.game.Cloud3.Component.StorageView._fromPtr = entities.game.Cloud3.Component._fromPtr;
entities.game.Cloud3.Component.StorageView._toPtr = entities.game.Cloud3.Component._toPtr;
entities.game.Cloud3.Component.StorageView._tempHeapPtr = entities.game.Cloud3.Component._tempHeapPtr;
entities.game.Cloud3.Component.StorageView._size = entities.game.Cloud3.Component._size;
entities.game.Cloud3.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Cloud3.Component.StorageView.prototype, {
});
entities.game.Cloud3.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Cloud3.Component is a POD type, so a JavaScript side copy constructor entities.game.Cloud3.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Cloud3.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Cloud3.Component', 1, []);
})();
Object.defineProperties(entities.game.Cloud3.Component, { cid: { configurable: true, get: function() { delete entities.game.Cloud3.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Cloud3.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Cloud3.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Cloud3.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Cloud3.Component.cid; } } });
entities.game.Explosion1 = entities.game.Explosion1 || {};
entities.game.Explosion1.Component = function() {
};
entities.game.Explosion1.Component.prototype = Object.create(null);
entities.game.Explosion1.Component.prototype.constructor = entities.game.Explosion1.Component;
Object.defineProperties(entities.game.Explosion1.Component.prototype, {
});
entities.game.Explosion1.Component._size = 1;
entities.game.Explosion1.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Explosion1.Component.prototype);
  return v;
};
entities.game.Explosion1.Component._toPtr = function(ptr, v) {
};
entities.game.Explosion1.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Explosion1.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Explosion1.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Explosion1.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Explosion1.Component.StorageView.prototype = Object.create(null);
entities.game.Explosion1.Component.StorageView.prototype.constructor = entities.game.Explosion1.Component.StorageView;
entities.game.Explosion1.Component._view = entities.game.Explosion1.Component.StorageView;
entities.game.Explosion1.Component.StorageView._isSharedComp = entities.game.Explosion1.Component._isSharedComp = false;
entities.game.Explosion1.Component.StorageView._fromPtr = entities.game.Explosion1.Component._fromPtr;
entities.game.Explosion1.Component.StorageView._toPtr = entities.game.Explosion1.Component._toPtr;
entities.game.Explosion1.Component.StorageView._tempHeapPtr = entities.game.Explosion1.Component._tempHeapPtr;
entities.game.Explosion1.Component.StorageView._size = entities.game.Explosion1.Component._size;
entities.game.Explosion1.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Explosion1.Component.StorageView.prototype, {
});
entities.game.Explosion1.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Explosion1.Component is a POD type, so a JavaScript side copy constructor entities.game.Explosion1.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Explosion1.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Explosion1.Component', 1, []);
})();
Object.defineProperties(entities.game.Explosion1.Component, { cid: { configurable: true, get: function() { delete entities.game.Explosion1.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Explosion1.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Explosion1.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Explosion1.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Explosion1.Component.cid; } } });
entities.game.Explosion2 = entities.game.Explosion2 || {};
entities.game.Explosion2.Component = function() {
};
entities.game.Explosion2.Component.prototype = Object.create(null);
entities.game.Explosion2.Component.prototype.constructor = entities.game.Explosion2.Component;
Object.defineProperties(entities.game.Explosion2.Component.prototype, {
});
entities.game.Explosion2.Component._size = 1;
entities.game.Explosion2.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Explosion2.Component.prototype);
  return v;
};
entities.game.Explosion2.Component._toPtr = function(ptr, v) {
};
entities.game.Explosion2.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Explosion2.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Explosion2.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Explosion2.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Explosion2.Component.StorageView.prototype = Object.create(null);
entities.game.Explosion2.Component.StorageView.prototype.constructor = entities.game.Explosion2.Component.StorageView;
entities.game.Explosion2.Component._view = entities.game.Explosion2.Component.StorageView;
entities.game.Explosion2.Component.StorageView._isSharedComp = entities.game.Explosion2.Component._isSharedComp = false;
entities.game.Explosion2.Component.StorageView._fromPtr = entities.game.Explosion2.Component._fromPtr;
entities.game.Explosion2.Component.StorageView._toPtr = entities.game.Explosion2.Component._toPtr;
entities.game.Explosion2.Component.StorageView._tempHeapPtr = entities.game.Explosion2.Component._tempHeapPtr;
entities.game.Explosion2.Component.StorageView._size = entities.game.Explosion2.Component._size;
entities.game.Explosion2.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Explosion2.Component.StorageView.prototype, {
});
entities.game.Explosion2.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Explosion2.Component is a POD type, so a JavaScript side copy constructor entities.game.Explosion2.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Explosion2.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Explosion2.Component', 1, []);
})();
Object.defineProperties(entities.game.Explosion2.Component, { cid: { configurable: true, get: function() { delete entities.game.Explosion2.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Explosion2.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Explosion2.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Explosion2.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Explosion2.Component.cid; } } });
entities.game.FireTruck = entities.game.FireTruck || {};
entities.game.FireTruck.Component = function() {
};
entities.game.FireTruck.Component.prototype = Object.create(null);
entities.game.FireTruck.Component.prototype.constructor = entities.game.FireTruck.Component;
Object.defineProperties(entities.game.FireTruck.Component.prototype, {
});
entities.game.FireTruck.Component._size = 1;
entities.game.FireTruck.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.FireTruck.Component.prototype);
  return v;
};
entities.game.FireTruck.Component._toPtr = function(ptr, v) {
};
entities.game.FireTruck.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.FireTruck.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.FireTruck.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.FireTruck.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.FireTruck.Component.StorageView.prototype = Object.create(null);
entities.game.FireTruck.Component.StorageView.prototype.constructor = entities.game.FireTruck.Component.StorageView;
entities.game.FireTruck.Component._view = entities.game.FireTruck.Component.StorageView;
entities.game.FireTruck.Component.StorageView._isSharedComp = entities.game.FireTruck.Component._isSharedComp = false;
entities.game.FireTruck.Component.StorageView._fromPtr = entities.game.FireTruck.Component._fromPtr;
entities.game.FireTruck.Component.StorageView._toPtr = entities.game.FireTruck.Component._toPtr;
entities.game.FireTruck.Component.StorageView._tempHeapPtr = entities.game.FireTruck.Component._tempHeapPtr;
entities.game.FireTruck.Component.StorageView._size = entities.game.FireTruck.Component._size;
entities.game.FireTruck.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.FireTruck.Component.StorageView.prototype, {
});
entities.game.FireTruck.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.FireTruck.Component is a POD type, so a JavaScript side copy constructor entities.game.FireTruck.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.FireTruck.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.FireTruck.Component', 1, []);
})();
Object.defineProperties(entities.game.FireTruck.Component, { cid: { configurable: true, get: function() { delete entities.game.FireTruck.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.FireTruck.Component.cid = Module._ut_component_register_cid_with_type(entities.game.FireTruck.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.FireTruck.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.FireTruck.Component.cid; } } });
entities.game.Floor = entities.game.Floor || {};
entities.game.Floor.Component = function() {
};
entities.game.Floor.Component.prototype = Object.create(null);
entities.game.Floor.Component.prototype.constructor = entities.game.Floor.Component;
Object.defineProperties(entities.game.Floor.Component.prototype, {
});
entities.game.Floor.Component._size = 1;
entities.game.Floor.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Floor.Component.prototype);
  return v;
};
entities.game.Floor.Component._toPtr = function(ptr, v) {
};
entities.game.Floor.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Floor.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Floor.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Floor.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Floor.Component.StorageView.prototype = Object.create(null);
entities.game.Floor.Component.StorageView.prototype.constructor = entities.game.Floor.Component.StorageView;
entities.game.Floor.Component._view = entities.game.Floor.Component.StorageView;
entities.game.Floor.Component.StorageView._isSharedComp = entities.game.Floor.Component._isSharedComp = false;
entities.game.Floor.Component.StorageView._fromPtr = entities.game.Floor.Component._fromPtr;
entities.game.Floor.Component.StorageView._toPtr = entities.game.Floor.Component._toPtr;
entities.game.Floor.Component.StorageView._tempHeapPtr = entities.game.Floor.Component._tempHeapPtr;
entities.game.Floor.Component.StorageView._size = entities.game.Floor.Component._size;
entities.game.Floor.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Floor.Component.StorageView.prototype, {
});
entities.game.Floor.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Floor.Component is a POD type, so a JavaScript side copy constructor entities.game.Floor.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Floor.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Floor.Component', 1, []);
})();
Object.defineProperties(entities.game.Floor.Component, { cid: { configurable: true, get: function() { delete entities.game.Floor.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Floor.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Floor.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Floor.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Floor.Component.cid; } } });
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
entities.game.GroundDeco1 = entities.game.GroundDeco1 || {};
entities.game.GroundDeco1.Component = function() {
};
entities.game.GroundDeco1.Component.prototype = Object.create(null);
entities.game.GroundDeco1.Component.prototype.constructor = entities.game.GroundDeco1.Component;
Object.defineProperties(entities.game.GroundDeco1.Component.prototype, {
});
entities.game.GroundDeco1.Component._size = 1;
entities.game.GroundDeco1.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GroundDeco1.Component.prototype);
  return v;
};
entities.game.GroundDeco1.Component._toPtr = function(ptr, v) {
};
entities.game.GroundDeco1.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GroundDeco1.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GroundDeco1.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GroundDeco1.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GroundDeco1.Component.StorageView.prototype = Object.create(null);
entities.game.GroundDeco1.Component.StorageView.prototype.constructor = entities.game.GroundDeco1.Component.StorageView;
entities.game.GroundDeco1.Component._view = entities.game.GroundDeco1.Component.StorageView;
entities.game.GroundDeco1.Component.StorageView._isSharedComp = entities.game.GroundDeco1.Component._isSharedComp = false;
entities.game.GroundDeco1.Component.StorageView._fromPtr = entities.game.GroundDeco1.Component._fromPtr;
entities.game.GroundDeco1.Component.StorageView._toPtr = entities.game.GroundDeco1.Component._toPtr;
entities.game.GroundDeco1.Component.StorageView._tempHeapPtr = entities.game.GroundDeco1.Component._tempHeapPtr;
entities.game.GroundDeco1.Component.StorageView._size = entities.game.GroundDeco1.Component._size;
entities.game.GroundDeco1.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GroundDeco1.Component.StorageView.prototype, {
});
entities.game.GroundDeco1.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GroundDeco1.Component is a POD type, so a JavaScript side copy constructor entities.game.GroundDeco1.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.GroundDeco1.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.GroundDeco1.Component', 1, []);
})();
Object.defineProperties(entities.game.GroundDeco1.Component, { cid: { configurable: true, get: function() { delete entities.game.GroundDeco1.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GroundDeco1.Component.cid = Module._ut_component_register_cid_with_type(entities.game.GroundDeco1.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.GroundDeco1.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GroundDeco1.Component.cid; } } });
entities.game.GroundDeco2 = entities.game.GroundDeco2 || {};
entities.game.GroundDeco2.Component = function() {
};
entities.game.GroundDeco2.Component.prototype = Object.create(null);
entities.game.GroundDeco2.Component.prototype.constructor = entities.game.GroundDeco2.Component;
Object.defineProperties(entities.game.GroundDeco2.Component.prototype, {
});
entities.game.GroundDeco2.Component._size = 1;
entities.game.GroundDeco2.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GroundDeco2.Component.prototype);
  return v;
};
entities.game.GroundDeco2.Component._toPtr = function(ptr, v) {
};
entities.game.GroundDeco2.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GroundDeco2.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GroundDeco2.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GroundDeco2.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GroundDeco2.Component.StorageView.prototype = Object.create(null);
entities.game.GroundDeco2.Component.StorageView.prototype.constructor = entities.game.GroundDeco2.Component.StorageView;
entities.game.GroundDeco2.Component._view = entities.game.GroundDeco2.Component.StorageView;
entities.game.GroundDeco2.Component.StorageView._isSharedComp = entities.game.GroundDeco2.Component._isSharedComp = false;
entities.game.GroundDeco2.Component.StorageView._fromPtr = entities.game.GroundDeco2.Component._fromPtr;
entities.game.GroundDeco2.Component.StorageView._toPtr = entities.game.GroundDeco2.Component._toPtr;
entities.game.GroundDeco2.Component.StorageView._tempHeapPtr = entities.game.GroundDeco2.Component._tempHeapPtr;
entities.game.GroundDeco2.Component.StorageView._size = entities.game.GroundDeco2.Component._size;
entities.game.GroundDeco2.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GroundDeco2.Component.StorageView.prototype, {
});
entities.game.GroundDeco2.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GroundDeco2.Component is a POD type, so a JavaScript side copy constructor entities.game.GroundDeco2.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.GroundDeco2.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.GroundDeco2.Component', 1, []);
})();
Object.defineProperties(entities.game.GroundDeco2.Component, { cid: { configurable: true, get: function() { delete entities.game.GroundDeco2.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GroundDeco2.Component.cid = Module._ut_component_register_cid_with_type(entities.game.GroundDeco2.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.GroundDeco2.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GroundDeco2.Component.cid; } } });
entities.game.GroundDeco3 = entities.game.GroundDeco3 || {};
entities.game.GroundDeco3.Component = function() {
};
entities.game.GroundDeco3.Component.prototype = Object.create(null);
entities.game.GroundDeco3.Component.prototype.constructor = entities.game.GroundDeco3.Component;
Object.defineProperties(entities.game.GroundDeco3.Component.prototype, {
});
entities.game.GroundDeco3.Component._size = 1;
entities.game.GroundDeco3.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GroundDeco3.Component.prototype);
  return v;
};
entities.game.GroundDeco3.Component._toPtr = function(ptr, v) {
};
entities.game.GroundDeco3.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GroundDeco3.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GroundDeco3.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GroundDeco3.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GroundDeco3.Component.StorageView.prototype = Object.create(null);
entities.game.GroundDeco3.Component.StorageView.prototype.constructor = entities.game.GroundDeco3.Component.StorageView;
entities.game.GroundDeco3.Component._view = entities.game.GroundDeco3.Component.StorageView;
entities.game.GroundDeco3.Component.StorageView._isSharedComp = entities.game.GroundDeco3.Component._isSharedComp = false;
entities.game.GroundDeco3.Component.StorageView._fromPtr = entities.game.GroundDeco3.Component._fromPtr;
entities.game.GroundDeco3.Component.StorageView._toPtr = entities.game.GroundDeco3.Component._toPtr;
entities.game.GroundDeco3.Component.StorageView._tempHeapPtr = entities.game.GroundDeco3.Component._tempHeapPtr;
entities.game.GroundDeco3.Component.StorageView._size = entities.game.GroundDeco3.Component._size;
entities.game.GroundDeco3.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GroundDeco3.Component.StorageView.prototype, {
});
entities.game.GroundDeco3.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GroundDeco3.Component is a POD type, so a JavaScript side copy constructor entities.game.GroundDeco3.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.GroundDeco3.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.GroundDeco3.Component', 1, []);
})();
Object.defineProperties(entities.game.GroundDeco3.Component, { cid: { configurable: true, get: function() { delete entities.game.GroundDeco3.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GroundDeco3.Component.cid = Module._ut_component_register_cid_with_type(entities.game.GroundDeco3.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.GroundDeco3.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GroundDeco3.Component.cid; } } });
entities.game.GroundDeco4 = entities.game.GroundDeco4 || {};
entities.game.GroundDeco4.Component = function() {
};
entities.game.GroundDeco4.Component.prototype = Object.create(null);
entities.game.GroundDeco4.Component.prototype.constructor = entities.game.GroundDeco4.Component;
Object.defineProperties(entities.game.GroundDeco4.Component.prototype, {
});
entities.game.GroundDeco4.Component._size = 1;
entities.game.GroundDeco4.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GroundDeco4.Component.prototype);
  return v;
};
entities.game.GroundDeco4.Component._toPtr = function(ptr, v) {
};
entities.game.GroundDeco4.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GroundDeco4.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GroundDeco4.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GroundDeco4.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GroundDeco4.Component.StorageView.prototype = Object.create(null);
entities.game.GroundDeco4.Component.StorageView.prototype.constructor = entities.game.GroundDeco4.Component.StorageView;
entities.game.GroundDeco4.Component._view = entities.game.GroundDeco4.Component.StorageView;
entities.game.GroundDeco4.Component.StorageView._isSharedComp = entities.game.GroundDeco4.Component._isSharedComp = false;
entities.game.GroundDeco4.Component.StorageView._fromPtr = entities.game.GroundDeco4.Component._fromPtr;
entities.game.GroundDeco4.Component.StorageView._toPtr = entities.game.GroundDeco4.Component._toPtr;
entities.game.GroundDeco4.Component.StorageView._tempHeapPtr = entities.game.GroundDeco4.Component._tempHeapPtr;
entities.game.GroundDeco4.Component.StorageView._size = entities.game.GroundDeco4.Component._size;
entities.game.GroundDeco4.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GroundDeco4.Component.StorageView.prototype, {
});
entities.game.GroundDeco4.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GroundDeco4.Component is a POD type, so a JavaScript side copy constructor entities.game.GroundDeco4.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.GroundDeco4.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.GroundDeco4.Component', 1, []);
})();
Object.defineProperties(entities.game.GroundDeco4.Component, { cid: { configurable: true, get: function() { delete entities.game.GroundDeco4.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GroundDeco4.Component.cid = Module._ut_component_register_cid_with_type(entities.game.GroundDeco4.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.GroundDeco4.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GroundDeco4.Component.cid; } } });
entities.game.Helicopter = entities.game.Helicopter || {};
entities.game.Helicopter.Component = function() {
};
entities.game.Helicopter.Component.prototype = Object.create(null);
entities.game.Helicopter.Component.prototype.constructor = entities.game.Helicopter.Component;
Object.defineProperties(entities.game.Helicopter.Component.prototype, {
});
entities.game.Helicopter.Component._size = 1;
entities.game.Helicopter.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Helicopter.Component.prototype);
  return v;
};
entities.game.Helicopter.Component._toPtr = function(ptr, v) {
};
entities.game.Helicopter.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Helicopter.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Helicopter.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Helicopter.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Helicopter.Component.StorageView.prototype = Object.create(null);
entities.game.Helicopter.Component.StorageView.prototype.constructor = entities.game.Helicopter.Component.StorageView;
entities.game.Helicopter.Component._view = entities.game.Helicopter.Component.StorageView;
entities.game.Helicopter.Component.StorageView._isSharedComp = entities.game.Helicopter.Component._isSharedComp = false;
entities.game.Helicopter.Component.StorageView._fromPtr = entities.game.Helicopter.Component._fromPtr;
entities.game.Helicopter.Component.StorageView._toPtr = entities.game.Helicopter.Component._toPtr;
entities.game.Helicopter.Component.StorageView._tempHeapPtr = entities.game.Helicopter.Component._tempHeapPtr;
entities.game.Helicopter.Component.StorageView._size = entities.game.Helicopter.Component._size;
entities.game.Helicopter.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Helicopter.Component.StorageView.prototype, {
});
entities.game.Helicopter.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Helicopter.Component is a POD type, so a JavaScript side copy constructor entities.game.Helicopter.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Helicopter.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Helicopter.Component', 1, []);
})();
Object.defineProperties(entities.game.Helicopter.Component, { cid: { configurable: true, get: function() { delete entities.game.Helicopter.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Helicopter.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Helicopter.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Helicopter.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Helicopter.Component.cid; } } });
entities.game.KidOnBike = entities.game.KidOnBike || {};
entities.game.KidOnBike.Component = function() {
};
entities.game.KidOnBike.Component.prototype = Object.create(null);
entities.game.KidOnBike.Component.prototype.constructor = entities.game.KidOnBike.Component;
Object.defineProperties(entities.game.KidOnBike.Component.prototype, {
});
entities.game.KidOnBike.Component._size = 1;
entities.game.KidOnBike.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.KidOnBike.Component.prototype);
  return v;
};
entities.game.KidOnBike.Component._toPtr = function(ptr, v) {
};
entities.game.KidOnBike.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.KidOnBike.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.KidOnBike.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.KidOnBike.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.KidOnBike.Component.StorageView.prototype = Object.create(null);
entities.game.KidOnBike.Component.StorageView.prototype.constructor = entities.game.KidOnBike.Component.StorageView;
entities.game.KidOnBike.Component._view = entities.game.KidOnBike.Component.StorageView;
entities.game.KidOnBike.Component.StorageView._isSharedComp = entities.game.KidOnBike.Component._isSharedComp = false;
entities.game.KidOnBike.Component.StorageView._fromPtr = entities.game.KidOnBike.Component._fromPtr;
entities.game.KidOnBike.Component.StorageView._toPtr = entities.game.KidOnBike.Component._toPtr;
entities.game.KidOnBike.Component.StorageView._tempHeapPtr = entities.game.KidOnBike.Component._tempHeapPtr;
entities.game.KidOnBike.Component.StorageView._size = entities.game.KidOnBike.Component._size;
entities.game.KidOnBike.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.KidOnBike.Component.StorageView.prototype, {
});
entities.game.KidOnBike.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.KidOnBike.Component is a POD type, so a JavaScript side copy constructor entities.game.KidOnBike.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.KidOnBike.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.KidOnBike.Component', 1, []);
})();
Object.defineProperties(entities.game.KidOnBike.Component, { cid: { configurable: true, get: function() { delete entities.game.KidOnBike.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.KidOnBike.Component.cid = Module._ut_component_register_cid_with_type(entities.game.KidOnBike.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.KidOnBike.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.KidOnBike.Component.cid; } } });
entities.game.Parallax1 = entities.game.Parallax1 || {};
entities.game.Parallax1.Component = function() {
};
entities.game.Parallax1.Component.prototype = Object.create(null);
entities.game.Parallax1.Component.prototype.constructor = entities.game.Parallax1.Component;
Object.defineProperties(entities.game.Parallax1.Component.prototype, {
});
entities.game.Parallax1.Component._size = 1;
entities.game.Parallax1.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Parallax1.Component.prototype);
  return v;
};
entities.game.Parallax1.Component._toPtr = function(ptr, v) {
};
entities.game.Parallax1.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Parallax1.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Parallax1.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Parallax1.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Parallax1.Component.StorageView.prototype = Object.create(null);
entities.game.Parallax1.Component.StorageView.prototype.constructor = entities.game.Parallax1.Component.StorageView;
entities.game.Parallax1.Component._view = entities.game.Parallax1.Component.StorageView;
entities.game.Parallax1.Component.StorageView._isSharedComp = entities.game.Parallax1.Component._isSharedComp = false;
entities.game.Parallax1.Component.StorageView._fromPtr = entities.game.Parallax1.Component._fromPtr;
entities.game.Parallax1.Component.StorageView._toPtr = entities.game.Parallax1.Component._toPtr;
entities.game.Parallax1.Component.StorageView._tempHeapPtr = entities.game.Parallax1.Component._tempHeapPtr;
entities.game.Parallax1.Component.StorageView._size = entities.game.Parallax1.Component._size;
entities.game.Parallax1.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Parallax1.Component.StorageView.prototype, {
});
entities.game.Parallax1.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Parallax1.Component is a POD type, so a JavaScript side copy constructor entities.game.Parallax1.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Parallax1.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Parallax1.Component', 1, []);
})();
Object.defineProperties(entities.game.Parallax1.Component, { cid: { configurable: true, get: function() { delete entities.game.Parallax1.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Parallax1.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Parallax1.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Parallax1.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Parallax1.Component.cid; } } });
entities.game.Parallax2 = entities.game.Parallax2 || {};
entities.game.Parallax2.Component = function() {
};
entities.game.Parallax2.Component.prototype = Object.create(null);
entities.game.Parallax2.Component.prototype.constructor = entities.game.Parallax2.Component;
Object.defineProperties(entities.game.Parallax2.Component.prototype, {
});
entities.game.Parallax2.Component._size = 1;
entities.game.Parallax2.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Parallax2.Component.prototype);
  return v;
};
entities.game.Parallax2.Component._toPtr = function(ptr, v) {
};
entities.game.Parallax2.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Parallax2.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Parallax2.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Parallax2.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Parallax2.Component.StorageView.prototype = Object.create(null);
entities.game.Parallax2.Component.StorageView.prototype.constructor = entities.game.Parallax2.Component.StorageView;
entities.game.Parallax2.Component._view = entities.game.Parallax2.Component.StorageView;
entities.game.Parallax2.Component.StorageView._isSharedComp = entities.game.Parallax2.Component._isSharedComp = false;
entities.game.Parallax2.Component.StorageView._fromPtr = entities.game.Parallax2.Component._fromPtr;
entities.game.Parallax2.Component.StorageView._toPtr = entities.game.Parallax2.Component._toPtr;
entities.game.Parallax2.Component.StorageView._tempHeapPtr = entities.game.Parallax2.Component._tempHeapPtr;
entities.game.Parallax2.Component.StorageView._size = entities.game.Parallax2.Component._size;
entities.game.Parallax2.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Parallax2.Component.StorageView.prototype, {
});
entities.game.Parallax2.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Parallax2.Component is a POD type, so a JavaScript side copy constructor entities.game.Parallax2.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Parallax2.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Parallax2.Component', 1, []);
})();
Object.defineProperties(entities.game.Parallax2.Component, { cid: { configurable: true, get: function() { delete entities.game.Parallax2.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Parallax2.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Parallax2.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Parallax2.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Parallax2.Component.cid; } } });
entities.game.Parallax3 = entities.game.Parallax3 || {};
entities.game.Parallax3.Component = function() {
};
entities.game.Parallax3.Component.prototype = Object.create(null);
entities.game.Parallax3.Component.prototype.constructor = entities.game.Parallax3.Component;
Object.defineProperties(entities.game.Parallax3.Component.prototype, {
});
entities.game.Parallax3.Component._size = 1;
entities.game.Parallax3.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Parallax3.Component.prototype);
  return v;
};
entities.game.Parallax3.Component._toPtr = function(ptr, v) {
};
entities.game.Parallax3.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Parallax3.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Parallax3.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Parallax3.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Parallax3.Component.StorageView.prototype = Object.create(null);
entities.game.Parallax3.Component.StorageView.prototype.constructor = entities.game.Parallax3.Component.StorageView;
entities.game.Parallax3.Component._view = entities.game.Parallax3.Component.StorageView;
entities.game.Parallax3.Component.StorageView._isSharedComp = entities.game.Parallax3.Component._isSharedComp = false;
entities.game.Parallax3.Component.StorageView._fromPtr = entities.game.Parallax3.Component._fromPtr;
entities.game.Parallax3.Component.StorageView._toPtr = entities.game.Parallax3.Component._toPtr;
entities.game.Parallax3.Component.StorageView._tempHeapPtr = entities.game.Parallax3.Component._tempHeapPtr;
entities.game.Parallax3.Component.StorageView._size = entities.game.Parallax3.Component._size;
entities.game.Parallax3.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Parallax3.Component.StorageView.prototype, {
});
entities.game.Parallax3.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Parallax3.Component is a POD type, so a JavaScript side copy constructor entities.game.Parallax3.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Parallax3.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Parallax3.Component', 1, []);
})();
Object.defineProperties(entities.game.Parallax3.Component, { cid: { configurable: true, get: function() { delete entities.game.Parallax3.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Parallax3.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Parallax3.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Parallax3.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Parallax3.Component.cid; } } });
entities.game.Parallax4 = entities.game.Parallax4 || {};
entities.game.Parallax4.Component = function() {
};
entities.game.Parallax4.Component.prototype = Object.create(null);
entities.game.Parallax4.Component.prototype.constructor = entities.game.Parallax4.Component;
Object.defineProperties(entities.game.Parallax4.Component.prototype, {
});
entities.game.Parallax4.Component._size = 1;
entities.game.Parallax4.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Parallax4.Component.prototype);
  return v;
};
entities.game.Parallax4.Component._toPtr = function(ptr, v) {
};
entities.game.Parallax4.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Parallax4.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Parallax4.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Parallax4.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Parallax4.Component.StorageView.prototype = Object.create(null);
entities.game.Parallax4.Component.StorageView.prototype.constructor = entities.game.Parallax4.Component.StorageView;
entities.game.Parallax4.Component._view = entities.game.Parallax4.Component.StorageView;
entities.game.Parallax4.Component.StorageView._isSharedComp = entities.game.Parallax4.Component._isSharedComp = false;
entities.game.Parallax4.Component.StorageView._fromPtr = entities.game.Parallax4.Component._fromPtr;
entities.game.Parallax4.Component.StorageView._toPtr = entities.game.Parallax4.Component._toPtr;
entities.game.Parallax4.Component.StorageView._tempHeapPtr = entities.game.Parallax4.Component._tempHeapPtr;
entities.game.Parallax4.Component.StorageView._size = entities.game.Parallax4.Component._size;
entities.game.Parallax4.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Parallax4.Component.StorageView.prototype, {
});
entities.game.Parallax4.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Parallax4.Component is a POD type, so a JavaScript side copy constructor entities.game.Parallax4.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Parallax4.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Parallax4.Component', 1, []);
})();
Object.defineProperties(entities.game.Parallax4.Component, { cid: { configurable: true, get: function() { delete entities.game.Parallax4.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Parallax4.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Parallax4.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Parallax4.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Parallax4.Component.cid; } } });
entities.game.Parallax5 = entities.game.Parallax5 || {};
entities.game.Parallax5.Component = function() {
};
entities.game.Parallax5.Component.prototype = Object.create(null);
entities.game.Parallax5.Component.prototype.constructor = entities.game.Parallax5.Component;
Object.defineProperties(entities.game.Parallax5.Component.prototype, {
});
entities.game.Parallax5.Component._size = 1;
entities.game.Parallax5.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Parallax5.Component.prototype);
  return v;
};
entities.game.Parallax5.Component._toPtr = function(ptr, v) {
};
entities.game.Parallax5.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Parallax5.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Parallax5.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Parallax5.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Parallax5.Component.StorageView.prototype = Object.create(null);
entities.game.Parallax5.Component.StorageView.prototype.constructor = entities.game.Parallax5.Component.StorageView;
entities.game.Parallax5.Component._view = entities.game.Parallax5.Component.StorageView;
entities.game.Parallax5.Component.StorageView._isSharedComp = entities.game.Parallax5.Component._isSharedComp = false;
entities.game.Parallax5.Component.StorageView._fromPtr = entities.game.Parallax5.Component._fromPtr;
entities.game.Parallax5.Component.StorageView._toPtr = entities.game.Parallax5.Component._toPtr;
entities.game.Parallax5.Component.StorageView._tempHeapPtr = entities.game.Parallax5.Component._tempHeapPtr;
entities.game.Parallax5.Component.StorageView._size = entities.game.Parallax5.Component._size;
entities.game.Parallax5.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Parallax5.Component.StorageView.prototype, {
});
entities.game.Parallax5.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Parallax5.Component is a POD type, so a JavaScript side copy constructor entities.game.Parallax5.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Parallax5.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Parallax5.Component', 1, []);
})();
Object.defineProperties(entities.game.Parallax5.Component, { cid: { configurable: true, get: function() { delete entities.game.Parallax5.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Parallax5.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Parallax5.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Parallax5.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Parallax5.Component.cid; } } });
entities.game.ParticleExplosion = entities.game.ParticleExplosion || {};
entities.game.ParticleExplosion.Component = function() {
};
entities.game.ParticleExplosion.Component.prototype = Object.create(null);
entities.game.ParticleExplosion.Component.prototype.constructor = entities.game.ParticleExplosion.Component;
Object.defineProperties(entities.game.ParticleExplosion.Component.prototype, {
});
entities.game.ParticleExplosion.Component._size = 1;
entities.game.ParticleExplosion.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.ParticleExplosion.Component.prototype);
  return v;
};
entities.game.ParticleExplosion.Component._toPtr = function(ptr, v) {
};
entities.game.ParticleExplosion.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.ParticleExplosion.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.ParticleExplosion.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.ParticleExplosion.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.ParticleExplosion.Component.StorageView.prototype = Object.create(null);
entities.game.ParticleExplosion.Component.StorageView.prototype.constructor = entities.game.ParticleExplosion.Component.StorageView;
entities.game.ParticleExplosion.Component._view = entities.game.ParticleExplosion.Component.StorageView;
entities.game.ParticleExplosion.Component.StorageView._isSharedComp = entities.game.ParticleExplosion.Component._isSharedComp = false;
entities.game.ParticleExplosion.Component.StorageView._fromPtr = entities.game.ParticleExplosion.Component._fromPtr;
entities.game.ParticleExplosion.Component.StorageView._toPtr = entities.game.ParticleExplosion.Component._toPtr;
entities.game.ParticleExplosion.Component.StorageView._tempHeapPtr = entities.game.ParticleExplosion.Component._tempHeapPtr;
entities.game.ParticleExplosion.Component.StorageView._size = entities.game.ParticleExplosion.Component._size;
entities.game.ParticleExplosion.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.ParticleExplosion.Component.StorageView.prototype, {
});
entities.game.ParticleExplosion.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.ParticleExplosion.Component is a POD type, so a JavaScript side copy constructor entities.game.ParticleExplosion.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.ParticleExplosion.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.ParticleExplosion.Component', 1, []);
})();
Object.defineProperties(entities.game.ParticleExplosion.Component, { cid: { configurable: true, get: function() { delete entities.game.ParticleExplosion.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.ParticleExplosion.Component.cid = Module._ut_component_register_cid_with_type(entities.game.ParticleExplosion.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.ParticleExplosion.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.ParticleExplosion.Component.cid; } } });
entities.game.Person = entities.game.Person || {};
entities.game.Person.Component = function() {
};
entities.game.Person.Component.prototype = Object.create(null);
entities.game.Person.Component.prototype.constructor = entities.game.Person.Component;
Object.defineProperties(entities.game.Person.Component.prototype, {
});
entities.game.Person.Component._size = 1;
entities.game.Person.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Person.Component.prototype);
  return v;
};
entities.game.Person.Component._toPtr = function(ptr, v) {
};
entities.game.Person.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Person.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Person.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Person.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Person.Component.StorageView.prototype = Object.create(null);
entities.game.Person.Component.StorageView.prototype.constructor = entities.game.Person.Component.StorageView;
entities.game.Person.Component._view = entities.game.Person.Component.StorageView;
entities.game.Person.Component.StorageView._isSharedComp = entities.game.Person.Component._isSharedComp = false;
entities.game.Person.Component.StorageView._fromPtr = entities.game.Person.Component._fromPtr;
entities.game.Person.Component.StorageView._toPtr = entities.game.Person.Component._toPtr;
entities.game.Person.Component.StorageView._tempHeapPtr = entities.game.Person.Component._tempHeapPtr;
entities.game.Person.Component.StorageView._size = entities.game.Person.Component._size;
entities.game.Person.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Person.Component.StorageView.prototype, {
});
entities.game.Person.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Person.Component is a POD type, so a JavaScript side copy constructor entities.game.Person.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Person.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Person.Component', 1, []);
})();
Object.defineProperties(entities.game.Person.Component, { cid: { configurable: true, get: function() { delete entities.game.Person.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Person.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Person.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Person.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Person.Component.cid; } } });
entities.game.Prop1 = entities.game.Prop1 || {};
entities.game.Prop1.Component = function() {
};
entities.game.Prop1.Component.prototype = Object.create(null);
entities.game.Prop1.Component.prototype.constructor = entities.game.Prop1.Component;
Object.defineProperties(entities.game.Prop1.Component.prototype, {
});
entities.game.Prop1.Component._size = 1;
entities.game.Prop1.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Prop1.Component.prototype);
  return v;
};
entities.game.Prop1.Component._toPtr = function(ptr, v) {
};
entities.game.Prop1.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Prop1.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Prop1.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Prop1.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Prop1.Component.StorageView.prototype = Object.create(null);
entities.game.Prop1.Component.StorageView.prototype.constructor = entities.game.Prop1.Component.StorageView;
entities.game.Prop1.Component._view = entities.game.Prop1.Component.StorageView;
entities.game.Prop1.Component.StorageView._isSharedComp = entities.game.Prop1.Component._isSharedComp = false;
entities.game.Prop1.Component.StorageView._fromPtr = entities.game.Prop1.Component._fromPtr;
entities.game.Prop1.Component.StorageView._toPtr = entities.game.Prop1.Component._toPtr;
entities.game.Prop1.Component.StorageView._tempHeapPtr = entities.game.Prop1.Component._tempHeapPtr;
entities.game.Prop1.Component.StorageView._size = entities.game.Prop1.Component._size;
entities.game.Prop1.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Prop1.Component.StorageView.prototype, {
});
entities.game.Prop1.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Prop1.Component is a POD type, so a JavaScript side copy constructor entities.game.Prop1.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Prop1.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Prop1.Component', 1, []);
})();
Object.defineProperties(entities.game.Prop1.Component, { cid: { configurable: true, get: function() { delete entities.game.Prop1.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Prop1.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Prop1.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Prop1.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Prop1.Component.cid; } } });
entities.game.Prop2 = entities.game.Prop2 || {};
entities.game.Prop2.Component = function() {
};
entities.game.Prop2.Component.prototype = Object.create(null);
entities.game.Prop2.Component.prototype.constructor = entities.game.Prop2.Component;
Object.defineProperties(entities.game.Prop2.Component.prototype, {
});
entities.game.Prop2.Component._size = 1;
entities.game.Prop2.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Prop2.Component.prototype);
  return v;
};
entities.game.Prop2.Component._toPtr = function(ptr, v) {
};
entities.game.Prop2.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Prop2.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Prop2.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Prop2.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Prop2.Component.StorageView.prototype = Object.create(null);
entities.game.Prop2.Component.StorageView.prototype.constructor = entities.game.Prop2.Component.StorageView;
entities.game.Prop2.Component._view = entities.game.Prop2.Component.StorageView;
entities.game.Prop2.Component.StorageView._isSharedComp = entities.game.Prop2.Component._isSharedComp = false;
entities.game.Prop2.Component.StorageView._fromPtr = entities.game.Prop2.Component._fromPtr;
entities.game.Prop2.Component.StorageView._toPtr = entities.game.Prop2.Component._toPtr;
entities.game.Prop2.Component.StorageView._tempHeapPtr = entities.game.Prop2.Component._tempHeapPtr;
entities.game.Prop2.Component.StorageView._size = entities.game.Prop2.Component._size;
entities.game.Prop2.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Prop2.Component.StorageView.prototype, {
});
entities.game.Prop2.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Prop2.Component is a POD type, so a JavaScript side copy constructor entities.game.Prop2.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Prop2.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Prop2.Component', 1, []);
})();
Object.defineProperties(entities.game.Prop2.Component, { cid: { configurable: true, get: function() { delete entities.game.Prop2.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Prop2.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Prop2.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Prop2.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Prop2.Component.cid; } } });
entities.game.Prop3 = entities.game.Prop3 || {};
entities.game.Prop3.Component = function() {
};
entities.game.Prop3.Component.prototype = Object.create(null);
entities.game.Prop3.Component.prototype.constructor = entities.game.Prop3.Component;
Object.defineProperties(entities.game.Prop3.Component.prototype, {
});
entities.game.Prop3.Component._size = 1;
entities.game.Prop3.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Prop3.Component.prototype);
  return v;
};
entities.game.Prop3.Component._toPtr = function(ptr, v) {
};
entities.game.Prop3.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Prop3.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Prop3.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Prop3.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Prop3.Component.StorageView.prototype = Object.create(null);
entities.game.Prop3.Component.StorageView.prototype.constructor = entities.game.Prop3.Component.StorageView;
entities.game.Prop3.Component._view = entities.game.Prop3.Component.StorageView;
entities.game.Prop3.Component.StorageView._isSharedComp = entities.game.Prop3.Component._isSharedComp = false;
entities.game.Prop3.Component.StorageView._fromPtr = entities.game.Prop3.Component._fromPtr;
entities.game.Prop3.Component.StorageView._toPtr = entities.game.Prop3.Component._toPtr;
entities.game.Prop3.Component.StorageView._tempHeapPtr = entities.game.Prop3.Component._tempHeapPtr;
entities.game.Prop3.Component.StorageView._size = entities.game.Prop3.Component._size;
entities.game.Prop3.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Prop3.Component.StorageView.prototype, {
});
entities.game.Prop3.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Prop3.Component is a POD type, so a JavaScript side copy constructor entities.game.Prop3.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Prop3.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Prop3.Component', 1, []);
})();
Object.defineProperties(entities.game.Prop3.Component, { cid: { configurable: true, get: function() { delete entities.game.Prop3.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Prop3.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Prop3.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Prop3.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Prop3.Component.cid; } } });
entities.game.SewerStraight = entities.game.SewerStraight || {};
entities.game.SewerStraight.Component = function() {
};
entities.game.SewerStraight.Component.prototype = Object.create(null);
entities.game.SewerStraight.Component.prototype.constructor = entities.game.SewerStraight.Component;
Object.defineProperties(entities.game.SewerStraight.Component.prototype, {
});
entities.game.SewerStraight.Component._size = 1;
entities.game.SewerStraight.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.SewerStraight.Component.prototype);
  return v;
};
entities.game.SewerStraight.Component._toPtr = function(ptr, v) {
};
entities.game.SewerStraight.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.SewerStraight.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.SewerStraight.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.SewerStraight.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.SewerStraight.Component.StorageView.prototype = Object.create(null);
entities.game.SewerStraight.Component.StorageView.prototype.constructor = entities.game.SewerStraight.Component.StorageView;
entities.game.SewerStraight.Component._view = entities.game.SewerStraight.Component.StorageView;
entities.game.SewerStraight.Component.StorageView._isSharedComp = entities.game.SewerStraight.Component._isSharedComp = false;
entities.game.SewerStraight.Component.StorageView._fromPtr = entities.game.SewerStraight.Component._fromPtr;
entities.game.SewerStraight.Component.StorageView._toPtr = entities.game.SewerStraight.Component._toPtr;
entities.game.SewerStraight.Component.StorageView._tempHeapPtr = entities.game.SewerStraight.Component._tempHeapPtr;
entities.game.SewerStraight.Component.StorageView._size = entities.game.SewerStraight.Component._size;
entities.game.SewerStraight.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.SewerStraight.Component.StorageView.prototype, {
});
entities.game.SewerStraight.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.SewerStraight.Component is a POD type, so a JavaScript side copy constructor entities.game.SewerStraight.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.SewerStraight.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.SewerStraight.Component', 1, []);
})();
Object.defineProperties(entities.game.SewerStraight.Component, { cid: { configurable: true, get: function() { delete entities.game.SewerStraight.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.SewerStraight.Component.cid = Module._ut_component_register_cid_with_type(entities.game.SewerStraight.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.SewerStraight.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.SewerStraight.Component.cid; } } });
entities.game.SewerT = entities.game.SewerT || {};
entities.game.SewerT.Component = function() {
};
entities.game.SewerT.Component.prototype = Object.create(null);
entities.game.SewerT.Component.prototype.constructor = entities.game.SewerT.Component;
Object.defineProperties(entities.game.SewerT.Component.prototype, {
});
entities.game.SewerT.Component._size = 1;
entities.game.SewerT.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.SewerT.Component.prototype);
  return v;
};
entities.game.SewerT.Component._toPtr = function(ptr, v) {
};
entities.game.SewerT.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.SewerT.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.SewerT.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.SewerT.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.SewerT.Component.StorageView.prototype = Object.create(null);
entities.game.SewerT.Component.StorageView.prototype.constructor = entities.game.SewerT.Component.StorageView;
entities.game.SewerT.Component._view = entities.game.SewerT.Component.StorageView;
entities.game.SewerT.Component.StorageView._isSharedComp = entities.game.SewerT.Component._isSharedComp = false;
entities.game.SewerT.Component.StorageView._fromPtr = entities.game.SewerT.Component._fromPtr;
entities.game.SewerT.Component.StorageView._toPtr = entities.game.SewerT.Component._toPtr;
entities.game.SewerT.Component.StorageView._tempHeapPtr = entities.game.SewerT.Component._tempHeapPtr;
entities.game.SewerT.Component.StorageView._size = entities.game.SewerT.Component._size;
entities.game.SewerT.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.SewerT.Component.StorageView.prototype, {
});
entities.game.SewerT.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.SewerT.Component is a POD type, so a JavaScript side copy constructor entities.game.SewerT.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.SewerT.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.SewerT.Component', 1, []);
})();
Object.defineProperties(entities.game.SewerT.Component, { cid: { configurable: true, get: function() { delete entities.game.SewerT.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.SewerT.Component.cid = Module._ut_component_register_cid_with_type(entities.game.SewerT.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.SewerT.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.SewerT.Component.cid; } } });
entities.game.Cell = entities.game.Cell || {};
entities.game.Cell.Component = function() {
};
entities.game.Cell.Component.prototype = Object.create(null);
entities.game.Cell.Component.prototype.constructor = entities.game.Cell.Component;
Object.defineProperties(entities.game.Cell.Component.prototype, {
});
entities.game.Cell.Component._size = 1;
entities.game.Cell.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Cell.Component.prototype);
  return v;
};
entities.game.Cell.Component._toPtr = function(ptr, v) {
};
entities.game.Cell.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Cell.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Cell.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Cell.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Cell.Component.StorageView.prototype = Object.create(null);
entities.game.Cell.Component.StorageView.prototype.constructor = entities.game.Cell.Component.StorageView;
entities.game.Cell.Component._view = entities.game.Cell.Component.StorageView;
entities.game.Cell.Component.StorageView._isSharedComp = entities.game.Cell.Component._isSharedComp = false;
entities.game.Cell.Component.StorageView._fromPtr = entities.game.Cell.Component._fromPtr;
entities.game.Cell.Component.StorageView._toPtr = entities.game.Cell.Component._toPtr;
entities.game.Cell.Component.StorageView._tempHeapPtr = entities.game.Cell.Component._tempHeapPtr;
entities.game.Cell.Component.StorageView._size = entities.game.Cell.Component._size;
entities.game.Cell.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Cell.Component.StorageView.prototype, {
});
entities.game.Cell.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Cell.Component is a POD type, so a JavaScript side copy constructor entities.game.Cell.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Cell.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Cell.Component', 1, []);
})();
Object.defineProperties(entities.game.Cell.Component, { cid: { configurable: true, get: function() { delete entities.game.Cell.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Cell.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Cell.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Cell.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Cell.Component.cid; } } });
entities.game.CollectedEgg = entities.game.CollectedEgg || {};
entities.game.CollectedEgg.Component = function() {
};
entities.game.CollectedEgg.Component.prototype = Object.create(null);
entities.game.CollectedEgg.Component.prototype.constructor = entities.game.CollectedEgg.Component;
Object.defineProperties(entities.game.CollectedEgg.Component.prototype, {
});
entities.game.CollectedEgg.Component._size = 1;
entities.game.CollectedEgg.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.CollectedEgg.Component.prototype);
  return v;
};
entities.game.CollectedEgg.Component._toPtr = function(ptr, v) {
};
entities.game.CollectedEgg.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.CollectedEgg.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.CollectedEgg.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.CollectedEgg.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.CollectedEgg.Component.StorageView.prototype = Object.create(null);
entities.game.CollectedEgg.Component.StorageView.prototype.constructor = entities.game.CollectedEgg.Component.StorageView;
entities.game.CollectedEgg.Component._view = entities.game.CollectedEgg.Component.StorageView;
entities.game.CollectedEgg.Component.StorageView._isSharedComp = entities.game.CollectedEgg.Component._isSharedComp = false;
entities.game.CollectedEgg.Component.StorageView._fromPtr = entities.game.CollectedEgg.Component._fromPtr;
entities.game.CollectedEgg.Component.StorageView._toPtr = entities.game.CollectedEgg.Component._toPtr;
entities.game.CollectedEgg.Component.StorageView._tempHeapPtr = entities.game.CollectedEgg.Component._tempHeapPtr;
entities.game.CollectedEgg.Component.StorageView._size = entities.game.CollectedEgg.Component._size;
entities.game.CollectedEgg.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.CollectedEgg.Component.StorageView.prototype, {
});
entities.game.CollectedEgg.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.CollectedEgg.Component is a POD type, so a JavaScript side copy constructor entities.game.CollectedEgg.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.CollectedEgg.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.CollectedEgg.Component', 1, []);
})();
Object.defineProperties(entities.game.CollectedEgg.Component, { cid: { configurable: true, get: function() { delete entities.game.CollectedEgg.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.CollectedEgg.Component.cid = Module._ut_component_register_cid_with_type(entities.game.CollectedEgg.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.CollectedEgg.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.CollectedEgg.Component.cid; } } });
entities.game.DestroyLaserAnimation = entities.game.DestroyLaserAnimation || {};
entities.game.DestroyLaserAnimation.Component = function() {
};
entities.game.DestroyLaserAnimation.Component.prototype = Object.create(null);
entities.game.DestroyLaserAnimation.Component.prototype.constructor = entities.game.DestroyLaserAnimation.Component;
Object.defineProperties(entities.game.DestroyLaserAnimation.Component.prototype, {
});
entities.game.DestroyLaserAnimation.Component._size = 1;
entities.game.DestroyLaserAnimation.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.DestroyLaserAnimation.Component.prototype);
  return v;
};
entities.game.DestroyLaserAnimation.Component._toPtr = function(ptr, v) {
};
entities.game.DestroyLaserAnimation.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.DestroyLaserAnimation.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.DestroyLaserAnimation.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.DestroyLaserAnimation.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.DestroyLaserAnimation.Component.StorageView.prototype = Object.create(null);
entities.game.DestroyLaserAnimation.Component.StorageView.prototype.constructor = entities.game.DestroyLaserAnimation.Component.StorageView;
entities.game.DestroyLaserAnimation.Component._view = entities.game.DestroyLaserAnimation.Component.StorageView;
entities.game.DestroyLaserAnimation.Component.StorageView._isSharedComp = entities.game.DestroyLaserAnimation.Component._isSharedComp = false;
entities.game.DestroyLaserAnimation.Component.StorageView._fromPtr = entities.game.DestroyLaserAnimation.Component._fromPtr;
entities.game.DestroyLaserAnimation.Component.StorageView._toPtr = entities.game.DestroyLaserAnimation.Component._toPtr;
entities.game.DestroyLaserAnimation.Component.StorageView._tempHeapPtr = entities.game.DestroyLaserAnimation.Component._tempHeapPtr;
entities.game.DestroyLaserAnimation.Component.StorageView._size = entities.game.DestroyLaserAnimation.Component._size;
entities.game.DestroyLaserAnimation.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.DestroyLaserAnimation.Component.StorageView.prototype, {
});
entities.game.DestroyLaserAnimation.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.DestroyLaserAnimation.Component is a POD type, so a JavaScript side copy constructor entities.game.DestroyLaserAnimation.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.DestroyLaserAnimation.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.DestroyLaserAnimation.Component', 1, []);
})();
Object.defineProperties(entities.game.DestroyLaserAnimation.Component, { cid: { configurable: true, get: function() { delete entities.game.DestroyLaserAnimation.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.DestroyLaserAnimation.Component.cid = Module._ut_component_register_cid_with_type(entities.game.DestroyLaserAnimation.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.DestroyLaserAnimation.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.DestroyLaserAnimation.Component.cid; } } });
entities.game.DestroyLineAnimation = entities.game.DestroyLineAnimation || {};
entities.game.DestroyLineAnimation.Component = function() {
};
entities.game.DestroyLineAnimation.Component.prototype = Object.create(null);
entities.game.DestroyLineAnimation.Component.prototype.constructor = entities.game.DestroyLineAnimation.Component;
Object.defineProperties(entities.game.DestroyLineAnimation.Component.prototype, {
});
entities.game.DestroyLineAnimation.Component._size = 1;
entities.game.DestroyLineAnimation.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.DestroyLineAnimation.Component.prototype);
  return v;
};
entities.game.DestroyLineAnimation.Component._toPtr = function(ptr, v) {
};
entities.game.DestroyLineAnimation.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.DestroyLineAnimation.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.DestroyLineAnimation.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.DestroyLineAnimation.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.DestroyLineAnimation.Component.StorageView.prototype = Object.create(null);
entities.game.DestroyLineAnimation.Component.StorageView.prototype.constructor = entities.game.DestroyLineAnimation.Component.StorageView;
entities.game.DestroyLineAnimation.Component._view = entities.game.DestroyLineAnimation.Component.StorageView;
entities.game.DestroyLineAnimation.Component.StorageView._isSharedComp = entities.game.DestroyLineAnimation.Component._isSharedComp = false;
entities.game.DestroyLineAnimation.Component.StorageView._fromPtr = entities.game.DestroyLineAnimation.Component._fromPtr;
entities.game.DestroyLineAnimation.Component.StorageView._toPtr = entities.game.DestroyLineAnimation.Component._toPtr;
entities.game.DestroyLineAnimation.Component.StorageView._tempHeapPtr = entities.game.DestroyLineAnimation.Component._tempHeapPtr;
entities.game.DestroyLineAnimation.Component.StorageView._size = entities.game.DestroyLineAnimation.Component._size;
entities.game.DestroyLineAnimation.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.DestroyLineAnimation.Component.StorageView.prototype, {
});
entities.game.DestroyLineAnimation.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.DestroyLineAnimation.Component is a POD type, so a JavaScript side copy constructor entities.game.DestroyLineAnimation.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.DestroyLineAnimation.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.DestroyLineAnimation.Component', 1, []);
})();
Object.defineProperties(entities.game.DestroyLineAnimation.Component, { cid: { configurable: true, get: function() { delete entities.game.DestroyLineAnimation.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.DestroyLineAnimation.Component.cid = Module._ut_component_register_cid_with_type(entities.game.DestroyLineAnimation.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.DestroyLineAnimation.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.DestroyLineAnimation.Component.cid; } } });
entities.game.ExplodingGem1 = entities.game.ExplodingGem1 || {};
entities.game.ExplodingGem1.Component = function() {
};
entities.game.ExplodingGem1.Component.prototype = Object.create(null);
entities.game.ExplodingGem1.Component.prototype.constructor = entities.game.ExplodingGem1.Component;
Object.defineProperties(entities.game.ExplodingGem1.Component.prototype, {
});
entities.game.ExplodingGem1.Component._size = 1;
entities.game.ExplodingGem1.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.ExplodingGem1.Component.prototype);
  return v;
};
entities.game.ExplodingGem1.Component._toPtr = function(ptr, v) {
};
entities.game.ExplodingGem1.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.ExplodingGem1.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.ExplodingGem1.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.ExplodingGem1.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.ExplodingGem1.Component.StorageView.prototype = Object.create(null);
entities.game.ExplodingGem1.Component.StorageView.prototype.constructor = entities.game.ExplodingGem1.Component.StorageView;
entities.game.ExplodingGem1.Component._view = entities.game.ExplodingGem1.Component.StorageView;
entities.game.ExplodingGem1.Component.StorageView._isSharedComp = entities.game.ExplodingGem1.Component._isSharedComp = false;
entities.game.ExplodingGem1.Component.StorageView._fromPtr = entities.game.ExplodingGem1.Component._fromPtr;
entities.game.ExplodingGem1.Component.StorageView._toPtr = entities.game.ExplodingGem1.Component._toPtr;
entities.game.ExplodingGem1.Component.StorageView._tempHeapPtr = entities.game.ExplodingGem1.Component._tempHeapPtr;
entities.game.ExplodingGem1.Component.StorageView._size = entities.game.ExplodingGem1.Component._size;
entities.game.ExplodingGem1.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.ExplodingGem1.Component.StorageView.prototype, {
});
entities.game.ExplodingGem1.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.ExplodingGem1.Component is a POD type, so a JavaScript side copy constructor entities.game.ExplodingGem1.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.ExplodingGem1.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.ExplodingGem1.Component', 1, []);
})();
Object.defineProperties(entities.game.ExplodingGem1.Component, { cid: { configurable: true, get: function() { delete entities.game.ExplodingGem1.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.ExplodingGem1.Component.cid = Module._ut_component_register_cid_with_type(entities.game.ExplodingGem1.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.ExplodingGem1.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.ExplodingGem1.Component.cid; } } });
entities.game.ExplodingGem2 = entities.game.ExplodingGem2 || {};
entities.game.ExplodingGem2.Component = function() {
};
entities.game.ExplodingGem2.Component.prototype = Object.create(null);
entities.game.ExplodingGem2.Component.prototype.constructor = entities.game.ExplodingGem2.Component;
Object.defineProperties(entities.game.ExplodingGem2.Component.prototype, {
});
entities.game.ExplodingGem2.Component._size = 1;
entities.game.ExplodingGem2.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.ExplodingGem2.Component.prototype);
  return v;
};
entities.game.ExplodingGem2.Component._toPtr = function(ptr, v) {
};
entities.game.ExplodingGem2.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.ExplodingGem2.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.ExplodingGem2.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.ExplodingGem2.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.ExplodingGem2.Component.StorageView.prototype = Object.create(null);
entities.game.ExplodingGem2.Component.StorageView.prototype.constructor = entities.game.ExplodingGem2.Component.StorageView;
entities.game.ExplodingGem2.Component._view = entities.game.ExplodingGem2.Component.StorageView;
entities.game.ExplodingGem2.Component.StorageView._isSharedComp = entities.game.ExplodingGem2.Component._isSharedComp = false;
entities.game.ExplodingGem2.Component.StorageView._fromPtr = entities.game.ExplodingGem2.Component._fromPtr;
entities.game.ExplodingGem2.Component.StorageView._toPtr = entities.game.ExplodingGem2.Component._toPtr;
entities.game.ExplodingGem2.Component.StorageView._tempHeapPtr = entities.game.ExplodingGem2.Component._tempHeapPtr;
entities.game.ExplodingGem2.Component.StorageView._size = entities.game.ExplodingGem2.Component._size;
entities.game.ExplodingGem2.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.ExplodingGem2.Component.StorageView.prototype, {
});
entities.game.ExplodingGem2.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.ExplodingGem2.Component is a POD type, so a JavaScript side copy constructor entities.game.ExplodingGem2.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.ExplodingGem2.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.ExplodingGem2.Component', 1, []);
})();
Object.defineProperties(entities.game.ExplodingGem2.Component, { cid: { configurable: true, get: function() { delete entities.game.ExplodingGem2.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.ExplodingGem2.Component.cid = Module._ut_component_register_cid_with_type(entities.game.ExplodingGem2.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.ExplodingGem2.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.ExplodingGem2.Component.cid; } } });
entities.game.Gem = entities.game.Gem || {};
entities.game.Gem.Component = function() {
};
entities.game.Gem.Component.prototype = Object.create(null);
entities.game.Gem.Component.prototype.constructor = entities.game.Gem.Component;
Object.defineProperties(entities.game.Gem.Component.prototype, {
});
entities.game.Gem.Component._size = 1;
entities.game.Gem.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Gem.Component.prototype);
  return v;
};
entities.game.Gem.Component._toPtr = function(ptr, v) {
};
entities.game.Gem.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Gem.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Gem.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Gem.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Gem.Component.StorageView.prototype = Object.create(null);
entities.game.Gem.Component.StorageView.prototype.constructor = entities.game.Gem.Component.StorageView;
entities.game.Gem.Component._view = entities.game.Gem.Component.StorageView;
entities.game.Gem.Component.StorageView._isSharedComp = entities.game.Gem.Component._isSharedComp = false;
entities.game.Gem.Component.StorageView._fromPtr = entities.game.Gem.Component._fromPtr;
entities.game.Gem.Component.StorageView._toPtr = entities.game.Gem.Component._toPtr;
entities.game.Gem.Component.StorageView._tempHeapPtr = entities.game.Gem.Component._tempHeapPtr;
entities.game.Gem.Component.StorageView._size = entities.game.Gem.Component._size;
entities.game.Gem.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Gem.Component.StorageView.prototype, {
});
entities.game.Gem.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Gem.Component is a POD type, so a JavaScript side copy constructor entities.game.Gem.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Gem.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Gem.Component', 1, []);
})();
Object.defineProperties(entities.game.Gem.Component, { cid: { configurable: true, get: function() { delete entities.game.Gem.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Gem.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Gem.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Gem.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Gem.Component.cid; } } });
entities.game.ScoreGainLabel = entities.game.ScoreGainLabel || {};
entities.game.ScoreGainLabel.Component = function() {
};
entities.game.ScoreGainLabel.Component.prototype = Object.create(null);
entities.game.ScoreGainLabel.Component.prototype.constructor = entities.game.ScoreGainLabel.Component;
Object.defineProperties(entities.game.ScoreGainLabel.Component.prototype, {
});
entities.game.ScoreGainLabel.Component._size = 1;
entities.game.ScoreGainLabel.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.ScoreGainLabel.Component.prototype);
  return v;
};
entities.game.ScoreGainLabel.Component._toPtr = function(ptr, v) {
};
entities.game.ScoreGainLabel.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.ScoreGainLabel.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.ScoreGainLabel.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.ScoreGainLabel.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.ScoreGainLabel.Component.StorageView.prototype = Object.create(null);
entities.game.ScoreGainLabel.Component.StorageView.prototype.constructor = entities.game.ScoreGainLabel.Component.StorageView;
entities.game.ScoreGainLabel.Component._view = entities.game.ScoreGainLabel.Component.StorageView;
entities.game.ScoreGainLabel.Component.StorageView._isSharedComp = entities.game.ScoreGainLabel.Component._isSharedComp = false;
entities.game.ScoreGainLabel.Component.StorageView._fromPtr = entities.game.ScoreGainLabel.Component._fromPtr;
entities.game.ScoreGainLabel.Component.StorageView._toPtr = entities.game.ScoreGainLabel.Component._toPtr;
entities.game.ScoreGainLabel.Component.StorageView._tempHeapPtr = entities.game.ScoreGainLabel.Component._tempHeapPtr;
entities.game.ScoreGainLabel.Component.StorageView._size = entities.game.ScoreGainLabel.Component._size;
entities.game.ScoreGainLabel.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.ScoreGainLabel.Component.StorageView.prototype, {
});
entities.game.ScoreGainLabel.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.ScoreGainLabel.Component is a POD type, so a JavaScript side copy constructor entities.game.ScoreGainLabel.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.ScoreGainLabel.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.ScoreGainLabel.Component', 1, []);
})();
Object.defineProperties(entities.game.ScoreGainLabel.Component, { cid: { configurable: true, get: function() { delete entities.game.ScoreGainLabel.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.ScoreGainLabel.Component.cid = Module._ut_component_register_cid_with_type(entities.game.ScoreGainLabel.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.ScoreGainLabel.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.ScoreGainLabel.Component.cid; } } });
entities.game.Level1 = entities.game.Level1 || {};
entities.game.Level1.Component = function() {
};
entities.game.Level1.Component.prototype = Object.create(null);
entities.game.Level1.Component.prototype.constructor = entities.game.Level1.Component;
Object.defineProperties(entities.game.Level1.Component.prototype, {
});
entities.game.Level1.Component._size = 1;
entities.game.Level1.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Level1.Component.prototype);
  return v;
};
entities.game.Level1.Component._toPtr = function(ptr, v) {
};
entities.game.Level1.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Level1.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Level1.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Level1.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Level1.Component.StorageView.prototype = Object.create(null);
entities.game.Level1.Component.StorageView.prototype.constructor = entities.game.Level1.Component.StorageView;
entities.game.Level1.Component._view = entities.game.Level1.Component.StorageView;
entities.game.Level1.Component.StorageView._isSharedComp = entities.game.Level1.Component._isSharedComp = false;
entities.game.Level1.Component.StorageView._fromPtr = entities.game.Level1.Component._fromPtr;
entities.game.Level1.Component.StorageView._toPtr = entities.game.Level1.Component._toPtr;
entities.game.Level1.Component.StorageView._tempHeapPtr = entities.game.Level1.Component._tempHeapPtr;
entities.game.Level1.Component.StorageView._size = entities.game.Level1.Component._size;
entities.game.Level1.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Level1.Component.StorageView.prototype, {
});
entities.game.Level1.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Level1.Component is a POD type, so a JavaScript side copy constructor entities.game.Level1.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Level1.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Level1.Component', 1, []);
})();
Object.defineProperties(entities.game.Level1.Component, { cid: { configurable: true, get: function() { delete entities.game.Level1.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Level1.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Level1.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Level1.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Level1.Component.cid; } } });
entities.game.Level2 = entities.game.Level2 || {};
entities.game.Level2.Component = function() {
};
entities.game.Level2.Component.prototype = Object.create(null);
entities.game.Level2.Component.prototype.constructor = entities.game.Level2.Component;
Object.defineProperties(entities.game.Level2.Component.prototype, {
});
entities.game.Level2.Component._size = 1;
entities.game.Level2.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Level2.Component.prototype);
  return v;
};
entities.game.Level2.Component._toPtr = function(ptr, v) {
};
entities.game.Level2.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Level2.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Level2.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Level2.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Level2.Component.StorageView.prototype = Object.create(null);
entities.game.Level2.Component.StorageView.prototype.constructor = entities.game.Level2.Component.StorageView;
entities.game.Level2.Component._view = entities.game.Level2.Component.StorageView;
entities.game.Level2.Component.StorageView._isSharedComp = entities.game.Level2.Component._isSharedComp = false;
entities.game.Level2.Component.StorageView._fromPtr = entities.game.Level2.Component._fromPtr;
entities.game.Level2.Component.StorageView._toPtr = entities.game.Level2.Component._toPtr;
entities.game.Level2.Component.StorageView._tempHeapPtr = entities.game.Level2.Component._tempHeapPtr;
entities.game.Level2.Component.StorageView._size = entities.game.Level2.Component._size;
entities.game.Level2.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Level2.Component.StorageView.prototype, {
});
entities.game.Level2.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Level2.Component is a POD type, so a JavaScript side copy constructor entities.game.Level2.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Level2.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Level2.Component', 1, []);
})();
Object.defineProperties(entities.game.Level2.Component, { cid: { configurable: true, get: function() { delete entities.game.Level2.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Level2.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Level2.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Level2.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Level2.Component.cid; } } });
entities.game.Level3 = entities.game.Level3 || {};
entities.game.Level3.Component = function() {
};
entities.game.Level3.Component.prototype = Object.create(null);
entities.game.Level3.Component.prototype.constructor = entities.game.Level3.Component;
Object.defineProperties(entities.game.Level3.Component.prototype, {
});
entities.game.Level3.Component._size = 1;
entities.game.Level3.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Level3.Component.prototype);
  return v;
};
entities.game.Level3.Component._toPtr = function(ptr, v) {
};
entities.game.Level3.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Level3.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Level3.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Level3.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Level3.Component.StorageView.prototype = Object.create(null);
entities.game.Level3.Component.StorageView.prototype.constructor = entities.game.Level3.Component.StorageView;
entities.game.Level3.Component._view = entities.game.Level3.Component.StorageView;
entities.game.Level3.Component.StorageView._isSharedComp = entities.game.Level3.Component._isSharedComp = false;
entities.game.Level3.Component.StorageView._fromPtr = entities.game.Level3.Component._fromPtr;
entities.game.Level3.Component.StorageView._toPtr = entities.game.Level3.Component._toPtr;
entities.game.Level3.Component.StorageView._tempHeapPtr = entities.game.Level3.Component._tempHeapPtr;
entities.game.Level3.Component.StorageView._size = entities.game.Level3.Component._size;
entities.game.Level3.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Level3.Component.StorageView.prototype, {
});
entities.game.Level3.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Level3.Component is a POD type, so a JavaScript side copy constructor entities.game.Level3.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Level3.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Level3.Component', 1, []);
})();
Object.defineProperties(entities.game.Level3.Component, { cid: { configurable: true, get: function() { delete entities.game.Level3.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Level3.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Level3.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Level3.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Level3.Component.cid; } } });
entities.game.TutorialEggPointer = entities.game.TutorialEggPointer || {};
entities.game.TutorialEggPointer.Component = function() {
};
entities.game.TutorialEggPointer.Component.prototype = Object.create(null);
entities.game.TutorialEggPointer.Component.prototype.constructor = entities.game.TutorialEggPointer.Component;
Object.defineProperties(entities.game.TutorialEggPointer.Component.prototype, {
});
entities.game.TutorialEggPointer.Component._size = 1;
entities.game.TutorialEggPointer.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.TutorialEggPointer.Component.prototype);
  return v;
};
entities.game.TutorialEggPointer.Component._toPtr = function(ptr, v) {
};
entities.game.TutorialEggPointer.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.TutorialEggPointer.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.TutorialEggPointer.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.TutorialEggPointer.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.TutorialEggPointer.Component.StorageView.prototype = Object.create(null);
entities.game.TutorialEggPointer.Component.StorageView.prototype.constructor = entities.game.TutorialEggPointer.Component.StorageView;
entities.game.TutorialEggPointer.Component._view = entities.game.TutorialEggPointer.Component.StorageView;
entities.game.TutorialEggPointer.Component.StorageView._isSharedComp = entities.game.TutorialEggPointer.Component._isSharedComp = false;
entities.game.TutorialEggPointer.Component.StorageView._fromPtr = entities.game.TutorialEggPointer.Component._fromPtr;
entities.game.TutorialEggPointer.Component.StorageView._toPtr = entities.game.TutorialEggPointer.Component._toPtr;
entities.game.TutorialEggPointer.Component.StorageView._tempHeapPtr = entities.game.TutorialEggPointer.Component._tempHeapPtr;
entities.game.TutorialEggPointer.Component.StorageView._size = entities.game.TutorialEggPointer.Component._size;
entities.game.TutorialEggPointer.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.TutorialEggPointer.Component.StorageView.prototype, {
});
entities.game.TutorialEggPointer.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.TutorialEggPointer.Component is a POD type, so a JavaScript side copy constructor entities.game.TutorialEggPointer.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.TutorialEggPointer.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.TutorialEggPointer.Component', 1, []);
})();
Object.defineProperties(entities.game.TutorialEggPointer.Component, { cid: { configurable: true, get: function() { delete entities.game.TutorialEggPointer.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.TutorialEggPointer.Component.cid = Module._ut_component_register_cid_with_type(entities.game.TutorialEggPointer.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.TutorialEggPointer.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.TutorialEggPointer.Component.cid; } } });
entities.game.TutorialHighlight = entities.game.TutorialHighlight || {};
entities.game.TutorialHighlight.Component = function() {
};
entities.game.TutorialHighlight.Component.prototype = Object.create(null);
entities.game.TutorialHighlight.Component.prototype.constructor = entities.game.TutorialHighlight.Component;
Object.defineProperties(entities.game.TutorialHighlight.Component.prototype, {
});
entities.game.TutorialHighlight.Component._size = 1;
entities.game.TutorialHighlight.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.TutorialHighlight.Component.prototype);
  return v;
};
entities.game.TutorialHighlight.Component._toPtr = function(ptr, v) {
};
entities.game.TutorialHighlight.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.TutorialHighlight.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.TutorialHighlight.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.TutorialHighlight.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.TutorialHighlight.Component.StorageView.prototype = Object.create(null);
entities.game.TutorialHighlight.Component.StorageView.prototype.constructor = entities.game.TutorialHighlight.Component.StorageView;
entities.game.TutorialHighlight.Component._view = entities.game.TutorialHighlight.Component.StorageView;
entities.game.TutorialHighlight.Component.StorageView._isSharedComp = entities.game.TutorialHighlight.Component._isSharedComp = false;
entities.game.TutorialHighlight.Component.StorageView._fromPtr = entities.game.TutorialHighlight.Component._fromPtr;
entities.game.TutorialHighlight.Component.StorageView._toPtr = entities.game.TutorialHighlight.Component._toPtr;
entities.game.TutorialHighlight.Component.StorageView._tempHeapPtr = entities.game.TutorialHighlight.Component._tempHeapPtr;
entities.game.TutorialHighlight.Component.StorageView._size = entities.game.TutorialHighlight.Component._size;
entities.game.TutorialHighlight.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.TutorialHighlight.Component.StorageView.prototype, {
});
entities.game.TutorialHighlight.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.TutorialHighlight.Component is a POD type, so a JavaScript side copy constructor entities.game.TutorialHighlight.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.TutorialHighlight.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.TutorialHighlight.Component', 1, []);
})();
Object.defineProperties(entities.game.TutorialHighlight.Component, { cid: { configurable: true, get: function() { delete entities.game.TutorialHighlight.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.TutorialHighlight.Component.cid = Module._ut_component_register_cid_with_type(entities.game.TutorialHighlight.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.TutorialHighlight.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.TutorialHighlight.Component.cid; } } });
entities.game.TutorialMatchPointer = entities.game.TutorialMatchPointer || {};
entities.game.TutorialMatchPointer.Component = function() {
};
entities.game.TutorialMatchPointer.Component.prototype = Object.create(null);
entities.game.TutorialMatchPointer.Component.prototype.constructor = entities.game.TutorialMatchPointer.Component;
Object.defineProperties(entities.game.TutorialMatchPointer.Component.prototype, {
});
entities.game.TutorialMatchPointer.Component._size = 1;
entities.game.TutorialMatchPointer.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.TutorialMatchPointer.Component.prototype);
  return v;
};
entities.game.TutorialMatchPointer.Component._toPtr = function(ptr, v) {
};
entities.game.TutorialMatchPointer.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.TutorialMatchPointer.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.TutorialMatchPointer.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.TutorialMatchPointer.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.TutorialMatchPointer.Component.StorageView.prototype = Object.create(null);
entities.game.TutorialMatchPointer.Component.StorageView.prototype.constructor = entities.game.TutorialMatchPointer.Component.StorageView;
entities.game.TutorialMatchPointer.Component._view = entities.game.TutorialMatchPointer.Component.StorageView;
entities.game.TutorialMatchPointer.Component.StorageView._isSharedComp = entities.game.TutorialMatchPointer.Component._isSharedComp = false;
entities.game.TutorialMatchPointer.Component.StorageView._fromPtr = entities.game.TutorialMatchPointer.Component._fromPtr;
entities.game.TutorialMatchPointer.Component.StorageView._toPtr = entities.game.TutorialMatchPointer.Component._toPtr;
entities.game.TutorialMatchPointer.Component.StorageView._tempHeapPtr = entities.game.TutorialMatchPointer.Component._tempHeapPtr;
entities.game.TutorialMatchPointer.Component.StorageView._size = entities.game.TutorialMatchPointer.Component._size;
entities.game.TutorialMatchPointer.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.TutorialMatchPointer.Component.StorageView.prototype, {
});
entities.game.TutorialMatchPointer.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.TutorialMatchPointer.Component is a POD type, so a JavaScript side copy constructor entities.game.TutorialMatchPointer.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.TutorialMatchPointer.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.TutorialMatchPointer.Component', 1, []);
})();
Object.defineProperties(entities.game.TutorialMatchPointer.Component, { cid: { configurable: true, get: function() { delete entities.game.TutorialMatchPointer.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.TutorialMatchPointer.Component.cid = Module._ut_component_register_cid_with_type(entities.game.TutorialMatchPointer.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.TutorialMatchPointer.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.TutorialMatchPointer.Component.cid; } } });
entities.game.TutorialSurvivalPointer = entities.game.TutorialSurvivalPointer || {};
entities.game.TutorialSurvivalPointer.Component = function() {
};
entities.game.TutorialSurvivalPointer.Component.prototype = Object.create(null);
entities.game.TutorialSurvivalPointer.Component.prototype.constructor = entities.game.TutorialSurvivalPointer.Component;
Object.defineProperties(entities.game.TutorialSurvivalPointer.Component.prototype, {
});
entities.game.TutorialSurvivalPointer.Component._size = 1;
entities.game.TutorialSurvivalPointer.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.TutorialSurvivalPointer.Component.prototype);
  return v;
};
entities.game.TutorialSurvivalPointer.Component._toPtr = function(ptr, v) {
};
entities.game.TutorialSurvivalPointer.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.TutorialSurvivalPointer.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.TutorialSurvivalPointer.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.TutorialSurvivalPointer.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.TutorialSurvivalPointer.Component.StorageView.prototype = Object.create(null);
entities.game.TutorialSurvivalPointer.Component.StorageView.prototype.constructor = entities.game.TutorialSurvivalPointer.Component.StorageView;
entities.game.TutorialSurvivalPointer.Component._view = entities.game.TutorialSurvivalPointer.Component.StorageView;
entities.game.TutorialSurvivalPointer.Component.StorageView._isSharedComp = entities.game.TutorialSurvivalPointer.Component._isSharedComp = false;
entities.game.TutorialSurvivalPointer.Component.StorageView._fromPtr = entities.game.TutorialSurvivalPointer.Component._fromPtr;
entities.game.TutorialSurvivalPointer.Component.StorageView._toPtr = entities.game.TutorialSurvivalPointer.Component._toPtr;
entities.game.TutorialSurvivalPointer.Component.StorageView._tempHeapPtr = entities.game.TutorialSurvivalPointer.Component._tempHeapPtr;
entities.game.TutorialSurvivalPointer.Component.StorageView._size = entities.game.TutorialSurvivalPointer.Component._size;
entities.game.TutorialSurvivalPointer.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.TutorialSurvivalPointer.Component.StorageView.prototype, {
});
entities.game.TutorialSurvivalPointer.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.TutorialSurvivalPointer.Component is a POD type, so a JavaScript side copy constructor entities.game.TutorialSurvivalPointer.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.TutorialSurvivalPointer.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.TutorialSurvivalPointer.Component', 1, []);
})();
Object.defineProperties(entities.game.TutorialSurvivalPointer.Component, { cid: { configurable: true, get: function() { delete entities.game.TutorialSurvivalPointer.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.TutorialSurvivalPointer.Component.cid = Module._ut_component_register_cid_with_type(entities.game.TutorialSurvivalPointer.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.TutorialSurvivalPointer.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.TutorialSurvivalPointer.Component.cid; } } });
entities.game.CreditsMenu = entities.game.CreditsMenu || {};
entities.game.CreditsMenu.Component = function() {
};
entities.game.CreditsMenu.Component.prototype = Object.create(null);
entities.game.CreditsMenu.Component.prototype.constructor = entities.game.CreditsMenu.Component;
Object.defineProperties(entities.game.CreditsMenu.Component.prototype, {
});
entities.game.CreditsMenu.Component._size = 1;
entities.game.CreditsMenu.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.CreditsMenu.Component.prototype);
  return v;
};
entities.game.CreditsMenu.Component._toPtr = function(ptr, v) {
};
entities.game.CreditsMenu.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.CreditsMenu.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.CreditsMenu.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.CreditsMenu.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.CreditsMenu.Component.StorageView.prototype = Object.create(null);
entities.game.CreditsMenu.Component.StorageView.prototype.constructor = entities.game.CreditsMenu.Component.StorageView;
entities.game.CreditsMenu.Component._view = entities.game.CreditsMenu.Component.StorageView;
entities.game.CreditsMenu.Component.StorageView._isSharedComp = entities.game.CreditsMenu.Component._isSharedComp = false;
entities.game.CreditsMenu.Component.StorageView._fromPtr = entities.game.CreditsMenu.Component._fromPtr;
entities.game.CreditsMenu.Component.StorageView._toPtr = entities.game.CreditsMenu.Component._toPtr;
entities.game.CreditsMenu.Component.StorageView._tempHeapPtr = entities.game.CreditsMenu.Component._tempHeapPtr;
entities.game.CreditsMenu.Component.StorageView._size = entities.game.CreditsMenu.Component._size;
entities.game.CreditsMenu.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.CreditsMenu.Component.StorageView.prototype, {
});
entities.game.CreditsMenu.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.CreditsMenu.Component is a POD type, so a JavaScript side copy constructor entities.game.CreditsMenu.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.CreditsMenu.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.CreditsMenu.Component', 1, []);
})();
Object.defineProperties(entities.game.CreditsMenu.Component, { cid: { configurable: true, get: function() { delete entities.game.CreditsMenu.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.CreditsMenu.Component.cid = Module._ut_component_register_cid_with_type(entities.game.CreditsMenu.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.CreditsMenu.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.CreditsMenu.Component.cid; } } });
entities.game.GameOverMenu = entities.game.GameOverMenu || {};
entities.game.GameOverMenu.Component = function() {
};
entities.game.GameOverMenu.Component.prototype = Object.create(null);
entities.game.GameOverMenu.Component.prototype.constructor = entities.game.GameOverMenu.Component;
Object.defineProperties(entities.game.GameOverMenu.Component.prototype, {
});
entities.game.GameOverMenu.Component._size = 1;
entities.game.GameOverMenu.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GameOverMenu.Component.prototype);
  return v;
};
entities.game.GameOverMenu.Component._toPtr = function(ptr, v) {
};
entities.game.GameOverMenu.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GameOverMenu.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GameOverMenu.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GameOverMenu.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GameOverMenu.Component.StorageView.prototype = Object.create(null);
entities.game.GameOverMenu.Component.StorageView.prototype.constructor = entities.game.GameOverMenu.Component.StorageView;
entities.game.GameOverMenu.Component._view = entities.game.GameOverMenu.Component.StorageView;
entities.game.GameOverMenu.Component.StorageView._isSharedComp = entities.game.GameOverMenu.Component._isSharedComp = false;
entities.game.GameOverMenu.Component.StorageView._fromPtr = entities.game.GameOverMenu.Component._fromPtr;
entities.game.GameOverMenu.Component.StorageView._toPtr = entities.game.GameOverMenu.Component._toPtr;
entities.game.GameOverMenu.Component.StorageView._tempHeapPtr = entities.game.GameOverMenu.Component._tempHeapPtr;
entities.game.GameOverMenu.Component.StorageView._size = entities.game.GameOverMenu.Component._size;
entities.game.GameOverMenu.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GameOverMenu.Component.StorageView.prototype, {
});
entities.game.GameOverMenu.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GameOverMenu.Component is a POD type, so a JavaScript side copy constructor entities.game.GameOverMenu.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.GameOverMenu.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.GameOverMenu.Component', 1, []);
})();
Object.defineProperties(entities.game.GameOverMenu.Component, { cid: { configurable: true, get: function() { delete entities.game.GameOverMenu.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GameOverMenu.Component.cid = Module._ut_component_register_cid_with_type(entities.game.GameOverMenu.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.GameOverMenu.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GameOverMenu.Component.cid; } } });
entities.game.GameUI = entities.game.GameUI || {};
entities.game.GameUI.Component = function() {
};
entities.game.GameUI.Component.prototype = Object.create(null);
entities.game.GameUI.Component.prototype.constructor = entities.game.GameUI.Component;
Object.defineProperties(entities.game.GameUI.Component.prototype, {
});
entities.game.GameUI.Component._size = 1;
entities.game.GameUI.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GameUI.Component.prototype);
  return v;
};
entities.game.GameUI.Component._toPtr = function(ptr, v) {
};
entities.game.GameUI.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GameUI.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GameUI.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GameUI.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GameUI.Component.StorageView.prototype = Object.create(null);
entities.game.GameUI.Component.StorageView.prototype.constructor = entities.game.GameUI.Component.StorageView;
entities.game.GameUI.Component._view = entities.game.GameUI.Component.StorageView;
entities.game.GameUI.Component.StorageView._isSharedComp = entities.game.GameUI.Component._isSharedComp = false;
entities.game.GameUI.Component.StorageView._fromPtr = entities.game.GameUI.Component._fromPtr;
entities.game.GameUI.Component.StorageView._toPtr = entities.game.GameUI.Component._toPtr;
entities.game.GameUI.Component.StorageView._tempHeapPtr = entities.game.GameUI.Component._tempHeapPtr;
entities.game.GameUI.Component.StorageView._size = entities.game.GameUI.Component._size;
entities.game.GameUI.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GameUI.Component.StorageView.prototype, {
});
entities.game.GameUI.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GameUI.Component is a POD type, so a JavaScript side copy constructor entities.game.GameUI.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.GameUI.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.GameUI.Component', 1, []);
})();
Object.defineProperties(entities.game.GameUI.Component, { cid: { configurable: true, get: function() { delete entities.game.GameUI.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GameUI.Component.cid = Module._ut_component_register_cid_with_type(entities.game.GameUI.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.GameUI.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GameUI.Component.cid; } } });
entities.game.LanguagesMenu = entities.game.LanguagesMenu || {};
entities.game.LanguagesMenu.Component = function() {
};
entities.game.LanguagesMenu.Component.prototype = Object.create(null);
entities.game.LanguagesMenu.Component.prototype.constructor = entities.game.LanguagesMenu.Component;
Object.defineProperties(entities.game.LanguagesMenu.Component.prototype, {
});
entities.game.LanguagesMenu.Component._size = 1;
entities.game.LanguagesMenu.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.LanguagesMenu.Component.prototype);
  return v;
};
entities.game.LanguagesMenu.Component._toPtr = function(ptr, v) {
};
entities.game.LanguagesMenu.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.LanguagesMenu.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.LanguagesMenu.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.LanguagesMenu.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.LanguagesMenu.Component.StorageView.prototype = Object.create(null);
entities.game.LanguagesMenu.Component.StorageView.prototype.constructor = entities.game.LanguagesMenu.Component.StorageView;
entities.game.LanguagesMenu.Component._view = entities.game.LanguagesMenu.Component.StorageView;
entities.game.LanguagesMenu.Component.StorageView._isSharedComp = entities.game.LanguagesMenu.Component._isSharedComp = false;
entities.game.LanguagesMenu.Component.StorageView._fromPtr = entities.game.LanguagesMenu.Component._fromPtr;
entities.game.LanguagesMenu.Component.StorageView._toPtr = entities.game.LanguagesMenu.Component._toPtr;
entities.game.LanguagesMenu.Component.StorageView._tempHeapPtr = entities.game.LanguagesMenu.Component._tempHeapPtr;
entities.game.LanguagesMenu.Component.StorageView._size = entities.game.LanguagesMenu.Component._size;
entities.game.LanguagesMenu.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.LanguagesMenu.Component.StorageView.prototype, {
});
entities.game.LanguagesMenu.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.LanguagesMenu.Component is a POD type, so a JavaScript side copy constructor entities.game.LanguagesMenu.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.LanguagesMenu.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.LanguagesMenu.Component', 1, []);
})();
Object.defineProperties(entities.game.LanguagesMenu.Component, { cid: { configurable: true, get: function() { delete entities.game.LanguagesMenu.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.LanguagesMenu.Component.cid = Module._ut_component_register_cid_with_type(entities.game.LanguagesMenu.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.LanguagesMenu.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.LanguagesMenu.Component.cid; } } });
entities.game.Loading = entities.game.Loading || {};
entities.game.Loading.Component = function() {
};
entities.game.Loading.Component.prototype = Object.create(null);
entities.game.Loading.Component.prototype.constructor = entities.game.Loading.Component;
Object.defineProperties(entities.game.Loading.Component.prototype, {
});
entities.game.Loading.Component._size = 1;
entities.game.Loading.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Loading.Component.prototype);
  return v;
};
entities.game.Loading.Component._toPtr = function(ptr, v) {
};
entities.game.Loading.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Loading.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Loading.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Loading.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Loading.Component.StorageView.prototype = Object.create(null);
entities.game.Loading.Component.StorageView.prototype.constructor = entities.game.Loading.Component.StorageView;
entities.game.Loading.Component._view = entities.game.Loading.Component.StorageView;
entities.game.Loading.Component.StorageView._isSharedComp = entities.game.Loading.Component._isSharedComp = false;
entities.game.Loading.Component.StorageView._fromPtr = entities.game.Loading.Component._fromPtr;
entities.game.Loading.Component.StorageView._toPtr = entities.game.Loading.Component._toPtr;
entities.game.Loading.Component.StorageView._tempHeapPtr = entities.game.Loading.Component._tempHeapPtr;
entities.game.Loading.Component.StorageView._size = entities.game.Loading.Component._size;
entities.game.Loading.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Loading.Component.StorageView.prototype, {
});
entities.game.Loading.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Loading.Component is a POD type, so a JavaScript side copy constructor entities.game.Loading.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Loading.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Loading.Component', 1, []);
})();
Object.defineProperties(entities.game.Loading.Component, { cid: { configurable: true, get: function() { delete entities.game.Loading.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Loading.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Loading.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Loading.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Loading.Component.cid; } } });
entities.game.MainMenu = entities.game.MainMenu || {};
entities.game.MainMenu.Component = function() {
};
entities.game.MainMenu.Component.prototype = Object.create(null);
entities.game.MainMenu.Component.prototype.constructor = entities.game.MainMenu.Component;
Object.defineProperties(entities.game.MainMenu.Component.prototype, {
});
entities.game.MainMenu.Component._size = 1;
entities.game.MainMenu.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.MainMenu.Component.prototype);
  return v;
};
entities.game.MainMenu.Component._toPtr = function(ptr, v) {
};
entities.game.MainMenu.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.MainMenu.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.MainMenu.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.MainMenu.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.MainMenu.Component.StorageView.prototype = Object.create(null);
entities.game.MainMenu.Component.StorageView.prototype.constructor = entities.game.MainMenu.Component.StorageView;
entities.game.MainMenu.Component._view = entities.game.MainMenu.Component.StorageView;
entities.game.MainMenu.Component.StorageView._isSharedComp = entities.game.MainMenu.Component._isSharedComp = false;
entities.game.MainMenu.Component.StorageView._fromPtr = entities.game.MainMenu.Component._fromPtr;
entities.game.MainMenu.Component.StorageView._toPtr = entities.game.MainMenu.Component._toPtr;
entities.game.MainMenu.Component.StorageView._tempHeapPtr = entities.game.MainMenu.Component._tempHeapPtr;
entities.game.MainMenu.Component.StorageView._size = entities.game.MainMenu.Component._size;
entities.game.MainMenu.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.MainMenu.Component.StorageView.prototype, {
});
entities.game.MainMenu.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.MainMenu.Component is a POD type, so a JavaScript side copy constructor entities.game.MainMenu.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.MainMenu.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.MainMenu.Component', 1, []);
})();
Object.defineProperties(entities.game.MainMenu.Component, { cid: { configurable: true, get: function() { delete entities.game.MainMenu.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.MainMenu.Component.cid = Module._ut_component_register_cid_with_type(entities.game.MainMenu.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.MainMenu.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.MainMenu.Component.cid; } } });
entities.game.PauseMenu = entities.game.PauseMenu || {};
entities.game.PauseMenu.Component = function() {
};
entities.game.PauseMenu.Component.prototype = Object.create(null);
entities.game.PauseMenu.Component.prototype.constructor = entities.game.PauseMenu.Component;
Object.defineProperties(entities.game.PauseMenu.Component.prototype, {
});
entities.game.PauseMenu.Component._size = 1;
entities.game.PauseMenu.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.PauseMenu.Component.prototype);
  return v;
};
entities.game.PauseMenu.Component._toPtr = function(ptr, v) {
};
entities.game.PauseMenu.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.PauseMenu.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.PauseMenu.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.PauseMenu.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.PauseMenu.Component.StorageView.prototype = Object.create(null);
entities.game.PauseMenu.Component.StorageView.prototype.constructor = entities.game.PauseMenu.Component.StorageView;
entities.game.PauseMenu.Component._view = entities.game.PauseMenu.Component.StorageView;
entities.game.PauseMenu.Component.StorageView._isSharedComp = entities.game.PauseMenu.Component._isSharedComp = false;
entities.game.PauseMenu.Component.StorageView._fromPtr = entities.game.PauseMenu.Component._fromPtr;
entities.game.PauseMenu.Component.StorageView._toPtr = entities.game.PauseMenu.Component._toPtr;
entities.game.PauseMenu.Component.StorageView._tempHeapPtr = entities.game.PauseMenu.Component._tempHeapPtr;
entities.game.PauseMenu.Component.StorageView._size = entities.game.PauseMenu.Component._size;
entities.game.PauseMenu.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.PauseMenu.Component.StorageView.prototype, {
});
entities.game.PauseMenu.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.PauseMenu.Component is a POD type, so a JavaScript side copy constructor entities.game.PauseMenu.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.PauseMenu.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.PauseMenu.Component', 1, []);
})();
Object.defineProperties(entities.game.PauseMenu.Component, { cid: { configurable: true, get: function() { delete entities.game.PauseMenu.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.PauseMenu.Component.cid = Module._ut_component_register_cid_with_type(entities.game.PauseMenu.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.PauseMenu.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.PauseMenu.Component.cid; } } });
entities.game.ScreenTransition = entities.game.ScreenTransition || {};
entities.game.ScreenTransition.Component = function() {
};
entities.game.ScreenTransition.Component.prototype = Object.create(null);
entities.game.ScreenTransition.Component.prototype.constructor = entities.game.ScreenTransition.Component;
Object.defineProperties(entities.game.ScreenTransition.Component.prototype, {
});
entities.game.ScreenTransition.Component._size = 1;
entities.game.ScreenTransition.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.ScreenTransition.Component.prototype);
  return v;
};
entities.game.ScreenTransition.Component._toPtr = function(ptr, v) {
};
entities.game.ScreenTransition.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.ScreenTransition.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.ScreenTransition.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.ScreenTransition.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.ScreenTransition.Component.StorageView.prototype = Object.create(null);
entities.game.ScreenTransition.Component.StorageView.prototype.constructor = entities.game.ScreenTransition.Component.StorageView;
entities.game.ScreenTransition.Component._view = entities.game.ScreenTransition.Component.StorageView;
entities.game.ScreenTransition.Component.StorageView._isSharedComp = entities.game.ScreenTransition.Component._isSharedComp = false;
entities.game.ScreenTransition.Component.StorageView._fromPtr = entities.game.ScreenTransition.Component._fromPtr;
entities.game.ScreenTransition.Component.StorageView._toPtr = entities.game.ScreenTransition.Component._toPtr;
entities.game.ScreenTransition.Component.StorageView._tempHeapPtr = entities.game.ScreenTransition.Component._tempHeapPtr;
entities.game.ScreenTransition.Component.StorageView._size = entities.game.ScreenTransition.Component._size;
entities.game.ScreenTransition.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.ScreenTransition.Component.StorageView.prototype, {
});
entities.game.ScreenTransition.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.ScreenTransition.Component is a POD type, so a JavaScript side copy constructor entities.game.ScreenTransition.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.ScreenTransition.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.ScreenTransition.Component', 1, []);
})();
Object.defineProperties(entities.game.ScreenTransition.Component, { cid: { configurable: true, get: function() { delete entities.game.ScreenTransition.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.ScreenTransition.Component.cid = Module._ut_component_register_cid_with_type(entities.game.ScreenTransition.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.ScreenTransition.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.ScreenTransition.Component.cid; } } });
entities.game.SettingsMenu = entities.game.SettingsMenu || {};
entities.game.SettingsMenu.Component = function() {
};
entities.game.SettingsMenu.Component.prototype = Object.create(null);
entities.game.SettingsMenu.Component.prototype.constructor = entities.game.SettingsMenu.Component;
Object.defineProperties(entities.game.SettingsMenu.Component.prototype, {
});
entities.game.SettingsMenu.Component._size = 1;
entities.game.SettingsMenu.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.SettingsMenu.Component.prototype);
  return v;
};
entities.game.SettingsMenu.Component._toPtr = function(ptr, v) {
};
entities.game.SettingsMenu.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.SettingsMenu.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.SettingsMenu.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.SettingsMenu.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.SettingsMenu.Component.StorageView.prototype = Object.create(null);
entities.game.SettingsMenu.Component.StorageView.prototype.constructor = entities.game.SettingsMenu.Component.StorageView;
entities.game.SettingsMenu.Component._view = entities.game.SettingsMenu.Component.StorageView;
entities.game.SettingsMenu.Component.StorageView._isSharedComp = entities.game.SettingsMenu.Component._isSharedComp = false;
entities.game.SettingsMenu.Component.StorageView._fromPtr = entities.game.SettingsMenu.Component._fromPtr;
entities.game.SettingsMenu.Component.StorageView._toPtr = entities.game.SettingsMenu.Component._toPtr;
entities.game.SettingsMenu.Component.StorageView._tempHeapPtr = entities.game.SettingsMenu.Component._tempHeapPtr;
entities.game.SettingsMenu.Component.StorageView._size = entities.game.SettingsMenu.Component._size;
entities.game.SettingsMenu.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.SettingsMenu.Component.StorageView.prototype, {
});
entities.game.SettingsMenu.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.SettingsMenu.Component is a POD type, so a JavaScript side copy constructor entities.game.SettingsMenu.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.SettingsMenu.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.SettingsMenu.Component', 1, []);
})();
Object.defineProperties(entities.game.SettingsMenu.Component, { cid: { configurable: true, get: function() { delete entities.game.SettingsMenu.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.SettingsMenu.Component.cid = Module._ut_component_register_cid_with_type(entities.game.SettingsMenu.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.SettingsMenu.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.SettingsMenu.Component.cid; } } });
entities.game.SurvivalModeTimeline = entities.game.SurvivalModeTimeline || {};
entities.game.SurvivalModeTimeline.Component = function() {
};
entities.game.SurvivalModeTimeline.Component.prototype = Object.create(null);
entities.game.SurvivalModeTimeline.Component.prototype.constructor = entities.game.SurvivalModeTimeline.Component;
Object.defineProperties(entities.game.SurvivalModeTimeline.Component.prototype, {
});
entities.game.SurvivalModeTimeline.Component._size = 1;
entities.game.SurvivalModeTimeline.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.SurvivalModeTimeline.Component.prototype);
  return v;
};
entities.game.SurvivalModeTimeline.Component._toPtr = function(ptr, v) {
};
entities.game.SurvivalModeTimeline.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.SurvivalModeTimeline.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.SurvivalModeTimeline.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.SurvivalModeTimeline.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.SurvivalModeTimeline.Component.StorageView.prototype = Object.create(null);
entities.game.SurvivalModeTimeline.Component.StorageView.prototype.constructor = entities.game.SurvivalModeTimeline.Component.StorageView;
entities.game.SurvivalModeTimeline.Component._view = entities.game.SurvivalModeTimeline.Component.StorageView;
entities.game.SurvivalModeTimeline.Component.StorageView._isSharedComp = entities.game.SurvivalModeTimeline.Component._isSharedComp = false;
entities.game.SurvivalModeTimeline.Component.StorageView._fromPtr = entities.game.SurvivalModeTimeline.Component._fromPtr;
entities.game.SurvivalModeTimeline.Component.StorageView._toPtr = entities.game.SurvivalModeTimeline.Component._toPtr;
entities.game.SurvivalModeTimeline.Component.StorageView._tempHeapPtr = entities.game.SurvivalModeTimeline.Component._tempHeapPtr;
entities.game.SurvivalModeTimeline.Component.StorageView._size = entities.game.SurvivalModeTimeline.Component._size;
entities.game.SurvivalModeTimeline.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.SurvivalModeTimeline.Component.StorageView.prototype, {
});
entities.game.SurvivalModeTimeline.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.SurvivalModeTimeline.Component is a POD type, so a JavaScript side copy constructor entities.game.SurvivalModeTimeline.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.SurvivalModeTimeline.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.SurvivalModeTimeline.Component', 1, []);
})();
Object.defineProperties(entities.game.SurvivalModeTimeline.Component, { cid: { configurable: true, get: function() { delete entities.game.SurvivalModeTimeline.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.SurvivalModeTimeline.Component.cid = Module._ut_component_register_cid_with_type(entities.game.SurvivalModeTimeline.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.SurvivalModeTimeline.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.SurvivalModeTimeline.Component.cid; } } });
entities.game.WorldMap = entities.game.WorldMap || {};
entities.game.WorldMap.Component = function() {
};
entities.game.WorldMap.Component.prototype = Object.create(null);
entities.game.WorldMap.Component.prototype.constructor = entities.game.WorldMap.Component;
Object.defineProperties(entities.game.WorldMap.Component.prototype, {
});
entities.game.WorldMap.Component._size = 1;
entities.game.WorldMap.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.WorldMap.Component.prototype);
  return v;
};
entities.game.WorldMap.Component._toPtr = function(ptr, v) {
};
entities.game.WorldMap.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.WorldMap.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.WorldMap.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.WorldMap.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.WorldMap.Component.StorageView.prototype = Object.create(null);
entities.game.WorldMap.Component.StorageView.prototype.constructor = entities.game.WorldMap.Component.StorageView;
entities.game.WorldMap.Component._view = entities.game.WorldMap.Component.StorageView;
entities.game.WorldMap.Component.StorageView._isSharedComp = entities.game.WorldMap.Component._isSharedComp = false;
entities.game.WorldMap.Component.StorageView._fromPtr = entities.game.WorldMap.Component._fromPtr;
entities.game.WorldMap.Component.StorageView._toPtr = entities.game.WorldMap.Component._toPtr;
entities.game.WorldMap.Component.StorageView._tempHeapPtr = entities.game.WorldMap.Component._tempHeapPtr;
entities.game.WorldMap.Component.StorageView._size = entities.game.WorldMap.Component._size;
entities.game.WorldMap.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.WorldMap.Component.StorageView.prototype, {
});
entities.game.WorldMap.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.WorldMap.Component is a POD type, so a JavaScript side copy constructor entities.game.WorldMap.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.WorldMap.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.WorldMap.Component', 1, []);
})();
Object.defineProperties(entities.game.WorldMap.Component, { cid: { configurable: true, get: function() { delete entities.game.WorldMap.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.WorldMap.Component.cid = Module._ut_component_register_cid_with_type(entities.game.WorldMap.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.WorldMap.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.WorldMap.Component.cid; } } });
entities.game.WorldMapItem = entities.game.WorldMapItem || {};
entities.game.WorldMapItem.Component = function() {
};
entities.game.WorldMapItem.Component.prototype = Object.create(null);
entities.game.WorldMapItem.Component.prototype.constructor = entities.game.WorldMapItem.Component;
Object.defineProperties(entities.game.WorldMapItem.Component.prototype, {
});
entities.game.WorldMapItem.Component._size = 1;
entities.game.WorldMapItem.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.WorldMapItem.Component.prototype);
  return v;
};
entities.game.WorldMapItem.Component._toPtr = function(ptr, v) {
};
entities.game.WorldMapItem.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.WorldMapItem.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.WorldMapItem.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.WorldMapItem.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.WorldMapItem.Component.StorageView.prototype = Object.create(null);
entities.game.WorldMapItem.Component.StorageView.prototype.constructor = entities.game.WorldMapItem.Component.StorageView;
entities.game.WorldMapItem.Component._view = entities.game.WorldMapItem.Component.StorageView;
entities.game.WorldMapItem.Component.StorageView._isSharedComp = entities.game.WorldMapItem.Component._isSharedComp = false;
entities.game.WorldMapItem.Component.StorageView._fromPtr = entities.game.WorldMapItem.Component._fromPtr;
entities.game.WorldMapItem.Component.StorageView._toPtr = entities.game.WorldMapItem.Component._toPtr;
entities.game.WorldMapItem.Component.StorageView._tempHeapPtr = entities.game.WorldMapItem.Component._tempHeapPtr;
entities.game.WorldMapItem.Component.StorageView._size = entities.game.WorldMapItem.Component._size;
entities.game.WorldMapItem.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.WorldMapItem.Component.StorageView.prototype, {
});
entities.game.WorldMapItem.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.WorldMapItem.Component is a POD type, so a JavaScript side copy constructor entities.game.WorldMapItem.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.WorldMapItem.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.WorldMapItem.Component', 1, []);
})();
Object.defineProperties(entities.game.WorldMapItem.Component, { cid: { configurable: true, get: function() { delete entities.game.WorldMapItem.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.WorldMapItem.Component.cid = Module._ut_component_register_cid_with_type(entities.game.WorldMapItem.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.WorldMapItem.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.WorldMapItem.Component.cid; } } });
entities.game.BackgroundNearDeathWarning = entities.game.BackgroundNearDeathWarning || {};
entities.game.BackgroundNearDeathWarning.Component = function() {
};
entities.game.BackgroundNearDeathWarning.Component.prototype = Object.create(null);
entities.game.BackgroundNearDeathWarning.Component.prototype.constructor = entities.game.BackgroundNearDeathWarning.Component;
Object.defineProperties(entities.game.BackgroundNearDeathWarning.Component.prototype, {
});
entities.game.BackgroundNearDeathWarning.Component._size = 1;
entities.game.BackgroundNearDeathWarning.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.BackgroundNearDeathWarning.Component.prototype);
  return v;
};
entities.game.BackgroundNearDeathWarning.Component._toPtr = function(ptr, v) {
};
entities.game.BackgroundNearDeathWarning.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.BackgroundNearDeathWarning.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.BackgroundNearDeathWarning.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.BackgroundNearDeathWarning.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.BackgroundNearDeathWarning.Component.StorageView.prototype = Object.create(null);
entities.game.BackgroundNearDeathWarning.Component.StorageView.prototype.constructor = entities.game.BackgroundNearDeathWarning.Component.StorageView;
entities.game.BackgroundNearDeathWarning.Component._view = entities.game.BackgroundNearDeathWarning.Component.StorageView;
entities.game.BackgroundNearDeathWarning.Component.StorageView._isSharedComp = entities.game.BackgroundNearDeathWarning.Component._isSharedComp = false;
entities.game.BackgroundNearDeathWarning.Component.StorageView._fromPtr = entities.game.BackgroundNearDeathWarning.Component._fromPtr;
entities.game.BackgroundNearDeathWarning.Component.StorageView._toPtr = entities.game.BackgroundNearDeathWarning.Component._toPtr;
entities.game.BackgroundNearDeathWarning.Component.StorageView._tempHeapPtr = entities.game.BackgroundNearDeathWarning.Component._tempHeapPtr;
entities.game.BackgroundNearDeathWarning.Component.StorageView._size = entities.game.BackgroundNearDeathWarning.Component._size;
entities.game.BackgroundNearDeathWarning.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.BackgroundNearDeathWarning.Component.StorageView.prototype, {
});
entities.game.BackgroundNearDeathWarning.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.BackgroundNearDeathWarning.Component is a POD type, so a JavaScript side copy constructor entities.game.BackgroundNearDeathWarning.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.BackgroundNearDeathWarning.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.BackgroundNearDeathWarning.Component', 1, []);
})();
Object.defineProperties(entities.game.BackgroundNearDeathWarning.Component, { cid: { configurable: true, get: function() { delete entities.game.BackgroundNearDeathWarning.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.BackgroundNearDeathWarning.Component.cid = Module._ut_component_register_cid_with_type(entities.game.BackgroundNearDeathWarning.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.BackgroundNearDeathWarning.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.BackgroundNearDeathWarning.Component.cid; } } });
entities.game.CustomLabelCharacter = entities.game.CustomLabelCharacter || {};
entities.game.CustomLabelCharacter.Component = function() {
};
entities.game.CustomLabelCharacter.Component.prototype = Object.create(null);
entities.game.CustomLabelCharacter.Component.prototype.constructor = entities.game.CustomLabelCharacter.Component;
Object.defineProperties(entities.game.CustomLabelCharacter.Component.prototype, {
});
entities.game.CustomLabelCharacter.Component._size = 1;
entities.game.CustomLabelCharacter.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.CustomLabelCharacter.Component.prototype);
  return v;
};
entities.game.CustomLabelCharacter.Component._toPtr = function(ptr, v) {
};
entities.game.CustomLabelCharacter.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.CustomLabelCharacter.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.CustomLabelCharacter.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.CustomLabelCharacter.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.CustomLabelCharacter.Component.StorageView.prototype = Object.create(null);
entities.game.CustomLabelCharacter.Component.StorageView.prototype.constructor = entities.game.CustomLabelCharacter.Component.StorageView;
entities.game.CustomLabelCharacter.Component._view = entities.game.CustomLabelCharacter.Component.StorageView;
entities.game.CustomLabelCharacter.Component.StorageView._isSharedComp = entities.game.CustomLabelCharacter.Component._isSharedComp = false;
entities.game.CustomLabelCharacter.Component.StorageView._fromPtr = entities.game.CustomLabelCharacter.Component._fromPtr;
entities.game.CustomLabelCharacter.Component.StorageView._toPtr = entities.game.CustomLabelCharacter.Component._toPtr;
entities.game.CustomLabelCharacter.Component.StorageView._tempHeapPtr = entities.game.CustomLabelCharacter.Component._tempHeapPtr;
entities.game.CustomLabelCharacter.Component.StorageView._size = entities.game.CustomLabelCharacter.Component._size;
entities.game.CustomLabelCharacter.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.CustomLabelCharacter.Component.StorageView.prototype, {
});
entities.game.CustomLabelCharacter.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.CustomLabelCharacter.Component is a POD type, so a JavaScript side copy constructor entities.game.CustomLabelCharacter.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.CustomLabelCharacter.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.CustomLabelCharacter.Component', 1, []);
})();
Object.defineProperties(entities.game.CustomLabelCharacter.Component, { cid: { configurable: true, get: function() { delete entities.game.CustomLabelCharacter.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.CustomLabelCharacter.Component.cid = Module._ut_component_register_cid_with_type(entities.game.CustomLabelCharacter.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.CustomLabelCharacter.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.CustomLabelCharacter.Component.cid; } } });
game.GameState = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  this._GameStateType = (arg0|0);
  this._CurrentLevelID = (arg1|0);
  this._CurrentScore = (arg2|0);
  this._CurrentMoveCount = (arg3|0);
  this._Time = (+(arg4===undefined ? 0 : arg4));
  this._SurvivalTimer = (+(arg5===undefined ? 0 : arg5));
  this._LevelCount = (arg6|0);
  this._ShowHintDelay = (+(arg7===undefined ? 0 : arg7));
  this._EnvironmentSceneWidth = (+(arg8===undefined ? 0 : arg8));
};
game.GameState.prototype = Object.create(null);
game.GameState.prototype.constructor = game.GameState;
Object.defineProperties(game.GameState.prototype, {
  GameStateType: {
    get: function() { return this._GameStateType; },
    set: function(v) { this._GameStateType = (v|0); },
  },
  CurrentLevelID: {
    get: function() { return this._CurrentLevelID; },
    set: function(v) { this._CurrentLevelID = (v|0); },
  },
  CurrentScore: {
    get: function() { return this._CurrentScore; },
    set: function(v) { this._CurrentScore = (v|0); },
  },
  CurrentMoveCount: {
    get: function() { return this._CurrentMoveCount; },
    set: function(v) { this._CurrentMoveCount = (v|0); },
  },
  Time: {
    get: function() { return this._Time; },
    set: function(v) { this._Time = (+(v===undefined ? 0 : v)); },
  },
  SurvivalTimer: {
    get: function() { return this._SurvivalTimer; },
    set: function(v) { this._SurvivalTimer = (+(v===undefined ? 0 : v)); },
  },
  LevelCount: {
    get: function() { return this._LevelCount; },
    set: function(v) { this._LevelCount = (v|0); },
  },
  ShowHintDelay: {
    get: function() { return this._ShowHintDelay; },
    set: function(v) { this._ShowHintDelay = (+(v===undefined ? 0 : v)); },
  },
  EnvironmentSceneWidth: {
    get: function() { return this._EnvironmentSceneWidth; },
    set: function(v) { this._EnvironmentSceneWidth = (+(v===undefined ? 0 : v)); },
  },
});
game.GameState._size = 36;
game.GameState._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GameState.prototype);
  v._GameStateType = HEAP32[(ptr+0)>>2];
  v._CurrentLevelID = HEAP8[ptr+4];
  v._CurrentScore = HEAP32[(ptr+8)>>2];
  v._CurrentMoveCount = HEAP32[(ptr+12)>>2];
  v._Time = HEAPF32[(ptr+16)>>2];
  v._SurvivalTimer = HEAPF32[(ptr+20)>>2];
  v._LevelCount = HEAP32[(ptr+24)>>2];
  v._ShowHintDelay = HEAPF32[(ptr+28)>>2];
  v._EnvironmentSceneWidth = HEAPF32[(ptr+32)>>2];
  return v;
};
game.GameState._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.GameStateType;
  HEAP8[ptr+4] = v.CurrentLevelID;
  HEAP32[(ptr+8)>>2] = v.CurrentScore;
  HEAP32[(ptr+12)>>2] = v.CurrentMoveCount;
  HEAPF32[(ptr+16)>>2] = v.Time;
  HEAPF32[(ptr+20)>>2] = v.SurvivalTimer;
  HEAP32[(ptr+24)>>2] = v.LevelCount;
  HEAPF32[(ptr+28)>>2] = v.ShowHintDelay;
  HEAPF32[(ptr+32)>>2] = v.EnvironmentSceneWidth;
};
game.GameState._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.GameStateType;
  HEAP8[ptr+4] = v.CurrentLevelID;
  HEAP32[(ptr+8)>>2] = v.CurrentScore;
  HEAP32[(ptr+12)>>2] = v.CurrentMoveCount;
  HEAPF32[(ptr+16)>>2] = v.Time;
  HEAPF32[(ptr+20)>>2] = v.SurvivalTimer;
  HEAP32[(ptr+24)>>2] = v.LevelCount;
  HEAPF32[(ptr+28)>>2] = v.ShowHintDelay;
  HEAPF32[(ptr+32)>>2] = v.EnvironmentSceneWidth;
};
game.GameState._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(36);
  if (v) game.GameState._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GameState.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GameState.StorageView.prototype = Object.create(null);
game.GameState.StorageView.prototype.constructor = game.GameState.StorageView;
game.GameState._view = game.GameState.StorageView;
game.GameState.StorageView._isSharedComp = game.GameState._isSharedComp = false;
game.GameState.StorageView._fromPtr = game.GameState._fromPtr;
game.GameState.StorageView._toPtr = game.GameState._toPtr;
game.GameState.StorageView._tempHeapPtr = game.GameState._tempHeapPtr;
game.GameState.StorageView._size = game.GameState._size;
game.GameState.StorageView.prototype.$advance = function() {
  this._ptr += 36;
};
Object.defineProperties(game.GameState.StorageView.prototype, {
  GameStateType: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  CurrentLevelID: {
    get: function() { return HEAP8[this._ptr+4]; },
    set: function(v) { HEAP8[this._ptr+4] = v; },
  },
  CurrentScore: {
    get: function() { return HEAP32[(this._ptr+8)>>2]; },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = v; },
  },
  CurrentMoveCount: {
    get: function() { return HEAP32[(this._ptr+12)>>2]; },
    set: function(v) { HEAP32[(this._ptr+12)>>2] = v; },
  },
  Time: {
    get: function() { return HEAPF32[(this._ptr+16)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+16)>>2] = v; },
  },
  SurvivalTimer: {
    get: function() { return HEAPF32[(this._ptr+20)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+20)>>2] = v; },
  },
  LevelCount: {
    get: function() { return HEAP32[(this._ptr+24)>>2]; },
    set: function(v) { HEAP32[(this._ptr+24)>>2] = v; },
  },
  ShowHintDelay: {
    get: function() { return HEAPF32[(this._ptr+28)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+28)>>2] = v; },
  },
  EnvironmentSceneWidth: {
    get: function() { return HEAPF32[(this._ptr+32)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+32)>>2] = v; },
  },
});
game.GameState._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.GameState is a POD type, so a JavaScript side copy constructor game.GameState._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.GameState._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.GameState', 36, [
    {name: 'GameStateType', offset: 0, type: ut.meta.getType('game.GameStateTypes')},
    {name: 'CurrentLevelID', offset: 4, type: ut.meta.getType('int8')},
    {name: 'CurrentScore', offset: 8, type: ut.meta.getType('int32')},
    {name: 'CurrentMoveCount', offset: 12, type: ut.meta.getType('int32')},
    {name: 'Time', offset: 16, type: ut.meta.getType('float')},
    {name: 'SurvivalTimer', offset: 20, type: ut.meta.getType('float')},
    {name: 'LevelCount', offset: 24, type: ut.meta.getType('int32')},
    {name: 'ShowHintDelay', offset: 28, type: ut.meta.getType('float')},
    {name: 'EnvironmentSceneWidth', offset: 32, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.GameState, { cid: { configurable: true, get: function() { delete game.GameState.cid; var offsetsPtr = 0, offsetsCount = 0; return game.GameState.cid = Module._ut_component_register_cid_with_type(game.GameState._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.GameState.StorageView, { cid: { configurable: true, get: function() { return game.GameState.cid; } } });
game.GameState.GameStateType = { $ofs:0, $t:"game.GameStateTypes", $c:game.GameState };
game.GameState.CurrentLevelID = { $ofs:4, $t:"int8_t", $c:game.GameState };
game.GameState.CurrentScore = { $ofs:8, $t:"int32_t", $c:game.GameState };
game.GameState.CurrentMoveCount = { $ofs:12, $t:"int32_t", $c:game.GameState };
game.GameState.Time = { $ofs:16, $t:"float", $c:game.GameState };
game.GameState.SurvivalTimer = { $ofs:20, $t:"float", $c:game.GameState };
game.GameState.LevelCount = { $ofs:24, $t:"int32_t", $c:game.GameState };
game.GameState.ShowHintDelay = { $ofs:28, $t:"float", $c:game.GameState };
game.GameState.EnvironmentSceneWidth = { $ofs:32, $t:"float", $c:game.GameState };
game.CutsceneDirector = function(arg0, arg1, arg2) {
  this._CurrentElementIndex = (arg0|0);
  this._Speed = (+(arg1===undefined ? 0 : arg1));
  this._PauseDelayTimer = (+(arg2===undefined ? 0 : arg2));
};
game.CutsceneDirector.prototype = Object.create(null);
game.CutsceneDirector.prototype.constructor = game.CutsceneDirector;
Object.defineProperties(game.CutsceneDirector.prototype, {
  CurrentElementIndex: {
    get: function() { return this._CurrentElementIndex; },
    set: function(v) { this._CurrentElementIndex = (v|0); },
  },
  Speed: {
    get: function() { return this._Speed; },
    set: function(v) { this._Speed = (+(v===undefined ? 0 : v)); },
  },
  PauseDelayTimer: {
    get: function() { return this._PauseDelayTimer; },
    set: function(v) { this._PauseDelayTimer = (+(v===undefined ? 0 : v)); },
  },
});
game.CutsceneDirector._size = 12;
game.CutsceneDirector._fromPtr = function(ptr, v) {
  v = v || Object.create(game.CutsceneDirector.prototype);
  v._CurrentElementIndex = HEAP32[(ptr+0)>>2];
  v._Speed = HEAPF32[(ptr+4)>>2];
  v._PauseDelayTimer = HEAPF32[(ptr+8)>>2];
  return v;
};
game.CutsceneDirector._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.CurrentElementIndex;
  HEAPF32[(ptr+4)>>2] = v.Speed;
  HEAPF32[(ptr+8)>>2] = v.PauseDelayTimer;
};
game.CutsceneDirector._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.CurrentElementIndex;
  HEAPF32[(ptr+4)>>2] = v.Speed;
  HEAPF32[(ptr+8)>>2] = v.PauseDelayTimer;
};
game.CutsceneDirector._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(12);
  if (v) game.CutsceneDirector._toTempHeapPtr(ptr, v);
  return ptr;
};
game.CutsceneDirector.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.CutsceneDirector.StorageView.prototype = Object.create(null);
game.CutsceneDirector.StorageView.prototype.constructor = game.CutsceneDirector.StorageView;
game.CutsceneDirector._view = game.CutsceneDirector.StorageView;
game.CutsceneDirector.StorageView._isSharedComp = game.CutsceneDirector._isSharedComp = false;
game.CutsceneDirector.StorageView._fromPtr = game.CutsceneDirector._fromPtr;
game.CutsceneDirector.StorageView._toPtr = game.CutsceneDirector._toPtr;
game.CutsceneDirector.StorageView._tempHeapPtr = game.CutsceneDirector._tempHeapPtr;
game.CutsceneDirector.StorageView._size = game.CutsceneDirector._size;
game.CutsceneDirector.StorageView.prototype.$advance = function() {
  this._ptr += 12;
};
Object.defineProperties(game.CutsceneDirector.StorageView.prototype, {
  CurrentElementIndex: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  Speed: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  PauseDelayTimer: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
});
game.CutsceneDirector._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.CutsceneDirector is a POD type, so a JavaScript side copy constructor game.CutsceneDirector._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.CutsceneDirector._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.CutsceneDirector', 12, [
    {name: 'CurrentElementIndex', offset: 0, type: ut.meta.getType('int32')},
    {name: 'Speed', offset: 4, type: ut.meta.getType('float')},
    {name: 'PauseDelayTimer', offset: 8, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.CutsceneDirector, { cid: { configurable: true, get: function() { delete game.CutsceneDirector.cid; var offsetsPtr = 0, offsetsCount = 0; return game.CutsceneDirector.cid = Module._ut_component_register_cid_with_type(game.CutsceneDirector._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.CutsceneDirector.StorageView, { cid: { configurable: true, get: function() { return game.CutsceneDirector.cid; } } });
game.CutsceneDirector.CurrentElementIndex = { $ofs:0, $t:"int32_t", $c:game.CutsceneDirector };
game.CutsceneDirector.Speed = { $ofs:4, $t:"float", $c:game.CutsceneDirector };
game.CutsceneDirector.PauseDelayTimer = { $ofs:8, $t:"float", $c:game.CutsceneDirector };
game.CutsceneElement = function(arg0, arg1, arg2, arg3) {
  this._Index = (arg0|0);
  this._Duration = (+(arg1===undefined ? 0 : arg1));
  this._ClearPreviousElements = (arg2 ? true : false);
  this._Timer = (+(arg3===undefined ? 0 : arg3));
};
game.CutsceneElement.prototype = Object.create(null);
game.CutsceneElement.prototype.constructor = game.CutsceneElement;
Object.defineProperties(game.CutsceneElement.prototype, {
  Index: {
    get: function() { return this._Index; },
    set: function(v) { this._Index = (v|0); },
  },
  Duration: {
    get: function() { return this._Duration; },
    set: function(v) { this._Duration = (+(v===undefined ? 0 : v)); },
  },
  ClearPreviousElements: {
    get: function() { return this._ClearPreviousElements; },
    set: function(v) { this._ClearPreviousElements = (v ? true : false); },
  },
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
});
game.CutsceneElement._size = 16;
game.CutsceneElement._fromPtr = function(ptr, v) {
  v = v || Object.create(game.CutsceneElement.prototype);
  v._Index = HEAPU32[(ptr+0)>>2];
  v._Duration = HEAPF32[(ptr+4)>>2];
  v._ClearPreviousElements = (HEAP8[ptr+8]?true:false);
  v._Timer = HEAPF32[(ptr+12)>>2];
  return v;
};
game.CutsceneElement._toPtr = function(ptr, v) {
  HEAPU32[(ptr+0)>>2] = v.Index;
  HEAPF32[(ptr+4)>>2] = v.Duration;
  HEAP8[ptr+8] = (v.ClearPreviousElements)?1:0;
  HEAPF32[(ptr+12)>>2] = v.Timer;
};
game.CutsceneElement._toTempHeapPtr = function(ptr, v) {
  HEAPU32[(ptr+0)>>2] = v.Index;
  HEAPF32[(ptr+4)>>2] = v.Duration;
  HEAP8[ptr+8] = (v.ClearPreviousElements)?1:0;
  HEAPF32[(ptr+12)>>2] = v.Timer;
};
game.CutsceneElement._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.CutsceneElement._toTempHeapPtr(ptr, v);
  return ptr;
};
game.CutsceneElement.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.CutsceneElement.StorageView.prototype = Object.create(null);
game.CutsceneElement.StorageView.prototype.constructor = game.CutsceneElement.StorageView;
game.CutsceneElement._view = game.CutsceneElement.StorageView;
game.CutsceneElement.StorageView._isSharedComp = game.CutsceneElement._isSharedComp = false;
game.CutsceneElement.StorageView._fromPtr = game.CutsceneElement._fromPtr;
game.CutsceneElement.StorageView._toPtr = game.CutsceneElement._toPtr;
game.CutsceneElement.StorageView._tempHeapPtr = game.CutsceneElement._tempHeapPtr;
game.CutsceneElement.StorageView._size = game.CutsceneElement._size;
game.CutsceneElement.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.CutsceneElement.StorageView.prototype, {
  Index: {
    get: function() { return HEAPU32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPU32[(this._ptr+0)>>2] = v; },
  },
  Duration: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  ClearPreviousElements: {
    get: function() { return (HEAP8[this._ptr+8]?true:false); },
    set: function(v) { HEAP8[this._ptr+8] = (v)?1:0; },
  },
  Timer: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
});
game.CutsceneElement._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.CutsceneElement is a POD type, so a JavaScript side copy constructor game.CutsceneElement._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.CutsceneElement._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.CutsceneElement', 16, [
    {name: 'Index', offset: 0, type: ut.meta.getType('uint32')},
    {name: 'Duration', offset: 4, type: ut.meta.getType('float')},
    {name: 'ClearPreviousElements', offset: 8, type: ut.meta.getType('bool')},
    {name: 'Timer', offset: 12, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.CutsceneElement, { cid: { configurable: true, get: function() { delete game.CutsceneElement.cid; var offsetsPtr = 0, offsetsCount = 0; return game.CutsceneElement.cid = Module._ut_component_register_cid_with_type(game.CutsceneElement._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.CutsceneElement.StorageView, { cid: { configurable: true, get: function() { return game.CutsceneElement.cid; } } });
game.CutsceneElement.Index = { $ofs:0, $t:"uint32_t", $c:game.CutsceneElement };
game.CutsceneElement.Duration = { $ofs:4, $t:"float", $c:game.CutsceneElement };
game.CutsceneElement.ClearPreviousElements = { $ofs:8, $t:"bool", $c:game.CutsceneElement };
game.CutsceneElement.Timer = { $ofs:12, $t:"float", $c:game.CutsceneElement };
game.CutsceneFade = function(arg0) {
  this._Duration = (+(arg0===undefined ? 0 : arg0));
};
game.CutsceneFade.prototype = Object.create(null);
game.CutsceneFade.prototype.constructor = game.CutsceneFade;
Object.defineProperties(game.CutsceneFade.prototype, {
  Duration: {
    get: function() { return this._Duration; },
    set: function(v) { this._Duration = (+(v===undefined ? 0 : v)); },
  },
});
game.CutsceneFade._size = 4;
game.CutsceneFade._fromPtr = function(ptr, v) {
  v = v || Object.create(game.CutsceneFade.prototype);
  v._Duration = HEAPF32[(ptr+0)>>2];
  return v;
};
game.CutsceneFade._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Duration;
};
game.CutsceneFade._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Duration;
};
game.CutsceneFade._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.CutsceneFade._toTempHeapPtr(ptr, v);
  return ptr;
};
game.CutsceneFade.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.CutsceneFade.StorageView.prototype = Object.create(null);
game.CutsceneFade.StorageView.prototype.constructor = game.CutsceneFade.StorageView;
game.CutsceneFade._view = game.CutsceneFade.StorageView;
game.CutsceneFade.StorageView._isSharedComp = game.CutsceneFade._isSharedComp = false;
game.CutsceneFade.StorageView._fromPtr = game.CutsceneFade._fromPtr;
game.CutsceneFade.StorageView._toPtr = game.CutsceneFade._toPtr;
game.CutsceneFade.StorageView._tempHeapPtr = game.CutsceneFade._tempHeapPtr;
game.CutsceneFade.StorageView._size = game.CutsceneFade._size;
game.CutsceneFade.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.CutsceneFade.StorageView.prototype, {
  Duration: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
});
game.CutsceneFade._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.CutsceneFade is a POD type, so a JavaScript side copy constructor game.CutsceneFade._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.CutsceneFade._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.CutsceneFade', 4, [
    {name: 'Duration', offset: 0, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.CutsceneFade, { cid: { configurable: true, get: function() { delete game.CutsceneFade.cid; var offsetsPtr = 0, offsetsCount = 0; return game.CutsceneFade.cid = Module._ut_component_register_cid_with_type(game.CutsceneFade._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.CutsceneFade.StorageView, { cid: { configurable: true, get: function() { return game.CutsceneFade.cid; } } });
game.CutsceneFade.Duration = { $ofs:0, $t:"float", $c:game.CutsceneFade };
game.CutsceneMove = function(arg0, arg1, arg2) {
  this._Duration = (+(arg0===undefined ? 0 : arg0));
  this._StartOffset = new ut.Math.Vector2(); if ((arg1) !== undefined) { this._StartOffset.copy(arg1); };
  this._Easing = (arg2|0);
};
game.CutsceneMove.prototype = Object.create(null);
game.CutsceneMove.prototype.constructor = game.CutsceneMove;
Object.defineProperties(game.CutsceneMove.prototype, {
  Duration: {
    get: function() { return this._Duration; },
    set: function(v) { this._Duration = (+(v===undefined ? 0 : v)); },
  },
  StartOffset: {
    get: function() { return this._StartOffset; },
    set: function(v) { this._StartOffset.copy(v); },
  },
  Easing: {
    get: function() { return this._Easing; },
    set: function(v) { this._Easing = (v|0); },
  },
});
game.CutsceneMove._size = 16;
game.CutsceneMove._fromPtr = function(ptr, v) {
  v = v || Object.create(game.CutsceneMove.prototype);
  v._Duration = HEAPF32[(ptr+0)>>2];
  v._StartOffset = ut._utils.vec2FromHeap(null, ptr+4);
  v._Easing = HEAP32[(ptr+12)>>2];
  return v;
};
game.CutsceneMove._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Duration;
  ut._utils.vec2ToHeap(v.StartOffset, ptr+4);
  HEAP32[(ptr+12)>>2] = v.Easing;
};
game.CutsceneMove._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Duration;
  ut._utils.vec2ToHeap(v.StartOffset, ptr+4);
  HEAP32[(ptr+12)>>2] = v.Easing;
};
game.CutsceneMove._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.CutsceneMove._toTempHeapPtr(ptr, v);
  return ptr;
};
game.CutsceneMove.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.CutsceneMove.StorageView.prototype = Object.create(null);
game.CutsceneMove.StorageView.prototype.constructor = game.CutsceneMove.StorageView;
game.CutsceneMove._view = game.CutsceneMove.StorageView;
game.CutsceneMove.StorageView._isSharedComp = game.CutsceneMove._isSharedComp = false;
game.CutsceneMove.StorageView._fromPtr = game.CutsceneMove._fromPtr;
game.CutsceneMove.StorageView._toPtr = game.CutsceneMove._toPtr;
game.CutsceneMove.StorageView._tempHeapPtr = game.CutsceneMove._tempHeapPtr;
game.CutsceneMove.StorageView._size = game.CutsceneMove._size;
game.CutsceneMove.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.CutsceneMove.StorageView.prototype, {
  Duration: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  StartOffset: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+4); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+4); },
  },
  Easing: {
    get: function() { return HEAP32[(this._ptr+12)>>2]; },
    set: function(v) { HEAP32[(this._ptr+12)>>2] = v; },
  },
});
game.CutsceneMove._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.CutsceneMove is a POD type, so a JavaScript side copy constructor game.CutsceneMove._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.CutsceneMove._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.CutsceneMove', 16, [
    {name: 'Duration', offset: 0, type: ut.meta.getType('float')},
    {name: 'StartOffset', offset: 4, type: ut.meta.getType('ut.Math.Vector2')},
    {name: 'Easing', offset: 12, type: ut.meta.getType('ut.Tweens.TweenFunc')}
  ]);
})();
Object.defineProperties(game.CutsceneMove, { cid: { configurable: true, get: function() { delete game.CutsceneMove.cid; var offsetsPtr = 0, offsetsCount = 0; return game.CutsceneMove.cid = Module._ut_component_register_cid_with_type(game.CutsceneMove._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.CutsceneMove.StorageView, { cid: { configurable: true, get: function() { return game.CutsceneMove.cid; } } });
game.CutsceneMove.Duration = { $ofs:0, $t:"float", $c:game.CutsceneMove };
game.CutsceneMove.StartOffset = { $ofs:4, $t:"ut.Math.Vector2", $c:game.CutsceneMove };
game.CutsceneMove.StartOffset.y = { $ofs:8, $t:"float", $c:game.CutsceneMove };
game.CutsceneMove.StartOffset.x = { $ofs:4, $t:"float", $c:game.CutsceneMove };
game.CutsceneMove.Easing = { $ofs:12, $t:"ut.Tweens.TweenFunc", $c:game.CutsceneMove };
game.CutsceneScale = function(arg0, arg1, arg2) {
  this._Duration = (+(arg0===undefined ? 0 : arg0));
  this._Easing = (arg1|0);
  this._StartScale = new ut.Math.Vector3(); if ((arg2) !== undefined) { this._StartScale.copy(arg2); };
};
game.CutsceneScale.prototype = Object.create(null);
game.CutsceneScale.prototype.constructor = game.CutsceneScale;
Object.defineProperties(game.CutsceneScale.prototype, {
  Duration: {
    get: function() { return this._Duration; },
    set: function(v) { this._Duration = (+(v===undefined ? 0 : v)); },
  },
  Easing: {
    get: function() { return this._Easing; },
    set: function(v) { this._Easing = (v|0); },
  },
  StartScale: {
    get: function() { return this._StartScale; },
    set: function(v) { this._StartScale.copy(v); },
  },
});
game.CutsceneScale._size = 20;
game.CutsceneScale._fromPtr = function(ptr, v) {
  v = v || Object.create(game.CutsceneScale.prototype);
  v._Duration = HEAPF32[(ptr+0)>>2];
  v._Easing = HEAP32[(ptr+4)>>2];
  v._StartScale = ut._utils.vec3FromHeap(null, ptr+8);
  return v;
};
game.CutsceneScale._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Duration;
  HEAP32[(ptr+4)>>2] = v.Easing;
  ut._utils.vec3ToHeap(v.StartScale, ptr+8);
};
game.CutsceneScale._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Duration;
  HEAP32[(ptr+4)>>2] = v.Easing;
  ut._utils.vec3ToHeap(v.StartScale, ptr+8);
};
game.CutsceneScale._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.CutsceneScale._toTempHeapPtr(ptr, v);
  return ptr;
};
game.CutsceneScale.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.CutsceneScale.StorageView.prototype = Object.create(null);
game.CutsceneScale.StorageView.prototype.constructor = game.CutsceneScale.StorageView;
game.CutsceneScale._view = game.CutsceneScale.StorageView;
game.CutsceneScale.StorageView._isSharedComp = game.CutsceneScale._isSharedComp = false;
game.CutsceneScale.StorageView._fromPtr = game.CutsceneScale._fromPtr;
game.CutsceneScale.StorageView._toPtr = game.CutsceneScale._toPtr;
game.CutsceneScale.StorageView._tempHeapPtr = game.CutsceneScale._tempHeapPtr;
game.CutsceneScale.StorageView._size = game.CutsceneScale._size;
game.CutsceneScale.StorageView.prototype.$advance = function() {
  this._ptr += 20;
};
Object.defineProperties(game.CutsceneScale.StorageView.prototype, {
  Duration: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  Easing: {
    get: function() { return HEAP32[(this._ptr+4)>>2]; },
    set: function(v) { HEAP32[(this._ptr+4)>>2] = v; },
  },
  StartScale: {
    get: function() { return ut._utils.vec3FromHeap(null, this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec3ToHeap(v, this._ptr+8); },
  },
});
game.CutsceneScale._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.CutsceneScale is a POD type, so a JavaScript side copy constructor game.CutsceneScale._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.CutsceneScale._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.CutsceneScale', 20, [
    {name: 'Duration', offset: 0, type: ut.meta.getType('float')},
    {name: 'Easing', offset: 4, type: ut.meta.getType('ut.Tweens.TweenFunc')},
    {name: 'StartScale', offset: 8, type: ut.meta.getType('ut.Math.Vector3')}
  ]);
})();
Object.defineProperties(game.CutsceneScale, { cid: { configurable: true, get: function() { delete game.CutsceneScale.cid; var offsetsPtr = 0, offsetsCount = 0; return game.CutsceneScale.cid = Module._ut_component_register_cid_with_type(game.CutsceneScale._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.CutsceneScale.StorageView, { cid: { configurable: true, get: function() { return game.CutsceneScale.cid; } } });
game.CutsceneScale.Duration = { $ofs:0, $t:"float", $c:game.CutsceneScale };
game.CutsceneScale.Easing = { $ofs:4, $t:"ut.Tweens.TweenFunc", $c:game.CutsceneScale };
game.CutsceneScale.StartScale = { $ofs:8, $t:"ut.Math.Vector3", $c:game.CutsceneScale };
game.CutsceneScale.StartScale.z = { $ofs:16, $t:"float", $c:game.CutsceneScale };
game.CutsceneScale.StartScale.y = { $ofs:12, $t:"float", $c:game.CutsceneScale };
game.CutsceneScale.StartScale.x = { $ofs:8, $t:"float", $c:game.CutsceneScale };
game.Dinosaur = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16) {
  this._MoveSpeed = (+(arg0===undefined ? 0 : arg0));
  this._WalkTimer = (+(arg1===undefined ? 0 : arg1));
  this._WalkAnimation = (arg2 === undefined ? new ut.Entity : arg2);
  this._TailWhipAnimation = (arg3 === undefined ? new ut.Entity : arg3);
  this._StompAnimation = (arg4 === undefined ? new ut.Entity : arg4);
  this._BiteAnimation = (arg5 === undefined ? new ut.Entity : arg5);
  this._CrushAnimation = (arg6 === undefined ? new ut.Entity : arg6);
  this._LaunchAnimation = (arg7 === undefined ? new ut.Entity : arg7);
  this._JumpAnimation = (arg8 === undefined ? new ut.Entity : arg8);
  this._JumpAnimationHeightCurve = (arg9 === undefined ? new ut.Entity : arg9);
  this._DefaultPositionY = (+(arg10===undefined ? 0 : arg10));
  this._JumpHeight = (+(arg11===undefined ? 0 : arg11));
  this._Shadow = (arg12 === undefined ? new ut.Entity : arg12);
  this._LaserAnimation = (arg13 === undefined ? new ut.Entity : arg13);
  this._DeathAnimation = (arg14 === undefined ? new ut.Entity : arg14);
  this._LaserBeam1 = (arg15 === undefined ? new ut.Entity : arg15);
  this._LaserBeam2 = (arg16 === undefined ? new ut.Entity : arg16);
};
game.Dinosaur.prototype = Object.create(null);
game.Dinosaur.prototype.constructor = game.Dinosaur;
Object.defineProperties(game.Dinosaur.prototype, {
  MoveSpeed: {
    get: function() { return this._MoveSpeed; },
    set: function(v) { this._MoveSpeed = (+(v===undefined ? 0 : v)); },
  },
  WalkTimer: {
    get: function() { return this._WalkTimer; },
    set: function(v) { this._WalkTimer = (+(v===undefined ? 0 : v)); },
  },
  WalkAnimation: {
    get: function() { return this._WalkAnimation; },
    set: function(v) { this._WalkAnimation = (v === undefined ? new ut.Entity : v); },
  },
  TailWhipAnimation: {
    get: function() { return this._TailWhipAnimation; },
    set: function(v) { this._TailWhipAnimation = (v === undefined ? new ut.Entity : v); },
  },
  StompAnimation: {
    get: function() { return this._StompAnimation; },
    set: function(v) { this._StompAnimation = (v === undefined ? new ut.Entity : v); },
  },
  BiteAnimation: {
    get: function() { return this._BiteAnimation; },
    set: function(v) { this._BiteAnimation = (v === undefined ? new ut.Entity : v); },
  },
  CrushAnimation: {
    get: function() { return this._CrushAnimation; },
    set: function(v) { this._CrushAnimation = (v === undefined ? new ut.Entity : v); },
  },
  LaunchAnimation: {
    get: function() { return this._LaunchAnimation; },
    set: function(v) { this._LaunchAnimation = (v === undefined ? new ut.Entity : v); },
  },
  JumpAnimation: {
    get: function() { return this._JumpAnimation; },
    set: function(v) { this._JumpAnimation = (v === undefined ? new ut.Entity : v); },
  },
  JumpAnimationHeightCurve: {
    get: function() { return this._JumpAnimationHeightCurve; },
    set: function(v) { this._JumpAnimationHeightCurve = (v === undefined ? new ut.Entity : v); },
  },
  DefaultPositionY: {
    get: function() { return this._DefaultPositionY; },
    set: function(v) { this._DefaultPositionY = (+(v===undefined ? 0 : v)); },
  },
  JumpHeight: {
    get: function() { return this._JumpHeight; },
    set: function(v) { this._JumpHeight = (+(v===undefined ? 0 : v)); },
  },
  Shadow: {
    get: function() { return this._Shadow; },
    set: function(v) { this._Shadow = (v === undefined ? new ut.Entity : v); },
  },
  LaserAnimation: {
    get: function() { return this._LaserAnimation; },
    set: function(v) { this._LaserAnimation = (v === undefined ? new ut.Entity : v); },
  },
  DeathAnimation: {
    get: function() { return this._DeathAnimation; },
    set: function(v) { this._DeathAnimation = (v === undefined ? new ut.Entity : v); },
  },
  LaserBeam1: {
    get: function() { return this._LaserBeam1; },
    set: function(v) { this._LaserBeam1 = (v === undefined ? new ut.Entity : v); },
  },
  LaserBeam2: {
    get: function() { return this._LaserBeam2; },
    set: function(v) { this._LaserBeam2 = (v === undefined ? new ut.Entity : v); },
  },
});
game.Dinosaur._size = 120;
game.Dinosaur._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Dinosaur.prototype);
  v._MoveSpeed = HEAPF32[(ptr+0)>>2];
  v._WalkTimer = HEAPF32[(ptr+4)>>2];
  v._WalkAnimation = ut.Entity._fromPtr(ptr+8);
  v._TailWhipAnimation = ut.Entity._fromPtr(ptr+16);
  v._StompAnimation = ut.Entity._fromPtr(ptr+24);
  v._BiteAnimation = ut.Entity._fromPtr(ptr+32);
  v._CrushAnimation = ut.Entity._fromPtr(ptr+40);
  v._LaunchAnimation = ut.Entity._fromPtr(ptr+48);
  v._JumpAnimation = ut.Entity._fromPtr(ptr+56);
  v._JumpAnimationHeightCurve = ut.Entity._fromPtr(ptr+64);
  v._DefaultPositionY = HEAPF32[(ptr+72)>>2];
  v._JumpHeight = HEAPF32[(ptr+76)>>2];
  v._Shadow = ut.Entity._fromPtr(ptr+80);
  v._LaserAnimation = ut.Entity._fromPtr(ptr+88);
  v._DeathAnimation = ut.Entity._fromPtr(ptr+96);
  v._LaserBeam1 = ut.Entity._fromPtr(ptr+104);
  v._LaserBeam2 = ut.Entity._fromPtr(ptr+112);
  return v;
};
game.Dinosaur._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.MoveSpeed;
  HEAPF32[(ptr+4)>>2] = v.WalkTimer;
  ut.Entity._toPtr(ptr+8, v.WalkAnimation);
  ut.Entity._toPtr(ptr+16, v.TailWhipAnimation);
  ut.Entity._toPtr(ptr+24, v.StompAnimation);
  ut.Entity._toPtr(ptr+32, v.BiteAnimation);
  ut.Entity._toPtr(ptr+40, v.CrushAnimation);
  ut.Entity._toPtr(ptr+48, v.LaunchAnimation);
  ut.Entity._toPtr(ptr+56, v.JumpAnimation);
  ut.Entity._toPtr(ptr+64, v.JumpAnimationHeightCurve);
  HEAPF32[(ptr+72)>>2] = v.DefaultPositionY;
  HEAPF32[(ptr+76)>>2] = v.JumpHeight;
  ut.Entity._toPtr(ptr+80, v.Shadow);
  ut.Entity._toPtr(ptr+88, v.LaserAnimation);
  ut.Entity._toPtr(ptr+96, v.DeathAnimation);
  ut.Entity._toPtr(ptr+104, v.LaserBeam1);
  ut.Entity._toPtr(ptr+112, v.LaserBeam2);
};
game.Dinosaur._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.MoveSpeed;
  HEAPF32[(ptr+4)>>2] = v.WalkTimer;
  ut.Entity._toPtr(ptr+8, v.WalkAnimation);
  ut.Entity._toPtr(ptr+16, v.TailWhipAnimation);
  ut.Entity._toPtr(ptr+24, v.StompAnimation);
  ut.Entity._toPtr(ptr+32, v.BiteAnimation);
  ut.Entity._toPtr(ptr+40, v.CrushAnimation);
  ut.Entity._toPtr(ptr+48, v.LaunchAnimation);
  ut.Entity._toPtr(ptr+56, v.JumpAnimation);
  ut.Entity._toPtr(ptr+64, v.JumpAnimationHeightCurve);
  HEAPF32[(ptr+72)>>2] = v.DefaultPositionY;
  HEAPF32[(ptr+76)>>2] = v.JumpHeight;
  ut.Entity._toPtr(ptr+80, v.Shadow);
  ut.Entity._toPtr(ptr+88, v.LaserAnimation);
  ut.Entity._toPtr(ptr+96, v.DeathAnimation);
  ut.Entity._toPtr(ptr+104, v.LaserBeam1);
  ut.Entity._toPtr(ptr+112, v.LaserBeam2);
};
game.Dinosaur._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(120);
  if (v) game.Dinosaur._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Dinosaur.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Dinosaur.StorageView.prototype = Object.create(null);
game.Dinosaur.StorageView.prototype.constructor = game.Dinosaur.StorageView;
game.Dinosaur._view = game.Dinosaur.StorageView;
game.Dinosaur.StorageView._isSharedComp = game.Dinosaur._isSharedComp = false;
game.Dinosaur.StorageView._fromPtr = game.Dinosaur._fromPtr;
game.Dinosaur.StorageView._toPtr = game.Dinosaur._toPtr;
game.Dinosaur.StorageView._tempHeapPtr = game.Dinosaur._tempHeapPtr;
game.Dinosaur.StorageView._size = game.Dinosaur._size;
game.Dinosaur.StorageView.prototype.$advance = function() {
  this._ptr += 120;
};
Object.defineProperties(game.Dinosaur.StorageView.prototype, {
  MoveSpeed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  WalkTimer: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  WalkAnimation: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
  TailWhipAnimation: {
    get: function() { return ut.Entity._fromPtr(this._ptr+16); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+16, v); },
  },
  StompAnimation: {
    get: function() { return ut.Entity._fromPtr(this._ptr+24); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+24, v); },
  },
  BiteAnimation: {
    get: function() { return ut.Entity._fromPtr(this._ptr+32); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+32, v); },
  },
  CrushAnimation: {
    get: function() { return ut.Entity._fromPtr(this._ptr+40); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+40, v); },
  },
  LaunchAnimation: {
    get: function() { return ut.Entity._fromPtr(this._ptr+48); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+48, v); },
  },
  JumpAnimation: {
    get: function() { return ut.Entity._fromPtr(this._ptr+56); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+56, v); },
  },
  JumpAnimationHeightCurve: {
    get: function() { return ut.Entity._fromPtr(this._ptr+64); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+64, v); },
  },
  DefaultPositionY: {
    get: function() { return HEAPF32[(this._ptr+72)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+72)>>2] = v; },
  },
  JumpHeight: {
    get: function() { return HEAPF32[(this._ptr+76)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+76)>>2] = v; },
  },
  Shadow: {
    get: function() { return ut.Entity._fromPtr(this._ptr+80); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+80, v); },
  },
  LaserAnimation: {
    get: function() { return ut.Entity._fromPtr(this._ptr+88); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+88, v); },
  },
  DeathAnimation: {
    get: function() { return ut.Entity._fromPtr(this._ptr+96); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+96, v); },
  },
  LaserBeam1: {
    get: function() { return ut.Entity._fromPtr(this._ptr+104); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+104, v); },
  },
  LaserBeam2: {
    get: function() { return ut.Entity._fromPtr(this._ptr+112); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+112, v); },
  },
});
game.Dinosaur._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Dinosaur is a POD type, so a JavaScript side copy constructor game.Dinosaur._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Dinosaur._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Dinosaur', 120, [
    {name: 'MoveSpeed', offset: 0, type: ut.meta.getType('float')},
    {name: 'WalkTimer', offset: 4, type: ut.meta.getType('float')},
    {name: 'WalkAnimation', offset: 8, type: ut.meta.getType('ut.Entity')},
    {name: 'TailWhipAnimation', offset: 16, type: ut.meta.getType('ut.Entity')},
    {name: 'StompAnimation', offset: 24, type: ut.meta.getType('ut.Entity')},
    {name: 'BiteAnimation', offset: 32, type: ut.meta.getType('ut.Entity')},
    {name: 'CrushAnimation', offset: 40, type: ut.meta.getType('ut.Entity')},
    {name: 'LaunchAnimation', offset: 48, type: ut.meta.getType('ut.Entity')},
    {name: 'JumpAnimation', offset: 56, type: ut.meta.getType('ut.Entity')},
    {name: 'JumpAnimationHeightCurve', offset: 64, type: ut.meta.getType('ut.Entity')},
    {name: 'DefaultPositionY', offset: 72, type: ut.meta.getType('float')},
    {name: 'JumpHeight', offset: 76, type: ut.meta.getType('float')},
    {name: 'Shadow', offset: 80, type: ut.meta.getType('ut.Entity')},
    {name: 'LaserAnimation', offset: 88, type: ut.meta.getType('ut.Entity')},
    {name: 'DeathAnimation', offset: 96, type: ut.meta.getType('ut.Entity')},
    {name: 'LaserBeam1', offset: 104, type: ut.meta.getType('ut.Entity')},
    {name: 'LaserBeam2', offset: 112, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.Dinosaur, { cid: { configurable: true, get: function() { delete game.Dinosaur.cid; var offsetsPtr = ut.tempHeapPtrI32([8,16,24,32,40,48,56,64,80,88,96,104,112]); var offsetsCount = 13; return game.Dinosaur.cid = Module._ut_component_register_cid_with_type(game.Dinosaur._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Dinosaur.StorageView, { cid: { configurable: true, get: function() { return game.Dinosaur.cid; } } });
game.Dinosaur.MoveSpeed = { $ofs:0, $t:"float", $c:game.Dinosaur };
game.Dinosaur.WalkTimer = { $ofs:4, $t:"float", $c:game.Dinosaur };
game.Dinosaur.WalkAnimation = { $ofs:8, $t:"ut.Entity", $c:game.Dinosaur };
game.Dinosaur.WalkAnimation.index = { $ofs:8, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.WalkAnimation.version = { $ofs:12, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.TailWhipAnimation = { $ofs:16, $t:"ut.Entity", $c:game.Dinosaur };
game.Dinosaur.TailWhipAnimation.index = { $ofs:16, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.TailWhipAnimation.version = { $ofs:20, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.StompAnimation = { $ofs:24, $t:"ut.Entity", $c:game.Dinosaur };
game.Dinosaur.StompAnimation.index = { $ofs:24, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.StompAnimation.version = { $ofs:28, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.BiteAnimation = { $ofs:32, $t:"ut.Entity", $c:game.Dinosaur };
game.Dinosaur.BiteAnimation.index = { $ofs:32, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.BiteAnimation.version = { $ofs:36, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.CrushAnimation = { $ofs:40, $t:"ut.Entity", $c:game.Dinosaur };
game.Dinosaur.CrushAnimation.index = { $ofs:40, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.CrushAnimation.version = { $ofs:44, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.LaunchAnimation = { $ofs:48, $t:"ut.Entity", $c:game.Dinosaur };
game.Dinosaur.LaunchAnimation.index = { $ofs:48, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.LaunchAnimation.version = { $ofs:52, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.JumpAnimation = { $ofs:56, $t:"ut.Entity", $c:game.Dinosaur };
game.Dinosaur.JumpAnimation.index = { $ofs:56, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.JumpAnimation.version = { $ofs:60, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.JumpAnimationHeightCurve = { $ofs:64, $t:"ut.Entity", $c:game.Dinosaur };
game.Dinosaur.JumpAnimationHeightCurve.index = { $ofs:64, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.JumpAnimationHeightCurve.version = { $ofs:68, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.DefaultPositionY = { $ofs:72, $t:"float", $c:game.Dinosaur };
game.Dinosaur.JumpHeight = { $ofs:76, $t:"float", $c:game.Dinosaur };
game.Dinosaur.Shadow = { $ofs:80, $t:"ut.Entity", $c:game.Dinosaur };
game.Dinosaur.Shadow.index = { $ofs:80, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.Shadow.version = { $ofs:84, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.LaserAnimation = { $ofs:88, $t:"ut.Entity", $c:game.Dinosaur };
game.Dinosaur.LaserAnimation.index = { $ofs:88, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.LaserAnimation.version = { $ofs:92, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.DeathAnimation = { $ofs:96, $t:"ut.Entity", $c:game.Dinosaur };
game.Dinosaur.DeathAnimation.index = { $ofs:96, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.DeathAnimation.version = { $ofs:100, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.LaserBeam1 = { $ofs:104, $t:"ut.Entity", $c:game.Dinosaur };
game.Dinosaur.LaserBeam1.index = { $ofs:104, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.LaserBeam1.version = { $ofs:108, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.LaserBeam2 = { $ofs:112, $t:"ut.Entity", $c:game.Dinosaur };
game.Dinosaur.LaserBeam2.index = { $ofs:112, $t:"int32_t", $c:game.Dinosaur };
game.Dinosaur.LaserBeam2.version = { $ofs:116, $t:"int32_t", $c:game.Dinosaur };
game.DinosaurAttack = function(arg0, arg1, arg2) {
  this._Timer = (+(arg0===undefined ? 0 : arg0));
  this._AttackType = (arg1|0);
  this._IsDone = (arg2 ? true : false);
};
game.DinosaurAttack.prototype = Object.create(null);
game.DinosaurAttack.prototype.constructor = game.DinosaurAttack;
Object.defineProperties(game.DinosaurAttack.prototype, {
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
  AttackType: {
    get: function() { return this._AttackType; },
    set: function(v) { this._AttackType = (v|0); },
  },
  IsDone: {
    get: function() { return this._IsDone; },
    set: function(v) { this._IsDone = (v ? true : false); },
  },
});
game.DinosaurAttack._size = 12;
game.DinosaurAttack._fromPtr = function(ptr, v) {
  v = v || Object.create(game.DinosaurAttack.prototype);
  v._Timer = HEAPF32[(ptr+0)>>2];
  v._AttackType = HEAP32[(ptr+4)>>2];
  v._IsDone = (HEAP8[ptr+8]?true:false);
  return v;
};
game.DinosaurAttack._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Timer;
  HEAP32[(ptr+4)>>2] = v.AttackType;
  HEAP8[ptr+8] = (v.IsDone)?1:0;
};
game.DinosaurAttack._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Timer;
  HEAP32[(ptr+4)>>2] = v.AttackType;
  HEAP8[ptr+8] = (v.IsDone)?1:0;
};
game.DinosaurAttack._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(12);
  if (v) game.DinosaurAttack._toTempHeapPtr(ptr, v);
  return ptr;
};
game.DinosaurAttack.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.DinosaurAttack.StorageView.prototype = Object.create(null);
game.DinosaurAttack.StorageView.prototype.constructor = game.DinosaurAttack.StorageView;
game.DinosaurAttack._view = game.DinosaurAttack.StorageView;
game.DinosaurAttack.StorageView._isSharedComp = game.DinosaurAttack._isSharedComp = false;
game.DinosaurAttack.StorageView._fromPtr = game.DinosaurAttack._fromPtr;
game.DinosaurAttack.StorageView._toPtr = game.DinosaurAttack._toPtr;
game.DinosaurAttack.StorageView._tempHeapPtr = game.DinosaurAttack._tempHeapPtr;
game.DinosaurAttack.StorageView._size = game.DinosaurAttack._size;
game.DinosaurAttack.StorageView.prototype.$advance = function() {
  this._ptr += 12;
};
Object.defineProperties(game.DinosaurAttack.StorageView.prototype, {
  Timer: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  AttackType: {
    get: function() { return HEAP32[(this._ptr+4)>>2]; },
    set: function(v) { HEAP32[(this._ptr+4)>>2] = v; },
  },
  IsDone: {
    get: function() { return (HEAP8[this._ptr+8]?true:false); },
    set: function(v) { HEAP8[this._ptr+8] = (v)?1:0; },
  },
});
game.DinosaurAttack._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.DinosaurAttack is a POD type, so a JavaScript side copy constructor game.DinosaurAttack._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.DinosaurAttack._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.DinosaurAttack', 12, [
    {name: 'Timer', offset: 0, type: ut.meta.getType('float')},
    {name: 'AttackType', offset: 4, type: ut.meta.getType('game.DinosaurAttackTypes')},
    {name: 'IsDone', offset: 8, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.DinosaurAttack, { cid: { configurable: true, get: function() { delete game.DinosaurAttack.cid; var offsetsPtr = 0, offsetsCount = 0; return game.DinosaurAttack.cid = Module._ut_component_register_cid_with_type(game.DinosaurAttack._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.DinosaurAttack.StorageView, { cid: { configurable: true, get: function() { return game.DinosaurAttack.cid; } } });
game.DinosaurAttack.Timer = { $ofs:0, $t:"float", $c:game.DinosaurAttack };
game.DinosaurAttack.AttackType = { $ofs:4, $t:"game.DinosaurAttackTypes", $c:game.DinosaurAttack };
game.DinosaurAttack.IsDone = { $ofs:8, $t:"bool", $c:game.DinosaurAttack };
game.DinosaurLaserAttackBlackCover = function(arg0) {
  this._AlphaCurve = (arg0 === undefined ? new ut.Entity : arg0);
};
game.DinosaurLaserAttackBlackCover.prototype = Object.create(null);
game.DinosaurLaserAttackBlackCover.prototype.constructor = game.DinosaurLaserAttackBlackCover;
Object.defineProperties(game.DinosaurLaserAttackBlackCover.prototype, {
  AlphaCurve: {
    get: function() { return this._AlphaCurve; },
    set: function(v) { this._AlphaCurve = (v === undefined ? new ut.Entity : v); },
  },
});
game.DinosaurLaserAttackBlackCover._size = 8;
game.DinosaurLaserAttackBlackCover._fromPtr = function(ptr, v) {
  v = v || Object.create(game.DinosaurLaserAttackBlackCover.prototype);
  v._AlphaCurve = ut.Entity._fromPtr(ptr+0);
  return v;
};
game.DinosaurLaserAttackBlackCover._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.AlphaCurve);
};
game.DinosaurLaserAttackBlackCover._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.AlphaCurve);
};
game.DinosaurLaserAttackBlackCover._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.DinosaurLaserAttackBlackCover._toTempHeapPtr(ptr, v);
  return ptr;
};
game.DinosaurLaserAttackBlackCover.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.DinosaurLaserAttackBlackCover.StorageView.prototype = Object.create(null);
game.DinosaurLaserAttackBlackCover.StorageView.prototype.constructor = game.DinosaurLaserAttackBlackCover.StorageView;
game.DinosaurLaserAttackBlackCover._view = game.DinosaurLaserAttackBlackCover.StorageView;
game.DinosaurLaserAttackBlackCover.StorageView._isSharedComp = game.DinosaurLaserAttackBlackCover._isSharedComp = false;
game.DinosaurLaserAttackBlackCover.StorageView._fromPtr = game.DinosaurLaserAttackBlackCover._fromPtr;
game.DinosaurLaserAttackBlackCover.StorageView._toPtr = game.DinosaurLaserAttackBlackCover._toPtr;
game.DinosaurLaserAttackBlackCover.StorageView._tempHeapPtr = game.DinosaurLaserAttackBlackCover._tempHeapPtr;
game.DinosaurLaserAttackBlackCover.StorageView._size = game.DinosaurLaserAttackBlackCover._size;
game.DinosaurLaserAttackBlackCover.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.DinosaurLaserAttackBlackCover.StorageView.prototype, {
  AlphaCurve: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
});
game.DinosaurLaserAttackBlackCover._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.DinosaurLaserAttackBlackCover is a POD type, so a JavaScript side copy constructor game.DinosaurLaserAttackBlackCover._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.DinosaurLaserAttackBlackCover._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.DinosaurLaserAttackBlackCover', 8, [
    {name: 'AlphaCurve', offset: 0, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.DinosaurLaserAttackBlackCover, { cid: { configurable: true, get: function() { delete game.DinosaurLaserAttackBlackCover.cid; var offsetsPtr = ut.tempHeapPtrI32([0]); var offsetsCount = 1; return game.DinosaurLaserAttackBlackCover.cid = Module._ut_component_register_cid_with_type(game.DinosaurLaserAttackBlackCover._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.DinosaurLaserAttackBlackCover.StorageView, { cid: { configurable: true, get: function() { return game.DinosaurLaserAttackBlackCover.cid; } } });
game.DinosaurLaserAttackBlackCover.AlphaCurve = { $ofs:0, $t:"ut.Entity", $c:game.DinosaurLaserAttackBlackCover };
game.DinosaurLaserAttackBlackCover.AlphaCurve.index = { $ofs:0, $t:"int32_t", $c:game.DinosaurLaserAttackBlackCover };
game.DinosaurLaserAttackBlackCover.AlphaCurve.version = { $ofs:4, $t:"int32_t", $c:game.DinosaurLaserAttackBlackCover };
game.Building = function() {
};
game.Building.prototype = Object.create(null);
game.Building.prototype.constructor = game.Building;
Object.defineProperties(game.Building.prototype, {
});
game.Building._size = 1;
game.Building._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Building.prototype);
  return v;
};
game.Building._toPtr = function(ptr, v) {
};
game.Building._toTempHeapPtr = function(ptr, v) {
};
game.Building._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Building._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Building.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Building.StorageView.prototype = Object.create(null);
game.Building.StorageView.prototype.constructor = game.Building.StorageView;
game.Building._view = game.Building.StorageView;
game.Building.StorageView._isSharedComp = game.Building._isSharedComp = false;
game.Building.StorageView._fromPtr = game.Building._fromPtr;
game.Building.StorageView._toPtr = game.Building._toPtr;
game.Building.StorageView._tempHeapPtr = game.Building._tempHeapPtr;
game.Building.StorageView._size = game.Building._size;
game.Building.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Building.StorageView.prototype, {
});
game.Building._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Building is a POD type, so a JavaScript side copy constructor game.Building._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Building._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Building', 1, []);
})();
Object.defineProperties(game.Building, { cid: { configurable: true, get: function() { delete game.Building.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Building.cid = Module._ut_component_register_cid_with_type(game.Building._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Building.StorageView, { cid: { configurable: true, get: function() { return game.Building.cid; } } });
game.Car = function() {
};
game.Car.prototype = Object.create(null);
game.Car.prototype.constructor = game.Car;
Object.defineProperties(game.Car.prototype, {
});
game.Car._size = 1;
game.Car._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Car.prototype);
  return v;
};
game.Car._toPtr = function(ptr, v) {
};
game.Car._toTempHeapPtr = function(ptr, v) {
};
game.Car._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Car._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Car.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Car.StorageView.prototype = Object.create(null);
game.Car.StorageView.prototype.constructor = game.Car.StorageView;
game.Car._view = game.Car.StorageView;
game.Car.StorageView._isSharedComp = game.Car._isSharedComp = false;
game.Car.StorageView._fromPtr = game.Car._fromPtr;
game.Car.StorageView._toPtr = game.Car._toPtr;
game.Car.StorageView._tempHeapPtr = game.Car._tempHeapPtr;
game.Car.StorageView._size = game.Car._size;
game.Car.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Car.StorageView.prototype, {
});
game.Car._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Car is a POD type, so a JavaScript side copy constructor game.Car._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Car._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Car', 1, []);
})();
Object.defineProperties(game.Car, { cid: { configurable: true, get: function() { delete game.Car.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Car.cid = Module._ut_component_register_cid_with_type(game.Car._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Car.StorageView, { cid: { configurable: true, get: function() { return game.Car.cid; } } });
game.Destructible = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  this._CurrentState = (arg0|0);
  this._LastState = (arg1|0);
  this._SpriteStates = (arg2 === undefined ? new Array() : ((arg2 instanceof Array) ? arg2 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._ExplosionOffsetX = (+(arg3===undefined ? 0 : arg3));
  this._ExplosionOffsetY = (+(arg4===undefined ? 0 : arg4));
  this._ExplosionRangeX = (+(arg5===undefined ? 0 : arg5));
  this._ExplosionRangeY = (+(arg6===undefined ? 0 : arg6));
  this._ExplosionMinCount = (+(arg7===undefined ? 0 : arg7));
  this._ExplosionMaxCount = (+(arg8===undefined ? 0 : arg8));
};
game.Destructible.prototype = Object.create(null);
game.Destructible.prototype.constructor = game.Destructible;
Object.defineProperties(game.Destructible.prototype, {
  CurrentState: {
    get: function() { return this._CurrentState; },
    set: function(v) { this._CurrentState = (v|0); },
  },
  LastState: {
    get: function() { return this._LastState; },
    set: function(v) { this._LastState = (v|0); },
  },
  SpriteStates: {
    get: function() { return this._SpriteStates; },
    set: function(v) { this._SpriteStates = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  ExplosionOffsetX: {
    get: function() { return this._ExplosionOffsetX; },
    set: function(v) { this._ExplosionOffsetX = (+(v===undefined ? 0 : v)); },
  },
  ExplosionOffsetY: {
    get: function() { return this._ExplosionOffsetY; },
    set: function(v) { this._ExplosionOffsetY = (+(v===undefined ? 0 : v)); },
  },
  ExplosionRangeX: {
    get: function() { return this._ExplosionRangeX; },
    set: function(v) { this._ExplosionRangeX = (+(v===undefined ? 0 : v)); },
  },
  ExplosionRangeY: {
    get: function() { return this._ExplosionRangeY; },
    set: function(v) { this._ExplosionRangeY = (+(v===undefined ? 0 : v)); },
  },
  ExplosionMinCount: {
    get: function() { return this._ExplosionMinCount; },
    set: function(v) { this._ExplosionMinCount = (+(v===undefined ? 0 : v)); },
  },
  ExplosionMaxCount: {
    get: function() { return this._ExplosionMaxCount; },
    set: function(v) { this._ExplosionMaxCount = (+(v===undefined ? 0 : v)); },
  },
});
game.Destructible._size = 44;
game.Destructible._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Destructible.prototype);
  v._CurrentState = HEAP32[(ptr+0)>>2];
  v._LastState = HEAP32[(ptr+4)>>2];
  v._SpriteStates = ut.nativeBufferToJsArray(ptr+8, 8, function(p) { return (Module._ut_nativestring_data(p) ? UTF8ToString(Module._ut_nativestring_data(p)) : ""); });
  v._ExplosionOffsetX = HEAPF32[(ptr+20)>>2];
  v._ExplosionOffsetY = HEAPF32[(ptr+24)>>2];
  v._ExplosionRangeX = HEAPF32[(ptr+28)>>2];
  v._ExplosionRangeY = HEAPF32[(ptr+32)>>2];
  v._ExplosionMinCount = HEAPF32[(ptr+36)>>2];
  v._ExplosionMaxCount = HEAPF32[(ptr+40)>>2];
  return v;
};
game.Destructible._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.CurrentState;
  HEAP32[(ptr+4)>>2] = v.LastState;
  ut.jsArrayToExistingNativeBuffer_string(v.SpriteStates, ptr+8, function(p, v) { ut.writeHeapNativeString(p, v); });
  HEAPF32[(ptr+20)>>2] = v.ExplosionOffsetX;
  HEAPF32[(ptr+24)>>2] = v.ExplosionOffsetY;
  HEAPF32[(ptr+28)>>2] = v.ExplosionRangeX;
  HEAPF32[(ptr+32)>>2] = v.ExplosionRangeY;
  HEAPF32[(ptr+36)>>2] = v.ExplosionMinCount;
  HEAPF32[(ptr+40)>>2] = v.ExplosionMaxCount;
};
game.Destructible._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.CurrentState;
  HEAP32[(ptr+4)>>2] = v.LastState;
  ut.jsArrayToExistingScratchNativeBuffer_string(v.SpriteStates, ptr+8, function(p, v) { ut.toExistingScratchNativeString(p, v); });
  HEAPF32[(ptr+20)>>2] = v.ExplosionOffsetX;
  HEAPF32[(ptr+24)>>2] = v.ExplosionOffsetY;
  HEAPF32[(ptr+28)>>2] = v.ExplosionRangeX;
  HEAPF32[(ptr+32)>>2] = v.ExplosionRangeY;
  HEAPF32[(ptr+36)>>2] = v.ExplosionMinCount;
  HEAPF32[(ptr+40)>>2] = v.ExplosionMaxCount;
};
game.Destructible._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(44);
  if (v) game.Destructible._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Destructible.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Destructible.StorageView.prototype = Object.create(null);
game.Destructible.StorageView.prototype.constructor = game.Destructible.StorageView;
game.Destructible._view = game.Destructible.StorageView;
game.Destructible.StorageView._isSharedComp = game.Destructible._isSharedComp = false;
game.Destructible.StorageView._fromPtr = game.Destructible._fromPtr;
game.Destructible.StorageView._toPtr = game.Destructible._toPtr;
game.Destructible.StorageView._tempHeapPtr = game.Destructible._tempHeapPtr;
game.Destructible.StorageView._size = game.Destructible._size;
game.Destructible.StorageView.prototype.$advance = function() {
  this._ptr += 44;
};
Object.defineProperties(game.Destructible.StorageView.prototype, {
  CurrentState: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  LastState: {
    get: function() { return HEAP32[(this._ptr+4)>>2]; },
    set: function(v) { HEAP32[(this._ptr+4)>>2] = v; },
  },
  SpriteStates: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+8, 8, function(p) { return (Module._ut_nativestring_data(p) ? UTF8ToString(Module._ut_nativestring_data(p)) : ""); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_string(v, this._ptr+8, function(p, v) { ut.writeHeapNativeString(p, v); }); },
  },
  ExplosionOffsetX: {
    get: function() { return HEAPF32[(this._ptr+20)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+20)>>2] = v; },
  },
  ExplosionOffsetY: {
    get: function() { return HEAPF32[(this._ptr+24)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+24)>>2] = v; },
  },
  ExplosionRangeX: {
    get: function() { return HEAPF32[(this._ptr+28)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+28)>>2] = v; },
  },
  ExplosionRangeY: {
    get: function() { return HEAPF32[(this._ptr+32)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+32)>>2] = v; },
  },
  ExplosionMinCount: {
    get: function() { return HEAPF32[(this._ptr+36)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+36)>>2] = v; },
  },
  ExplosionMaxCount: {
    get: function() { return HEAPF32[(this._ptr+40)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+40)>>2] = v; },
  },
});
game.Destructible._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativebuffer_nativestring_placement_delete(ptr + 8);
};
game.Destructible._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  for(var i = 0; i < 4; ++i) HEAPU8[dst+0+i] = HEAPU8[src+0+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+4+i] = HEAPU8[src+4+i];
  Module._ut_nativebuffer_nativestring_copy_construct(dst + 8, src + 8);
  for(var i = 0; i < 4; ++i) HEAPU8[dst+20+i] = HEAPU8[src+20+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+24+i] = HEAPU8[src+24+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+28+i] = HEAPU8[src+28+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+32+i] = HEAPU8[src+32+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+36+i] = HEAPU8[src+36+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+40+i] = HEAPU8[src+40+i];
};
game.Destructible._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Destructible', 44, [
    {name: 'CurrentState', offset: 0, type: ut.meta.getType('int32')},
    {name: 'LastState', offset: 4, type: ut.meta.getType('int32')},
    {name: 'SpriteStates', offset: 8, type: ut.meta.getType('ut.NativeBuffer<string>')},
    {name: 'ExplosionOffsetX', offset: 20, type: ut.meta.getType('float')},
    {name: 'ExplosionOffsetY', offset: 24, type: ut.meta.getType('float')},
    {name: 'ExplosionRangeX', offset: 28, type: ut.meta.getType('float')},
    {name: 'ExplosionRangeY', offset: 32, type: ut.meta.getType('float')},
    {name: 'ExplosionMinCount', offset: 36, type: ut.meta.getType('float')},
    {name: 'ExplosionMaxCount', offset: 40, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.Destructible, { cid: { configurable: true, get: function() { delete game.Destructible.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Destructible.cid = Module._ut_component_register_cid_with_type(game.Destructible._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.Destructible._dtorFn), ut.CopyFn._cb.token_for(game.Destructible._copyFn)); } } });
Object.defineProperties(game.Destructible.StorageView, { cid: { configurable: true, get: function() { return game.Destructible.cid; } } });
game.Destructible.CurrentState = { $ofs:0, $t:"int32_t", $c:game.Destructible };
game.Destructible.LastState = { $ofs:4, $t:"int32_t", $c:game.Destructible };
game.Destructible.SpriteStates = { $ofs:8, $t:"ut.DynamicArray`1", $c:game.Destructible };
game.Destructible.ExplosionOffsetX = { $ofs:20, $t:"float", $c:game.Destructible };
game.Destructible.ExplosionOffsetY = { $ofs:24, $t:"float", $c:game.Destructible };
game.Destructible.ExplosionRangeX = { $ofs:28, $t:"float", $c:game.Destructible };
game.Destructible.ExplosionRangeY = { $ofs:32, $t:"float", $c:game.Destructible };
game.Destructible.ExplosionMinCount = { $ofs:36, $t:"float", $c:game.Destructible };
game.Destructible.ExplosionMaxCount = { $ofs:40, $t:"float", $c:game.Destructible };
game.FireTruck = function() {
};
game.FireTruck.prototype = Object.create(null);
game.FireTruck.prototype.constructor = game.FireTruck;
Object.defineProperties(game.FireTruck.prototype, {
});
game.FireTruck._size = 1;
game.FireTruck._fromPtr = function(ptr, v) {
  v = v || Object.create(game.FireTruck.prototype);
  return v;
};
game.FireTruck._toPtr = function(ptr, v) {
};
game.FireTruck._toTempHeapPtr = function(ptr, v) {
};
game.FireTruck._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.FireTruck._toTempHeapPtr(ptr, v);
  return ptr;
};
game.FireTruck.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.FireTruck.StorageView.prototype = Object.create(null);
game.FireTruck.StorageView.prototype.constructor = game.FireTruck.StorageView;
game.FireTruck._view = game.FireTruck.StorageView;
game.FireTruck.StorageView._isSharedComp = game.FireTruck._isSharedComp = false;
game.FireTruck.StorageView._fromPtr = game.FireTruck._fromPtr;
game.FireTruck.StorageView._toPtr = game.FireTruck._toPtr;
game.FireTruck.StorageView._tempHeapPtr = game.FireTruck._tempHeapPtr;
game.FireTruck.StorageView._size = game.FireTruck._size;
game.FireTruck.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.FireTruck.StorageView.prototype, {
});
game.FireTruck._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.FireTruck is a POD type, so a JavaScript side copy constructor game.FireTruck._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.FireTruck._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.FireTruck', 1, []);
})();
Object.defineProperties(game.FireTruck, { cid: { configurable: true, get: function() { delete game.FireTruck.cid; var offsetsPtr = 0, offsetsCount = 0; return game.FireTruck.cid = Module._ut_component_register_cid_with_type(game.FireTruck._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.FireTruck.StorageView, { cid: { configurable: true, get: function() { return game.FireTruck.cid; } } });
game.Helicopter = function(arg0, arg1, arg2, arg3, arg4, arg5) {
  this._MoveSpeed = (+(arg0===undefined ? 0 : arg0));
  this._SlowDownDistance = (+(arg1===undefined ? 0 : arg1));
  this._DestinationPositionX = (+(arg2===undefined ? 0 : arg2));
  this._DestinationPositionY = (+(arg3===undefined ? 0 : arg3));
  this._ReachedDestination = (arg4 ? true : false);
  this._Timer = (+(arg5===undefined ? 0 : arg5));
};
game.Helicopter.prototype = Object.create(null);
game.Helicopter.prototype.constructor = game.Helicopter;
Object.defineProperties(game.Helicopter.prototype, {
  MoveSpeed: {
    get: function() { return this._MoveSpeed; },
    set: function(v) { this._MoveSpeed = (+(v===undefined ? 0 : v)); },
  },
  SlowDownDistance: {
    get: function() { return this._SlowDownDistance; },
    set: function(v) { this._SlowDownDistance = (+(v===undefined ? 0 : v)); },
  },
  DestinationPositionX: {
    get: function() { return this._DestinationPositionX; },
    set: function(v) { this._DestinationPositionX = (+(v===undefined ? 0 : v)); },
  },
  DestinationPositionY: {
    get: function() { return this._DestinationPositionY; },
    set: function(v) { this._DestinationPositionY = (+(v===undefined ? 0 : v)); },
  },
  ReachedDestination: {
    get: function() { return this._ReachedDestination; },
    set: function(v) { this._ReachedDestination = (v ? true : false); },
  },
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
});
game.Helicopter._size = 24;
game.Helicopter._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Helicopter.prototype);
  v._MoveSpeed = HEAPF32[(ptr+0)>>2];
  v._SlowDownDistance = HEAPF32[(ptr+4)>>2];
  v._DestinationPositionX = HEAPF32[(ptr+8)>>2];
  v._DestinationPositionY = HEAPF32[(ptr+12)>>2];
  v._ReachedDestination = (HEAP8[ptr+16]?true:false);
  v._Timer = HEAPF32[(ptr+20)>>2];
  return v;
};
game.Helicopter._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.MoveSpeed;
  HEAPF32[(ptr+4)>>2] = v.SlowDownDistance;
  HEAPF32[(ptr+8)>>2] = v.DestinationPositionX;
  HEAPF32[(ptr+12)>>2] = v.DestinationPositionY;
  HEAP8[ptr+16] = (v.ReachedDestination)?1:0;
  HEAPF32[(ptr+20)>>2] = v.Timer;
};
game.Helicopter._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.MoveSpeed;
  HEAPF32[(ptr+4)>>2] = v.SlowDownDistance;
  HEAPF32[(ptr+8)>>2] = v.DestinationPositionX;
  HEAPF32[(ptr+12)>>2] = v.DestinationPositionY;
  HEAP8[ptr+16] = (v.ReachedDestination)?1:0;
  HEAPF32[(ptr+20)>>2] = v.Timer;
};
game.Helicopter._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) game.Helicopter._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Helicopter.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Helicopter.StorageView.prototype = Object.create(null);
game.Helicopter.StorageView.prototype.constructor = game.Helicopter.StorageView;
game.Helicopter._view = game.Helicopter.StorageView;
game.Helicopter.StorageView._isSharedComp = game.Helicopter._isSharedComp = false;
game.Helicopter.StorageView._fromPtr = game.Helicopter._fromPtr;
game.Helicopter.StorageView._toPtr = game.Helicopter._toPtr;
game.Helicopter.StorageView._tempHeapPtr = game.Helicopter._tempHeapPtr;
game.Helicopter.StorageView._size = game.Helicopter._size;
game.Helicopter.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(game.Helicopter.StorageView.prototype, {
  MoveSpeed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  SlowDownDistance: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  DestinationPositionX: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  DestinationPositionY: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
  ReachedDestination: {
    get: function() { return (HEAP8[this._ptr+16]?true:false); },
    set: function(v) { HEAP8[this._ptr+16] = (v)?1:0; },
  },
  Timer: {
    get: function() { return HEAPF32[(this._ptr+20)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+20)>>2] = v; },
  },
});
game.Helicopter._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Helicopter is a POD type, so a JavaScript side copy constructor game.Helicopter._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Helicopter._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Helicopter', 24, [
    {name: 'MoveSpeed', offset: 0, type: ut.meta.getType('float')},
    {name: 'SlowDownDistance', offset: 4, type: ut.meta.getType('float')},
    {name: 'DestinationPositionX', offset: 8, type: ut.meta.getType('float')},
    {name: 'DestinationPositionY', offset: 12, type: ut.meta.getType('float')},
    {name: 'ReachedDestination', offset: 16, type: ut.meta.getType('bool')},
    {name: 'Timer', offset: 20, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.Helicopter, { cid: { configurable: true, get: function() { delete game.Helicopter.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Helicopter.cid = Module._ut_component_register_cid_with_type(game.Helicopter._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Helicopter.StorageView, { cid: { configurable: true, get: function() { return game.Helicopter.cid; } } });
game.Helicopter.MoveSpeed = { $ofs:0, $t:"float", $c:game.Helicopter };
game.Helicopter.SlowDownDistance = { $ofs:4, $t:"float", $c:game.Helicopter };
game.Helicopter.DestinationPositionX = { $ofs:8, $t:"float", $c:game.Helicopter };
game.Helicopter.DestinationPositionY = { $ofs:12, $t:"float", $c:game.Helicopter };
game.Helicopter.ReachedDestination = { $ofs:16, $t:"bool", $c:game.Helicopter };
game.Helicopter.Timer = { $ofs:20, $t:"float", $c:game.Helicopter };
game.HelicopterSpawner = function() {
};
game.HelicopterSpawner.prototype = Object.create(null);
game.HelicopterSpawner.prototype.constructor = game.HelicopterSpawner;
Object.defineProperties(game.HelicopterSpawner.prototype, {
});
game.HelicopterSpawner._size = 1;
game.HelicopterSpawner._fromPtr = function(ptr, v) {
  v = v || Object.create(game.HelicopterSpawner.prototype);
  return v;
};
game.HelicopterSpawner._toPtr = function(ptr, v) {
};
game.HelicopterSpawner._toTempHeapPtr = function(ptr, v) {
};
game.HelicopterSpawner._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.HelicopterSpawner._toTempHeapPtr(ptr, v);
  return ptr;
};
game.HelicopterSpawner.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.HelicopterSpawner.StorageView.prototype = Object.create(null);
game.HelicopterSpawner.StorageView.prototype.constructor = game.HelicopterSpawner.StorageView;
game.HelicopterSpawner._view = game.HelicopterSpawner.StorageView;
game.HelicopterSpawner.StorageView._isSharedComp = game.HelicopterSpawner._isSharedComp = false;
game.HelicopterSpawner.StorageView._fromPtr = game.HelicopterSpawner._fromPtr;
game.HelicopterSpawner.StorageView._toPtr = game.HelicopterSpawner._toPtr;
game.HelicopterSpawner.StorageView._tempHeapPtr = game.HelicopterSpawner._tempHeapPtr;
game.HelicopterSpawner.StorageView._size = game.HelicopterSpawner._size;
game.HelicopterSpawner.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.HelicopterSpawner.StorageView.prototype, {
});
game.HelicopterSpawner._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.HelicopterSpawner is a POD type, so a JavaScript side copy constructor game.HelicopterSpawner._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.HelicopterSpawner._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.HelicopterSpawner', 1, []);
})();
Object.defineProperties(game.HelicopterSpawner, { cid: { configurable: true, get: function() { delete game.HelicopterSpawner.cid; var offsetsPtr = 0, offsetsCount = 0; return game.HelicopterSpawner.cid = Module._ut_component_register_cid_with_type(game.HelicopterSpawner._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.HelicopterSpawner.StorageView, { cid: { configurable: true, get: function() { return game.HelicopterSpawner.cid; } } });
game.KidOnBike = function(arg0, arg1, arg2) {
  this._IsInWheelyMode = (arg0 ? true : false);
  this._AnimationKidBike = (arg1 === undefined ? new ut.Entity : arg1);
  this._AnimationKidWheely = (arg2 === undefined ? new ut.Entity : arg2);
};
game.KidOnBike.prototype = Object.create(null);
game.KidOnBike.prototype.constructor = game.KidOnBike;
Object.defineProperties(game.KidOnBike.prototype, {
  IsInWheelyMode: {
    get: function() { return this._IsInWheelyMode; },
    set: function(v) { this._IsInWheelyMode = (v ? true : false); },
  },
  AnimationKidBike: {
    get: function() { return this._AnimationKidBike; },
    set: function(v) { this._AnimationKidBike = (v === undefined ? new ut.Entity : v); },
  },
  AnimationKidWheely: {
    get: function() { return this._AnimationKidWheely; },
    set: function(v) { this._AnimationKidWheely = (v === undefined ? new ut.Entity : v); },
  },
});
game.KidOnBike._size = 20;
game.KidOnBike._fromPtr = function(ptr, v) {
  v = v || Object.create(game.KidOnBike.prototype);
  v._IsInWheelyMode = (HEAP8[ptr+0]?true:false);
  v._AnimationKidBike = ut.Entity._fromPtr(ptr+4);
  v._AnimationKidWheely = ut.Entity._fromPtr(ptr+12);
  return v;
};
game.KidOnBike._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.IsInWheelyMode)?1:0;
  ut.Entity._toPtr(ptr+4, v.AnimationKidBike);
  ut.Entity._toPtr(ptr+12, v.AnimationKidWheely);
};
game.KidOnBike._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.IsInWheelyMode)?1:0;
  ut.Entity._toPtr(ptr+4, v.AnimationKidBike);
  ut.Entity._toPtr(ptr+12, v.AnimationKidWheely);
};
game.KidOnBike._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.KidOnBike._toTempHeapPtr(ptr, v);
  return ptr;
};
game.KidOnBike.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.KidOnBike.StorageView.prototype = Object.create(null);
game.KidOnBike.StorageView.prototype.constructor = game.KidOnBike.StorageView;
game.KidOnBike._view = game.KidOnBike.StorageView;
game.KidOnBike.StorageView._isSharedComp = game.KidOnBike._isSharedComp = false;
game.KidOnBike.StorageView._fromPtr = game.KidOnBike._fromPtr;
game.KidOnBike.StorageView._toPtr = game.KidOnBike._toPtr;
game.KidOnBike.StorageView._tempHeapPtr = game.KidOnBike._tempHeapPtr;
game.KidOnBike.StorageView._size = game.KidOnBike._size;
game.KidOnBike.StorageView.prototype.$advance = function() {
  this._ptr += 20;
};
Object.defineProperties(game.KidOnBike.StorageView.prototype, {
  IsInWheelyMode: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  AnimationKidBike: {
    get: function() { return ut.Entity._fromPtr(this._ptr+4); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+4, v); },
  },
  AnimationKidWheely: {
    get: function() { return ut.Entity._fromPtr(this._ptr+12); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+12, v); },
  },
});
game.KidOnBike._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.KidOnBike is a POD type, so a JavaScript side copy constructor game.KidOnBike._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.KidOnBike._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.KidOnBike', 20, [
    {name: 'IsInWheelyMode', offset: 0, type: ut.meta.getType('bool')},
    {name: 'AnimationKidBike', offset: 4, type: ut.meta.getType('ut.Entity')},
    {name: 'AnimationKidWheely', offset: 12, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.KidOnBike, { cid: { configurable: true, get: function() { delete game.KidOnBike.cid; var offsetsPtr = ut.tempHeapPtrI32([4,12]); var offsetsCount = 2; return game.KidOnBike.cid = Module._ut_component_register_cid_with_type(game.KidOnBike._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.KidOnBike.StorageView, { cid: { configurable: true, get: function() { return game.KidOnBike.cid; } } });
game.KidOnBike.IsInWheelyMode = { $ofs:0, $t:"bool", $c:game.KidOnBike };
game.KidOnBike.AnimationKidBike = { $ofs:4, $t:"ut.Entity", $c:game.KidOnBike };
game.KidOnBike.AnimationKidBike.index = { $ofs:4, $t:"int32_t", $c:game.KidOnBike };
game.KidOnBike.AnimationKidBike.version = { $ofs:8, $t:"int32_t", $c:game.KidOnBike };
game.KidOnBike.AnimationKidWheely = { $ofs:12, $t:"ut.Entity", $c:game.KidOnBike };
game.KidOnBike.AnimationKidWheely.index = { $ofs:12, $t:"int32_t", $c:game.KidOnBike };
game.KidOnBike.AnimationKidWheely.version = { $ofs:16, $t:"int32_t", $c:game.KidOnBike };
game.KidOnBikeSpawner = function(arg0, arg1) {
  this._Timer = (+(arg0===undefined ? 0 : arg0));
  this._SpawnDelay = (+(arg1===undefined ? 0 : arg1));
};
game.KidOnBikeSpawner.prototype = Object.create(null);
game.KidOnBikeSpawner.prototype.constructor = game.KidOnBikeSpawner;
Object.defineProperties(game.KidOnBikeSpawner.prototype, {
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
  SpawnDelay: {
    get: function() { return this._SpawnDelay; },
    set: function(v) { this._SpawnDelay = (+(v===undefined ? 0 : v)); },
  },
});
game.KidOnBikeSpawner._size = 8;
game.KidOnBikeSpawner._fromPtr = function(ptr, v) {
  v = v || Object.create(game.KidOnBikeSpawner.prototype);
  v._Timer = HEAPF32[(ptr+0)>>2];
  v._SpawnDelay = HEAPF32[(ptr+4)>>2];
  return v;
};
game.KidOnBikeSpawner._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Timer;
  HEAPF32[(ptr+4)>>2] = v.SpawnDelay;
};
game.KidOnBikeSpawner._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Timer;
  HEAPF32[(ptr+4)>>2] = v.SpawnDelay;
};
game.KidOnBikeSpawner._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.KidOnBikeSpawner._toTempHeapPtr(ptr, v);
  return ptr;
};
game.KidOnBikeSpawner.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.KidOnBikeSpawner.StorageView.prototype = Object.create(null);
game.KidOnBikeSpawner.StorageView.prototype.constructor = game.KidOnBikeSpawner.StorageView;
game.KidOnBikeSpawner._view = game.KidOnBikeSpawner.StorageView;
game.KidOnBikeSpawner.StorageView._isSharedComp = game.KidOnBikeSpawner._isSharedComp = false;
game.KidOnBikeSpawner.StorageView._fromPtr = game.KidOnBikeSpawner._fromPtr;
game.KidOnBikeSpawner.StorageView._toPtr = game.KidOnBikeSpawner._toPtr;
game.KidOnBikeSpawner.StorageView._tempHeapPtr = game.KidOnBikeSpawner._tempHeapPtr;
game.KidOnBikeSpawner.StorageView._size = game.KidOnBikeSpawner._size;
game.KidOnBikeSpawner.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.KidOnBikeSpawner.StorageView.prototype, {
  Timer: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  SpawnDelay: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
});
game.KidOnBikeSpawner._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.KidOnBikeSpawner is a POD type, so a JavaScript side copy constructor game.KidOnBikeSpawner._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.KidOnBikeSpawner._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.KidOnBikeSpawner', 8, [
    {name: 'Timer', offset: 0, type: ut.meta.getType('float')},
    {name: 'SpawnDelay', offset: 4, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.KidOnBikeSpawner, { cid: { configurable: true, get: function() { delete game.KidOnBikeSpawner.cid; var offsetsPtr = 0, offsetsCount = 0; return game.KidOnBikeSpawner.cid = Module._ut_component_register_cid_with_type(game.KidOnBikeSpawner._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.KidOnBikeSpawner.StorageView, { cid: { configurable: true, get: function() { return game.KidOnBikeSpawner.cid; } } });
game.KidOnBikeSpawner.Timer = { $ofs:0, $t:"float", $c:game.KidOnBikeSpawner };
game.KidOnBikeSpawner.SpawnDelay = { $ofs:4, $t:"float", $c:game.KidOnBikeSpawner };
game.PeopleSpawner = function(arg0, arg1, arg2) {
  this._MaxPeopleCount = (arg0|0);
  this._Timer = (+(arg1===undefined ? 0 : arg1));
  this._SpawnInterval = (+(arg2===undefined ? 0 : arg2));
};
game.PeopleSpawner.prototype = Object.create(null);
game.PeopleSpawner.prototype.constructor = game.PeopleSpawner;
Object.defineProperties(game.PeopleSpawner.prototype, {
  MaxPeopleCount: {
    get: function() { return this._MaxPeopleCount; },
    set: function(v) { this._MaxPeopleCount = (v|0); },
  },
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
  SpawnInterval: {
    get: function() { return this._SpawnInterval; },
    set: function(v) { this._SpawnInterval = (+(v===undefined ? 0 : v)); },
  },
});
game.PeopleSpawner._size = 12;
game.PeopleSpawner._fromPtr = function(ptr, v) {
  v = v || Object.create(game.PeopleSpawner.prototype);
  v._MaxPeopleCount = HEAP8[ptr+0];
  v._Timer = HEAPF32[(ptr+4)>>2];
  v._SpawnInterval = HEAPF32[(ptr+8)>>2];
  return v;
};
game.PeopleSpawner._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = v.MaxPeopleCount;
  HEAPF32[(ptr+4)>>2] = v.Timer;
  HEAPF32[(ptr+8)>>2] = v.SpawnInterval;
};
game.PeopleSpawner._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = v.MaxPeopleCount;
  HEAPF32[(ptr+4)>>2] = v.Timer;
  HEAPF32[(ptr+8)>>2] = v.SpawnInterval;
};
game.PeopleSpawner._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(12);
  if (v) game.PeopleSpawner._toTempHeapPtr(ptr, v);
  return ptr;
};
game.PeopleSpawner.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.PeopleSpawner.StorageView.prototype = Object.create(null);
game.PeopleSpawner.StorageView.prototype.constructor = game.PeopleSpawner.StorageView;
game.PeopleSpawner._view = game.PeopleSpawner.StorageView;
game.PeopleSpawner.StorageView._isSharedComp = game.PeopleSpawner._isSharedComp = false;
game.PeopleSpawner.StorageView._fromPtr = game.PeopleSpawner._fromPtr;
game.PeopleSpawner.StorageView._toPtr = game.PeopleSpawner._toPtr;
game.PeopleSpawner.StorageView._tempHeapPtr = game.PeopleSpawner._tempHeapPtr;
game.PeopleSpawner.StorageView._size = game.PeopleSpawner._size;
game.PeopleSpawner.StorageView.prototype.$advance = function() {
  this._ptr += 12;
};
Object.defineProperties(game.PeopleSpawner.StorageView.prototype, {
  MaxPeopleCount: {
    get: function() { return HEAP8[this._ptr+0]; },
    set: function(v) { HEAP8[this._ptr+0] = v; },
  },
  Timer: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  SpawnInterval: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
});
game.PeopleSpawner._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.PeopleSpawner is a POD type, so a JavaScript side copy constructor game.PeopleSpawner._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.PeopleSpawner._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.PeopleSpawner', 12, [
    {name: 'MaxPeopleCount', offset: 0, type: ut.meta.getType('int8')},
    {name: 'Timer', offset: 4, type: ut.meta.getType('float')},
    {name: 'SpawnInterval', offset: 8, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.PeopleSpawner, { cid: { configurable: true, get: function() { delete game.PeopleSpawner.cid; var offsetsPtr = 0, offsetsCount = 0; return game.PeopleSpawner.cid = Module._ut_component_register_cid_with_type(game.PeopleSpawner._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.PeopleSpawner.StorageView, { cid: { configurable: true, get: function() { return game.PeopleSpawner.cid; } } });
game.PeopleSpawner.MaxPeopleCount = { $ofs:0, $t:"int8_t", $c:game.PeopleSpawner };
game.PeopleSpawner.Timer = { $ofs:4, $t:"float", $c:game.PeopleSpawner };
game.PeopleSpawner.SpawnInterval = { $ofs:8, $t:"float", $c:game.PeopleSpawner };
game.Person = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  this._MoveSpeed = (+(arg0===undefined ? 0 : arg0));
  this._MoveSpeedMultiplier = (+(arg1===undefined ? 0 : arg1));
  this._FearSpeedMultiplier = (+(arg2===undefined ? 0 : arg2));
  this._MinimumDistanceFromDinosaur = (+(arg3===undefined ? 0 : arg3));
  this._MaximumDistanceFromDinosaur = (+(arg4===undefined ? 0 : arg4));
  this._State = (arg5|0);
  this._WalkPositionY = (+(arg6===undefined ? 0 : arg6));
  this._WalkAnimation = (arg7 === undefined ? new ut.Entity : arg7);
  this._FireAnimation = (arg8 === undefined ? new ut.Entity : arg8);
};
game.Person.prototype = Object.create(null);
game.Person.prototype.constructor = game.Person;
Object.defineProperties(game.Person.prototype, {
  MoveSpeed: {
    get: function() { return this._MoveSpeed; },
    set: function(v) { this._MoveSpeed = (+(v===undefined ? 0 : v)); },
  },
  MoveSpeedMultiplier: {
    get: function() { return this._MoveSpeedMultiplier; },
    set: function(v) { this._MoveSpeedMultiplier = (+(v===undefined ? 0 : v)); },
  },
  FearSpeedMultiplier: {
    get: function() { return this._FearSpeedMultiplier; },
    set: function(v) { this._FearSpeedMultiplier = (+(v===undefined ? 0 : v)); },
  },
  MinimumDistanceFromDinosaur: {
    get: function() { return this._MinimumDistanceFromDinosaur; },
    set: function(v) { this._MinimumDistanceFromDinosaur = (+(v===undefined ? 0 : v)); },
  },
  MaximumDistanceFromDinosaur: {
    get: function() { return this._MaximumDistanceFromDinosaur; },
    set: function(v) { this._MaximumDistanceFromDinosaur = (+(v===undefined ? 0 : v)); },
  },
  State: {
    get: function() { return this._State; },
    set: function(v) { this._State = (v|0); },
  },
  WalkPositionY: {
    get: function() { return this._WalkPositionY; },
    set: function(v) { this._WalkPositionY = (+(v===undefined ? 0 : v)); },
  },
  WalkAnimation: {
    get: function() { return this._WalkAnimation; },
    set: function(v) { this._WalkAnimation = (v === undefined ? new ut.Entity : v); },
  },
  FireAnimation: {
    get: function() { return this._FireAnimation; },
    set: function(v) { this._FireAnimation = (v === undefined ? new ut.Entity : v); },
  },
});
game.Person._size = 44;
game.Person._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Person.prototype);
  v._MoveSpeed = HEAPF32[(ptr+0)>>2];
  v._MoveSpeedMultiplier = HEAPF32[(ptr+4)>>2];
  v._FearSpeedMultiplier = HEAPF32[(ptr+8)>>2];
  v._MinimumDistanceFromDinosaur = HEAPF32[(ptr+12)>>2];
  v._MaximumDistanceFromDinosaur = HEAPF32[(ptr+16)>>2];
  v._State = HEAP32[(ptr+20)>>2];
  v._WalkPositionY = HEAPF32[(ptr+24)>>2];
  v._WalkAnimation = ut.Entity._fromPtr(ptr+28);
  v._FireAnimation = ut.Entity._fromPtr(ptr+36);
  return v;
};
game.Person._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.MoveSpeed;
  HEAPF32[(ptr+4)>>2] = v.MoveSpeedMultiplier;
  HEAPF32[(ptr+8)>>2] = v.FearSpeedMultiplier;
  HEAPF32[(ptr+12)>>2] = v.MinimumDistanceFromDinosaur;
  HEAPF32[(ptr+16)>>2] = v.MaximumDistanceFromDinosaur;
  HEAP32[(ptr+20)>>2] = v.State;
  HEAPF32[(ptr+24)>>2] = v.WalkPositionY;
  ut.Entity._toPtr(ptr+28, v.WalkAnimation);
  ut.Entity._toPtr(ptr+36, v.FireAnimation);
};
game.Person._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.MoveSpeed;
  HEAPF32[(ptr+4)>>2] = v.MoveSpeedMultiplier;
  HEAPF32[(ptr+8)>>2] = v.FearSpeedMultiplier;
  HEAPF32[(ptr+12)>>2] = v.MinimumDistanceFromDinosaur;
  HEAPF32[(ptr+16)>>2] = v.MaximumDistanceFromDinosaur;
  HEAP32[(ptr+20)>>2] = v.State;
  HEAPF32[(ptr+24)>>2] = v.WalkPositionY;
  ut.Entity._toPtr(ptr+28, v.WalkAnimation);
  ut.Entity._toPtr(ptr+36, v.FireAnimation);
};
game.Person._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(44);
  if (v) game.Person._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Person.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Person.StorageView.prototype = Object.create(null);
game.Person.StorageView.prototype.constructor = game.Person.StorageView;
game.Person._view = game.Person.StorageView;
game.Person.StorageView._isSharedComp = game.Person._isSharedComp = false;
game.Person.StorageView._fromPtr = game.Person._fromPtr;
game.Person.StorageView._toPtr = game.Person._toPtr;
game.Person.StorageView._tempHeapPtr = game.Person._tempHeapPtr;
game.Person.StorageView._size = game.Person._size;
game.Person.StorageView.prototype.$advance = function() {
  this._ptr += 44;
};
Object.defineProperties(game.Person.StorageView.prototype, {
  MoveSpeed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  MoveSpeedMultiplier: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  FearSpeedMultiplier: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  MinimumDistanceFromDinosaur: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
  MaximumDistanceFromDinosaur: {
    get: function() { return HEAPF32[(this._ptr+16)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+16)>>2] = v; },
  },
  State: {
    get: function() { return HEAP32[(this._ptr+20)>>2]; },
    set: function(v) { HEAP32[(this._ptr+20)>>2] = v; },
  },
  WalkPositionY: {
    get: function() { return HEAPF32[(this._ptr+24)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+24)>>2] = v; },
  },
  WalkAnimation: {
    get: function() { return ut.Entity._fromPtr(this._ptr+28); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+28, v); },
  },
  FireAnimation: {
    get: function() { return ut.Entity._fromPtr(this._ptr+36); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+36, v); },
  },
});
game.Person._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Person is a POD type, so a JavaScript side copy constructor game.Person._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Person._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Person', 44, [
    {name: 'MoveSpeed', offset: 0, type: ut.meta.getType('float')},
    {name: 'MoveSpeedMultiplier', offset: 4, type: ut.meta.getType('float')},
    {name: 'FearSpeedMultiplier', offset: 8, type: ut.meta.getType('float')},
    {name: 'MinimumDistanceFromDinosaur', offset: 12, type: ut.meta.getType('float')},
    {name: 'MaximumDistanceFromDinosaur', offset: 16, type: ut.meta.getType('float')},
    {name: 'State', offset: 20, type: ut.meta.getType('game.PersonState')},
    {name: 'WalkPositionY', offset: 24, type: ut.meta.getType('float')},
    {name: 'WalkAnimation', offset: 28, type: ut.meta.getType('ut.Entity')},
    {name: 'FireAnimation', offset: 36, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.Person, { cid: { configurable: true, get: function() { delete game.Person.cid; var offsetsPtr = ut.tempHeapPtrI32([28,36]); var offsetsCount = 2; return game.Person.cid = Module._ut_component_register_cid_with_type(game.Person._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Person.StorageView, { cid: { configurable: true, get: function() { return game.Person.cid; } } });
game.Person.MoveSpeed = { $ofs:0, $t:"float", $c:game.Person };
game.Person.MoveSpeedMultiplier = { $ofs:4, $t:"float", $c:game.Person };
game.Person.FearSpeedMultiplier = { $ofs:8, $t:"float", $c:game.Person };
game.Person.MinimumDistanceFromDinosaur = { $ofs:12, $t:"float", $c:game.Person };
game.Person.MaximumDistanceFromDinosaur = { $ofs:16, $t:"float", $c:game.Person };
game.Person.State = { $ofs:20, $t:"game.PersonState", $c:game.Person };
game.Person.WalkPositionY = { $ofs:24, $t:"float", $c:game.Person };
game.Person.WalkAnimation = { $ofs:28, $t:"ut.Entity", $c:game.Person };
game.Person.WalkAnimation.index = { $ofs:28, $t:"int32_t", $c:game.Person };
game.Person.WalkAnimation.version = { $ofs:32, $t:"int32_t", $c:game.Person };
game.Person.FireAnimation = { $ofs:36, $t:"ut.Entity", $c:game.Person };
game.Person.FireAnimation.index = { $ofs:36, $t:"int32_t", $c:game.Person };
game.Person.FireAnimation.version = { $ofs:40, $t:"int32_t", $c:game.Person };
game.Prop = function() {
};
game.Prop.prototype = Object.create(null);
game.Prop.prototype.constructor = game.Prop;
Object.defineProperties(game.Prop.prototype, {
});
game.Prop._size = 1;
game.Prop._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Prop.prototype);
  return v;
};
game.Prop._toPtr = function(ptr, v) {
};
game.Prop._toTempHeapPtr = function(ptr, v) {
};
game.Prop._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Prop._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Prop.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Prop.StorageView.prototype = Object.create(null);
game.Prop.StorageView.prototype.constructor = game.Prop.StorageView;
game.Prop._view = game.Prop.StorageView;
game.Prop.StorageView._isSharedComp = game.Prop._isSharedComp = false;
game.Prop.StorageView._fromPtr = game.Prop._fromPtr;
game.Prop.StorageView._toPtr = game.Prop._toPtr;
game.Prop.StorageView._tempHeapPtr = game.Prop._tempHeapPtr;
game.Prop.StorageView._size = game.Prop._size;
game.Prop.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Prop.StorageView.prototype, {
});
game.Prop._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Prop is a POD type, so a JavaScript side copy constructor game.Prop._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Prop._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Prop', 1, []);
})();
Object.defineProperties(game.Prop, { cid: { configurable: true, get: function() { delete game.Prop.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Prop.cid = Module._ut_component_register_cid_with_type(game.Prop._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Prop.StorageView, { cid: { configurable: true, get: function() { return game.Prop.cid; } } });
game.ScrollingObject = function(arg0, arg1, arg2) {
  this._Speed = (+(arg0===undefined ? 0 : arg0));
  this._AutonomousSpeed = (+(arg1===undefined ? 0 : arg1));
  this._SpawnerName = (arg2 === undefined ? '' : arg2);
};
game.ScrollingObject.prototype = Object.create(null);
game.ScrollingObject.prototype.constructor = game.ScrollingObject;
Object.defineProperties(game.ScrollingObject.prototype, {
  Speed: {
    get: function() { return this._Speed; },
    set: function(v) { this._Speed = (+(v===undefined ? 0 : v)); },
  },
  AutonomousSpeed: {
    get: function() { return this._AutonomousSpeed; },
    set: function(v) { this._AutonomousSpeed = (+(v===undefined ? 0 : v)); },
  },
  SpawnerName: {
    get: function() { return this._SpawnerName; },
    set: function(v) { this._SpawnerName = (v === undefined ? '' : v); },
  },
});
game.ScrollingObject._size = 16;
game.ScrollingObject._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ScrollingObject.prototype);
  v._Speed = HEAPF32[(ptr+0)>>2];
  v._AutonomousSpeed = HEAPF32[(ptr+4)>>2];
  v._SpawnerName = (Module._ut_nativestring_data(ptr+8) ? UTF8ToString(Module._ut_nativestring_data(ptr+8)) : "");
  return v;
};
game.ScrollingObject._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Speed;
  HEAPF32[(ptr+4)>>2] = v.AutonomousSpeed;
  ut.newHeapNativeString(ptr+8, v.SpawnerName);
};
game.ScrollingObject._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Speed;
  HEAPF32[(ptr+4)>>2] = v.AutonomousSpeed;
  ut.toExistingScratchNativeString(ptr+8, v.SpawnerName);
};
game.ScrollingObject._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.ScrollingObject._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ScrollingObject.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ScrollingObject.StorageView.prototype = Object.create(null);
game.ScrollingObject.StorageView.prototype.constructor = game.ScrollingObject.StorageView;
game.ScrollingObject._view = game.ScrollingObject.StorageView;
game.ScrollingObject.StorageView._isSharedComp = game.ScrollingObject._isSharedComp = false;
game.ScrollingObject.StorageView._fromPtr = game.ScrollingObject._fromPtr;
game.ScrollingObject.StorageView._toPtr = game.ScrollingObject._toPtr;
game.ScrollingObject.StorageView._tempHeapPtr = game.ScrollingObject._tempHeapPtr;
game.ScrollingObject.StorageView._size = game.ScrollingObject._size;
game.ScrollingObject.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.ScrollingObject.StorageView.prototype, {
  Speed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  AutonomousSpeed: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  SpawnerName: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+8) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+8)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+8, v); },
  },
});
game.ScrollingObject._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 8);
};
game.ScrollingObject._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  for(var i = 0; i < 4; ++i) HEAPU8[dst+0+i] = HEAPU8[src+0+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+4+i] = HEAPU8[src+4+i];
  Module._ut_nativestring_copy_construct(dst + 8, src + 8);
};
game.ScrollingObject._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.ScrollingObject', 16, [
    {name: 'Speed', offset: 0, type: ut.meta.getType('float')},
    {name: 'AutonomousSpeed', offset: 4, type: ut.meta.getType('float')},
    {name: 'SpawnerName', offset: 8, type: ut.meta.getType('string')}
  ]);
})();
Object.defineProperties(game.ScrollingObject, { cid: { configurable: true, get: function() { delete game.ScrollingObject.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ScrollingObject.cid = Module._ut_component_register_cid_with_type(game.ScrollingObject._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.ScrollingObject._dtorFn), ut.CopyFn._cb.token_for(game.ScrollingObject._copyFn)); } } });
Object.defineProperties(game.ScrollingObject.StorageView, { cid: { configurable: true, get: function() { return game.ScrollingObject.cid; } } });
game.ScrollingObject.Speed = { $ofs:0, $t:"float", $c:game.ScrollingObject };
game.ScrollingObject.AutonomousSpeed = { $ofs:4, $t:"float", $c:game.ScrollingObject };
game.ScrollingObject.SpawnerName = { $ofs:8, $t:"System.String", $c:game.ScrollingObject };
game.ScrollingObjectSpawner = function(arg0, arg1, arg2, arg3, arg4, arg5) {
  this._SpawnDetailsBySkin = (arg0 === undefined ? new Array() : ((arg0 instanceof Array) ? arg0 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._EntitiesToSpawn = (arg1 === undefined ? new Array() : ((arg1 instanceof Array) ? arg1 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._MaxRandomYOffset = (arg2|0);
  this._RandomizeFlipX = (arg3 ? true : false);
  this._RandomizeFlipY = (arg4 ? true : false);
  this._NextObjectDistance = (+(arg5===undefined ? 0 : arg5));
};
game.ScrollingObjectSpawner.prototype = Object.create(null);
game.ScrollingObjectSpawner.prototype.constructor = game.ScrollingObjectSpawner;
Object.defineProperties(game.ScrollingObjectSpawner.prototype, {
  SpawnDetailsBySkin: {
    get: function() { return this._SpawnDetailsBySkin; },
    set: function(v) { this._SpawnDetailsBySkin = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  EntitiesToSpawn: {
    get: function() { return this._EntitiesToSpawn; },
    set: function(v) { this._EntitiesToSpawn = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  MaxRandomYOffset: {
    get: function() { return this._MaxRandomYOffset; },
    set: function(v) { this._MaxRandomYOffset = (v|0); },
  },
  RandomizeFlipX: {
    get: function() { return this._RandomizeFlipX; },
    set: function(v) { this._RandomizeFlipX = (v ? true : false); },
  },
  RandomizeFlipY: {
    get: function() { return this._RandomizeFlipY; },
    set: function(v) { this._RandomizeFlipY = (v ? true : false); },
  },
  NextObjectDistance: {
    get: function() { return this._NextObjectDistance; },
    set: function(v) { this._NextObjectDistance = (+(v===undefined ? 0 : v)); },
  },
});
game.ScrollingObjectSpawner._size = 36;
game.ScrollingObjectSpawner._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ScrollingObjectSpawner.prototype);
  v._SpawnDetailsBySkin = ut.nativeBufferToJsArray(ptr+0, 16, function(p) { return game.ScrollingObjectSpawnerDetails._fromPtr(p); });
  v._EntitiesToSpawn = ut.nativeBufferToJsArray(ptr+12, 8, function(p) { return (Module._ut_nativestring_data(p) ? UTF8ToString(Module._ut_nativestring_data(p)) : ""); });
  v._MaxRandomYOffset = HEAP32[(ptr+24)>>2];
  v._RandomizeFlipX = (HEAP8[ptr+28]?true:false);
  v._RandomizeFlipY = (HEAP8[ptr+29]?true:false);
  v._NextObjectDistance = HEAPF32[(ptr+32)>>2];
  return v;
};
game.ScrollingObjectSpawner._toPtr = function(ptr, v) {
  ut.jsArrayToExistingNativeBuffer_pod(v.SpawnDetailsBySkin, ptr+0, 16, function(p, v) { game.ScrollingObjectSpawnerDetails._toPtr(p, v); });
  ut.jsArrayToExistingNativeBuffer_string(v.EntitiesToSpawn, ptr+12, function(p, v) { ut.writeHeapNativeString(p, v); });
  HEAP32[(ptr+24)>>2] = v.MaxRandomYOffset;
  HEAP8[ptr+28] = (v.RandomizeFlipX)?1:0;
  HEAP8[ptr+29] = (v.RandomizeFlipY)?1:0;
  HEAPF32[(ptr+32)>>2] = v.NextObjectDistance;
};
game.ScrollingObjectSpawner._toTempHeapPtr = function(ptr, v) {
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.SpawnDetailsBySkin, ptr+0, 16, function(p, v) { game.ScrollingObjectSpawnerDetails._toPtr(p, v); });
  ut.jsArrayToExistingScratchNativeBuffer_string(v.EntitiesToSpawn, ptr+12, function(p, v) { ut.toExistingScratchNativeString(p, v); });
  HEAP32[(ptr+24)>>2] = v.MaxRandomYOffset;
  HEAP8[ptr+28] = (v.RandomizeFlipX)?1:0;
  HEAP8[ptr+29] = (v.RandomizeFlipY)?1:0;
  HEAPF32[(ptr+32)>>2] = v.NextObjectDistance;
};
game.ScrollingObjectSpawner._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(36);
  if (v) game.ScrollingObjectSpawner._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ScrollingObjectSpawner.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ScrollingObjectSpawner.StorageView.prototype = Object.create(null);
game.ScrollingObjectSpawner.StorageView.prototype.constructor = game.ScrollingObjectSpawner.StorageView;
game.ScrollingObjectSpawner._view = game.ScrollingObjectSpawner.StorageView;
game.ScrollingObjectSpawner.StorageView._isSharedComp = game.ScrollingObjectSpawner._isSharedComp = false;
game.ScrollingObjectSpawner.StorageView._fromPtr = game.ScrollingObjectSpawner._fromPtr;
game.ScrollingObjectSpawner.StorageView._toPtr = game.ScrollingObjectSpawner._toPtr;
game.ScrollingObjectSpawner.StorageView._tempHeapPtr = game.ScrollingObjectSpawner._tempHeapPtr;
game.ScrollingObjectSpawner.StorageView._size = game.ScrollingObjectSpawner._size;
game.ScrollingObjectSpawner.StorageView.prototype.$advance = function() {
  this._ptr += 36;
};
Object.defineProperties(game.ScrollingObjectSpawner.StorageView.prototype, {
  SpawnDetailsBySkin: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+0, 16, function(p) { return game.ScrollingObjectSpawnerDetails._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+0, 16, function(p, v) { game.ScrollingObjectSpawnerDetails._toPtr(p, v); }); },
  },
  EntitiesToSpawn: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+12, 8, function(p) { return (Module._ut_nativestring_data(p) ? UTF8ToString(Module._ut_nativestring_data(p)) : ""); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_string(v, this._ptr+12, function(p, v) { ut.writeHeapNativeString(p, v); }); },
  },
  MaxRandomYOffset: {
    get: function() { return HEAP32[(this._ptr+24)>>2]; },
    set: function(v) { HEAP32[(this._ptr+24)>>2] = v; },
  },
  RandomizeFlipX: {
    get: function() { return (HEAP8[this._ptr+28]?true:false); },
    set: function(v) { HEAP8[this._ptr+28] = (v)?1:0; },
  },
  RandomizeFlipY: {
    get: function() { return (HEAP8[this._ptr+29]?true:false); },
    set: function(v) { HEAP8[this._ptr+29] = (v)?1:0; },
  },
  NextObjectDistance: {
    get: function() { return HEAPF32[(this._ptr+32)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+32)>>2] = v; },
  },
});
game.ScrollingObjectSpawner._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativebuffer_pod_placement_delete(ptr + 0);
  Module._ut_nativebuffer_nativestring_placement_delete(ptr + 12);
};
game.ScrollingObjectSpawner._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativebuffer_pod_copy_construct(dst + 0, src + 0, 16);
  Module._ut_nativebuffer_nativestring_copy_construct(dst + 12, src + 12);
  for(var i = 0; i < 4; ++i) HEAPU8[dst+24+i] = HEAPU8[src+24+i];
  for(var i = 0; i < 1; ++i) HEAPU8[dst+28+i] = HEAPU8[src+28+i];
  for(var i = 0; i < 1; ++i) HEAPU8[dst+29+i] = HEAPU8[src+29+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+32+i] = HEAPU8[src+32+i];
};
game.ScrollingObjectSpawner._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.ScrollingObjectSpawner', 36, [
    {name: 'SpawnDetailsBySkin', offset: 0, type: ut.meta.getType('ut.NativeBuffer<game.ScrollingObjectSpawnerDetails>')},
    {name: 'EntitiesToSpawn', offset: 12, type: ut.meta.getType('ut.NativeBuffer<string>')},
    {name: 'MaxRandomYOffset', offset: 24, type: ut.meta.getType('int32')},
    {name: 'RandomizeFlipX', offset: 28, type: ut.meta.getType('bool')},
    {name: 'RandomizeFlipY', offset: 29, type: ut.meta.getType('bool')},
    {name: 'NextObjectDistance', offset: 32, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.ScrollingObjectSpawner, { cid: { configurable: true, get: function() { delete game.ScrollingObjectSpawner.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ScrollingObjectSpawner.cid = Module._ut_component_register_cid_with_type(game.ScrollingObjectSpawner._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.ScrollingObjectSpawner._dtorFn), ut.CopyFn._cb.token_for(game.ScrollingObjectSpawner._copyFn)); } } });
Object.defineProperties(game.ScrollingObjectSpawner.StorageView, { cid: { configurable: true, get: function() { return game.ScrollingObjectSpawner.cid; } } });
game.ScrollingObjectSpawner.SpawnDetailsBySkin = { $ofs:0, $t:"ut.DynamicArray`1", $c:game.ScrollingObjectSpawner };
game.ScrollingObjectSpawner.EntitiesToSpawn = { $ofs:12, $t:"ut.DynamicArray`1", $c:game.ScrollingObjectSpawner };
game.ScrollingObjectSpawner.MaxRandomYOffset = { $ofs:24, $t:"int32_t", $c:game.ScrollingObjectSpawner };
game.ScrollingObjectSpawner.RandomizeFlipX = { $ofs:28, $t:"bool", $c:game.ScrollingObjectSpawner };
game.ScrollingObjectSpawner.RandomizeFlipY = { $ofs:29, $t:"bool", $c:game.ScrollingObjectSpawner };
game.ScrollingObjectSpawner.NextObjectDistance = { $ofs:32, $t:"float", $c:game.ScrollingObjectSpawner };
game.Cell = function(arg0, arg1, arg2) {
  this._X = (arg0|0);
  this._Y = (arg1|0);
  this._Size = (arg2|0);
};
game.Cell.prototype = Object.create(null);
game.Cell.prototype.constructor = game.Cell;
Object.defineProperties(game.Cell.prototype, {
  X: {
    get: function() { return this._X; },
    set: function(v) { this._X = (v|0); },
  },
  Y: {
    get: function() { return this._Y; },
    set: function(v) { this._Y = (v|0); },
  },
  Size: {
    get: function() { return this._Size; },
    set: function(v) { this._Size = (v|0); },
  },
});
game.Cell._size = 12;
game.Cell._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Cell.prototype);
  v._X = HEAP32[(ptr+0)>>2];
  v._Y = HEAP32[(ptr+4)>>2];
  v._Size = HEAP32[(ptr+8)>>2];
  return v;
};
game.Cell._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.X;
  HEAP32[(ptr+4)>>2] = v.Y;
  HEAP32[(ptr+8)>>2] = v.Size;
};
game.Cell._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.X;
  HEAP32[(ptr+4)>>2] = v.Y;
  HEAP32[(ptr+8)>>2] = v.Size;
};
game.Cell._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(12);
  if (v) game.Cell._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Cell.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Cell.StorageView.prototype = Object.create(null);
game.Cell.StorageView.prototype.constructor = game.Cell.StorageView;
game.Cell._view = game.Cell.StorageView;
game.Cell.StorageView._isSharedComp = game.Cell._isSharedComp = false;
game.Cell.StorageView._fromPtr = game.Cell._fromPtr;
game.Cell.StorageView._toPtr = game.Cell._toPtr;
game.Cell.StorageView._tempHeapPtr = game.Cell._tempHeapPtr;
game.Cell.StorageView._size = game.Cell._size;
game.Cell.StorageView.prototype.$advance = function() {
  this._ptr += 12;
};
Object.defineProperties(game.Cell.StorageView.prototype, {
  X: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  Y: {
    get: function() { return HEAP32[(this._ptr+4)>>2]; },
    set: function(v) { HEAP32[(this._ptr+4)>>2] = v; },
  },
  Size: {
    get: function() { return HEAP32[(this._ptr+8)>>2]; },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = v; },
  },
});
game.Cell._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Cell is a POD type, so a JavaScript side copy constructor game.Cell._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Cell._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Cell', 12, [
    {name: 'X', offset: 0, type: ut.meta.getType('int32')},
    {name: 'Y', offset: 4, type: ut.meta.getType('int32')},
    {name: 'Size', offset: 8, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(game.Cell, { cid: { configurable: true, get: function() { delete game.Cell.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Cell.cid = Module._ut_component_register_cid_with_type(game.Cell._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Cell.StorageView, { cid: { configurable: true, get: function() { return game.Cell.cid; } } });
game.Cell.X = { $ofs:0, $t:"int32_t", $c:game.Cell };
game.Cell.Y = { $ofs:4, $t:"int32_t", $c:game.Cell };
game.Cell.Size = { $ofs:8, $t:"int32_t", $c:game.Cell };
game.DestroyLaserAnimation = function(arg0, arg1, arg2, arg3, arg4, arg5) {
  this._Timer = (+(arg0===undefined ? 0 : arg0));
  this._Duration = (+(arg1===undefined ? 0 : arg1));
  this._StartPositionX = (+(arg2===undefined ? 0 : arg2));
  this._StartPositionY = (+(arg3===undefined ? 0 : arg3));
  this._EndPositionX = (+(arg4===undefined ? 0 : arg4));
  this._EndPositionY = (+(arg5===undefined ? 0 : arg5));
};
game.DestroyLaserAnimation.prototype = Object.create(null);
game.DestroyLaserAnimation.prototype.constructor = game.DestroyLaserAnimation;
Object.defineProperties(game.DestroyLaserAnimation.prototype, {
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
  Duration: {
    get: function() { return this._Duration; },
    set: function(v) { this._Duration = (+(v===undefined ? 0 : v)); },
  },
  StartPositionX: {
    get: function() { return this._StartPositionX; },
    set: function(v) { this._StartPositionX = (+(v===undefined ? 0 : v)); },
  },
  StartPositionY: {
    get: function() { return this._StartPositionY; },
    set: function(v) { this._StartPositionY = (+(v===undefined ? 0 : v)); },
  },
  EndPositionX: {
    get: function() { return this._EndPositionX; },
    set: function(v) { this._EndPositionX = (+(v===undefined ? 0 : v)); },
  },
  EndPositionY: {
    get: function() { return this._EndPositionY; },
    set: function(v) { this._EndPositionY = (+(v===undefined ? 0 : v)); },
  },
});
game.DestroyLaserAnimation._size = 24;
game.DestroyLaserAnimation._fromPtr = function(ptr, v) {
  v = v || Object.create(game.DestroyLaserAnimation.prototype);
  v._Timer = HEAPF32[(ptr+0)>>2];
  v._Duration = HEAPF32[(ptr+4)>>2];
  v._StartPositionX = HEAPF32[(ptr+8)>>2];
  v._StartPositionY = HEAPF32[(ptr+12)>>2];
  v._EndPositionX = HEAPF32[(ptr+16)>>2];
  v._EndPositionY = HEAPF32[(ptr+20)>>2];
  return v;
};
game.DestroyLaserAnimation._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Timer;
  HEAPF32[(ptr+4)>>2] = v.Duration;
  HEAPF32[(ptr+8)>>2] = v.StartPositionX;
  HEAPF32[(ptr+12)>>2] = v.StartPositionY;
  HEAPF32[(ptr+16)>>2] = v.EndPositionX;
  HEAPF32[(ptr+20)>>2] = v.EndPositionY;
};
game.DestroyLaserAnimation._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Timer;
  HEAPF32[(ptr+4)>>2] = v.Duration;
  HEAPF32[(ptr+8)>>2] = v.StartPositionX;
  HEAPF32[(ptr+12)>>2] = v.StartPositionY;
  HEAPF32[(ptr+16)>>2] = v.EndPositionX;
  HEAPF32[(ptr+20)>>2] = v.EndPositionY;
};
game.DestroyLaserAnimation._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) game.DestroyLaserAnimation._toTempHeapPtr(ptr, v);
  return ptr;
};
game.DestroyLaserAnimation.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.DestroyLaserAnimation.StorageView.prototype = Object.create(null);
game.DestroyLaserAnimation.StorageView.prototype.constructor = game.DestroyLaserAnimation.StorageView;
game.DestroyLaserAnimation._view = game.DestroyLaserAnimation.StorageView;
game.DestroyLaserAnimation.StorageView._isSharedComp = game.DestroyLaserAnimation._isSharedComp = false;
game.DestroyLaserAnimation.StorageView._fromPtr = game.DestroyLaserAnimation._fromPtr;
game.DestroyLaserAnimation.StorageView._toPtr = game.DestroyLaserAnimation._toPtr;
game.DestroyLaserAnimation.StorageView._tempHeapPtr = game.DestroyLaserAnimation._tempHeapPtr;
game.DestroyLaserAnimation.StorageView._size = game.DestroyLaserAnimation._size;
game.DestroyLaserAnimation.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(game.DestroyLaserAnimation.StorageView.prototype, {
  Timer: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  Duration: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  StartPositionX: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  StartPositionY: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
  EndPositionX: {
    get: function() { return HEAPF32[(this._ptr+16)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+16)>>2] = v; },
  },
  EndPositionY: {
    get: function() { return HEAPF32[(this._ptr+20)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+20)>>2] = v; },
  },
});
game.DestroyLaserAnimation._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.DestroyLaserAnimation is a POD type, so a JavaScript side copy constructor game.DestroyLaserAnimation._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.DestroyLaserAnimation._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.DestroyLaserAnimation', 24, [
    {name: 'Timer', offset: 0, type: ut.meta.getType('float')},
    {name: 'Duration', offset: 4, type: ut.meta.getType('float')},
    {name: 'StartPositionX', offset: 8, type: ut.meta.getType('float')},
    {name: 'StartPositionY', offset: 12, type: ut.meta.getType('float')},
    {name: 'EndPositionX', offset: 16, type: ut.meta.getType('float')},
    {name: 'EndPositionY', offset: 20, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.DestroyLaserAnimation, { cid: { configurable: true, get: function() { delete game.DestroyLaserAnimation.cid; var offsetsPtr = 0, offsetsCount = 0; return game.DestroyLaserAnimation.cid = Module._ut_component_register_cid_with_type(game.DestroyLaserAnimation._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.DestroyLaserAnimation.StorageView, { cid: { configurable: true, get: function() { return game.DestroyLaserAnimation.cid; } } });
game.DestroyLaserAnimation.Timer = { $ofs:0, $t:"float", $c:game.DestroyLaserAnimation };
game.DestroyLaserAnimation.Duration = { $ofs:4, $t:"float", $c:game.DestroyLaserAnimation };
game.DestroyLaserAnimation.StartPositionX = { $ofs:8, $t:"float", $c:game.DestroyLaserAnimation };
game.DestroyLaserAnimation.StartPositionY = { $ofs:12, $t:"float", $c:game.DestroyLaserAnimation };
game.DestroyLaserAnimation.EndPositionX = { $ofs:16, $t:"float", $c:game.DestroyLaserAnimation };
game.DestroyLaserAnimation.EndPositionY = { $ofs:20, $t:"float", $c:game.DestroyLaserAnimation };
game.DestroyLineAnimation = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this._Timer = (+(arg0===undefined ? 0 : arg0));
  this._Duration = (+(arg1===undefined ? 0 : arg1));
  this._ScaleDuration = (+(arg2===undefined ? 0 : arg2));
  this._StartPositionX = (+(arg3===undefined ? 0 : arg3));
  this._StartPositionY = (+(arg4===undefined ? 0 : arg4));
  this._EndPositionX = (+(arg5===undefined ? 0 : arg5));
  this._EndPositionY = (+(arg6===undefined ? 0 : arg6));
  this._ColorGradient = (arg7 === undefined ? new ut.Entity : arg7);
};
game.DestroyLineAnimation.prototype = Object.create(null);
game.DestroyLineAnimation.prototype.constructor = game.DestroyLineAnimation;
Object.defineProperties(game.DestroyLineAnimation.prototype, {
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
  Duration: {
    get: function() { return this._Duration; },
    set: function(v) { this._Duration = (+(v===undefined ? 0 : v)); },
  },
  ScaleDuration: {
    get: function() { return this._ScaleDuration; },
    set: function(v) { this._ScaleDuration = (+(v===undefined ? 0 : v)); },
  },
  StartPositionX: {
    get: function() { return this._StartPositionX; },
    set: function(v) { this._StartPositionX = (+(v===undefined ? 0 : v)); },
  },
  StartPositionY: {
    get: function() { return this._StartPositionY; },
    set: function(v) { this._StartPositionY = (+(v===undefined ? 0 : v)); },
  },
  EndPositionX: {
    get: function() { return this._EndPositionX; },
    set: function(v) { this._EndPositionX = (+(v===undefined ? 0 : v)); },
  },
  EndPositionY: {
    get: function() { return this._EndPositionY; },
    set: function(v) { this._EndPositionY = (+(v===undefined ? 0 : v)); },
  },
  ColorGradient: {
    get: function() { return this._ColorGradient; },
    set: function(v) { this._ColorGradient = (v === undefined ? new ut.Entity : v); },
  },
});
game.DestroyLineAnimation._size = 36;
game.DestroyLineAnimation._fromPtr = function(ptr, v) {
  v = v || Object.create(game.DestroyLineAnimation.prototype);
  v._Timer = HEAPF32[(ptr+0)>>2];
  v._Duration = HEAPF32[(ptr+4)>>2];
  v._ScaleDuration = HEAPF32[(ptr+8)>>2];
  v._StartPositionX = HEAPF32[(ptr+12)>>2];
  v._StartPositionY = HEAPF32[(ptr+16)>>2];
  v._EndPositionX = HEAPF32[(ptr+20)>>2];
  v._EndPositionY = HEAPF32[(ptr+24)>>2];
  v._ColorGradient = ut.Entity._fromPtr(ptr+28);
  return v;
};
game.DestroyLineAnimation._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Timer;
  HEAPF32[(ptr+4)>>2] = v.Duration;
  HEAPF32[(ptr+8)>>2] = v.ScaleDuration;
  HEAPF32[(ptr+12)>>2] = v.StartPositionX;
  HEAPF32[(ptr+16)>>2] = v.StartPositionY;
  HEAPF32[(ptr+20)>>2] = v.EndPositionX;
  HEAPF32[(ptr+24)>>2] = v.EndPositionY;
  ut.Entity._toPtr(ptr+28, v.ColorGradient);
};
game.DestroyLineAnimation._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Timer;
  HEAPF32[(ptr+4)>>2] = v.Duration;
  HEAPF32[(ptr+8)>>2] = v.ScaleDuration;
  HEAPF32[(ptr+12)>>2] = v.StartPositionX;
  HEAPF32[(ptr+16)>>2] = v.StartPositionY;
  HEAPF32[(ptr+20)>>2] = v.EndPositionX;
  HEAPF32[(ptr+24)>>2] = v.EndPositionY;
  ut.Entity._toPtr(ptr+28, v.ColorGradient);
};
game.DestroyLineAnimation._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(36);
  if (v) game.DestroyLineAnimation._toTempHeapPtr(ptr, v);
  return ptr;
};
game.DestroyLineAnimation.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.DestroyLineAnimation.StorageView.prototype = Object.create(null);
game.DestroyLineAnimation.StorageView.prototype.constructor = game.DestroyLineAnimation.StorageView;
game.DestroyLineAnimation._view = game.DestroyLineAnimation.StorageView;
game.DestroyLineAnimation.StorageView._isSharedComp = game.DestroyLineAnimation._isSharedComp = false;
game.DestroyLineAnimation.StorageView._fromPtr = game.DestroyLineAnimation._fromPtr;
game.DestroyLineAnimation.StorageView._toPtr = game.DestroyLineAnimation._toPtr;
game.DestroyLineAnimation.StorageView._tempHeapPtr = game.DestroyLineAnimation._tempHeapPtr;
game.DestroyLineAnimation.StorageView._size = game.DestroyLineAnimation._size;
game.DestroyLineAnimation.StorageView.prototype.$advance = function() {
  this._ptr += 36;
};
Object.defineProperties(game.DestroyLineAnimation.StorageView.prototype, {
  Timer: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  Duration: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  ScaleDuration: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  StartPositionX: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
  StartPositionY: {
    get: function() { return HEAPF32[(this._ptr+16)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+16)>>2] = v; },
  },
  EndPositionX: {
    get: function() { return HEAPF32[(this._ptr+20)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+20)>>2] = v; },
  },
  EndPositionY: {
    get: function() { return HEAPF32[(this._ptr+24)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+24)>>2] = v; },
  },
  ColorGradient: {
    get: function() { return ut.Entity._fromPtr(this._ptr+28); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+28, v); },
  },
});
game.DestroyLineAnimation._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.DestroyLineAnimation is a POD type, so a JavaScript side copy constructor game.DestroyLineAnimation._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.DestroyLineAnimation._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.DestroyLineAnimation', 36, [
    {name: 'Timer', offset: 0, type: ut.meta.getType('float')},
    {name: 'Duration', offset: 4, type: ut.meta.getType('float')},
    {name: 'ScaleDuration', offset: 8, type: ut.meta.getType('float')},
    {name: 'StartPositionX', offset: 12, type: ut.meta.getType('float')},
    {name: 'StartPositionY', offset: 16, type: ut.meta.getType('float')},
    {name: 'EndPositionX', offset: 20, type: ut.meta.getType('float')},
    {name: 'EndPositionY', offset: 24, type: ut.meta.getType('float')},
    {name: 'ColorGradient', offset: 28, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.DestroyLineAnimation, { cid: { configurable: true, get: function() { delete game.DestroyLineAnimation.cid; var offsetsPtr = ut.tempHeapPtrI32([28]); var offsetsCount = 1; return game.DestroyLineAnimation.cid = Module._ut_component_register_cid_with_type(game.DestroyLineAnimation._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.DestroyLineAnimation.StorageView, { cid: { configurable: true, get: function() { return game.DestroyLineAnimation.cid; } } });
game.DestroyLineAnimation.Timer = { $ofs:0, $t:"float", $c:game.DestroyLineAnimation };
game.DestroyLineAnimation.Duration = { $ofs:4, $t:"float", $c:game.DestroyLineAnimation };
game.DestroyLineAnimation.ScaleDuration = { $ofs:8, $t:"float", $c:game.DestroyLineAnimation };
game.DestroyLineAnimation.StartPositionX = { $ofs:12, $t:"float", $c:game.DestroyLineAnimation };
game.DestroyLineAnimation.StartPositionY = { $ofs:16, $t:"float", $c:game.DestroyLineAnimation };
game.DestroyLineAnimation.EndPositionX = { $ofs:20, $t:"float", $c:game.DestroyLineAnimation };
game.DestroyLineAnimation.EndPositionY = { $ofs:24, $t:"float", $c:game.DestroyLineAnimation };
game.DestroyLineAnimation.ColorGradient = { $ofs:28, $t:"ut.Entity", $c:game.DestroyLineAnimation };
game.DestroyLineAnimation.ColorGradient.index = { $ofs:28, $t:"int32_t", $c:game.DestroyLineAnimation };
game.DestroyLineAnimation.ColorGradient.version = { $ofs:32, $t:"int32_t", $c:game.DestroyLineAnimation };
game.Gem = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14) {
  this._CellHashKey = (/*64BIT*/arg0|0);
  this._IsSelected = (arg1 ? true : false);
  this._IsFalling = (arg2 ? true : false);
  this._IsSwapping = (arg3 ? true : false);
  this._SpriteRendererHighlightGem = (arg4 === undefined ? new ut.Entity : arg4);
  this._GemType = (arg5|0);
  this._HighlightAlpha = (+(arg6===undefined ? 0 : arg6));
  this._IsPossibleMatch = (arg7 ? true : false);
  this._PowerUp = (arg8|0);
  this._CurrentPowerUpVisual = (arg9|0);
  this._RowPowerUpVisual = (arg10 === undefined ? new ut.Entity : arg10);
  this._ColumnPowerUpVisual = (arg11 === undefined ? new ut.Entity : arg11);
  this._DiagonalPowerUpVisual = (arg12 === undefined ? new ut.Entity : arg12);
  this._SquarePowerUpVisual = (arg13 === undefined ? new ut.Entity : arg13);
  this._SameColorPowerUpVisual = (arg14 === undefined ? new ut.Entity : arg14);
};
game.Gem.prototype = Object.create(null);
game.Gem.prototype.constructor = game.Gem;
Object.defineProperties(game.Gem.prototype, {
  CellHashKey: {
    get: function() { return this._CellHashKey; },
    set: function(v) { this._CellHashKey = (/*64BIT*/v|0); },
  },
  IsSelected: {
    get: function() { return this._IsSelected; },
    set: function(v) { this._IsSelected = (v ? true : false); },
  },
  IsFalling: {
    get: function() { return this._IsFalling; },
    set: function(v) { this._IsFalling = (v ? true : false); },
  },
  IsSwapping: {
    get: function() { return this._IsSwapping; },
    set: function(v) { this._IsSwapping = (v ? true : false); },
  },
  SpriteRendererHighlightGem: {
    get: function() { return this._SpriteRendererHighlightGem; },
    set: function(v) { this._SpriteRendererHighlightGem = (v === undefined ? new ut.Entity : v); },
  },
  GemType: {
    get: function() { return this._GemType; },
    set: function(v) { this._GemType = (v|0); },
  },
  HighlightAlpha: {
    get: function() { return this._HighlightAlpha; },
    set: function(v) { this._HighlightAlpha = (+(v===undefined ? 0 : v)); },
  },
  IsPossibleMatch: {
    get: function() { return this._IsPossibleMatch; },
    set: function(v) { this._IsPossibleMatch = (v ? true : false); },
  },
  PowerUp: {
    get: function() { return this._PowerUp; },
    set: function(v) { this._PowerUp = (v|0); },
  },
  CurrentPowerUpVisual: {
    get: function() { return this._CurrentPowerUpVisual; },
    set: function(v) { this._CurrentPowerUpVisual = (v|0); },
  },
  RowPowerUpVisual: {
    get: function() { return this._RowPowerUpVisual; },
    set: function(v) { this._RowPowerUpVisual = (v === undefined ? new ut.Entity : v); },
  },
  ColumnPowerUpVisual: {
    get: function() { return this._ColumnPowerUpVisual; },
    set: function(v) { this._ColumnPowerUpVisual = (v === undefined ? new ut.Entity : v); },
  },
  DiagonalPowerUpVisual: {
    get: function() { return this._DiagonalPowerUpVisual; },
    set: function(v) { this._DiagonalPowerUpVisual = (v === undefined ? new ut.Entity : v); },
  },
  SquarePowerUpVisual: {
    get: function() { return this._SquarePowerUpVisual; },
    set: function(v) { this._SquarePowerUpVisual = (v === undefined ? new ut.Entity : v); },
  },
  SameColorPowerUpVisual: {
    get: function() { return this._SameColorPowerUpVisual; },
    set: function(v) { this._SameColorPowerUpVisual = (v === undefined ? new ut.Entity : v); },
  },
});
game.Gem._size = 80;
game.Gem._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Gem.prototype);
  v._CellHashKey = (/*64BIT*/HEAP32[(ptr+0)>>2]);
  v._IsSelected = (HEAP8[ptr+8]?true:false);
  v._IsFalling = (HEAP8[ptr+9]?true:false);
  v._IsSwapping = (HEAP8[ptr+10]?true:false);
  v._SpriteRendererHighlightGem = ut.Entity._fromPtr(ptr+12);
  v._GemType = HEAP32[(ptr+20)>>2];
  v._HighlightAlpha = HEAPF32[(ptr+24)>>2];
  v._IsPossibleMatch = (HEAP8[ptr+28]?true:false);
  v._PowerUp = HEAP32[(ptr+32)>>2];
  v._CurrentPowerUpVisual = HEAP32[(ptr+36)>>2];
  v._RowPowerUpVisual = ut.Entity._fromPtr(ptr+40);
  v._ColumnPowerUpVisual = ut.Entity._fromPtr(ptr+48);
  v._DiagonalPowerUpVisual = ut.Entity._fromPtr(ptr+56);
  v._SquarePowerUpVisual = ut.Entity._fromPtr(ptr+64);
  v._SameColorPowerUpVisual = ut.Entity._fromPtr(ptr+72);
  return v;
};
game.Gem._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = /*64BIT*/v.CellHashKey;
  HEAP8[ptr+8] = (v.IsSelected)?1:0;
  HEAP8[ptr+9] = (v.IsFalling)?1:0;
  HEAP8[ptr+10] = (v.IsSwapping)?1:0;
  ut.Entity._toPtr(ptr+12, v.SpriteRendererHighlightGem);
  HEAP32[(ptr+20)>>2] = v.GemType;
  HEAPF32[(ptr+24)>>2] = v.HighlightAlpha;
  HEAP8[ptr+28] = (v.IsPossibleMatch)?1:0;
  HEAP32[(ptr+32)>>2] = v.PowerUp;
  HEAP32[(ptr+36)>>2] = v.CurrentPowerUpVisual;
  ut.Entity._toPtr(ptr+40, v.RowPowerUpVisual);
  ut.Entity._toPtr(ptr+48, v.ColumnPowerUpVisual);
  ut.Entity._toPtr(ptr+56, v.DiagonalPowerUpVisual);
  ut.Entity._toPtr(ptr+64, v.SquarePowerUpVisual);
  ut.Entity._toPtr(ptr+72, v.SameColorPowerUpVisual);
};
game.Gem._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = /*64BIT*/v.CellHashKey;
  HEAP8[ptr+8] = (v.IsSelected)?1:0;
  HEAP8[ptr+9] = (v.IsFalling)?1:0;
  HEAP8[ptr+10] = (v.IsSwapping)?1:0;
  ut.Entity._toPtr(ptr+12, v.SpriteRendererHighlightGem);
  HEAP32[(ptr+20)>>2] = v.GemType;
  HEAPF32[(ptr+24)>>2] = v.HighlightAlpha;
  HEAP8[ptr+28] = (v.IsPossibleMatch)?1:0;
  HEAP32[(ptr+32)>>2] = v.PowerUp;
  HEAP32[(ptr+36)>>2] = v.CurrentPowerUpVisual;
  ut.Entity._toPtr(ptr+40, v.RowPowerUpVisual);
  ut.Entity._toPtr(ptr+48, v.ColumnPowerUpVisual);
  ut.Entity._toPtr(ptr+56, v.DiagonalPowerUpVisual);
  ut.Entity._toPtr(ptr+64, v.SquarePowerUpVisual);
  ut.Entity._toPtr(ptr+72, v.SameColorPowerUpVisual);
};
game.Gem._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(80);
  if (v) game.Gem._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Gem.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Gem.StorageView.prototype = Object.create(null);
game.Gem.StorageView.prototype.constructor = game.Gem.StorageView;
game.Gem._view = game.Gem.StorageView;
game.Gem.StorageView._isSharedComp = game.Gem._isSharedComp = false;
game.Gem.StorageView._fromPtr = game.Gem._fromPtr;
game.Gem.StorageView._toPtr = game.Gem._toPtr;
game.Gem.StorageView._tempHeapPtr = game.Gem._tempHeapPtr;
game.Gem.StorageView._size = game.Gem._size;
game.Gem.StorageView.prototype.$advance = function() {
  this._ptr += 80;
};
Object.defineProperties(game.Gem.StorageView.prototype, {
  CellHashKey: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+0)>>2]); },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = /*64BIT*/v; },
  },
  IsSelected: {
    get: function() { return (HEAP8[this._ptr+8]?true:false); },
    set: function(v) { HEAP8[this._ptr+8] = (v)?1:0; },
  },
  IsFalling: {
    get: function() { return (HEAP8[this._ptr+9]?true:false); },
    set: function(v) { HEAP8[this._ptr+9] = (v)?1:0; },
  },
  IsSwapping: {
    get: function() { return (HEAP8[this._ptr+10]?true:false); },
    set: function(v) { HEAP8[this._ptr+10] = (v)?1:0; },
  },
  SpriteRendererHighlightGem: {
    get: function() { return ut.Entity._fromPtr(this._ptr+12); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+12, v); },
  },
  GemType: {
    get: function() { return HEAP32[(this._ptr+20)>>2]; },
    set: function(v) { HEAP32[(this._ptr+20)>>2] = v; },
  },
  HighlightAlpha: {
    get: function() { return HEAPF32[(this._ptr+24)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+24)>>2] = v; },
  },
  IsPossibleMatch: {
    get: function() { return (HEAP8[this._ptr+28]?true:false); },
    set: function(v) { HEAP8[this._ptr+28] = (v)?1:0; },
  },
  PowerUp: {
    get: function() { return HEAP32[(this._ptr+32)>>2]; },
    set: function(v) { HEAP32[(this._ptr+32)>>2] = v; },
  },
  CurrentPowerUpVisual: {
    get: function() { return HEAP32[(this._ptr+36)>>2]; },
    set: function(v) { HEAP32[(this._ptr+36)>>2] = v; },
  },
  RowPowerUpVisual: {
    get: function() { return ut.Entity._fromPtr(this._ptr+40); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+40, v); },
  },
  ColumnPowerUpVisual: {
    get: function() { return ut.Entity._fromPtr(this._ptr+48); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+48, v); },
  },
  DiagonalPowerUpVisual: {
    get: function() { return ut.Entity._fromPtr(this._ptr+56); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+56, v); },
  },
  SquarePowerUpVisual: {
    get: function() { return ut.Entity._fromPtr(this._ptr+64); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+64, v); },
  },
  SameColorPowerUpVisual: {
    get: function() { return ut.Entity._fromPtr(this._ptr+72); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+72, v); },
  },
});
game.Gem._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Gem is a POD type, so a JavaScript side copy constructor game.Gem._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Gem._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Gem', 80, [
    {name: 'CellHashKey', offset: 0, type: ut.meta.getType('int64')},
    {name: 'IsSelected', offset: 8, type: ut.meta.getType('bool')},
    {name: 'IsFalling', offset: 9, type: ut.meta.getType('bool')},
    {name: 'IsSwapping', offset: 10, type: ut.meta.getType('bool')},
    {name: 'SpriteRendererHighlightGem', offset: 12, type: ut.meta.getType('ut.Entity')},
    {name: 'GemType', offset: 20, type: ut.meta.getType('int32')},
    {name: 'HighlightAlpha', offset: 24, type: ut.meta.getType('float')},
    {name: 'IsPossibleMatch', offset: 28, type: ut.meta.getType('bool')},
    {name: 'PowerUp', offset: 32, type: ut.meta.getType('game.GemPowerUpTypes')},
    {name: 'CurrentPowerUpVisual', offset: 36, type: ut.meta.getType('game.GemPowerUpTypes')},
    {name: 'RowPowerUpVisual', offset: 40, type: ut.meta.getType('ut.Entity')},
    {name: 'ColumnPowerUpVisual', offset: 48, type: ut.meta.getType('ut.Entity')},
    {name: 'DiagonalPowerUpVisual', offset: 56, type: ut.meta.getType('ut.Entity')},
    {name: 'SquarePowerUpVisual', offset: 64, type: ut.meta.getType('ut.Entity')},
    {name: 'SameColorPowerUpVisual', offset: 72, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.Gem, { cid: { configurable: true, get: function() { delete game.Gem.cid; var offsetsPtr = ut.tempHeapPtrI32([12,40,48,56,64,72]); var offsetsCount = 6; return game.Gem.cid = Module._ut_component_register_cid_with_type(game.Gem._typeDesc, 8, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Gem.StorageView, { cid: { configurable: true, get: function() { return game.Gem.cid; } } });
game.Gem.CellHashKey = { $ofs:0, $t:"System.Int64", $c:game.Gem };
game.Gem.IsSelected = { $ofs:8, $t:"bool", $c:game.Gem };
game.Gem.IsFalling = { $ofs:9, $t:"bool", $c:game.Gem };
game.Gem.IsSwapping = { $ofs:10, $t:"bool", $c:game.Gem };
game.Gem.SpriteRendererHighlightGem = { $ofs:12, $t:"ut.Entity", $c:game.Gem };
game.Gem.SpriteRendererHighlightGem.index = { $ofs:12, $t:"int32_t", $c:game.Gem };
game.Gem.SpriteRendererHighlightGem.version = { $ofs:16, $t:"int32_t", $c:game.Gem };
game.Gem.GemType = { $ofs:20, $t:"int32_t", $c:game.Gem };
game.Gem.HighlightAlpha = { $ofs:24, $t:"float", $c:game.Gem };
game.Gem.IsPossibleMatch = { $ofs:28, $t:"bool", $c:game.Gem };
game.Gem.PowerUp = { $ofs:32, $t:"game.GemPowerUpTypes", $c:game.Gem };
game.Gem.CurrentPowerUpVisual = { $ofs:36, $t:"game.GemPowerUpTypes", $c:game.Gem };
game.Gem.RowPowerUpVisual = { $ofs:40, $t:"ut.Entity", $c:game.Gem };
game.Gem.RowPowerUpVisual.index = { $ofs:40, $t:"int32_t", $c:game.Gem };
game.Gem.RowPowerUpVisual.version = { $ofs:44, $t:"int32_t", $c:game.Gem };
game.Gem.ColumnPowerUpVisual = { $ofs:48, $t:"ut.Entity", $c:game.Gem };
game.Gem.ColumnPowerUpVisual.index = { $ofs:48, $t:"int32_t", $c:game.Gem };
game.Gem.ColumnPowerUpVisual.version = { $ofs:52, $t:"int32_t", $c:game.Gem };
game.Gem.DiagonalPowerUpVisual = { $ofs:56, $t:"ut.Entity", $c:game.Gem };
game.Gem.DiagonalPowerUpVisual.index = { $ofs:56, $t:"int32_t", $c:game.Gem };
game.Gem.DiagonalPowerUpVisual.version = { $ofs:60, $t:"int32_t", $c:game.Gem };
game.Gem.SquarePowerUpVisual = { $ofs:64, $t:"ut.Entity", $c:game.Gem };
game.Gem.SquarePowerUpVisual.index = { $ofs:64, $t:"int32_t", $c:game.Gem };
game.Gem.SquarePowerUpVisual.version = { $ofs:68, $t:"int32_t", $c:game.Gem };
game.Gem.SameColorPowerUpVisual = { $ofs:72, $t:"ut.Entity", $c:game.Gem };
game.Gem.SameColorPowerUpVisual.index = { $ofs:72, $t:"int32_t", $c:game.Gem };
game.Gem.SameColorPowerUpVisual.version = { $ofs:76, $t:"int32_t", $c:game.Gem };
game.GemFallTweenEndCallback = function(arg0) {
  this._GemEntity = (arg0 === undefined ? new ut.Entity : arg0);
};
game.GemFallTweenEndCallback.prototype = Object.create(null);
game.GemFallTweenEndCallback.prototype.constructor = game.GemFallTweenEndCallback;
Object.defineProperties(game.GemFallTweenEndCallback.prototype, {
  GemEntity: {
    get: function() { return this._GemEntity; },
    set: function(v) { this._GemEntity = (v === undefined ? new ut.Entity : v); },
  },
});
game.GemFallTweenEndCallback._size = 8;
game.GemFallTweenEndCallback._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GemFallTweenEndCallback.prototype);
  v._GemEntity = ut.Entity._fromPtr(ptr+0);
  return v;
};
game.GemFallTweenEndCallback._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.GemEntity);
};
game.GemFallTweenEndCallback._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.GemEntity);
};
game.GemFallTweenEndCallback._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.GemFallTweenEndCallback._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GemFallTweenEndCallback.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GemFallTweenEndCallback.StorageView.prototype = Object.create(null);
game.GemFallTweenEndCallback.StorageView.prototype.constructor = game.GemFallTweenEndCallback.StorageView;
game.GemFallTweenEndCallback._view = game.GemFallTweenEndCallback.StorageView;
game.GemFallTweenEndCallback.StorageView._isSharedComp = game.GemFallTweenEndCallback._isSharedComp = false;
game.GemFallTweenEndCallback.StorageView._fromPtr = game.GemFallTweenEndCallback._fromPtr;
game.GemFallTweenEndCallback.StorageView._toPtr = game.GemFallTweenEndCallback._toPtr;
game.GemFallTweenEndCallback.StorageView._tempHeapPtr = game.GemFallTweenEndCallback._tempHeapPtr;
game.GemFallTweenEndCallback.StorageView._size = game.GemFallTweenEndCallback._size;
game.GemFallTweenEndCallback.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.GemFallTweenEndCallback.StorageView.prototype, {
  GemEntity: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
});
game.GemFallTweenEndCallback._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.GemFallTweenEndCallback is a POD type, so a JavaScript side copy constructor game.GemFallTweenEndCallback._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.GemFallTweenEndCallback._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.GemFallTweenEndCallback', 8, [
    {name: 'GemEntity', offset: 0, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.GemFallTweenEndCallback, { cid: { configurable: true, get: function() { delete game.GemFallTweenEndCallback.cid; var offsetsPtr = ut.tempHeapPtrI32([0]); var offsetsCount = 1; return game.GemFallTweenEndCallback.cid = Module._ut_component_register_cid_with_type(game.GemFallTweenEndCallback._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.GemFallTweenEndCallback.StorageView, { cid: { configurable: true, get: function() { return game.GemFallTweenEndCallback.cid; } } });
game.GemFallTweenEndCallback.GemEntity = { $ofs:0, $t:"ut.Entity", $c:game.GemFallTweenEndCallback };
game.GemFallTweenEndCallback.GemEntity.index = { $ofs:0, $t:"int32_t", $c:game.GemFallTweenEndCallback };
game.GemFallTweenEndCallback.GemEntity.version = { $ofs:4, $t:"int32_t", $c:game.GemFallTweenEndCallback };
game.GemSwap = function() {
};
game.GemSwap.prototype = Object.create(null);
game.GemSwap.prototype.constructor = game.GemSwap;
Object.defineProperties(game.GemSwap.prototype, {
});
game.GemSwap._size = 1;
game.GemSwap._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GemSwap.prototype);
  return v;
};
game.GemSwap._toPtr = function(ptr, v) {
};
game.GemSwap._toTempHeapPtr = function(ptr, v) {
};
game.GemSwap._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.GemSwap._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GemSwap.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GemSwap.StorageView.prototype = Object.create(null);
game.GemSwap.StorageView.prototype.constructor = game.GemSwap.StorageView;
game.GemSwap._view = game.GemSwap.StorageView;
game.GemSwap.StorageView._isSharedComp = game.GemSwap._isSharedComp = false;
game.GemSwap.StorageView._fromPtr = game.GemSwap._fromPtr;
game.GemSwap.StorageView._toPtr = game.GemSwap._toPtr;
game.GemSwap.StorageView._tempHeapPtr = game.GemSwap._tempHeapPtr;
game.GemSwap.StorageView._size = game.GemSwap._size;
game.GemSwap.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.GemSwap.StorageView.prototype, {
});
game.GemSwap._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.GemSwap is a POD type, so a JavaScript side copy constructor game.GemSwap._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.GemSwap._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.GemSwap', 1, []);
})();
Object.defineProperties(game.GemSwap, { cid: { configurable: true, get: function() { delete game.GemSwap.cid; var offsetsPtr = 0, offsetsCount = 0; return game.GemSwap.cid = Module._ut_component_register_cid_with_type(game.GemSwap._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.GemSwap.StorageView, { cid: { configurable: true, get: function() { return game.GemSwap.cid; } } });
game.GemSwapTweenEndCallback = function(arg0) {
  this._GemEntity = (arg0 === undefined ? new ut.Entity : arg0);
};
game.GemSwapTweenEndCallback.prototype = Object.create(null);
game.GemSwapTweenEndCallback.prototype.constructor = game.GemSwapTweenEndCallback;
Object.defineProperties(game.GemSwapTweenEndCallback.prototype, {
  GemEntity: {
    get: function() { return this._GemEntity; },
    set: function(v) { this._GemEntity = (v === undefined ? new ut.Entity : v); },
  },
});
game.GemSwapTweenEndCallback._size = 8;
game.GemSwapTweenEndCallback._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GemSwapTweenEndCallback.prototype);
  v._GemEntity = ut.Entity._fromPtr(ptr+0);
  return v;
};
game.GemSwapTweenEndCallback._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.GemEntity);
};
game.GemSwapTweenEndCallback._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.GemEntity);
};
game.GemSwapTweenEndCallback._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.GemSwapTweenEndCallback._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GemSwapTweenEndCallback.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GemSwapTweenEndCallback.StorageView.prototype = Object.create(null);
game.GemSwapTweenEndCallback.StorageView.prototype.constructor = game.GemSwapTweenEndCallback.StorageView;
game.GemSwapTweenEndCallback._view = game.GemSwapTweenEndCallback.StorageView;
game.GemSwapTweenEndCallback.StorageView._isSharedComp = game.GemSwapTweenEndCallback._isSharedComp = false;
game.GemSwapTweenEndCallback.StorageView._fromPtr = game.GemSwapTweenEndCallback._fromPtr;
game.GemSwapTweenEndCallback.StorageView._toPtr = game.GemSwapTweenEndCallback._toPtr;
game.GemSwapTweenEndCallback.StorageView._tempHeapPtr = game.GemSwapTweenEndCallback._tempHeapPtr;
game.GemSwapTweenEndCallback.StorageView._size = game.GemSwapTweenEndCallback._size;
game.GemSwapTweenEndCallback.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.GemSwapTweenEndCallback.StorageView.prototype, {
  GemEntity: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
});
game.GemSwapTweenEndCallback._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.GemSwapTweenEndCallback is a POD type, so a JavaScript side copy constructor game.GemSwapTweenEndCallback._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.GemSwapTweenEndCallback._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.GemSwapTweenEndCallback', 8, [
    {name: 'GemEntity', offset: 0, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.GemSwapTweenEndCallback, { cid: { configurable: true, get: function() { delete game.GemSwapTweenEndCallback.cid; var offsetsPtr = ut.tempHeapPtrI32([0]); var offsetsCount = 1; return game.GemSwapTweenEndCallback.cid = Module._ut_component_register_cid_with_type(game.GemSwapTweenEndCallback._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.GemSwapTweenEndCallback.StorageView, { cid: { configurable: true, get: function() { return game.GemSwapTweenEndCallback.cid; } } });
game.GemSwapTweenEndCallback.GemEntity = { $ofs:0, $t:"ut.Entity", $c:game.GemSwapTweenEndCallback };
game.GemSwapTweenEndCallback.GemEntity.index = { $ofs:0, $t:"int32_t", $c:game.GemSwapTweenEndCallback };
game.GemSwapTweenEndCallback.GemEntity.version = { $ofs:4, $t:"int32_t", $c:game.GemSwapTweenEndCallback };
game.Matched = function(arg0, arg1) {
  this._CreatedPowerUp = (arg0|0);
  this._IsMatch = (arg1 ? true : false);
};
game.Matched.prototype = Object.create(null);
game.Matched.prototype.constructor = game.Matched;
Object.defineProperties(game.Matched.prototype, {
  CreatedPowerUp: {
    get: function() { return this._CreatedPowerUp; },
    set: function(v) { this._CreatedPowerUp = (v|0); },
  },
  IsMatch: {
    get: function() { return this._IsMatch; },
    set: function(v) { this._IsMatch = (v ? true : false); },
  },
});
game.Matched._size = 8;
game.Matched._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Matched.prototype);
  v._CreatedPowerUp = HEAP32[(ptr+0)>>2];
  v._IsMatch = (HEAP8[ptr+4]?true:false);
  return v;
};
game.Matched._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.CreatedPowerUp;
  HEAP8[ptr+4] = (v.IsMatch)?1:0;
};
game.Matched._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.CreatedPowerUp;
  HEAP8[ptr+4] = (v.IsMatch)?1:0;
};
game.Matched._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.Matched._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Matched.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Matched.StorageView.prototype = Object.create(null);
game.Matched.StorageView.prototype.constructor = game.Matched.StorageView;
game.Matched._view = game.Matched.StorageView;
game.Matched.StorageView._isSharedComp = game.Matched._isSharedComp = false;
game.Matched.StorageView._fromPtr = game.Matched._fromPtr;
game.Matched.StorageView._toPtr = game.Matched._toPtr;
game.Matched.StorageView._tempHeapPtr = game.Matched._tempHeapPtr;
game.Matched.StorageView._size = game.Matched._size;
game.Matched.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.Matched.StorageView.prototype, {
  CreatedPowerUp: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  IsMatch: {
    get: function() { return (HEAP8[this._ptr+4]?true:false); },
    set: function(v) { HEAP8[this._ptr+4] = (v)?1:0; },
  },
});
game.Matched._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Matched is a POD type, so a JavaScript side copy constructor game.Matched._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Matched._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Matched', 8, [
    {name: 'CreatedPowerUp', offset: 0, type: ut.meta.getType('game.GemPowerUpTypes')},
    {name: 'IsMatch', offset: 4, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.Matched, { cid: { configurable: true, get: function() { delete game.Matched.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Matched.cid = Module._ut_component_register_cid_with_type(game.Matched._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Matched.StorageView, { cid: { configurable: true, get: function() { return game.Matched.cid; } } });
game.Matched.CreatedPowerUp = { $ofs:0, $t:"game.GemPowerUpTypes", $c:game.Matched };
game.Matched.IsMatch = { $ofs:4, $t:"bool", $c:game.Matched };
game.MatchPossibility = function(arg0, arg1, arg2, arg3) {
  this._HintTimer = (+(arg0===undefined ? 0 : arg0));
  this._SwapGem1HashKey = (arg1|0);
  this._SwapGem2HashKey = (arg2|0);
  this._NeedsSwap = (arg3 ? true : false);
};
game.MatchPossibility.prototype = Object.create(null);
game.MatchPossibility.prototype.constructor = game.MatchPossibility;
Object.defineProperties(game.MatchPossibility.prototype, {
  HintTimer: {
    get: function() { return this._HintTimer; },
    set: function(v) { this._HintTimer = (+(v===undefined ? 0 : v)); },
  },
  SwapGem1HashKey: {
    get: function() { return this._SwapGem1HashKey; },
    set: function(v) { this._SwapGem1HashKey = (v|0); },
  },
  SwapGem2HashKey: {
    get: function() { return this._SwapGem2HashKey; },
    set: function(v) { this._SwapGem2HashKey = (v|0); },
  },
  NeedsSwap: {
    get: function() { return this._NeedsSwap; },
    set: function(v) { this._NeedsSwap = (v ? true : false); },
  },
});
game.MatchPossibility._size = 16;
game.MatchPossibility._fromPtr = function(ptr, v) {
  v = v || Object.create(game.MatchPossibility.prototype);
  v._HintTimer = HEAPF32[(ptr+0)>>2];
  v._SwapGem1HashKey = HEAP32[(ptr+4)>>2];
  v._SwapGem2HashKey = HEAP32[(ptr+8)>>2];
  v._NeedsSwap = (HEAP8[ptr+12]?true:false);
  return v;
};
game.MatchPossibility._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.HintTimer;
  HEAP32[(ptr+4)>>2] = v.SwapGem1HashKey;
  HEAP32[(ptr+8)>>2] = v.SwapGem2HashKey;
  HEAP8[ptr+12] = (v.NeedsSwap)?1:0;
};
game.MatchPossibility._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.HintTimer;
  HEAP32[(ptr+4)>>2] = v.SwapGem1HashKey;
  HEAP32[(ptr+8)>>2] = v.SwapGem2HashKey;
  HEAP8[ptr+12] = (v.NeedsSwap)?1:0;
};
game.MatchPossibility._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.MatchPossibility._toTempHeapPtr(ptr, v);
  return ptr;
};
game.MatchPossibility.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.MatchPossibility.StorageView.prototype = Object.create(null);
game.MatchPossibility.StorageView.prototype.constructor = game.MatchPossibility.StorageView;
game.MatchPossibility._view = game.MatchPossibility.StorageView;
game.MatchPossibility.StorageView._isSharedComp = game.MatchPossibility._isSharedComp = false;
game.MatchPossibility.StorageView._fromPtr = game.MatchPossibility._fromPtr;
game.MatchPossibility.StorageView._toPtr = game.MatchPossibility._toPtr;
game.MatchPossibility.StorageView._tempHeapPtr = game.MatchPossibility._tempHeapPtr;
game.MatchPossibility.StorageView._size = game.MatchPossibility._size;
game.MatchPossibility.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.MatchPossibility.StorageView.prototype, {
  HintTimer: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  SwapGem1HashKey: {
    get: function() { return HEAP32[(this._ptr+4)>>2]; },
    set: function(v) { HEAP32[(this._ptr+4)>>2] = v; },
  },
  SwapGem2HashKey: {
    get: function() { return HEAP32[(this._ptr+8)>>2]; },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = v; },
  },
  NeedsSwap: {
    get: function() { return (HEAP8[this._ptr+12]?true:false); },
    set: function(v) { HEAP8[this._ptr+12] = (v)?1:0; },
  },
});
game.MatchPossibility._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.MatchPossibility is a POD type, so a JavaScript side copy constructor game.MatchPossibility._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.MatchPossibility._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.MatchPossibility', 16, [
    {name: 'HintTimer', offset: 0, type: ut.meta.getType('float')},
    {name: 'SwapGem1HashKey', offset: 4, type: ut.meta.getType('int32')},
    {name: 'SwapGem2HashKey', offset: 8, type: ut.meta.getType('int32')},
    {name: 'NeedsSwap', offset: 12, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.MatchPossibility, { cid: { configurable: true, get: function() { delete game.MatchPossibility.cid; var offsetsPtr = 0, offsetsCount = 0; return game.MatchPossibility.cid = Module._ut_component_register_cid_with_type(game.MatchPossibility._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.MatchPossibility.StorageView, { cid: { configurable: true, get: function() { return game.MatchPossibility.cid; } } });
game.MatchPossibility.HintTimer = { $ofs:0, $t:"float", $c:game.MatchPossibility };
game.MatchPossibility.SwapGem1HashKey = { $ofs:4, $t:"int32_t", $c:game.MatchPossibility };
game.MatchPossibility.SwapGem2HashKey = { $ofs:8, $t:"int32_t", $c:game.MatchPossibility };
game.MatchPossibility.NeedsSwap = { $ofs:12, $t:"bool", $c:game.MatchPossibility };
game.Level = function(arg0, arg1, arg2, arg3, arg4) {
  this._LevelID = (arg0|0);
  this._Skin = (arg1|0);
  this._MaxMoveCount = (arg2|0);
  this._StartPowerUps = (arg3 === undefined ? new Array() : ((arg3 instanceof Array) ? arg3 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._MissingGems = (arg4 === undefined ? new Array() : ((arg4 instanceof Array) ? arg4 : (function() { throw new Error('Assigning non-array to array field'); })()));
};
game.Level.prototype = Object.create(null);
game.Level.prototype.constructor = game.Level;
Object.defineProperties(game.Level.prototype, {
  LevelID: {
    get: function() { return this._LevelID; },
    set: function(v) { this._LevelID = (v|0); },
  },
  Skin: {
    get: function() { return this._Skin; },
    set: function(v) { this._Skin = (v|0); },
  },
  MaxMoveCount: {
    get: function() { return this._MaxMoveCount; },
    set: function(v) { this._MaxMoveCount = (v|0); },
  },
  StartPowerUps: {
    get: function() { return this._StartPowerUps; },
    set: function(v) { this._StartPowerUps = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  MissingGems: {
    get: function() { return this._MissingGems; },
    set: function(v) { this._MissingGems = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
});
game.Level._size = 36;
game.Level._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Level.prototype);
  v._LevelID = HEAP32[(ptr+0)>>2];
  v._Skin = HEAP32[(ptr+4)>>2];
  v._MaxMoveCount = HEAP32[(ptr+8)>>2];
  v._StartPowerUps = ut.nativeBufferToJsArray(ptr+12, 4, function(p) { return HEAP32[(p)>>2]; });
  v._MissingGems = ut.nativeBufferToJsArray(ptr+24, 4, function(p) { return HEAP32[(p)>>2]; });
  return v;
};
game.Level._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.LevelID;
  HEAP32[(ptr+4)>>2] = v.Skin;
  HEAP32[(ptr+8)>>2] = v.MaxMoveCount;
  ut.jsArrayToExistingNativeBuffer_pod(v.StartPowerUps, ptr+12, 4, function(p, v) { HEAP32[(p)>>2] = v; });
  ut.jsArrayToExistingNativeBuffer_pod(v.MissingGems, ptr+24, 4, function(p, v) { HEAP32[(p)>>2] = v; });
};
game.Level._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.LevelID;
  HEAP32[(ptr+4)>>2] = v.Skin;
  HEAP32[(ptr+8)>>2] = v.MaxMoveCount;
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.StartPowerUps, ptr+12, 4, function(p, v) { HEAP32[(p)>>2] = v; });
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.MissingGems, ptr+24, 4, function(p, v) { HEAP32[(p)>>2] = v; });
};
game.Level._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(36);
  if (v) game.Level._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Level.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Level.StorageView.prototype = Object.create(null);
game.Level.StorageView.prototype.constructor = game.Level.StorageView;
game.Level._view = game.Level.StorageView;
game.Level.StorageView._isSharedComp = game.Level._isSharedComp = false;
game.Level.StorageView._fromPtr = game.Level._fromPtr;
game.Level.StorageView._toPtr = game.Level._toPtr;
game.Level.StorageView._tempHeapPtr = game.Level._tempHeapPtr;
game.Level.StorageView._size = game.Level._size;
game.Level.StorageView.prototype.$advance = function() {
  this._ptr += 36;
};
Object.defineProperties(game.Level.StorageView.prototype, {
  LevelID: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  Skin: {
    get: function() { return HEAP32[(this._ptr+4)>>2]; },
    set: function(v) { HEAP32[(this._ptr+4)>>2] = v; },
  },
  MaxMoveCount: {
    get: function() { return HEAP32[(this._ptr+8)>>2]; },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = v; },
  },
  StartPowerUps: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+12, 4, function(p) { return HEAP32[(p)>>2]; }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+12, 4, function(p, v) { HEAP32[(p)>>2] = v; }); },
  },
  MissingGems: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+24, 4, function(p) { return HEAP32[(p)>>2]; }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+24, 4, function(p, v) { HEAP32[(p)>>2] = v; }); },
  },
});
game.Level._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativebuffer_pod_placement_delete(ptr + 12);
  Module._ut_nativebuffer_pod_placement_delete(ptr + 24);
};
game.Level._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  for(var i = 0; i < 4; ++i) HEAPU8[dst+0+i] = HEAPU8[src+0+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+4+i] = HEAPU8[src+4+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  Module._ut_nativebuffer_pod_copy_construct(dst + 12, src + 12, 4);
  Module._ut_nativebuffer_pod_copy_construct(dst + 24, src + 24, 4);
};
game.Level._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Level', 36, [
    {name: 'LevelID', offset: 0, type: ut.meta.getType('int32')},
    {name: 'Skin', offset: 4, type: ut.meta.getType('game.SkinTypes')},
    {name: 'MaxMoveCount', offset: 8, type: ut.meta.getType('int32')},
    {name: 'StartPowerUps', offset: 12, type: ut.meta.getType('ut.NativeBuffer<game.GemPowerUpTypes>')},
    {name: 'MissingGems', offset: 24, type: ut.meta.getType('ut.NativeBuffer<game.GemTypes>')}
  ]);
})();
Object.defineProperties(game.Level, { cid: { configurable: true, get: function() { delete game.Level.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Level.cid = Module._ut_component_register_cid_with_type(game.Level._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.Level._dtorFn), ut.CopyFn._cb.token_for(game.Level._copyFn)); } } });
Object.defineProperties(game.Level.StorageView, { cid: { configurable: true, get: function() { return game.Level.cid; } } });
game.Level.LevelID = { $ofs:0, $t:"int32_t", $c:game.Level };
game.Level.Skin = { $ofs:4, $t:"game.SkinTypes", $c:game.Level };
game.Level.MaxMoveCount = { $ofs:8, $t:"int32_t", $c:game.Level };
game.Level.StartPowerUps = { $ofs:12, $t:"ut.DynamicArray`1", $c:game.Level };
game.Level.MissingGems = { $ofs:24, $t:"ut.DynamicArray`1", $c:game.Level };
game.LevelEggObjective = function(arg0, arg1, arg2) {
  this._EggsInGridAtStart = (arg0|0);
  this._EggsToSpawnOnEggCollected = (arg1|0);
  this._CollectedEggs = (arg2|0);
};
game.LevelEggObjective.prototype = Object.create(null);
game.LevelEggObjective.prototype.constructor = game.LevelEggObjective;
Object.defineProperties(game.LevelEggObjective.prototype, {
  EggsInGridAtStart: {
    get: function() { return this._EggsInGridAtStart; },
    set: function(v) { this._EggsInGridAtStart = (v|0); },
  },
  EggsToSpawnOnEggCollected: {
    get: function() { return this._EggsToSpawnOnEggCollected; },
    set: function(v) { this._EggsToSpawnOnEggCollected = (v|0); },
  },
  CollectedEggs: {
    get: function() { return this._CollectedEggs; },
    set: function(v) { this._CollectedEggs = (v|0); },
  },
});
game.LevelEggObjective._size = 12;
game.LevelEggObjective._fromPtr = function(ptr, v) {
  v = v || Object.create(game.LevelEggObjective.prototype);
  v._EggsInGridAtStart = HEAP32[(ptr+0)>>2];
  v._EggsToSpawnOnEggCollected = HEAP32[(ptr+4)>>2];
  v._CollectedEggs = HEAP32[(ptr+8)>>2];
  return v;
};
game.LevelEggObjective._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.EggsInGridAtStart;
  HEAP32[(ptr+4)>>2] = v.EggsToSpawnOnEggCollected;
  HEAP32[(ptr+8)>>2] = v.CollectedEggs;
};
game.LevelEggObjective._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.EggsInGridAtStart;
  HEAP32[(ptr+4)>>2] = v.EggsToSpawnOnEggCollected;
  HEAP32[(ptr+8)>>2] = v.CollectedEggs;
};
game.LevelEggObjective._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(12);
  if (v) game.LevelEggObjective._toTempHeapPtr(ptr, v);
  return ptr;
};
game.LevelEggObjective.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.LevelEggObjective.StorageView.prototype = Object.create(null);
game.LevelEggObjective.StorageView.prototype.constructor = game.LevelEggObjective.StorageView;
game.LevelEggObjective._view = game.LevelEggObjective.StorageView;
game.LevelEggObjective.StorageView._isSharedComp = game.LevelEggObjective._isSharedComp = false;
game.LevelEggObjective.StorageView._fromPtr = game.LevelEggObjective._fromPtr;
game.LevelEggObjective.StorageView._toPtr = game.LevelEggObjective._toPtr;
game.LevelEggObjective.StorageView._tempHeapPtr = game.LevelEggObjective._tempHeapPtr;
game.LevelEggObjective.StorageView._size = game.LevelEggObjective._size;
game.LevelEggObjective.StorageView.prototype.$advance = function() {
  this._ptr += 12;
};
Object.defineProperties(game.LevelEggObjective.StorageView.prototype, {
  EggsInGridAtStart: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  EggsToSpawnOnEggCollected: {
    get: function() { return HEAP32[(this._ptr+4)>>2]; },
    set: function(v) { HEAP32[(this._ptr+4)>>2] = v; },
  },
  CollectedEggs: {
    get: function() { return HEAP32[(this._ptr+8)>>2]; },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = v; },
  },
});
game.LevelEggObjective._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.LevelEggObjective is a POD type, so a JavaScript side copy constructor game.LevelEggObjective._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.LevelEggObjective._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.LevelEggObjective', 12, [
    {name: 'EggsInGridAtStart', offset: 0, type: ut.meta.getType('int32')},
    {name: 'EggsToSpawnOnEggCollected', offset: 4, type: ut.meta.getType('int32')},
    {name: 'CollectedEggs', offset: 8, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(game.LevelEggObjective, { cid: { configurable: true, get: function() { delete game.LevelEggObjective.cid; var offsetsPtr = 0, offsetsCount = 0; return game.LevelEggObjective.cid = Module._ut_component_register_cid_with_type(game.LevelEggObjective._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.LevelEggObjective.StorageView, { cid: { configurable: true, get: function() { return game.LevelEggObjective.cid; } } });
game.LevelEggObjective.EggsInGridAtStart = { $ofs:0, $t:"int32_t", $c:game.LevelEggObjective };
game.LevelEggObjective.EggsToSpawnOnEggCollected = { $ofs:4, $t:"int32_t", $c:game.LevelEggObjective };
game.LevelEggObjective.CollectedEggs = { $ofs:8, $t:"int32_t", $c:game.LevelEggObjective };
game.LevelPointObjective = function(arg0) {
  this._ScoreObjective = (arg0|0);
};
game.LevelPointObjective.prototype = Object.create(null);
game.LevelPointObjective.prototype.constructor = game.LevelPointObjective;
Object.defineProperties(game.LevelPointObjective.prototype, {
  ScoreObjective: {
    get: function() { return this._ScoreObjective; },
    set: function(v) { this._ScoreObjective = (v|0); },
  },
});
game.LevelPointObjective._size = 4;
game.LevelPointObjective._fromPtr = function(ptr, v) {
  v = v || Object.create(game.LevelPointObjective.prototype);
  v._ScoreObjective = HEAP32[(ptr+0)>>2];
  return v;
};
game.LevelPointObjective._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.ScoreObjective;
};
game.LevelPointObjective._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.ScoreObjective;
};
game.LevelPointObjective._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.LevelPointObjective._toTempHeapPtr(ptr, v);
  return ptr;
};
game.LevelPointObjective.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.LevelPointObjective.StorageView.prototype = Object.create(null);
game.LevelPointObjective.StorageView.prototype.constructor = game.LevelPointObjective.StorageView;
game.LevelPointObjective._view = game.LevelPointObjective.StorageView;
game.LevelPointObjective.StorageView._isSharedComp = game.LevelPointObjective._isSharedComp = false;
game.LevelPointObjective.StorageView._fromPtr = game.LevelPointObjective._fromPtr;
game.LevelPointObjective.StorageView._toPtr = game.LevelPointObjective._toPtr;
game.LevelPointObjective.StorageView._tempHeapPtr = game.LevelPointObjective._tempHeapPtr;
game.LevelPointObjective.StorageView._size = game.LevelPointObjective._size;
game.LevelPointObjective.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.LevelPointObjective.StorageView.prototype, {
  ScoreObjective: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
game.LevelPointObjective._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.LevelPointObjective is a POD type, so a JavaScript side copy constructor game.LevelPointObjective._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.LevelPointObjective._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.LevelPointObjective', 4, [
    {name: 'ScoreObjective', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(game.LevelPointObjective, { cid: { configurable: true, get: function() { delete game.LevelPointObjective.cid; var offsetsPtr = 0, offsetsCount = 0; return game.LevelPointObjective.cid = Module._ut_component_register_cid_with_type(game.LevelPointObjective._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.LevelPointObjective.StorageView, { cid: { configurable: true, get: function() { return game.LevelPointObjective.cid; } } });
game.LevelPointObjective.ScoreObjective = { $ofs:0, $t:"int32_t", $c:game.LevelPointObjective };
game.LevelSurvival = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  this._MaxSurvivalTime = (+(arg0===undefined ? 0 : arg0));
  this._TimeDepleteRate = (+(arg1===undefined ? 0 : arg1));
  this._SurvivalTimer = (+(arg2===undefined ? 0 : arg2));
  this._StartTimeGainByMatch = (+(arg3===undefined ? 0 : arg3));
  this._EndTimeGainByMatch = (+(arg4===undefined ? 0 : arg4));
  this._DifficulyRampUpTime = (+(arg5===undefined ? 0 : arg5));
  this._TimeObjective = (+(arg6===undefined ? 0 : arg6));
};
game.LevelSurvival.prototype = Object.create(null);
game.LevelSurvival.prototype.constructor = game.LevelSurvival;
Object.defineProperties(game.LevelSurvival.prototype, {
  MaxSurvivalTime: {
    get: function() { return this._MaxSurvivalTime; },
    set: function(v) { this._MaxSurvivalTime = (+(v===undefined ? 0 : v)); },
  },
  TimeDepleteRate: {
    get: function() { return this._TimeDepleteRate; },
    set: function(v) { this._TimeDepleteRate = (+(v===undefined ? 0 : v)); },
  },
  SurvivalTimer: {
    get: function() { return this._SurvivalTimer; },
    set: function(v) { this._SurvivalTimer = (+(v===undefined ? 0 : v)); },
  },
  StartTimeGainByMatch: {
    get: function() { return this._StartTimeGainByMatch; },
    set: function(v) { this._StartTimeGainByMatch = (+(v===undefined ? 0 : v)); },
  },
  EndTimeGainByMatch: {
    get: function() { return this._EndTimeGainByMatch; },
    set: function(v) { this._EndTimeGainByMatch = (+(v===undefined ? 0 : v)); },
  },
  DifficulyRampUpTime: {
    get: function() { return this._DifficulyRampUpTime; },
    set: function(v) { this._DifficulyRampUpTime = (+(v===undefined ? 0 : v)); },
  },
  TimeObjective: {
    get: function() { return this._TimeObjective; },
    set: function(v) { this._TimeObjective = (+(v===undefined ? 0 : v)); },
  },
});
game.LevelSurvival._size = 28;
game.LevelSurvival._fromPtr = function(ptr, v) {
  v = v || Object.create(game.LevelSurvival.prototype);
  v._MaxSurvivalTime = HEAPF32[(ptr+0)>>2];
  v._TimeDepleteRate = HEAPF32[(ptr+4)>>2];
  v._SurvivalTimer = HEAPF32[(ptr+8)>>2];
  v._StartTimeGainByMatch = HEAPF32[(ptr+12)>>2];
  v._EndTimeGainByMatch = HEAPF32[(ptr+16)>>2];
  v._DifficulyRampUpTime = HEAPF32[(ptr+20)>>2];
  v._TimeObjective = HEAPF32[(ptr+24)>>2];
  return v;
};
game.LevelSurvival._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.MaxSurvivalTime;
  HEAPF32[(ptr+4)>>2] = v.TimeDepleteRate;
  HEAPF32[(ptr+8)>>2] = v.SurvivalTimer;
  HEAPF32[(ptr+12)>>2] = v.StartTimeGainByMatch;
  HEAPF32[(ptr+16)>>2] = v.EndTimeGainByMatch;
  HEAPF32[(ptr+20)>>2] = v.DifficulyRampUpTime;
  HEAPF32[(ptr+24)>>2] = v.TimeObjective;
};
game.LevelSurvival._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.MaxSurvivalTime;
  HEAPF32[(ptr+4)>>2] = v.TimeDepleteRate;
  HEAPF32[(ptr+8)>>2] = v.SurvivalTimer;
  HEAPF32[(ptr+12)>>2] = v.StartTimeGainByMatch;
  HEAPF32[(ptr+16)>>2] = v.EndTimeGainByMatch;
  HEAPF32[(ptr+20)>>2] = v.DifficulyRampUpTime;
  HEAPF32[(ptr+24)>>2] = v.TimeObjective;
};
game.LevelSurvival._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(28);
  if (v) game.LevelSurvival._toTempHeapPtr(ptr, v);
  return ptr;
};
game.LevelSurvival.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.LevelSurvival.StorageView.prototype = Object.create(null);
game.LevelSurvival.StorageView.prototype.constructor = game.LevelSurvival.StorageView;
game.LevelSurvival._view = game.LevelSurvival.StorageView;
game.LevelSurvival.StorageView._isSharedComp = game.LevelSurvival._isSharedComp = false;
game.LevelSurvival.StorageView._fromPtr = game.LevelSurvival._fromPtr;
game.LevelSurvival.StorageView._toPtr = game.LevelSurvival._toPtr;
game.LevelSurvival.StorageView._tempHeapPtr = game.LevelSurvival._tempHeapPtr;
game.LevelSurvival.StorageView._size = game.LevelSurvival._size;
game.LevelSurvival.StorageView.prototype.$advance = function() {
  this._ptr += 28;
};
Object.defineProperties(game.LevelSurvival.StorageView.prototype, {
  MaxSurvivalTime: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  TimeDepleteRate: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  SurvivalTimer: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  StartTimeGainByMatch: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
  EndTimeGainByMatch: {
    get: function() { return HEAPF32[(this._ptr+16)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+16)>>2] = v; },
  },
  DifficulyRampUpTime: {
    get: function() { return HEAPF32[(this._ptr+20)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+20)>>2] = v; },
  },
  TimeObjective: {
    get: function() { return HEAPF32[(this._ptr+24)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+24)>>2] = v; },
  },
});
game.LevelSurvival._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.LevelSurvival is a POD type, so a JavaScript side copy constructor game.LevelSurvival._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.LevelSurvival._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.LevelSurvival', 28, [
    {name: 'MaxSurvivalTime', offset: 0, type: ut.meta.getType('float')},
    {name: 'TimeDepleteRate', offset: 4, type: ut.meta.getType('float')},
    {name: 'SurvivalTimer', offset: 8, type: ut.meta.getType('float')},
    {name: 'StartTimeGainByMatch', offset: 12, type: ut.meta.getType('float')},
    {name: 'EndTimeGainByMatch', offset: 16, type: ut.meta.getType('float')},
    {name: 'DifficulyRampUpTime', offset: 20, type: ut.meta.getType('float')},
    {name: 'TimeObjective', offset: 24, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.LevelSurvival, { cid: { configurable: true, get: function() { delete game.LevelSurvival.cid; var offsetsPtr = 0, offsetsCount = 0; return game.LevelSurvival.cid = Module._ut_component_register_cid_with_type(game.LevelSurvival._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.LevelSurvival.StorageView, { cid: { configurable: true, get: function() { return game.LevelSurvival.cid; } } });
game.LevelSurvival.MaxSurvivalTime = { $ofs:0, $t:"float", $c:game.LevelSurvival };
game.LevelSurvival.TimeDepleteRate = { $ofs:4, $t:"float", $c:game.LevelSurvival };
game.LevelSurvival.SurvivalTimer = { $ofs:8, $t:"float", $c:game.LevelSurvival };
game.LevelSurvival.StartTimeGainByMatch = { $ofs:12, $t:"float", $c:game.LevelSurvival };
game.LevelSurvival.EndTimeGainByMatch = { $ofs:16, $t:"float", $c:game.LevelSurvival };
game.LevelSurvival.DifficulyRampUpTime = { $ofs:20, $t:"float", $c:game.LevelSurvival };
game.LevelSurvival.TimeObjective = { $ofs:24, $t:"float", $c:game.LevelSurvival };
game.SpriteRendererSkin = function(arg0, arg1, arg2) {
  this._SpritePath = (arg0 === undefined ? '' : arg0);
  this._SkinColorInfo = (arg1 === undefined ? new Array() : ((arg1 instanceof Array) ? arg1 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._CurrentSkinIndex = (arg2|0);
};
game.SpriteRendererSkin.prototype = Object.create(null);
game.SpriteRendererSkin.prototype.constructor = game.SpriteRendererSkin;
Object.defineProperties(game.SpriteRendererSkin.prototype, {
  SpritePath: {
    get: function() { return this._SpritePath; },
    set: function(v) { this._SpritePath = (v === undefined ? '' : v); },
  },
  SkinColorInfo: {
    get: function() { return this._SkinColorInfo; },
    set: function(v) { this._SkinColorInfo = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  CurrentSkinIndex: {
    get: function() { return this._CurrentSkinIndex; },
    set: function(v) { this._CurrentSkinIndex = (v|0); },
  },
});
game.SpriteRendererSkin._size = 24;
game.SpriteRendererSkin._fromPtr = function(ptr, v) {
  v = v || Object.create(game.SpriteRendererSkin.prototype);
  v._SpritePath = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._SkinColorInfo = ut.nativeBufferToJsArray(ptr+8, 20, function(p) { return game.SpriteRendererSkinColorInfo._fromPtr(p); });
  v._CurrentSkinIndex = HEAP8[ptr+20];
  return v;
};
game.SpriteRendererSkin._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.SpritePath);
  ut.jsArrayToExistingNativeBuffer_pod(v.SkinColorInfo, ptr+8, 20, function(p, v) { game.SpriteRendererSkinColorInfo._toPtr(p, v); });
  HEAP8[ptr+20] = v.CurrentSkinIndex;
};
game.SpriteRendererSkin._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.SpritePath);
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.SkinColorInfo, ptr+8, 20, function(p, v) { game.SpriteRendererSkinColorInfo._toPtr(p, v); });
  HEAP8[ptr+20] = v.CurrentSkinIndex;
};
game.SpriteRendererSkin._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) game.SpriteRendererSkin._toTempHeapPtr(ptr, v);
  return ptr;
};
game.SpriteRendererSkin.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.SpriteRendererSkin.StorageView.prototype = Object.create(null);
game.SpriteRendererSkin.StorageView.prototype.constructor = game.SpriteRendererSkin.StorageView;
game.SpriteRendererSkin._view = game.SpriteRendererSkin.StorageView;
game.SpriteRendererSkin.StorageView._isSharedComp = game.SpriteRendererSkin._isSharedComp = false;
game.SpriteRendererSkin.StorageView._fromPtr = game.SpriteRendererSkin._fromPtr;
game.SpriteRendererSkin.StorageView._toPtr = game.SpriteRendererSkin._toPtr;
game.SpriteRendererSkin.StorageView._tempHeapPtr = game.SpriteRendererSkin._tempHeapPtr;
game.SpriteRendererSkin.StorageView._size = game.SpriteRendererSkin._size;
game.SpriteRendererSkin.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(game.SpriteRendererSkin.StorageView.prototype, {
  SpritePath: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  SkinColorInfo: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+8, 20, function(p) { return game.SpriteRendererSkinColorInfo._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+8, 20, function(p, v) { game.SpriteRendererSkinColorInfo._toPtr(p, v); }); },
  },
  CurrentSkinIndex: {
    get: function() { return HEAP8[this._ptr+20]; },
    set: function(v) { HEAP8[this._ptr+20] = v; },
  },
});
game.SpriteRendererSkin._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
  Module._ut_nativebuffer_pod_placement_delete(ptr + 8);
};
game.SpriteRendererSkin._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  Module._ut_nativebuffer_pod_copy_construct(dst + 8, src + 8, 20);
  for(var i = 0; i < 1; ++i) HEAPU8[dst+20+i] = HEAPU8[src+20+i];
};
game.SpriteRendererSkin._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.SpriteRendererSkin', 24, [
    {name: 'SpritePath', offset: 0, type: ut.meta.getType('string')},
    {name: 'SkinColorInfo', offset: 8, type: ut.meta.getType('ut.NativeBuffer<game.SpriteRendererSkinColorInfo>')},
    {name: 'CurrentSkinIndex', offset: 20, type: ut.meta.getType('int8')}
  ]);
})();
Object.defineProperties(game.SpriteRendererSkin, { cid: { configurable: true, get: function() { delete game.SpriteRendererSkin.cid; var offsetsPtr = 0, offsetsCount = 0; return game.SpriteRendererSkin.cid = Module._ut_component_register_cid_with_type(game.SpriteRendererSkin._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.SpriteRendererSkin._dtorFn), ut.CopyFn._cb.token_for(game.SpriteRendererSkin._copyFn)); } } });
Object.defineProperties(game.SpriteRendererSkin.StorageView, { cid: { configurable: true, get: function() { return game.SpriteRendererSkin.cid; } } });
game.SpriteRendererSkin.SpritePath = { $ofs:0, $t:"System.String", $c:game.SpriteRendererSkin };
game.SpriteRendererSkin.SkinColorInfo = { $ofs:8, $t:"ut.DynamicArray`1", $c:game.SpriteRendererSkin };
game.SpriteRendererSkin.CurrentSkinIndex = { $ofs:20, $t:"int8_t", $c:game.SpriteRendererSkin };
game.SpriteSequenceSkin = function(arg0, arg1) {
  this._SpritePaths = (arg0 === undefined ? new Array() : ((arg0 instanceof Array) ? arg0 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._CurrentSkinIndex = (arg1|0);
};
game.SpriteSequenceSkin.prototype = Object.create(null);
game.SpriteSequenceSkin.prototype.constructor = game.SpriteSequenceSkin;
Object.defineProperties(game.SpriteSequenceSkin.prototype, {
  SpritePaths: {
    get: function() { return this._SpritePaths; },
    set: function(v) { this._SpritePaths = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  CurrentSkinIndex: {
    get: function() { return this._CurrentSkinIndex; },
    set: function(v) { this._CurrentSkinIndex = (v|0); },
  },
});
game.SpriteSequenceSkin._size = 16;
game.SpriteSequenceSkin._fromPtr = function(ptr, v) {
  v = v || Object.create(game.SpriteSequenceSkin.prototype);
  v._SpritePaths = ut.nativeBufferToJsArray(ptr+0, 8, function(p) { return (Module._ut_nativestring_data(p) ? UTF8ToString(Module._ut_nativestring_data(p)) : ""); });
  v._CurrentSkinIndex = HEAP8[ptr+12];
  return v;
};
game.SpriteSequenceSkin._toPtr = function(ptr, v) {
  ut.jsArrayToExistingNativeBuffer_string(v.SpritePaths, ptr+0, function(p, v) { ut.writeHeapNativeString(p, v); });
  HEAP8[ptr+12] = v.CurrentSkinIndex;
};
game.SpriteSequenceSkin._toTempHeapPtr = function(ptr, v) {
  ut.jsArrayToExistingScratchNativeBuffer_string(v.SpritePaths, ptr+0, function(p, v) { ut.toExistingScratchNativeString(p, v); });
  HEAP8[ptr+12] = v.CurrentSkinIndex;
};
game.SpriteSequenceSkin._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.SpriteSequenceSkin._toTempHeapPtr(ptr, v);
  return ptr;
};
game.SpriteSequenceSkin.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.SpriteSequenceSkin.StorageView.prototype = Object.create(null);
game.SpriteSequenceSkin.StorageView.prototype.constructor = game.SpriteSequenceSkin.StorageView;
game.SpriteSequenceSkin._view = game.SpriteSequenceSkin.StorageView;
game.SpriteSequenceSkin.StorageView._isSharedComp = game.SpriteSequenceSkin._isSharedComp = false;
game.SpriteSequenceSkin.StorageView._fromPtr = game.SpriteSequenceSkin._fromPtr;
game.SpriteSequenceSkin.StorageView._toPtr = game.SpriteSequenceSkin._toPtr;
game.SpriteSequenceSkin.StorageView._tempHeapPtr = game.SpriteSequenceSkin._tempHeapPtr;
game.SpriteSequenceSkin.StorageView._size = game.SpriteSequenceSkin._size;
game.SpriteSequenceSkin.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.SpriteSequenceSkin.StorageView.prototype, {
  SpritePaths: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+0, 8, function(p) { return (Module._ut_nativestring_data(p) ? UTF8ToString(Module._ut_nativestring_data(p)) : ""); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_string(v, this._ptr+0, function(p, v) { ut.writeHeapNativeString(p, v); }); },
  },
  CurrentSkinIndex: {
    get: function() { return HEAP8[this._ptr+12]; },
    set: function(v) { HEAP8[this._ptr+12] = v; },
  },
});
game.SpriteSequenceSkin._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativebuffer_nativestring_placement_delete(ptr + 0);
};
game.SpriteSequenceSkin._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativebuffer_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 1; ++i) HEAPU8[dst+12+i] = HEAPU8[src+12+i];
};
game.SpriteSequenceSkin._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.SpriteSequenceSkin', 16, [
    {name: 'SpritePaths', offset: 0, type: ut.meta.getType('ut.NativeBuffer<string>')},
    {name: 'CurrentSkinIndex', offset: 12, type: ut.meta.getType('int8')}
  ]);
})();
Object.defineProperties(game.SpriteSequenceSkin, { cid: { configurable: true, get: function() { delete game.SpriteSequenceSkin.cid; var offsetsPtr = 0, offsetsCount = 0; return game.SpriteSequenceSkin.cid = Module._ut_component_register_cid_with_type(game.SpriteSequenceSkin._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.SpriteSequenceSkin._dtorFn), ut.CopyFn._cb.token_for(game.SpriteSequenceSkin._copyFn)); } } });
Object.defineProperties(game.SpriteSequenceSkin.StorageView, { cid: { configurable: true, get: function() { return game.SpriteSequenceSkin.cid; } } });
game.SpriteSequenceSkin.SpritePaths = { $ofs:0, $t:"ut.DynamicArray`1", $c:game.SpriteSequenceSkin };
game.SpriteSequenceSkin.CurrentSkinIndex = { $ofs:12, $t:"int8_t", $c:game.SpriteSequenceSkin };
game.TutorialEggPointer = function(arg0) {
  this._ImageEgg = (arg0 === undefined ? new ut.Entity : arg0);
};
game.TutorialEggPointer.prototype = Object.create(null);
game.TutorialEggPointer.prototype.constructor = game.TutorialEggPointer;
Object.defineProperties(game.TutorialEggPointer.prototype, {
  ImageEgg: {
    get: function() { return this._ImageEgg; },
    set: function(v) { this._ImageEgg = (v === undefined ? new ut.Entity : v); },
  },
});
game.TutorialEggPointer._size = 8;
game.TutorialEggPointer._fromPtr = function(ptr, v) {
  v = v || Object.create(game.TutorialEggPointer.prototype);
  v._ImageEgg = ut.Entity._fromPtr(ptr+0);
  return v;
};
game.TutorialEggPointer._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ImageEgg);
};
game.TutorialEggPointer._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ImageEgg);
};
game.TutorialEggPointer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.TutorialEggPointer._toTempHeapPtr(ptr, v);
  return ptr;
};
game.TutorialEggPointer.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.TutorialEggPointer.StorageView.prototype = Object.create(null);
game.TutorialEggPointer.StorageView.prototype.constructor = game.TutorialEggPointer.StorageView;
game.TutorialEggPointer._view = game.TutorialEggPointer.StorageView;
game.TutorialEggPointer.StorageView._isSharedComp = game.TutorialEggPointer._isSharedComp = false;
game.TutorialEggPointer.StorageView._fromPtr = game.TutorialEggPointer._fromPtr;
game.TutorialEggPointer.StorageView._toPtr = game.TutorialEggPointer._toPtr;
game.TutorialEggPointer.StorageView._tempHeapPtr = game.TutorialEggPointer._tempHeapPtr;
game.TutorialEggPointer.StorageView._size = game.TutorialEggPointer._size;
game.TutorialEggPointer.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.TutorialEggPointer.StorageView.prototype, {
  ImageEgg: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
});
game.TutorialEggPointer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.TutorialEggPointer is a POD type, so a JavaScript side copy constructor game.TutorialEggPointer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.TutorialEggPointer._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.TutorialEggPointer', 8, [
    {name: 'ImageEgg', offset: 0, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.TutorialEggPointer, { cid: { configurable: true, get: function() { delete game.TutorialEggPointer.cid; var offsetsPtr = ut.tempHeapPtrI32([0]); var offsetsCount = 1; return game.TutorialEggPointer.cid = Module._ut_component_register_cid_with_type(game.TutorialEggPointer._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.TutorialEggPointer.StorageView, { cid: { configurable: true, get: function() { return game.TutorialEggPointer.cid; } } });
game.TutorialEggPointer.ImageEgg = { $ofs:0, $t:"ut.Entity", $c:game.TutorialEggPointer };
game.TutorialEggPointer.ImageEgg.index = { $ofs:0, $t:"int32_t", $c:game.TutorialEggPointer };
game.TutorialEggPointer.ImageEgg.version = { $ofs:4, $t:"int32_t", $c:game.TutorialEggPointer };
game.TutorialHighlight = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
  this._HighlightRect = (arg0 === undefined ? new ut.Entity : arg0);
  this._LabelInstructions = (arg1 === undefined ? new ut.Entity : arg1);
  this._SpriteRenderers = (arg2 === undefined ? new Array() : ((arg2 instanceof Array) ? arg2 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._MaxAlpha = (+(arg3===undefined ? 0 : arg3));
  this._LabelMaxAlpha = (+(arg4===undefined ? 0 : arg4));
  this._IsClosing = (arg5 ? true : false);
  this._Timer = (+(arg6===undefined ? 0 : arg6));
  this._FadeDuration = (+(arg7===undefined ? 0 : arg7));
  this._StartDelay = (+(arg8===undefined ? 0 : arg8));
  this._LabelDefaultPositionY = (+(arg9===undefined ? 0 : arg9));
  this._AutoCloseDelay = (+(arg10===undefined ? 0 : arg10));
};
game.TutorialHighlight.prototype = Object.create(null);
game.TutorialHighlight.prototype.constructor = game.TutorialHighlight;
Object.defineProperties(game.TutorialHighlight.prototype, {
  HighlightRect: {
    get: function() { return this._HighlightRect; },
    set: function(v) { this._HighlightRect = (v === undefined ? new ut.Entity : v); },
  },
  LabelInstructions: {
    get: function() { return this._LabelInstructions; },
    set: function(v) { this._LabelInstructions = (v === undefined ? new ut.Entity : v); },
  },
  SpriteRenderers: {
    get: function() { return this._SpriteRenderers; },
    set: function(v) { this._SpriteRenderers = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  MaxAlpha: {
    get: function() { return this._MaxAlpha; },
    set: function(v) { this._MaxAlpha = (+(v===undefined ? 0 : v)); },
  },
  LabelMaxAlpha: {
    get: function() { return this._LabelMaxAlpha; },
    set: function(v) { this._LabelMaxAlpha = (+(v===undefined ? 0 : v)); },
  },
  IsClosing: {
    get: function() { return this._IsClosing; },
    set: function(v) { this._IsClosing = (v ? true : false); },
  },
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
  FadeDuration: {
    get: function() { return this._FadeDuration; },
    set: function(v) { this._FadeDuration = (+(v===undefined ? 0 : v)); },
  },
  StartDelay: {
    get: function() { return this._StartDelay; },
    set: function(v) { this._StartDelay = (+(v===undefined ? 0 : v)); },
  },
  LabelDefaultPositionY: {
    get: function() { return this._LabelDefaultPositionY; },
    set: function(v) { this._LabelDefaultPositionY = (+(v===undefined ? 0 : v)); },
  },
  AutoCloseDelay: {
    get: function() { return this._AutoCloseDelay; },
    set: function(v) { this._AutoCloseDelay = (+(v===undefined ? 0 : v)); },
  },
});
game.TutorialHighlight._size = 60;
game.TutorialHighlight._fromPtr = function(ptr, v) {
  v = v || Object.create(game.TutorialHighlight.prototype);
  v._HighlightRect = ut.Entity._fromPtr(ptr+0);
  v._LabelInstructions = ut.Entity._fromPtr(ptr+8);
  v._SpriteRenderers = ut.nativeBufferToJsArray(ptr+16, 8, function(p) { return ut.Entity._fromPtr(p); });
  v._MaxAlpha = HEAPF32[(ptr+28)>>2];
  v._LabelMaxAlpha = HEAPF32[(ptr+32)>>2];
  v._IsClosing = (HEAP8[ptr+36]?true:false);
  v._Timer = HEAPF32[(ptr+40)>>2];
  v._FadeDuration = HEAPF32[(ptr+44)>>2];
  v._StartDelay = HEAPF32[(ptr+48)>>2];
  v._LabelDefaultPositionY = HEAPF32[(ptr+52)>>2];
  v._AutoCloseDelay = HEAPF32[(ptr+56)>>2];
  return v;
};
game.TutorialHighlight._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.HighlightRect);
  ut.Entity._toPtr(ptr+8, v.LabelInstructions);
  ut.jsArrayToExistingNativeBuffer_pod(v.SpriteRenderers, ptr+16, 8, function(p, v) { ut.Entity._toPtr(p, v); });
  HEAPF32[(ptr+28)>>2] = v.MaxAlpha;
  HEAPF32[(ptr+32)>>2] = v.LabelMaxAlpha;
  HEAP8[ptr+36] = (v.IsClosing)?1:0;
  HEAPF32[(ptr+40)>>2] = v.Timer;
  HEAPF32[(ptr+44)>>2] = v.FadeDuration;
  HEAPF32[(ptr+48)>>2] = v.StartDelay;
  HEAPF32[(ptr+52)>>2] = v.LabelDefaultPositionY;
  HEAPF32[(ptr+56)>>2] = v.AutoCloseDelay;
};
game.TutorialHighlight._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.HighlightRect);
  ut.Entity._toPtr(ptr+8, v.LabelInstructions);
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.SpriteRenderers, ptr+16, 8, function(p, v) { ut.Entity._toPtr(p, v); });
  HEAPF32[(ptr+28)>>2] = v.MaxAlpha;
  HEAPF32[(ptr+32)>>2] = v.LabelMaxAlpha;
  HEAP8[ptr+36] = (v.IsClosing)?1:0;
  HEAPF32[(ptr+40)>>2] = v.Timer;
  HEAPF32[(ptr+44)>>2] = v.FadeDuration;
  HEAPF32[(ptr+48)>>2] = v.StartDelay;
  HEAPF32[(ptr+52)>>2] = v.LabelDefaultPositionY;
  HEAPF32[(ptr+56)>>2] = v.AutoCloseDelay;
};
game.TutorialHighlight._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(60);
  if (v) game.TutorialHighlight._toTempHeapPtr(ptr, v);
  return ptr;
};
game.TutorialHighlight.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.TutorialHighlight.StorageView.prototype = Object.create(null);
game.TutorialHighlight.StorageView.prototype.constructor = game.TutorialHighlight.StorageView;
game.TutorialHighlight._view = game.TutorialHighlight.StorageView;
game.TutorialHighlight.StorageView._isSharedComp = game.TutorialHighlight._isSharedComp = false;
game.TutorialHighlight.StorageView._fromPtr = game.TutorialHighlight._fromPtr;
game.TutorialHighlight.StorageView._toPtr = game.TutorialHighlight._toPtr;
game.TutorialHighlight.StorageView._tempHeapPtr = game.TutorialHighlight._tempHeapPtr;
game.TutorialHighlight.StorageView._size = game.TutorialHighlight._size;
game.TutorialHighlight.StorageView.prototype.$advance = function() {
  this._ptr += 60;
};
Object.defineProperties(game.TutorialHighlight.StorageView.prototype, {
  HighlightRect: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  LabelInstructions: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
  SpriteRenderers: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+16, 8, function(p) { return ut.Entity._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+16, 8, function(p, v) { ut.Entity._toPtr(p, v); }); },
  },
  MaxAlpha: {
    get: function() { return HEAPF32[(this._ptr+28)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+28)>>2] = v; },
  },
  LabelMaxAlpha: {
    get: function() { return HEAPF32[(this._ptr+32)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+32)>>2] = v; },
  },
  IsClosing: {
    get: function() { return (HEAP8[this._ptr+36]?true:false); },
    set: function(v) { HEAP8[this._ptr+36] = (v)?1:0; },
  },
  Timer: {
    get: function() { return HEAPF32[(this._ptr+40)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+40)>>2] = v; },
  },
  FadeDuration: {
    get: function() { return HEAPF32[(this._ptr+44)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+44)>>2] = v; },
  },
  StartDelay: {
    get: function() { return HEAPF32[(this._ptr+48)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+48)>>2] = v; },
  },
  LabelDefaultPositionY: {
    get: function() { return HEAPF32[(this._ptr+52)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+52)>>2] = v; },
  },
  AutoCloseDelay: {
    get: function() { return HEAPF32[(this._ptr+56)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+56)>>2] = v; },
  },
});
game.TutorialHighlight._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativebuffer_pod_placement_delete(ptr + 16);
};
game.TutorialHighlight._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  for(var i = 0; i < 8; ++i) HEAPU8[dst+0+i] = HEAPU8[src+0+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  Module._ut_nativebuffer_pod_copy_construct(dst + 16, src + 16, 8);
  for(var i = 0; i < 4; ++i) HEAPU8[dst+28+i] = HEAPU8[src+28+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+32+i] = HEAPU8[src+32+i];
  for(var i = 0; i < 1; ++i) HEAPU8[dst+36+i] = HEAPU8[src+36+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+40+i] = HEAPU8[src+40+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+44+i] = HEAPU8[src+44+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+48+i] = HEAPU8[src+48+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+52+i] = HEAPU8[src+52+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+56+i] = HEAPU8[src+56+i];
};
game.TutorialHighlight._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.TutorialHighlight', 60, [
    {name: 'HighlightRect', offset: 0, type: ut.meta.getType('ut.Entity')},
    {name: 'LabelInstructions', offset: 8, type: ut.meta.getType('ut.Entity')},
    {name: 'SpriteRenderers', offset: 16, type: ut.meta.getType('ut.NativeBuffer<ut.Entity>')},
    {name: 'MaxAlpha', offset: 28, type: ut.meta.getType('float')},
    {name: 'LabelMaxAlpha', offset: 32, type: ut.meta.getType('float')},
    {name: 'IsClosing', offset: 36, type: ut.meta.getType('bool')},
    {name: 'Timer', offset: 40, type: ut.meta.getType('float')},
    {name: 'FadeDuration', offset: 44, type: ut.meta.getType('float')},
    {name: 'StartDelay', offset: 48, type: ut.meta.getType('float')},
    {name: 'LabelDefaultPositionY', offset: 52, type: ut.meta.getType('float')},
    {name: 'AutoCloseDelay', offset: 56, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.TutorialHighlight, { cid: { configurable: true, get: function() { delete game.TutorialHighlight.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8,-17]); var offsetsCount = 3; return game.TutorialHighlight.cid = Module._ut_component_register_cid_with_type(game.TutorialHighlight._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.TutorialHighlight._dtorFn), ut.CopyFn._cb.token_for(game.TutorialHighlight._copyFn)); } } });
Object.defineProperties(game.TutorialHighlight.StorageView, { cid: { configurable: true, get: function() { return game.TutorialHighlight.cid; } } });
game.TutorialHighlight.HighlightRect = { $ofs:0, $t:"ut.Entity", $c:game.TutorialHighlight };
game.TutorialHighlight.HighlightRect.index = { $ofs:0, $t:"int32_t", $c:game.TutorialHighlight };
game.TutorialHighlight.HighlightRect.version = { $ofs:4, $t:"int32_t", $c:game.TutorialHighlight };
game.TutorialHighlight.LabelInstructions = { $ofs:8, $t:"ut.Entity", $c:game.TutorialHighlight };
game.TutorialHighlight.LabelInstructions.index = { $ofs:8, $t:"int32_t", $c:game.TutorialHighlight };
game.TutorialHighlight.LabelInstructions.version = { $ofs:12, $t:"int32_t", $c:game.TutorialHighlight };
game.TutorialHighlight.SpriteRenderers = { $ofs:16, $t:"ut.DynamicArray`1", $c:game.TutorialHighlight };
game.TutorialHighlight.MaxAlpha = { $ofs:28, $t:"float", $c:game.TutorialHighlight };
game.TutorialHighlight.LabelMaxAlpha = { $ofs:32, $t:"float", $c:game.TutorialHighlight };
game.TutorialHighlight.IsClosing = { $ofs:36, $t:"bool", $c:game.TutorialHighlight };
game.TutorialHighlight.Timer = { $ofs:40, $t:"float", $c:game.TutorialHighlight };
game.TutorialHighlight.FadeDuration = { $ofs:44, $t:"float", $c:game.TutorialHighlight };
game.TutorialHighlight.StartDelay = { $ofs:48, $t:"float", $c:game.TutorialHighlight };
game.TutorialHighlight.LabelDefaultPositionY = { $ofs:52, $t:"float", $c:game.TutorialHighlight };
game.TutorialHighlight.AutoCloseDelay = { $ofs:56, $t:"float", $c:game.TutorialHighlight };
game.TutorialPointer = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this._Pointer = (arg0 === undefined ? new ut.Entity : arg0);
  this._StartPosition = new ut.Math.Vector2(); if ((arg1) !== undefined) { this._StartPosition.copy(arg1); };
  this._EndPosition = new ut.Math.Vector2(); if ((arg2) !== undefined) { this._EndPosition.copy(arg2); };
  this._Duration = (+(arg3===undefined ? 0 : arg3));
  this._AlphaCurve = (arg4 === undefined ? new ut.Entity : arg4);
  this._MoveCurve = (arg5 === undefined ? new ut.Entity : arg5);
  this._Timer = (+(arg6===undefined ? 0 : arg6));
  this._StretchToMove = (arg7 ? true : false);
};
game.TutorialPointer.prototype = Object.create(null);
game.TutorialPointer.prototype.constructor = game.TutorialPointer;
Object.defineProperties(game.TutorialPointer.prototype, {
  Pointer: {
    get: function() { return this._Pointer; },
    set: function(v) { this._Pointer = (v === undefined ? new ut.Entity : v); },
  },
  StartPosition: {
    get: function() { return this._StartPosition; },
    set: function(v) { this._StartPosition.copy(v); },
  },
  EndPosition: {
    get: function() { return this._EndPosition; },
    set: function(v) { this._EndPosition.copy(v); },
  },
  Duration: {
    get: function() { return this._Duration; },
    set: function(v) { this._Duration = (+(v===undefined ? 0 : v)); },
  },
  AlphaCurve: {
    get: function() { return this._AlphaCurve; },
    set: function(v) { this._AlphaCurve = (v === undefined ? new ut.Entity : v); },
  },
  MoveCurve: {
    get: function() { return this._MoveCurve; },
    set: function(v) { this._MoveCurve = (v === undefined ? new ut.Entity : v); },
  },
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
  StretchToMove: {
    get: function() { return this._StretchToMove; },
    set: function(v) { this._StretchToMove = (v ? true : false); },
  },
});
game.TutorialPointer._size = 52;
game.TutorialPointer._fromPtr = function(ptr, v) {
  v = v || Object.create(game.TutorialPointer.prototype);
  v._Pointer = ut.Entity._fromPtr(ptr+0);
  v._StartPosition = ut._utils.vec2FromHeap(null, ptr+8);
  v._EndPosition = ut._utils.vec2FromHeap(null, ptr+16);
  v._Duration = HEAPF32[(ptr+24)>>2];
  v._AlphaCurve = ut.Entity._fromPtr(ptr+28);
  v._MoveCurve = ut.Entity._fromPtr(ptr+36);
  v._Timer = HEAPF32[(ptr+44)>>2];
  v._StretchToMove = (HEAP8[ptr+48]?true:false);
  return v;
};
game.TutorialPointer._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.Pointer);
  ut._utils.vec2ToHeap(v.StartPosition, ptr+8);
  ut._utils.vec2ToHeap(v.EndPosition, ptr+16);
  HEAPF32[(ptr+24)>>2] = v.Duration;
  ut.Entity._toPtr(ptr+28, v.AlphaCurve);
  ut.Entity._toPtr(ptr+36, v.MoveCurve);
  HEAPF32[(ptr+44)>>2] = v.Timer;
  HEAP8[ptr+48] = (v.StretchToMove)?1:0;
};
game.TutorialPointer._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.Pointer);
  ut._utils.vec2ToHeap(v.StartPosition, ptr+8);
  ut._utils.vec2ToHeap(v.EndPosition, ptr+16);
  HEAPF32[(ptr+24)>>2] = v.Duration;
  ut.Entity._toPtr(ptr+28, v.AlphaCurve);
  ut.Entity._toPtr(ptr+36, v.MoveCurve);
  HEAPF32[(ptr+44)>>2] = v.Timer;
  HEAP8[ptr+48] = (v.StretchToMove)?1:0;
};
game.TutorialPointer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(52);
  if (v) game.TutorialPointer._toTempHeapPtr(ptr, v);
  return ptr;
};
game.TutorialPointer.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.TutorialPointer.StorageView.prototype = Object.create(null);
game.TutorialPointer.StorageView.prototype.constructor = game.TutorialPointer.StorageView;
game.TutorialPointer._view = game.TutorialPointer.StorageView;
game.TutorialPointer.StorageView._isSharedComp = game.TutorialPointer._isSharedComp = false;
game.TutorialPointer.StorageView._fromPtr = game.TutorialPointer._fromPtr;
game.TutorialPointer.StorageView._toPtr = game.TutorialPointer._toPtr;
game.TutorialPointer.StorageView._tempHeapPtr = game.TutorialPointer._tempHeapPtr;
game.TutorialPointer.StorageView._size = game.TutorialPointer._size;
game.TutorialPointer.StorageView.prototype.$advance = function() {
  this._ptr += 52;
};
Object.defineProperties(game.TutorialPointer.StorageView.prototype, {
  Pointer: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  StartPosition: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+8); },
  },
  EndPosition: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+16); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+16); },
  },
  Duration: {
    get: function() { return HEAPF32[(this._ptr+24)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+24)>>2] = v; },
  },
  AlphaCurve: {
    get: function() { return ut.Entity._fromPtr(this._ptr+28); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+28, v); },
  },
  MoveCurve: {
    get: function() { return ut.Entity._fromPtr(this._ptr+36); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+36, v); },
  },
  Timer: {
    get: function() { return HEAPF32[(this._ptr+44)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+44)>>2] = v; },
  },
  StretchToMove: {
    get: function() { return (HEAP8[this._ptr+48]?true:false); },
    set: function(v) { HEAP8[this._ptr+48] = (v)?1:0; },
  },
});
game.TutorialPointer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.TutorialPointer is a POD type, so a JavaScript side copy constructor game.TutorialPointer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.TutorialPointer._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.TutorialPointer', 52, [
    {name: 'Pointer', offset: 0, type: ut.meta.getType('ut.Entity')},
    {name: 'StartPosition', offset: 8, type: ut.meta.getType('ut.Math.Vector2')},
    {name: 'EndPosition', offset: 16, type: ut.meta.getType('ut.Math.Vector2')},
    {name: 'Duration', offset: 24, type: ut.meta.getType('float')},
    {name: 'AlphaCurve', offset: 28, type: ut.meta.getType('ut.Entity')},
    {name: 'MoveCurve', offset: 36, type: ut.meta.getType('ut.Entity')},
    {name: 'Timer', offset: 44, type: ut.meta.getType('float')},
    {name: 'StretchToMove', offset: 48, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.TutorialPointer, { cid: { configurable: true, get: function() { delete game.TutorialPointer.cid; var offsetsPtr = ut.tempHeapPtrI32([0,28,36]); var offsetsCount = 3; return game.TutorialPointer.cid = Module._ut_component_register_cid_with_type(game.TutorialPointer._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.TutorialPointer.StorageView, { cid: { configurable: true, get: function() { return game.TutorialPointer.cid; } } });
game.TutorialPointer.Pointer = { $ofs:0, $t:"ut.Entity", $c:game.TutorialPointer };
game.TutorialPointer.Pointer.index = { $ofs:0, $t:"int32_t", $c:game.TutorialPointer };
game.TutorialPointer.Pointer.version = { $ofs:4, $t:"int32_t", $c:game.TutorialPointer };
game.TutorialPointer.StartPosition = { $ofs:8, $t:"ut.Math.Vector2", $c:game.TutorialPointer };
game.TutorialPointer.StartPosition.y = { $ofs:12, $t:"float", $c:game.TutorialPointer };
game.TutorialPointer.StartPosition.x = { $ofs:8, $t:"float", $c:game.TutorialPointer };
game.TutorialPointer.EndPosition = { $ofs:16, $t:"ut.Math.Vector2", $c:game.TutorialPointer };
game.TutorialPointer.EndPosition.y = { $ofs:20, $t:"float", $c:game.TutorialPointer };
game.TutorialPointer.EndPosition.x = { $ofs:16, $t:"float", $c:game.TutorialPointer };
game.TutorialPointer.Duration = { $ofs:24, $t:"float", $c:game.TutorialPointer };
game.TutorialPointer.AlphaCurve = { $ofs:28, $t:"ut.Entity", $c:game.TutorialPointer };
game.TutorialPointer.AlphaCurve.index = { $ofs:28, $t:"int32_t", $c:game.TutorialPointer };
game.TutorialPointer.AlphaCurve.version = { $ofs:32, $t:"int32_t", $c:game.TutorialPointer };
game.TutorialPointer.MoveCurve = { $ofs:36, $t:"ut.Entity", $c:game.TutorialPointer };
game.TutorialPointer.MoveCurve.index = { $ofs:36, $t:"int32_t", $c:game.TutorialPointer };
game.TutorialPointer.MoveCurve.version = { $ofs:40, $t:"int32_t", $c:game.TutorialPointer };
game.TutorialPointer.Timer = { $ofs:44, $t:"float", $c:game.TutorialPointer };
game.TutorialPointer.StretchToMove = { $ofs:48, $t:"bool", $c:game.TutorialPointer };
game.CreditsMenu = function(arg0) {
  this._ButtonClose = (arg0 === undefined ? new ut.Entity : arg0);
};
game.CreditsMenu.prototype = Object.create(null);
game.CreditsMenu.prototype.constructor = game.CreditsMenu;
Object.defineProperties(game.CreditsMenu.prototype, {
  ButtonClose: {
    get: function() { return this._ButtonClose; },
    set: function(v) { this._ButtonClose = (v === undefined ? new ut.Entity : v); },
  },
});
game.CreditsMenu._size = 8;
game.CreditsMenu._fromPtr = function(ptr, v) {
  v = v || Object.create(game.CreditsMenu.prototype);
  v._ButtonClose = ut.Entity._fromPtr(ptr+0);
  return v;
};
game.CreditsMenu._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ButtonClose);
};
game.CreditsMenu._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ButtonClose);
};
game.CreditsMenu._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.CreditsMenu._toTempHeapPtr(ptr, v);
  return ptr;
};
game.CreditsMenu.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.CreditsMenu.StorageView.prototype = Object.create(null);
game.CreditsMenu.StorageView.prototype.constructor = game.CreditsMenu.StorageView;
game.CreditsMenu._view = game.CreditsMenu.StorageView;
game.CreditsMenu.StorageView._isSharedComp = game.CreditsMenu._isSharedComp = false;
game.CreditsMenu.StorageView._fromPtr = game.CreditsMenu._fromPtr;
game.CreditsMenu.StorageView._toPtr = game.CreditsMenu._toPtr;
game.CreditsMenu.StorageView._tempHeapPtr = game.CreditsMenu._tempHeapPtr;
game.CreditsMenu.StorageView._size = game.CreditsMenu._size;
game.CreditsMenu.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.CreditsMenu.StorageView.prototype, {
  ButtonClose: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
});
game.CreditsMenu._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.CreditsMenu is a POD type, so a JavaScript side copy constructor game.CreditsMenu._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.CreditsMenu._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.CreditsMenu', 8, [
    {name: 'ButtonClose', offset: 0, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.CreditsMenu, { cid: { configurable: true, get: function() { delete game.CreditsMenu.cid; var offsetsPtr = ut.tempHeapPtrI32([0]); var offsetsCount = 1; return game.CreditsMenu.cid = Module._ut_component_register_cid_with_type(game.CreditsMenu._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.CreditsMenu.StorageView, { cid: { configurable: true, get: function() { return game.CreditsMenu.cid; } } });
game.CreditsMenu.ButtonClose = { $ofs:0, $t:"ut.Entity", $c:game.CreditsMenu };
game.CreditsMenu.ButtonClose.index = { $ofs:0, $t:"int32_t", $c:game.CreditsMenu };
game.CreditsMenu.ButtonClose.version = { $ofs:4, $t:"int32_t", $c:game.CreditsMenu };
game.GameOverMenu = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
  this._ButtonQuit = (arg0 === undefined ? new ut.Entity : arg0);
  this._LabelScoreValue = (arg1 === undefined ? new ut.Entity : arg1);
  this._LabelTime = (arg2 === undefined ? new ut.Entity : arg2);
  this._LabelTimeValue = (arg3 === undefined ? new ut.Entity : arg3);
  this._LabelGameOver = (arg4 === undefined ? new ut.Entity : arg4);
  this._LabelGameOverShadow = (arg5 === undefined ? new ut.Entity : arg5);
  this._LabelNewBestScore = (arg6 === undefined ? new ut.Entity : arg6);
  this._ImageNewBestScore = (arg7 === undefined ? new ut.Entity : arg7);
  this._ImageNewBestScoreGlow = (arg8 === undefined ? new ut.Entity : arg8);
  this._SuccessArms = (arg9 === undefined ? new Array() : ((arg9 instanceof Array) ? arg9 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._FailArms = (arg10 === undefined ? new Array() : ((arg10 instanceof Array) ? arg10 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._Timer = (+(arg11===undefined ? 0 : arg11));
};
game.GameOverMenu.prototype = Object.create(null);
game.GameOverMenu.prototype.constructor = game.GameOverMenu;
Object.defineProperties(game.GameOverMenu.prototype, {
  ButtonQuit: {
    get: function() { return this._ButtonQuit; },
    set: function(v) { this._ButtonQuit = (v === undefined ? new ut.Entity : v); },
  },
  LabelScoreValue: {
    get: function() { return this._LabelScoreValue; },
    set: function(v) { this._LabelScoreValue = (v === undefined ? new ut.Entity : v); },
  },
  LabelTime: {
    get: function() { return this._LabelTime; },
    set: function(v) { this._LabelTime = (v === undefined ? new ut.Entity : v); },
  },
  LabelTimeValue: {
    get: function() { return this._LabelTimeValue; },
    set: function(v) { this._LabelTimeValue = (v === undefined ? new ut.Entity : v); },
  },
  LabelGameOver: {
    get: function() { return this._LabelGameOver; },
    set: function(v) { this._LabelGameOver = (v === undefined ? new ut.Entity : v); },
  },
  LabelGameOverShadow: {
    get: function() { return this._LabelGameOverShadow; },
    set: function(v) { this._LabelGameOverShadow = (v === undefined ? new ut.Entity : v); },
  },
  LabelNewBestScore: {
    get: function() { return this._LabelNewBestScore; },
    set: function(v) { this._LabelNewBestScore = (v === undefined ? new ut.Entity : v); },
  },
  ImageNewBestScore: {
    get: function() { return this._ImageNewBestScore; },
    set: function(v) { this._ImageNewBestScore = (v === undefined ? new ut.Entity : v); },
  },
  ImageNewBestScoreGlow: {
    get: function() { return this._ImageNewBestScoreGlow; },
    set: function(v) { this._ImageNewBestScoreGlow = (v === undefined ? new ut.Entity : v); },
  },
  SuccessArms: {
    get: function() { return this._SuccessArms; },
    set: function(v) { this._SuccessArms = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  FailArms: {
    get: function() { return this._FailArms; },
    set: function(v) { this._FailArms = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
});
game.GameOverMenu._size = 100;
game.GameOverMenu._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GameOverMenu.prototype);
  v._ButtonQuit = ut.Entity._fromPtr(ptr+0);
  v._LabelScoreValue = ut.Entity._fromPtr(ptr+8);
  v._LabelTime = ut.Entity._fromPtr(ptr+16);
  v._LabelTimeValue = ut.Entity._fromPtr(ptr+24);
  v._LabelGameOver = ut.Entity._fromPtr(ptr+32);
  v._LabelGameOverShadow = ut.Entity._fromPtr(ptr+40);
  v._LabelNewBestScore = ut.Entity._fromPtr(ptr+48);
  v._ImageNewBestScore = ut.Entity._fromPtr(ptr+56);
  v._ImageNewBestScoreGlow = ut.Entity._fromPtr(ptr+64);
  v._SuccessArms = ut.nativeBufferToJsArray(ptr+72, 8, function(p) { return ut.Entity._fromPtr(p); });
  v._FailArms = ut.nativeBufferToJsArray(ptr+84, 8, function(p) { return ut.Entity._fromPtr(p); });
  v._Timer = HEAPF32[(ptr+96)>>2];
  return v;
};
game.GameOverMenu._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ButtonQuit);
  ut.Entity._toPtr(ptr+8, v.LabelScoreValue);
  ut.Entity._toPtr(ptr+16, v.LabelTime);
  ut.Entity._toPtr(ptr+24, v.LabelTimeValue);
  ut.Entity._toPtr(ptr+32, v.LabelGameOver);
  ut.Entity._toPtr(ptr+40, v.LabelGameOverShadow);
  ut.Entity._toPtr(ptr+48, v.LabelNewBestScore);
  ut.Entity._toPtr(ptr+56, v.ImageNewBestScore);
  ut.Entity._toPtr(ptr+64, v.ImageNewBestScoreGlow);
  ut.jsArrayToExistingNativeBuffer_pod(v.SuccessArms, ptr+72, 8, function(p, v) { ut.Entity._toPtr(p, v); });
  ut.jsArrayToExistingNativeBuffer_pod(v.FailArms, ptr+84, 8, function(p, v) { ut.Entity._toPtr(p, v); });
  HEAPF32[(ptr+96)>>2] = v.Timer;
};
game.GameOverMenu._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ButtonQuit);
  ut.Entity._toPtr(ptr+8, v.LabelScoreValue);
  ut.Entity._toPtr(ptr+16, v.LabelTime);
  ut.Entity._toPtr(ptr+24, v.LabelTimeValue);
  ut.Entity._toPtr(ptr+32, v.LabelGameOver);
  ut.Entity._toPtr(ptr+40, v.LabelGameOverShadow);
  ut.Entity._toPtr(ptr+48, v.LabelNewBestScore);
  ut.Entity._toPtr(ptr+56, v.ImageNewBestScore);
  ut.Entity._toPtr(ptr+64, v.ImageNewBestScoreGlow);
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.SuccessArms, ptr+72, 8, function(p, v) { ut.Entity._toPtr(p, v); });
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.FailArms, ptr+84, 8, function(p, v) { ut.Entity._toPtr(p, v); });
  HEAPF32[(ptr+96)>>2] = v.Timer;
};
game.GameOverMenu._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(100);
  if (v) game.GameOverMenu._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GameOverMenu.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GameOverMenu.StorageView.prototype = Object.create(null);
game.GameOverMenu.StorageView.prototype.constructor = game.GameOverMenu.StorageView;
game.GameOverMenu._view = game.GameOverMenu.StorageView;
game.GameOverMenu.StorageView._isSharedComp = game.GameOverMenu._isSharedComp = false;
game.GameOverMenu.StorageView._fromPtr = game.GameOverMenu._fromPtr;
game.GameOverMenu.StorageView._toPtr = game.GameOverMenu._toPtr;
game.GameOverMenu.StorageView._tempHeapPtr = game.GameOverMenu._tempHeapPtr;
game.GameOverMenu.StorageView._size = game.GameOverMenu._size;
game.GameOverMenu.StorageView.prototype.$advance = function() {
  this._ptr += 100;
};
Object.defineProperties(game.GameOverMenu.StorageView.prototype, {
  ButtonQuit: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  LabelScoreValue: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
  LabelTime: {
    get: function() { return ut.Entity._fromPtr(this._ptr+16); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+16, v); },
  },
  LabelTimeValue: {
    get: function() { return ut.Entity._fromPtr(this._ptr+24); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+24, v); },
  },
  LabelGameOver: {
    get: function() { return ut.Entity._fromPtr(this._ptr+32); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+32, v); },
  },
  LabelGameOverShadow: {
    get: function() { return ut.Entity._fromPtr(this._ptr+40); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+40, v); },
  },
  LabelNewBestScore: {
    get: function() { return ut.Entity._fromPtr(this._ptr+48); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+48, v); },
  },
  ImageNewBestScore: {
    get: function() { return ut.Entity._fromPtr(this._ptr+56); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+56, v); },
  },
  ImageNewBestScoreGlow: {
    get: function() { return ut.Entity._fromPtr(this._ptr+64); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+64, v); },
  },
  SuccessArms: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+72, 8, function(p) { return ut.Entity._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+72, 8, function(p, v) { ut.Entity._toPtr(p, v); }); },
  },
  FailArms: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+84, 8, function(p) { return ut.Entity._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+84, 8, function(p, v) { ut.Entity._toPtr(p, v); }); },
  },
  Timer: {
    get: function() { return HEAPF32[(this._ptr+96)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+96)>>2] = v; },
  },
});
game.GameOverMenu._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativebuffer_pod_placement_delete(ptr + 72);
  Module._ut_nativebuffer_pod_placement_delete(ptr + 84);
};
game.GameOverMenu._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  for(var i = 0; i < 8; ++i) HEAPU8[dst+0+i] = HEAPU8[src+0+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+24+i] = HEAPU8[src+24+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+32+i] = HEAPU8[src+32+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+40+i] = HEAPU8[src+40+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+48+i] = HEAPU8[src+48+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+56+i] = HEAPU8[src+56+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+64+i] = HEAPU8[src+64+i];
  Module._ut_nativebuffer_pod_copy_construct(dst + 72, src + 72, 8);
  Module._ut_nativebuffer_pod_copy_construct(dst + 84, src + 84, 8);
  for(var i = 0; i < 4; ++i) HEAPU8[dst+96+i] = HEAPU8[src+96+i];
};
game.GameOverMenu._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.GameOverMenu', 100, [
    {name: 'ButtonQuit', offset: 0, type: ut.meta.getType('ut.Entity')},
    {name: 'LabelScoreValue', offset: 8, type: ut.meta.getType('ut.Entity')},
    {name: 'LabelTime', offset: 16, type: ut.meta.getType('ut.Entity')},
    {name: 'LabelTimeValue', offset: 24, type: ut.meta.getType('ut.Entity')},
    {name: 'LabelGameOver', offset: 32, type: ut.meta.getType('ut.Entity')},
    {name: 'LabelGameOverShadow', offset: 40, type: ut.meta.getType('ut.Entity')},
    {name: 'LabelNewBestScore', offset: 48, type: ut.meta.getType('ut.Entity')},
    {name: 'ImageNewBestScore', offset: 56, type: ut.meta.getType('ut.Entity')},
    {name: 'ImageNewBestScoreGlow', offset: 64, type: ut.meta.getType('ut.Entity')},
    {name: 'SuccessArms', offset: 72, type: ut.meta.getType('ut.NativeBuffer<ut.Entity>')},
    {name: 'FailArms', offset: 84, type: ut.meta.getType('ut.NativeBuffer<ut.Entity>')},
    {name: 'Timer', offset: 96, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.GameOverMenu, { cid: { configurable: true, get: function() { delete game.GameOverMenu.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8,16,24,32,40,48,56,64,-73,-85]); var offsetsCount = 11; return game.GameOverMenu.cid = Module._ut_component_register_cid_with_type(game.GameOverMenu._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.GameOverMenu._dtorFn), ut.CopyFn._cb.token_for(game.GameOverMenu._copyFn)); } } });
Object.defineProperties(game.GameOverMenu.StorageView, { cid: { configurable: true, get: function() { return game.GameOverMenu.cid; } } });
game.GameOverMenu.ButtonQuit = { $ofs:0, $t:"ut.Entity", $c:game.GameOverMenu };
game.GameOverMenu.ButtonQuit.index = { $ofs:0, $t:"int32_t", $c:game.GameOverMenu };
game.GameOverMenu.ButtonQuit.version = { $ofs:4, $t:"int32_t", $c:game.GameOverMenu };
game.GameOverMenu.LabelScoreValue = { $ofs:8, $t:"ut.Entity", $c:game.GameOverMenu };
game.GameOverMenu.LabelScoreValue.index = { $ofs:8, $t:"int32_t", $c:game.GameOverMenu };
game.GameOverMenu.LabelScoreValue.version = { $ofs:12, $t:"int32_t", $c:game.GameOverMenu };
game.GameOverMenu.LabelTime = { $ofs:16, $t:"ut.Entity", $c:game.GameOverMenu };
game.GameOverMenu.LabelTime.index = { $ofs:16, $t:"int32_t", $c:game.GameOverMenu };
game.GameOverMenu.LabelTime.version = { $ofs:20, $t:"int32_t", $c:game.GameOverMenu };
game.GameOverMenu.LabelTimeValue = { $ofs:24, $t:"ut.Entity", $c:game.GameOverMenu };
game.GameOverMenu.LabelTimeValue.index = { $ofs:24, $t:"int32_t", $c:game.GameOverMenu };
game.GameOverMenu.LabelTimeValue.version = { $ofs:28, $t:"int32_t", $c:game.GameOverMenu };
game.GameOverMenu.LabelGameOver = { $ofs:32, $t:"ut.Entity", $c:game.GameOverMenu };
game.GameOverMenu.LabelGameOver.index = { $ofs:32, $t:"int32_t", $c:game.GameOverMenu };
game.GameOverMenu.LabelGameOver.version = { $ofs:36, $t:"int32_t", $c:game.GameOverMenu };
game.GameOverMenu.LabelGameOverShadow = { $ofs:40, $t:"ut.Entity", $c:game.GameOverMenu };
game.GameOverMenu.LabelGameOverShadow.index = { $ofs:40, $t:"int32_t", $c:game.GameOverMenu };
game.GameOverMenu.LabelGameOverShadow.version = { $ofs:44, $t:"int32_t", $c:game.GameOverMenu };
game.GameOverMenu.LabelNewBestScore = { $ofs:48, $t:"ut.Entity", $c:game.GameOverMenu };
game.GameOverMenu.LabelNewBestScore.index = { $ofs:48, $t:"int32_t", $c:game.GameOverMenu };
game.GameOverMenu.LabelNewBestScore.version = { $ofs:52, $t:"int32_t", $c:game.GameOverMenu };
game.GameOverMenu.ImageNewBestScore = { $ofs:56, $t:"ut.Entity", $c:game.GameOverMenu };
game.GameOverMenu.ImageNewBestScore.index = { $ofs:56, $t:"int32_t", $c:game.GameOverMenu };
game.GameOverMenu.ImageNewBestScore.version = { $ofs:60, $t:"int32_t", $c:game.GameOverMenu };
game.GameOverMenu.ImageNewBestScoreGlow = { $ofs:64, $t:"ut.Entity", $c:game.GameOverMenu };
game.GameOverMenu.ImageNewBestScoreGlow.index = { $ofs:64, $t:"int32_t", $c:game.GameOverMenu };
game.GameOverMenu.ImageNewBestScoreGlow.version = { $ofs:68, $t:"int32_t", $c:game.GameOverMenu };
game.GameOverMenu.SuccessArms = { $ofs:72, $t:"ut.DynamicArray`1", $c:game.GameOverMenu };
game.GameOverMenu.FailArms = { $ofs:84, $t:"ut.DynamicArray`1", $c:game.GameOverMenu };
game.GameOverMenu.Timer = { $ofs:96, $t:"float", $c:game.GameOverMenu };
game.GameUI = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15) {
  this._ButtonPause = (arg0 === undefined ? new ut.Entity : arg0);
  this._LabelScore = (arg1 === undefined ? new ut.Entity : arg1);
  this._LabelRemainingMoves = (arg2 === undefined ? new ut.Entity : arg2);
  this._ImageMoves = (arg3 === undefined ? new ut.Entity : arg3);
  this._LabelObjective = (arg4 === undefined ? new ut.Entity : arg4);
  this._ImageObjectivePoint = (arg5 === undefined ? new ut.Entity : arg5);
  this._ImageObjectiveEgg = (arg6 === undefined ? new ut.Entity : arg6);
  this._ImageObjectiveSurvival = (arg7 === undefined ? new ut.Entity : arg7);
  this._ImageObjectivePointIncomplete = (arg8 === undefined ? new ut.Entity : arg8);
  this._ImageObjectiveEggIncomplete = (arg9 === undefined ? new ut.Entity : arg9);
  this._ImageObjectiveSurvivalIncomplete = (arg10 === undefined ? new ut.Entity : arg10);
  this._ImageObjectiveCompleteGlow = (arg11 === undefined ? new ut.Entity : arg11);
  this._LabelTime = (arg12 === undefined ? new ut.Entity : arg12);
  this._ImageNoMovesWarning = (arg13 === undefined ? new ut.Entity : arg13);
  this._LastCollectedEggCount = (arg14|0);
  this._LastIsObjectiveComplete = (arg15 ? true : false);
};
game.GameUI.prototype = Object.create(null);
game.GameUI.prototype.constructor = game.GameUI;
Object.defineProperties(game.GameUI.prototype, {
  ButtonPause: {
    get: function() { return this._ButtonPause; },
    set: function(v) { this._ButtonPause = (v === undefined ? new ut.Entity : v); },
  },
  LabelScore: {
    get: function() { return this._LabelScore; },
    set: function(v) { this._LabelScore = (v === undefined ? new ut.Entity : v); },
  },
  LabelRemainingMoves: {
    get: function() { return this._LabelRemainingMoves; },
    set: function(v) { this._LabelRemainingMoves = (v === undefined ? new ut.Entity : v); },
  },
  ImageMoves: {
    get: function() { return this._ImageMoves; },
    set: function(v) { this._ImageMoves = (v === undefined ? new ut.Entity : v); },
  },
  LabelObjective: {
    get: function() { return this._LabelObjective; },
    set: function(v) { this._LabelObjective = (v === undefined ? new ut.Entity : v); },
  },
  ImageObjectivePoint: {
    get: function() { return this._ImageObjectivePoint; },
    set: function(v) { this._ImageObjectivePoint = (v === undefined ? new ut.Entity : v); },
  },
  ImageObjectiveEgg: {
    get: function() { return this._ImageObjectiveEgg; },
    set: function(v) { this._ImageObjectiveEgg = (v === undefined ? new ut.Entity : v); },
  },
  ImageObjectiveSurvival: {
    get: function() { return this._ImageObjectiveSurvival; },
    set: function(v) { this._ImageObjectiveSurvival = (v === undefined ? new ut.Entity : v); },
  },
  ImageObjectivePointIncomplete: {
    get: function() { return this._ImageObjectivePointIncomplete; },
    set: function(v) { this._ImageObjectivePointIncomplete = (v === undefined ? new ut.Entity : v); },
  },
  ImageObjectiveEggIncomplete: {
    get: function() { return this._ImageObjectiveEggIncomplete; },
    set: function(v) { this._ImageObjectiveEggIncomplete = (v === undefined ? new ut.Entity : v); },
  },
  ImageObjectiveSurvivalIncomplete: {
    get: function() { return this._ImageObjectiveSurvivalIncomplete; },
    set: function(v) { this._ImageObjectiveSurvivalIncomplete = (v === undefined ? new ut.Entity : v); },
  },
  ImageObjectiveCompleteGlow: {
    get: function() { return this._ImageObjectiveCompleteGlow; },
    set: function(v) { this._ImageObjectiveCompleteGlow = (v === undefined ? new ut.Entity : v); },
  },
  LabelTime: {
    get: function() { return this._LabelTime; },
    set: function(v) { this._LabelTime = (v === undefined ? new ut.Entity : v); },
  },
  ImageNoMovesWarning: {
    get: function() { return this._ImageNoMovesWarning; },
    set: function(v) { this._ImageNoMovesWarning = (v === undefined ? new ut.Entity : v); },
  },
  LastCollectedEggCount: {
    get: function() { return this._LastCollectedEggCount; },
    set: function(v) { this._LastCollectedEggCount = (v|0); },
  },
  LastIsObjectiveComplete: {
    get: function() { return this._LastIsObjectiveComplete; },
    set: function(v) { this._LastIsObjectiveComplete = (v ? true : false); },
  },
});
game.GameUI._size = 120;
game.GameUI._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GameUI.prototype);
  v._ButtonPause = ut.Entity._fromPtr(ptr+0);
  v._LabelScore = ut.Entity._fromPtr(ptr+8);
  v._LabelRemainingMoves = ut.Entity._fromPtr(ptr+16);
  v._ImageMoves = ut.Entity._fromPtr(ptr+24);
  v._LabelObjective = ut.Entity._fromPtr(ptr+32);
  v._ImageObjectivePoint = ut.Entity._fromPtr(ptr+40);
  v._ImageObjectiveEgg = ut.Entity._fromPtr(ptr+48);
  v._ImageObjectiveSurvival = ut.Entity._fromPtr(ptr+56);
  v._ImageObjectivePointIncomplete = ut.Entity._fromPtr(ptr+64);
  v._ImageObjectiveEggIncomplete = ut.Entity._fromPtr(ptr+72);
  v._ImageObjectiveSurvivalIncomplete = ut.Entity._fromPtr(ptr+80);
  v._ImageObjectiveCompleteGlow = ut.Entity._fromPtr(ptr+88);
  v._LabelTime = ut.Entity._fromPtr(ptr+96);
  v._ImageNoMovesWarning = ut.Entity._fromPtr(ptr+104);
  v._LastCollectedEggCount = HEAP32[(ptr+112)>>2];
  v._LastIsObjectiveComplete = (HEAP8[ptr+116]?true:false);
  return v;
};
game.GameUI._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ButtonPause);
  ut.Entity._toPtr(ptr+8, v.LabelScore);
  ut.Entity._toPtr(ptr+16, v.LabelRemainingMoves);
  ut.Entity._toPtr(ptr+24, v.ImageMoves);
  ut.Entity._toPtr(ptr+32, v.LabelObjective);
  ut.Entity._toPtr(ptr+40, v.ImageObjectivePoint);
  ut.Entity._toPtr(ptr+48, v.ImageObjectiveEgg);
  ut.Entity._toPtr(ptr+56, v.ImageObjectiveSurvival);
  ut.Entity._toPtr(ptr+64, v.ImageObjectivePointIncomplete);
  ut.Entity._toPtr(ptr+72, v.ImageObjectiveEggIncomplete);
  ut.Entity._toPtr(ptr+80, v.ImageObjectiveSurvivalIncomplete);
  ut.Entity._toPtr(ptr+88, v.ImageObjectiveCompleteGlow);
  ut.Entity._toPtr(ptr+96, v.LabelTime);
  ut.Entity._toPtr(ptr+104, v.ImageNoMovesWarning);
  HEAP32[(ptr+112)>>2] = v.LastCollectedEggCount;
  HEAP8[ptr+116] = (v.LastIsObjectiveComplete)?1:0;
};
game.GameUI._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ButtonPause);
  ut.Entity._toPtr(ptr+8, v.LabelScore);
  ut.Entity._toPtr(ptr+16, v.LabelRemainingMoves);
  ut.Entity._toPtr(ptr+24, v.ImageMoves);
  ut.Entity._toPtr(ptr+32, v.LabelObjective);
  ut.Entity._toPtr(ptr+40, v.ImageObjectivePoint);
  ut.Entity._toPtr(ptr+48, v.ImageObjectiveEgg);
  ut.Entity._toPtr(ptr+56, v.ImageObjectiveSurvival);
  ut.Entity._toPtr(ptr+64, v.ImageObjectivePointIncomplete);
  ut.Entity._toPtr(ptr+72, v.ImageObjectiveEggIncomplete);
  ut.Entity._toPtr(ptr+80, v.ImageObjectiveSurvivalIncomplete);
  ut.Entity._toPtr(ptr+88, v.ImageObjectiveCompleteGlow);
  ut.Entity._toPtr(ptr+96, v.LabelTime);
  ut.Entity._toPtr(ptr+104, v.ImageNoMovesWarning);
  HEAP32[(ptr+112)>>2] = v.LastCollectedEggCount;
  HEAP8[ptr+116] = (v.LastIsObjectiveComplete)?1:0;
};
game.GameUI._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(120);
  if (v) game.GameUI._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GameUI.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GameUI.StorageView.prototype = Object.create(null);
game.GameUI.StorageView.prototype.constructor = game.GameUI.StorageView;
game.GameUI._view = game.GameUI.StorageView;
game.GameUI.StorageView._isSharedComp = game.GameUI._isSharedComp = false;
game.GameUI.StorageView._fromPtr = game.GameUI._fromPtr;
game.GameUI.StorageView._toPtr = game.GameUI._toPtr;
game.GameUI.StorageView._tempHeapPtr = game.GameUI._tempHeapPtr;
game.GameUI.StorageView._size = game.GameUI._size;
game.GameUI.StorageView.prototype.$advance = function() {
  this._ptr += 120;
};
Object.defineProperties(game.GameUI.StorageView.prototype, {
  ButtonPause: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  LabelScore: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
  LabelRemainingMoves: {
    get: function() { return ut.Entity._fromPtr(this._ptr+16); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+16, v); },
  },
  ImageMoves: {
    get: function() { return ut.Entity._fromPtr(this._ptr+24); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+24, v); },
  },
  LabelObjective: {
    get: function() { return ut.Entity._fromPtr(this._ptr+32); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+32, v); },
  },
  ImageObjectivePoint: {
    get: function() { return ut.Entity._fromPtr(this._ptr+40); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+40, v); },
  },
  ImageObjectiveEgg: {
    get: function() { return ut.Entity._fromPtr(this._ptr+48); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+48, v); },
  },
  ImageObjectiveSurvival: {
    get: function() { return ut.Entity._fromPtr(this._ptr+56); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+56, v); },
  },
  ImageObjectivePointIncomplete: {
    get: function() { return ut.Entity._fromPtr(this._ptr+64); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+64, v); },
  },
  ImageObjectiveEggIncomplete: {
    get: function() { return ut.Entity._fromPtr(this._ptr+72); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+72, v); },
  },
  ImageObjectiveSurvivalIncomplete: {
    get: function() { return ut.Entity._fromPtr(this._ptr+80); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+80, v); },
  },
  ImageObjectiveCompleteGlow: {
    get: function() { return ut.Entity._fromPtr(this._ptr+88); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+88, v); },
  },
  LabelTime: {
    get: function() { return ut.Entity._fromPtr(this._ptr+96); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+96, v); },
  },
  ImageNoMovesWarning: {
    get: function() { return ut.Entity._fromPtr(this._ptr+104); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+104, v); },
  },
  LastCollectedEggCount: {
    get: function() { return HEAP32[(this._ptr+112)>>2]; },
    set: function(v) { HEAP32[(this._ptr+112)>>2] = v; },
  },
  LastIsObjectiveComplete: {
    get: function() { return (HEAP8[this._ptr+116]?true:false); },
    set: function(v) { HEAP8[this._ptr+116] = (v)?1:0; },
  },
});
game.GameUI._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.GameUI is a POD type, so a JavaScript side copy constructor game.GameUI._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.GameUI._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.GameUI', 120, [
    {name: 'ButtonPause', offset: 0, type: ut.meta.getType('ut.Entity')},
    {name: 'LabelScore', offset: 8, type: ut.meta.getType('ut.Entity')},
    {name: 'LabelRemainingMoves', offset: 16, type: ut.meta.getType('ut.Entity')},
    {name: 'ImageMoves', offset: 24, type: ut.meta.getType('ut.Entity')},
    {name: 'LabelObjective', offset: 32, type: ut.meta.getType('ut.Entity')},
    {name: 'ImageObjectivePoint', offset: 40, type: ut.meta.getType('ut.Entity')},
    {name: 'ImageObjectiveEgg', offset: 48, type: ut.meta.getType('ut.Entity')},
    {name: 'ImageObjectiveSurvival', offset: 56, type: ut.meta.getType('ut.Entity')},
    {name: 'ImageObjectivePointIncomplete', offset: 64, type: ut.meta.getType('ut.Entity')},
    {name: 'ImageObjectiveEggIncomplete', offset: 72, type: ut.meta.getType('ut.Entity')},
    {name: 'ImageObjectiveSurvivalIncomplete', offset: 80, type: ut.meta.getType('ut.Entity')},
    {name: 'ImageObjectiveCompleteGlow', offset: 88, type: ut.meta.getType('ut.Entity')},
    {name: 'LabelTime', offset: 96, type: ut.meta.getType('ut.Entity')},
    {name: 'ImageNoMovesWarning', offset: 104, type: ut.meta.getType('ut.Entity')},
    {name: 'LastCollectedEggCount', offset: 112, type: ut.meta.getType('int32')},
    {name: 'LastIsObjectiveComplete', offset: 116, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.GameUI, { cid: { configurable: true, get: function() { delete game.GameUI.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8,16,24,32,40,48,56,64,72,80,88,96,104]); var offsetsCount = 14; return game.GameUI.cid = Module._ut_component_register_cid_with_type(game.GameUI._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.GameUI.StorageView, { cid: { configurable: true, get: function() { return game.GameUI.cid; } } });
game.GameUI.ButtonPause = { $ofs:0, $t:"ut.Entity", $c:game.GameUI };
game.GameUI.ButtonPause.index = { $ofs:0, $t:"int32_t", $c:game.GameUI };
game.GameUI.ButtonPause.version = { $ofs:4, $t:"int32_t", $c:game.GameUI };
game.GameUI.LabelScore = { $ofs:8, $t:"ut.Entity", $c:game.GameUI };
game.GameUI.LabelScore.index = { $ofs:8, $t:"int32_t", $c:game.GameUI };
game.GameUI.LabelScore.version = { $ofs:12, $t:"int32_t", $c:game.GameUI };
game.GameUI.LabelRemainingMoves = { $ofs:16, $t:"ut.Entity", $c:game.GameUI };
game.GameUI.LabelRemainingMoves.index = { $ofs:16, $t:"int32_t", $c:game.GameUI };
game.GameUI.LabelRemainingMoves.version = { $ofs:20, $t:"int32_t", $c:game.GameUI };
game.GameUI.ImageMoves = { $ofs:24, $t:"ut.Entity", $c:game.GameUI };
game.GameUI.ImageMoves.index = { $ofs:24, $t:"int32_t", $c:game.GameUI };
game.GameUI.ImageMoves.version = { $ofs:28, $t:"int32_t", $c:game.GameUI };
game.GameUI.LabelObjective = { $ofs:32, $t:"ut.Entity", $c:game.GameUI };
game.GameUI.LabelObjective.index = { $ofs:32, $t:"int32_t", $c:game.GameUI };
game.GameUI.LabelObjective.version = { $ofs:36, $t:"int32_t", $c:game.GameUI };
game.GameUI.ImageObjectivePoint = { $ofs:40, $t:"ut.Entity", $c:game.GameUI };
game.GameUI.ImageObjectivePoint.index = { $ofs:40, $t:"int32_t", $c:game.GameUI };
game.GameUI.ImageObjectivePoint.version = { $ofs:44, $t:"int32_t", $c:game.GameUI };
game.GameUI.ImageObjectiveEgg = { $ofs:48, $t:"ut.Entity", $c:game.GameUI };
game.GameUI.ImageObjectiveEgg.index = { $ofs:48, $t:"int32_t", $c:game.GameUI };
game.GameUI.ImageObjectiveEgg.version = { $ofs:52, $t:"int32_t", $c:game.GameUI };
game.GameUI.ImageObjectiveSurvival = { $ofs:56, $t:"ut.Entity", $c:game.GameUI };
game.GameUI.ImageObjectiveSurvival.index = { $ofs:56, $t:"int32_t", $c:game.GameUI };
game.GameUI.ImageObjectiveSurvival.version = { $ofs:60, $t:"int32_t", $c:game.GameUI };
game.GameUI.ImageObjectivePointIncomplete = { $ofs:64, $t:"ut.Entity", $c:game.GameUI };
game.GameUI.ImageObjectivePointIncomplete.index = { $ofs:64, $t:"int32_t", $c:game.GameUI };
game.GameUI.ImageObjectivePointIncomplete.version = { $ofs:68, $t:"int32_t", $c:game.GameUI };
game.GameUI.ImageObjectiveEggIncomplete = { $ofs:72, $t:"ut.Entity", $c:game.GameUI };
game.GameUI.ImageObjectiveEggIncomplete.index = { $ofs:72, $t:"int32_t", $c:game.GameUI };
game.GameUI.ImageObjectiveEggIncomplete.version = { $ofs:76, $t:"int32_t", $c:game.GameUI };
game.GameUI.ImageObjectiveSurvivalIncomplete = { $ofs:80, $t:"ut.Entity", $c:game.GameUI };
game.GameUI.ImageObjectiveSurvivalIncomplete.index = { $ofs:80, $t:"int32_t", $c:game.GameUI };
game.GameUI.ImageObjectiveSurvivalIncomplete.version = { $ofs:84, $t:"int32_t", $c:game.GameUI };
game.GameUI.ImageObjectiveCompleteGlow = { $ofs:88, $t:"ut.Entity", $c:game.GameUI };
game.GameUI.ImageObjectiveCompleteGlow.index = { $ofs:88, $t:"int32_t", $c:game.GameUI };
game.GameUI.ImageObjectiveCompleteGlow.version = { $ofs:92, $t:"int32_t", $c:game.GameUI };
game.GameUI.LabelTime = { $ofs:96, $t:"ut.Entity", $c:game.GameUI };
game.GameUI.LabelTime.index = { $ofs:96, $t:"int32_t", $c:game.GameUI };
game.GameUI.LabelTime.version = { $ofs:100, $t:"int32_t", $c:game.GameUI };
game.GameUI.ImageNoMovesWarning = { $ofs:104, $t:"ut.Entity", $c:game.GameUI };
game.GameUI.ImageNoMovesWarning.index = { $ofs:104, $t:"int32_t", $c:game.GameUI };
game.GameUI.ImageNoMovesWarning.version = { $ofs:108, $t:"int32_t", $c:game.GameUI };
game.GameUI.LastCollectedEggCount = { $ofs:112, $t:"int32_t", $c:game.GameUI };
game.GameUI.LastIsObjectiveComplete = { $ofs:116, $t:"bool", $c:game.GameUI };
game.LanguagesMenu = function(arg0, arg1, arg2) {
  this._ButtonCancel = (arg0 === undefined ? new ut.Entity : arg0);
  this._ButtonEnglish = (arg1 === undefined ? new ut.Entity : arg1);
  this._ButtonFrench = (arg2 === undefined ? new ut.Entity : arg2);
};
game.LanguagesMenu.prototype = Object.create(null);
game.LanguagesMenu.prototype.constructor = game.LanguagesMenu;
Object.defineProperties(game.LanguagesMenu.prototype, {
  ButtonCancel: {
    get: function() { return this._ButtonCancel; },
    set: function(v) { this._ButtonCancel = (v === undefined ? new ut.Entity : v); },
  },
  ButtonEnglish: {
    get: function() { return this._ButtonEnglish; },
    set: function(v) { this._ButtonEnglish = (v === undefined ? new ut.Entity : v); },
  },
  ButtonFrench: {
    get: function() { return this._ButtonFrench; },
    set: function(v) { this._ButtonFrench = (v === undefined ? new ut.Entity : v); },
  },
});
game.LanguagesMenu._size = 24;
game.LanguagesMenu._fromPtr = function(ptr, v) {
  v = v || Object.create(game.LanguagesMenu.prototype);
  v._ButtonCancel = ut.Entity._fromPtr(ptr+0);
  v._ButtonEnglish = ut.Entity._fromPtr(ptr+8);
  v._ButtonFrench = ut.Entity._fromPtr(ptr+16);
  return v;
};
game.LanguagesMenu._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ButtonCancel);
  ut.Entity._toPtr(ptr+8, v.ButtonEnglish);
  ut.Entity._toPtr(ptr+16, v.ButtonFrench);
};
game.LanguagesMenu._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ButtonCancel);
  ut.Entity._toPtr(ptr+8, v.ButtonEnglish);
  ut.Entity._toPtr(ptr+16, v.ButtonFrench);
};
game.LanguagesMenu._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) game.LanguagesMenu._toTempHeapPtr(ptr, v);
  return ptr;
};
game.LanguagesMenu.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.LanguagesMenu.StorageView.prototype = Object.create(null);
game.LanguagesMenu.StorageView.prototype.constructor = game.LanguagesMenu.StorageView;
game.LanguagesMenu._view = game.LanguagesMenu.StorageView;
game.LanguagesMenu.StorageView._isSharedComp = game.LanguagesMenu._isSharedComp = false;
game.LanguagesMenu.StorageView._fromPtr = game.LanguagesMenu._fromPtr;
game.LanguagesMenu.StorageView._toPtr = game.LanguagesMenu._toPtr;
game.LanguagesMenu.StorageView._tempHeapPtr = game.LanguagesMenu._tempHeapPtr;
game.LanguagesMenu.StorageView._size = game.LanguagesMenu._size;
game.LanguagesMenu.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(game.LanguagesMenu.StorageView.prototype, {
  ButtonCancel: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  ButtonEnglish: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
  ButtonFrench: {
    get: function() { return ut.Entity._fromPtr(this._ptr+16); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+16, v); },
  },
});
game.LanguagesMenu._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.LanguagesMenu is a POD type, so a JavaScript side copy constructor game.LanguagesMenu._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.LanguagesMenu._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.LanguagesMenu', 24, [
    {name: 'ButtonCancel', offset: 0, type: ut.meta.getType('ut.Entity')},
    {name: 'ButtonEnglish', offset: 8, type: ut.meta.getType('ut.Entity')},
    {name: 'ButtonFrench', offset: 16, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.LanguagesMenu, { cid: { configurable: true, get: function() { delete game.LanguagesMenu.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8,16]); var offsetsCount = 3; return game.LanguagesMenu.cid = Module._ut_component_register_cid_with_type(game.LanguagesMenu._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.LanguagesMenu.StorageView, { cid: { configurable: true, get: function() { return game.LanguagesMenu.cid; } } });
game.LanguagesMenu.ButtonCancel = { $ofs:0, $t:"ut.Entity", $c:game.LanguagesMenu };
game.LanguagesMenu.ButtonCancel.index = { $ofs:0, $t:"int32_t", $c:game.LanguagesMenu };
game.LanguagesMenu.ButtonCancel.version = { $ofs:4, $t:"int32_t", $c:game.LanguagesMenu };
game.LanguagesMenu.ButtonEnglish = { $ofs:8, $t:"ut.Entity", $c:game.LanguagesMenu };
game.LanguagesMenu.ButtonEnglish.index = { $ofs:8, $t:"int32_t", $c:game.LanguagesMenu };
game.LanguagesMenu.ButtonEnglish.version = { $ofs:12, $t:"int32_t", $c:game.LanguagesMenu };
game.LanguagesMenu.ButtonFrench = { $ofs:16, $t:"ut.Entity", $c:game.LanguagesMenu };
game.LanguagesMenu.ButtonFrench.index = { $ofs:16, $t:"int32_t", $c:game.LanguagesMenu };
game.LanguagesMenu.ButtonFrench.version = { $ofs:20, $t:"int32_t", $c:game.LanguagesMenu };
game.MainMenu = function(arg0, arg1, arg2, arg3, arg4, arg5) {
  this._ImageLogo = (arg0 === undefined ? new ut.Entity : arg0);
  this._ButtonPlay = (arg1 === undefined ? new ut.Entity : arg1);
  this._TilingBackgroundEntity = (arg2 === undefined ? new ut.Entity : arg2);
  this._TilingBackgroundSpeed = (+(arg3===undefined ? 0 : arg3));
  this._ButtonWatchIntro = (arg4 === undefined ? new ut.Entity : arg4);
  this._ButtonSettings = (arg5 === undefined ? new ut.Entity : arg5);
};
game.MainMenu.prototype = Object.create(null);
game.MainMenu.prototype.constructor = game.MainMenu;
Object.defineProperties(game.MainMenu.prototype, {
  ImageLogo: {
    get: function() { return this._ImageLogo; },
    set: function(v) { this._ImageLogo = (v === undefined ? new ut.Entity : v); },
  },
  ButtonPlay: {
    get: function() { return this._ButtonPlay; },
    set: function(v) { this._ButtonPlay = (v === undefined ? new ut.Entity : v); },
  },
  TilingBackgroundEntity: {
    get: function() { return this._TilingBackgroundEntity; },
    set: function(v) { this._TilingBackgroundEntity = (v === undefined ? new ut.Entity : v); },
  },
  TilingBackgroundSpeed: {
    get: function() { return this._TilingBackgroundSpeed; },
    set: function(v) { this._TilingBackgroundSpeed = (+(v===undefined ? 0 : v)); },
  },
  ButtonWatchIntro: {
    get: function() { return this._ButtonWatchIntro; },
    set: function(v) { this._ButtonWatchIntro = (v === undefined ? new ut.Entity : v); },
  },
  ButtonSettings: {
    get: function() { return this._ButtonSettings; },
    set: function(v) { this._ButtonSettings = (v === undefined ? new ut.Entity : v); },
  },
});
game.MainMenu._size = 44;
game.MainMenu._fromPtr = function(ptr, v) {
  v = v || Object.create(game.MainMenu.prototype);
  v._ImageLogo = ut.Entity._fromPtr(ptr+0);
  v._ButtonPlay = ut.Entity._fromPtr(ptr+8);
  v._TilingBackgroundEntity = ut.Entity._fromPtr(ptr+16);
  v._TilingBackgroundSpeed = HEAPF32[(ptr+24)>>2];
  v._ButtonWatchIntro = ut.Entity._fromPtr(ptr+28);
  v._ButtonSettings = ut.Entity._fromPtr(ptr+36);
  return v;
};
game.MainMenu._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ImageLogo);
  ut.Entity._toPtr(ptr+8, v.ButtonPlay);
  ut.Entity._toPtr(ptr+16, v.TilingBackgroundEntity);
  HEAPF32[(ptr+24)>>2] = v.TilingBackgroundSpeed;
  ut.Entity._toPtr(ptr+28, v.ButtonWatchIntro);
  ut.Entity._toPtr(ptr+36, v.ButtonSettings);
};
game.MainMenu._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ImageLogo);
  ut.Entity._toPtr(ptr+8, v.ButtonPlay);
  ut.Entity._toPtr(ptr+16, v.TilingBackgroundEntity);
  HEAPF32[(ptr+24)>>2] = v.TilingBackgroundSpeed;
  ut.Entity._toPtr(ptr+28, v.ButtonWatchIntro);
  ut.Entity._toPtr(ptr+36, v.ButtonSettings);
};
game.MainMenu._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(44);
  if (v) game.MainMenu._toTempHeapPtr(ptr, v);
  return ptr;
};
game.MainMenu.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.MainMenu.StorageView.prototype = Object.create(null);
game.MainMenu.StorageView.prototype.constructor = game.MainMenu.StorageView;
game.MainMenu._view = game.MainMenu.StorageView;
game.MainMenu.StorageView._isSharedComp = game.MainMenu._isSharedComp = false;
game.MainMenu.StorageView._fromPtr = game.MainMenu._fromPtr;
game.MainMenu.StorageView._toPtr = game.MainMenu._toPtr;
game.MainMenu.StorageView._tempHeapPtr = game.MainMenu._tempHeapPtr;
game.MainMenu.StorageView._size = game.MainMenu._size;
game.MainMenu.StorageView.prototype.$advance = function() {
  this._ptr += 44;
};
Object.defineProperties(game.MainMenu.StorageView.prototype, {
  ImageLogo: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  ButtonPlay: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
  TilingBackgroundEntity: {
    get: function() { return ut.Entity._fromPtr(this._ptr+16); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+16, v); },
  },
  TilingBackgroundSpeed: {
    get: function() { return HEAPF32[(this._ptr+24)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+24)>>2] = v; },
  },
  ButtonWatchIntro: {
    get: function() { return ut.Entity._fromPtr(this._ptr+28); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+28, v); },
  },
  ButtonSettings: {
    get: function() { return ut.Entity._fromPtr(this._ptr+36); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+36, v); },
  },
});
game.MainMenu._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.MainMenu is a POD type, so a JavaScript side copy constructor game.MainMenu._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.MainMenu._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.MainMenu', 44, [
    {name: 'ImageLogo', offset: 0, type: ut.meta.getType('ut.Entity')},
    {name: 'ButtonPlay', offset: 8, type: ut.meta.getType('ut.Entity')},
    {name: 'TilingBackgroundEntity', offset: 16, type: ut.meta.getType('ut.Entity')},
    {name: 'TilingBackgroundSpeed', offset: 24, type: ut.meta.getType('float')},
    {name: 'ButtonWatchIntro', offset: 28, type: ut.meta.getType('ut.Entity')},
    {name: 'ButtonSettings', offset: 36, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.MainMenu, { cid: { configurable: true, get: function() { delete game.MainMenu.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8,16,28,36]); var offsetsCount = 5; return game.MainMenu.cid = Module._ut_component_register_cid_with_type(game.MainMenu._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.MainMenu.StorageView, { cid: { configurable: true, get: function() { return game.MainMenu.cid; } } });
game.MainMenu.ImageLogo = { $ofs:0, $t:"ut.Entity", $c:game.MainMenu };
game.MainMenu.ImageLogo.index = { $ofs:0, $t:"int32_t", $c:game.MainMenu };
game.MainMenu.ImageLogo.version = { $ofs:4, $t:"int32_t", $c:game.MainMenu };
game.MainMenu.ButtonPlay = { $ofs:8, $t:"ut.Entity", $c:game.MainMenu };
game.MainMenu.ButtonPlay.index = { $ofs:8, $t:"int32_t", $c:game.MainMenu };
game.MainMenu.ButtonPlay.version = { $ofs:12, $t:"int32_t", $c:game.MainMenu };
game.MainMenu.TilingBackgroundEntity = { $ofs:16, $t:"ut.Entity", $c:game.MainMenu };
game.MainMenu.TilingBackgroundEntity.index = { $ofs:16, $t:"int32_t", $c:game.MainMenu };
game.MainMenu.TilingBackgroundEntity.version = { $ofs:20, $t:"int32_t", $c:game.MainMenu };
game.MainMenu.TilingBackgroundSpeed = { $ofs:24, $t:"float", $c:game.MainMenu };
game.MainMenu.ButtonWatchIntro = { $ofs:28, $t:"ut.Entity", $c:game.MainMenu };
game.MainMenu.ButtonWatchIntro.index = { $ofs:28, $t:"int32_t", $c:game.MainMenu };
game.MainMenu.ButtonWatchIntro.version = { $ofs:32, $t:"int32_t", $c:game.MainMenu };
game.MainMenu.ButtonSettings = { $ofs:36, $t:"ut.Entity", $c:game.MainMenu };
game.MainMenu.ButtonSettings.index = { $ofs:36, $t:"int32_t", $c:game.MainMenu };
game.MainMenu.ButtonSettings.version = { $ofs:40, $t:"int32_t", $c:game.MainMenu };
game.PauseMenu = function(arg0, arg1) {
  this._ButtonResume = (arg0 === undefined ? new ut.Entity : arg0);
  this._ButtonQuit = (arg1 === undefined ? new ut.Entity : arg1);
};
game.PauseMenu.prototype = Object.create(null);
game.PauseMenu.prototype.constructor = game.PauseMenu;
Object.defineProperties(game.PauseMenu.prototype, {
  ButtonResume: {
    get: function() { return this._ButtonResume; },
    set: function(v) { this._ButtonResume = (v === undefined ? new ut.Entity : v); },
  },
  ButtonQuit: {
    get: function() { return this._ButtonQuit; },
    set: function(v) { this._ButtonQuit = (v === undefined ? new ut.Entity : v); },
  },
});
game.PauseMenu._size = 16;
game.PauseMenu._fromPtr = function(ptr, v) {
  v = v || Object.create(game.PauseMenu.prototype);
  v._ButtonResume = ut.Entity._fromPtr(ptr+0);
  v._ButtonQuit = ut.Entity._fromPtr(ptr+8);
  return v;
};
game.PauseMenu._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ButtonResume);
  ut.Entity._toPtr(ptr+8, v.ButtonQuit);
};
game.PauseMenu._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ButtonResume);
  ut.Entity._toPtr(ptr+8, v.ButtonQuit);
};
game.PauseMenu._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.PauseMenu._toTempHeapPtr(ptr, v);
  return ptr;
};
game.PauseMenu.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.PauseMenu.StorageView.prototype = Object.create(null);
game.PauseMenu.StorageView.prototype.constructor = game.PauseMenu.StorageView;
game.PauseMenu._view = game.PauseMenu.StorageView;
game.PauseMenu.StorageView._isSharedComp = game.PauseMenu._isSharedComp = false;
game.PauseMenu.StorageView._fromPtr = game.PauseMenu._fromPtr;
game.PauseMenu.StorageView._toPtr = game.PauseMenu._toPtr;
game.PauseMenu.StorageView._tempHeapPtr = game.PauseMenu._tempHeapPtr;
game.PauseMenu.StorageView._size = game.PauseMenu._size;
game.PauseMenu.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.PauseMenu.StorageView.prototype, {
  ButtonResume: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  ButtonQuit: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
});
game.PauseMenu._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.PauseMenu is a POD type, so a JavaScript side copy constructor game.PauseMenu._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.PauseMenu._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.PauseMenu', 16, [
    {name: 'ButtonResume', offset: 0, type: ut.meta.getType('ut.Entity')},
    {name: 'ButtonQuit', offset: 8, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.PauseMenu, { cid: { configurable: true, get: function() { delete game.PauseMenu.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8]); var offsetsCount = 2; return game.PauseMenu.cid = Module._ut_component_register_cid_with_type(game.PauseMenu._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.PauseMenu.StorageView, { cid: { configurable: true, get: function() { return game.PauseMenu.cid; } } });
game.PauseMenu.ButtonResume = { $ofs:0, $t:"ut.Entity", $c:game.PauseMenu };
game.PauseMenu.ButtonResume.index = { $ofs:0, $t:"int32_t", $c:game.PauseMenu };
game.PauseMenu.ButtonResume.version = { $ofs:4, $t:"int32_t", $c:game.PauseMenu };
game.PauseMenu.ButtonQuit = { $ofs:8, $t:"ut.Entity", $c:game.PauseMenu };
game.PauseMenu.ButtonQuit.index = { $ofs:8, $t:"int32_t", $c:game.PauseMenu };
game.PauseMenu.ButtonQuit.version = { $ofs:12, $t:"int32_t", $c:game.PauseMenu };
game.Popup = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  this._HasPlayedInTransition = (arg0 ? true : false);
  this._PanelContent = (arg1 === undefined ? new ut.Entity : arg1);
  this._ImageBackground = (arg2 === undefined ? new ut.Entity : arg2);
  this._TargetFadeAlpha = (+(arg3===undefined ? 0 : arg3));
  this._Timer = (+(arg4===undefined ? 0 : arg4));
  this._FadeInDuration = (+(arg5===undefined ? 0 : arg5));
  this._ScaleInDuration = (+(arg6===undefined ? 0 : arg6));
  this._DelayIn = (+(arg7===undefined ? 0 : arg7));
  this._HasFinishedDelay = (arg8 ? true : false);
};
game.Popup.prototype = Object.create(null);
game.Popup.prototype.constructor = game.Popup;
Object.defineProperties(game.Popup.prototype, {
  HasPlayedInTransition: {
    get: function() { return this._HasPlayedInTransition; },
    set: function(v) { this._HasPlayedInTransition = (v ? true : false); },
  },
  PanelContent: {
    get: function() { return this._PanelContent; },
    set: function(v) { this._PanelContent = (v === undefined ? new ut.Entity : v); },
  },
  ImageBackground: {
    get: function() { return this._ImageBackground; },
    set: function(v) { this._ImageBackground = (v === undefined ? new ut.Entity : v); },
  },
  TargetFadeAlpha: {
    get: function() { return this._TargetFadeAlpha; },
    set: function(v) { this._TargetFadeAlpha = (+(v===undefined ? 0 : v)); },
  },
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
  FadeInDuration: {
    get: function() { return this._FadeInDuration; },
    set: function(v) { this._FadeInDuration = (+(v===undefined ? 0 : v)); },
  },
  ScaleInDuration: {
    get: function() { return this._ScaleInDuration; },
    set: function(v) { this._ScaleInDuration = (+(v===undefined ? 0 : v)); },
  },
  DelayIn: {
    get: function() { return this._DelayIn; },
    set: function(v) { this._DelayIn = (+(v===undefined ? 0 : v)); },
  },
  HasFinishedDelay: {
    get: function() { return this._HasFinishedDelay; },
    set: function(v) { this._HasFinishedDelay = (v ? true : false); },
  },
});
game.Popup._size = 44;
game.Popup._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Popup.prototype);
  v._HasPlayedInTransition = (HEAP8[ptr+0]?true:false);
  v._PanelContent = ut.Entity._fromPtr(ptr+4);
  v._ImageBackground = ut.Entity._fromPtr(ptr+12);
  v._TargetFadeAlpha = HEAPF32[(ptr+20)>>2];
  v._Timer = HEAPF32[(ptr+24)>>2];
  v._FadeInDuration = HEAPF32[(ptr+28)>>2];
  v._ScaleInDuration = HEAPF32[(ptr+32)>>2];
  v._DelayIn = HEAPF32[(ptr+36)>>2];
  v._HasFinishedDelay = (HEAP8[ptr+40]?true:false);
  return v;
};
game.Popup._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.HasPlayedInTransition)?1:0;
  ut.Entity._toPtr(ptr+4, v.PanelContent);
  ut.Entity._toPtr(ptr+12, v.ImageBackground);
  HEAPF32[(ptr+20)>>2] = v.TargetFadeAlpha;
  HEAPF32[(ptr+24)>>2] = v.Timer;
  HEAPF32[(ptr+28)>>2] = v.FadeInDuration;
  HEAPF32[(ptr+32)>>2] = v.ScaleInDuration;
  HEAPF32[(ptr+36)>>2] = v.DelayIn;
  HEAP8[ptr+40] = (v.HasFinishedDelay)?1:0;
};
game.Popup._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.HasPlayedInTransition)?1:0;
  ut.Entity._toPtr(ptr+4, v.PanelContent);
  ut.Entity._toPtr(ptr+12, v.ImageBackground);
  HEAPF32[(ptr+20)>>2] = v.TargetFadeAlpha;
  HEAPF32[(ptr+24)>>2] = v.Timer;
  HEAPF32[(ptr+28)>>2] = v.FadeInDuration;
  HEAPF32[(ptr+32)>>2] = v.ScaleInDuration;
  HEAPF32[(ptr+36)>>2] = v.DelayIn;
  HEAP8[ptr+40] = (v.HasFinishedDelay)?1:0;
};
game.Popup._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(44);
  if (v) game.Popup._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Popup.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Popup.StorageView.prototype = Object.create(null);
game.Popup.StorageView.prototype.constructor = game.Popup.StorageView;
game.Popup._view = game.Popup.StorageView;
game.Popup.StorageView._isSharedComp = game.Popup._isSharedComp = false;
game.Popup.StorageView._fromPtr = game.Popup._fromPtr;
game.Popup.StorageView._toPtr = game.Popup._toPtr;
game.Popup.StorageView._tempHeapPtr = game.Popup._tempHeapPtr;
game.Popup.StorageView._size = game.Popup._size;
game.Popup.StorageView.prototype.$advance = function() {
  this._ptr += 44;
};
Object.defineProperties(game.Popup.StorageView.prototype, {
  HasPlayedInTransition: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  PanelContent: {
    get: function() { return ut.Entity._fromPtr(this._ptr+4); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+4, v); },
  },
  ImageBackground: {
    get: function() { return ut.Entity._fromPtr(this._ptr+12); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+12, v); },
  },
  TargetFadeAlpha: {
    get: function() { return HEAPF32[(this._ptr+20)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+20)>>2] = v; },
  },
  Timer: {
    get: function() { return HEAPF32[(this._ptr+24)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+24)>>2] = v; },
  },
  FadeInDuration: {
    get: function() { return HEAPF32[(this._ptr+28)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+28)>>2] = v; },
  },
  ScaleInDuration: {
    get: function() { return HEAPF32[(this._ptr+32)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+32)>>2] = v; },
  },
  DelayIn: {
    get: function() { return HEAPF32[(this._ptr+36)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+36)>>2] = v; },
  },
  HasFinishedDelay: {
    get: function() { return (HEAP8[this._ptr+40]?true:false); },
    set: function(v) { HEAP8[this._ptr+40] = (v)?1:0; },
  },
});
game.Popup._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Popup is a POD type, so a JavaScript side copy constructor game.Popup._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Popup._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Popup', 44, [
    {name: 'HasPlayedInTransition', offset: 0, type: ut.meta.getType('bool')},
    {name: 'PanelContent', offset: 4, type: ut.meta.getType('ut.Entity')},
    {name: 'ImageBackground', offset: 12, type: ut.meta.getType('ut.Entity')},
    {name: 'TargetFadeAlpha', offset: 20, type: ut.meta.getType('float')},
    {name: 'Timer', offset: 24, type: ut.meta.getType('float')},
    {name: 'FadeInDuration', offset: 28, type: ut.meta.getType('float')},
    {name: 'ScaleInDuration', offset: 32, type: ut.meta.getType('float')},
    {name: 'DelayIn', offset: 36, type: ut.meta.getType('float')},
    {name: 'HasFinishedDelay', offset: 40, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.Popup, { cid: { configurable: true, get: function() { delete game.Popup.cid; var offsetsPtr = ut.tempHeapPtrI32([4,12]); var offsetsCount = 2; return game.Popup.cid = Module._ut_component_register_cid_with_type(game.Popup._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Popup.StorageView, { cid: { configurable: true, get: function() { return game.Popup.cid; } } });
game.Popup.HasPlayedInTransition = { $ofs:0, $t:"bool", $c:game.Popup };
game.Popup.PanelContent = { $ofs:4, $t:"ut.Entity", $c:game.Popup };
game.Popup.PanelContent.index = { $ofs:4, $t:"int32_t", $c:game.Popup };
game.Popup.PanelContent.version = { $ofs:8, $t:"int32_t", $c:game.Popup };
game.Popup.ImageBackground = { $ofs:12, $t:"ut.Entity", $c:game.Popup };
game.Popup.ImageBackground.index = { $ofs:12, $t:"int32_t", $c:game.Popup };
game.Popup.ImageBackground.version = { $ofs:16, $t:"int32_t", $c:game.Popup };
game.Popup.TargetFadeAlpha = { $ofs:20, $t:"float", $c:game.Popup };
game.Popup.Timer = { $ofs:24, $t:"float", $c:game.Popup };
game.Popup.FadeInDuration = { $ofs:28, $t:"float", $c:game.Popup };
game.Popup.ScaleInDuration = { $ofs:32, $t:"float", $c:game.Popup };
game.Popup.DelayIn = { $ofs:36, $t:"float", $c:game.Popup };
game.Popup.HasFinishedDelay = { $ofs:40, $t:"bool", $c:game.Popup };
game.ScoreDisplay = function() {
};
game.ScoreDisplay.prototype = Object.create(null);
game.ScoreDisplay.prototype.constructor = game.ScoreDisplay;
Object.defineProperties(game.ScoreDisplay.prototype, {
});
game.ScoreDisplay._size = 1;
game.ScoreDisplay._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ScoreDisplay.prototype);
  return v;
};
game.ScoreDisplay._toPtr = function(ptr, v) {
};
game.ScoreDisplay._toTempHeapPtr = function(ptr, v) {
};
game.ScoreDisplay._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.ScoreDisplay._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ScoreDisplay.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ScoreDisplay.StorageView.prototype = Object.create(null);
game.ScoreDisplay.StorageView.prototype.constructor = game.ScoreDisplay.StorageView;
game.ScoreDisplay._view = game.ScoreDisplay.StorageView;
game.ScoreDisplay.StorageView._isSharedComp = game.ScoreDisplay._isSharedComp = false;
game.ScoreDisplay.StorageView._fromPtr = game.ScoreDisplay._fromPtr;
game.ScoreDisplay.StorageView._toPtr = game.ScoreDisplay._toPtr;
game.ScoreDisplay.StorageView._tempHeapPtr = game.ScoreDisplay._tempHeapPtr;
game.ScoreDisplay.StorageView._size = game.ScoreDisplay._size;
game.ScoreDisplay.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.ScoreDisplay.StorageView.prototype, {
});
game.ScoreDisplay._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ScoreDisplay is a POD type, so a JavaScript side copy constructor game.ScoreDisplay._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.ScoreDisplay._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.ScoreDisplay', 1, []);
})();
Object.defineProperties(game.ScoreDisplay, { cid: { configurable: true, get: function() { delete game.ScoreDisplay.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ScoreDisplay.cid = Module._ut_component_register_cid_with_type(game.ScoreDisplay._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.ScoreDisplay.StorageView, { cid: { configurable: true, get: function() { return game.ScoreDisplay.cid; } } });
game.ScoreGainLabel = function(arg0, arg1, arg2, arg3) {
  this._Timer = (+(arg0===undefined ? 0 : arg0));
  this._Duration = (+(arg1===undefined ? 0 : arg1));
  this._SpeedY = (+(arg2===undefined ? 0 : arg2));
  this._AlphaCurve = (arg3 === undefined ? new ut.Entity : arg3);
};
game.ScoreGainLabel.prototype = Object.create(null);
game.ScoreGainLabel.prototype.constructor = game.ScoreGainLabel;
Object.defineProperties(game.ScoreGainLabel.prototype, {
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
  Duration: {
    get: function() { return this._Duration; },
    set: function(v) { this._Duration = (+(v===undefined ? 0 : v)); },
  },
  SpeedY: {
    get: function() { return this._SpeedY; },
    set: function(v) { this._SpeedY = (+(v===undefined ? 0 : v)); },
  },
  AlphaCurve: {
    get: function() { return this._AlphaCurve; },
    set: function(v) { this._AlphaCurve = (v === undefined ? new ut.Entity : v); },
  },
});
game.ScoreGainLabel._size = 20;
game.ScoreGainLabel._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ScoreGainLabel.prototype);
  v._Timer = HEAPF32[(ptr+0)>>2];
  v._Duration = HEAPF32[(ptr+4)>>2];
  v._SpeedY = HEAPF32[(ptr+8)>>2];
  v._AlphaCurve = ut.Entity._fromPtr(ptr+12);
  return v;
};
game.ScoreGainLabel._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Timer;
  HEAPF32[(ptr+4)>>2] = v.Duration;
  HEAPF32[(ptr+8)>>2] = v.SpeedY;
  ut.Entity._toPtr(ptr+12, v.AlphaCurve);
};
game.ScoreGainLabel._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Timer;
  HEAPF32[(ptr+4)>>2] = v.Duration;
  HEAPF32[(ptr+8)>>2] = v.SpeedY;
  ut.Entity._toPtr(ptr+12, v.AlphaCurve);
};
game.ScoreGainLabel._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.ScoreGainLabel._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ScoreGainLabel.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ScoreGainLabel.StorageView.prototype = Object.create(null);
game.ScoreGainLabel.StorageView.prototype.constructor = game.ScoreGainLabel.StorageView;
game.ScoreGainLabel._view = game.ScoreGainLabel.StorageView;
game.ScoreGainLabel.StorageView._isSharedComp = game.ScoreGainLabel._isSharedComp = false;
game.ScoreGainLabel.StorageView._fromPtr = game.ScoreGainLabel._fromPtr;
game.ScoreGainLabel.StorageView._toPtr = game.ScoreGainLabel._toPtr;
game.ScoreGainLabel.StorageView._tempHeapPtr = game.ScoreGainLabel._tempHeapPtr;
game.ScoreGainLabel.StorageView._size = game.ScoreGainLabel._size;
game.ScoreGainLabel.StorageView.prototype.$advance = function() {
  this._ptr += 20;
};
Object.defineProperties(game.ScoreGainLabel.StorageView.prototype, {
  Timer: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  Duration: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  SpeedY: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  AlphaCurve: {
    get: function() { return ut.Entity._fromPtr(this._ptr+12); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+12, v); },
  },
});
game.ScoreGainLabel._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ScoreGainLabel is a POD type, so a JavaScript side copy constructor game.ScoreGainLabel._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.ScoreGainLabel._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.ScoreGainLabel', 20, [
    {name: 'Timer', offset: 0, type: ut.meta.getType('float')},
    {name: 'Duration', offset: 4, type: ut.meta.getType('float')},
    {name: 'SpeedY', offset: 8, type: ut.meta.getType('float')},
    {name: 'AlphaCurve', offset: 12, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.ScoreGainLabel, { cid: { configurable: true, get: function() { delete game.ScoreGainLabel.cid; var offsetsPtr = ut.tempHeapPtrI32([12]); var offsetsCount = 1; return game.ScoreGainLabel.cid = Module._ut_component_register_cid_with_type(game.ScoreGainLabel._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.ScoreGainLabel.StorageView, { cid: { configurable: true, get: function() { return game.ScoreGainLabel.cid; } } });
game.ScoreGainLabel.Timer = { $ofs:0, $t:"float", $c:game.ScoreGainLabel };
game.ScoreGainLabel.Duration = { $ofs:4, $t:"float", $c:game.ScoreGainLabel };
game.ScoreGainLabel.SpeedY = { $ofs:8, $t:"float", $c:game.ScoreGainLabel };
game.ScoreGainLabel.AlphaCurve = { $ofs:12, $t:"ut.Entity", $c:game.ScoreGainLabel };
game.ScoreGainLabel.AlphaCurve.index = { $ofs:12, $t:"int32_t", $c:game.ScoreGainLabel };
game.ScoreGainLabel.AlphaCurve.version = { $ofs:16, $t:"int32_t", $c:game.ScoreGainLabel };
game.ScreenTransition = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
  this._InDuration = (+(arg0===undefined ? 0 : arg0));
  this._OutDuration = (+(arg1===undefined ? 0 : arg1));
  this._BlackCurtain = (arg2 === undefined ? new ut.Entity : arg2);
  this._IsTransitionIn = (arg3 ? true : false);
  this._Timer = (+(arg4===undefined ? 0 : arg4));
  this._TransitionToState = (arg5|0);
  this._ScaleHole = (arg6 === undefined ? new ut.Entity : arg6);
  this._SkipFrameCount = (arg7|0);
  this._ScaleHoleCurve = (arg8 === undefined ? new ut.Entity : arg8);
  this._IsScaleHoleTransition = (arg9 ? true : false);
};
game.ScreenTransition.prototype = Object.create(null);
game.ScreenTransition.prototype.constructor = game.ScreenTransition;
Object.defineProperties(game.ScreenTransition.prototype, {
  InDuration: {
    get: function() { return this._InDuration; },
    set: function(v) { this._InDuration = (+(v===undefined ? 0 : v)); },
  },
  OutDuration: {
    get: function() { return this._OutDuration; },
    set: function(v) { this._OutDuration = (+(v===undefined ? 0 : v)); },
  },
  BlackCurtain: {
    get: function() { return this._BlackCurtain; },
    set: function(v) { this._BlackCurtain = (v === undefined ? new ut.Entity : v); },
  },
  IsTransitionIn: {
    get: function() { return this._IsTransitionIn; },
    set: function(v) { this._IsTransitionIn = (v ? true : false); },
  },
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
  TransitionToState: {
    get: function() { return this._TransitionToState; },
    set: function(v) { this._TransitionToState = (v|0); },
  },
  ScaleHole: {
    get: function() { return this._ScaleHole; },
    set: function(v) { this._ScaleHole = (v === undefined ? new ut.Entity : v); },
  },
  SkipFrameCount: {
    get: function() { return this._SkipFrameCount; },
    set: function(v) { this._SkipFrameCount = (v|0); },
  },
  ScaleHoleCurve: {
    get: function() { return this._ScaleHoleCurve; },
    set: function(v) { this._ScaleHoleCurve = (v === undefined ? new ut.Entity : v); },
  },
  IsScaleHoleTransition: {
    get: function() { return this._IsScaleHoleTransition; },
    set: function(v) { this._IsScaleHoleTransition = (v ? true : false); },
  },
});
game.ScreenTransition._size = 52;
game.ScreenTransition._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ScreenTransition.prototype);
  v._InDuration = HEAPF32[(ptr+0)>>2];
  v._OutDuration = HEAPF32[(ptr+4)>>2];
  v._BlackCurtain = ut.Entity._fromPtr(ptr+8);
  v._IsTransitionIn = (HEAP8[ptr+16]?true:false);
  v._Timer = HEAPF32[(ptr+20)>>2];
  v._TransitionToState = HEAP32[(ptr+24)>>2];
  v._ScaleHole = ut.Entity._fromPtr(ptr+28);
  v._SkipFrameCount = HEAP32[(ptr+36)>>2];
  v._ScaleHoleCurve = ut.Entity._fromPtr(ptr+40);
  v._IsScaleHoleTransition = (HEAP8[ptr+48]?true:false);
  return v;
};
game.ScreenTransition._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.InDuration;
  HEAPF32[(ptr+4)>>2] = v.OutDuration;
  ut.Entity._toPtr(ptr+8, v.BlackCurtain);
  HEAP8[ptr+16] = (v.IsTransitionIn)?1:0;
  HEAPF32[(ptr+20)>>2] = v.Timer;
  HEAP32[(ptr+24)>>2] = v.TransitionToState;
  ut.Entity._toPtr(ptr+28, v.ScaleHole);
  HEAP32[(ptr+36)>>2] = v.SkipFrameCount;
  ut.Entity._toPtr(ptr+40, v.ScaleHoleCurve);
  HEAP8[ptr+48] = (v.IsScaleHoleTransition)?1:0;
};
game.ScreenTransition._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.InDuration;
  HEAPF32[(ptr+4)>>2] = v.OutDuration;
  ut.Entity._toPtr(ptr+8, v.BlackCurtain);
  HEAP8[ptr+16] = (v.IsTransitionIn)?1:0;
  HEAPF32[(ptr+20)>>2] = v.Timer;
  HEAP32[(ptr+24)>>2] = v.TransitionToState;
  ut.Entity._toPtr(ptr+28, v.ScaleHole);
  HEAP32[(ptr+36)>>2] = v.SkipFrameCount;
  ut.Entity._toPtr(ptr+40, v.ScaleHoleCurve);
  HEAP8[ptr+48] = (v.IsScaleHoleTransition)?1:0;
};
game.ScreenTransition._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(52);
  if (v) game.ScreenTransition._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ScreenTransition.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ScreenTransition.StorageView.prototype = Object.create(null);
game.ScreenTransition.StorageView.prototype.constructor = game.ScreenTransition.StorageView;
game.ScreenTransition._view = game.ScreenTransition.StorageView;
game.ScreenTransition.StorageView._isSharedComp = game.ScreenTransition._isSharedComp = false;
game.ScreenTransition.StorageView._fromPtr = game.ScreenTransition._fromPtr;
game.ScreenTransition.StorageView._toPtr = game.ScreenTransition._toPtr;
game.ScreenTransition.StorageView._tempHeapPtr = game.ScreenTransition._tempHeapPtr;
game.ScreenTransition.StorageView._size = game.ScreenTransition._size;
game.ScreenTransition.StorageView.prototype.$advance = function() {
  this._ptr += 52;
};
Object.defineProperties(game.ScreenTransition.StorageView.prototype, {
  InDuration: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  OutDuration: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  BlackCurtain: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
  IsTransitionIn: {
    get: function() { return (HEAP8[this._ptr+16]?true:false); },
    set: function(v) { HEAP8[this._ptr+16] = (v)?1:0; },
  },
  Timer: {
    get: function() { return HEAPF32[(this._ptr+20)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+20)>>2] = v; },
  },
  TransitionToState: {
    get: function() { return HEAP32[(this._ptr+24)>>2]; },
    set: function(v) { HEAP32[(this._ptr+24)>>2] = v; },
  },
  ScaleHole: {
    get: function() { return ut.Entity._fromPtr(this._ptr+28); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+28, v); },
  },
  SkipFrameCount: {
    get: function() { return HEAP32[(this._ptr+36)>>2]; },
    set: function(v) { HEAP32[(this._ptr+36)>>2] = v; },
  },
  ScaleHoleCurve: {
    get: function() { return ut.Entity._fromPtr(this._ptr+40); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+40, v); },
  },
  IsScaleHoleTransition: {
    get: function() { return (HEAP8[this._ptr+48]?true:false); },
    set: function(v) { HEAP8[this._ptr+48] = (v)?1:0; },
  },
});
game.ScreenTransition._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ScreenTransition is a POD type, so a JavaScript side copy constructor game.ScreenTransition._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.ScreenTransition._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.ScreenTransition', 52, [
    {name: 'InDuration', offset: 0, type: ut.meta.getType('float')},
    {name: 'OutDuration', offset: 4, type: ut.meta.getType('float')},
    {name: 'BlackCurtain', offset: 8, type: ut.meta.getType('ut.Entity')},
    {name: 'IsTransitionIn', offset: 16, type: ut.meta.getType('bool')},
    {name: 'Timer', offset: 20, type: ut.meta.getType('float')},
    {name: 'TransitionToState', offset: 24, type: ut.meta.getType('game.GameStateTypes')},
    {name: 'ScaleHole', offset: 28, type: ut.meta.getType('ut.Entity')},
    {name: 'SkipFrameCount', offset: 36, type: ut.meta.getType('int32')},
    {name: 'ScaleHoleCurve', offset: 40, type: ut.meta.getType('ut.Entity')},
    {name: 'IsScaleHoleTransition', offset: 48, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.ScreenTransition, { cid: { configurable: true, get: function() { delete game.ScreenTransition.cid; var offsetsPtr = ut.tempHeapPtrI32([8,28,40]); var offsetsCount = 3; return game.ScreenTransition.cid = Module._ut_component_register_cid_with_type(game.ScreenTransition._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.ScreenTransition.StorageView, { cid: { configurable: true, get: function() { return game.ScreenTransition.cid; } } });
game.ScreenTransition.InDuration = { $ofs:0, $t:"float", $c:game.ScreenTransition };
game.ScreenTransition.OutDuration = { $ofs:4, $t:"float", $c:game.ScreenTransition };
game.ScreenTransition.BlackCurtain = { $ofs:8, $t:"ut.Entity", $c:game.ScreenTransition };
game.ScreenTransition.BlackCurtain.index = { $ofs:8, $t:"int32_t", $c:game.ScreenTransition };
game.ScreenTransition.BlackCurtain.version = { $ofs:12, $t:"int32_t", $c:game.ScreenTransition };
game.ScreenTransition.IsTransitionIn = { $ofs:16, $t:"bool", $c:game.ScreenTransition };
game.ScreenTransition.Timer = { $ofs:20, $t:"float", $c:game.ScreenTransition };
game.ScreenTransition.TransitionToState = { $ofs:24, $t:"game.GameStateTypes", $c:game.ScreenTransition };
game.ScreenTransition.ScaleHole = { $ofs:28, $t:"ut.Entity", $c:game.ScreenTransition };
game.ScreenTransition.ScaleHole.index = { $ofs:28, $t:"int32_t", $c:game.ScreenTransition };
game.ScreenTransition.ScaleHole.version = { $ofs:32, $t:"int32_t", $c:game.ScreenTransition };
game.ScreenTransition.SkipFrameCount = { $ofs:36, $t:"int32_t", $c:game.ScreenTransition };
game.ScreenTransition.ScaleHoleCurve = { $ofs:40, $t:"ut.Entity", $c:game.ScreenTransition };
game.ScreenTransition.ScaleHoleCurve.index = { $ofs:40, $t:"int32_t", $c:game.ScreenTransition };
game.ScreenTransition.ScaleHoleCurve.version = { $ofs:44, $t:"int32_t", $c:game.ScreenTransition };
game.ScreenTransition.IsScaleHoleTransition = { $ofs:48, $t:"bool", $c:game.ScreenTransition };
game.SettingsMenu = function(arg0, arg1, arg2, arg3, arg4, arg5) {
  this._ButtonOK = (arg0 === undefined ? new ut.Entity : arg0);
  this._ButtonCredits = (arg1 === undefined ? new ut.Entity : arg1);
  this._ButtonResetProgress = (arg2 === undefined ? new ut.Entity : arg2);
  this._ButtonLanguage = (arg3 === undefined ? new ut.Entity : arg3);
  this._ButtonRenderMode = (arg4 === undefined ? new ut.Entity : arg4);
  this._LabelRenderMode = (arg5 === undefined ? new ut.Entity : arg5);
};
game.SettingsMenu.prototype = Object.create(null);
game.SettingsMenu.prototype.constructor = game.SettingsMenu;
Object.defineProperties(game.SettingsMenu.prototype, {
  ButtonOK: {
    get: function() { return this._ButtonOK; },
    set: function(v) { this._ButtonOK = (v === undefined ? new ut.Entity : v); },
  },
  ButtonCredits: {
    get: function() { return this._ButtonCredits; },
    set: function(v) { this._ButtonCredits = (v === undefined ? new ut.Entity : v); },
  },
  ButtonResetProgress: {
    get: function() { return this._ButtonResetProgress; },
    set: function(v) { this._ButtonResetProgress = (v === undefined ? new ut.Entity : v); },
  },
  ButtonLanguage: {
    get: function() { return this._ButtonLanguage; },
    set: function(v) { this._ButtonLanguage = (v === undefined ? new ut.Entity : v); },
  },
  ButtonRenderMode: {
    get: function() { return this._ButtonRenderMode; },
    set: function(v) { this._ButtonRenderMode = (v === undefined ? new ut.Entity : v); },
  },
  LabelRenderMode: {
    get: function() { return this._LabelRenderMode; },
    set: function(v) { this._LabelRenderMode = (v === undefined ? new ut.Entity : v); },
  },
});
game.SettingsMenu._size = 48;
game.SettingsMenu._fromPtr = function(ptr, v) {
  v = v || Object.create(game.SettingsMenu.prototype);
  v._ButtonOK = ut.Entity._fromPtr(ptr+0);
  v._ButtonCredits = ut.Entity._fromPtr(ptr+8);
  v._ButtonResetProgress = ut.Entity._fromPtr(ptr+16);
  v._ButtonLanguage = ut.Entity._fromPtr(ptr+24);
  v._ButtonRenderMode = ut.Entity._fromPtr(ptr+32);
  v._LabelRenderMode = ut.Entity._fromPtr(ptr+40);
  return v;
};
game.SettingsMenu._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ButtonOK);
  ut.Entity._toPtr(ptr+8, v.ButtonCredits);
  ut.Entity._toPtr(ptr+16, v.ButtonResetProgress);
  ut.Entity._toPtr(ptr+24, v.ButtonLanguage);
  ut.Entity._toPtr(ptr+32, v.ButtonRenderMode);
  ut.Entity._toPtr(ptr+40, v.LabelRenderMode);
};
game.SettingsMenu._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ButtonOK);
  ut.Entity._toPtr(ptr+8, v.ButtonCredits);
  ut.Entity._toPtr(ptr+16, v.ButtonResetProgress);
  ut.Entity._toPtr(ptr+24, v.ButtonLanguage);
  ut.Entity._toPtr(ptr+32, v.ButtonRenderMode);
  ut.Entity._toPtr(ptr+40, v.LabelRenderMode);
};
game.SettingsMenu._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(48);
  if (v) game.SettingsMenu._toTempHeapPtr(ptr, v);
  return ptr;
};
game.SettingsMenu.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.SettingsMenu.StorageView.prototype = Object.create(null);
game.SettingsMenu.StorageView.prototype.constructor = game.SettingsMenu.StorageView;
game.SettingsMenu._view = game.SettingsMenu.StorageView;
game.SettingsMenu.StorageView._isSharedComp = game.SettingsMenu._isSharedComp = false;
game.SettingsMenu.StorageView._fromPtr = game.SettingsMenu._fromPtr;
game.SettingsMenu.StorageView._toPtr = game.SettingsMenu._toPtr;
game.SettingsMenu.StorageView._tempHeapPtr = game.SettingsMenu._tempHeapPtr;
game.SettingsMenu.StorageView._size = game.SettingsMenu._size;
game.SettingsMenu.StorageView.prototype.$advance = function() {
  this._ptr += 48;
};
Object.defineProperties(game.SettingsMenu.StorageView.prototype, {
  ButtonOK: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  ButtonCredits: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
  ButtonResetProgress: {
    get: function() { return ut.Entity._fromPtr(this._ptr+16); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+16, v); },
  },
  ButtonLanguage: {
    get: function() { return ut.Entity._fromPtr(this._ptr+24); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+24, v); },
  },
  ButtonRenderMode: {
    get: function() { return ut.Entity._fromPtr(this._ptr+32); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+32, v); },
  },
  LabelRenderMode: {
    get: function() { return ut.Entity._fromPtr(this._ptr+40); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+40, v); },
  },
});
game.SettingsMenu._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.SettingsMenu is a POD type, so a JavaScript side copy constructor game.SettingsMenu._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.SettingsMenu._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.SettingsMenu', 48, [
    {name: 'ButtonOK', offset: 0, type: ut.meta.getType('ut.Entity')},
    {name: 'ButtonCredits', offset: 8, type: ut.meta.getType('ut.Entity')},
    {name: 'ButtonResetProgress', offset: 16, type: ut.meta.getType('ut.Entity')},
    {name: 'ButtonLanguage', offset: 24, type: ut.meta.getType('ut.Entity')},
    {name: 'ButtonRenderMode', offset: 32, type: ut.meta.getType('ut.Entity')},
    {name: 'LabelRenderMode', offset: 40, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.SettingsMenu, { cid: { configurable: true, get: function() { delete game.SettingsMenu.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8,16,24,32,40]); var offsetsCount = 6; return game.SettingsMenu.cid = Module._ut_component_register_cid_with_type(game.SettingsMenu._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.SettingsMenu.StorageView, { cid: { configurable: true, get: function() { return game.SettingsMenu.cid; } } });
game.SettingsMenu.ButtonOK = { $ofs:0, $t:"ut.Entity", $c:game.SettingsMenu };
game.SettingsMenu.ButtonOK.index = { $ofs:0, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.ButtonOK.version = { $ofs:4, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.ButtonCredits = { $ofs:8, $t:"ut.Entity", $c:game.SettingsMenu };
game.SettingsMenu.ButtonCredits.index = { $ofs:8, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.ButtonCredits.version = { $ofs:12, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.ButtonResetProgress = { $ofs:16, $t:"ut.Entity", $c:game.SettingsMenu };
game.SettingsMenu.ButtonResetProgress.index = { $ofs:16, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.ButtonResetProgress.version = { $ofs:20, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.ButtonLanguage = { $ofs:24, $t:"ut.Entity", $c:game.SettingsMenu };
game.SettingsMenu.ButtonLanguage.index = { $ofs:24, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.ButtonLanguage.version = { $ofs:28, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.ButtonRenderMode = { $ofs:32, $t:"ut.Entity", $c:game.SettingsMenu };
game.SettingsMenu.ButtonRenderMode.index = { $ofs:32, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.ButtonRenderMode.version = { $ofs:36, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.LabelRenderMode = { $ofs:40, $t:"ut.Entity", $c:game.SettingsMenu };
game.SettingsMenu.LabelRenderMode.index = { $ofs:40, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenu.LabelRenderMode.version = { $ofs:44, $t:"int32_t", $c:game.SettingsMenu };
game.SettingsMenuAudio = function(arg0, arg1, arg2, arg3) {
  this._ButtonSound = (arg0 === undefined ? new ut.Entity : arg0);
  this._ButtonMusic = (arg1 === undefined ? new ut.Entity : arg1);
  this._SpriteAudioOn = (arg2 === undefined ? new ut.Entity : arg2);
  this._SpriteAudioOff = (arg3 === undefined ? new ut.Entity : arg3);
};
game.SettingsMenuAudio.prototype = Object.create(null);
game.SettingsMenuAudio.prototype.constructor = game.SettingsMenuAudio;
Object.defineProperties(game.SettingsMenuAudio.prototype, {
  ButtonSound: {
    get: function() { return this._ButtonSound; },
    set: function(v) { this._ButtonSound = (v === undefined ? new ut.Entity : v); },
  },
  ButtonMusic: {
    get: function() { return this._ButtonMusic; },
    set: function(v) { this._ButtonMusic = (v === undefined ? new ut.Entity : v); },
  },
  SpriteAudioOn: {
    get: function() { return this._SpriteAudioOn; },
    set: function(v) { this._SpriteAudioOn = (v === undefined ? new ut.Entity : v); },
  },
  SpriteAudioOff: {
    get: function() { return this._SpriteAudioOff; },
    set: function(v) { this._SpriteAudioOff = (v === undefined ? new ut.Entity : v); },
  },
});
game.SettingsMenuAudio._size = 32;
game.SettingsMenuAudio._fromPtr = function(ptr, v) {
  v = v || Object.create(game.SettingsMenuAudio.prototype);
  v._ButtonSound = ut.Entity._fromPtr(ptr+0);
  v._ButtonMusic = ut.Entity._fromPtr(ptr+8);
  v._SpriteAudioOn = ut.Entity._fromPtr(ptr+16);
  v._SpriteAudioOff = ut.Entity._fromPtr(ptr+24);
  return v;
};
game.SettingsMenuAudio._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ButtonSound);
  ut.Entity._toPtr(ptr+8, v.ButtonMusic);
  ut.Entity._toPtr(ptr+16, v.SpriteAudioOn);
  ut.Entity._toPtr(ptr+24, v.SpriteAudioOff);
};
game.SettingsMenuAudio._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ButtonSound);
  ut.Entity._toPtr(ptr+8, v.ButtonMusic);
  ut.Entity._toPtr(ptr+16, v.SpriteAudioOn);
  ut.Entity._toPtr(ptr+24, v.SpriteAudioOff);
};
game.SettingsMenuAudio._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(32);
  if (v) game.SettingsMenuAudio._toTempHeapPtr(ptr, v);
  return ptr;
};
game.SettingsMenuAudio.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.SettingsMenuAudio.StorageView.prototype = Object.create(null);
game.SettingsMenuAudio.StorageView.prototype.constructor = game.SettingsMenuAudio.StorageView;
game.SettingsMenuAudio._view = game.SettingsMenuAudio.StorageView;
game.SettingsMenuAudio.StorageView._isSharedComp = game.SettingsMenuAudio._isSharedComp = false;
game.SettingsMenuAudio.StorageView._fromPtr = game.SettingsMenuAudio._fromPtr;
game.SettingsMenuAudio.StorageView._toPtr = game.SettingsMenuAudio._toPtr;
game.SettingsMenuAudio.StorageView._tempHeapPtr = game.SettingsMenuAudio._tempHeapPtr;
game.SettingsMenuAudio.StorageView._size = game.SettingsMenuAudio._size;
game.SettingsMenuAudio.StorageView.prototype.$advance = function() {
  this._ptr += 32;
};
Object.defineProperties(game.SettingsMenuAudio.StorageView.prototype, {
  ButtonSound: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  ButtonMusic: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
  SpriteAudioOn: {
    get: function() { return ut.Entity._fromPtr(this._ptr+16); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+16, v); },
  },
  SpriteAudioOff: {
    get: function() { return ut.Entity._fromPtr(this._ptr+24); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+24, v); },
  },
});
game.SettingsMenuAudio._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.SettingsMenuAudio is a POD type, so a JavaScript side copy constructor game.SettingsMenuAudio._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.SettingsMenuAudio._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.SettingsMenuAudio', 32, [
    {name: 'ButtonSound', offset: 0, type: ut.meta.getType('ut.Entity')},
    {name: 'ButtonMusic', offset: 8, type: ut.meta.getType('ut.Entity')},
    {name: 'SpriteAudioOn', offset: 16, type: ut.meta.getType('ut.Entity')},
    {name: 'SpriteAudioOff', offset: 24, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.SettingsMenuAudio, { cid: { configurable: true, get: function() { delete game.SettingsMenuAudio.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8,16,24]); var offsetsCount = 4; return game.SettingsMenuAudio.cid = Module._ut_component_register_cid_with_type(game.SettingsMenuAudio._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.SettingsMenuAudio.StorageView, { cid: { configurable: true, get: function() { return game.SettingsMenuAudio.cid; } } });
game.SettingsMenuAudio.ButtonSound = { $ofs:0, $t:"ut.Entity", $c:game.SettingsMenuAudio };
game.SettingsMenuAudio.ButtonSound.index = { $ofs:0, $t:"int32_t", $c:game.SettingsMenuAudio };
game.SettingsMenuAudio.ButtonSound.version = { $ofs:4, $t:"int32_t", $c:game.SettingsMenuAudio };
game.SettingsMenuAudio.ButtonMusic = { $ofs:8, $t:"ut.Entity", $c:game.SettingsMenuAudio };
game.SettingsMenuAudio.ButtonMusic.index = { $ofs:8, $t:"int32_t", $c:game.SettingsMenuAudio };
game.SettingsMenuAudio.ButtonMusic.version = { $ofs:12, $t:"int32_t", $c:game.SettingsMenuAudio };
game.SettingsMenuAudio.SpriteAudioOn = { $ofs:16, $t:"ut.Entity", $c:game.SettingsMenuAudio };
game.SettingsMenuAudio.SpriteAudioOn.index = { $ofs:16, $t:"int32_t", $c:game.SettingsMenuAudio };
game.SettingsMenuAudio.SpriteAudioOn.version = { $ofs:20, $t:"int32_t", $c:game.SettingsMenuAudio };
game.SettingsMenuAudio.SpriteAudioOff = { $ofs:24, $t:"ut.Entity", $c:game.SettingsMenuAudio };
game.SettingsMenuAudio.SpriteAudioOff.index = { $ofs:24, $t:"int32_t", $c:game.SettingsMenuAudio };
game.SettingsMenuAudio.SpriteAudioOff.version = { $ofs:28, $t:"int32_t", $c:game.SettingsMenuAudio };
game.SurvivalModeTimeline = function(arg0, arg1, arg2) {
  this._ContainerFilling = (arg0 === undefined ? new ut.Entity : arg0);
  this._DinosaurCursor = (arg1 === undefined ? new ut.Entity : arg1);
  this._Width = (+(arg2===undefined ? 0 : arg2));
};
game.SurvivalModeTimeline.prototype = Object.create(null);
game.SurvivalModeTimeline.prototype.constructor = game.SurvivalModeTimeline;
Object.defineProperties(game.SurvivalModeTimeline.prototype, {
  ContainerFilling: {
    get: function() { return this._ContainerFilling; },
    set: function(v) { this._ContainerFilling = (v === undefined ? new ut.Entity : v); },
  },
  DinosaurCursor: {
    get: function() { return this._DinosaurCursor; },
    set: function(v) { this._DinosaurCursor = (v === undefined ? new ut.Entity : v); },
  },
  Width: {
    get: function() { return this._Width; },
    set: function(v) { this._Width = (+(v===undefined ? 0 : v)); },
  },
});
game.SurvivalModeTimeline._size = 20;
game.SurvivalModeTimeline._fromPtr = function(ptr, v) {
  v = v || Object.create(game.SurvivalModeTimeline.prototype);
  v._ContainerFilling = ut.Entity._fromPtr(ptr+0);
  v._DinosaurCursor = ut.Entity._fromPtr(ptr+8);
  v._Width = HEAPF32[(ptr+16)>>2];
  return v;
};
game.SurvivalModeTimeline._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ContainerFilling);
  ut.Entity._toPtr(ptr+8, v.DinosaurCursor);
  HEAPF32[(ptr+16)>>2] = v.Width;
};
game.SurvivalModeTimeline._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.ContainerFilling);
  ut.Entity._toPtr(ptr+8, v.DinosaurCursor);
  HEAPF32[(ptr+16)>>2] = v.Width;
};
game.SurvivalModeTimeline._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.SurvivalModeTimeline._toTempHeapPtr(ptr, v);
  return ptr;
};
game.SurvivalModeTimeline.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.SurvivalModeTimeline.StorageView.prototype = Object.create(null);
game.SurvivalModeTimeline.StorageView.prototype.constructor = game.SurvivalModeTimeline.StorageView;
game.SurvivalModeTimeline._view = game.SurvivalModeTimeline.StorageView;
game.SurvivalModeTimeline.StorageView._isSharedComp = game.SurvivalModeTimeline._isSharedComp = false;
game.SurvivalModeTimeline.StorageView._fromPtr = game.SurvivalModeTimeline._fromPtr;
game.SurvivalModeTimeline.StorageView._toPtr = game.SurvivalModeTimeline._toPtr;
game.SurvivalModeTimeline.StorageView._tempHeapPtr = game.SurvivalModeTimeline._tempHeapPtr;
game.SurvivalModeTimeline.StorageView._size = game.SurvivalModeTimeline._size;
game.SurvivalModeTimeline.StorageView.prototype.$advance = function() {
  this._ptr += 20;
};
Object.defineProperties(game.SurvivalModeTimeline.StorageView.prototype, {
  ContainerFilling: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  DinosaurCursor: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
  Width: {
    get: function() { return HEAPF32[(this._ptr+16)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+16)>>2] = v; },
  },
});
game.SurvivalModeTimeline._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.SurvivalModeTimeline is a POD type, so a JavaScript side copy constructor game.SurvivalModeTimeline._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.SurvivalModeTimeline._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.SurvivalModeTimeline', 20, [
    {name: 'ContainerFilling', offset: 0, type: ut.meta.getType('ut.Entity')},
    {name: 'DinosaurCursor', offset: 8, type: ut.meta.getType('ut.Entity')},
    {name: 'Width', offset: 16, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.SurvivalModeTimeline, { cid: { configurable: true, get: function() { delete game.SurvivalModeTimeline.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8]); var offsetsCount = 2; return game.SurvivalModeTimeline.cid = Module._ut_component_register_cid_with_type(game.SurvivalModeTimeline._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.SurvivalModeTimeline.StorageView, { cid: { configurable: true, get: function() { return game.SurvivalModeTimeline.cid; } } });
game.SurvivalModeTimeline.ContainerFilling = { $ofs:0, $t:"ut.Entity", $c:game.SurvivalModeTimeline };
game.SurvivalModeTimeline.ContainerFilling.index = { $ofs:0, $t:"int32_t", $c:game.SurvivalModeTimeline };
game.SurvivalModeTimeline.ContainerFilling.version = { $ofs:4, $t:"int32_t", $c:game.SurvivalModeTimeline };
game.SurvivalModeTimeline.DinosaurCursor = { $ofs:8, $t:"ut.Entity", $c:game.SurvivalModeTimeline };
game.SurvivalModeTimeline.DinosaurCursor.index = { $ofs:8, $t:"int32_t", $c:game.SurvivalModeTimeline };
game.SurvivalModeTimeline.DinosaurCursor.version = { $ofs:12, $t:"int32_t", $c:game.SurvivalModeTimeline };
game.SurvivalModeTimeline.Width = { $ofs:16, $t:"float", $c:game.SurvivalModeTimeline };
game.WorldMap = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22, arg23, arg24, arg25, arg26, arg27, arg28) {
  this._IsCreated = (arg0 ? true : false);
  this._CurrentLevelIndex = (arg1|0);
  this._ScrollSpeed = (+(arg2===undefined ? 0 : arg2));
  this._CurrentScrollIndexPosition = (+(arg3===undefined ? 0 : arg3));
  this._ButtonLeft = (arg4 === undefined ? new ut.Entity : arg4);
  this._ButtonRight = (arg5 === undefined ? new ut.Entity : arg5);
  this._Ground = (arg6 === undefined ? new ut.Entity : arg6);
  this._GroundTransition = (arg7 === undefined ? new ut.Entity : arg7);
  this._Sky = (arg8 === undefined ? new ut.Entity : arg8);
  this._SkyTransition = (arg9 === undefined ? new ut.Entity : arg9);
  this._LabelLevelTitle = (arg10 === undefined ? new ut.Entity : arg10);
  this._LabelLevelInfoLine1 = (arg11 === undefined ? new ut.Entity : arg11);
  this._LabelLevelInfoLine2 = (arg12 === undefined ? new ut.Entity : arg12);
  this._LastLevelIndex = (arg13|0);
  this._LastScrollIndexPosition = (+(arg14===undefined ? 0 : arg14));
  this._ButtonPlay = (arg15 === undefined ? new ut.Entity : arg15);
  this._ButtonSettings = (arg16 === undefined ? new ut.Entity : arg16);
  this._LabelBestScore = (arg17 === undefined ? new ut.Entity : arg17);
  this._ImagePointObjective = (arg18 === undefined ? new ut.Entity : arg18);
  this._ImageEggObjective = (arg19 === undefined ? new ut.Entity : arg19);
  this._ImageSurvivalObjective = (arg20 === undefined ? new ut.Entity : arg20);
  this._ImageLock = (arg21 === undefined ? new Array() : ((arg21 instanceof Array) ? arg21 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._LastBeatenLevelID = (arg22|0);
  this._LabelButtonPlay = (arg23 === undefined ? new ut.Entity : arg23);
  this._PlayButtonColor = (arg24 === undefined ? new ut.Core2D.Color : arg24);
  this._PlayButtonDisabledColor = (arg25 === undefined ? new ut.Core2D.Color : arg25);
  this._ButtonCutscene = (arg26 === undefined ? new ut.Entity : arg26);
  this._LabelButtonCutscene = (arg27 === undefined ? new ut.Entity : arg27);
  this._LastLanguageID = (arg28 === undefined ? '' : arg28);
};
game.WorldMap.prototype = Object.create(null);
game.WorldMap.prototype.constructor = game.WorldMap;
Object.defineProperties(game.WorldMap.prototype, {
  IsCreated: {
    get: function() { return this._IsCreated; },
    set: function(v) { this._IsCreated = (v ? true : false); },
  },
  CurrentLevelIndex: {
    get: function() { return this._CurrentLevelIndex; },
    set: function(v) { this._CurrentLevelIndex = (v|0); },
  },
  ScrollSpeed: {
    get: function() { return this._ScrollSpeed; },
    set: function(v) { this._ScrollSpeed = (+(v===undefined ? 0 : v)); },
  },
  CurrentScrollIndexPosition: {
    get: function() { return this._CurrentScrollIndexPosition; },
    set: function(v) { this._CurrentScrollIndexPosition = (+(v===undefined ? 0 : v)); },
  },
  ButtonLeft: {
    get: function() { return this._ButtonLeft; },
    set: function(v) { this._ButtonLeft = (v === undefined ? new ut.Entity : v); },
  },
  ButtonRight: {
    get: function() { return this._ButtonRight; },
    set: function(v) { this._ButtonRight = (v === undefined ? new ut.Entity : v); },
  },
  Ground: {
    get: function() { return this._Ground; },
    set: function(v) { this._Ground = (v === undefined ? new ut.Entity : v); },
  },
  GroundTransition: {
    get: function() { return this._GroundTransition; },
    set: function(v) { this._GroundTransition = (v === undefined ? new ut.Entity : v); },
  },
  Sky: {
    get: function() { return this._Sky; },
    set: function(v) { this._Sky = (v === undefined ? new ut.Entity : v); },
  },
  SkyTransition: {
    get: function() { return this._SkyTransition; },
    set: function(v) { this._SkyTransition = (v === undefined ? new ut.Entity : v); },
  },
  LabelLevelTitle: {
    get: function() { return this._LabelLevelTitle; },
    set: function(v) { this._LabelLevelTitle = (v === undefined ? new ut.Entity : v); },
  },
  LabelLevelInfoLine1: {
    get: function() { return this._LabelLevelInfoLine1; },
    set: function(v) { this._LabelLevelInfoLine1 = (v === undefined ? new ut.Entity : v); },
  },
  LabelLevelInfoLine2: {
    get: function() { return this._LabelLevelInfoLine2; },
    set: function(v) { this._LabelLevelInfoLine2 = (v === undefined ? new ut.Entity : v); },
  },
  LastLevelIndex: {
    get: function() { return this._LastLevelIndex; },
    set: function(v) { this._LastLevelIndex = (v|0); },
  },
  LastScrollIndexPosition: {
    get: function() { return this._LastScrollIndexPosition; },
    set: function(v) { this._LastScrollIndexPosition = (+(v===undefined ? 0 : v)); },
  },
  ButtonPlay: {
    get: function() { return this._ButtonPlay; },
    set: function(v) { this._ButtonPlay = (v === undefined ? new ut.Entity : v); },
  },
  ButtonSettings: {
    get: function() { return this._ButtonSettings; },
    set: function(v) { this._ButtonSettings = (v === undefined ? new ut.Entity : v); },
  },
  LabelBestScore: {
    get: function() { return this._LabelBestScore; },
    set: function(v) { this._LabelBestScore = (v === undefined ? new ut.Entity : v); },
  },
  ImagePointObjective: {
    get: function() { return this._ImagePointObjective; },
    set: function(v) { this._ImagePointObjective = (v === undefined ? new ut.Entity : v); },
  },
  ImageEggObjective: {
    get: function() { return this._ImageEggObjective; },
    set: function(v) { this._ImageEggObjective = (v === undefined ? new ut.Entity : v); },
  },
  ImageSurvivalObjective: {
    get: function() { return this._ImageSurvivalObjective; },
    set: function(v) { this._ImageSurvivalObjective = (v === undefined ? new ut.Entity : v); },
  },
  ImageLock: {
    get: function() { return this._ImageLock; },
    set: function(v) { this._ImageLock = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  LastBeatenLevelID: {
    get: function() { return this._LastBeatenLevelID; },
    set: function(v) { this._LastBeatenLevelID = (v|0); },
  },
  LabelButtonPlay: {
    get: function() { return this._LabelButtonPlay; },
    set: function(v) { this._LabelButtonPlay = (v === undefined ? new ut.Entity : v); },
  },
  PlayButtonColor: {
    get: function() { return this._PlayButtonColor; },
    set: function(v) { this._PlayButtonColor = (v === undefined ? new ut.Core2D.Color : v); },
  },
  PlayButtonDisabledColor: {
    get: function() { return this._PlayButtonDisabledColor; },
    set: function(v) { this._PlayButtonDisabledColor = (v === undefined ? new ut.Core2D.Color : v); },
  },
  ButtonCutscene: {
    get: function() { return this._ButtonCutscene; },
    set: function(v) { this._ButtonCutscene = (v === undefined ? new ut.Entity : v); },
  },
  LabelButtonCutscene: {
    get: function() { return this._LabelButtonCutscene; },
    set: function(v) { this._LabelButtonCutscene = (v === undefined ? new ut.Entity : v); },
  },
  LastLanguageID: {
    get: function() { return this._LastLanguageID; },
    set: function(v) { this._LastLanguageID = (v === undefined ? '' : v); },
  },
});
game.WorldMap._size = 224;
game.WorldMap._fromPtr = function(ptr, v) {
  v = v || Object.create(game.WorldMap.prototype);
  v._IsCreated = (HEAP8[ptr+0]?true:false);
  v._CurrentLevelIndex = HEAP32[(ptr+4)>>2];
  v._ScrollSpeed = HEAPF32[(ptr+8)>>2];
  v._CurrentScrollIndexPosition = HEAPF32[(ptr+12)>>2];
  v._ButtonLeft = ut.Entity._fromPtr(ptr+16);
  v._ButtonRight = ut.Entity._fromPtr(ptr+24);
  v._Ground = ut.Entity._fromPtr(ptr+32);
  v._GroundTransition = ut.Entity._fromPtr(ptr+40);
  v._Sky = ut.Entity._fromPtr(ptr+48);
  v._SkyTransition = ut.Entity._fromPtr(ptr+56);
  v._LabelLevelTitle = ut.Entity._fromPtr(ptr+64);
  v._LabelLevelInfoLine1 = ut.Entity._fromPtr(ptr+72);
  v._LabelLevelInfoLine2 = ut.Entity._fromPtr(ptr+80);
  v._LastLevelIndex = HEAP32[(ptr+88)>>2];
  v._LastScrollIndexPosition = HEAPF32[(ptr+92)>>2];
  v._ButtonPlay = ut.Entity._fromPtr(ptr+96);
  v._ButtonSettings = ut.Entity._fromPtr(ptr+104);
  v._LabelBestScore = ut.Entity._fromPtr(ptr+112);
  v._ImagePointObjective = ut.Entity._fromPtr(ptr+120);
  v._ImageEggObjective = ut.Entity._fromPtr(ptr+128);
  v._ImageSurvivalObjective = ut.Entity._fromPtr(ptr+136);
  v._ImageLock = ut.nativeBufferToJsArray(ptr+144, 8, function(p) { return ut.Entity._fromPtr(p); });
  v._LastBeatenLevelID = HEAP32[(ptr+156)>>2];
  v._LabelButtonPlay = ut.Entity._fromPtr(ptr+160);
  v._PlayButtonColor = ut.Core2D.Color._fromPtr(ptr+168);
  v._PlayButtonDisabledColor = ut.Core2D.Color._fromPtr(ptr+184);
  v._ButtonCutscene = ut.Entity._fromPtr(ptr+200);
  v._LabelButtonCutscene = ut.Entity._fromPtr(ptr+208);
  v._LastLanguageID = (Module._ut_nativestring_data(ptr+216) ? UTF8ToString(Module._ut_nativestring_data(ptr+216)) : "");
  return v;
};
game.WorldMap._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.IsCreated)?1:0;
  HEAP32[(ptr+4)>>2] = v.CurrentLevelIndex;
  HEAPF32[(ptr+8)>>2] = v.ScrollSpeed;
  HEAPF32[(ptr+12)>>2] = v.CurrentScrollIndexPosition;
  ut.Entity._toPtr(ptr+16, v.ButtonLeft);
  ut.Entity._toPtr(ptr+24, v.ButtonRight);
  ut.Entity._toPtr(ptr+32, v.Ground);
  ut.Entity._toPtr(ptr+40, v.GroundTransition);
  ut.Entity._toPtr(ptr+48, v.Sky);
  ut.Entity._toPtr(ptr+56, v.SkyTransition);
  ut.Entity._toPtr(ptr+64, v.LabelLevelTitle);
  ut.Entity._toPtr(ptr+72, v.LabelLevelInfoLine1);
  ut.Entity._toPtr(ptr+80, v.LabelLevelInfoLine2);
  HEAP32[(ptr+88)>>2] = v.LastLevelIndex;
  HEAPF32[(ptr+92)>>2] = v.LastScrollIndexPosition;
  ut.Entity._toPtr(ptr+96, v.ButtonPlay);
  ut.Entity._toPtr(ptr+104, v.ButtonSettings);
  ut.Entity._toPtr(ptr+112, v.LabelBestScore);
  ut.Entity._toPtr(ptr+120, v.ImagePointObjective);
  ut.Entity._toPtr(ptr+128, v.ImageEggObjective);
  ut.Entity._toPtr(ptr+136, v.ImageSurvivalObjective);
  ut.jsArrayToExistingNativeBuffer_pod(v.ImageLock, ptr+144, 8, function(p, v) { ut.Entity._toPtr(p, v); });
  HEAP32[(ptr+156)>>2] = v.LastBeatenLevelID;
  ut.Entity._toPtr(ptr+160, v.LabelButtonPlay);
  ut.Core2D.Color._toPtr(ptr+168, v.PlayButtonColor);
  ut.Core2D.Color._toPtr(ptr+184, v.PlayButtonDisabledColor);
  ut.Entity._toPtr(ptr+200, v.ButtonCutscene);
  ut.Entity._toPtr(ptr+208, v.LabelButtonCutscene);
  ut.newHeapNativeString(ptr+216, v.LastLanguageID);
};
game.WorldMap._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.IsCreated)?1:0;
  HEAP32[(ptr+4)>>2] = v.CurrentLevelIndex;
  HEAPF32[(ptr+8)>>2] = v.ScrollSpeed;
  HEAPF32[(ptr+12)>>2] = v.CurrentScrollIndexPosition;
  ut.Entity._toPtr(ptr+16, v.ButtonLeft);
  ut.Entity._toPtr(ptr+24, v.ButtonRight);
  ut.Entity._toPtr(ptr+32, v.Ground);
  ut.Entity._toPtr(ptr+40, v.GroundTransition);
  ut.Entity._toPtr(ptr+48, v.Sky);
  ut.Entity._toPtr(ptr+56, v.SkyTransition);
  ut.Entity._toPtr(ptr+64, v.LabelLevelTitle);
  ut.Entity._toPtr(ptr+72, v.LabelLevelInfoLine1);
  ut.Entity._toPtr(ptr+80, v.LabelLevelInfoLine2);
  HEAP32[(ptr+88)>>2] = v.LastLevelIndex;
  HEAPF32[(ptr+92)>>2] = v.LastScrollIndexPosition;
  ut.Entity._toPtr(ptr+96, v.ButtonPlay);
  ut.Entity._toPtr(ptr+104, v.ButtonSettings);
  ut.Entity._toPtr(ptr+112, v.LabelBestScore);
  ut.Entity._toPtr(ptr+120, v.ImagePointObjective);
  ut.Entity._toPtr(ptr+128, v.ImageEggObjective);
  ut.Entity._toPtr(ptr+136, v.ImageSurvivalObjective);
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.ImageLock, ptr+144, 8, function(p, v) { ut.Entity._toPtr(p, v); });
  HEAP32[(ptr+156)>>2] = v.LastBeatenLevelID;
  ut.Entity._toPtr(ptr+160, v.LabelButtonPlay);
  ut.Core2D.Color._toPtr(ptr+168, v.PlayButtonColor);
  ut.Core2D.Color._toPtr(ptr+184, v.PlayButtonDisabledColor);
  ut.Entity._toPtr(ptr+200, v.ButtonCutscene);
  ut.Entity._toPtr(ptr+208, v.LabelButtonCutscene);
  ut.toExistingScratchNativeString(ptr+216, v.LastLanguageID);
};
game.WorldMap._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(224);
  if (v) game.WorldMap._toTempHeapPtr(ptr, v);
  return ptr;
};
game.WorldMap.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.WorldMap.StorageView.prototype = Object.create(null);
game.WorldMap.StorageView.prototype.constructor = game.WorldMap.StorageView;
game.WorldMap._view = game.WorldMap.StorageView;
game.WorldMap.StorageView._isSharedComp = game.WorldMap._isSharedComp = false;
game.WorldMap.StorageView._fromPtr = game.WorldMap._fromPtr;
game.WorldMap.StorageView._toPtr = game.WorldMap._toPtr;
game.WorldMap.StorageView._tempHeapPtr = game.WorldMap._tempHeapPtr;
game.WorldMap.StorageView._size = game.WorldMap._size;
game.WorldMap.StorageView.prototype.$advance = function() {
  this._ptr += 224;
};
Object.defineProperties(game.WorldMap.StorageView.prototype, {
  IsCreated: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  CurrentLevelIndex: {
    get: function() { return HEAP32[(this._ptr+4)>>2]; },
    set: function(v) { HEAP32[(this._ptr+4)>>2] = v; },
  },
  ScrollSpeed: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  CurrentScrollIndexPosition: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
  ButtonLeft: {
    get: function() { return ut.Entity._fromPtr(this._ptr+16); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+16, v); },
  },
  ButtonRight: {
    get: function() { return ut.Entity._fromPtr(this._ptr+24); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+24, v); },
  },
  Ground: {
    get: function() { return ut.Entity._fromPtr(this._ptr+32); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+32, v); },
  },
  GroundTransition: {
    get: function() { return ut.Entity._fromPtr(this._ptr+40); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+40, v); },
  },
  Sky: {
    get: function() { return ut.Entity._fromPtr(this._ptr+48); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+48, v); },
  },
  SkyTransition: {
    get: function() { return ut.Entity._fromPtr(this._ptr+56); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+56, v); },
  },
  LabelLevelTitle: {
    get: function() { return ut.Entity._fromPtr(this._ptr+64); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+64, v); },
  },
  LabelLevelInfoLine1: {
    get: function() { return ut.Entity._fromPtr(this._ptr+72); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+72, v); },
  },
  LabelLevelInfoLine2: {
    get: function() { return ut.Entity._fromPtr(this._ptr+80); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+80, v); },
  },
  LastLevelIndex: {
    get: function() { return HEAP32[(this._ptr+88)>>2]; },
    set: function(v) { HEAP32[(this._ptr+88)>>2] = v; },
  },
  LastScrollIndexPosition: {
    get: function() { return HEAPF32[(this._ptr+92)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+92)>>2] = v; },
  },
  ButtonPlay: {
    get: function() { return ut.Entity._fromPtr(this._ptr+96); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+96, v); },
  },
  ButtonSettings: {
    get: function() { return ut.Entity._fromPtr(this._ptr+104); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+104, v); },
  },
  LabelBestScore: {
    get: function() { return ut.Entity._fromPtr(this._ptr+112); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+112, v); },
  },
  ImagePointObjective: {
    get: function() { return ut.Entity._fromPtr(this._ptr+120); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+120, v); },
  },
  ImageEggObjective: {
    get: function() { return ut.Entity._fromPtr(this._ptr+128); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+128, v); },
  },
  ImageSurvivalObjective: {
    get: function() { return ut.Entity._fromPtr(this._ptr+136); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+136, v); },
  },
  ImageLock: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+144, 8, function(p) { return ut.Entity._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+144, 8, function(p, v) { ut.Entity._toPtr(p, v); }); },
  },
  LastBeatenLevelID: {
    get: function() { return HEAP32[(this._ptr+156)>>2]; },
    set: function(v) { HEAP32[(this._ptr+156)>>2] = v; },
  },
  LabelButtonPlay: {
    get: function() { return ut.Entity._fromPtr(this._ptr+160); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+160, v); },
  },
  PlayButtonColor: {
    get: function() { return ut.Core2D.Color._fromPtr(this._ptr+168); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Core2D.Color._toPtr(this._ptr+168, v); },
  },
  PlayButtonDisabledColor: {
    get: function() { return ut.Core2D.Color._fromPtr(this._ptr+184); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Core2D.Color._toPtr(this._ptr+184, v); },
  },
  ButtonCutscene: {
    get: function() { return ut.Entity._fromPtr(this._ptr+200); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+200, v); },
  },
  LabelButtonCutscene: {
    get: function() { return ut.Entity._fromPtr(this._ptr+208); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+208, v); },
  },
  LastLanguageID: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+216) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+216)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+216, v); },
  },
});
game.WorldMap._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativebuffer_pod_placement_delete(ptr + 144);
  Module._ut_nativestring_placement_delete(ptr + 216);
};
game.WorldMap._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  for(var i = 0; i < 1; ++i) HEAPU8[dst+0+i] = HEAPU8[src+0+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+4+i] = HEAPU8[src+4+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+12+i] = HEAPU8[src+12+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+24+i] = HEAPU8[src+24+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+32+i] = HEAPU8[src+32+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+40+i] = HEAPU8[src+40+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+48+i] = HEAPU8[src+48+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+56+i] = HEAPU8[src+56+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+64+i] = HEAPU8[src+64+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+72+i] = HEAPU8[src+72+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+80+i] = HEAPU8[src+80+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+88+i] = HEAPU8[src+88+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+92+i] = HEAPU8[src+92+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+96+i] = HEAPU8[src+96+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+104+i] = HEAPU8[src+104+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+112+i] = HEAPU8[src+112+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+120+i] = HEAPU8[src+120+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+128+i] = HEAPU8[src+128+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+136+i] = HEAPU8[src+136+i];
  Module._ut_nativebuffer_pod_copy_construct(dst + 144, src + 144, 8);
  for(var i = 0; i < 4; ++i) HEAPU8[dst+156+i] = HEAPU8[src+156+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+160+i] = HEAPU8[src+160+i];
  for(var i = 0; i < 16; ++i) HEAPU8[dst+168+i] = HEAPU8[src+168+i];
  for(var i = 0; i < 16; ++i) HEAPU8[dst+184+i] = HEAPU8[src+184+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+200+i] = HEAPU8[src+200+i];
  for(var i = 0; i < 8; ++i) HEAPU8[dst+208+i] = HEAPU8[src+208+i];
  Module._ut_nativestring_copy_construct(dst + 216, src + 216);
};
game.WorldMap._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.WorldMap', 224, [
    {name: 'IsCreated', offset: 0, type: ut.meta.getType('bool')},
    {name: 'CurrentLevelIndex', offset: 4, type: ut.meta.getType('int32')},
    {name: 'ScrollSpeed', offset: 8, type: ut.meta.getType('float')},
    {name: 'CurrentScrollIndexPosition', offset: 12, type: ut.meta.getType('float')},
    {name: 'ButtonLeft', offset: 16, type: ut.meta.getType('ut.Entity')},
    {name: 'ButtonRight', offset: 24, type: ut.meta.getType('ut.Entity')},
    {name: 'Ground', offset: 32, type: ut.meta.getType('ut.Entity')},
    {name: 'GroundTransition', offset: 40, type: ut.meta.getType('ut.Entity')},
    {name: 'Sky', offset: 48, type: ut.meta.getType('ut.Entity')},
    {name: 'SkyTransition', offset: 56, type: ut.meta.getType('ut.Entity')},
    {name: 'LabelLevelTitle', offset: 64, type: ut.meta.getType('ut.Entity')},
    {name: 'LabelLevelInfoLine1', offset: 72, type: ut.meta.getType('ut.Entity')},
    {name: 'LabelLevelInfoLine2', offset: 80, type: ut.meta.getType('ut.Entity')},
    {name: 'LastLevelIndex', offset: 88, type: ut.meta.getType('int32')},
    {name: 'LastScrollIndexPosition', offset: 92, type: ut.meta.getType('float')},
    {name: 'ButtonPlay', offset: 96, type: ut.meta.getType('ut.Entity')},
    {name: 'ButtonSettings', offset: 104, type: ut.meta.getType('ut.Entity')},
    {name: 'LabelBestScore', offset: 112, type: ut.meta.getType('ut.Entity')},
    {name: 'ImagePointObjective', offset: 120, type: ut.meta.getType('ut.Entity')},
    {name: 'ImageEggObjective', offset: 128, type: ut.meta.getType('ut.Entity')},
    {name: 'ImageSurvivalObjective', offset: 136, type: ut.meta.getType('ut.Entity')},
    {name: 'ImageLock', offset: 144, type: ut.meta.getType('ut.NativeBuffer<ut.Entity>')},
    {name: 'LastBeatenLevelID', offset: 156, type: ut.meta.getType('int32')},
    {name: 'LabelButtonPlay', offset: 160, type: ut.meta.getType('ut.Entity')},
    {name: 'PlayButtonColor', offset: 168, type: ut.meta.getType('ut.Core2D.Color')},
    {name: 'PlayButtonDisabledColor', offset: 184, type: ut.meta.getType('ut.Core2D.Color')},
    {name: 'ButtonCutscene', offset: 200, type: ut.meta.getType('ut.Entity')},
    {name: 'LabelButtonCutscene', offset: 208, type: ut.meta.getType('ut.Entity')},
    {name: 'LastLanguageID', offset: 216, type: ut.meta.getType('string')}
  ]);
})();
Object.defineProperties(game.WorldMap, { cid: { configurable: true, get: function() { delete game.WorldMap.cid; var offsetsPtr = ut.tempHeapPtrI32([16,24,32,40,48,56,64,72,80,96,104,112,120,128,136,-145,160,200,208]); var offsetsCount = 19; return game.WorldMap.cid = Module._ut_component_register_cid_with_type(game.WorldMap._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.WorldMap._dtorFn), ut.CopyFn._cb.token_for(game.WorldMap._copyFn)); } } });
Object.defineProperties(game.WorldMap.StorageView, { cid: { configurable: true, get: function() { return game.WorldMap.cid; } } });
game.WorldMap.IsCreated = { $ofs:0, $t:"bool", $c:game.WorldMap };
game.WorldMap.CurrentLevelIndex = { $ofs:4, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.ScrollSpeed = { $ofs:8, $t:"float", $c:game.WorldMap };
game.WorldMap.CurrentScrollIndexPosition = { $ofs:12, $t:"float", $c:game.WorldMap };
game.WorldMap.ButtonLeft = { $ofs:16, $t:"ut.Entity", $c:game.WorldMap };
game.WorldMap.ButtonLeft.index = { $ofs:16, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.ButtonLeft.version = { $ofs:20, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.ButtonRight = { $ofs:24, $t:"ut.Entity", $c:game.WorldMap };
game.WorldMap.ButtonRight.index = { $ofs:24, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.ButtonRight.version = { $ofs:28, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.Ground = { $ofs:32, $t:"ut.Entity", $c:game.WorldMap };
game.WorldMap.Ground.index = { $ofs:32, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.Ground.version = { $ofs:36, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.GroundTransition = { $ofs:40, $t:"ut.Entity", $c:game.WorldMap };
game.WorldMap.GroundTransition.index = { $ofs:40, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.GroundTransition.version = { $ofs:44, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.Sky = { $ofs:48, $t:"ut.Entity", $c:game.WorldMap };
game.WorldMap.Sky.index = { $ofs:48, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.Sky.version = { $ofs:52, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.SkyTransition = { $ofs:56, $t:"ut.Entity", $c:game.WorldMap };
game.WorldMap.SkyTransition.index = { $ofs:56, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.SkyTransition.version = { $ofs:60, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.LabelLevelTitle = { $ofs:64, $t:"ut.Entity", $c:game.WorldMap };
game.WorldMap.LabelLevelTitle.index = { $ofs:64, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.LabelLevelTitle.version = { $ofs:68, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.LabelLevelInfoLine1 = { $ofs:72, $t:"ut.Entity", $c:game.WorldMap };
game.WorldMap.LabelLevelInfoLine1.index = { $ofs:72, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.LabelLevelInfoLine1.version = { $ofs:76, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.LabelLevelInfoLine2 = { $ofs:80, $t:"ut.Entity", $c:game.WorldMap };
game.WorldMap.LabelLevelInfoLine2.index = { $ofs:80, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.LabelLevelInfoLine2.version = { $ofs:84, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.LastLevelIndex = { $ofs:88, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.LastScrollIndexPosition = { $ofs:92, $t:"float", $c:game.WorldMap };
game.WorldMap.ButtonPlay = { $ofs:96, $t:"ut.Entity", $c:game.WorldMap };
game.WorldMap.ButtonPlay.index = { $ofs:96, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.ButtonPlay.version = { $ofs:100, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.ButtonSettings = { $ofs:104, $t:"ut.Entity", $c:game.WorldMap };
game.WorldMap.ButtonSettings.index = { $ofs:104, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.ButtonSettings.version = { $ofs:108, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.LabelBestScore = { $ofs:112, $t:"ut.Entity", $c:game.WorldMap };
game.WorldMap.LabelBestScore.index = { $ofs:112, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.LabelBestScore.version = { $ofs:116, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.ImagePointObjective = { $ofs:120, $t:"ut.Entity", $c:game.WorldMap };
game.WorldMap.ImagePointObjective.index = { $ofs:120, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.ImagePointObjective.version = { $ofs:124, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.ImageEggObjective = { $ofs:128, $t:"ut.Entity", $c:game.WorldMap };
game.WorldMap.ImageEggObjective.index = { $ofs:128, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.ImageEggObjective.version = { $ofs:132, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.ImageSurvivalObjective = { $ofs:136, $t:"ut.Entity", $c:game.WorldMap };
game.WorldMap.ImageSurvivalObjective.index = { $ofs:136, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.ImageSurvivalObjective.version = { $ofs:140, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.ImageLock = { $ofs:144, $t:"ut.DynamicArray`1", $c:game.WorldMap };
game.WorldMap.LastBeatenLevelID = { $ofs:156, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.LabelButtonPlay = { $ofs:160, $t:"ut.Entity", $c:game.WorldMap };
game.WorldMap.LabelButtonPlay.index = { $ofs:160, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.LabelButtonPlay.version = { $ofs:164, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.PlayButtonColor = { $ofs:168, $t:"ut.Core2D.Color", $c:game.WorldMap };
game.WorldMap.PlayButtonColor.r = { $ofs:168, $t:"float", $c:game.WorldMap };
game.WorldMap.PlayButtonColor.g = { $ofs:172, $t:"float", $c:game.WorldMap };
game.WorldMap.PlayButtonColor.b = { $ofs:176, $t:"float", $c:game.WorldMap };
game.WorldMap.PlayButtonColor.a = { $ofs:180, $t:"float", $c:game.WorldMap };
game.WorldMap.PlayButtonDisabledColor = { $ofs:184, $t:"ut.Core2D.Color", $c:game.WorldMap };
game.WorldMap.PlayButtonDisabledColor.r = { $ofs:184, $t:"float", $c:game.WorldMap };
game.WorldMap.PlayButtonDisabledColor.g = { $ofs:188, $t:"float", $c:game.WorldMap };
game.WorldMap.PlayButtonDisabledColor.b = { $ofs:192, $t:"float", $c:game.WorldMap };
game.WorldMap.PlayButtonDisabledColor.a = { $ofs:196, $t:"float", $c:game.WorldMap };
game.WorldMap.ButtonCutscene = { $ofs:200, $t:"ut.Entity", $c:game.WorldMap };
game.WorldMap.ButtonCutscene.index = { $ofs:200, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.ButtonCutscene.version = { $ofs:204, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.LabelButtonCutscene = { $ofs:208, $t:"ut.Entity", $c:game.WorldMap };
game.WorldMap.LabelButtonCutscene.index = { $ofs:208, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.LabelButtonCutscene.version = { $ofs:212, $t:"int32_t", $c:game.WorldMap };
game.WorldMap.LastLanguageID = { $ofs:216, $t:"System.String", $c:game.WorldMap };
game.WorldMapItem = function(arg0, arg1, arg2, arg3, arg4) {
  this._Index = (arg0|0);
  this._ImageLevelPreview = (arg1 === undefined ? new ut.Entity : arg1);
  this._DistanceBetweenLevelItems = (+(arg2===undefined ? 0 : arg2));
  this._FocusedScale = (+(arg3===undefined ? 0 : arg3));
  this._UnfocusedScale = (+(arg4===undefined ? 0 : arg4));
};
game.WorldMapItem.prototype = Object.create(null);
game.WorldMapItem.prototype.constructor = game.WorldMapItem;
Object.defineProperties(game.WorldMapItem.prototype, {
  Index: {
    get: function() { return this._Index; },
    set: function(v) { this._Index = (v|0); },
  },
  ImageLevelPreview: {
    get: function() { return this._ImageLevelPreview; },
    set: function(v) { this._ImageLevelPreview = (v === undefined ? new ut.Entity : v); },
  },
  DistanceBetweenLevelItems: {
    get: function() { return this._DistanceBetweenLevelItems; },
    set: function(v) { this._DistanceBetweenLevelItems = (+(v===undefined ? 0 : v)); },
  },
  FocusedScale: {
    get: function() { return this._FocusedScale; },
    set: function(v) { this._FocusedScale = (+(v===undefined ? 0 : v)); },
  },
  UnfocusedScale: {
    get: function() { return this._UnfocusedScale; },
    set: function(v) { this._UnfocusedScale = (+(v===undefined ? 0 : v)); },
  },
});
game.WorldMapItem._size = 24;
game.WorldMapItem._fromPtr = function(ptr, v) {
  v = v || Object.create(game.WorldMapItem.prototype);
  v._Index = HEAP32[(ptr+0)>>2];
  v._ImageLevelPreview = ut.Entity._fromPtr(ptr+4);
  v._DistanceBetweenLevelItems = HEAPF32[(ptr+12)>>2];
  v._FocusedScale = HEAPF32[(ptr+16)>>2];
  v._UnfocusedScale = HEAPF32[(ptr+20)>>2];
  return v;
};
game.WorldMapItem._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.Index;
  ut.Entity._toPtr(ptr+4, v.ImageLevelPreview);
  HEAPF32[(ptr+12)>>2] = v.DistanceBetweenLevelItems;
  HEAPF32[(ptr+16)>>2] = v.FocusedScale;
  HEAPF32[(ptr+20)>>2] = v.UnfocusedScale;
};
game.WorldMapItem._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.Index;
  ut.Entity._toPtr(ptr+4, v.ImageLevelPreview);
  HEAPF32[(ptr+12)>>2] = v.DistanceBetweenLevelItems;
  HEAPF32[(ptr+16)>>2] = v.FocusedScale;
  HEAPF32[(ptr+20)>>2] = v.UnfocusedScale;
};
game.WorldMapItem._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) game.WorldMapItem._toTempHeapPtr(ptr, v);
  return ptr;
};
game.WorldMapItem.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.WorldMapItem.StorageView.prototype = Object.create(null);
game.WorldMapItem.StorageView.prototype.constructor = game.WorldMapItem.StorageView;
game.WorldMapItem._view = game.WorldMapItem.StorageView;
game.WorldMapItem.StorageView._isSharedComp = game.WorldMapItem._isSharedComp = false;
game.WorldMapItem.StorageView._fromPtr = game.WorldMapItem._fromPtr;
game.WorldMapItem.StorageView._toPtr = game.WorldMapItem._toPtr;
game.WorldMapItem.StorageView._tempHeapPtr = game.WorldMapItem._tempHeapPtr;
game.WorldMapItem.StorageView._size = game.WorldMapItem._size;
game.WorldMapItem.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(game.WorldMapItem.StorageView.prototype, {
  Index: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  ImageLevelPreview: {
    get: function() { return ut.Entity._fromPtr(this._ptr+4); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+4, v); },
  },
  DistanceBetweenLevelItems: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
  FocusedScale: {
    get: function() { return HEAPF32[(this._ptr+16)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+16)>>2] = v; },
  },
  UnfocusedScale: {
    get: function() { return HEAPF32[(this._ptr+20)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+20)>>2] = v; },
  },
});
game.WorldMapItem._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.WorldMapItem is a POD type, so a JavaScript side copy constructor game.WorldMapItem._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.WorldMapItem._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.WorldMapItem', 24, [
    {name: 'Index', offset: 0, type: ut.meta.getType('int32')},
    {name: 'ImageLevelPreview', offset: 4, type: ut.meta.getType('ut.Entity')},
    {name: 'DistanceBetweenLevelItems', offset: 12, type: ut.meta.getType('float')},
    {name: 'FocusedScale', offset: 16, type: ut.meta.getType('float')},
    {name: 'UnfocusedScale', offset: 20, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.WorldMapItem, { cid: { configurable: true, get: function() { delete game.WorldMapItem.cid; var offsetsPtr = ut.tempHeapPtrI32([4]); var offsetsCount = 1; return game.WorldMapItem.cid = Module._ut_component_register_cid_with_type(game.WorldMapItem._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.WorldMapItem.StorageView, { cid: { configurable: true, get: function() { return game.WorldMapItem.cid; } } });
game.WorldMapItem.Index = { $ofs:0, $t:"int32_t", $c:game.WorldMapItem };
game.WorldMapItem.ImageLevelPreview = { $ofs:4, $t:"ut.Entity", $c:game.WorldMapItem };
game.WorldMapItem.ImageLevelPreview.index = { $ofs:4, $t:"int32_t", $c:game.WorldMapItem };
game.WorldMapItem.ImageLevelPreview.version = { $ofs:8, $t:"int32_t", $c:game.WorldMapItem };
game.WorldMapItem.DistanceBetweenLevelItems = { $ofs:12, $t:"float", $c:game.WorldMapItem };
game.WorldMapItem.FocusedScale = { $ofs:16, $t:"float", $c:game.WorldMapItem };
game.WorldMapItem.UnfocusedScale = { $ofs:20, $t:"float", $c:game.WorldMapItem };
game.CameraResolutionFitter = function(arg0) {
  this._DefaultHalfVerticalSize = (+(arg0===undefined ? 0 : arg0));
};
game.CameraResolutionFitter.prototype = Object.create(null);
game.CameraResolutionFitter.prototype.constructor = game.CameraResolutionFitter;
Object.defineProperties(game.CameraResolutionFitter.prototype, {
  DefaultHalfVerticalSize: {
    get: function() { return this._DefaultHalfVerticalSize; },
    set: function(v) { this._DefaultHalfVerticalSize = (+(v===undefined ? 0 : v)); },
  },
});
game.CameraResolutionFitter._size = 4;
game.CameraResolutionFitter._fromPtr = function(ptr, v) {
  v = v || Object.create(game.CameraResolutionFitter.prototype);
  v._DefaultHalfVerticalSize = HEAPF32[(ptr+0)>>2];
  return v;
};
game.CameraResolutionFitter._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.DefaultHalfVerticalSize;
};
game.CameraResolutionFitter._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.DefaultHalfVerticalSize;
};
game.CameraResolutionFitter._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.CameraResolutionFitter._toTempHeapPtr(ptr, v);
  return ptr;
};
game.CameraResolutionFitter.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.CameraResolutionFitter.StorageView.prototype = Object.create(null);
game.CameraResolutionFitter.StorageView.prototype.constructor = game.CameraResolutionFitter.StorageView;
game.CameraResolutionFitter._view = game.CameraResolutionFitter.StorageView;
game.CameraResolutionFitter.StorageView._isSharedComp = game.CameraResolutionFitter._isSharedComp = false;
game.CameraResolutionFitter.StorageView._fromPtr = game.CameraResolutionFitter._fromPtr;
game.CameraResolutionFitter.StorageView._toPtr = game.CameraResolutionFitter._toPtr;
game.CameraResolutionFitter.StorageView._tempHeapPtr = game.CameraResolutionFitter._tempHeapPtr;
game.CameraResolutionFitter.StorageView._size = game.CameraResolutionFitter._size;
game.CameraResolutionFitter.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.CameraResolutionFitter.StorageView.prototype, {
  DefaultHalfVerticalSize: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
});
game.CameraResolutionFitter._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.CameraResolutionFitter is a POD type, so a JavaScript side copy constructor game.CameraResolutionFitter._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.CameraResolutionFitter._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.CameraResolutionFitter', 4, [
    {name: 'DefaultHalfVerticalSize', offset: 0, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.CameraResolutionFitter, { cid: { configurable: true, get: function() { delete game.CameraResolutionFitter.cid; var offsetsPtr = 0, offsetsCount = 0; return game.CameraResolutionFitter.cid = Module._ut_component_register_cid_with_type(game.CameraResolutionFitter._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.CameraResolutionFitter.StorageView, { cid: { configurable: true, get: function() { return game.CameraResolutionFitter.cid; } } });
game.CameraResolutionFitter.DefaultHalfVerticalSize = { $ofs:0, $t:"float", $c:game.CameraResolutionFitter };
game.CanvasResolutionFitter = function() {
};
game.CanvasResolutionFitter.prototype = Object.create(null);
game.CanvasResolutionFitter.prototype.constructor = game.CanvasResolutionFitter;
Object.defineProperties(game.CanvasResolutionFitter.prototype, {
});
game.CanvasResolutionFitter._size = 1;
game.CanvasResolutionFitter._fromPtr = function(ptr, v) {
  v = v || Object.create(game.CanvasResolutionFitter.prototype);
  return v;
};
game.CanvasResolutionFitter._toPtr = function(ptr, v) {
};
game.CanvasResolutionFitter._toTempHeapPtr = function(ptr, v) {
};
game.CanvasResolutionFitter._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.CanvasResolutionFitter._toTempHeapPtr(ptr, v);
  return ptr;
};
game.CanvasResolutionFitter.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.CanvasResolutionFitter.StorageView.prototype = Object.create(null);
game.CanvasResolutionFitter.StorageView.prototype.constructor = game.CanvasResolutionFitter.StorageView;
game.CanvasResolutionFitter._view = game.CanvasResolutionFitter.StorageView;
game.CanvasResolutionFitter.StorageView._isSharedComp = game.CanvasResolutionFitter._isSharedComp = false;
game.CanvasResolutionFitter.StorageView._fromPtr = game.CanvasResolutionFitter._fromPtr;
game.CanvasResolutionFitter.StorageView._toPtr = game.CanvasResolutionFitter._toPtr;
game.CanvasResolutionFitter.StorageView._tempHeapPtr = game.CanvasResolutionFitter._tempHeapPtr;
game.CanvasResolutionFitter.StorageView._size = game.CanvasResolutionFitter._size;
game.CanvasResolutionFitter.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.CanvasResolutionFitter.StorageView.prototype, {
});
game.CanvasResolutionFitter._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.CanvasResolutionFitter is a POD type, so a JavaScript side copy constructor game.CanvasResolutionFitter._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.CanvasResolutionFitter._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.CanvasResolutionFitter', 1, []);
})();
Object.defineProperties(game.CanvasResolutionFitter, { cid: { configurable: true, get: function() { delete game.CanvasResolutionFitter.cid; var offsetsPtr = 0, offsetsCount = 0; return game.CanvasResolutionFitter.cid = Module._ut_component_register_cid_with_type(game.CanvasResolutionFitter._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.CanvasResolutionFitter.StorageView, { cid: { configurable: true, get: function() { return game.CanvasResolutionFitter.cid; } } });
game.CollectedCurrency = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this._StartPosition = new ut.Math.Vector3(); if ((arg0) !== undefined) { this._StartPosition.copy(arg0); };
  this._MidPosition = new ut.Math.Vector3(); if ((arg1) !== undefined) { this._MidPosition.copy(arg1); };
  this._EndPosition = new ut.Math.Vector3(); if ((arg2) !== undefined) { this._EndPosition.copy(arg2); };
  this._Duration = (+(arg3===undefined ? 0 : arg3));
  this._Timer = (+(arg4===undefined ? 0 : arg4));
  this._ProgressCurve = (arg5 === undefined ? new ut.Entity : arg5);
  this._ScaleCurve = (arg6 === undefined ? new ut.Entity : arg6);
  this._StartDelay = (+(arg7===undefined ? 0 : arg7));
};
game.CollectedCurrency.prototype = Object.create(null);
game.CollectedCurrency.prototype.constructor = game.CollectedCurrency;
Object.defineProperties(game.CollectedCurrency.prototype, {
  StartPosition: {
    get: function() { return this._StartPosition; },
    set: function(v) { this._StartPosition.copy(v); },
  },
  MidPosition: {
    get: function() { return this._MidPosition; },
    set: function(v) { this._MidPosition.copy(v); },
  },
  EndPosition: {
    get: function() { return this._EndPosition; },
    set: function(v) { this._EndPosition.copy(v); },
  },
  Duration: {
    get: function() { return this._Duration; },
    set: function(v) { this._Duration = (+(v===undefined ? 0 : v)); },
  },
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
  ProgressCurve: {
    get: function() { return this._ProgressCurve; },
    set: function(v) { this._ProgressCurve = (v === undefined ? new ut.Entity : v); },
  },
  ScaleCurve: {
    get: function() { return this._ScaleCurve; },
    set: function(v) { this._ScaleCurve = (v === undefined ? new ut.Entity : v); },
  },
  StartDelay: {
    get: function() { return this._StartDelay; },
    set: function(v) { this._StartDelay = (+(v===undefined ? 0 : v)); },
  },
});
game.CollectedCurrency._size = 64;
game.CollectedCurrency._fromPtr = function(ptr, v) {
  v = v || Object.create(game.CollectedCurrency.prototype);
  v._StartPosition = ut._utils.vec3FromHeap(null, ptr+0);
  v._MidPosition = ut._utils.vec3FromHeap(null, ptr+12);
  v._EndPosition = ut._utils.vec3FromHeap(null, ptr+24);
  v._Duration = HEAPF32[(ptr+36)>>2];
  v._Timer = HEAPF32[(ptr+40)>>2];
  v._ProgressCurve = ut.Entity._fromPtr(ptr+44);
  v._ScaleCurve = ut.Entity._fromPtr(ptr+52);
  v._StartDelay = HEAPF32[(ptr+60)>>2];
  return v;
};
game.CollectedCurrency._toPtr = function(ptr, v) {
  ut._utils.vec3ToHeap(v.StartPosition, ptr+0);
  ut._utils.vec3ToHeap(v.MidPosition, ptr+12);
  ut._utils.vec3ToHeap(v.EndPosition, ptr+24);
  HEAPF32[(ptr+36)>>2] = v.Duration;
  HEAPF32[(ptr+40)>>2] = v.Timer;
  ut.Entity._toPtr(ptr+44, v.ProgressCurve);
  ut.Entity._toPtr(ptr+52, v.ScaleCurve);
  HEAPF32[(ptr+60)>>2] = v.StartDelay;
};
game.CollectedCurrency._toTempHeapPtr = function(ptr, v) {
  ut._utils.vec3ToHeap(v.StartPosition, ptr+0);
  ut._utils.vec3ToHeap(v.MidPosition, ptr+12);
  ut._utils.vec3ToHeap(v.EndPosition, ptr+24);
  HEAPF32[(ptr+36)>>2] = v.Duration;
  HEAPF32[(ptr+40)>>2] = v.Timer;
  ut.Entity._toPtr(ptr+44, v.ProgressCurve);
  ut.Entity._toPtr(ptr+52, v.ScaleCurve);
  HEAPF32[(ptr+60)>>2] = v.StartDelay;
};
game.CollectedCurrency._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(64);
  if (v) game.CollectedCurrency._toTempHeapPtr(ptr, v);
  return ptr;
};
game.CollectedCurrency.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.CollectedCurrency.StorageView.prototype = Object.create(null);
game.CollectedCurrency.StorageView.prototype.constructor = game.CollectedCurrency.StorageView;
game.CollectedCurrency._view = game.CollectedCurrency.StorageView;
game.CollectedCurrency.StorageView._isSharedComp = game.CollectedCurrency._isSharedComp = false;
game.CollectedCurrency.StorageView._fromPtr = game.CollectedCurrency._fromPtr;
game.CollectedCurrency.StorageView._toPtr = game.CollectedCurrency._toPtr;
game.CollectedCurrency.StorageView._tempHeapPtr = game.CollectedCurrency._tempHeapPtr;
game.CollectedCurrency.StorageView._size = game.CollectedCurrency._size;
game.CollectedCurrency.StorageView.prototype.$advance = function() {
  this._ptr += 64;
};
Object.defineProperties(game.CollectedCurrency.StorageView.prototype, {
  StartPosition: {
    get: function() { return ut._utils.vec3FromHeap(null, this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec3ToHeap(v, this._ptr+0); },
  },
  MidPosition: {
    get: function() { return ut._utils.vec3FromHeap(null, this._ptr+12); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec3ToHeap(v, this._ptr+12); },
  },
  EndPosition: {
    get: function() { return ut._utils.vec3FromHeap(null, this._ptr+24); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec3ToHeap(v, this._ptr+24); },
  },
  Duration: {
    get: function() { return HEAPF32[(this._ptr+36)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+36)>>2] = v; },
  },
  Timer: {
    get: function() { return HEAPF32[(this._ptr+40)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+40)>>2] = v; },
  },
  ProgressCurve: {
    get: function() { return ut.Entity._fromPtr(this._ptr+44); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+44, v); },
  },
  ScaleCurve: {
    get: function() { return ut.Entity._fromPtr(this._ptr+52); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+52, v); },
  },
  StartDelay: {
    get: function() { return HEAPF32[(this._ptr+60)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+60)>>2] = v; },
  },
});
game.CollectedCurrency._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.CollectedCurrency is a POD type, so a JavaScript side copy constructor game.CollectedCurrency._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.CollectedCurrency._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.CollectedCurrency', 64, [
    {name: 'StartPosition', offset: 0, type: ut.meta.getType('ut.Math.Vector3')},
    {name: 'MidPosition', offset: 12, type: ut.meta.getType('ut.Math.Vector3')},
    {name: 'EndPosition', offset: 24, type: ut.meta.getType('ut.Math.Vector3')},
    {name: 'Duration', offset: 36, type: ut.meta.getType('float')},
    {name: 'Timer', offset: 40, type: ut.meta.getType('float')},
    {name: 'ProgressCurve', offset: 44, type: ut.meta.getType('ut.Entity')},
    {name: 'ScaleCurve', offset: 52, type: ut.meta.getType('ut.Entity')},
    {name: 'StartDelay', offset: 60, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.CollectedCurrency, { cid: { configurable: true, get: function() { delete game.CollectedCurrency.cid; var offsetsPtr = ut.tempHeapPtrI32([44,52]); var offsetsCount = 2; return game.CollectedCurrency.cid = Module._ut_component_register_cid_with_type(game.CollectedCurrency._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.CollectedCurrency.StorageView, { cid: { configurable: true, get: function() { return game.CollectedCurrency.cid; } } });
game.CollectedCurrency.StartPosition = { $ofs:0, $t:"ut.Math.Vector3", $c:game.CollectedCurrency };
game.CollectedCurrency.StartPosition.z = { $ofs:8, $t:"float", $c:game.CollectedCurrency };
game.CollectedCurrency.StartPosition.y = { $ofs:4, $t:"float", $c:game.CollectedCurrency };
game.CollectedCurrency.StartPosition.x = { $ofs:0, $t:"float", $c:game.CollectedCurrency };
game.CollectedCurrency.MidPosition = { $ofs:12, $t:"ut.Math.Vector3", $c:game.CollectedCurrency };
game.CollectedCurrency.MidPosition.z = { $ofs:20, $t:"float", $c:game.CollectedCurrency };
game.CollectedCurrency.MidPosition.y = { $ofs:16, $t:"float", $c:game.CollectedCurrency };
game.CollectedCurrency.MidPosition.x = { $ofs:12, $t:"float", $c:game.CollectedCurrency };
game.CollectedCurrency.EndPosition = { $ofs:24, $t:"ut.Math.Vector3", $c:game.CollectedCurrency };
game.CollectedCurrency.EndPosition.z = { $ofs:32, $t:"float", $c:game.CollectedCurrency };
game.CollectedCurrency.EndPosition.y = { $ofs:28, $t:"float", $c:game.CollectedCurrency };
game.CollectedCurrency.EndPosition.x = { $ofs:24, $t:"float", $c:game.CollectedCurrency };
game.CollectedCurrency.Duration = { $ofs:36, $t:"float", $c:game.CollectedCurrency };
game.CollectedCurrency.Timer = { $ofs:40, $t:"float", $c:game.CollectedCurrency };
game.CollectedCurrency.ProgressCurve = { $ofs:44, $t:"ut.Entity", $c:game.CollectedCurrency };
game.CollectedCurrency.ProgressCurve.index = { $ofs:44, $t:"int32_t", $c:game.CollectedCurrency };
game.CollectedCurrency.ProgressCurve.version = { $ofs:48, $t:"int32_t", $c:game.CollectedCurrency };
game.CollectedCurrency.ScaleCurve = { $ofs:52, $t:"ut.Entity", $c:game.CollectedCurrency };
game.CollectedCurrency.ScaleCurve.index = { $ofs:52, $t:"int32_t", $c:game.CollectedCurrency };
game.CollectedCurrency.ScaleCurve.version = { $ofs:56, $t:"int32_t", $c:game.CollectedCurrency };
game.CollectedCurrency.StartDelay = { $ofs:60, $t:"float", $c:game.CollectedCurrency };
game.CurrentRenderMode = function(arg0, arg1) {
  this._desiredMode = (arg0|0);
  this._apply = (arg1 ? true : false);
};
game.CurrentRenderMode.prototype = Object.create(null);
game.CurrentRenderMode.prototype.constructor = game.CurrentRenderMode;
Object.defineProperties(game.CurrentRenderMode.prototype, {
  desiredMode: {
    get: function() { return this._desiredMode; },
    set: function(v) { this._desiredMode = (v|0); },
  },
  apply: {
    get: function() { return this._apply; },
    set: function(v) { this._apply = (v ? true : false); },
  },
});
game.CurrentRenderMode._size = 8;
game.CurrentRenderMode._fromPtr = function(ptr, v) {
  v = v || Object.create(game.CurrentRenderMode.prototype);
  v._desiredMode = HEAP32[(ptr+0)>>2];
  v._apply = (HEAP8[ptr+4]?true:false);
  return v;
};
game.CurrentRenderMode._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.desiredMode;
  HEAP8[ptr+4] = (v.apply)?1:0;
};
game.CurrentRenderMode._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.desiredMode;
  HEAP8[ptr+4] = (v.apply)?1:0;
};
game.CurrentRenderMode._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.CurrentRenderMode._toTempHeapPtr(ptr, v);
  return ptr;
};
game.CurrentRenderMode.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.CurrentRenderMode.StorageView.prototype = Object.create(null);
game.CurrentRenderMode.StorageView.prototype.constructor = game.CurrentRenderMode.StorageView;
game.CurrentRenderMode._view = game.CurrentRenderMode.StorageView;
game.CurrentRenderMode.StorageView._isSharedComp = game.CurrentRenderMode._isSharedComp = false;
game.CurrentRenderMode.StorageView._fromPtr = game.CurrentRenderMode._fromPtr;
game.CurrentRenderMode.StorageView._toPtr = game.CurrentRenderMode._toPtr;
game.CurrentRenderMode.StorageView._tempHeapPtr = game.CurrentRenderMode._tempHeapPtr;
game.CurrentRenderMode.StorageView._size = game.CurrentRenderMode._size;
game.CurrentRenderMode.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.CurrentRenderMode.StorageView.prototype, {
  desiredMode: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  apply: {
    get: function() { return (HEAP8[this._ptr+4]?true:false); },
    set: function(v) { HEAP8[this._ptr+4] = (v)?1:0; },
  },
});
game.CurrentRenderMode._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.CurrentRenderMode is a POD type, so a JavaScript side copy constructor game.CurrentRenderMode._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.CurrentRenderMode._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.CurrentRenderMode', 8, [
    {name: 'desiredMode', offset: 0, type: ut.meta.getType('ut.Core2D.RenderMode')},
    {name: 'apply', offset: 4, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.CurrentRenderMode, { cid: { configurable: true, get: function() { delete game.CurrentRenderMode.cid; var offsetsPtr = 0, offsetsCount = 0; return game.CurrentRenderMode.cid = Module._ut_component_register_cid_with_type(game.CurrentRenderMode._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.CurrentRenderMode.StorageView, { cid: { configurable: true, get: function() { return game.CurrentRenderMode.cid; } } });
game.CurrentRenderMode.desiredMode = { $ofs:0, $t:"ut.Core2D.RenderMode", $c:game.CurrentRenderMode };
game.CurrentRenderMode.apply = { $ofs:4, $t:"bool", $c:game.CurrentRenderMode };
game.CustomButton = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17) {
  this._IsPressed = (arg0 ? true : false);
  this._JustDown = (arg1 ? true : false);
  this._JustUp = (arg2 ? true : false);
  this._JustClicked = (arg3 ? true : false);
  this._TimePressed = (+(arg4===undefined ? 0 : arg4));
  this._LastDown = (arg5 ? true : false);
  this._LastOver = (arg6 ? true : false);
  this._DefaultSprite = (arg7 === undefined ? new ut.Entity : arg7);
  this._HoveredSprite = (arg8 === undefined ? new ut.Entity : arg8);
  this._PressedSprite = (arg9 === undefined ? new ut.Entity : arg9);
  this._DisabledSprite = (arg10 === undefined ? new ut.Entity : arg10);
  this._ContentToOffsetOnPress = (arg11 === undefined ? new ut.Entity : arg11);
  this._PressedOffsetY = (+(arg12===undefined ? 0 : arg12));
  this._ContentDefautPositionY = (+(arg13===undefined ? 0 : arg13));
  this._ContentDefautPositionIsSet = (arg14 ? true : false);
  this._IsPointerOver = (arg15 ? true : false);
  this._IsInteractable = (arg16 ? true : false);
  this._LastIsInteractable = (arg17 ? true : false);
};
game.CustomButton.prototype = Object.create(null);
game.CustomButton.prototype.constructor = game.CustomButton;
Object.defineProperties(game.CustomButton.prototype, {
  IsPressed: {
    get: function() { return this._IsPressed; },
    set: function(v) { this._IsPressed = (v ? true : false); },
  },
  JustDown: {
    get: function() { return this._JustDown; },
    set: function(v) { this._JustDown = (v ? true : false); },
  },
  JustUp: {
    get: function() { return this._JustUp; },
    set: function(v) { this._JustUp = (v ? true : false); },
  },
  JustClicked: {
    get: function() { return this._JustClicked; },
    set: function(v) { this._JustClicked = (v ? true : false); },
  },
  TimePressed: {
    get: function() { return this._TimePressed; },
    set: function(v) { this._TimePressed = (+(v===undefined ? 0 : v)); },
  },
  LastDown: {
    get: function() { return this._LastDown; },
    set: function(v) { this._LastDown = (v ? true : false); },
  },
  LastOver: {
    get: function() { return this._LastOver; },
    set: function(v) { this._LastOver = (v ? true : false); },
  },
  DefaultSprite: {
    get: function() { return this._DefaultSprite; },
    set: function(v) { this._DefaultSprite = (v === undefined ? new ut.Entity : v); },
  },
  HoveredSprite: {
    get: function() { return this._HoveredSprite; },
    set: function(v) { this._HoveredSprite = (v === undefined ? new ut.Entity : v); },
  },
  PressedSprite: {
    get: function() { return this._PressedSprite; },
    set: function(v) { this._PressedSprite = (v === undefined ? new ut.Entity : v); },
  },
  DisabledSprite: {
    get: function() { return this._DisabledSprite; },
    set: function(v) { this._DisabledSprite = (v === undefined ? new ut.Entity : v); },
  },
  ContentToOffsetOnPress: {
    get: function() { return this._ContentToOffsetOnPress; },
    set: function(v) { this._ContentToOffsetOnPress = (v === undefined ? new ut.Entity : v); },
  },
  PressedOffsetY: {
    get: function() { return this._PressedOffsetY; },
    set: function(v) { this._PressedOffsetY = (+(v===undefined ? 0 : v)); },
  },
  ContentDefautPositionY: {
    get: function() { return this._ContentDefautPositionY; },
    set: function(v) { this._ContentDefautPositionY = (+(v===undefined ? 0 : v)); },
  },
  ContentDefautPositionIsSet: {
    get: function() { return this._ContentDefautPositionIsSet; },
    set: function(v) { this._ContentDefautPositionIsSet = (v ? true : false); },
  },
  IsPointerOver: {
    get: function() { return this._IsPointerOver; },
    set: function(v) { this._IsPointerOver = (v ? true : false); },
  },
  IsInteractable: {
    get: function() { return this._IsInteractable; },
    set: function(v) { this._IsInteractable = (v ? true : false); },
  },
  LastIsInteractable: {
    get: function() { return this._LastIsInteractable; },
    set: function(v) { this._LastIsInteractable = (v ? true : false); },
  },
});
game.CustomButton._size = 64;
game.CustomButton._fromPtr = function(ptr, v) {
  v = v || Object.create(game.CustomButton.prototype);
  v._IsPressed = (HEAP8[ptr+0]?true:false);
  v._JustDown = (HEAP8[ptr+1]?true:false);
  v._JustUp = (HEAP8[ptr+2]?true:false);
  v._JustClicked = (HEAP8[ptr+3]?true:false);
  v._TimePressed = HEAPF32[(ptr+4)>>2];
  v._LastDown = (HEAP8[ptr+8]?true:false);
  v._LastOver = (HEAP8[ptr+9]?true:false);
  v._DefaultSprite = ut.Entity._fromPtr(ptr+12);
  v._HoveredSprite = ut.Entity._fromPtr(ptr+20);
  v._PressedSprite = ut.Entity._fromPtr(ptr+28);
  v._DisabledSprite = ut.Entity._fromPtr(ptr+36);
  v._ContentToOffsetOnPress = ut.Entity._fromPtr(ptr+44);
  v._PressedOffsetY = HEAPF32[(ptr+52)>>2];
  v._ContentDefautPositionY = HEAPF32[(ptr+56)>>2];
  v._ContentDefautPositionIsSet = (HEAP8[ptr+60]?true:false);
  v._IsPointerOver = (HEAP8[ptr+61]?true:false);
  v._IsInteractable = (HEAP8[ptr+62]?true:false);
  v._LastIsInteractable = (HEAP8[ptr+63]?true:false);
  return v;
};
game.CustomButton._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.IsPressed)?1:0;
  HEAP8[ptr+1] = (v.JustDown)?1:0;
  HEAP8[ptr+2] = (v.JustUp)?1:0;
  HEAP8[ptr+3] = (v.JustClicked)?1:0;
  HEAPF32[(ptr+4)>>2] = v.TimePressed;
  HEAP8[ptr+8] = (v.LastDown)?1:0;
  HEAP8[ptr+9] = (v.LastOver)?1:0;
  ut.Entity._toPtr(ptr+12, v.DefaultSprite);
  ut.Entity._toPtr(ptr+20, v.HoveredSprite);
  ut.Entity._toPtr(ptr+28, v.PressedSprite);
  ut.Entity._toPtr(ptr+36, v.DisabledSprite);
  ut.Entity._toPtr(ptr+44, v.ContentToOffsetOnPress);
  HEAPF32[(ptr+52)>>2] = v.PressedOffsetY;
  HEAPF32[(ptr+56)>>2] = v.ContentDefautPositionY;
  HEAP8[ptr+60] = (v.ContentDefautPositionIsSet)?1:0;
  HEAP8[ptr+61] = (v.IsPointerOver)?1:0;
  HEAP8[ptr+62] = (v.IsInteractable)?1:0;
  HEAP8[ptr+63] = (v.LastIsInteractable)?1:0;
};
game.CustomButton._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.IsPressed)?1:0;
  HEAP8[ptr+1] = (v.JustDown)?1:0;
  HEAP8[ptr+2] = (v.JustUp)?1:0;
  HEAP8[ptr+3] = (v.JustClicked)?1:0;
  HEAPF32[(ptr+4)>>2] = v.TimePressed;
  HEAP8[ptr+8] = (v.LastDown)?1:0;
  HEAP8[ptr+9] = (v.LastOver)?1:0;
  ut.Entity._toPtr(ptr+12, v.DefaultSprite);
  ut.Entity._toPtr(ptr+20, v.HoveredSprite);
  ut.Entity._toPtr(ptr+28, v.PressedSprite);
  ut.Entity._toPtr(ptr+36, v.DisabledSprite);
  ut.Entity._toPtr(ptr+44, v.ContentToOffsetOnPress);
  HEAPF32[(ptr+52)>>2] = v.PressedOffsetY;
  HEAPF32[(ptr+56)>>2] = v.ContentDefautPositionY;
  HEAP8[ptr+60] = (v.ContentDefautPositionIsSet)?1:0;
  HEAP8[ptr+61] = (v.IsPointerOver)?1:0;
  HEAP8[ptr+62] = (v.IsInteractable)?1:0;
  HEAP8[ptr+63] = (v.LastIsInteractable)?1:0;
};
game.CustomButton._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(64);
  if (v) game.CustomButton._toTempHeapPtr(ptr, v);
  return ptr;
};
game.CustomButton.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.CustomButton.StorageView.prototype = Object.create(null);
game.CustomButton.StorageView.prototype.constructor = game.CustomButton.StorageView;
game.CustomButton._view = game.CustomButton.StorageView;
game.CustomButton.StorageView._isSharedComp = game.CustomButton._isSharedComp = false;
game.CustomButton.StorageView._fromPtr = game.CustomButton._fromPtr;
game.CustomButton.StorageView._toPtr = game.CustomButton._toPtr;
game.CustomButton.StorageView._tempHeapPtr = game.CustomButton._tempHeapPtr;
game.CustomButton.StorageView._size = game.CustomButton._size;
game.CustomButton.StorageView.prototype.$advance = function() {
  this._ptr += 64;
};
Object.defineProperties(game.CustomButton.StorageView.prototype, {
  IsPressed: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  JustDown: {
    get: function() { return (HEAP8[this._ptr+1]?true:false); },
    set: function(v) { HEAP8[this._ptr+1] = (v)?1:0; },
  },
  JustUp: {
    get: function() { return (HEAP8[this._ptr+2]?true:false); },
    set: function(v) { HEAP8[this._ptr+2] = (v)?1:0; },
  },
  JustClicked: {
    get: function() { return (HEAP8[this._ptr+3]?true:false); },
    set: function(v) { HEAP8[this._ptr+3] = (v)?1:0; },
  },
  TimePressed: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  LastDown: {
    get: function() { return (HEAP8[this._ptr+8]?true:false); },
    set: function(v) { HEAP8[this._ptr+8] = (v)?1:0; },
  },
  LastOver: {
    get: function() { return (HEAP8[this._ptr+9]?true:false); },
    set: function(v) { HEAP8[this._ptr+9] = (v)?1:0; },
  },
  DefaultSprite: {
    get: function() { return ut.Entity._fromPtr(this._ptr+12); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+12, v); },
  },
  HoveredSprite: {
    get: function() { return ut.Entity._fromPtr(this._ptr+20); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+20, v); },
  },
  PressedSprite: {
    get: function() { return ut.Entity._fromPtr(this._ptr+28); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+28, v); },
  },
  DisabledSprite: {
    get: function() { return ut.Entity._fromPtr(this._ptr+36); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+36, v); },
  },
  ContentToOffsetOnPress: {
    get: function() { return ut.Entity._fromPtr(this._ptr+44); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+44, v); },
  },
  PressedOffsetY: {
    get: function() { return HEAPF32[(this._ptr+52)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+52)>>2] = v; },
  },
  ContentDefautPositionY: {
    get: function() { return HEAPF32[(this._ptr+56)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+56)>>2] = v; },
  },
  ContentDefautPositionIsSet: {
    get: function() { return (HEAP8[this._ptr+60]?true:false); },
    set: function(v) { HEAP8[this._ptr+60] = (v)?1:0; },
  },
  IsPointerOver: {
    get: function() { return (HEAP8[this._ptr+61]?true:false); },
    set: function(v) { HEAP8[this._ptr+61] = (v)?1:0; },
  },
  IsInteractable: {
    get: function() { return (HEAP8[this._ptr+62]?true:false); },
    set: function(v) { HEAP8[this._ptr+62] = (v)?1:0; },
  },
  LastIsInteractable: {
    get: function() { return (HEAP8[this._ptr+63]?true:false); },
    set: function(v) { HEAP8[this._ptr+63] = (v)?1:0; },
  },
});
game.CustomButton._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.CustomButton is a POD type, so a JavaScript side copy constructor game.CustomButton._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.CustomButton._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.CustomButton', 64, [
    {name: 'IsPressed', offset: 0, type: ut.meta.getType('bool')},
    {name: 'JustDown', offset: 1, type: ut.meta.getType('bool')},
    {name: 'JustUp', offset: 2, type: ut.meta.getType('bool')},
    {name: 'JustClicked', offset: 3, type: ut.meta.getType('bool')},
    {name: 'TimePressed', offset: 4, type: ut.meta.getType('float')},
    {name: 'LastDown', offset: 8, type: ut.meta.getType('bool')},
    {name: 'LastOver', offset: 9, type: ut.meta.getType('bool')},
    {name: 'DefaultSprite', offset: 12, type: ut.meta.getType('ut.Entity')},
    {name: 'HoveredSprite', offset: 20, type: ut.meta.getType('ut.Entity')},
    {name: 'PressedSprite', offset: 28, type: ut.meta.getType('ut.Entity')},
    {name: 'DisabledSprite', offset: 36, type: ut.meta.getType('ut.Entity')},
    {name: 'ContentToOffsetOnPress', offset: 44, type: ut.meta.getType('ut.Entity')},
    {name: 'PressedOffsetY', offset: 52, type: ut.meta.getType('float')},
    {name: 'ContentDefautPositionY', offset: 56, type: ut.meta.getType('float')},
    {name: 'ContentDefautPositionIsSet', offset: 60, type: ut.meta.getType('bool')},
    {name: 'IsPointerOver', offset: 61, type: ut.meta.getType('bool')},
    {name: 'IsInteractable', offset: 62, type: ut.meta.getType('bool')},
    {name: 'LastIsInteractable', offset: 63, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.CustomButton, { cid: { configurable: true, get: function() { delete game.CustomButton.cid; var offsetsPtr = ut.tempHeapPtrI32([12,20,28,36,44]); var offsetsCount = 5; return game.CustomButton.cid = Module._ut_component_register_cid_with_type(game.CustomButton._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.CustomButton.StorageView, { cid: { configurable: true, get: function() { return game.CustomButton.cid; } } });
game.CustomButton.IsPressed = { $ofs:0, $t:"bool", $c:game.CustomButton };
game.CustomButton.JustDown = { $ofs:1, $t:"bool", $c:game.CustomButton };
game.CustomButton.JustUp = { $ofs:2, $t:"bool", $c:game.CustomButton };
game.CustomButton.JustClicked = { $ofs:3, $t:"bool", $c:game.CustomButton };
game.CustomButton.TimePressed = { $ofs:4, $t:"float", $c:game.CustomButton };
game.CustomButton.LastDown = { $ofs:8, $t:"bool", $c:game.CustomButton };
game.CustomButton.LastOver = { $ofs:9, $t:"bool", $c:game.CustomButton };
game.CustomButton.DefaultSprite = { $ofs:12, $t:"ut.Entity", $c:game.CustomButton };
game.CustomButton.DefaultSprite.index = { $ofs:12, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.DefaultSprite.version = { $ofs:16, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.HoveredSprite = { $ofs:20, $t:"ut.Entity", $c:game.CustomButton };
game.CustomButton.HoveredSprite.index = { $ofs:20, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.HoveredSprite.version = { $ofs:24, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.PressedSprite = { $ofs:28, $t:"ut.Entity", $c:game.CustomButton };
game.CustomButton.PressedSprite.index = { $ofs:28, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.PressedSprite.version = { $ofs:32, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.DisabledSprite = { $ofs:36, $t:"ut.Entity", $c:game.CustomButton };
game.CustomButton.DisabledSprite.index = { $ofs:36, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.DisabledSprite.version = { $ofs:40, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.ContentToOffsetOnPress = { $ofs:44, $t:"ut.Entity", $c:game.CustomButton };
game.CustomButton.ContentToOffsetOnPress.index = { $ofs:44, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.ContentToOffsetOnPress.version = { $ofs:48, $t:"int32_t", $c:game.CustomButton };
game.CustomButton.PressedOffsetY = { $ofs:52, $t:"float", $c:game.CustomButton };
game.CustomButton.ContentDefautPositionY = { $ofs:56, $t:"float", $c:game.CustomButton };
game.CustomButton.ContentDefautPositionIsSet = { $ofs:60, $t:"bool", $c:game.CustomButton };
game.CustomButton.IsPointerOver = { $ofs:61, $t:"bool", $c:game.CustomButton };
game.CustomButton.IsInteractable = { $ofs:62, $t:"bool", $c:game.CustomButton };
game.CustomButton.LastIsInteractable = { $ofs:63, $t:"bool", $c:game.CustomButton };
game.CustomLabel = function(arg0, arg1) {
  this._LastText = (arg0 === undefined ? '' : arg0);
  this._LastColor = (arg1 === undefined ? new ut.Core2D.Color : arg1);
};
game.CustomLabel.prototype = Object.create(null);
game.CustomLabel.prototype.constructor = game.CustomLabel;
Object.defineProperties(game.CustomLabel.prototype, {
  LastText: {
    get: function() { return this._LastText; },
    set: function(v) { this._LastText = (v === undefined ? '' : v); },
  },
  LastColor: {
    get: function() { return this._LastColor; },
    set: function(v) { this._LastColor = (v === undefined ? new ut.Core2D.Color : v); },
  },
});
game.CustomLabel._size = 24;
game.CustomLabel._fromPtr = function(ptr, v) {
  v = v || Object.create(game.CustomLabel.prototype);
  v._LastText = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._LastColor = ut.Core2D.Color._fromPtr(ptr+8);
  return v;
};
game.CustomLabel._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.LastText);
  ut.Core2D.Color._toPtr(ptr+8, v.LastColor);
};
game.CustomLabel._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.LastText);
  ut.Core2D.Color._toPtr(ptr+8, v.LastColor);
};
game.CustomLabel._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) game.CustomLabel._toTempHeapPtr(ptr, v);
  return ptr;
};
game.CustomLabel.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.CustomLabel.StorageView.prototype = Object.create(null);
game.CustomLabel.StorageView.prototype.constructor = game.CustomLabel.StorageView;
game.CustomLabel._view = game.CustomLabel.StorageView;
game.CustomLabel.StorageView._isSharedComp = game.CustomLabel._isSharedComp = false;
game.CustomLabel.StorageView._fromPtr = game.CustomLabel._fromPtr;
game.CustomLabel.StorageView._toPtr = game.CustomLabel._toPtr;
game.CustomLabel.StorageView._tempHeapPtr = game.CustomLabel._tempHeapPtr;
game.CustomLabel.StorageView._size = game.CustomLabel._size;
game.CustomLabel.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(game.CustomLabel.StorageView.prototype, {
  LastText: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  LastColor: {
    get: function() { return ut.Core2D.Color._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Core2D.Color._toPtr(this._ptr+8, v); },
  },
});
game.CustomLabel._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
game.CustomLabel._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 16; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
};
game.CustomLabel._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.CustomLabel', 24, [
    {name: 'LastText', offset: 0, type: ut.meta.getType('string')},
    {name: 'LastColor', offset: 8, type: ut.meta.getType('ut.Core2D.Color')}
  ]);
})();
Object.defineProperties(game.CustomLabel, { cid: { configurable: true, get: function() { delete game.CustomLabel.cid; var offsetsPtr = 0, offsetsCount = 0; return game.CustomLabel.cid = Module._ut_component_register_cid_with_type(game.CustomLabel._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.CustomLabel._dtorFn), ut.CopyFn._cb.token_for(game.CustomLabel._copyFn)); } } });
Object.defineProperties(game.CustomLabel.StorageView, { cid: { configurable: true, get: function() { return game.CustomLabel.cid; } } });
game.CustomLabel.LastText = { $ofs:0, $t:"System.String", $c:game.CustomLabel };
game.CustomLabel.LastColor = { $ofs:8, $t:"ut.Core2D.Color", $c:game.CustomLabel };
game.CustomLabel.LastColor.r = { $ofs:8, $t:"float", $c:game.CustomLabel };
game.CustomLabel.LastColor.g = { $ofs:12, $t:"float", $c:game.CustomLabel };
game.CustomLabel.LastColor.b = { $ofs:16, $t:"float", $c:game.CustomLabel };
game.CustomLabel.LastColor.a = { $ofs:20, $t:"float", $c:game.CustomLabel };
game.CustomLabelCharacter = function() {
};
game.CustomLabelCharacter.prototype = Object.create(null);
game.CustomLabelCharacter.prototype.constructor = game.CustomLabelCharacter;
Object.defineProperties(game.CustomLabelCharacter.prototype, {
});
game.CustomLabelCharacter._size = 1;
game.CustomLabelCharacter._fromPtr = function(ptr, v) {
  v = v || Object.create(game.CustomLabelCharacter.prototype);
  return v;
};
game.CustomLabelCharacter._toPtr = function(ptr, v) {
};
game.CustomLabelCharacter._toTempHeapPtr = function(ptr, v) {
};
game.CustomLabelCharacter._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.CustomLabelCharacter._toTempHeapPtr(ptr, v);
  return ptr;
};
game.CustomLabelCharacter.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.CustomLabelCharacter.StorageView.prototype = Object.create(null);
game.CustomLabelCharacter.StorageView.prototype.constructor = game.CustomLabelCharacter.StorageView;
game.CustomLabelCharacter._view = game.CustomLabelCharacter.StorageView;
game.CustomLabelCharacter.StorageView._isSharedComp = game.CustomLabelCharacter._isSharedComp = false;
game.CustomLabelCharacter.StorageView._fromPtr = game.CustomLabelCharacter._fromPtr;
game.CustomLabelCharacter.StorageView._toPtr = game.CustomLabelCharacter._toPtr;
game.CustomLabelCharacter.StorageView._tempHeapPtr = game.CustomLabelCharacter._tempHeapPtr;
game.CustomLabelCharacter.StorageView._size = game.CustomLabelCharacter._size;
game.CustomLabelCharacter.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.CustomLabelCharacter.StorageView.prototype, {
});
game.CustomLabelCharacter._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.CustomLabelCharacter is a POD type, so a JavaScript side copy constructor game.CustomLabelCharacter._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.CustomLabelCharacter._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.CustomLabelCharacter', 1, []);
})();
Object.defineProperties(game.CustomLabelCharacter, { cid: { configurable: true, get: function() { delete game.CustomLabelCharacter.cid; var offsetsPtr = 0, offsetsCount = 0; return game.CustomLabelCharacter.cid = Module._ut_component_register_cid_with_type(game.CustomLabelCharacter._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.CustomLabelCharacter.StorageView, { cid: { configurable: true, get: function() { return game.CustomLabelCharacter.cid; } } });
game.DestroyAfterDelay = function(arg0) {
  this._Delay = (+(arg0===undefined ? 0 : arg0));
};
game.DestroyAfterDelay.prototype = Object.create(null);
game.DestroyAfterDelay.prototype.constructor = game.DestroyAfterDelay;
Object.defineProperties(game.DestroyAfterDelay.prototype, {
  Delay: {
    get: function() { return this._Delay; },
    set: function(v) { this._Delay = (+(v===undefined ? 0 : v)); },
  },
});
game.DestroyAfterDelay._size = 4;
game.DestroyAfterDelay._fromPtr = function(ptr, v) {
  v = v || Object.create(game.DestroyAfterDelay.prototype);
  v._Delay = HEAPF32[(ptr+0)>>2];
  return v;
};
game.DestroyAfterDelay._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Delay;
};
game.DestroyAfterDelay._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Delay;
};
game.DestroyAfterDelay._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.DestroyAfterDelay._toTempHeapPtr(ptr, v);
  return ptr;
};
game.DestroyAfterDelay.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.DestroyAfterDelay.StorageView.prototype = Object.create(null);
game.DestroyAfterDelay.StorageView.prototype.constructor = game.DestroyAfterDelay.StorageView;
game.DestroyAfterDelay._view = game.DestroyAfterDelay.StorageView;
game.DestroyAfterDelay.StorageView._isSharedComp = game.DestroyAfterDelay._isSharedComp = false;
game.DestroyAfterDelay.StorageView._fromPtr = game.DestroyAfterDelay._fromPtr;
game.DestroyAfterDelay.StorageView._toPtr = game.DestroyAfterDelay._toPtr;
game.DestroyAfterDelay.StorageView._tempHeapPtr = game.DestroyAfterDelay._tempHeapPtr;
game.DestroyAfterDelay.StorageView._size = game.DestroyAfterDelay._size;
game.DestroyAfterDelay.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.DestroyAfterDelay.StorageView.prototype, {
  Delay: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
});
game.DestroyAfterDelay._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.DestroyAfterDelay is a POD type, so a JavaScript side copy constructor game.DestroyAfterDelay._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.DestroyAfterDelay._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.DestroyAfterDelay', 4, [
    {name: 'Delay', offset: 0, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.DestroyAfterDelay, { cid: { configurable: true, get: function() { delete game.DestroyAfterDelay.cid; var offsetsPtr = 0, offsetsCount = 0; return game.DestroyAfterDelay.cid = Module._ut_component_register_cid_with_type(game.DestroyAfterDelay._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.DestroyAfterDelay.StorageView, { cid: { configurable: true, get: function() { return game.DestroyAfterDelay.cid; } } });
game.DestroyAfterDelay.Delay = { $ofs:0, $t:"float", $c:game.DestroyAfterDelay };
game.LocalizedText = function(arg0, arg1, arg2, arg3, arg4) {
  this._TextID = (arg0 === undefined ? '' : arg0);
  this._LastTextID = (arg1 === undefined ? '' : arg1);
  this._ToUpper = (arg2 ? true : false);
  this._LastLanguageID = (arg3 === undefined ? '' : arg3);
  this._TextParameters = (arg4 === undefined ? new Array() : ((arg4 instanceof Array) ? arg4 : (function() { throw new Error('Assigning non-array to array field'); })()));
};
game.LocalizedText.prototype = Object.create(null);
game.LocalizedText.prototype.constructor = game.LocalizedText;
Object.defineProperties(game.LocalizedText.prototype, {
  TextID: {
    get: function() { return this._TextID; },
    set: function(v) { this._TextID = (v === undefined ? '' : v); },
  },
  LastTextID: {
    get: function() { return this._LastTextID; },
    set: function(v) { this._LastTextID = (v === undefined ? '' : v); },
  },
  ToUpper: {
    get: function() { return this._ToUpper; },
    set: function(v) { this._ToUpper = (v ? true : false); },
  },
  LastLanguageID: {
    get: function() { return this._LastLanguageID; },
    set: function(v) { this._LastLanguageID = (v === undefined ? '' : v); },
  },
  TextParameters: {
    get: function() { return this._TextParameters; },
    set: function(v) { this._TextParameters = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
});
game.LocalizedText._size = 40;
game.LocalizedText._fromPtr = function(ptr, v) {
  v = v || Object.create(game.LocalizedText.prototype);
  v._TextID = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._LastTextID = (Module._ut_nativestring_data(ptr+8) ? UTF8ToString(Module._ut_nativestring_data(ptr+8)) : "");
  v._ToUpper = (HEAP8[ptr+16]?true:false);
  v._LastLanguageID = (Module._ut_nativestring_data(ptr+20) ? UTF8ToString(Module._ut_nativestring_data(ptr+20)) : "");
  v._TextParameters = ut.nativeBufferToJsArray(ptr+28, 8, function(p) { return (Module._ut_nativestring_data(p) ? UTF8ToString(Module._ut_nativestring_data(p)) : ""); });
  return v;
};
game.LocalizedText._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.TextID);
  ut.newHeapNativeString(ptr+8, v.LastTextID);
  HEAP8[ptr+16] = (v.ToUpper)?1:0;
  ut.newHeapNativeString(ptr+20, v.LastLanguageID);
  ut.jsArrayToExistingNativeBuffer_string(v.TextParameters, ptr+28, function(p, v) { ut.writeHeapNativeString(p, v); });
};
game.LocalizedText._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.TextID);
  ut.toExistingScratchNativeString(ptr+8, v.LastTextID);
  HEAP8[ptr+16] = (v.ToUpper)?1:0;
  ut.toExistingScratchNativeString(ptr+20, v.LastLanguageID);
  ut.jsArrayToExistingScratchNativeBuffer_string(v.TextParameters, ptr+28, function(p, v) { ut.toExistingScratchNativeString(p, v); });
};
game.LocalizedText._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(40);
  if (v) game.LocalizedText._toTempHeapPtr(ptr, v);
  return ptr;
};
game.LocalizedText.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.LocalizedText.StorageView.prototype = Object.create(null);
game.LocalizedText.StorageView.prototype.constructor = game.LocalizedText.StorageView;
game.LocalizedText._view = game.LocalizedText.StorageView;
game.LocalizedText.StorageView._isSharedComp = game.LocalizedText._isSharedComp = false;
game.LocalizedText.StorageView._fromPtr = game.LocalizedText._fromPtr;
game.LocalizedText.StorageView._toPtr = game.LocalizedText._toPtr;
game.LocalizedText.StorageView._tempHeapPtr = game.LocalizedText._tempHeapPtr;
game.LocalizedText.StorageView._size = game.LocalizedText._size;
game.LocalizedText.StorageView.prototype.$advance = function() {
  this._ptr += 40;
};
Object.defineProperties(game.LocalizedText.StorageView.prototype, {
  TextID: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  LastTextID: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+8) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+8)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+8, v); },
  },
  ToUpper: {
    get: function() { return (HEAP8[this._ptr+16]?true:false); },
    set: function(v) { HEAP8[this._ptr+16] = (v)?1:0; },
  },
  LastLanguageID: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+20) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+20)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+20, v); },
  },
  TextParameters: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+28, 8, function(p) { return (Module._ut_nativestring_data(p) ? UTF8ToString(Module._ut_nativestring_data(p)) : ""); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_string(v, this._ptr+28, function(p, v) { ut.writeHeapNativeString(p, v); }); },
  },
});
game.LocalizedText._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
  Module._ut_nativestring_placement_delete(ptr + 8);
  Module._ut_nativestring_placement_delete(ptr + 20);
  Module._ut_nativebuffer_nativestring_placement_delete(ptr + 28);
};
game.LocalizedText._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  Module._ut_nativestring_copy_construct(dst + 8, src + 8);
  for(var i = 0; i < 1; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
  Module._ut_nativestring_copy_construct(dst + 20, src + 20);
  Module._ut_nativebuffer_nativestring_copy_construct(dst + 28, src + 28);
};
game.LocalizedText._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.LocalizedText', 40, [
    {name: 'TextID', offset: 0, type: ut.meta.getType('string')},
    {name: 'LastTextID', offset: 8, type: ut.meta.getType('string')},
    {name: 'ToUpper', offset: 16, type: ut.meta.getType('bool')},
    {name: 'LastLanguageID', offset: 20, type: ut.meta.getType('string')},
    {name: 'TextParameters', offset: 28, type: ut.meta.getType('ut.NativeBuffer<string>')}
  ]);
})();
Object.defineProperties(game.LocalizedText, { cid: { configurable: true, get: function() { delete game.LocalizedText.cid; var offsetsPtr = 0, offsetsCount = 0; return game.LocalizedText.cid = Module._ut_component_register_cid_with_type(game.LocalizedText._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.LocalizedText._dtorFn), ut.CopyFn._cb.token_for(game.LocalizedText._copyFn)); } } });
Object.defineProperties(game.LocalizedText.StorageView, { cid: { configurable: true, get: function() { return game.LocalizedText.cid; } } });
game.LocalizedText.TextID = { $ofs:0, $t:"System.String", $c:game.LocalizedText };
game.LocalizedText.LastTextID = { $ofs:8, $t:"System.String", $c:game.LocalizedText };
game.LocalizedText.ToUpper = { $ofs:16, $t:"bool", $c:game.LocalizedText };
game.LocalizedText.LastLanguageID = { $ofs:20, $t:"System.String", $c:game.LocalizedText };
game.LocalizedText.TextParameters = { $ofs:28, $t:"ut.DynamicArray`1", $c:game.LocalizedText };
game.NearDeathOpacityAnimation = function(arg0, arg1, arg2, arg3) {
  this._Speed = (+(arg0===undefined ? 0 : arg0));
  this._MinAlpha = (+(arg1===undefined ? 0 : arg1));
  this._MaxAlpha = (+(arg2===undefined ? 0 : arg2));
  this._Timer = (+(arg3===undefined ? 0 : arg3));
};
game.NearDeathOpacityAnimation.prototype = Object.create(null);
game.NearDeathOpacityAnimation.prototype.constructor = game.NearDeathOpacityAnimation;
Object.defineProperties(game.NearDeathOpacityAnimation.prototype, {
  Speed: {
    get: function() { return this._Speed; },
    set: function(v) { this._Speed = (+(v===undefined ? 0 : v)); },
  },
  MinAlpha: {
    get: function() { return this._MinAlpha; },
    set: function(v) { this._MinAlpha = (+(v===undefined ? 0 : v)); },
  },
  MaxAlpha: {
    get: function() { return this._MaxAlpha; },
    set: function(v) { this._MaxAlpha = (+(v===undefined ? 0 : v)); },
  },
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
});
game.NearDeathOpacityAnimation._size = 16;
game.NearDeathOpacityAnimation._fromPtr = function(ptr, v) {
  v = v || Object.create(game.NearDeathOpacityAnimation.prototype);
  v._Speed = HEAPF32[(ptr+0)>>2];
  v._MinAlpha = HEAPF32[(ptr+4)>>2];
  v._MaxAlpha = HEAPF32[(ptr+8)>>2];
  v._Timer = HEAPF32[(ptr+12)>>2];
  return v;
};
game.NearDeathOpacityAnimation._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Speed;
  HEAPF32[(ptr+4)>>2] = v.MinAlpha;
  HEAPF32[(ptr+8)>>2] = v.MaxAlpha;
  HEAPF32[(ptr+12)>>2] = v.Timer;
};
game.NearDeathOpacityAnimation._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Speed;
  HEAPF32[(ptr+4)>>2] = v.MinAlpha;
  HEAPF32[(ptr+8)>>2] = v.MaxAlpha;
  HEAPF32[(ptr+12)>>2] = v.Timer;
};
game.NearDeathOpacityAnimation._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.NearDeathOpacityAnimation._toTempHeapPtr(ptr, v);
  return ptr;
};
game.NearDeathOpacityAnimation.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.NearDeathOpacityAnimation.StorageView.prototype = Object.create(null);
game.NearDeathOpacityAnimation.StorageView.prototype.constructor = game.NearDeathOpacityAnimation.StorageView;
game.NearDeathOpacityAnimation._view = game.NearDeathOpacityAnimation.StorageView;
game.NearDeathOpacityAnimation.StorageView._isSharedComp = game.NearDeathOpacityAnimation._isSharedComp = false;
game.NearDeathOpacityAnimation.StorageView._fromPtr = game.NearDeathOpacityAnimation._fromPtr;
game.NearDeathOpacityAnimation.StorageView._toPtr = game.NearDeathOpacityAnimation._toPtr;
game.NearDeathOpacityAnimation.StorageView._tempHeapPtr = game.NearDeathOpacityAnimation._tempHeapPtr;
game.NearDeathOpacityAnimation.StorageView._size = game.NearDeathOpacityAnimation._size;
game.NearDeathOpacityAnimation.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.NearDeathOpacityAnimation.StorageView.prototype, {
  Speed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  MinAlpha: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  MaxAlpha: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  Timer: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
});
game.NearDeathOpacityAnimation._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.NearDeathOpacityAnimation is a POD type, so a JavaScript side copy constructor game.NearDeathOpacityAnimation._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.NearDeathOpacityAnimation._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.NearDeathOpacityAnimation', 16, [
    {name: 'Speed', offset: 0, type: ut.meta.getType('float')},
    {name: 'MinAlpha', offset: 4, type: ut.meta.getType('float')},
    {name: 'MaxAlpha', offset: 8, type: ut.meta.getType('float')},
    {name: 'Timer', offset: 12, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.NearDeathOpacityAnimation, { cid: { configurable: true, get: function() { delete game.NearDeathOpacityAnimation.cid; var offsetsPtr = 0, offsetsCount = 0; return game.NearDeathOpacityAnimation.cid = Module._ut_component_register_cid_with_type(game.NearDeathOpacityAnimation._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.NearDeathOpacityAnimation.StorageView, { cid: { configurable: true, get: function() { return game.NearDeathOpacityAnimation.cid; } } });
game.NearDeathOpacityAnimation.Speed = { $ofs:0, $t:"float", $c:game.NearDeathOpacityAnimation };
game.NearDeathOpacityAnimation.MinAlpha = { $ofs:4, $t:"float", $c:game.NearDeathOpacityAnimation };
game.NearDeathOpacityAnimation.MaxAlpha = { $ofs:8, $t:"float", $c:game.NearDeathOpacityAnimation };
game.NearDeathOpacityAnimation.Timer = { $ofs:12, $t:"float", $c:game.NearDeathOpacityAnimation };
game.ShakeAnimation = function(arg0, arg1, arg2, arg3) {
  this._DefaultX = (+(arg0===undefined ? 0 : arg0));
  this._DefaultY = (+(arg1===undefined ? 0 : arg1));
  this._DefaultZ = (+(arg2===undefined ? 0 : arg2));
  this._IsDefaultPositionSet = (arg3 ? true : false);
};
game.ShakeAnimation.prototype = Object.create(null);
game.ShakeAnimation.prototype.constructor = game.ShakeAnimation;
Object.defineProperties(game.ShakeAnimation.prototype, {
  DefaultX: {
    get: function() { return this._DefaultX; },
    set: function(v) { this._DefaultX = (+(v===undefined ? 0 : v)); },
  },
  DefaultY: {
    get: function() { return this._DefaultY; },
    set: function(v) { this._DefaultY = (+(v===undefined ? 0 : v)); },
  },
  DefaultZ: {
    get: function() { return this._DefaultZ; },
    set: function(v) { this._DefaultZ = (+(v===undefined ? 0 : v)); },
  },
  IsDefaultPositionSet: {
    get: function() { return this._IsDefaultPositionSet; },
    set: function(v) { this._IsDefaultPositionSet = (v ? true : false); },
  },
});
game.ShakeAnimation._size = 16;
game.ShakeAnimation._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ShakeAnimation.prototype);
  v._DefaultX = HEAPF32[(ptr+0)>>2];
  v._DefaultY = HEAPF32[(ptr+4)>>2];
  v._DefaultZ = HEAPF32[(ptr+8)>>2];
  v._IsDefaultPositionSet = (HEAP8[ptr+12]?true:false);
  return v;
};
game.ShakeAnimation._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.DefaultX;
  HEAPF32[(ptr+4)>>2] = v.DefaultY;
  HEAPF32[(ptr+8)>>2] = v.DefaultZ;
  HEAP8[ptr+12] = (v.IsDefaultPositionSet)?1:0;
};
game.ShakeAnimation._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.DefaultX;
  HEAPF32[(ptr+4)>>2] = v.DefaultY;
  HEAPF32[(ptr+8)>>2] = v.DefaultZ;
  HEAP8[ptr+12] = (v.IsDefaultPositionSet)?1:0;
};
game.ShakeAnimation._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.ShakeAnimation._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ShakeAnimation.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ShakeAnimation.StorageView.prototype = Object.create(null);
game.ShakeAnimation.StorageView.prototype.constructor = game.ShakeAnimation.StorageView;
game.ShakeAnimation._view = game.ShakeAnimation.StorageView;
game.ShakeAnimation.StorageView._isSharedComp = game.ShakeAnimation._isSharedComp = false;
game.ShakeAnimation.StorageView._fromPtr = game.ShakeAnimation._fromPtr;
game.ShakeAnimation.StorageView._toPtr = game.ShakeAnimation._toPtr;
game.ShakeAnimation.StorageView._tempHeapPtr = game.ShakeAnimation._tempHeapPtr;
game.ShakeAnimation.StorageView._size = game.ShakeAnimation._size;
game.ShakeAnimation.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.ShakeAnimation.StorageView.prototype, {
  DefaultX: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  DefaultY: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  DefaultZ: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  IsDefaultPositionSet: {
    get: function() { return (HEAP8[this._ptr+12]?true:false); },
    set: function(v) { HEAP8[this._ptr+12] = (v)?1:0; },
  },
});
game.ShakeAnimation._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ShakeAnimation is a POD type, so a JavaScript side copy constructor game.ShakeAnimation._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.ShakeAnimation._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.ShakeAnimation', 16, [
    {name: 'DefaultX', offset: 0, type: ut.meta.getType('float')},
    {name: 'DefaultY', offset: 4, type: ut.meta.getType('float')},
    {name: 'DefaultZ', offset: 8, type: ut.meta.getType('float')},
    {name: 'IsDefaultPositionSet', offset: 12, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.ShakeAnimation, { cid: { configurable: true, get: function() { delete game.ShakeAnimation.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ShakeAnimation.cid = Module._ut_component_register_cid_with_type(game.ShakeAnimation._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.ShakeAnimation.StorageView, { cid: { configurable: true, get: function() { return game.ShakeAnimation.cid; } } });
game.ShakeAnimation.DefaultX = { $ofs:0, $t:"float", $c:game.ShakeAnimation };
game.ShakeAnimation.DefaultY = { $ofs:4, $t:"float", $c:game.ShakeAnimation };
game.ShakeAnimation.DefaultZ = { $ofs:8, $t:"float", $c:game.ShakeAnimation };
game.ShakeAnimation.IsDefaultPositionSet = { $ofs:12, $t:"bool", $c:game.ShakeAnimation };
game.ShakeAnimationPlayer = function(arg0, arg1, arg2, arg3, arg4) {
  this._Duration = (+(arg0===undefined ? 0 : arg0));
  this._ShakeRadiusX = (+(arg1===undefined ? 0 : arg1));
  this._ShakeRadiusY = (+(arg2===undefined ? 0 : arg2));
  this._Timer = (+(arg3===undefined ? 0 : arg3));
  this._StartDelay = (+(arg4===undefined ? 0 : arg4));
};
game.ShakeAnimationPlayer.prototype = Object.create(null);
game.ShakeAnimationPlayer.prototype.constructor = game.ShakeAnimationPlayer;
Object.defineProperties(game.ShakeAnimationPlayer.prototype, {
  Duration: {
    get: function() { return this._Duration; },
    set: function(v) { this._Duration = (+(v===undefined ? 0 : v)); },
  },
  ShakeRadiusX: {
    get: function() { return this._ShakeRadiusX; },
    set: function(v) { this._ShakeRadiusX = (+(v===undefined ? 0 : v)); },
  },
  ShakeRadiusY: {
    get: function() { return this._ShakeRadiusY; },
    set: function(v) { this._ShakeRadiusY = (+(v===undefined ? 0 : v)); },
  },
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
  StartDelay: {
    get: function() { return this._StartDelay; },
    set: function(v) { this._StartDelay = (+(v===undefined ? 0 : v)); },
  },
});
game.ShakeAnimationPlayer._size = 20;
game.ShakeAnimationPlayer._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ShakeAnimationPlayer.prototype);
  v._Duration = HEAPF32[(ptr+0)>>2];
  v._ShakeRadiusX = HEAPF32[(ptr+4)>>2];
  v._ShakeRadiusY = HEAPF32[(ptr+8)>>2];
  v._Timer = HEAPF32[(ptr+12)>>2];
  v._StartDelay = HEAPF32[(ptr+16)>>2];
  return v;
};
game.ShakeAnimationPlayer._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Duration;
  HEAPF32[(ptr+4)>>2] = v.ShakeRadiusX;
  HEAPF32[(ptr+8)>>2] = v.ShakeRadiusY;
  HEAPF32[(ptr+12)>>2] = v.Timer;
  HEAPF32[(ptr+16)>>2] = v.StartDelay;
};
game.ShakeAnimationPlayer._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Duration;
  HEAPF32[(ptr+4)>>2] = v.ShakeRadiusX;
  HEAPF32[(ptr+8)>>2] = v.ShakeRadiusY;
  HEAPF32[(ptr+12)>>2] = v.Timer;
  HEAPF32[(ptr+16)>>2] = v.StartDelay;
};
game.ShakeAnimationPlayer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.ShakeAnimationPlayer._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ShakeAnimationPlayer.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ShakeAnimationPlayer.StorageView.prototype = Object.create(null);
game.ShakeAnimationPlayer.StorageView.prototype.constructor = game.ShakeAnimationPlayer.StorageView;
game.ShakeAnimationPlayer._view = game.ShakeAnimationPlayer.StorageView;
game.ShakeAnimationPlayer.StorageView._isSharedComp = game.ShakeAnimationPlayer._isSharedComp = false;
game.ShakeAnimationPlayer.StorageView._fromPtr = game.ShakeAnimationPlayer._fromPtr;
game.ShakeAnimationPlayer.StorageView._toPtr = game.ShakeAnimationPlayer._toPtr;
game.ShakeAnimationPlayer.StorageView._tempHeapPtr = game.ShakeAnimationPlayer._tempHeapPtr;
game.ShakeAnimationPlayer.StorageView._size = game.ShakeAnimationPlayer._size;
game.ShakeAnimationPlayer.StorageView.prototype.$advance = function() {
  this._ptr += 20;
};
Object.defineProperties(game.ShakeAnimationPlayer.StorageView.prototype, {
  Duration: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  ShakeRadiusX: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  ShakeRadiusY: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  Timer: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
  StartDelay: {
    get: function() { return HEAPF32[(this._ptr+16)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+16)>>2] = v; },
  },
});
game.ShakeAnimationPlayer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ShakeAnimationPlayer is a POD type, so a JavaScript side copy constructor game.ShakeAnimationPlayer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.ShakeAnimationPlayer._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.ShakeAnimationPlayer', 20, [
    {name: 'Duration', offset: 0, type: ut.meta.getType('float')},
    {name: 'ShakeRadiusX', offset: 4, type: ut.meta.getType('float')},
    {name: 'ShakeRadiusY', offset: 8, type: ut.meta.getType('float')},
    {name: 'Timer', offset: 12, type: ut.meta.getType('float')},
    {name: 'StartDelay', offset: 16, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.ShakeAnimationPlayer, { cid: { configurable: true, get: function() { delete game.ShakeAnimationPlayer.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ShakeAnimationPlayer.cid = Module._ut_component_register_cid_with_type(game.ShakeAnimationPlayer._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.ShakeAnimationPlayer.StorageView, { cid: { configurable: true, get: function() { return game.ShakeAnimationPlayer.cid; } } });
game.ShakeAnimationPlayer.Duration = { $ofs:0, $t:"float", $c:game.ShakeAnimationPlayer };
game.ShakeAnimationPlayer.ShakeRadiusX = { $ofs:4, $t:"float", $c:game.ShakeAnimationPlayer };
game.ShakeAnimationPlayer.ShakeRadiusY = { $ofs:8, $t:"float", $c:game.ShakeAnimationPlayer };
game.ShakeAnimationPlayer.Timer = { $ofs:12, $t:"float", $c:game.ShakeAnimationPlayer };
game.ShakeAnimationPlayer.StartDelay = { $ofs:16, $t:"float", $c:game.ShakeAnimationPlayer };
game.TilingBackground = function(arg0, arg1, arg2) {
  this._SpeedX = (+(arg0===undefined ? 0 : arg0));
  this._SpeedY = (+(arg1===undefined ? 0 : arg1));
  this._TileSize = (+(arg2===undefined ? 0 : arg2));
};
game.TilingBackground.prototype = Object.create(null);
game.TilingBackground.prototype.constructor = game.TilingBackground;
Object.defineProperties(game.TilingBackground.prototype, {
  SpeedX: {
    get: function() { return this._SpeedX; },
    set: function(v) { this._SpeedX = (+(v===undefined ? 0 : v)); },
  },
  SpeedY: {
    get: function() { return this._SpeedY; },
    set: function(v) { this._SpeedY = (+(v===undefined ? 0 : v)); },
  },
  TileSize: {
    get: function() { return this._TileSize; },
    set: function(v) { this._TileSize = (+(v===undefined ? 0 : v)); },
  },
});
game.TilingBackground._size = 12;
game.TilingBackground._fromPtr = function(ptr, v) {
  v = v || Object.create(game.TilingBackground.prototype);
  v._SpeedX = HEAPF32[(ptr+0)>>2];
  v._SpeedY = HEAPF32[(ptr+4)>>2];
  v._TileSize = HEAPF32[(ptr+8)>>2];
  return v;
};
game.TilingBackground._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.SpeedX;
  HEAPF32[(ptr+4)>>2] = v.SpeedY;
  HEAPF32[(ptr+8)>>2] = v.TileSize;
};
game.TilingBackground._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.SpeedX;
  HEAPF32[(ptr+4)>>2] = v.SpeedY;
  HEAPF32[(ptr+8)>>2] = v.TileSize;
};
game.TilingBackground._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(12);
  if (v) game.TilingBackground._toTempHeapPtr(ptr, v);
  return ptr;
};
game.TilingBackground.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.TilingBackground.StorageView.prototype = Object.create(null);
game.TilingBackground.StorageView.prototype.constructor = game.TilingBackground.StorageView;
game.TilingBackground._view = game.TilingBackground.StorageView;
game.TilingBackground.StorageView._isSharedComp = game.TilingBackground._isSharedComp = false;
game.TilingBackground.StorageView._fromPtr = game.TilingBackground._fromPtr;
game.TilingBackground.StorageView._toPtr = game.TilingBackground._toPtr;
game.TilingBackground.StorageView._tempHeapPtr = game.TilingBackground._tempHeapPtr;
game.TilingBackground.StorageView._size = game.TilingBackground._size;
game.TilingBackground.StorageView.prototype.$advance = function() {
  this._ptr += 12;
};
Object.defineProperties(game.TilingBackground.StorageView.prototype, {
  SpeedX: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  SpeedY: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  TileSize: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
});
game.TilingBackground._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.TilingBackground is a POD type, so a JavaScript side copy constructor game.TilingBackground._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.TilingBackground._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.TilingBackground', 12, [
    {name: 'SpeedX', offset: 0, type: ut.meta.getType('float')},
    {name: 'SpeedY', offset: 4, type: ut.meta.getType('float')},
    {name: 'TileSize', offset: 8, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.TilingBackground, { cid: { configurable: true, get: function() { delete game.TilingBackground.cid; var offsetsPtr = 0, offsetsCount = 0; return game.TilingBackground.cid = Module._ut_component_register_cid_with_type(game.TilingBackground._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.TilingBackground.StorageView, { cid: { configurable: true, get: function() { return game.TilingBackground.cid; } } });
game.TilingBackground.SpeedX = { $ofs:0, $t:"float", $c:game.TilingBackground };
game.TilingBackground.SpeedY = { $ofs:4, $t:"float", $c:game.TilingBackground };
game.TilingBackground.TileSize = { $ofs:8, $t:"float", $c:game.TilingBackground };
game.GridConfiguration = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  this._GemEntities = (arg0 === undefined ? new Array() : ((arg0 instanceof Array) ? arg0 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._CellEntities = (arg1 === undefined ? new Array() : ((arg1 instanceof Array) ? arg1 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._FrozenGridTimer = (+(arg2===undefined ? 0 : arg2));
  this._Width = (arg3|0);
  this._Height = (arg4|0);
  this._CellDimension = (+(arg5===undefined ? 0 : arg5));
  this._GridDefaultPositionY = (+(arg6===undefined ? 0 : arg6));
  this._GridOffsetPositionY = (+(arg7===undefined ? 0 : arg7));
  this._IsGridCreated = (arg8 ? true : false);
};
game.GridConfiguration.prototype = Object.create(null);
game.GridConfiguration.prototype.constructor = game.GridConfiguration;
Object.defineProperties(game.GridConfiguration.prototype, {
  GemEntities: {
    get: function() { return this._GemEntities; },
    set: function(v) { this._GemEntities = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  CellEntities: {
    get: function() { return this._CellEntities; },
    set: function(v) { this._CellEntities = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  FrozenGridTimer: {
    get: function() { return this._FrozenGridTimer; },
    set: function(v) { this._FrozenGridTimer = (+(v===undefined ? 0 : v)); },
  },
  Width: {
    get: function() { return this._Width; },
    set: function(v) { this._Width = (v|0); },
  },
  Height: {
    get: function() { return this._Height; },
    set: function(v) { this._Height = (v|0); },
  },
  CellDimension: {
    get: function() { return this._CellDimension; },
    set: function(v) { this._CellDimension = (+(v===undefined ? 0 : v)); },
  },
  GridDefaultPositionY: {
    get: function() { return this._GridDefaultPositionY; },
    set: function(v) { this._GridDefaultPositionY = (+(v===undefined ? 0 : v)); },
  },
  GridOffsetPositionY: {
    get: function() { return this._GridOffsetPositionY; },
    set: function(v) { this._GridOffsetPositionY = (+(v===undefined ? 0 : v)); },
  },
  IsGridCreated: {
    get: function() { return this._IsGridCreated; },
    set: function(v) { this._IsGridCreated = (v ? true : false); },
  },
});
game.GridConfiguration._size = 52;
game.GridConfiguration._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GridConfiguration.prototype);
  v._GemEntities = ut.nativeBufferToJsArray(ptr+0, 8, function(p) { return ut.Entity._fromPtr(p); });
  v._CellEntities = ut.nativeBufferToJsArray(ptr+12, 8, function(p) { return ut.Entity._fromPtr(p); });
  v._FrozenGridTimer = HEAPF32[(ptr+24)>>2];
  v._Width = HEAP32[(ptr+28)>>2];
  v._Height = HEAP32[(ptr+32)>>2];
  v._CellDimension = HEAPF32[(ptr+36)>>2];
  v._GridDefaultPositionY = HEAPF32[(ptr+40)>>2];
  v._GridOffsetPositionY = HEAPF32[(ptr+44)>>2];
  v._IsGridCreated = (HEAP8[ptr+48]?true:false);
  return v;
};
game.GridConfiguration._toPtr = function(ptr, v) {
  ut.jsArrayToExistingNativeBuffer_pod(v.GemEntities, ptr+0, 8, function(p, v) { ut.Entity._toPtr(p, v); });
  ut.jsArrayToExistingNativeBuffer_pod(v.CellEntities, ptr+12, 8, function(p, v) { ut.Entity._toPtr(p, v); });
  HEAPF32[(ptr+24)>>2] = v.FrozenGridTimer;
  HEAP32[(ptr+28)>>2] = v.Width;
  HEAP32[(ptr+32)>>2] = v.Height;
  HEAPF32[(ptr+36)>>2] = v.CellDimension;
  HEAPF32[(ptr+40)>>2] = v.GridDefaultPositionY;
  HEAPF32[(ptr+44)>>2] = v.GridOffsetPositionY;
  HEAP8[ptr+48] = (v.IsGridCreated)?1:0;
};
game.GridConfiguration._toTempHeapPtr = function(ptr, v) {
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.GemEntities, ptr+0, 8, function(p, v) { ut.Entity._toPtr(p, v); });
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.CellEntities, ptr+12, 8, function(p, v) { ut.Entity._toPtr(p, v); });
  HEAPF32[(ptr+24)>>2] = v.FrozenGridTimer;
  HEAP32[(ptr+28)>>2] = v.Width;
  HEAP32[(ptr+32)>>2] = v.Height;
  HEAPF32[(ptr+36)>>2] = v.CellDimension;
  HEAPF32[(ptr+40)>>2] = v.GridDefaultPositionY;
  HEAPF32[(ptr+44)>>2] = v.GridOffsetPositionY;
  HEAP8[ptr+48] = (v.IsGridCreated)?1:0;
};
game.GridConfiguration._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(52);
  if (v) game.GridConfiguration._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GridConfiguration.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GridConfiguration.StorageView.prototype = Object.create(null);
game.GridConfiguration.StorageView.prototype.constructor = game.GridConfiguration.StorageView;
game.GridConfiguration._view = game.GridConfiguration.StorageView;
game.GridConfiguration.StorageView._isSharedComp = game.GridConfiguration._isSharedComp = false;
game.GridConfiguration.StorageView._fromPtr = game.GridConfiguration._fromPtr;
game.GridConfiguration.StorageView._toPtr = game.GridConfiguration._toPtr;
game.GridConfiguration.StorageView._tempHeapPtr = game.GridConfiguration._tempHeapPtr;
game.GridConfiguration.StorageView._size = game.GridConfiguration._size;
game.GridConfiguration.StorageView.prototype.$advance = function() {
  this._ptr += 52;
};
Object.defineProperties(game.GridConfiguration.StorageView.prototype, {
  GemEntities: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+0, 8, function(p) { return ut.Entity._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+0, 8, function(p, v) { ut.Entity._toPtr(p, v); }); },
  },
  CellEntities: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+12, 8, function(p) { return ut.Entity._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+12, 8, function(p, v) { ut.Entity._toPtr(p, v); }); },
  },
  FrozenGridTimer: {
    get: function() { return HEAPF32[(this._ptr+24)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+24)>>2] = v; },
  },
  Width: {
    get: function() { return HEAP32[(this._ptr+28)>>2]; },
    set: function(v) { HEAP32[(this._ptr+28)>>2] = v; },
  },
  Height: {
    get: function() { return HEAP32[(this._ptr+32)>>2]; },
    set: function(v) { HEAP32[(this._ptr+32)>>2] = v; },
  },
  CellDimension: {
    get: function() { return HEAPF32[(this._ptr+36)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+36)>>2] = v; },
  },
  GridDefaultPositionY: {
    get: function() { return HEAPF32[(this._ptr+40)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+40)>>2] = v; },
  },
  GridOffsetPositionY: {
    get: function() { return HEAPF32[(this._ptr+44)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+44)>>2] = v; },
  },
  IsGridCreated: {
    get: function() { return (HEAP8[this._ptr+48]?true:false); },
    set: function(v) { HEAP8[this._ptr+48] = (v)?1:0; },
  },
});
game.GridConfiguration._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativebuffer_pod_placement_delete(ptr + 0);
  Module._ut_nativebuffer_pod_placement_delete(ptr + 12);
};
game.GridConfiguration._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativebuffer_pod_copy_construct(dst + 0, src + 0, 8);
  Module._ut_nativebuffer_pod_copy_construct(dst + 12, src + 12, 8);
  for(var i = 0; i < 4; ++i) HEAPU8[dst+24+i] = HEAPU8[src+24+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+28+i] = HEAPU8[src+28+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+32+i] = HEAPU8[src+32+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+36+i] = HEAPU8[src+36+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+40+i] = HEAPU8[src+40+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+44+i] = HEAPU8[src+44+i];
  for(var i = 0; i < 1; ++i) HEAPU8[dst+48+i] = HEAPU8[src+48+i];
};
game.GridConfiguration._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.GridConfiguration', 52, [
    {name: 'GemEntities', offset: 0, type: ut.meta.getType('ut.NativeBuffer<ut.Entity>')},
    {name: 'CellEntities', offset: 12, type: ut.meta.getType('ut.NativeBuffer<ut.Entity>')},
    {name: 'FrozenGridTimer', offset: 24, type: ut.meta.getType('float')},
    {name: 'Width', offset: 28, type: ut.meta.getType('int32')},
    {name: 'Height', offset: 32, type: ut.meta.getType('int32')},
    {name: 'CellDimension', offset: 36, type: ut.meta.getType('float')},
    {name: 'GridDefaultPositionY', offset: 40, type: ut.meta.getType('float')},
    {name: 'GridOffsetPositionY', offset: 44, type: ut.meta.getType('float')},
    {name: 'IsGridCreated', offset: 48, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.GridConfiguration, { cid: { configurable: true, get: function() { delete game.GridConfiguration.cid; var offsetsPtr = ut.tempHeapPtrI32([-1,-13]); var offsetsCount = 2; return game.GridConfiguration.cid = Module._ut_component_register_cid_with_type(game.GridConfiguration._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.GridConfiguration._dtorFn), ut.CopyFn._cb.token_for(game.GridConfiguration._copyFn)); } } });
Object.defineProperties(game.GridConfiguration.StorageView, { cid: { configurable: true, get: function() { return game.GridConfiguration.cid; } } });
game.GridConfiguration.GemEntities = { $ofs:0, $t:"ut.DynamicArray`1", $c:game.GridConfiguration };
game.GridConfiguration.CellEntities = { $ofs:12, $t:"ut.DynamicArray`1", $c:game.GridConfiguration };
game.GridConfiguration.FrozenGridTimer = { $ofs:24, $t:"float", $c:game.GridConfiguration };
game.GridConfiguration.Width = { $ofs:28, $t:"int32_t", $c:game.GridConfiguration };
game.GridConfiguration.Height = { $ofs:32, $t:"int32_t", $c:game.GridConfiguration };
game.GridConfiguration.CellDimension = { $ofs:36, $t:"float", $c:game.GridConfiguration };
game.GridConfiguration.GridDefaultPositionY = { $ofs:40, $t:"float", $c:game.GridConfiguration };
game.GridConfiguration.GridOffsetPositionY = { $ofs:44, $t:"float", $c:game.GridConfiguration };
game.GridConfiguration.IsGridCreated = { $ofs:48, $t:"bool", $c:game.GridConfiguration };
game.SkinConfiguration = function(arg0) {
  this._CurrentSkin = (arg0|0);
};
game.SkinConfiguration.prototype = Object.create(null);
game.SkinConfiguration.prototype.constructor = game.SkinConfiguration;
Object.defineProperties(game.SkinConfiguration.prototype, {
  CurrentSkin: {
    get: function() { return this._CurrentSkin; },
    set: function(v) { this._CurrentSkin = (v|0); },
  },
});
game.SkinConfiguration._size = 4;
game.SkinConfiguration._fromPtr = function(ptr, v) {
  v = v || Object.create(game.SkinConfiguration.prototype);
  v._CurrentSkin = HEAP32[(ptr+0)>>2];
  return v;
};
game.SkinConfiguration._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.CurrentSkin;
};
game.SkinConfiguration._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.CurrentSkin;
};
game.SkinConfiguration._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.SkinConfiguration._toTempHeapPtr(ptr, v);
  return ptr;
};
game.SkinConfiguration.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.SkinConfiguration.StorageView.prototype = Object.create(null);
game.SkinConfiguration.StorageView.prototype.constructor = game.SkinConfiguration.StorageView;
game.SkinConfiguration._view = game.SkinConfiguration.StorageView;
game.SkinConfiguration.StorageView._isSharedComp = game.SkinConfiguration._isSharedComp = false;
game.SkinConfiguration.StorageView._fromPtr = game.SkinConfiguration._fromPtr;
game.SkinConfiguration.StorageView._toPtr = game.SkinConfiguration._toPtr;
game.SkinConfiguration.StorageView._tempHeapPtr = game.SkinConfiguration._tempHeapPtr;
game.SkinConfiguration.StorageView._size = game.SkinConfiguration._size;
game.SkinConfiguration.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.SkinConfiguration.StorageView.prototype, {
  CurrentSkin: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
game.SkinConfiguration._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.SkinConfiguration is a POD type, so a JavaScript side copy constructor game.SkinConfiguration._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.SkinConfiguration._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.SkinConfiguration', 4, [
    {name: 'CurrentSkin', offset: 0, type: ut.meta.getType('game.SkinTypes')}
  ]);
})();
Object.defineProperties(game.SkinConfiguration, { cid: { configurable: true, get: function() { delete game.SkinConfiguration.cid; var offsetsPtr = 0, offsetsCount = 0; return game.SkinConfiguration.cid = Module._ut_component_register_cid_with_type(game.SkinConfiguration._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.SkinConfiguration.StorageView, { cid: { configurable: true, get: function() { return game.SkinConfiguration.cid; } } });
game.SkinConfiguration.CurrentSkin = { $ofs:0, $t:"game.SkinTypes", $c:game.SkinConfiguration };
game.TutorialConfiguration = function(arg0, arg1, arg2) {
  this._IsMatchTutorialDone = (arg0 ? true : false);
  this._IsEggTutorialDone = (arg1 ? true : false);
  this._IsSurvivalTutorialDone = (arg2 ? true : false);
};
game.TutorialConfiguration.prototype = Object.create(null);
game.TutorialConfiguration.prototype.constructor = game.TutorialConfiguration;
Object.defineProperties(game.TutorialConfiguration.prototype, {
  IsMatchTutorialDone: {
    get: function() { return this._IsMatchTutorialDone; },
    set: function(v) { this._IsMatchTutorialDone = (v ? true : false); },
  },
  IsEggTutorialDone: {
    get: function() { return this._IsEggTutorialDone; },
    set: function(v) { this._IsEggTutorialDone = (v ? true : false); },
  },
  IsSurvivalTutorialDone: {
    get: function() { return this._IsSurvivalTutorialDone; },
    set: function(v) { this._IsSurvivalTutorialDone = (v ? true : false); },
  },
});
game.TutorialConfiguration._size = 3;
game.TutorialConfiguration._fromPtr = function(ptr, v) {
  v = v || Object.create(game.TutorialConfiguration.prototype);
  v._IsMatchTutorialDone = (HEAP8[ptr+0]?true:false);
  v._IsEggTutorialDone = (HEAP8[ptr+1]?true:false);
  v._IsSurvivalTutorialDone = (HEAP8[ptr+2]?true:false);
  return v;
};
game.TutorialConfiguration._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.IsMatchTutorialDone)?1:0;
  HEAP8[ptr+1] = (v.IsEggTutorialDone)?1:0;
  HEAP8[ptr+2] = (v.IsSurvivalTutorialDone)?1:0;
};
game.TutorialConfiguration._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.IsMatchTutorialDone)?1:0;
  HEAP8[ptr+1] = (v.IsEggTutorialDone)?1:0;
  HEAP8[ptr+2] = (v.IsSurvivalTutorialDone)?1:0;
};
game.TutorialConfiguration._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(3);
  if (v) game.TutorialConfiguration._toTempHeapPtr(ptr, v);
  return ptr;
};
game.TutorialConfiguration.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.TutorialConfiguration.StorageView.prototype = Object.create(null);
game.TutorialConfiguration.StorageView.prototype.constructor = game.TutorialConfiguration.StorageView;
game.TutorialConfiguration._view = game.TutorialConfiguration.StorageView;
game.TutorialConfiguration.StorageView._isSharedComp = game.TutorialConfiguration._isSharedComp = false;
game.TutorialConfiguration.StorageView._fromPtr = game.TutorialConfiguration._fromPtr;
game.TutorialConfiguration.StorageView._toPtr = game.TutorialConfiguration._toPtr;
game.TutorialConfiguration.StorageView._tempHeapPtr = game.TutorialConfiguration._tempHeapPtr;
game.TutorialConfiguration.StorageView._size = game.TutorialConfiguration._size;
game.TutorialConfiguration.StorageView.prototype.$advance = function() {
  this._ptr += 3;
};
Object.defineProperties(game.TutorialConfiguration.StorageView.prototype, {
  IsMatchTutorialDone: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  IsEggTutorialDone: {
    get: function() { return (HEAP8[this._ptr+1]?true:false); },
    set: function(v) { HEAP8[this._ptr+1] = (v)?1:0; },
  },
  IsSurvivalTutorialDone: {
    get: function() { return (HEAP8[this._ptr+2]?true:false); },
    set: function(v) { HEAP8[this._ptr+2] = (v)?1:0; },
  },
});
game.TutorialConfiguration._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.TutorialConfiguration is a POD type, so a JavaScript side copy constructor game.TutorialConfiguration._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.TutorialConfiguration._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.TutorialConfiguration', 3, [
    {name: 'IsMatchTutorialDone', offset: 0, type: ut.meta.getType('bool')},
    {name: 'IsEggTutorialDone', offset: 1, type: ut.meta.getType('bool')},
    {name: 'IsSurvivalTutorialDone', offset: 2, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.TutorialConfiguration, { cid: { configurable: true, get: function() { delete game.TutorialConfiguration.cid; var offsetsPtr = 0, offsetsCount = 0; return game.TutorialConfiguration.cid = Module._ut_component_register_cid_with_type(game.TutorialConfiguration._typeDesc, 1, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.TutorialConfiguration.StorageView, { cid: { configurable: true, get: function() { return game.TutorialConfiguration.cid; } } });
game.TutorialConfiguration.IsMatchTutorialDone = { $ofs:0, $t:"bool", $c:game.TutorialConfiguration };
game.TutorialConfiguration.IsEggTutorialDone = { $ofs:1, $t:"bool", $c:game.TutorialConfiguration };
game.TutorialConfiguration.IsSurvivalTutorialDone = { $ofs:2, $t:"bool", $c:game.TutorialConfiguration };
game.LocalizationConfiguration = function(arg0, arg1) {
  this._Texts = (arg0 === undefined ? new Array() : ((arg0 instanceof Array) ? arg0 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._LanguageID = (arg1 === undefined ? '' : arg1);
};
game.LocalizationConfiguration.prototype = Object.create(null);
game.LocalizationConfiguration.prototype.constructor = game.LocalizationConfiguration;
Object.defineProperties(game.LocalizationConfiguration.prototype, {
  Texts: {
    get: function() { return this._Texts; },
    set: function(v) { this._Texts = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  LanguageID: {
    get: function() { return this._LanguageID; },
    set: function(v) { this._LanguageID = (v === undefined ? '' : v); },
  },
});
game.LocalizationConfiguration._size = 20;
game.LocalizationConfiguration._fromPtr = function(ptr, v) {
  v = v || Object.create(game.LocalizationConfiguration.prototype);
  v._Texts = ut.nativeBufferToJsArray(ptr+0, 24, function(p) { return game.LocalizationItem._fromPtr(p); });
  v._LanguageID = (Module._ut_nativestring_data(ptr+12) ? UTF8ToString(Module._ut_nativestring_data(ptr+12)) : "");
  return v;
};
game.LocalizationConfiguration._toPtr = function(ptr, v) {
  ut.jsArrayToExistingNativeBuffer_pod(v.Texts, ptr+0, 24, function(p, v) { game.LocalizationItem._toPtr(p, v); });
  ut.newHeapNativeString(ptr+12, v.LanguageID);
};
game.LocalizationConfiguration._toTempHeapPtr = function(ptr, v) {
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.Texts, ptr+0, 24, function(p, v) { game.LocalizationItem._toPtr(p, v); });
  ut.toExistingScratchNativeString(ptr+12, v.LanguageID);
};
game.LocalizationConfiguration._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.LocalizationConfiguration._toTempHeapPtr(ptr, v);
  return ptr;
};
game.LocalizationConfiguration.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.LocalizationConfiguration.StorageView.prototype = Object.create(null);
game.LocalizationConfiguration.StorageView.prototype.constructor = game.LocalizationConfiguration.StorageView;
game.LocalizationConfiguration._view = game.LocalizationConfiguration.StorageView;
game.LocalizationConfiguration.StorageView._isSharedComp = game.LocalizationConfiguration._isSharedComp = false;
game.LocalizationConfiguration.StorageView._fromPtr = game.LocalizationConfiguration._fromPtr;
game.LocalizationConfiguration.StorageView._toPtr = game.LocalizationConfiguration._toPtr;
game.LocalizationConfiguration.StorageView._tempHeapPtr = game.LocalizationConfiguration._tempHeapPtr;
game.LocalizationConfiguration.StorageView._size = game.LocalizationConfiguration._size;
game.LocalizationConfiguration.StorageView.prototype.$advance = function() {
  this._ptr += 20;
};
Object.defineProperties(game.LocalizationConfiguration.StorageView.prototype, {
  Texts: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+0, 24, function(p) { return game.LocalizationItem._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+0, 24, function(p, v) { game.LocalizationItem._toPtr(p, v); }); },
  },
  LanguageID: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+12) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+12)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+12, v); },
  },
});
game.LocalizationConfiguration._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativebuffer_pod_placement_delete(ptr + 0);
  Module._ut_nativestring_placement_delete(ptr + 12);
};
game.LocalizationConfiguration._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativebuffer_pod_copy_construct(dst + 0, src + 0, 24);
  Module._ut_nativestring_copy_construct(dst + 12, src + 12);
};
game.LocalizationConfiguration._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.LocalizationConfiguration', 20, [
    {name: 'Texts', offset: 0, type: ut.meta.getType('ut.NativeBuffer<game.LocalizationItem>')},
    {name: 'LanguageID', offset: 12, type: ut.meta.getType('string')}
  ]);
})();
Object.defineProperties(game.LocalizationConfiguration, { cid: { configurable: true, get: function() { delete game.LocalizationConfiguration.cid; var offsetsPtr = 0, offsetsCount = 0; return game.LocalizationConfiguration.cid = Module._ut_component_register_cid_with_type(game.LocalizationConfiguration._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.LocalizationConfiguration._dtorFn), ut.CopyFn._cb.token_for(game.LocalizationConfiguration._copyFn)); } } });
Object.defineProperties(game.LocalizationConfiguration.StorageView, { cid: { configurable: true, get: function() { return game.LocalizationConfiguration.cid; } } });
game.LocalizationConfiguration.Texts = { $ofs:0, $t:"ut.DynamicArray`1", $c:game.LocalizationConfiguration };
game.LocalizationConfiguration.LanguageID = { $ofs:12, $t:"System.String", $c:game.LocalizationConfiguration };
game.SoundConfiguration = function(arg0, arg1, arg2) {
  this._IsSoundOn = (arg0 ? true : false);
  this._IsMusicOn = (arg1 ? true : false);
  this._CurrentMusic = (arg2 === undefined ? '' : arg2);
};
game.SoundConfiguration.prototype = Object.create(null);
game.SoundConfiguration.prototype.constructor = game.SoundConfiguration;
Object.defineProperties(game.SoundConfiguration.prototype, {
  IsSoundOn: {
    get: function() { return this._IsSoundOn; },
    set: function(v) { this._IsSoundOn = (v ? true : false); },
  },
  IsMusicOn: {
    get: function() { return this._IsMusicOn; },
    set: function(v) { this._IsMusicOn = (v ? true : false); },
  },
  CurrentMusic: {
    get: function() { return this._CurrentMusic; },
    set: function(v) { this._CurrentMusic = (v === undefined ? '' : v); },
  },
});
game.SoundConfiguration._size = 12;
game.SoundConfiguration._fromPtr = function(ptr, v) {
  v = v || Object.create(game.SoundConfiguration.prototype);
  v._IsSoundOn = (HEAP8[ptr+0]?true:false);
  v._IsMusicOn = (HEAP8[ptr+1]?true:false);
  v._CurrentMusic = (Module._ut_nativestring_data(ptr+4) ? UTF8ToString(Module._ut_nativestring_data(ptr+4)) : "");
  return v;
};
game.SoundConfiguration._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.IsSoundOn)?1:0;
  HEAP8[ptr+1] = (v.IsMusicOn)?1:0;
  ut.newHeapNativeString(ptr+4, v.CurrentMusic);
};
game.SoundConfiguration._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.IsSoundOn)?1:0;
  HEAP8[ptr+1] = (v.IsMusicOn)?1:0;
  ut.toExistingScratchNativeString(ptr+4, v.CurrentMusic);
};
game.SoundConfiguration._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(12);
  if (v) game.SoundConfiguration._toTempHeapPtr(ptr, v);
  return ptr;
};
game.SoundConfiguration.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.SoundConfiguration.StorageView.prototype = Object.create(null);
game.SoundConfiguration.StorageView.prototype.constructor = game.SoundConfiguration.StorageView;
game.SoundConfiguration._view = game.SoundConfiguration.StorageView;
game.SoundConfiguration.StorageView._isSharedComp = game.SoundConfiguration._isSharedComp = false;
game.SoundConfiguration.StorageView._fromPtr = game.SoundConfiguration._fromPtr;
game.SoundConfiguration.StorageView._toPtr = game.SoundConfiguration._toPtr;
game.SoundConfiguration.StorageView._tempHeapPtr = game.SoundConfiguration._tempHeapPtr;
game.SoundConfiguration.StorageView._size = game.SoundConfiguration._size;
game.SoundConfiguration.StorageView.prototype.$advance = function() {
  this._ptr += 12;
};
Object.defineProperties(game.SoundConfiguration.StorageView.prototype, {
  IsSoundOn: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  IsMusicOn: {
    get: function() { return (HEAP8[this._ptr+1]?true:false); },
    set: function(v) { HEAP8[this._ptr+1] = (v)?1:0; },
  },
  CurrentMusic: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+4) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+4)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+4, v); },
  },
});
game.SoundConfiguration._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 4);
};
game.SoundConfiguration._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  for(var i = 0; i < 1; ++i) HEAPU8[dst+0+i] = HEAPU8[src+0+i];
  for(var i = 0; i < 1; ++i) HEAPU8[dst+1+i] = HEAPU8[src+1+i];
  Module._ut_nativestring_copy_construct(dst + 4, src + 4);
};
game.SoundConfiguration._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.SoundConfiguration', 12, [
    {name: 'IsSoundOn', offset: 0, type: ut.meta.getType('bool')},
    {name: 'IsMusicOn', offset: 1, type: ut.meta.getType('bool')},
    {name: 'CurrentMusic', offset: 4, type: ut.meta.getType('string')}
  ]);
})();
Object.defineProperties(game.SoundConfiguration, { cid: { configurable: true, get: function() { delete game.SoundConfiguration.cid; var offsetsPtr = 0, offsetsCount = 0; return game.SoundConfiguration.cid = Module._ut_component_register_cid_with_type(game.SoundConfiguration._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.SoundConfiguration._dtorFn), ut.CopyFn._cb.token_for(game.SoundConfiguration._copyFn)); } } });
Object.defineProperties(game.SoundConfiguration.StorageView, { cid: { configurable: true, get: function() { return game.SoundConfiguration.cid; } } });
game.SoundConfiguration.IsSoundOn = { $ofs:0, $t:"bool", $c:game.SoundConfiguration };
game.SoundConfiguration.IsMusicOn = { $ofs:1, $t:"bool", $c:game.SoundConfiguration };
game.SoundConfiguration.CurrentMusic = { $ofs:4, $t:"System.String", $c:game.SoundConfiguration };
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
game.AnimateCutsceneSystemJS = ut.System.define({
  name: "game.AnimateCutsceneSystemJS"
 ,updatesBefore: ["UTiny.Shared.RenderingFence"]
 ,updatesAfter: ["UTiny.Shared.UserCodeEnd"]
});
game.PerformDinosaurAttackSystemJS = ut.System.define({
  name: "game.PerformDinosaurAttackSystemJS"
});
game.CheckMatchSystemJS = ut.System.define({
  name: "game.CheckMatchSystemJS"
});
game.RestoreGemSwapSystemJS = ut.System.define({
  name: "game.RestoreGemSwapSystemJS"
});
game.ActivateGemPowerUpSystemJS = ut.System.define({
  name: "game.ActivateGemPowerUpSystemJS"
 ,updatesBefore: ["game.RestoreGemSwapSystemJS"]
 ,updatesAfter: ["game.CheckMatchSystemJS"]
});
game.UpdateScoreSystemJS = ut.System.define({
  name: "game.UpdateScoreSystemJS"
 ,updatesAfter: ["game.ActivateGemPowerUpSystemJS"]
});
game.CollectEggSystemJS = ut.System.define({
  name: "game.CollectEggSystemJS"
 ,updatesAfter: ["game.ActivateGemPowerUpSystemJS"]
});
game.DeleteMatchedGemSystemJS = ut.System.define({
  name: "game.DeleteMatchedGemSystemJS"
 ,updatesBefore: ["game.RestoreGemSwapSystemJS"]
 ,updatesAfter: ["game.CollectEggSystemJS"]
});
game.SpawnComboPowerUpSystemJS = ut.System.define({
  name: "game.SpawnComboPowerUpSystemJS"
 ,updatesBefore: ["game.DeleteMatchedGemSystemJS","game.RestoreGemSwapSystemJS"]
 ,updatesAfter: ["game.UpdateScoreSystemJS"]
});
game.TriggerDinosaurAttackSystemJS = ut.System.define({
  name: "game.TriggerDinosaurAttackSystemJS"
 ,updatesBefore: ["game.SpawnComboPowerUpSystemJS"]
 ,updatesAfter: ["game.ActivateGemPowerUpSystemJS"]
});
game.MoveHelicopterSystemJS = ut.System.define({
  name: "game.MoveHelicopterSystemJS"
});
game.MovePeopleSystemJS = ut.System.define({
  name: "game.MovePeopleSystemJS"
});
game.MoveScrollingObjectSystemJS = ut.System.define({
  name: "game.MoveScrollingObjectSystemJS"
});
game.SpawnHelicopterSystemJS = ut.System.define({
  name: "game.SpawnHelicopterSystemJS"
});
game.SpawnKidOnBikeSystemJS = ut.System.define({
  name: "game.SpawnKidOnBikeSystemJS"
});
game.SpawnPeopleSystemJS = ut.System.define({
  name: "game.SpawnPeopleSystemJS"
});
game.SpawnScrollingObjectSystemJS = ut.System.define({
  name: "game.SpawnScrollingObjectSystemJS"
});
game.UpdateDestructableStateSystemJS = ut.System.define({
  name: "game.UpdateDestructableStateSystemJS"
});
game.UpdateKidOnBikeSystemJS = ut.System.define({
  name: "game.UpdateKidOnBikeSystemJS"
});
game.CheckGameOverSystemJS = ut.System.define({
  name: "game.CheckGameOverSystemJS"
});
game.UpdateGameStateSystemJS = ut.System.define({
  name: "game.UpdateGameStateSystemJS"
});
game.UpdateSurvivalModeSystemJS = ut.System.define({
  name: "game.UpdateSurvivalModeSystemJS"
});
game.CreateNewGemBoardSystemJS = ut.System.define({
  name: "game.CreateNewGemBoardSystemJS"
});
game.ReplenishGemBoardSystemJS = ut.System.define({
  name: "game.ReplenishGemBoardSystemJS"
 ,updatesAfter: ["game.DeleteMatchedGemSystemJS","game.CreateNewGemBoardSystemJS"]
});
game.FindPossibleMatchSystemJS = ut.System.define({
  name: "game.FindPossibleMatchSystemJS"
 ,updatesAfter: ["game.ReplenishGemBoardSystemJS"]
});
game.GemFallTweenEndSystemJS = ut.System.define({
  name: "game.GemFallTweenEndSystemJS"
 ,updatesBefore: ["game.CheckMatchSystemJS"]
});
game.GemSwapTweenEndSystemJS = ut.System.define({
  name: "game.GemSwapTweenEndSystemJS"
 ,updatesBefore: ["game.CheckMatchSystemJS"]
});
game.PositionGemSystemJS = ut.System.define({
  name: "game.PositionGemSystemJS"
 ,updatesBefore: ["UTiny.Shared.RenderingFence"]
 ,updatesAfter: ["UTiny.Shared.UserCodeEnd"]
});
game.SpawnGemExplosionSystemJS = ut.System.define({
  name: "game.SpawnGemExplosionSystemJS"
 ,updatesBefore: ["game.DeleteMatchedGemSystemJS"]
 ,updatesAfter: ["game.UpdateScoreSystemJS"]
});
game.SwapGemSystemJS = ut.System.define({
  name: "game.SwapGemSystemJS"
 ,updatesBefore: ["game.CheckMatchSystemJS"]
});
game.UpdateDestroyLineAnimationJS = ut.System.define({
  name: "game.UpdateDestroyLineAnimationJS"
 ,updatesBefore: ["UTiny.Shared.RenderingFence"]
 ,updatesAfter: ["UTiny.Shared.UserCodeEnd"]
});
game.UpdateGemVisualSystemJS = ut.System.define({
  name: "game.UpdateGemVisualSystemJS"
 ,updatesBefore: ["UTiny.Shared.RenderingFence"]
 ,updatesAfter: ["UTiny.Shared.UserCodeEnd"]
});
game.UpdateScoreGainLabelJS = ut.System.define({
  name: "game.UpdateScoreGainLabelJS"
});
game.ChangeSkinSystemJS = ut.System.define({
  name: "game.ChangeSkinSystemJS"
});
game.UpdateEggTutorialSystemJS = ut.System.define({
  name: "game.UpdateEggTutorialSystemJS"
});
game.UpdateMatchTutorialSystemJS = ut.System.define({
  name: "game.UpdateMatchTutorialSystemJS"
});
game.UpdateSurvivalTutorialSystemJS = ut.System.define({
  name: "game.UpdateSurvivalTutorialSystemJS"
});
game.UpdateTutorialHighlightSystemJS = ut.System.define({
  name: "game.UpdateTutorialHighlightSystemJS"
});
game.UpdateTutorialPointerSystemJS = ut.System.define({
  name: "game.UpdateTutorialPointerSystemJS"
});
game.AnimatePopupSystemJS = ut.System.define({
  name: "game.AnimatePopupSystemJS"
 ,updatesBefore: ["UTiny.Shared.RenderingFence"]
 ,updatesAfter: ["UTiny.Shared.UserCodeEnd"]
});
game.DisplayScoreSystemJS = ut.System.define({
  name: "game.DisplayScoreSystemJS"
});
game.UpdateCurrentWorldMapItemSystemJS = ut.System.define({
  name: "game.UpdateCurrentWorldMapItemSystemJS"
});
game.UpdateScreenTransitionJS = ut.System.define({
  name: "game.UpdateScreenTransitionJS"
 ,updatesBefore: ["UTiny.Shared.RenderingFence"]
 ,updatesAfter: ["UTiny.Shared.UserCodeEnd"]
});
game.AnimateCollectedCurrencySystemJS = ut.System.define({
  name: "game.AnimateCollectedCurrencySystemJS"
});
game.AnimateNearDeathOpacitySystemJS = ut.System.define({
  name: "game.AnimateNearDeathOpacitySystemJS"
});
game.AnimateShakeSystemJS = ut.System.define({
  name: "game.AnimateShakeSystemJS"
});
game.AnimateTilingBackgroundSystemJS = ut.System.define({
  name: "game.AnimateTilingBackgroundSystemJS"
});
game.DestroyAfterDelaySystemJS = ut.System.define({
  name: "game.DestroyAfterDelaySystemJS"
});
game.FitScreenLayoutSystemJS = ut.System.define({
  name: "game.FitScreenLayoutSystemJS"
});
game.RenderModeSelectorJS = ut.System.define({
  name: "game.RenderModeSelectorJS"
});
game.UpdateCustomButtonSystemJS = ut.System.define({
  name: "game.UpdateCustomButtonSystemJS"
});
game.UpdateLocalizedTextJS = ut.System.define({
  name: "game.UpdateLocalizedTextJS"
});



