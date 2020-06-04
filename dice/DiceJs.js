(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'DiceJs'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'DiceJs'.");
    }root.DiceJs = factory(typeof DiceJs === 'undefined' ? {} : DiceJs, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var unboxChar = Kotlin.unboxChar;
  var matches = Kotlin.kotlin.text.matches_rjktp$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toString = Kotlin.toString;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var sum = Kotlin.kotlin.collections.sum_plj8ka$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var numberToDouble = Kotlin.numberToDouble;
  var numberToLong = Kotlin.numberToLong;
  var numberToInt = Kotlin.numberToInt;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Math_0 = Math;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var getCallableRef = Kotlin.getCallableRef;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var L0 = Kotlin.Long.ZERO;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var toBoxedChar = Kotlin.toBoxedChar;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_6ic1pp$;
  var toIntOrNull_0 = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var toMap = Kotlin.kotlin.collections.toMap_abgq59$;
  var Map = Kotlin.kotlin.collections.Map;
  var throwCCE = Kotlin.throwCCE;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toChar = Kotlin.toChar;
  var generateSequence = Kotlin.kotlin.sequences.generateSequence_9ce4rd$;
  var take = Kotlin.kotlin.sequences.take_wuwhe2$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var toCharArray = Kotlin.kotlin.collections.toCharArray_rr68x$;
  var String_0 = Kotlin.kotlin.text.String_4hbowm$;
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var first = Kotlin.kotlin.text.first_gw00vp$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var equals = Kotlin.equals;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
  var math = Kotlin.kotlin.math;
  var sequenceOf = Kotlin.kotlin.sequences.sequenceOf_i5x0yv$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var average = Kotlin.kotlin.sequences.average_1bslqu$;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var Random = Kotlin.kotlin.random.Random;
  var coerceIn = Kotlin.kotlin.ranges.coerceIn_e4yvb3$;
  var appendElement = Kotlin.kotlin.dom.appendElement_ldvnw0$;
  var Exception = Kotlin.kotlin.Exception;
  var random = Kotlin.kotlin.collections.random_lj338n$;
  Expr$Dice.prototype = Object.create(Expr.prototype);
  Expr$Dice.prototype.constructor = Expr$Dice;
  Expr$SolvedDice.prototype = Object.create(Expr.prototype);
  Expr$SolvedDice.prototype.constructor = Expr$SolvedDice;
  Expr$Integer.prototype = Object.create(Expr.prototype);
  Expr$Integer.prototype.constructor = Expr$Integer;
  Expr$Decimal.prototype = Object.create(Expr.prototype);
  Expr$Decimal.prototype.constructor = Expr$Decimal;
  Expr$BinaryOp$Type.prototype = Object.create(Enum.prototype);
  Expr$BinaryOp$Type.prototype.constructor = Expr$BinaryOp$Type;
  Expr$BinaryOp.prototype = Object.create(Expr.prototype);
  Expr$BinaryOp.prototype.constructor = Expr$BinaryOp;
  Expr$UnaryOp$Type.prototype = Object.create(Enum.prototype);
  Expr$UnaryOp$Type.prototype.constructor = Expr$UnaryOp$Type;
  Expr$UnaryOp.prototype = Object.create(Expr.prototype);
  Expr$UnaryOp.prototype.constructor = Expr$UnaryOp;
  Expr$Identifier.prototype = Object.create(Expr.prototype);
  Expr$Identifier.prototype.constructor = Expr$Identifier;
  Expr$Invocation.prototype = Object.create(Expr.prototype);
  Expr$Invocation.prototype.constructor = Expr$Invocation;
  TokenType.prototype = Object.create(Enum.prototype);
  TokenType.prototype.constructor = TokenType;
  SyntaxException.prototype = Object.create(RuntimeException.prototype);
  SyntaxException.prototype.constructor = SyntaxException;
  LexicalNumber$Invalid.prototype = Object.create(LexicalNumber.prototype);
  LexicalNumber$Invalid.prototype.constructor = LexicalNumber$Invalid;
  LexicalNumber$Decimal.prototype = Object.create(LexicalNumber.prototype);
  LexicalNumber$Decimal.prototype.constructor = LexicalNumber$Decimal;
  LexicalNumber$Integer.prototype = Object.create(LexicalNumber.prototype);
  LexicalNumber$Integer.prototype.constructor = LexicalNumber$Integer;
  function lexer$lambda$lambda($receiver, it) {
    $receiver.process_11rb$(makeToken($receiver, TokenType$LEFT_PAREN_getInstance()));
    return Unit;
  }
  function lexer$lambda$lambda_0($receiver, it) {
    $receiver.process_11rb$(makeToken($receiver, TokenType$RIGHT_PAREN_getInstance()));
    return Unit;
  }
  function lexer$lambda$lambda_1($receiver, it) {
    $receiver.process_11rb$(makeToken($receiver, TokenType$DOT_getInstance()));
    return Unit;
  }
  function lexer$lambda$lambda_2($receiver, it) {
    $receiver.process_11rb$(makeToken($receiver, TokenType$COMMA_getInstance()));
    return Unit;
  }
  function lexer$lambda$lambda_3($receiver, it) {
    $receiver.process_11rb$(makeToken($receiver, TokenType$PLUS_getInstance()));
    return Unit;
  }
  function lexer$lambda$lambda_4($receiver, it) {
    $receiver.process_11rb$(makeToken($receiver, TokenType$MINUS_getInstance()));
    return Unit;
  }
  function lexer$lambda$lambda_5($receiver, it) {
    $receiver.process_11rb$(makeToken($receiver, TokenType$ASTERISK_getInstance()));
    return Unit;
  }
  function lexer$lambda$lambda_6($receiver, it) {
    $receiver.process_11rb$(makeToken($receiver, TokenType$SLASH_getInstance()));
    return Unit;
  }
  function lexer$lambda$lambda_7($receiver, it) {
    $receiver.process_11rb$(makeToken($receiver, TokenType$PERCENT_getInstance()));
    return Unit;
  }
  function lexer$lambda$lambda_8($receiver, it) {
    $receiver.process_11rb$(makeToken($receiver, TokenType$CARET_getInstance()));
    return Unit;
  }
  function lexer$lambda$lambda_9($receiver, it) {
    $receiver.process_11rb$(makeToken($receiver, TokenType$SHIFT_RIGHT_getInstance()));
    return Unit;
  }
  function lexer$lambda$lambda_10($receiver, it) {
    $receiver.process_11rb$(makeToken($receiver, TokenType$SHIFT_LEFT_getInstance()));
    return Unit;
  }
  function lexer$lambda$lambda_11(it) {
    return isDigit(unboxChar(it));
  }
  function lexer$lambda$lambda_12($receiver, it) {
    var tmp$;
    var n = readNumber($receiver, unboxChar(it));
    if (Kotlin.isType(n, LexicalNumber$Invalid))
      if (matches(n.string, '^\\d*[Dd]\\d+'))
        tmp$ = makeToken_0($receiver, TokenType$DICE_NOTATION_getInstance(), n.string);
      else
        throw new SyntaxException("Invalid number '" + n.string + "'", section($receiver, n.string.length));
    else if (Kotlin.isType(n, LexicalNumber$Decimal))
      tmp$ = makeToken_0($receiver, TokenType$NUMBER_getInstance(), n.value.toString());
    else if (Kotlin.isType(n, LexicalNumber$Integer))
      tmp$ = makeToken_0($receiver, TokenType$INT_getInstance(), n.value.toString());
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    $receiver.process_11rb$(tmp$);
    return Unit;
  }
  function lexer$lambda$lambda_13(it) {
    return isLetter(unboxChar(it)) || unboxChar(it) === 95;
  }
  function lexer$lambda$lambda_14($receiver, it) {
    var tmp$;
    var s = readIdentifier($receiver, unboxChar(it));
    if (matches(s, '^\\d*[Dd]\\d+'))
      tmp$ = makeToken_0($receiver, TokenType$DICE_NOTATION_getInstance(), s);
    else
      tmp$ = makeToken_0($receiver, TokenType$IDENTIFIER_getInstance(), s);
    $receiver.process_11rb$(tmp$);
    return Unit;
  }
  function lexer$lambda($receiver) {
    $receiver.invoke_sdqmiu$(32);
    $receiver.invoke_sdqmiu$(9);
    $receiver.invoke_sdqmiu$(13);
    $receiver.invoke_sdqmiu$(10);
    $receiver.invoke_sdqmiu$(40, lexer$lambda$lambda);
    $receiver.invoke_sdqmiu$(41, lexer$lambda$lambda_0);
    $receiver.invoke_sdqmiu$(46, lexer$lambda$lambda_1);
    $receiver.invoke_sdqmiu$(44, lexer$lambda$lambda_2);
    $receiver.invoke_sdqmiu$(43, lexer$lambda$lambda_3);
    $receiver.invoke_sdqmiu$(45, lexer$lambda$lambda_4);
    $receiver.invoke_sdqmiu$(42, lexer$lambda$lambda_5);
    $receiver.invoke_sdqmiu$(47, lexer$lambda$lambda_6);
    $receiver.invoke_sdqmiu$(37, lexer$lambda$lambda_7);
    $receiver.invoke_sdqmiu$(94, lexer$lambda$lambda_8);
    $receiver.invoke_vp8vqt$('>>', lexer$lambda$lambda_9);
    $receiver.invoke_vp8vqt$('<<', lexer$lambda$lambda_10);
    $receiver.matching_akknk2$(lexer$lambda$lambda_11).configure_t5ujie$(lexer$lambda$lambda_12);
    $receiver.matching_akknk2$(lexer$lambda$lambda_13).configure_t5ujie$(lexer$lambda$lambda_14);
    return Unit;
  }
  var lexer;
  function grammar$lambda$lambda($receiver, it) {
    var $receiver_0 = $receiver.parseExpression_za3lpa$();
    $receiver.eat_11rb$(TokenType$RIGHT_PAREN_getInstance());
    return $receiver_0;
  }
  function grammar$lambda$lambda_0($receiver, it) {
    return new Expr$Integer(it.section, toInt(it.value));
  }
  function grammar$lambda$lambda_1($receiver, it) {
    return new Expr$Decimal(it.section, toDouble(it.value));
  }
  function grammar$lambda$lambda_2($receiver, it) {
    var s = it.value.toLowerCase();
    if (s.charCodeAt(0) === 100) {
      return new Expr$Dice(it.section, 1, toInt(s.substring(1)));
    } else {
      var i = indexOf(s, 100);
      if (i === -1) {
        throw new SyntaxException('Invalid dice notation `' + s + '`', it.section);
      }var tmp$ = it.section;
      var tmp$_0 = toInt(s.substring(0, i));
      var startIndex = i + 1 | 0;
      return new Expr$Dice(tmp$, tmp$_0, toInt(s.substring(startIndex)));
    }
  }
  function grammar$lambda$lambda_3($receiver, it) {
    if ($receiver.nextIsAny_7l2mas$([TokenType$INT_getInstance(), TokenType$NUMBER_getInstance(), TokenType$DICE_NOTATION_getInstance(), TokenType$IDENTIFIER_getInstance()]))
      return new Expr$Invocation(it.section, it.value, listOf($receiver.parseExpression_za3lpa$()));
    else if ($receiver.nextIs_11rb$(TokenType$LEFT_PAREN_getInstance())) {
      var args = ArrayList_init();
      $receiver.eat_11rb$(TokenType$LEFT_PAREN_getInstance());
      if (!$receiver.nextIs_11rb$(TokenType$RIGHT_PAREN_getInstance()))
        while (true) {
          args.add_11rb$($receiver.parseExpression_za3lpa$());
          if ($receiver.nextIs_11rb$(TokenType$RIGHT_PAREN_getInstance()))
            break;
          $receiver.eat_11rb$(TokenType$COMMA_getInstance());
        }
      $receiver.eat_11rb$(TokenType$RIGHT_PAREN_getInstance());
      return new Expr$Invocation(it.section, it.value, args);
    } else {
      return new Expr$Identifier(it.section, it.value);
    }
  }
  function grammar$lambda($receiver) {
    $receiver.prefix_ggj8ix$(TokenType$LEFT_PAREN_getInstance(), void 0, grammar$lambda$lambda);
    $receiver.prefix_ggj8ix$(TokenType$INT_getInstance(), void 0, grammar$lambda$lambda_0);
    $receiver.prefix_ggj8ix$(TokenType$NUMBER_getInstance(), void 0, grammar$lambda$lambda_1);
    $receiver.prefix_ggj8ix$(TokenType$DICE_NOTATION_getInstance(), void 0, grammar$lambda$lambda_2);
    $receiver.prefix_ggj8ix$(TokenType$IDENTIFIER_getInstance(), void 0, grammar$lambda$lambda_3);
    $receiver.prefix_bb9afj$(TokenType$MINUS_getInstance(), new ParserUnaryOp(Expr$UnaryOp$Type$MINUS_getInstance()));
    $receiver.prefix_bb9afj$(TokenType$PLUS_getInstance(), new ParserUnaryOp(Expr$UnaryOp$Type$PLUS_getInstance()));
    $receiver.infix_wdcr7z$(TokenType$PLUS_getInstance(), new ParserBinaryOp(8, true, Expr$BinaryOp$Type$PLUS_getInstance()));
    $receiver.infix_wdcr7z$(TokenType$MINUS_getInstance(), new ParserBinaryOp(8, true, Expr$BinaryOp$Type$MINUS_getInstance()));
    $receiver.infix_wdcr7z$(TokenType$ASTERISK_getInstance(), new ParserBinaryOp(9, true, Expr$BinaryOp$Type$TIMES_getInstance()));
    $receiver.infix_wdcr7z$(TokenType$SLASH_getInstance(), new ParserBinaryOp(9, true, Expr$BinaryOp$Type$DIVIDE_getInstance()));
    $receiver.infix_wdcr7z$(TokenType$PERCENT_getInstance(), new ParserBinaryOp(9, true, Expr$BinaryOp$Type$MODULUS_getInstance()));
    $receiver.infix_wdcr7z$(TokenType$CARET_getInstance(), new ParserBinaryOp(11, false, Expr$BinaryOp$Type$POWER_getInstance()));
    $receiver.infix_wdcr7z$(TokenType$SHIFT_RIGHT_getInstance(), new ParserBinaryOp(7, true, Expr$BinaryOp$Type$SHR_getInstance()));
    $receiver.infix_wdcr7z$(TokenType$SHIFT_LEFT_getInstance(), new ParserBinaryOp(7, true, Expr$BinaryOp$Type$SHL_getInstance()));
    return Unit;
  }
  var grammar;
  function parser$lambda$lambda(this$) {
    return function () {
      var $receiver = ArrayList_init();
      var this$_0 = this$;
      while (true) {
        $receiver.add_11rb$(this$_0.parseExpression_za3lpa$());
        if (this$_0.eof)
          break;
        this$_0.eat_11rb$(TokenType$COMMA_getInstance());
      }
      return $receiver;
    };
  }
  function parser$lambda($receiver) {
    return ensureEOF($receiver, parser$lambda$lambda($receiver));
  }
  var parser;
  function Expr() {
  }
  function Expr$Dice(section, rolls, sides) {
    Expr.call(this);
    this.section_tifxcm$_0 = section;
    this.rolls = rolls;
    this.sides = sides;
  }
  Object.defineProperty(Expr$Dice.prototype, 'section', {
    get: function () {
      return this.section_tifxcm$_0;
    }
  });
  Expr$Dice.prototype.accept_b0gbpa$ = function (visitor) {
    return visitor.visit_8wk3l3$(this);
  };
  Expr$Dice.prototype.toString = function () {
    return this.rolls.toString() + 'd' + this.sides;
  };
  Expr$Dice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dice',
    interfaces: [Expr]
  };
  Expr$Dice.prototype.component1 = function () {
    return this.section;
  };
  Expr$Dice.prototype.component2 = function () {
    return this.rolls;
  };
  Expr$Dice.prototype.component3 = function () {
    return this.sides;
  };
  Expr$Dice.prototype.copy_jzuash$ = function (section, rolls, sides) {
    return new Expr$Dice(section === void 0 ? this.section : section, rolls === void 0 ? this.rolls : rolls, sides === void 0 ? this.sides : sides);
  };
  Expr$Dice.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.section) | 0;
    result = result * 31 + Kotlin.hashCode(this.rolls) | 0;
    result = result * 31 + Kotlin.hashCode(this.sides) | 0;
    return result;
  };
  Expr$Dice.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.section, other.section) && Kotlin.equals(this.rolls, other.rolls) && Kotlin.equals(this.sides, other.sides)))));
  };
  function Expr$SolvedDice(dice, values) {
    Expr.call(this);
    this.dice = dice;
    this.values = values;
    this.result = sum(this.values);
  }
  Expr$SolvedDice.prototype.accept_b0gbpa$ = function (visitor) {
    return visitor.visit_wzutc2$(this);
  };
  function Expr$SolvedDice$toString$lambda(this$SolvedDice) {
    return function (it) {
      return it === 1 || it === this$SolvedDice.dice.sides ? '<b>' + it + '<\/b>' : it.toString();
    };
  }
  Expr$SolvedDice.prototype.toString = function () {
    return joinToString(this.values, ', ', '[', ']' + toString(this.dice), void 0, void 0, Expr$SolvedDice$toString$lambda(this));
  };
  Object.defineProperty(Expr$SolvedDice.prototype, 'section', {
    get: function () {
      return this.dice.section;
    }
  });
  Expr$SolvedDice.prototype.span_p684zu$ = function (other) {
    return this.dice.span_p684zu$(other);
  };
  Expr$SolvedDice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SolvedDice',
    interfaces: [Expr, Sectional]
  };
  Expr$SolvedDice.prototype.component1 = function () {
    return this.dice;
  };
  Expr$SolvedDice.prototype.component2 = function () {
    return this.values;
  };
  Expr$SolvedDice.prototype.copy_covguc$ = function (dice, values) {
    return new Expr$SolvedDice(dice === void 0 ? this.dice : dice, values === void 0 ? this.values : values);
  };
  Expr$SolvedDice.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dice) | 0;
    result = result * 31 + Kotlin.hashCode(this.values) | 0;
    return result;
  };
  Expr$SolvedDice.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.dice, other.dice) && Kotlin.equals(this.values, other.values)))));
  };
  function Expr$Integer(section, value) {
    Expr.call(this);
    this.section_t3nx7b$_0 = section;
    this.value = value;
  }
  Object.defineProperty(Expr$Integer.prototype, 'section', {
    get: function () {
      return this.section_t3nx7b$_0;
    }
  });
  Expr$Integer.prototype.accept_b0gbpa$ = function (visitor) {
    return visitor.visit_yi7vt8$(this);
  };
  Expr$Integer.prototype.toString = function () {
    return this.value.toString();
  };
  Expr$Integer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Integer',
    interfaces: [Expr]
  };
  Expr$Integer.prototype.component1 = function () {
    return this.section;
  };
  Expr$Integer.prototype.component2 = function () {
    return this.value;
  };
  Expr$Integer.prototype.copy_qn1ltd$ = function (section, value) {
    return new Expr$Integer(section === void 0 ? this.section : section, value === void 0 ? this.value : value);
  };
  Expr$Integer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.section) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Expr$Integer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.section, other.section) && Kotlin.equals(this.value, other.value)))));
  };
  function Expr$Decimal(section, value) {
    Expr.call(this);
    this.section_l81brw$_0 = section;
    this.value = value;
  }
  Object.defineProperty(Expr$Decimal.prototype, 'section', {
    get: function () {
      return this.section_l81brw$_0;
    }
  });
  Expr$Decimal.prototype.accept_b0gbpa$ = function (visitor) {
    return visitor.visit_rmo3bz$(this);
  };
  Expr$Decimal.prototype.toString = function () {
    return this.value.toString();
  };
  Expr$Decimal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Decimal',
    interfaces: [Expr]
  };
  Expr$Decimal.prototype.component1 = function () {
    return this.section;
  };
  Expr$Decimal.prototype.component2 = function () {
    return this.value;
  };
  Expr$Decimal.prototype.copy_a34j2n$ = function (section, value) {
    return new Expr$Decimal(section === void 0 ? this.section : section, value === void 0 ? this.value : value);
  };
  Expr$Decimal.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.section) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Expr$Decimal.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.section, other.section) && Kotlin.equals(this.value, other.value)))));
  };
  function Expr$BinaryOp(section, left, right, type) {
    Expr.call(this);
    this.section_3oayxd$_0 = section;
    this.left = left;
    this.right = right;
    this.type = type;
  }
  Object.defineProperty(Expr$BinaryOp.prototype, 'section', {
    get: function () {
      return this.section_3oayxd$_0;
    }
  });
  function Expr$BinaryOp$Type(name, ordinal, operator) {
    Enum.call(this);
    this.operator = operator;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Expr$BinaryOp$Type_initFields() {
    Expr$BinaryOp$Type_initFields = function () {
    };
    Expr$BinaryOp$Type$PLUS_instance = new Expr$BinaryOp$Type('PLUS', 0, '+');
    Expr$BinaryOp$Type$MINUS_instance = new Expr$BinaryOp$Type('MINUS', 1, '-');
    Expr$BinaryOp$Type$TIMES_instance = new Expr$BinaryOp$Type('TIMES', 2, '*');
    Expr$BinaryOp$Type$DIVIDE_instance = new Expr$BinaryOp$Type('DIVIDE', 3, '/');
    Expr$BinaryOp$Type$MODULUS_instance = new Expr$BinaryOp$Type('MODULUS', 4, '%');
    Expr$BinaryOp$Type$POWER_instance = new Expr$BinaryOp$Type('POWER', 5, '^');
    Expr$BinaryOp$Type$SHL_instance = new Expr$BinaryOp$Type('SHL', 6, '<<');
    Expr$BinaryOp$Type$SHR_instance = new Expr$BinaryOp$Type('SHR', 7, '>>');
  }
  var Expr$BinaryOp$Type$PLUS_instance;
  function Expr$BinaryOp$Type$PLUS_getInstance() {
    Expr$BinaryOp$Type_initFields();
    return Expr$BinaryOp$Type$PLUS_instance;
  }
  var Expr$BinaryOp$Type$MINUS_instance;
  function Expr$BinaryOp$Type$MINUS_getInstance() {
    Expr$BinaryOp$Type_initFields();
    return Expr$BinaryOp$Type$MINUS_instance;
  }
  var Expr$BinaryOp$Type$TIMES_instance;
  function Expr$BinaryOp$Type$TIMES_getInstance() {
    Expr$BinaryOp$Type_initFields();
    return Expr$BinaryOp$Type$TIMES_instance;
  }
  var Expr$BinaryOp$Type$DIVIDE_instance;
  function Expr$BinaryOp$Type$DIVIDE_getInstance() {
    Expr$BinaryOp$Type_initFields();
    return Expr$BinaryOp$Type$DIVIDE_instance;
  }
  var Expr$BinaryOp$Type$MODULUS_instance;
  function Expr$BinaryOp$Type$MODULUS_getInstance() {
    Expr$BinaryOp$Type_initFields();
    return Expr$BinaryOp$Type$MODULUS_instance;
  }
  var Expr$BinaryOp$Type$POWER_instance;
  function Expr$BinaryOp$Type$POWER_getInstance() {
    Expr$BinaryOp$Type_initFields();
    return Expr$BinaryOp$Type$POWER_instance;
  }
  var Expr$BinaryOp$Type$SHL_instance;
  function Expr$BinaryOp$Type$SHL_getInstance() {
    Expr$BinaryOp$Type_initFields();
    return Expr$BinaryOp$Type$SHL_instance;
  }
  var Expr$BinaryOp$Type$SHR_instance;
  function Expr$BinaryOp$Type$SHR_getInstance() {
    Expr$BinaryOp$Type_initFields();
    return Expr$BinaryOp$Type$SHR_instance;
  }
  Expr$BinaryOp$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function Expr$BinaryOp$Type$values() {
    return [Expr$BinaryOp$Type$PLUS_getInstance(), Expr$BinaryOp$Type$MINUS_getInstance(), Expr$BinaryOp$Type$TIMES_getInstance(), Expr$BinaryOp$Type$DIVIDE_getInstance(), Expr$BinaryOp$Type$MODULUS_getInstance(), Expr$BinaryOp$Type$POWER_getInstance(), Expr$BinaryOp$Type$SHL_getInstance(), Expr$BinaryOp$Type$SHR_getInstance()];
  }
  Expr$BinaryOp$Type.values = Expr$BinaryOp$Type$values;
  function Expr$BinaryOp$Type$valueOf(name) {
    switch (name) {
      case 'PLUS':
        return Expr$BinaryOp$Type$PLUS_getInstance();
      case 'MINUS':
        return Expr$BinaryOp$Type$MINUS_getInstance();
      case 'TIMES':
        return Expr$BinaryOp$Type$TIMES_getInstance();
      case 'DIVIDE':
        return Expr$BinaryOp$Type$DIVIDE_getInstance();
      case 'MODULUS':
        return Expr$BinaryOp$Type$MODULUS_getInstance();
      case 'POWER':
        return Expr$BinaryOp$Type$POWER_getInstance();
      case 'SHL':
        return Expr$BinaryOp$Type$SHL_getInstance();
      case 'SHR':
        return Expr$BinaryOp$Type$SHR_getInstance();
      default:throwISE('No enum constant com.github.adriantodt.dicenotation.Expr.BinaryOp.Type.' + name);
    }
  }
  Expr$BinaryOp$Type.valueOf_61zpoe$ = Expr$BinaryOp$Type$valueOf;
  Expr$BinaryOp.prototype.accept_b0gbpa$ = function (visitor) {
    return visitor.visit_aaxk38$(this);
  };
  Expr$BinaryOp.prototype.toString = function () {
    var sb = StringBuilder_init();
    var prec = Precedence_getInstance().of_p6fegc$(this.type);
    var leftPrec = Precedence_getInstance().of_7p9nxg$(this.left);
    var rightPrec = Precedence_getInstance().of_7p9nxg$(this.right);
    if (leftPrec > prec) {
      sb.append_s8itvh$(40).append_s8jyv4$(this.left).append_s8itvh$(41);
    } else {
      sb.append_s8jyv4$(this.left);
    }
    sb.append_s8itvh$(32).append_61zpoe$(this.type.operator).append_s8itvh$(32);
    if (rightPrec > prec) {
      sb.append_s8itvh$(40).append_s8jyv4$(this.right).append_s8itvh$(41);
    } else {
      sb.append_s8jyv4$(this.right);
    }
    return sb.toString();
  };
  Expr$BinaryOp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BinaryOp',
    interfaces: [Expr]
  };
  Expr$BinaryOp.prototype.component1 = function () {
    return this.section;
  };
  Expr$BinaryOp.prototype.component2 = function () {
    return this.left;
  };
  Expr$BinaryOp.prototype.component3 = function () {
    return this.right;
  };
  Expr$BinaryOp.prototype.component4 = function () {
    return this.type;
  };
  Expr$BinaryOp.prototype.copy_xo47on$ = function (section, left, right, type) {
    return new Expr$BinaryOp(section === void 0 ? this.section : section, left === void 0 ? this.left : left, right === void 0 ? this.right : right, type === void 0 ? this.type : type);
  };
  Expr$BinaryOp.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.section) | 0;
    result = result * 31 + Kotlin.hashCode(this.left) | 0;
    result = result * 31 + Kotlin.hashCode(this.right) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  Expr$BinaryOp.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.section, other.section) && Kotlin.equals(this.left, other.left) && Kotlin.equals(this.right, other.right) && Kotlin.equals(this.type, other.type)))));
  };
  function Expr$UnaryOp(section, target, type) {
    Expr.call(this);
    this.section_bzanl1$_0 = section;
    this.target = target;
    this.type = type;
  }
  Object.defineProperty(Expr$UnaryOp.prototype, 'section', {
    get: function () {
      return this.section_bzanl1$_0;
    }
  });
  function Expr$UnaryOp$Type(name, ordinal, operator) {
    Enum.call(this);
    this.operator = operator;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Expr$UnaryOp$Type_initFields() {
    Expr$UnaryOp$Type_initFields = function () {
    };
    Expr$UnaryOp$Type$PLUS_instance = new Expr$UnaryOp$Type('PLUS', 0, '+');
    Expr$UnaryOp$Type$MINUS_instance = new Expr$UnaryOp$Type('MINUS', 1, '-');
  }
  var Expr$UnaryOp$Type$PLUS_instance;
  function Expr$UnaryOp$Type$PLUS_getInstance() {
    Expr$UnaryOp$Type_initFields();
    return Expr$UnaryOp$Type$PLUS_instance;
  }
  var Expr$UnaryOp$Type$MINUS_instance;
  function Expr$UnaryOp$Type$MINUS_getInstance() {
    Expr$UnaryOp$Type_initFields();
    return Expr$UnaryOp$Type$MINUS_instance;
  }
  Expr$UnaryOp$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function Expr$UnaryOp$Type$values() {
    return [Expr$UnaryOp$Type$PLUS_getInstance(), Expr$UnaryOp$Type$MINUS_getInstance()];
  }
  Expr$UnaryOp$Type.values = Expr$UnaryOp$Type$values;
  function Expr$UnaryOp$Type$valueOf(name) {
    switch (name) {
      case 'PLUS':
        return Expr$UnaryOp$Type$PLUS_getInstance();
      case 'MINUS':
        return Expr$UnaryOp$Type$MINUS_getInstance();
      default:throwISE('No enum constant com.github.adriantodt.dicenotation.Expr.UnaryOp.Type.' + name);
    }
  }
  Expr$UnaryOp$Type.valueOf_61zpoe$ = Expr$UnaryOp$Type$valueOf;
  Expr$UnaryOp.prototype.accept_b0gbpa$ = function (visitor) {
    return visitor.visit_2qkb2a$(this);
  };
  Expr$UnaryOp.prototype.toString = function () {
    var sb = StringBuilder_init();
    var prec = Precedence_getInstance().of_lwf03u$(this.type);
    var targetPrec = Precedence_getInstance().of_7p9nxg$(this.target);
    sb.append_61zpoe$(this.type.operator);
    if (targetPrec > prec) {
      sb.append_s8itvh$(40).append_s8jyv4$(this.target).append_s8itvh$(41);
    } else {
      sb.append_s8jyv4$(this.target);
    }
    return sb.toString();
  };
  Expr$UnaryOp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnaryOp',
    interfaces: [Expr]
  };
  Expr$UnaryOp.prototype.component1 = function () {
    return this.section;
  };
  Expr$UnaryOp.prototype.component2 = function () {
    return this.target;
  };
  Expr$UnaryOp.prototype.component3 = function () {
    return this.type;
  };
  Expr$UnaryOp.prototype.copy_m15n9j$ = function (section, target, type) {
    return new Expr$UnaryOp(section === void 0 ? this.section : section, target === void 0 ? this.target : target, type === void 0 ? this.type : type);
  };
  Expr$UnaryOp.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.section) | 0;
    result = result * 31 + Kotlin.hashCode(this.target) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  Expr$UnaryOp.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.section, other.section) && Kotlin.equals(this.target, other.target) && Kotlin.equals(this.type, other.type)))));
  };
  function Expr$Identifier(section, name) {
    Expr.call(this);
    this.section_1d8vfs$_0 = section;
    this.name = name;
  }
  Object.defineProperty(Expr$Identifier.prototype, 'section', {
    get: function () {
      return this.section_1d8vfs$_0;
    }
  });
  Expr$Identifier.prototype.accept_b0gbpa$ = function (visitor) {
    return visitor.visit_gbuijf$(this);
  };
  Expr$Identifier.prototype.toString = function () {
    return this.name;
  };
  Expr$Identifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Identifier',
    interfaces: [Expr]
  };
  Expr$Identifier.prototype.component1 = function () {
    return this.section;
  };
  Expr$Identifier.prototype.component2 = function () {
    return this.name;
  };
  Expr$Identifier.prototype.copy_2wqzwv$ = function (section, name) {
    return new Expr$Identifier(section === void 0 ? this.section : section, name === void 0 ? this.name : name);
  };
  Expr$Identifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.section) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  Expr$Identifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.section, other.section) && Kotlin.equals(this.name, other.name)))));
  };
  function Expr$Invocation(section, name, arguments_0) {
    Expr.call(this);
    this.section_3ckpgf$_0 = section;
    this.name = name;
    this.arguments = arguments_0;
  }
  Object.defineProperty(Expr$Invocation.prototype, 'section', {
    get: function () {
      return this.section_3ckpgf$_0;
    }
  });
  Expr$Invocation.prototype.accept_b0gbpa$ = function (visitor) {
    return visitor.visit_thhky$(this);
  };
  Expr$Invocation.prototype.toString = function () {
    return joinToString(this.arguments, ',', this.name + '(', ')');
  };
  Expr$Invocation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Invocation',
    interfaces: [Expr]
  };
  Expr$Invocation.prototype.component1 = function () {
    return this.section;
  };
  Expr$Invocation.prototype.component2 = function () {
    return this.name;
  };
  Expr$Invocation.prototype.component3 = function () {
    return this.arguments;
  };
  Expr$Invocation.prototype.copy_bs44m$ = function (section, name, arguments_0) {
    return new Expr$Invocation(section === void 0 ? this.section : section, name === void 0 ? this.name : name, arguments_0 === void 0 ? this.arguments : arguments_0);
  };
  Expr$Invocation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.section) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.arguments) | 0;
    return result;
  };
  Expr$Invocation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.section, other.section) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.arguments, other.arguments)))));
  };
  function Expr$Visitor() {
  }
  Expr$Visitor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Visitor',
    interfaces: []
  };
  Expr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Expr',
    interfaces: [Sectional]
  };
  function Numbers() {
    Numbers_instance = this;
  }
  Numbers.prototype.divide_z8e4lc$ = function (left, right) {
    if (typeof left === 'number' || typeof right === 'number')
      return numberToDouble(left) / numberToDouble(right);
    if (typeof left === 'number' || typeof right === 'number')
      return numberToDouble(left) / numberToDouble(right);
    return Kotlin.isType(left, Kotlin.Long) || Kotlin.isType(right, Kotlin.Long) ? numberToLong(left).toNumber() / numberToDouble(right) : numberToInt(left) / numberToInt(right) | 0;
  };
  Numbers.prototype.leftShift_z8e4lc$ = function (left, right) {
    var shift = numberToLong(left).shiftLeft(numberToInt(right));
    return typeof left === 'number' && typeof right === 'number' ? shift.toInt() : shift;
  };
  Numbers.prototype.minus_z8e4lc$ = function (left, right) {
    if (typeof left === 'number' || typeof right === 'number')
      return numberToDouble(left) - numberToDouble(right);
    if (typeof left === 'number' || typeof right === 'number')
      return numberToDouble(left) - numberToDouble(right);
    return Kotlin.isType(left, Kotlin.Long) || Kotlin.isType(right, Kotlin.Long) ? numberToLong(left).toNumber() - numberToDouble(right) : numberToInt(left) - numberToInt(right) | 0;
  };
  Numbers.prototype.modulus_z8e4lc$ = function (left, right) {
    if (typeof left === 'number' || typeof right === 'number')
      return numberToDouble(left) % numberToDouble(right);
    if (typeof left === 'number' || typeof right === 'number')
      return numberToDouble(left) % numberToDouble(right);
    return Kotlin.isType(left, Kotlin.Long) || Kotlin.isType(right, Kotlin.Long) ? numberToLong(left).toNumber() % numberToDouble(right) : numberToInt(left) / numberToInt(right) | 0;
  };
  Numbers.prototype.plus_z8e4lc$ = function (left, right) {
    if (typeof left === 'number' || typeof right === 'number')
      return numberToDouble(left) + numberToDouble(right);
    if (typeof left === 'number' || typeof right === 'number')
      return numberToDouble(left) + numberToDouble(right);
    return Kotlin.isType(left, Kotlin.Long) || Kotlin.isType(right, Kotlin.Long) ? numberToLong(left).toNumber() + numberToDouble(right) : numberToInt(left) + numberToInt(right) | 0;
  };
  Numbers.prototype.power_z8e4lc$ = function (left, right) {
    var $receiver = numberToDouble(left);
    var x = numberToDouble(right);
    var pow = Math_0.pow($receiver, x);
    if (typeof left === 'number' || typeof right === 'number')
      return pow;
    if (typeof left === 'number' || typeof right === 'number')
      return pow;
    if (numberToInt(pow) === pow)
      return numberToInt(pow);
    return Kotlin.Long.fromNumber(pow).toNumber() === pow ? Kotlin.Long.fromNumber(pow) : pow;
  };
  Numbers.prototype.rightShift_z8e4lc$ = function (left, right) {
    var shift = numberToLong(left).shiftRight(numberToInt(right));
    return typeof left === 'number' && typeof right === 'number' ? shift.toInt() : shift;
  };
  Numbers.prototype.times_z8e4lc$ = function (left, right) {
    if (typeof left === 'number' || typeof right === 'number')
      return numberToDouble(left) * numberToDouble(right);
    if (typeof left === 'number' || typeof right === 'number')
      return numberToDouble(left) * numberToDouble(right);
    return Kotlin.isType(left, Kotlin.Long) || Kotlin.isType(right, Kotlin.Long) ? numberToLong(left).toNumber() * numberToDouble(right) : Kotlin.imul(numberToInt(left), numberToInt(right));
  };
  Numbers.prototype.unaryMinus_3p81yu$ = function (target) {
    if (typeof target === 'number')
      return -numberToDouble(target);
    if (typeof target === 'number')
      return -numberToDouble(target);
    return Kotlin.isType(target, Kotlin.Long) ? numberToLong(target).unaryMinus() : -numberToInt(target) | 0;
  };
  Numbers.prototype.unaryPlus_3p81yu$ = function (target) {
    if (typeof target === 'number')
      return +numberToDouble(target);
    if (typeof target === 'number')
      return +numberToDouble(target);
    return Kotlin.isType(target, Kotlin.Long) ? numberToLong(target).unaryPlus() : +numberToInt(target);
  };
  Numbers.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Numbers',
    interfaces: []
  };
  var Numbers_instance = null;
  function Numbers_getInstance() {
    if (Numbers_instance === null) {
      new Numbers();
    }return Numbers_instance;
  }
  function ParserBinaryOp(precedence, leftAssoc, type) {
    this.precedence_yl09zq$_0 = precedence;
    this.leftAssoc_0 = leftAssoc;
    this.type = type;
  }
  Object.defineProperty(ParserBinaryOp.prototype, 'precedence', {
    get: function () {
      return this.precedence_yl09zq$_0;
    }
  });
  ParserBinaryOp.prototype.parse_eufodf$ = function (ctx, left, token) {
    var right = ctx.parseExpression_za3lpa$(this.precedence - (this.leftAssoc_0 ? 0 : 1) | 0);
    return new Expr$BinaryOp(token.section, left, right, this.type);
  };
  ParserBinaryOp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParserBinaryOp',
    interfaces: [InfixParser]
  };
  function ParserUnaryOp(type) {
    this.type = type;
  }
  ParserUnaryOp.prototype.parse_6srjs1$ = function (parser, token) {
    return new Expr$UnaryOp(token.section, parser.parseExpression_za3lpa$(10), this.type);
  };
  ParserUnaryOp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParserUnaryOp',
    interfaces: [PrefixParser]
  };
  function Precedence() {
    Precedence_instance = this;
    this.ADDITIVE = 8;
    this.EXPONENTIAL = 11;
    this.MULTIPLICATIVE = 9;
    this.POSTFIX = 13;
    this.PREFIX = 10;
    this.PURE = 6;
    this.SHIFT = 7;
  }
  Precedence.prototype.of_lwf03u$ = function (op) {
    return 10;
  };
  Precedence.prototype.of_p6fegc$ = function (op) {
    var tmp$;
    switch (op.name) {
      case 'PLUS':
      case 'MINUS':
        tmp$ = 8;
        break;
      case 'TIMES':
      case 'DIVIDE':
      case 'MODULUS':
        tmp$ = 9;
        break;
      case 'POWER':
        tmp$ = 11;
        break;
      case 'SHL':
      case 'SHR':
        tmp$ = 7;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  Precedence.prototype.of_7p9nxg$ = function (expr) {
    var tmp$;
    if (Kotlin.isType(expr, Expr$Decimal) || Kotlin.isType(expr, Expr$Dice) || Kotlin.isType(expr, Expr$SolvedDice) || Kotlin.isType(expr, Expr$Integer) || Kotlin.isType(expr, Expr$Identifier))
      tmp$ = 6;
    else if (Kotlin.isType(expr, Expr$Invocation))
      tmp$ = 13;
    else if (Kotlin.isType(expr, Expr$BinaryOp))
      tmp$ = this.of_p6fegc$(expr.type);
    else if (Kotlin.isType(expr, Expr$UnaryOp))
      tmp$ = 10;
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  Precedence.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Precedence',
    interfaces: []
  };
  var Precedence_instance = null;
  function Precedence_getInstance() {
    if (Precedence_instance === null) {
      new Precedence();
    }return Precedence_instance;
  }
  function TokenType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TokenType_initFields() {
    TokenType_initFields = function () {
    };
    TokenType$LEFT_PAREN_instance = new TokenType('LEFT_PAREN', 0);
    TokenType$RIGHT_PAREN_instance = new TokenType('RIGHT_PAREN', 1);
    TokenType$INT_instance = new TokenType('INT', 2);
    TokenType$NUMBER_instance = new TokenType('NUMBER', 3);
    TokenType$DICE_NOTATION_instance = new TokenType('DICE_NOTATION', 4);
    TokenType$PLUS_instance = new TokenType('PLUS', 5);
    TokenType$MINUS_instance = new TokenType('MINUS', 6);
    TokenType$ASTERISK_instance = new TokenType('ASTERISK', 7);
    TokenType$SLASH_instance = new TokenType('SLASH', 8);
    TokenType$CARET_instance = new TokenType('CARET', 9);
    TokenType$PERCENT_instance = new TokenType('PERCENT', 10);
    TokenType$SHIFT_RIGHT_instance = new TokenType('SHIFT_RIGHT', 11);
    TokenType$SHIFT_LEFT_instance = new TokenType('SHIFT_LEFT', 12);
    TokenType$COMMA_instance = new TokenType('COMMA', 13);
    TokenType$DOT_instance = new TokenType('DOT', 14);
    TokenType$IDENTIFIER_instance = new TokenType('IDENTIFIER', 15);
  }
  var TokenType$LEFT_PAREN_instance;
  function TokenType$LEFT_PAREN_getInstance() {
    TokenType_initFields();
    return TokenType$LEFT_PAREN_instance;
  }
  var TokenType$RIGHT_PAREN_instance;
  function TokenType$RIGHT_PAREN_getInstance() {
    TokenType_initFields();
    return TokenType$RIGHT_PAREN_instance;
  }
  var TokenType$INT_instance;
  function TokenType$INT_getInstance() {
    TokenType_initFields();
    return TokenType$INT_instance;
  }
  var TokenType$NUMBER_instance;
  function TokenType$NUMBER_getInstance() {
    TokenType_initFields();
    return TokenType$NUMBER_instance;
  }
  var TokenType$DICE_NOTATION_instance;
  function TokenType$DICE_NOTATION_getInstance() {
    TokenType_initFields();
    return TokenType$DICE_NOTATION_instance;
  }
  var TokenType$PLUS_instance;
  function TokenType$PLUS_getInstance() {
    TokenType_initFields();
    return TokenType$PLUS_instance;
  }
  var TokenType$MINUS_instance;
  function TokenType$MINUS_getInstance() {
    TokenType_initFields();
    return TokenType$MINUS_instance;
  }
  var TokenType$ASTERISK_instance;
  function TokenType$ASTERISK_getInstance() {
    TokenType_initFields();
    return TokenType$ASTERISK_instance;
  }
  var TokenType$SLASH_instance;
  function TokenType$SLASH_getInstance() {
    TokenType_initFields();
    return TokenType$SLASH_instance;
  }
  var TokenType$CARET_instance;
  function TokenType$CARET_getInstance() {
    TokenType_initFields();
    return TokenType$CARET_instance;
  }
  var TokenType$PERCENT_instance;
  function TokenType$PERCENT_getInstance() {
    TokenType_initFields();
    return TokenType$PERCENT_instance;
  }
  var TokenType$SHIFT_RIGHT_instance;
  function TokenType$SHIFT_RIGHT_getInstance() {
    TokenType_initFields();
    return TokenType$SHIFT_RIGHT_instance;
  }
  var TokenType$SHIFT_LEFT_instance;
  function TokenType$SHIFT_LEFT_getInstance() {
    TokenType_initFields();
    return TokenType$SHIFT_LEFT_instance;
  }
  var TokenType$COMMA_instance;
  function TokenType$COMMA_getInstance() {
    TokenType_initFields();
    return TokenType$COMMA_instance;
  }
  var TokenType$DOT_instance;
  function TokenType$DOT_getInstance() {
    TokenType_initFields();
    return TokenType$DOT_instance;
  }
  var TokenType$IDENTIFIER_instance;
  function TokenType$IDENTIFIER_getInstance() {
    TokenType_initFields();
    return TokenType$IDENTIFIER_instance;
  }
  TokenType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TokenType',
    interfaces: [Enum]
  };
  function TokenType$values() {
    return [TokenType$LEFT_PAREN_getInstance(), TokenType$RIGHT_PAREN_getInstance(), TokenType$INT_getInstance(), TokenType$NUMBER_getInstance(), TokenType$DICE_NOTATION_getInstance(), TokenType$PLUS_getInstance(), TokenType$MINUS_getInstance(), TokenType$ASTERISK_getInstance(), TokenType$SLASH_getInstance(), TokenType$CARET_getInstance(), TokenType$PERCENT_getInstance(), TokenType$SHIFT_RIGHT_getInstance(), TokenType$SHIFT_LEFT_getInstance(), TokenType$COMMA_getInstance(), TokenType$DOT_getInstance(), TokenType$IDENTIFIER_getInstance()];
  }
  TokenType.values = TokenType$values;
  function TokenType$valueOf(name) {
    switch (name) {
      case 'LEFT_PAREN':
        return TokenType$LEFT_PAREN_getInstance();
      case 'RIGHT_PAREN':
        return TokenType$RIGHT_PAREN_getInstance();
      case 'INT':
        return TokenType$INT_getInstance();
      case 'NUMBER':
        return TokenType$NUMBER_getInstance();
      case 'DICE_NOTATION':
        return TokenType$DICE_NOTATION_getInstance();
      case 'PLUS':
        return TokenType$PLUS_getInstance();
      case 'MINUS':
        return TokenType$MINUS_getInstance();
      case 'ASTERISK':
        return TokenType$ASTERISK_getInstance();
      case 'SLASH':
        return TokenType$SLASH_getInstance();
      case 'CARET':
        return TokenType$CARET_getInstance();
      case 'PERCENT':
        return TokenType$PERCENT_getInstance();
      case 'SHIFT_RIGHT':
        return TokenType$SHIFT_RIGHT_getInstance();
      case 'SHIFT_LEFT':
        return TokenType$SHIFT_LEFT_getInstance();
      case 'COMMA':
        return TokenType$COMMA_getInstance();
      case 'DOT':
        return TokenType$DOT_getInstance();
      case 'IDENTIFIER':
        return TokenType$IDENTIFIER_getInstance();
      default:throwISE('No enum constant com.github.adriantodt.dicenotation.TokenType.' + name);
    }
  }
  TokenType.valueOf_61zpoe$ = TokenType$valueOf;
  function DiceEvaluator() {
    this.values_0 = LinkedHashMap_init();
    this.functions_0 = LinkedHashMap_init();
  }
  DiceEvaluator.prototype.function_npunpo$ = function (name, function_0) {
    this.functions_0.put_xwzc9p$(name, function_0);
    return this;
  };
  DiceEvaluator.prototype.functionAlias_60y5e1$ = function (name, alias) {
    var tmp$;
    var f = ensureNotNull(this.functions_0.get_11rb$(name));
    for (tmp$ = 0; tmp$ !== alias.length; ++tmp$) {
      var k = alias[tmp$];
      this.functions_0.put_xwzc9p$(k, f);
    }
    return this;
  };
  function DiceEvaluator$value$lambda$lambda(closure$value) {
    return function () {
      return closure$value;
    };
  }
  DiceEvaluator.prototype.value_nhrjpk$ = function (name, value) {
    this.values_0.put_xwzc9p$(name, DiceEvaluator$value$lambda$lambda(value));
    return this;
  };
  DiceEvaluator.prototype.value_uvescw$ = function (name, value) {
    this.values_0.put_xwzc9p$(name, value);
    return this;
  };
  DiceEvaluator.prototype.valueAlias_60y5e1$ = function (name, alias) {
    var tmp$;
    var v = ensureNotNull(this.values_0.get_11rb$(name));
    for (tmp$ = 0; tmp$ !== alias.length; ++tmp$) {
      var k = alias[tmp$];
      this.values_0.put_xwzc9p$(k, v);
    }
    return this;
  };
  DiceEvaluator.prototype.visit_gbuijf$ = function (expr) {
    var tmp$;
    tmp$ = this.values_0.get_11rb$(expr.name);
    if (tmp$ == null) {
      throw Exception_init('Constant `' + expr.name + "` doesn't exist.");
    }var v = tmp$;
    return v();
  };
  DiceEvaluator.prototype.visit_thhky$ = function (expr) {
    var tmp$;
    tmp$ = this.functions_0.get_11rb$(expr.name);
    if (tmp$ == null) {
      throw Exception_init('Function `' + expr.name + "` doesn't exist.");
    }var f = tmp$;
    var $receiver = expr.arguments;
    var transform = getCallableRef('apply', function ($receiver, expr) {
      return $receiver.apply_0(expr);
    }.bind(null, this));
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(transform(item));
    }
    var args = copyToArray(destination);
    return f(args);
  };
  DiceEvaluator.prototype.visit_aaxk38$ = function (expr) {
    var tmp$;
    var left = expr.left.accept_b0gbpa$(this);
    var right = expr.right.accept_b0gbpa$(this);
    switch (expr.type.name) {
      case 'PLUS':
        tmp$ = Numbers_getInstance().plus_z8e4lc$(left, right);
        break;
      case 'MINUS':
        tmp$ = Numbers_getInstance().minus_z8e4lc$(left, right);
        break;
      case 'TIMES':
        tmp$ = Numbers_getInstance().times_z8e4lc$(left, right);
        break;
      case 'DIVIDE':
        tmp$ = Numbers_getInstance().divide_z8e4lc$(left, right);
        break;
      case 'MODULUS':
        tmp$ = Numbers_getInstance().modulus_z8e4lc$(left, right);
        break;
      case 'POWER':
        tmp$ = Numbers_getInstance().power_z8e4lc$(left, right);
        break;
      case 'SHL':
        tmp$ = Numbers_getInstance().leftShift_z8e4lc$(left, right);
        break;
      case 'SHR':
        tmp$ = Numbers_getInstance().rightShift_z8e4lc$(left, right);
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  DiceEvaluator.prototype.visit_2qkb2a$ = function (expr) {
    var tmp$;
    var target = expr.target.accept_b0gbpa$(this);
    switch (expr.type.name) {
      case 'PLUS':
        tmp$ = Numbers_getInstance().unaryPlus_3p81yu$(target);
        break;
      case 'MINUS':
        tmp$ = Numbers_getInstance().unaryMinus_3p81yu$(target);
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  DiceEvaluator.prototype.visit_yi7vt8$ = function (expr) {
    return expr.value;
  };
  DiceEvaluator.prototype.visit_rmo3bz$ = function (expr) {
    return expr.value;
  };
  DiceEvaluator.prototype.visit_8wk3l3$ = function (expr) {
    throw Exception_init("Dice wasn't solved.");
  };
  DiceEvaluator.prototype.visit_wzutc2$ = function (expr) {
    return expr.result;
  };
  DiceEvaluator.prototype.apply_0 = function (expr) {
    return expr.accept_b0gbpa$(this);
  };
  DiceEvaluator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DiceEvaluator',
    interfaces: [Expr$Visitor]
  };
  function DiceSolver(random) {
    this.random_0 = random;
  }
  DiceSolver.prototype.visit_thhky$ = function (expr) {
    var tmp$ = void 0;
    var tmp$_0 = void 0;
    var $receiver = expr.arguments;
    var transform = getCallableRef('apply', function ($receiver, expr) {
      return $receiver.apply_0(expr);
    }.bind(null, this));
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(transform(item));
    }
    return expr.copy_bs44m$(tmp$, tmp$_0, destination);
  };
  DiceSolver.prototype.visit_aaxk38$ = function (expr) {
    return expr.copy_xo47on$(void 0, expr.left.accept_b0gbpa$(this), expr.right.accept_b0gbpa$(this));
  };
  DiceSolver.prototype.visit_2qkb2a$ = function (expr) {
    return expr.copy_m15n9j$(void 0, expr.target.accept_b0gbpa$(this));
  };
  DiceSolver.prototype.visit_8wk3l3$ = function (expr) {
    var size = expr.rolls;
    var list = ArrayList_init_0(size);
    for (var index = 0; index < size; index++) {
      list.add_11rb$(this.random_0(expr.sides, index));
    }
    return new Expr$SolvedDice(expr, list);
  };
  DiceSolver.prototype.visit_gbuijf$ = function (expr) {
    return expr;
  };
  DiceSolver.prototype.visit_yi7vt8$ = function (expr) {
    return expr;
  };
  DiceSolver.prototype.visit_rmo3bz$ = function (expr) {
    return expr;
  };
  DiceSolver.prototype.visit_wzutc2$ = function (expr) {
    return expr;
  };
  DiceSolver.prototype.apply_0 = function (expr) {
    return expr.accept_b0gbpa$(this);
  };
  DiceSolver.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DiceSolver',
    interfaces: [Expr$Visitor]
  };
  function DiceSolver_init(random, $this) {
    $this = $this || Object.create(DiceSolver.prototype);
    DiceSolver.call($this, DiceSolver_init$lambda(random));
    return $this;
  }
  function DiceSolver_init$lambda(closure$random) {
    return function (sides, f) {
      return closure$random(sides);
    };
  }
  function StringReader(s) {
    this.str_0 = s;
    this.length_0 = s.length;
    this.next_0 = 0;
    this.mark_0 = 0;
  }
  StringReader.prototype.read = function () {
    var tmp$, tmp$_0;
    if (this.next_0 >= this.length_0)
      tmp$_0 = -1;
    else {
      tmp$_0 = this.str_0.charCodeAt((tmp$ = this.next_0, this.next_0 = tmp$ + 1 | 0, tmp$)) | 0;
    }
    return tmp$_0;
  };
  StringReader.prototype.skip_s8cxhz$ = function (ns) {
    if (this.next_0 >= this.length_0)
      return L0;
    var a = Kotlin.Long.fromInt(this.length_0).subtract(Kotlin.Long.fromInt(this.next_0));
    var n = a.compareTo_11rb$(ns) <= 0 ? a : ns;
    var a_0 = Kotlin.Long.fromInt(this.next_0).unaryMinus();
    var b = n;
    n = a_0.compareTo_11rb$(b) >= 0 ? a_0 : b;
    this.next_0 = this.next_0 + n.toInt() | 0;
    return n;
  };
  StringReader.prototype.mark_za3lpa$ = function (readAheadLimit) {
    if (!(readAheadLimit >= 0)) {
      var message = 'Read-ahead limit < 0';
      throw IllegalArgumentException_init(message.toString());
    }this.mark_0 = this.next_0;
  };
  StringReader.prototype.reset = function () {
    this.next_0 = this.mark_0;
  };
  StringReader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringReader',
    interfaces: []
  };
  function createLexer(block) {
    var $receiver = new MatcherImpl();
    block($receiver);
    return new LexerImpl($receiver);
  }
  function createGrammar(block) {
    var $receiver = new GrammarBuilder();
    block($receiver);
    return $receiver.build();
  }
  function createParser(grammar, block) {
    return new ParserImpl(grammar, block);
  }
  function GrammarDSL() {
  }
  GrammarDSL.prototype.import_ha5jj$ = function (override, grammars, callback$default) {
    if (override === void 0)
      override = false;
    callback$default ? callback$default(override, grammars) : this.import_ha5jj$$default(override, grammars);
  };
  GrammarDSL.prototype.prefix_bb9afj$ = function (type, parselet, override, callback$default) {
    if (override === void 0)
      override = false;
    callback$default ? callback$default(type, parselet, override) : this.prefix_bb9afj$$default(type, parselet, override);
  };
  GrammarDSL.prototype.prefix_ggj8ix$ = function (type, override, block, callback$default) {
    if (override === void 0)
      override = false;
    callback$default ? callback$default(type, override, block) : this.prefix_ggj8ix$$default(type, override, block);
  };
  GrammarDSL.prototype.infix_wdcr7z$ = function (type, parselet, override, callback$default) {
    if (override === void 0)
      override = false;
    callback$default ? callback$default(type, parselet, override) : this.infix_wdcr7z$$default(type, parselet, override);
  };
  GrammarDSL.prototype.infix_lfjh7$ = function (type, precedence, override, block, callback$default) {
    if (override === void 0)
      override = false;
    callback$default ? callback$default(type, precedence, override, block) : this.infix_lfjh7$$default(type, precedence, override, block);
  };
  GrammarDSL.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GrammarDSL',
    interfaces: []
  };
  function LexerDSL() {
  }
  LexerDSL.prototype.invoke_sdqmiu$$default = function ($receiver, block) {
    this.matching_s8itvh$($receiver).configure_t5ujie$(block);
  };
  function LexerDSL$invoke$lambda($receiver, it) {
    return Unit;
  }
  LexerDSL.prototype.invoke_sdqmiu$ = function ($receiver, block, callback$default) {
    if (block === void 0)
      block = LexerDSL$invoke$lambda;
    callback$default ? callback$default($receiver, block) : this.invoke_sdqmiu$$default($receiver, block);
  };
  LexerDSL.prototype.invoke_vp8vqt$$default = function ($receiver, block) {
    this.matching_61zpoe$($receiver).configure_t5ujie$(block);
  };
  function LexerDSL$invoke$lambda_0($receiver, it) {
    return Unit;
  }
  LexerDSL.prototype.invoke_vp8vqt$ = function ($receiver, block, callback$default) {
    if (block === void 0)
      block = LexerDSL$invoke$lambda_0;
    callback$default ? callback$default($receiver, block) : this.invoke_vp8vqt$$default($receiver, block);
  };
  LexerDSL.prototype.matching_6ils5n$ = function (string, block) {
    block(this.matching_61zpoe$(string));
  };
  LexerDSL.prototype.matching_uoi7m8$ = function (char, block) {
    block(this.matching_s8itvh$(char));
  };
  LexerDSL.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LexerDSL',
    interfaces: []
  };
  function Lexer() {
  }
  function Lexer$parseTo$lambda(closure$collection) {
    return function (it) {
      closure$collection.add_11rb$(it);
      return Unit;
    };
  }
  Lexer.prototype.parseTo_32dq1j$ = function (source, collection) {
    this.parse_mi27kl$(source, Lexer$parseTo$lambda(collection));
    return collection;
  };
  Lexer.prototype.parseToList_llobtt$ = function (source) {
    return this.parseTo_32dq1j$(source, ArrayList_init());
  };
  Lexer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Lexer',
    interfaces: []
  };
  function LexerContext() {
  }
  LexerContext.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LexerContext',
    interfaces: []
  };
  function Section(source, lineNumber, lineIndex, length) {
    this.source = source;
    this.lineNumber = lineNumber;
    this.lineIndex = lineIndex;
    this.length = length;
  }
  Object.defineProperty(Section.prototype, 'line', {
    get: function () {
      return this.source.lines.get_za3lpa$(this.lineNumber - 1 | 0);
    }
  });
  Object.defineProperty(Section.prototype, 'substring', {
    get: function () {
      var $receiver = this.source.lines.get_za3lpa$(this.lineNumber - 1 | 0);
      var startIndex = this.lineIndex;
      var endIndex = this.lineIndex + this.length | 0;
      return $receiver.substring(startIndex, endIndex);
    }
  });
  Section.prototype.span_pdml0f$ = function (other) {
    var tmp$;
    if (((tmp$ = this.source) != null ? tmp$.equals(other.source) : null) && this.lineNumber === other.lineNumber) {
      var a = this.lineIndex;
      var b = other.lineIndex;
      var min = Math_0.min(a, b);
      var a_0 = this.lineIndex + this.length | 0;
      var b_0 = other.lineIndex + other.length | 0;
      var max = Math_0.max(a_0, b_0);
      return new Section(this.source, this.lineNumber, min, max - min | 0);
    }throw IllegalStateException_init('section sources');
  };
  Section.prototype.toString = function () {
    return '(' + this.source.name + ':' + this.lineNumber + ':' + this.lineIndex + ')';
  };
  Section.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Section',
    interfaces: []
  };
  Section.prototype.component1 = function () {
    return this.source;
  };
  Section.prototype.component2 = function () {
    return this.lineNumber;
  };
  Section.prototype.component3 = function () {
    return this.lineIndex;
  };
  Section.prototype.component4 = function () {
    return this.length;
  };
  Section.prototype.copy_ne4z2l$ = function (source, lineNumber, lineIndex, length) {
    return new Section(source === void 0 ? this.source : source, lineNumber === void 0 ? this.lineNumber : lineNumber, lineIndex === void 0 ? this.lineIndex : lineIndex, length === void 0 ? this.length : length);
  };
  Section.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.source) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineNumber) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.length) | 0;
    return result;
  };
  Section.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.source, other.source) && Kotlin.equals(this.lineNumber, other.lineNumber) && Kotlin.equals(this.lineIndex, other.lineIndex) && Kotlin.equals(this.length, other.length)))));
  };
  function Sectional() {
  }
  Sectional.prototype.span_p684zu$ = function (other) {
    return this.section.span_pdml0f$(other.section);
  };
  Sectional.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Sectional',
    interfaces: []
  };
  function Source(content, name, path) {
    if (name === void 0)
      name = '?';
    if (path === void 0)
      path = '!!no path!!';
    this.content = content;
    this.name = name;
    this.path = path;
    this.lines = lines(this.content);
  }
  Source.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Source',
    interfaces: []
  };
  Source.prototype.component1 = function () {
    return this.content;
  };
  Source.prototype.component2 = function () {
    return this.name;
  };
  Source.prototype.component3 = function () {
    return this.path;
  };
  Source.prototype.copy_6hosri$ = function (content, name, path) {
    return new Source(content === void 0 ? this.content : content, name === void 0 ? this.name : name, path === void 0 ? this.path : path);
  };
  Source.prototype.toString = function () {
    return 'Source(content=' + Kotlin.toString(this.content) + (', name=' + Kotlin.toString(this.name)) + (', path=' + Kotlin.toString(this.path)) + ')';
  };
  Source.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    return result;
  };
  Source.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.content, other.content) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.path, other.path)))));
  };
  function Grammar(prefixParsers, infixParsers) {
    if (prefixParsers === void 0)
      prefixParsers = emptyMap();
    if (infixParsers === void 0)
      infixParsers = emptyMap();
    this.prefixParsers = prefixParsers;
    this.infixParsers = infixParsers;
  }
  Grammar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Grammar',
    interfaces: []
  };
  Grammar.prototype.component1 = function () {
    return this.prefixParsers;
  };
  Grammar.prototype.component2 = function () {
    return this.infixParsers;
  };
  Grammar.prototype.copy_bdhv32$ = function (prefixParsers, infixParsers) {
    return new Grammar(prefixParsers === void 0 ? this.prefixParsers : prefixParsers, infixParsers === void 0 ? this.infixParsers : infixParsers);
  };
  Grammar.prototype.toString = function () {
    return 'Grammar(prefixParsers=' + Kotlin.toString(this.prefixParsers) + (', infixParsers=' + Kotlin.toString(this.infixParsers)) + ')';
  };
  Grammar.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.prefixParsers) | 0;
    result = result * 31 + Kotlin.hashCode(this.infixParsers) | 0;
    return result;
  };
  Grammar.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.prefixParsers, other.prefixParsers) && Kotlin.equals(this.infixParsers, other.infixParsers)))));
  };
  function InfixParser() {
  }
  InfixParser.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InfixParser',
    interfaces: []
  };
  function Parser() {
  }
  Parser.prototype.parse_r7b30y$ = function (source, lexer) {
    return this.parse_7y97bu$(lexer.parseToList_llobtt$(source));
  };
  Parser.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Parser',
    interfaces: []
  };
  function ParserContext() {
  }
  ParserContext.prototype.parseExpression_za3lpa$ = function (precedence, callback$default) {
    if (precedence === void 0)
      precedence = 0;
    return callback$default ? callback$default(precedence) : this.parseExpression_za3lpa$$default(precedence);
  };
  ParserContext.prototype.parseExpression_u6b096$$default = function ($receiver, precedence) {
    return this.withGrammar_sxynet$(this.grammar).parseExpression_za3lpa$(precedence);
  };
  ParserContext.prototype.parseExpression_u6b096$ = function ($receiver, precedence, callback$default) {
    if (precedence === void 0)
      precedence = 0;
    return callback$default ? callback$default($receiver, precedence) : this.parseExpression_u6b096$$default($receiver, precedence);
  };
  ParserContext.prototype.peek_za3lpa$ = function (distance, callback$default) {
    if (distance === void 0)
      distance = 0;
    return callback$default ? callback$default(distance) : this.peek_za3lpa$$default(distance);
  };
  ParserContext.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ParserContext',
    interfaces: []
  };
  function PrefixParser() {
  }
  PrefixParser.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PrefixParser',
    interfaces: []
  };
  function SyntaxException(message, position) {
    RuntimeException_init(message + ' at ' + position, this);
    this.position = position;
    this.name = 'SyntaxException';
  }
  SyntaxException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SyntaxException',
    interfaces: [RuntimeException]
  };
  function Token(type, value, section) {
    this.type = type;
    this.value = value;
    this.section_t9z7rp$_0 = section;
  }
  Object.defineProperty(Token.prototype, 'section', {
    get: function () {
      return this.section_t9z7rp$_0;
    }
  });
  Token.prototype.toString = function () {
    return this.type.toString() + '[' + this.value + '] ' + this.section;
  };
  Token.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Token',
    interfaces: [Sectional]
  };
  Token.prototype.component1 = function () {
    return this.type;
  };
  Token.prototype.component2 = function () {
    return this.value;
  };
  Token.prototype.component3 = function () {
    return this.section;
  };
  Token.prototype.copy_e3j0u$ = function (type, value, section) {
    return new Token(type === void 0 ? this.type : type, value === void 0 ? this.value : value, section === void 0 ? this.section : section);
  };
  Token.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.section) | 0;
    return result;
  };
  Token.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.value, other.value) && Kotlin.equals(this.section, other.section)))));
  };
  function isLetter($receiver) {
    return (new CharRange(97, 122)).contains_mef7kx$($receiver) || (new CharRange(65, 90)).contains_mef7kx$($receiver);
  }
  function isDigit($receiver) {
    return (new CharRange(48, 57)).contains_mef7kx$($receiver);
  }
  function isLetterOrDigit($receiver) {
    return isLetter($receiver) || isDigit($receiver);
  }
  function section($receiver, offset, length) {
    if (length === void 0)
      length = 0;
    return new Section($receiver.source, $receiver.lineNumber, $receiver.lineIndex - length - offset | 0, length + offset | 0);
  }
  function makeToken($receiver, tokenType, offset) {
    if (offset === void 0)
      offset = 1;
    return makeToken_0($receiver, tokenType, '', offset);
  }
  function makeToken_0($receiver, tokenType, string, offset) {
    if (offset === void 0)
      offset = 0;
    return new Token(tokenType, string, new Section($receiver.source, $receiver.lineNumber, $receiver.lineIndex - string.length - offset | 0, string.length + offset | 0));
  }
  function readIdentifier($receiver, firstChar) {
    if (firstChar === void 0)
      firstChar = null;
    var buf = StringBuilder_init();
    if (firstChar != null) {
      var $receiver_0 = toBoxedChar(firstChar);
      getCallableRef('append', function ($receiver, value) {
        return $receiver.append_s8itvh$(unboxChar(value));
      }.bind(null, buf))($receiver_0);
    }while ($receiver.hasNext()) {
      var cc = unboxChar($receiver.peek());
      if (isLetterOrDigit(cc) || cc === 95) {
        buf.append_s8itvh$(cc);
        unboxChar($receiver.next());
      } else {
        break;
      }
    }
    return buf.toString();
  }
  function readString($receiver, delimiter) {
    var buf = StringBuilder_init();
    var eol = false;
    while ($receiver.hasNext()) {
      var c = unboxChar($receiver.peek());
      if (c === delimiter) {
        $receiver.next();
        eol = true;
        break;
      } else {
        $receiver.next();
        buf.append_s8itvh$(c);
      }
    }
    if (!eol) {
      throw IllegalStateException_init('Unterminated string');
    }return buf.toString();
  }
  function readNumber($receiver, c) {
    var tmp$, tmp$_0, tmp$_1;
    var buf = StringBuilder_init();
    if (c === 48) {
      if ($receiver.match_s8itvh$(120)) {
        fillBufferNumbers($receiver, buf, true);
        var isLong = $receiver.match_s8itvh$(108) || $receiver.match_s8itvh$(76);
        var s = buf.toString();
        tmp$ = toIntOrNull(s, 16);
        if (tmp$ == null) {
          return new LexicalNumber$Invalid(buf.toString());
        }var number = tmp$;
        return new LexicalNumber$Integer(s, number, 16, isLong);
      } else if ($receiver.match_s8itvh$(98)) {
        fillBufferNumbers($receiver, buf, false);
        var isLong_0 = $receiver.match_s8itvh$(108) || $receiver.match_s8itvh$(76);
        var s_0 = buf.toString();
        tmp$_0 = toIntOrNull(s_0, 2);
        if (tmp$_0 == null) {
          return new LexicalNumber$Invalid(buf.toString());
        }var number_0 = tmp$_0;
        return new LexicalNumber$Integer(s_0, number_0, 2, isLong_0);
      } else {
        buf.append_s8itvh$(48);
      }
    } else {
      buf.append_s8itvh$(c);
    }
    fillBufferNumbers($receiver, buf, false);
    if (unboxChar($receiver.peek()) === 46 && isDigit(unboxChar($receiver.peek_za3lpa$(1)))) {
      $receiver.next();
      buf.append_s8itvh$(46);
      fillBufferNumbers($receiver, buf, false);
      var isFloat = $receiver.match_s8itvh$(102) || $receiver.match_s8itvh$(70);
      var s_1 = buf.toString();
      tmp$_1 = new LexicalNumber$Decimal(s_1, toDouble(s_1), isFloat);
    } else {
      var s_2 = buf.toString();
      var int = toIntOrNull_0(s_2);
      if (int != null) {
        var isLong_1 = $receiver.match_s8itvh$(108) || $receiver.match_s8itvh$(76);
        tmp$_1 = new LexicalNumber$Integer(s_2, toInt(s_2), 10, isLong_1);
      } else {
        tmp$_1 = new LexicalNumber$Invalid(buf.toString());
      }
    }
    return tmp$_1;
  }
  function LexicalNumber() {
  }
  function LexicalNumber$Invalid(string) {
    LexicalNumber.call(this);
    this.string_fidsft$_0 = string;
  }
  Object.defineProperty(LexicalNumber$Invalid.prototype, 'string', {
    get: function () {
      return this.string_fidsft$_0;
    }
  });
  LexicalNumber$Invalid.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Invalid',
    interfaces: [LexicalNumber]
  };
  LexicalNumber$Invalid.prototype.component1 = function () {
    return this.string;
  };
  LexicalNumber$Invalid.prototype.copy_61zpoe$ = function (string) {
    return new LexicalNumber$Invalid(string === void 0 ? this.string : string);
  };
  LexicalNumber$Invalid.prototype.toString = function () {
    return 'Invalid(string=' + Kotlin.toString(this.string) + ')';
  };
  LexicalNumber$Invalid.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.string) | 0;
    return result;
  };
  LexicalNumber$Invalid.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.string, other.string))));
  };
  function LexicalNumber$Decimal(string, value, isFloat) {
    if (isFloat === void 0)
      isFloat = false;
    LexicalNumber.call(this);
    this.string_el7cip$_0 = string;
    this.value = value;
    this.isFloat = isFloat;
  }
  Object.defineProperty(LexicalNumber$Decimal.prototype, 'string', {
    get: function () {
      return this.string_el7cip$_0;
    }
  });
  LexicalNumber$Decimal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Decimal',
    interfaces: [LexicalNumber]
  };
  LexicalNumber$Decimal.prototype.component1 = function () {
    return this.string;
  };
  LexicalNumber$Decimal.prototype.component2 = function () {
    return this.value;
  };
  LexicalNumber$Decimal.prototype.component3 = function () {
    return this.isFloat;
  };
  LexicalNumber$Decimal.prototype.copy_1truf$ = function (string, value, isFloat) {
    return new LexicalNumber$Decimal(string === void 0 ? this.string : string, value === void 0 ? this.value : value, isFloat === void 0 ? this.isFloat : isFloat);
  };
  LexicalNumber$Decimal.prototype.toString = function () {
    return 'Decimal(string=' + Kotlin.toString(this.string) + (', value=' + Kotlin.toString(this.value)) + (', isFloat=' + Kotlin.toString(this.isFloat)) + ')';
  };
  LexicalNumber$Decimal.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.string) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.isFloat) | 0;
    return result;
  };
  LexicalNumber$Decimal.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.string, other.string) && Kotlin.equals(this.value, other.value) && Kotlin.equals(this.isFloat, other.isFloat)))));
  };
  function LexicalNumber$Integer(string, value, radix, isLong) {
    if (radix === void 0)
      radix = 10;
    if (isLong === void 0)
      isLong = false;
    LexicalNumber.call(this);
    this.string_tykk5q$_0 = string;
    this.value = value;
    this.radix = radix;
    this.isLong = isLong;
  }
  Object.defineProperty(LexicalNumber$Integer.prototype, 'string', {
    get: function () {
      return this.string_tykk5q$_0;
    }
  });
  LexicalNumber$Integer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Integer',
    interfaces: [LexicalNumber]
  };
  LexicalNumber$Integer.prototype.component1 = function () {
    return this.string;
  };
  LexicalNumber$Integer.prototype.component2 = function () {
    return this.value;
  };
  LexicalNumber$Integer.prototype.component3 = function () {
    return this.radix;
  };
  LexicalNumber$Integer.prototype.component4 = function () {
    return this.isLong;
  };
  LexicalNumber$Integer.prototype.copy_yib5kn$ = function (string, value, radix, isLong) {
    return new LexicalNumber$Integer(string === void 0 ? this.string : string, value === void 0 ? this.value : value, radix === void 0 ? this.radix : radix, isLong === void 0 ? this.isLong : isLong);
  };
  LexicalNumber$Integer.prototype.toString = function () {
    return 'Integer(string=' + Kotlin.toString(this.string) + (', value=' + Kotlin.toString(this.value)) + (', radix=' + Kotlin.toString(this.radix)) + (', isLong=' + Kotlin.toString(this.isLong)) + ')';
  };
  LexicalNumber$Integer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.string) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.radix) | 0;
    result = result * 31 + Kotlin.hashCode(this.isLong) | 0;
    return result;
  };
  LexicalNumber$Integer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.string, other.string) && Kotlin.equals(this.value, other.value) && Kotlin.equals(this.radix, other.radix) && Kotlin.equals(this.isLong, other.isLong)))));
  };
  LexicalNumber.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexicalNumber',
    interfaces: []
  };
  function fillBufferNumbers($receiver, buf, allowHex) {
    while ($receiver.hasNext()) {
      var c = unboxChar($receiver.peek());
      if (isDigit(c) || (allowHex && (new CharRange(65, 70)).contains_mef7kx$(c) || (new CharRange(97, 102)).contains_mef7kx$(c))) {
        buf.append_s8itvh$(unboxChar($receiver.next()));
      } else {
        break;
      }
    }
  }
  function ensureEOF($receiver, block) {
    try {
      return block();
    }finally {
      if (!$receiver.eof)
        throw new SyntaxException("Should've reached end of content", $receiver.eat().section);
    }
  }
  function eatMulti($receiver, types) {
    var transform = getCallableRef('eat', function ($receiver, type) {
      return $receiver.eat_11rb$(type);
    }.bind(null, $receiver));
    var destination = ArrayList_init_0(types.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== types.length; ++tmp$) {
      var item = types[tmp$];
      destination.add_11rb$(transform(item));
    }
    return destination;
  }
  function GrammarBuilder() {
    this.prefixParsers_0 = LinkedHashMap_init();
    this.infixParsers_0 = LinkedHashMap_init();
  }
  GrammarBuilder.prototype.import_ha5jj$$default = function (override, grammars) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== grammars.length; ++tmp$) {
      var element = grammars[tmp$];
      var tmp$_0;
      tmp$_0 = element.prefixParsers.entries.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var k = element_0.key;
        var v = element_0.value;
        this.prefix_bb9afj$(k, v, override);
      }
      var tmp$_1;
      tmp$_1 = element.infixParsers.entries.iterator();
      while (tmp$_1.hasNext()) {
        var element_1 = tmp$_1.next();
        var k_0 = element_1.key;
        var v_0 = element_1.value;
        this.infix_wdcr7z$(k_0, v_0, override);
      }
    }
  };
  GrammarBuilder.prototype.prefix_bb9afj$$default = function (type, parselet, override) {
    var tmp$ = !override;
    if (tmp$) {
      var $receiver = this.prefixParsers_0;
      var tmp$_0;
      tmp$ = (Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(type);
    }if (tmp$) {
      throw IllegalArgumentException_init('Prefix \u1E55arselet associated with ' + type + ' already exists. Did you forget to enable overriding?');
    }this.prefixParsers_0.put_xwzc9p$(type, parselet);
  };
  GrammarBuilder.prototype.prefix_ggj8ix$$default = function (type, override, block) {
    this.prefix_bb9afj$(type, new PrefixParserImpl(block));
  };
  GrammarBuilder.prototype.infix_wdcr7z$$default = function (type, parselet, override) {
    var tmp$ = !override;
    if (tmp$) {
      var $receiver = this.infixParsers_0;
      var tmp$_0;
      tmp$ = (Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(type);
    }if (tmp$) {
      throw IllegalArgumentException_init('Infix parselet associated with ' + type + ' already exists. Did you forget to enable overriding?');
    }this.infixParsers_0.put_xwzc9p$(type, parselet);
  };
  GrammarBuilder.prototype.infix_lfjh7$$default = function (type, precedence, override, block) {
    this.infix_wdcr7z$(type, new InfixParserImpl(precedence, block));
  };
  GrammarBuilder.prototype.build = function () {
    return new Grammar(toMap(this.prefixParsers_0), toMap(this.infixParsers_0));
  };
  GrammarBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GrammarBuilder',
    interfaces: [GrammarDSL]
  };
  function InfixParserImpl(precedence, block) {
    this.precedence_r4qar1$_0 = precedence;
    this.block_0 = block;
  }
  Object.defineProperty(InfixParserImpl.prototype, 'precedence', {
    get: function () {
      return this.precedence_r4qar1$_0;
    }
  });
  InfixParserImpl.prototype.parse_eufodf$ = function (ctx, left, token) {
    return this.block_0(ctx, left, token);
  };
  InfixParserImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InfixParserImpl',
    interfaces: [InfixParser]
  };
  function LexerImpl(root) {
    this.matcher_0 = LexerImpl$LexerImpl$LexerMatcher_init(root);
  }
  LexerImpl.prototype.parse_mi27kl$ = function (source, output) {
    var ctx = new LexerImpl$ContextImpl(this, source, output);
    while (ctx.hasNext()) {
      ctx.read = 0;
      var function_0 = this.doMatch_0(this.matcher_0, ctx).onMatch;
      if (function_0 != null) {
        function_0(ctx, ctx.curr);
      } else {
        this.skipUntilMatch_0(this.matcher_0, ctx);
        var section_0 = section(ctx, ctx.read);
        throw new SyntaxException("No matcher registered for '" + section_0.substring + "'", section_0);
      }
      if (ctx.read === 0) {
        throw IllegalStateException_init('No further characters consumed.');
      }}
  };
  function LexerImpl$LexerMatcher(trie, predicates, onMatch) {
    this.trie = trie;
    this.predicates = predicates;
    this.onMatch = onMatch;
  }
  LexerImpl$LexerMatcher.prototype.tryMatchChild_s8itvh$ = function (char) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = this.trie.get_11rb$(toBoxedChar(char))) != null)
      tmp$_1 = tmp$_0;
    else {
      var $receiver = this.predicates;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_2;
        tmp$_2 = $receiver.iterator();
        while (tmp$_2.hasNext()) {
          var element = tmp$_2.next();
          if (element.first(toBoxedChar(char))) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }}
        firstOrNull$result = null;
      }
       while (false);
      tmp$_1 = (tmp$ = firstOrNull$result) != null ? tmp$.second : null;
    }
    return tmp$_1;
  };
  LexerImpl$LexerMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerMatcher',
    interfaces: []
  };
  function LexerImpl$LexerImpl$LexerMatcher_init(m, $this) {
    $this = $this || Object.create(LexerImpl$LexerMatcher.prototype);
    var $receiver = m.trie;
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!element.value.isEmpty()) {
        destination.put_xwzc9p$(element.key, element.value);
      }}
    var destination_0 = LinkedHashMap_init_0(mapCapacity(destination.size));
    var tmp$_0;
    tmp$_0 = destination.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      destination_0.put_xwzc9p$(element_0.key, LexerImpl$LexerImpl$LexerMatcher_init(element_0.value));
    }
    var $receiver_0 = m.predicates;
    var destination_1 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      if (!element_1.second.isEmpty())
        destination_1.add_11rb$(element_1);
    }
    var destination_2 = ArrayList_init_0(collectionSizeOrDefault(destination_1, 10));
    var tmp$_2;
    tmp$_2 = destination_1.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      destination_2.add_11rb$(to(item.first, LexerImpl$LexerImpl$LexerMatcher_init(item.second)));
    }
    LexerImpl$LexerMatcher.call($this, destination_0, destination_2, m.onMatch);
    return $this;
  }
  LexerImpl$LexerMatcher.prototype.component1 = function () {
    return this.trie;
  };
  LexerImpl$LexerMatcher.prototype.component2 = function () {
    return this.predicates;
  };
  LexerImpl$LexerMatcher.prototype.component3 = function () {
    return this.onMatch;
  };
  LexerImpl$LexerMatcher.prototype.copy_h01eeh$ = function (trie, predicates, onMatch) {
    return new LexerImpl$LexerMatcher(trie === void 0 ? this.trie : trie, predicates === void 0 ? this.predicates : predicates, onMatch === void 0 ? this.onMatch : onMatch);
  };
  LexerImpl$LexerMatcher.prototype.toString = function () {
    return 'LexerMatcher(trie=' + Kotlin.toString(this.trie) + (', predicates=' + Kotlin.toString(this.predicates)) + (', onMatch=' + Kotlin.toString(this.onMatch)) + ')';
  };
  LexerImpl$LexerMatcher.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.trie) | 0;
    result = result * 31 + Kotlin.hashCode(this.predicates) | 0;
    result = result * 31 + Kotlin.hashCode(this.onMatch) | 0;
    return result;
  };
  LexerImpl$LexerMatcher.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.trie, other.trie) && Kotlin.equals(this.predicates, other.predicates) && Kotlin.equals(this.onMatch, other.onMatch)))));
  };
  LexerImpl.prototype.skipUntilMatch_0 = function ($receiver, ctx) {
    if (!ctx.hasNext())
      return;
    var char = unboxChar(ctx.peek());
    if ($receiver.tryMatchChild_s8itvh$(char) != null || char === 10)
      return;
    ctx.next();
    this.skipUntilMatch_0($receiver, ctx);
  };
  LexerImpl.prototype.doMatch_0 = function ($receiver, ctx, eat) {
    if (eat === void 0)
      eat = false;
    var tmp$;
    if (eat)
      ctx.next();
    tmp$ = $receiver.tryMatchChild_s8itvh$(unboxChar(ctx.peek()));
    if (tmp$ == null) {
      return $receiver;
    }return this.doMatch_0(tmp$, ctx, true);
  };
  function LexerImpl$ContextImpl($outer, source, output) {
    this.$outer = $outer;
    this.source_29hdz4$_0 = source;
    this.output_0 = output;
    this.reader_lzko14$_0 = new StringReader(this.source.content);
    this.read = 0;
    this.lineNumber_ux4mta$_0 = 1;
    this.lineIndex_an9vmt$_0 = 0;
    this.curr = toBoxedChar(toChar(-1));
  }
  Object.defineProperty(LexerImpl$ContextImpl.prototype, 'source', {
    get: function () {
      return this.source_29hdz4$_0;
    }
  });
  Object.defineProperty(LexerImpl$ContextImpl.prototype, 'reader', {
    get: function () {
      return this.reader_lzko14$_0;
    }
  });
  Object.defineProperty(LexerImpl$ContextImpl.prototype, 'lineNumber', {
    get: function () {
      return this.lineNumber_ux4mta$_0;
    },
    set: function (lineNumber) {
      this.lineNumber_ux4mta$_0 = lineNumber;
    }
  });
  Object.defineProperty(LexerImpl$ContextImpl.prototype, 'lineIndex', {
    get: function () {
      return this.lineIndex_an9vmt$_0;
    },
    set: function (lineIndex) {
      this.lineIndex_an9vmt$_0 = lineIndex;
    }
  });
  LexerImpl$ContextImpl.prototype.peek = function () {
    this.reader.mark_za3lpa$(1);
    var c = toChar(this.reader.read());
    this.reader.reset();
    return toBoxedChar(c);
  };
  function LexerImpl$ContextImpl$peek$lambda(this$ContextImpl) {
    return function () {
      var tmp$;
      var $receiver = this$ContextImpl.reader.read();
      return toBoxedChar((tmp$ = !($receiver === -1) ? $receiver : null) != null ? toChar(tmp$) : null);
    };
  }
  LexerImpl$ContextImpl.prototype.peek_za3lpa$ = function (distance) {
    var tmp$;
    this.reader.mark_za3lpa$(distance + 1 | 0);
    var chars = toList(take(generateSequence(LexerImpl$ContextImpl$peek$lambda(this)), distance + 1 | 0));
    if (chars.size < (distance + 1 | 0))
      tmp$ = toChar(-1);
    else
      tmp$ = unboxChar(chars.get_za3lpa$(distance));
    var result = tmp$;
    this.reader.reset();
    return toBoxedChar(result);
  };
  function LexerImpl$ContextImpl$peekString$lambda(this$ContextImpl) {
    return function () {
      var tmp$;
      var $receiver = this$ContextImpl.reader.read();
      return toBoxedChar((tmp$ = !($receiver === -1) ? $receiver : null) != null ? toChar(tmp$) : null);
    };
  }
  LexerImpl$ContextImpl.prototype.peekString_za3lpa$ = function (length) {
    this.reader.mark_za3lpa$(length);
    var chars = toList(take(generateSequence(LexerImpl$ContextImpl$peekString$lambda(this)), length));
    this.reader.reset();
    return String_0(toCharArray(chars));
  };
  LexerImpl$ContextImpl.prototype.match_s8itvh$ = function (expect) {
    var tmp$;
    if (unboxChar(this.peek()) === expect) {
      this.next();
      tmp$ = true;
    } else {
      tmp$ = false;
    }
    return tmp$;
  };
  LexerImpl$ContextImpl.prototype.hasNext = function () {
    this.reader.mark_za3lpa$(1);
    var i = this.reader.read();
    this.reader.reset();
    return i > 0;
  };
  LexerImpl$ContextImpl.prototype.next = function () {
    this.read = this.read + 1 | 0;
    var c = toChar(this.reader.read());
    if (c === 10) {
      this.lineNumber = this.lineNumber + 1 | 0;
      this.lineIndex = 0;
    } else {
      this.lineIndex = this.lineIndex + 1 | 0;
    }
    this.curr = toBoxedChar(c);
    return toBoxedChar(c);
  };
  LexerImpl$ContextImpl.prototype.nextString_za3lpa$ = function (length) {
    var tmp$;
    var buf = StringBuilder_init_0(length);
    var i = 0;
    while (this.hasNext() && (tmp$ = i, i = tmp$ + 1 | 0, tmp$) < length) {
      buf.append_s8itvh$(unboxChar(this.next()));
    }
    return buf.toString();
  };
  LexerImpl$ContextImpl.prototype.process_11rb$ = function (token) {
    this.output_0(token);
  };
  LexerImpl$ContextImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContextImpl',
    interfaces: [LexerContext]
  };
  LexerImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerImpl',
    interfaces: [Lexer]
  };
  function MatcherImpl() {
    this.trie = LinkedHashMap_init();
    this.predicates = ArrayList_init();
    this.onMatch = null;
  }
  MatcherImpl.prototype.isEmpty = function () {
    return this.trie.isEmpty() && this.predicates.isEmpty() && this.onMatch == null;
  };
  MatcherImpl.prototype.matching_61zpoe$ = function (string) {
    var tmp$;
    switch (string.length) {
      case 0:
        tmp$ = this;
        break;
      case 1:
        tmp$ = this.matching_s8itvh$(first(string));
        break;
      default:var $receiver = string.substring(1);
        var tmp$_0;
        var accumulator = this.matching_s8itvh$(first(string));
        tmp$_0 = iterator($receiver);
        while (tmp$_0.hasNext()) {
          var element = unboxChar(tmp$_0.next());
          accumulator = accumulator.matching_s8itvh$(unboxChar(toBoxedChar(element)));
        }

        tmp$ = accumulator;
        break;
    }
    return tmp$;
  };
  MatcherImpl.prototype.matching_s8itvh$ = function (char) {
    var $receiver = this.trie;
    var key = toBoxedChar(char);
    var tmp$;
    var value = $receiver.get_11rb$(key);
    if (value == null) {
      var answer = new MatcherImpl();
      $receiver.put_xwzc9p$(key, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    return tmp$;
  };
  MatcherImpl.prototype.matching_akknk2$ = function (block) {
    var m = new MatcherImpl();
    this.predicates.add_11rb$(to(block, m));
    return m;
  };
  MatcherImpl.prototype.configure_t5ujie$ = function (block) {
    this.onMatch = block;
  };
  MatcherImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MatcherImpl',
    interfaces: [LexerDSL]
  };
  function ParserImpl(grammar, block) {
    this.grammar_oashss$_0 = grammar;
    this.block_0 = block;
  }
  Object.defineProperty(ParserImpl.prototype, 'grammar', {
    get: function () {
      return this.grammar_oashss$_0;
    }
  });
  ParserImpl.prototype.parse_7y97bu$ = function (tokens) {
    return this.block_0(new ParserImpl$ContextImpl(this, tokens, this.grammar));
  };
  function ParserImpl$ContextImpl($outer, source, grammar) {
    this.$outer = $outer;
    this.grammar_5atiqr$_0 = grammar;
    this.tokens_0 = toMutableList(source);
    this.index_dle8x4$_0 = 0;
  }
  Object.defineProperty(ParserImpl$ContextImpl.prototype, 'grammar', {
    get: function () {
      return this.grammar_5atiqr$_0;
    }
  });
  function ParserImpl$ContextImpl$ChildContextImpl($outer, grammar) {
    this.$outer = $outer;
    this.grammar_mwoigy$_0 = grammar;
    this.$delegate_uplf99$_0 = this.$outer;
  }
  Object.defineProperty(ParserImpl$ContextImpl$ChildContextImpl.prototype, 'grammar', {
    get: function () {
      return this.grammar_mwoigy$_0;
    }
  });
  ParserImpl$ContextImpl$ChildContextImpl.prototype.parseExpression_za3lpa$$default = function (precedence) {
    return this.$outer.parseExpr_1328uj$(this.grammar, precedence);
  };
  Object.defineProperty(ParserImpl$ContextImpl$ChildContextImpl.prototype, 'eof', {
    get: function () {
      return this.$delegate_uplf99$_0.eof;
    }
  });
  Object.defineProperty(ParserImpl$ContextImpl$ChildContextImpl.prototype, 'index', {
    get: function () {
      return this.$delegate_uplf99$_0.index;
    }
  });
  Object.defineProperty(ParserImpl$ContextImpl$ChildContextImpl.prototype, 'last', {
    get: function () {
      return this.$delegate_uplf99$_0.last;
    }
  });
  ParserImpl$ContextImpl$ChildContextImpl.prototype.back = function () {
    return this.$delegate_uplf99$_0.back();
  };
  ParserImpl$ContextImpl$ChildContextImpl.prototype.eat = function () {
    return this.$delegate_uplf99$_0.eat();
  };
  ParserImpl$ContextImpl$ChildContextImpl.prototype.eat_11rb$ = function (type) {
    return this.$delegate_uplf99$_0.eat_11rb$(type);
  };
  ParserImpl$ContextImpl$ChildContextImpl.prototype.match_11rb$ = function (type) {
    return this.$delegate_uplf99$_0.match_11rb$(type);
  };
  ParserImpl$ContextImpl$ChildContextImpl.prototype.matchAny_7l2mas$ = function (type) {
    return this.$delegate_uplf99$_0.matchAny_7l2mas$(type);
  };
  ParserImpl$ContextImpl$ChildContextImpl.prototype.nextIs_11rb$ = function (type) {
    return this.$delegate_uplf99$_0.nextIs_11rb$(type);
  };
  ParserImpl$ContextImpl$ChildContextImpl.prototype.nextIsAny_7l2mas$ = function (types) {
    return this.$delegate_uplf99$_0.nextIsAny_7l2mas$(types);
  };
  ParserImpl$ContextImpl$ChildContextImpl.prototype.peek_za3lpa$$default = function (distance) {
    return this.$delegate_uplf99$_0.peek_za3lpa$$default(distance);
  };
  ParserImpl$ContextImpl$ChildContextImpl.prototype.peekAheadUntil_7l2mas$ = function (type) {
    return this.$delegate_uplf99$_0.peekAheadUntil_7l2mas$(type);
  };
  ParserImpl$ContextImpl$ChildContextImpl.prototype.skipUntil_7l2mas$ = function (type) {
    return this.$delegate_uplf99$_0.skipUntil_7l2mas$(type);
  };
  ParserImpl$ContextImpl$ChildContextImpl.prototype.withGrammar_sxynet$ = function (grammar) {
    return this.$delegate_uplf99$_0.withGrammar_sxynet$(grammar);
  };
  ParserImpl$ContextImpl$ChildContextImpl.prototype.parseExpression_u6b096$$default = function ($receiver, precedence) {
    return this.$delegate_uplf99$_0.parseExpression_u6b096$$default($receiver, precedence);
  };
  ParserImpl$ContextImpl$ChildContextImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChildContextImpl',
    interfaces: [ParserContext]
  };
  Object.defineProperty(ParserImpl$ContextImpl.prototype, 'index', {
    get: function () {
      return this.index_dle8x4$_0;
    },
    set: function (index) {
      this.index_dle8x4$_0 = index;
    }
  });
  Object.defineProperty(ParserImpl$ContextImpl.prototype, 'eof', {
    get: function () {
      return this.index === this.tokens_0.size;
    }
  });
  Object.defineProperty(ParserImpl$ContextImpl.prototype, 'last', {
    get: function () {
      return this.tokens_0.get_za3lpa$(this.index - 1 | 0);
    }
  });
  ParserImpl$ContextImpl.prototype.withGrammar_sxynet$ = function (grammar) {
    return new ParserImpl$ContextImpl$ChildContextImpl(this, grammar);
  };
  ParserImpl$ContextImpl.prototype.parseExpression_za3lpa$$default = function (precedence) {
    return this.parseExpr_1328uj$(this.grammar, precedence);
  };
  ParserImpl$ContextImpl.prototype.eat = function () {
    var tmp$;
    if (this.eof)
      throw new SyntaxException('Expected token but reached end of file', this.last.section);
    return this.tokens_0.get_za3lpa$((tmp$ = this.index, this.index = tmp$ + 1 | 0, tmp$));
  };
  ParserImpl$ContextImpl.prototype.eat_11rb$ = function (type) {
    if (this.eof)
      throw new SyntaxException('Expected ' + type + ' but reached end of file', this.last.section);
    var token = this.peek_za3lpa$();
    if (!equals(token.type, type)) {
      throw new SyntaxException("Expected '" + type + "' but found '" + token.type + "'.", token.section);
    }return this.eat();
  };
  ParserImpl$ContextImpl.prototype.match_11rb$ = function (type) {
    var tmp$;
    if (this.nextIs_11rb$(type)) {
      this.eat();
      tmp$ = true;
    } else {
      tmp$ = false;
    }
    return tmp$;
  };
  ParserImpl$ContextImpl.prototype.matchAny_7l2mas$ = function (type) {
    var tmp$;
    if (this.nextIsAny_7l2mas$(type.slice())) {
      this.eat();
      tmp$ = true;
    } else {
      tmp$ = false;
    }
    return tmp$;
  };
  ParserImpl$ContextImpl.prototype.back = function () {
    return this.tokens_0.get_za3lpa$((this.index = this.index - 1 | 0, this.index));
  };
  ParserImpl$ContextImpl.prototype.peek_za3lpa$$default = function (distance) {
    return this.tokens_0.get_za3lpa$(this.index + distance | 0);
  };
  ParserImpl$ContextImpl.prototype.nextIs_11rb$ = function (type) {
    return !this.eof && equals(this.peek_za3lpa$().type, type);
  };
  ParserImpl$ContextImpl.prototype.nextIsAny_7l2mas$ = function (types) {
    var tmp$ = !this.eof;
    if (tmp$) {
      var any$result;
      any$break: do {
        var tmp$_0;
        for (tmp$_0 = 0; tmp$_0 !== types.length; ++tmp$_0) {
          var element = types[tmp$_0];
          if (this.nextIs_11rb$(element)) {
            any$result = true;
            break any$break;
          }}
        any$result = false;
      }
       while (false);
      tmp$ = any$result;
    }return tmp$;
  };
  ParserImpl$ContextImpl.prototype.peekAheadUntil_7l2mas$ = function (type) {
    if (this.eof)
      return emptyList();
    var list = ArrayList_init();
    var distance = 0;
    while (!this.eof && !this.nextIsAny_7l2mas$(type.slice())) {
      var tmp$;
      var element = this.peek_za3lpa$((tmp$ = distance, distance = tmp$ + 1 | 0, tmp$));
      list.add_11rb$(element);
    }
    return list;
  };
  ParserImpl$ContextImpl.prototype.skipUntil_7l2mas$ = function (type) {
    while (!this.eof && !this.nextIsAny_7l2mas$(type.slice())) {
      this.eat();
    }
  };
  ParserImpl$ContextImpl.prototype.parseExpr_1328uj$ = function (grammar, precedence) {
    var tmp$, tmp$_0;
    var it = this.eat();
    var tmp$_1, tmp$_2;
    tmp$_2 = (tmp$_1 = grammar.prefixParsers.get_11rb$(it.type)) != null ? tmp$_1.parse_6srjs1$(this, it) : null;
    if (tmp$_2 == null) {
      throw new SyntaxException('Unexpected ' + it, it.section);
    }var left = {v: tmp$_2};
    while (!this.eof && precedence < ((tmp$_0 = (tmp$ = this.grammar.infixParsers.get_11rb$(this.peek_za3lpa$(0).type)) != null ? tmp$.precedence : null) != null ? tmp$_0 : 0)) {
      var it_0 = this.eat();
      var tmp$_3, tmp$_4;
      tmp$_4 = (tmp$_3 = grammar.infixParsers.get_11rb$(it_0.type)) != null ? tmp$_3.parse_eufodf$(this, left.v, it_0) : null;
      if (tmp$_4 == null) {
        throw new SyntaxException('Unexpected ' + it_0, it_0.section);
      }left.v = tmp$_4;
    }
    return left.v;
  };
  ParserImpl$ContextImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContextImpl',
    interfaces: [ParserContext]
  };
  ParserImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParserImpl',
    interfaces: [Parser]
  };
  function PrefixParserImpl(block) {
    this.block_0 = block;
  }
  PrefixParserImpl.prototype.parse_6srjs1$ = function (parser, token) {
    return this.block_0(parser, token);
  };
  PrefixParserImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrefixParserImpl',
    interfaces: [PrefixParser]
  };
  function main$lambda(it) {
    onLoad();
    return Unit;
  }
  function main() {
    window.addEventListener('load', EventListener(main$lambda));
  }
  function evaluator$lambda(it) {
    var x = numberToDouble(it[0]);
    return Math_0.log10(x);
  }
  function evaluator$lambda_0(it) {
    var x = numberToDouble(it[0]);
    return Math_0.log2(x);
  }
  function evaluator$lambda_1(it) {
    var x = numberToDouble(it[0]);
    return Math_0.log(x);
  }
  function evaluator$lambda_2(it) {
    var x = numberToDouble(it[0]);
    return Math_0.sin(x);
  }
  function evaluator$lambda_3(it) {
    var x = numberToDouble(it[0]);
    return Math_0.cos(x);
  }
  function evaluator$lambda_4(it) {
    var x = numberToDouble(it[0]);
    return Math_0.tan(x);
  }
  function evaluator$lambda_5(it) {
    return average(map(sequenceOf(it.slice()), getCallableRef('toDouble', function ($receiver) {
      return numberToDouble($receiver);
    })));
  }
  function evaluator$lambda_6(it) {
    return random(it, Random.Default);
  }
  function evaluator$lambda_7(it) {
    return numberToInt(it[0]);
  }
  function evaluator$lambda_8(it) {
    return numberToDouble(it[0]);
  }
  function evaluator$lambda_9(it) {
    var n = it[0];
    var tmp$;
    if (typeof n === 'number')
      tmp$ = abs(numberToInt(n));
    else {
      var x = numberToDouble(n);
      tmp$ = Math_0.abs(x);
    }
    return tmp$;
  }
  var evaluator;
  function solver$lambda(sides) {
    return coerceIn(numberToInt((Random.Default.nextDouble() * 0.9 + Random.Default.nextDouble() * Random.Default.nextDouble() * Random.Default.nextDouble() * 0.9) * sides), 0, sides - 1 | 0) + 1 | 0;
  }
  var solver;
  function onLoad$doDiceNotation$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.innerHTML = closure$it;
      return Unit;
    };
  }
  function onLoad$doDiceNotation(closure$input, closure$output) {
    return function () {
      try {
        var $receiver = parser.parse_r7b30y$(new Source(closure$input.value, 'input'), lexer);
        var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var item = tmp$.next();
          destination.add_11rb$(item.accept_b0gbpa$(solver));
        }
        var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
        var tmp$_0;
        tmp$_0 = destination.iterator();
        while (tmp$_0.hasNext()) {
          var item_0 = tmp$_0.next();
          destination_0.add_11rb$(item_0.accept_b0gbpa$(evaluator).toString() + ' \u27F5 ' + item_0);
        }
        var results = destination_0;
        closure$output.textContent = '';
        var tmp$_1;
        tmp$_1 = results.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          appendElement(closure$output, 'p', onLoad$doDiceNotation$lambda$lambda(element));
        }
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          closure$output.textContent = 'Error: ' + toString(e.message);
        } else
          throw e;
      }
    };
  }
  function onLoad$lambda(closure$doDiceNotation) {
    return function (it) {
      var tmp$;
      if (equals((Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : throwCCE()).key, 'Enter'))
        closure$doDiceNotation();
      return Unit;
    };
  }
  function onLoad$lambda_0(closure$doDiceNotation) {
    return function (it) {
      closure$doDiceNotation();
      return Unit;
    };
  }
  function onLoad() {
    var tmp$, tmp$_0, tmp$_1;
    var input = Kotlin.isType(tmp$ = document.getElementById('diceInput'), HTMLInputElement) ? tmp$ : throwCCE();
    var button = Kotlin.isType(tmp$_0 = document.getElementById('diceButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    var output = Kotlin.isType(tmp$_1 = document.getElementById('diceOutput'), HTMLDivElement) ? tmp$_1 : throwCCE();
    var doDiceNotation = onLoad$doDiceNotation(input, output);
    input.addEventListener('keyup', onLoad$lambda(doDiceNotation));
    button.onclick = onLoad$lambda_0(doDiceNotation);
  }
  var package$com = _.com || (_.com = {});
  var package$github = package$com.github || (package$com.github = {});
  var package$adriantodt = package$github.adriantodt || (package$github.adriantodt = {});
  var package$dicenotation = package$adriantodt.dicenotation || (package$adriantodt.dicenotation = {});
  Object.defineProperty(package$dicenotation, 'lexer', {
    get: function () {
      return lexer;
    }
  });
  Object.defineProperty(package$dicenotation, 'grammar', {
    get: function () {
      return grammar;
    }
  });
  Object.defineProperty(package$dicenotation, 'parser', {
    get: function () {
      return parser;
    }
  });
  Expr.Dice = Expr$Dice;
  Expr.SolvedDice = Expr$SolvedDice;
  Expr.Integer = Expr$Integer;
  Expr.Decimal = Expr$Decimal;
  Object.defineProperty(Expr$BinaryOp$Type, 'PLUS', {
    get: Expr$BinaryOp$Type$PLUS_getInstance
  });
  Object.defineProperty(Expr$BinaryOp$Type, 'MINUS', {
    get: Expr$BinaryOp$Type$MINUS_getInstance
  });
  Object.defineProperty(Expr$BinaryOp$Type, 'TIMES', {
    get: Expr$BinaryOp$Type$TIMES_getInstance
  });
  Object.defineProperty(Expr$BinaryOp$Type, 'DIVIDE', {
    get: Expr$BinaryOp$Type$DIVIDE_getInstance
  });
  Object.defineProperty(Expr$BinaryOp$Type, 'MODULUS', {
    get: Expr$BinaryOp$Type$MODULUS_getInstance
  });
  Object.defineProperty(Expr$BinaryOp$Type, 'POWER', {
    get: Expr$BinaryOp$Type$POWER_getInstance
  });
  Object.defineProperty(Expr$BinaryOp$Type, 'SHL', {
    get: Expr$BinaryOp$Type$SHL_getInstance
  });
  Object.defineProperty(Expr$BinaryOp$Type, 'SHR', {
    get: Expr$BinaryOp$Type$SHR_getInstance
  });
  Expr$BinaryOp.Type = Expr$BinaryOp$Type;
  Expr.BinaryOp = Expr$BinaryOp;
  Object.defineProperty(Expr$UnaryOp$Type, 'PLUS', {
    get: Expr$UnaryOp$Type$PLUS_getInstance
  });
  Object.defineProperty(Expr$UnaryOp$Type, 'MINUS', {
    get: Expr$UnaryOp$Type$MINUS_getInstance
  });
  Expr$UnaryOp.Type = Expr$UnaryOp$Type;
  Expr.UnaryOp = Expr$UnaryOp;
  Expr.Identifier = Expr$Identifier;
  Expr.Invocation = Expr$Invocation;
  Expr.Visitor = Expr$Visitor;
  package$dicenotation.Expr = Expr;
  Object.defineProperty(package$dicenotation, 'Numbers', {
    get: Numbers_getInstance
  });
  package$dicenotation.ParserBinaryOp = ParserBinaryOp;
  package$dicenotation.ParserUnaryOp = ParserUnaryOp;
  Object.defineProperty(package$dicenotation, 'Precedence', {
    get: Precedence_getInstance
  });
  Object.defineProperty(TokenType, 'LEFT_PAREN', {
    get: TokenType$LEFT_PAREN_getInstance
  });
  Object.defineProperty(TokenType, 'RIGHT_PAREN', {
    get: TokenType$RIGHT_PAREN_getInstance
  });
  Object.defineProperty(TokenType, 'INT', {
    get: TokenType$INT_getInstance
  });
  Object.defineProperty(TokenType, 'NUMBER', {
    get: TokenType$NUMBER_getInstance
  });
  Object.defineProperty(TokenType, 'DICE_NOTATION', {
    get: TokenType$DICE_NOTATION_getInstance
  });
  Object.defineProperty(TokenType, 'PLUS', {
    get: TokenType$PLUS_getInstance
  });
  Object.defineProperty(TokenType, 'MINUS', {
    get: TokenType$MINUS_getInstance
  });
  Object.defineProperty(TokenType, 'ASTERISK', {
    get: TokenType$ASTERISK_getInstance
  });
  Object.defineProperty(TokenType, 'SLASH', {
    get: TokenType$SLASH_getInstance
  });
  Object.defineProperty(TokenType, 'CARET', {
    get: TokenType$CARET_getInstance
  });
  Object.defineProperty(TokenType, 'PERCENT', {
    get: TokenType$PERCENT_getInstance
  });
  Object.defineProperty(TokenType, 'SHIFT_RIGHT', {
    get: TokenType$SHIFT_RIGHT_getInstance
  });
  Object.defineProperty(TokenType, 'SHIFT_LEFT', {
    get: TokenType$SHIFT_LEFT_getInstance
  });
  Object.defineProperty(TokenType, 'COMMA', {
    get: TokenType$COMMA_getInstance
  });
  Object.defineProperty(TokenType, 'DOT', {
    get: TokenType$DOT_getInstance
  });
  Object.defineProperty(TokenType, 'IDENTIFIER', {
    get: TokenType$IDENTIFIER_getInstance
  });
  package$dicenotation.TokenType = TokenType;
  var package$evaluator = package$dicenotation.evaluator || (package$dicenotation.evaluator = {});
  package$evaluator.DiceEvaluator = DiceEvaluator;
  package$evaluator.DiceSolver_init_ddsh32$ = DiceSolver_init;
  package$evaluator.DiceSolver = DiceSolver;
  var package$tartar = package$adriantodt.tartar || (package$adriantodt.tartar = {});
  package$tartar.StringReader = StringReader;
  package$tartar.createLexer_ct8p1u$ = createLexer;
  package$tartar.createGrammar_dz9vxv$ = createGrammar;
  package$tartar.createParser_lh2cvq$ = createParser;
  var package$api = package$tartar.api || (package$tartar.api = {});
  package$api.GrammarDSL = GrammarDSL;
  package$api.LexerDSL = LexerDSL;
  var package$lexer = package$api.lexer || (package$api.lexer = {});
  package$lexer.Lexer = Lexer;
  package$lexer.LexerContext = LexerContext;
  package$lexer.Section = Section;
  package$lexer.Sectional = Sectional;
  package$lexer.Source = Source;
  var package$parser = package$api.parser || (package$api.parser = {});
  package$parser.Grammar = Grammar;
  package$parser.InfixParser = InfixParser;
  package$parser.Parser = Parser;
  package$parser.ParserContext = ParserContext;
  package$parser.PrefixParser = PrefixParser;
  package$parser.SyntaxException = SyntaxException;
  package$parser.Token = Token;
  var package$extensions = package$tartar.extensions || (package$tartar.extensions = {});
  package$extensions.isLetter_myv2d0$ = isLetter;
  package$extensions.isDigit_myv2d0$ = isDigit;
  package$extensions.isLetterOrDigit_myv2d0$ = isLetterOrDigit;
  package$extensions.section_crcbr0$ = section;
  package$extensions.makeToken_vz4fks$ = makeToken;
  package$extensions.makeToken_o70ryi$ = makeToken_0;
  package$extensions.readIdentifier_t5y1tw$ = readIdentifier;
  package$extensions.readString_ct20bp$ = readString;
  package$extensions.readNumber_ct20bp$ = readNumber;
  LexicalNumber.Invalid = LexicalNumber$Invalid;
  LexicalNumber.Decimal = LexicalNumber$Decimal;
  LexicalNumber.Integer = LexicalNumber$Integer;
  package$extensions.LexicalNumber = LexicalNumber;
  package$extensions.ensureEOF_p3mmbm$ = ensureEOF;
  package$extensions.eatMulti_fzf39z$ = eatMulti;
  var package$impl = package$tartar.impl || (package$tartar.impl = {});
  package$impl.GrammarBuilder = GrammarBuilder;
  package$impl.InfixParserImpl = InfixParserImpl;
  LexerImpl.LexerMatcher_init_8zkqve$ = LexerImpl$LexerImpl$LexerMatcher_init;
  LexerImpl.LexerMatcher = LexerImpl$LexerMatcher;
  LexerImpl.ContextImpl = LexerImpl$ContextImpl;
  package$impl.LexerImpl = LexerImpl;
  package$impl.MatcherImpl = MatcherImpl;
  ParserImpl$ContextImpl.ChildContextImpl = ParserImpl$ContextImpl$ChildContextImpl;
  ParserImpl.ContextImpl = ParserImpl$ContextImpl;
  package$impl.ParserImpl = ParserImpl;
  package$impl.PrefixParserImpl = PrefixParserImpl;
  _.main = main;
  _.onLoad = onLoad;
  Expr.prototype.span_p684zu$ = Sectional.prototype.span_p684zu$;
  Token.prototype.span_p684zu$ = Sectional.prototype.span_p684zu$;
  GrammarBuilder.prototype.import_ha5jj$ = GrammarDSL.prototype.import_ha5jj$;
  GrammarBuilder.prototype.prefix_bb9afj$ = GrammarDSL.prototype.prefix_bb9afj$;
  GrammarBuilder.prototype.prefix_ggj8ix$ = GrammarDSL.prototype.prefix_ggj8ix$;
  GrammarBuilder.prototype.infix_wdcr7z$ = GrammarDSL.prototype.infix_wdcr7z$;
  GrammarBuilder.prototype.infix_lfjh7$ = GrammarDSL.prototype.infix_lfjh7$;
  LexerImpl.prototype.parseTo_32dq1j$ = Lexer.prototype.parseTo_32dq1j$;
  LexerImpl.prototype.parseToList_llobtt$ = Lexer.prototype.parseToList_llobtt$;
  MatcherImpl.prototype.matching_6ils5n$ = LexerDSL.prototype.matching_6ils5n$;
  MatcherImpl.prototype.matching_uoi7m8$ = LexerDSL.prototype.matching_uoi7m8$;
  MatcherImpl.prototype.invoke_sdqmiu$$default = LexerDSL.prototype.invoke_sdqmiu$$default;
  MatcherImpl.prototype.invoke_vp8vqt$$default = LexerDSL.prototype.invoke_vp8vqt$$default;
  MatcherImpl.prototype.invoke_sdqmiu$ = LexerDSL.prototype.invoke_sdqmiu$;
  MatcherImpl.prototype.invoke_vp8vqt$ = LexerDSL.prototype.invoke_vp8vqt$;
  ParserImpl$ContextImpl$ChildContextImpl.prototype.parseExpression_za3lpa$ = ParserContext.prototype.parseExpression_za3lpa$;
  ParserImpl$ContextImpl$ChildContextImpl.prototype.parseExpression_u6b096$ = ParserContext.prototype.parseExpression_u6b096$;
  ParserImpl$ContextImpl$ChildContextImpl.prototype.peek_za3lpa$ = ParserContext.prototype.peek_za3lpa$;
  ParserImpl$ContextImpl.prototype.parseExpression_u6b096$$default = ParserContext.prototype.parseExpression_u6b096$$default;
  ParserImpl$ContextImpl.prototype.parseExpression_za3lpa$ = ParserContext.prototype.parseExpression_za3lpa$;
  ParserImpl$ContextImpl.prototype.parseExpression_u6b096$ = ParserContext.prototype.parseExpression_u6b096$;
  ParserImpl$ContextImpl.prototype.peek_za3lpa$ = ParserContext.prototype.peek_za3lpa$;
  ParserImpl.prototype.parse_r7b30y$ = Parser.prototype.parse_r7b30y$;
  lexer = createLexer(lexer$lambda);
  grammar = createGrammar(grammar$lambda);
  parser = createParser(grammar, parser$lambda);
  evaluator = (new DiceEvaluator()).value_nhrjpk$('pi', math.PI).value_nhrjpk$('e', math.E).function_npunpo$('log10', evaluator$lambda).function_npunpo$('log2', evaluator$lambda_0).function_npunpo$('ln', evaluator$lambda_1).function_npunpo$('sin', evaluator$lambda_2).function_npunpo$('cos', evaluator$lambda_3).function_npunpo$('tan', evaluator$lambda_4).function_npunpo$('average', evaluator$lambda_5).function_npunpo$('any', evaluator$lambda_6).function_npunpo$('int', evaluator$lambda_7).function_npunpo$('double', evaluator$lambda_8).function_npunpo$('abs', evaluator$lambda_9).functionAlias_60y5e1$('average', ['avg']).functionAlias_60y5e1$('sin', ['sen']).functionAlias_60y5e1$('int', ['integer', 'long', 'round']).functionAlias_60y5e1$('double', ['float', 'decimal']);
  solver = DiceSolver_init(solver$lambda);
  main();
  Kotlin.defineModule('DiceJs', _);
  return _;
}));

//# sourceMappingURL=DiceJs.js.map
