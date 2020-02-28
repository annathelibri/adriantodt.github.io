(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'adriantodt.github.io'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'adriantodt.github.io'.");
    }
    root['adriantodt.github.io'] = factory(typeof this['adriantodt.github.io'] === 'undefined' ? {} : this['adriantodt.github.io'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var numberToInt = Kotlin.numberToInt;
  var hashCode = Kotlin.hashCode;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toString = Kotlin.kotlin.text.toString_dqglrj$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Math_0 = Math;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var Random = Kotlin.kotlin.random.Random;
  var Comparable = Kotlin.kotlin.Comparable;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var Unit = Kotlin.kotlin.Unit;
  var take = Kotlin.kotlin.collections.take_ba2ldo$;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var toInt_0 = Kotlin.kotlin.text.toInt_pdl1vz$;
  var unboxChar = Kotlin.unboxChar;
  var chunked = Kotlin.kotlin.collections.chunked_ba2ldo$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var shuffled = Kotlin.kotlin.collections.shuffled_7wnvza$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var throwCCE = Kotlin.throwCCE;
  var Pair_init = Kotlin.kotlin.Pair;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var getCallableRef = Kotlin.getCallableRef;
  var generateSequence = Kotlin.kotlin.sequences.generateSequence_gexuht$;
  var take_0 = Kotlin.kotlin.sequences.take_wuwhe2$;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
  PixelatedLogo.prototype = Object.create(ShootingStarsJS.prototype);
  PixelatedLogo.prototype.constructor = PixelatedLogo;
  function Color(rgb) {
    Color$Companion_getInstance();
    this.rgb = rgb;
    this.red = this.rgb >> 16 & 255;
    this.green = this.rgb >> 8 & 255;
    this.blue = this.rgb >> 0 & 255;
    this.alpha = this.rgb >> 24 & 255;
    this.hex = '#' + padStart(toString(this.red, 16), 2, 48) + padStart(toString(this.green, 16), 2, 48) + padStart(toString(this.blue, 16), 2, 48);
  }
  Color.prototype.brighter = function () {
    var r = this.red;
    var g = this.green;
    var b = this.blue;
    var alpha = this.alpha;
    var i = 3;
    if (r === 0 && g === 0 && b === 0) {
      return Color$Companion_getInstance().of_tjonv8$(i, i, i, alpha);
    }
    if (1 <= r && r < i)
      r = i;
    if (1 <= g && g < i)
      g = i;
    if (1 <= b && b < i)
      b = i;
    var tmp$ = Color$Companion_getInstance();
    var a = numberToInt(r / Color$Companion_getInstance().FACTOR_0);
    var tmp$_0 = Math_0.min(a, 255);
    var a_0 = numberToInt(g / Color$Companion_getInstance().FACTOR_0);
    var tmp$_1 = Math_0.min(a_0, 255);
    var a_1 = numberToInt(b / Color$Companion_getInstance().FACTOR_0);
    return tmp$.of_tjonv8$(tmp$_0, tmp$_1, Math_0.min(a_1, 255), alpha);
  };
  Color.prototype.darker = function () {
    var tmp$ = Color$Companion_getInstance();
    var a = numberToInt(this.red * Color$Companion_getInstance().FACTOR_0);
    var tmp$_0 = Math_0.max(a, 0);
    var a_0 = numberToInt(this.green * Color$Companion_getInstance().FACTOR_0);
    var tmp$_1 = Math_0.max(a_0, 0);
    var a_1 = numberToInt(this.blue * Color$Companion_getInstance().FACTOR_0);
    return tmp$.of_tjonv8$(tmp$_0, tmp$_1, Math_0.max(a_1, 0), this.alpha);
  };
  Color.prototype.toString = function () {
    return this.hex;
  };
  Color.prototype.equals = function (other) {
    if (!Kotlin.isType(other, Color))
      return false;
    return this.rgb === other.rgb;
  };
  Color.prototype.hashCode = function () {
    return hashCode(this.rgb);
  };
  function Color$Companion() {
    Color$Companion_instance = this;
    this.values_0 = LinkedHashMap_init();
    this.white = Color$Companion_getInstance().of_tjonv8$(255, 255, 255);
    this.lightGray = Color$Companion_getInstance().of_tjonv8$(192, 192, 192);
    this.gray = Color$Companion_getInstance().of_tjonv8$(128, 128, 128);
    this.darkGray = Color$Companion_getInstance().of_tjonv8$(64, 64, 64);
    this.black = Color$Companion_getInstance().of_tjonv8$(0, 0, 0);
    this.red = Color$Companion_getInstance().of_tjonv8$(255, 0, 0);
    this.pink = Color$Companion_getInstance().of_tjonv8$(255, 175, 175);
    this.orange = Color$Companion_getInstance().of_tjonv8$(255, 200, 0);
    this.yellow = Color$Companion_getInstance().of_tjonv8$(255, 255, 0);
    this.green = Color$Companion_getInstance().of_tjonv8$(0, 255, 0);
    this.magenta = Color$Companion_getInstance().of_tjonv8$(255, 0, 255);
    this.cyan = Color$Companion_getInstance().of_tjonv8$(0, 255, 255);
    this.blue = Color$Companion_getInstance().of_tjonv8$(0, 0, 255);
    this.FACTOR_0 = 0.7;
  }
  Color$Companion.prototype.of_tjonv8$ = function (r, g, b, a) {
    if (a === void 0)
      a = 255;
    var rgb = (a & 255) << 24 | (r & 255) << 16 | (g & 255) << 8 | (b & 255) << 0;
    var $receiver = this.values_0;
    var tmp$;
    var value = $receiver.get_11rb$(rgb);
    if (value == null) {
      this.testColorValueRange_0(r, g, b, a);
      var answer = new Color(rgb);
      $receiver.put_xwzc9p$(rgb, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  Color$Companion.prototype.of_za3lpa$ = function (rgb) {
    var $receiver = this.values_0;
    var tmp$;
    var value = $receiver.get_11rb$(rgb);
    if (value == null) {
      var answer = new Color(rgb);
      $receiver.put_xwzc9p$(rgb, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  Color$Companion.prototype.testColorValueRange_0 = function (r, g, b, a) {
    var rangeError = false;
    var badComponentString = {v: ''};
    if (a < 0 || a > 255) {
      rangeError = true;
      badComponentString.v = badComponentString.v + ' Alpha';
    }
    if (r < 0 || r > 255) {
      rangeError = true;
      badComponentString.v = badComponentString.v + ' Red';
    }
    if (g < 0 || g > 255) {
      rangeError = true;
      badComponentString.v = badComponentString.v + ' Green';
    }
    if (b < 0 || b > 255) {
      rangeError = true;
      badComponentString.v = badComponentString.v + ' Blue';
    }
    if (!(rangeError !== true)) {
      var message = 'Color parameter outside of expected range:' + badComponentString.v;
      throw IllegalArgumentException_init(message.toString());
    }
  };
  Color$Companion.prototype.decode_61zpoe$ = function (s) {
    var i = toInt(s, 16);
    return Color$Companion_getInstance().of_tjonv8$(i >> 16 & 255, i >> 8 & 255, i & 255);
  };
  Color$Companion.prototype.getHSBColor_y2kzbl$ = function (hue, saturation, brightness) {
    var r = 0;
    var g = 0;
    var b = 0;
    if (saturation === 0.0) {
      b = numberToInt(brightness * 255.0 + 0.5);
      g = b;
      r = g;
    }
     else {
      var h = (hue - Math_0.floor(hue)) * 6.0;
      var f = h - Math_0.floor(h);
      var p = brightness * (1.0 - saturation);
      var q = brightness * (1.0 - saturation * f);
      var t = brightness * (1.0 - saturation * (1.0 - f));
      switch (numberToInt(h)) {
        case 0:
          r = numberToInt(brightness * 255.0 + 0.5);
          g = numberToInt(t * 255.0 + 0.5);
          b = numberToInt(p * 255.0 + 0.5);
          break;
        case 1:
          r = numberToInt(q * 255.0 + 0.5);
          g = numberToInt(brightness * 255.0 + 0.5);
          b = numberToInt(p * 255.0 + 0.5);
          break;
        case 2:
          r = numberToInt(p * 255.0 + 0.5);
          g = numberToInt(brightness * 255.0 + 0.5);
          b = numberToInt(t * 255.0 + 0.5);
          break;
        case 3:
          r = numberToInt(p * 255.0 + 0.5);
          g = numberToInt(q * 255.0 + 0.5);
          b = numberToInt(brightness * 255.0 + 0.5);
          break;
        case 4:
          r = numberToInt(t * 255.0 + 0.5);
          g = numberToInt(p * 255.0 + 0.5);
          b = numberToInt(brightness * 255.0 + 0.5);
          break;
        case 5:
          r = numberToInt(brightness * 255.0 + 0.5);
          g = numberToInt(p * 255.0 + 0.5);
          b = numberToInt(q * 255.0 + 0.5);
          break;
      }
    }
    return Color$Companion_getInstance().of_za3lpa$(-16777216 | r << 16 | g << 8 | b << 0);
  };
  Color$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Color$Companion_instance = null;
  function Color$Companion_getInstance() {
    if (Color$Companion_instance === null) {
      new Color$Companion();
    }
    return Color$Companion_instance;
  }
  Color.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Color',
    interfaces: []
  };
  function Dimension(height, width) {
    this.height = height;
    this.width = width;
  }
  Dimension.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dimension',
    interfaces: []
  };
  Dimension.prototype.component1 = function () {
    return this.height;
  };
  Dimension.prototype.component2 = function () {
    return this.width;
  };
  Dimension.prototype.copy_vux9f0$ = function (height, width) {
    return new Dimension(height === void 0 ? this.height : height, width === void 0 ? this.width : width);
  };
  Dimension.prototype.toString = function () {
    return 'Dimension(height=' + Kotlin.toString(this.height) + (', width=' + Kotlin.toString(this.width)) + ')';
  };
  Dimension.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    return result;
  };
  Dimension.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.height, other.height) && Kotlin.equals(this.width, other.width)))));
  };
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var thenBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (this$thenBy, closure$selector) {
      return function (a, b) {
        var previousCompare = this$thenBy.compare(a, b);
        var tmp$;
        if (previousCompare !== 0)
          tmp$ = previousCompare;
        else {
          var selector = closure$selector;
          tmp$ = compareValues(selector(a), selector(b));
        }
        return tmp$;
      };
    };
  });
  function FallingPixel(x, y, color) {
    FallingPixel$Companion_getInstance();
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = Random.Default.nextInt_vux9f0$(5, 10);
    this.lifetime = -Random.Default.nextInt_vux9f0$(40, 60) | 0;
  }
  FallingPixel.prototype.compareTo_11rb$ = function (other) {
    return FallingPixel$Companion_getInstance().naturalOrder.compare(this, other);
  };
  function FallingPixel$Companion() {
    FallingPixel$Companion_instance = this;
    this.naturalOrder = new Comparator$ObjectLiteral_0(thenBy$lambda(new Comparator$ObjectLiteral(compareBy$lambda(getPropertyCallableRef('y', 1, function ($receiver) {
      return $receiver.y;
    }))), getPropertyCallableRef('x', 1, function ($receiver) {
      return $receiver.x;
    })));
  }
  FallingPixel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FallingPixel$Companion_instance = null;
  function FallingPixel$Companion_getInstance() {
    if (FallingPixel$Companion_instance === null) {
      new FallingPixel$Companion();
    }
    return FallingPixel$Companion_instance;
  }
  FallingPixel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FallingPixel',
    interfaces: [Comparable]
  };
  FallingPixel.prototype.component1 = function () {
    return this.x;
  };
  FallingPixel.prototype.component2 = function () {
    return this.y;
  };
  FallingPixel.prototype.component3 = function () {
    return this.color;
  };
  FallingPixel.prototype.copy_if1tab$ = function (x, y, color) {
    return new FallingPixel(x === void 0 ? this.x : x, y === void 0 ? this.y : y, color === void 0 ? this.color : color);
  };
  FallingPixel.prototype.toString = function () {
    return 'FallingPixel(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', color=' + Kotlin.toString(this.color)) + ')';
  };
  FallingPixel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.color) | 0;
    return result;
  };
  FallingPixel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.color, other.color)))));
  };
  function PixelatedLogo() {
    ShootingStarsJS.call(this);
    this.pixelsRead_0 = ArrayList_init();
    this.pixelsFalling_0 = ArrayList_init();
    var tmp$, tmp$_0;
    this.renderedCanvas_0 = Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    this.renderedCtx_0 = Kotlin.isType(tmp$_0 = this.renderedCanvas_0.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    this.logoSize_0 = null;
  }
  function PixelatedLogo$setup$lambda$lambda(this$, this$PixelatedLogo) {
    return function (it) {
      if (this$.readyState === 4) {
        if (this$.status === 200) {
          this$PixelatedLogo.parseResponse_61zpoe$(this$.responseText);
        }
         else {
          console.log('HTTP Error', this$.status, this$.statusText);
        }
      }
      return Unit;
    };
  }
  PixelatedLogo.prototype.setup_y0idiq$ = function (canvas, logoLocation) {
    ShootingStarsJS.prototype.setup_ap7jt0$.call(this, canvas);
    var $receiver = new XMLHttpRequest();
    $receiver.open('GET', logoLocation);
    $receiver.onreadystatechange = PixelatedLogo$setup$lambda$lambda($receiver, this);
    $receiver.send();
  };
  PixelatedLogo.prototype.loop_ap7jt0$ = function (canvas) {
    var tmp$;
    ShootingStarsJS.prototype.loop_ap7jt0$.call(this, canvas);
    if (!this.pixelsRead_0.isEmpty()) {
      var pixelsTaken = take(this.pixelsRead_0, Random.Default.nextInt_vux9f0$(10, 15));
      this.pixelsRead_0.removeAll_brywnq$(pixelsTaken);
      this.pixelsFalling_0.addAll_brywnq$(pixelsTaken);
    }
    if (!this.pixelsFalling_0.isEmpty()) {
      var $receiver = this.pixelsFalling_0;
      var tmp$_0;
      var first = ArrayList_init();
      var second = ArrayList_init();
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.lifetime >= 0) {
          first.add_11rb$(element);
        }
         else {
          second.add_11rb$(element);
        }
      }
      var tmp$_1 = new Pair_init(first, second);
      var notFalling = tmp$_1.component1()
      , stillFalling = tmp$_1.component2();
      this.pixelsFalling_0.retainAll_brywnq$(stillFalling);
      tmp$ = notFalling.iterator();
      while (tmp$.hasNext()) {
        var pixel = tmp$.next();
        this.renderedCtx_0.fillStyle = pixel.color.toString();
        this.renderedCtx_0.fillRect(pixel.x, pixel.y, 1.0, 1.0);
      }
    }
  };
  PixelatedLogo.prototype.draw_f69bme$ = function (ctx) {
    var tmp$;
    ShootingStarsJS.prototype.draw_f69bme$.call(this, ctx);
    ctx.imageSmoothingEnabled = false;
    if ((tmp$ = this.logoSize_0) != null) {
      this.renderLogo_dtq5pd$(ctx, tmp$);
    }
  };
  PixelatedLogo.prototype.renderLogo_dtq5pd$ = function ($receiver, d) {
    var tmp$, tmp$_0;
    var h = $receiver.canvas.height;
    var w = $receiver.canvas.width;
    var a = h * 0.5 / d.height;
    var b = w * 0.5 / d.width;
    var x = Math_0.min(a, b);
    var scale = Math_0.ceil(x);
    var baseX = (w - d.width * scale) / 2;
    var baseY = (h - d.height * scale) / 2;
    tmp$ = this.pixelsFalling_0.iterator();
    while (tmp$.hasNext()) {
      var p = tmp$.next();
      var color = p.color;
      var n = (tmp$_0 = p.lifetime, p.lifetime = tmp$_0 + 1 | 0, tmp$_0);
      var speed = p.speed;
      var goalX = baseX + p.x * scale;
      var goalY = baseY + p.y * scale;
      var curX = roundToInt(goalX + Kotlin.imul(n, speed));
      var curY = roundToInt(goalY + Kotlin.imul(n, speed));
      this.renderShootingStar_pwfuci$($receiver, curX, curY, color, speed, numberToInt(scale));
    }
    $receiver.drawImage(this.renderedCanvas_0, baseX, baseY, this.renderedCanvas_0.width * scale, this.renderedCanvas_0.height * scale);
  };
  PixelatedLogo.prototype.parseResponse_61zpoe$ = function (responseText) {
    var tmp$ = split(responseText, Kotlin.charArrayOf(44));
    var widthText = tmp$.get_za3lpa$(0);
    var heightText = tmp$.get_za3lpa$(1);
    var b64map = tmp$.get_za3lpa$(2);
    var width = toInt_0(widthText);
    var height = toInt_0(heightText);
    this.renderedCanvas_0.width = width;
    this.renderedCanvas_0.height = height;
    this.logoSize_0 = new Dimension(height, width);
    var $receiver = window.atob(b64map);
    var destination = ArrayList_init_0($receiver.length);
    var tmp$_0;
    tmp$_0 = iterator($receiver);
    while (tmp$_0.hasNext()) {
      var item = unboxChar(tmp$_0.next());
      destination.add_11rb$(padStart(toString(unboxChar(toBoxedChar(item)) | 0, 16), 2, 48));
    }
    var $receiver_0 = chunked(destination, 3);
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1, tmp$_0_0;
    var index = 0;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      var i = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
      tmp$_2.call(destination_0, new FallingPixel(i % width, i / width | 0, Color$Companion_getInstance().decode_61zpoe$(joinToString(item_0, ''))));
    }
    var destination_1 = ArrayList_init();
    var tmp$_3;
    tmp$_3 = destination_0.iterator();
    while (tmp$_3.hasNext()) {
      var element = tmp$_3.next();
      var tmp$_4;
      if (!((tmp$_4 = element.color) != null ? tmp$_4.equals(Color$Companion_getInstance().black) : null))
        destination_1.add_11rb$(element);
    }
    var destination_2 = LinkedHashMap_init();
    var tmp$_5;
    tmp$_5 = destination_1.iterator();
    while (tmp$_5.hasNext()) {
      var element_0 = tmp$_5.next();
      var key = element_0.y / 1.7;
      var tmp$_0_1;
      var value = destination_2.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination_2.put_xwzc9p$(key, answer);
        tmp$_0_1 = answer;
      }
       else {
        tmp$_0_1 = value;
      }
      var list = tmp$_0_1;
      list.add_11rb$(element_0);
    }
    var destination_3 = ArrayList_init();
    var tmp$_6;
    tmp$_6 = destination_2.entries.iterator();
    while (tmp$_6.hasNext()) {
      var element_1 = tmp$_6.next();
      var list_0 = shuffled(element_1.value);
      addAll(destination_3, list_0);
    }
    var parsed = reversed(destination_3);
    addAll(this.pixelsRead_0, parsed);
  };
  PixelatedLogo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PixelatedLogo',
    interfaces: [ShootingStarsJS]
  };
  function ShootingStar(color) {
    this.color = color;
    this.lifetime = 0;
  }
  ShootingStar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShootingStar',
    interfaces: []
  };
  ShootingStar.prototype.component1 = function () {
    return this.color;
  };
  ShootingStar.prototype.copy_12ve4j$ = function (color) {
    return new ShootingStar(color === void 0 ? this.color : color);
  };
  ShootingStar.prototype.toString = function () {
    return 'ShootingStar(color=' + Kotlin.toString(this.color) + ')';
  };
  ShootingStar.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.color) | 0;
    return result;
  };
  ShootingStar.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.color, other.color))));
  };
  function ShootingStarsJS() {
    this.stars_n4flwg$_0 = ArrayList_init();
  }
  function ShootingStarsJS$setup$lambda(closure$canvas, this$ShootingStarsJS, closure$bufferCanvas, closure$bufferCtx, closure$ctx) {
    return function () {
      this$ShootingStarsJS.loop_ap7jt0$(closure$canvas);
      closure$canvas.width = closure$canvas.clientWidth;
      closure$canvas.height = closure$canvas.clientHeight;
      closure$bufferCanvas.width = (closure$canvas.width / 10 | 0) * 10 | 0;
      closure$bufferCanvas.height = (closure$canvas.height / 10 | 0) * 10 | 0;
      closure$bufferCtx.clearRect(0.0, 0.0, closure$bufferCanvas.width, closure$bufferCanvas.height);
      this$ShootingStarsJS.draw_f69bme$(closure$bufferCtx);
      closure$ctx.clearRect(0.0, 0.0, closure$canvas.width, closure$canvas.height);
      closure$ctx.drawImage(closure$bufferCanvas, (closure$canvas.width - closure$bufferCanvas.width | 0) / 2.0, (closure$canvas.height - closure$bufferCanvas.height | 0) / 2.0);
      return Unit;
    };
  }
  ShootingStarsJS.prototype.setup_ap7jt0$ = function (canvas) {
    var tmp$, tmp$_0, tmp$_1;
    var ctx = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    var bufferCanvas = Kotlin.isType(tmp$_0 = document.createElement('canvas'), HTMLCanvasElement) ? tmp$_0 : throwCCE();
    var bufferCtx = Kotlin.isType(tmp$_1 = bufferCanvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_1 : throwCCE();
    window.setInterval(ShootingStarsJS$setup$lambda(canvas, this, bufferCanvas, bufferCtx, ctx), 25);
  };
  ShootingStarsJS.prototype.loop_ap7jt0$ = function (canvas) {
    this.stars_n4flwg$_0.add_11rb$(new ShootingStar(Color$Companion_getInstance().getHSBColor_y2kzbl$(Random.Default.nextFloat(), Random.Default.nextFloat(), Random.Default.nextFloat())));
  };
  ShootingStarsJS.prototype.draw_f69bme$ = function (ctx) {
    this.renderStars_qtrdl1$(ctx);
  };
  ShootingStarsJS.prototype.renderStars_qtrdl1$ = function ($receiver) {
    var h = $receiver.canvas.height;
    var w = $receiver.canvas.width;
    var hw = h + w | 0;
    var ratio = hw / (255 * 3.0);
    var tmp$;
    tmp$ = this.stars_n4flwg$_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      var color = element.color;
      var n = (tmp$_0 = element.lifetime, element.lifetime = tmp$_0 + 1 | 0, tmp$_0);
      var entropy = roundToInt((color.red + color.green + color.blue | 0) * ratio);
      var spawnX;
      var spawnY;
      if (entropy < h) {
        spawnX = 0;
        spawnY = h - entropy | 0;
      }
       else {
        spawnX = entropy - h | 0;
        spawnY = 0;
      }
      var size = ((color.blue + color.green | 0) / 128 | 0) + 1 | 0;
      var speed = (((color.red * 4 | 0) + (color.green * 2 | 0) + color.blue | 0) / 256 | 0) + 1 | 0;
      var curX = spawnX + Kotlin.imul(n, speed) | 0;
      var curY = spawnY + Kotlin.imul(n, speed) | 0;
      if (curX > w || curY > h) {
        this.stars_n4flwg$_0.remove_11rb$(element);
      }
       else {
        this.renderShootingStar_pwfuci$($receiver, curX, curY, color, speed, size);
      }
    }
  };
  ShootingStarsJS.prototype.renderShootingStar_pwfuci$ = function ($receiver, curX, curY, color, speed, size) {
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = take_0(generateSequence(color, getCallableRef('darker', function ($receiver) {
      return $receiver.darker();
    })), size * 2 | 0).iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var i = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      $receiver.fillStyle = item.toString();
      $receiver.fillRect(curX - Kotlin.imul(i, speed) | 0, curY - Kotlin.imul(i, speed) | 0, size - (i / 2 | 0) | 0, size - (i / 2 | 0) | 0);
    }
  };
  ShootingStarsJS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShootingStarsJS',
    interfaces: []
  };
  function main$lambda(it) {
    onLoad();
    return Unit;
  }
  function main() {
    window.addEventListener('load', EventListener(main$lambda));
  }
  function onLoad() {
    setupLogo();
  }
  function setupLogo() {
    var tmp$;
    (new PixelatedLogo()).setup_y0idiq$(Kotlin.isType(tmp$ = document.getElementById('logo'), HTMLCanvasElement) ? tmp$ : throwCCE(), 'img/adriantodt.png.txt');
  }
  Object.defineProperty(Color, 'Companion', {
    get: Color$Companion_getInstance
  });
  _.Color = Color;
  _.Dimension = Dimension;
  Object.defineProperty(FallingPixel, 'Companion', {
    get: FallingPixel$Companion_getInstance
  });
  _.FallingPixel = FallingPixel;
  _.PixelatedLogo = PixelatedLogo;
  _.ShootingStar = ShootingStar;
  _.ShootingStarsJS = ShootingStarsJS;
  _.main = main;
  _.onLoad = onLoad;
  _.setupLogo = setupLogo;
  main();
  Kotlin.defineModule('adriantodt.github.io', _);
  return _;
}));

//# sourceMappingURL=adriantodt.github.io.js.map
