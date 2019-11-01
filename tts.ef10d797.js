// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"tts/questions.json":[function(require,module,exports) {
module.exports = [{
  "clue": "Bulan Hari Oeang",
  "answer": "Oktober"
}, {
  "clue": "Bulan Kemerdekaan",
  "answer": "agustus"
}, {
  "clue": "Nama Kabupaten di Jawa Tengah",
  "answer": "batang"
}, {
  "clue": "Nilai Tukar Mata Uang",
  "answer": "kurs"
}, {
  "clue": "Mata Uang Asing",
  "answer": "valas"
}, {
  "clue": "Asal Kata Rupliah",
  "answer": "rupiya"
}, {
  "clue": "Material Uang Koin",
  "answer": "alumunium"
}, {
  "clue": "Seribu Rupiah",
  "answer": "ceban"
}, {
  "clue": "Kenaikan harga-harga",
  "answer": "inflasi"
}, {
  "clue": "Pemotongan Nilai Mata Uang",
  "answer": "sanering"
}, {
  "clue": "Barang ditukar Barang",
  "answer": "barter"
}, {
  "clue": "Oeang Republik Indonesia",
  "answer": "ori"
}, {
  "clue": "Perusahaan Pencetak Rupiah",
  "answer": "peruri"
}, {
  "clue": "Salah Satu Jenis Pajak",
  "answer": "PPNBM"
}, {
  "clue": "Tari di uang Rp10.000",
  "answer": "pakarena"
}, {
  "clue": "Tari di uang Rp50.000",
  "answer": "legong"
}, {
  "clue": "Pulau Terluar Indonesia",
  "answer": "miangas"
}, {
  "clue": "Lambang Negara",
  "answer": "garuda"
}, {
  "clue": "Organisasi Perdagangan Internasinal",
  "answer": "who"
}, {
  "clue": "Laut",
  "answer": "bahari"
}, {
  "clue": "Kepulauan (Ingg)",
  "answer": "archipelaho"
}, {
  "clue": "Pandangan Atau Wawasan",
  "answer": "visi"
}, {
  "clue": "Bentuk Negara",
  "answer": "republik"
}, {
  "clue": "Bagian laba u/ pemegang saham",
  "answer": "dividen"
}, {
  "clue": "Mata Uang Digital",
  "answer": "bitcoin"
}, {
  "clue": "Kecerdasan Buatan",
  "answer": "AI"
}, {
  "clue": "Penanaman modal",
  "answer": "investasi"
}, {
  "clue": "Ibukota Papua Barat",
  "answer": "manokwari"
}, {
  "clue": "Aparatur Pajak",
  "answer": "fiskus"
}, {
  "clue": "Teknologi Keuangan",
  "answer": "fintech"
}, {
  "clue": "Jenis Surat Berharga Negawa",
  "answer": "sbsn"
}, {
  "clue": "Surat Utang",
  "answer": "obligasi"
}, {
  "clue": "Kepemilikan modal",
  "answer": "saham"
}, {
  "clue": "Aparat Pengawas Internal Pemerintah",
  "answer": "apip"
}, {
  "clue": "Pemeriksaan",
  "answer": "audit"
}, {
  "clue": "Uang",
  "answer": "duit"
}, {
  "clue": "1/100",
  "answer": "sen"
}, {
  "clue": "Logam Mulia",
  "answer": "perak"
}, {
  "clue": "Nama Kerajaan",
  "answer": "majapahit"
}, {
  "clue": "Nama Kota di Jabar",
  "answer": "garut"
}, {
  "clue": "Lembaga Beasiswa",
  "answer": "lpdp"
}, {
  "clue": "Mesin Pencari",
  "answer": "google"
}, {
  "clue": "Perusahaan Dagang Kolonial",
  "answer": "voc"
}, {
  "clue": "Tanjung... (Ibukota Kaltara)",
  "answer": "selor"
}, {
  "clue": "Jenis Pendanaan",
  "answer": "hibah"
}, {
  "clue": "Danan di Sumbar",
  "answer": "maninjau"
}, {
  "clue": "Rumah Adat Jawa",
  "answer": "joglo"
}, {
  "clue": "Tokoh Pewayangan",
  "answer": "arjuna"
}, {
  "clue": "Asia Tenggara",
  "answer": "asean"
}, {
  "clue": "Slogan APBN",
  "answer": "uangkita"
}];
},{}],"tts/tts.js":[function(require,module,exports) {
"use strict";

var data = _interopRequireWildcard(require("./questions.json"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var orderArr = [];
var questionNumber = 8;

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

function init() {
  $.each(data, function (index) {
    orderArr.push(index);
    shuffle(orderArr);
  });
  loadClues();
}

;
init();

function loadClues() {
  for (var i = 0; i < questionNumber; i++) {
    //$("#cluesAcross").append("<div class='line'><input class='word' type='text' value="+ data[orderArr[i]].answer+"/><span class='lineNum'></span><input class='clue' value="+ data[orderArr[i]].clue+" />");
    $(".line").eq(i).find("input.word").attr("value", data[orderArr[i]].answer);
    $(".line").eq(i).find("input.clue").attr("value", data[orderArr[i]].clue);
  }
}

; //---------------------------------//
//   GLOBAL VARIABLES              //
//---------------------------------//

var board,
    wordArr,
    wordBank,
    wordsActive,
    boardMap,
    clues,
    focusChar,
    focusIndex = null,
    wordElementsAcross,
    wordElementsDown;
var Bounds = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  Update: function Update(x, y) {
    this.top = Math.min(y, this.top);
    this.right = Math.max(x, this.right);
    this.bottom = Math.max(y, this.bottom);
    this.left = Math.min(x, this.left);
  },
  Clean: function Clean() {
    this.top = 999;
    this.right = 0;
    this.bottom = 0;
    this.left = 999;
  }
}; //---------------------------------//
//   MAIN                          //
//---------------------------------//

function Play() {
  var charEleArr = document.getElementsByClassName('char');

  for (var i = 0; i < charEleArr.length; i++) {
    //register character click and focus events
    RegisterChar(charEleArr[i], boardMap[i]);
    charEleArr[i].placeholder = "";
  }

  HideInputBoxes();
  FormatClues();
}
/*
 * @param {Object} wordElement
 * @param {string} wordElement.num - clue number
 * @param {string} wordElement.clue - clue text
 * @param {string} wordElement.wordCount - word count of answer
 */


function createClueHTML(wordElement) {
  //create clue holder
  var clueElement = document.createElement('div');
  clueElement.className += " line"; //add line number

  var lineNumSpan = document.createElement('span');
  lineNumSpan.innerHTML = wordElement.num + '. ';
  lineNumSpan.className += " lineNum"; //add clue

  var clueSpan = document.createElement('span');
  clueSpan.innerHTML = wordElement.clue;
  clueSpan.className += " cluesentence"; //add word count

  var wordCountSpan = document.createElement('span'); //   wordCountSpan.innerHTML = ' (' + wordElement.wordCount + ')';

  wordCountSpan.className += " wordCount";
  clueElement.appendChild(lineNumSpan);
  clueElement.appendChild(clueSpan);
  clueElement.appendChild(wordCountSpan);
  return clueElement;
}

function FormatClues() {
  var cluesAcross = document.getElementById("cluesAcross");
  var cluesDown = document.getElementById("cluesDown");
  cluesAcross.innerHTML = "";
  cluesDown.innerHTML = "";
  var clueElement = "";

  for (var i = 0; i < wordElementsAcross.length; i++) {
    clueElement = createClueHTML(wordElementsAcross[i]);
    cluesAcross.appendChild(clueElement);
  }

  for (var j = 0; j < wordElementsDown.length; j++) {
    clueElement = createClueHTML(wordElementsDown[j]);
    cluesDown.appendChild(clueElement);
  }
}

function Generate() {
  wordElementsAcross = [];
  wordElementsDown = [];
  CleanVars();
  var canBuild = PopulateBoard();

  while (!canBuild) {
    CleanVars();
    canBuild = PopulateBoard();
  }

  document.getElementById("crossword").innerHTML = canBuild ? BoardToHtml() : "Failed to find crossword.";
  document.getElementById('btnHint').classList.remove('disabled');
}

function HideInputBoxes() {
  var w = document.getElementsByClassName('word'),
      d = document.getElementsByClassName('clue'),
      dir = document.getElementsByClassName('clueDirection'),
      char = document.getElementsByClassName('char');

  for (var i = 0; i < w.length; i++) {
    AddClass(w[i], 'hide');
    AddClass(d[i], 'hide');
    AddClass(d[i], 'clueReadOnly');
    d[i].disabled = 'readonly';
  }

  for (var i = 0; i < dir.length; i++) {
    RemoveClass(dir[i], 'disabled');
  }

  for (var i = 0; i < char.length; i++) {
    RemoveClass(char[i], 'charReadOnly');
    char[i].disabled = '';
  }
}

function hasWhiteSpace(s) {
  return /\s/g.test(s);
}
/*
 * get the length of the clues as a string
 * @param {string}
 * @return {string}
 */


function getWordCount(word) {
  if (hasWhiteSpace(word)) {
    var words = word.split(/\s/g);
    var wordCount = "";

    for (var i = 0; i < words.length; i++) {
      //last word
      if (i === words.length - 1) {
        wordCount = wordCount + words[i].length;
      } //other words
      else {
          wordCount = wordCount + words[i].length + ', ';
        }
    }

    return wordCount;
  } else {
    return word.length.toString();
  }
}

function GetWordsFromInput() {
  var clues = document.getElementsByClassName("line");
  wordArr = [];

  for (var i = clues.length - 1; i >= 0; i--) {
    var val = clues[i].getElementsByClassName("word")[0].value.toUpperCase();
    var clue = clues[i].getElementsByClassName("clue")[0].value;
    var wordCount = getWordCount(val);

    if (val !== null && val.length > 1) {
      wordArr.push({
        ele: clues[i],
        value: val.replace(' ', ''),
        clue: clue,
        wordCount: wordCount
      });
    }
  }
}

function CleanVars() {
  Bounds.Clean();
  wordBank = [];
  wordsActive = [];
  clues = [];
  board = [];

  for (var i = 0; i < 50; i++) {
    board.push([]);

    for (var j = 0; j < 50; j++) {
      board[i].push({
        value: null,
        char: []
      });
    }
  }
}

function PopulateBoard() {
  PrepareBoard();
  var boardisValid = false;
  var len = wordBank.length;

  for (var i = 0; i < len; i++) {
    boardisValid = AddWordToBoard();

    if (!boardisValid) {
      return boardisValid;
    }
  }

  return boardisValid;
}
/*
@param {Number} currentWordIndex
@param {Object} prevObj
@param {String} currentChar
@returns {Object} cObj - values for the character square
*/


function createcObj(currentWordIndex, prevObj, currentChar) {
  return {
    wordIndex: currentWordIndex,
    prev: prevObj,
    value: currentChar,
    next: null
  };
}

function PrepareBoard() {
  wordBank = [];

  for (var i = 0, len = wordArr.length; i < len; i++) {
    wordBank.push(new WordObj(wordArr[i]));
  }

  for (i = 0; i < wordBank.length; i++) {
    for (var j = 0, wA = wordBank[i]; j < wA.char.length; j++) {
      for (var k = 0, cA = wA.char[j]; k < wordBank.length; k++) {
        for (var l = 0, wB = wordBank[k]; k !== i && l < wB.char.length; l++) {
          wA.totalMatches += cA === wB.char[l] ? 1 : 0;
        }
      }
    }
  }
} // TODO: Clean this guy up


function AddWordToBoard() {
  var i,
      len,
      curIndex,
      curWord,
      curChar,
      testWord,
      testChar,
      minMatchDiff = 9999,
      curMatchDiff; //first word

  if (wordsActive.length < 1) {
    curIndex = 0;

    for (i = 0, len = wordBank.length; i < len; i++) {
      if (wordBank[i].totalMatches < wordBank[curIndex].totalMatches) {
        curIndex = i;
      }
    }

    wordBank[curIndex].successfulMatches = [{
      x: 12,
      y: 12,
      dir: 0
    }];
  } //others
  else {
      curIndex = -1;

      for (i = 0, len = wordBank.length; i < len; i++) {
        curWord = wordBank[i];
        curWord.effectiveMatches = 0;
        curWord.successfulMatches = [];

        for (var j = 0, lenJ = curWord.char.length; j < lenJ; j++) {
          curChar = curWord.char[j];

          for (var k = 0, lenK = wordsActive.length; k < lenK; k++) {
            testWord = wordsActive[k];

            for (var l = 0, lenL = testWord.char.length; l < lenL; l++) {
              testChar = testWord.char[l];

              if (curChar === testChar) {
                curWord.effectiveMatches++;
                var curCross = {
                  x: testWord.x,
                  y: testWord.y,
                  dir: 0
                };

                if (testWord.dir === 0) {
                  curCross.dir = 1;
                  curCross.x += l;
                  curCross.y -= j;
                } else {
                  curCross.dir = 0;
                  curCross.y += l;
                  curCross.x -= j;
                }

                var isMatch = true;

                for (var m = -1, lenM = curWord.char.length + 1; m < lenM; m++) {
                  var crossVal = [];

                  if (m !== j) {
                    if (curCross.dir === 0) {
                      var xIndex = curCross.x + m;

                      if (xIndex < 0 || xIndex > board.length - 1) {
                        isMatch = false;
                        break;
                      }

                      crossVal.push(board[xIndex][curCross.y].value);
                      crossVal.push(board[xIndex][curCross.y + 1].value);
                      crossVal.push(board[xIndex][curCross.y - 1].value);
                    } else {
                      var yIndex = curCross.y + m;

                      if (yIndex < 0 || yIndex > board[curCross.x].length - 1) {
                        isMatch = false;
                        break;
                      }

                      if (typeof board[curCross.x] == 'undefined') {
                        console.error(board[curCross.x]);
                      }

                      if (typeof board[curCross.x][yIndex] == 'undefined') {
                        console.error(board[curCross.x][yIndex]);
                      }

                      crossVal.push(board[curCross.x][yIndex].value);
                      crossVal.push(board[curCross.x + 1][yIndex].value);
                      crossVal.push(board[curCross.x - 1][yIndex].value);
                    }

                    if (m > -1 && m < lenM - 1) {
                      if (crossVal[0] !== curWord.char[m]) {
                        if (crossVal[0] !== null) {
                          isMatch = false;
                          break;
                        } else if (crossVal[1] !== null) {
                          isMatch = false;
                          break;
                        } else if (crossVal[2] !== null) {
                          isMatch = false;
                          break;
                        }
                      }
                    } else if (crossVal[0] !== null) {
                      isMatch = false;
                      break;
                    }
                  }
                }

                if (isMatch === true) {
                  curWord.successfulMatches.push(curCross);
                }
              }
            }
          }
        }

        curMatchDiff = curWord.totalMatches - curWord.effectiveMatches;

        if (curMatchDiff < minMatchDiff && curWord.successfulMatches.length > 0) {
          curMatchDiff = minMatchDiff;
          curIndex = i;
        } else if (curMatchDiff <= 0) {
          return false;
        }
      }
    }

  if (curIndex === -1) {
    return false;
  }

  var word = wordBank.splice(curIndex, 1);
  var currentWordActive = updateWordInfo(word);
  wordsActive.push(currentWordActive);
  var wordisAdded = addCharInfoToBoard(currentWordActive);

  if (!wordisAdded) {
    return false;
  }

  if (Bounds.right >= 37) {
    // console.log('%cCrossword is too wide', 'color:red;font-size: 16px;');
    return false;
  }

  return true;
}
/*
 * @param {Number} word - index of the current word 
 * @return {Object} activeWord 
 */


function updateWordInfo(activeWord) {
  var currentActiveWord = activeWord[0];
  var matchArr = currentActiveWord.successfulMatches;
  var matchIndex = Math.floor(Math.random() * matchArr.length);
  var matchData = matchArr[matchIndex];
  currentActiveWord.x = matchData.x;
  currentActiveWord.y = matchData.y;
  currentActiveWord.dir = matchData.dir;
  return currentActiveWord;
}

function addCharInfoToBoard(currentWordActive) {
  var pushIndex = wordsActive.length - 1;
  var prevObj = null;

  for (var i = 0; i < currentWordActive.char.length; i++) {
    var xInd = currentWordActive.x;
    var yInd = currentWordActive.y;

    if (currentWordActive.dir === 0) {
      xInd = xInd + i;
    } else {
      yInd = yInd + i;
    }

    if (xInd >= 36) {
      // console.log('%cCrossword will be too wide', 'color:orange;font-size: 16px;font-style: bold;');
      return false;
    }

    var cObj = createcObj(pushIndex, prevObj, currentWordActive.char[i]);
    var cIndex = board[xInd][yInd].char.length;
    board[xInd][yInd].char.push(cObj);
    board[xInd][yInd].value = currentWordActive.char[i];
    Bounds.Update(xInd, yInd);

    if (prevObj !== null) {
      prevObj.next = board[xInd][yInd].char[cIndex];
    }

    prevObj = board[xInd][yInd].char[cIndex];
  }

  prevObj = null;
  return true;
}

function BoardToHtml() {
  boardMap = [];
  var boardHTML = '';

  for (var i = Bounds.top - 1; i < Bounds.bottom + 2; i++) {
    boardHTML += "<div class='row'>";

    for (var j = Bounds.left - 1; j < Bounds.right + 2; j++) {
      boardHTML += BoardCharToElement(board[j][i]);
    }

    boardHTML += "</div>";
  }

  return boardHTML;
}
/*
 * @param {Object} c - values for a sqaure of the board
 * @param {string} c.value - character string for the square. 
 * @param {Array} c.char - list of character strings for the square. 
 * length of c.char is 0, 1 or 2. 
 * length is 2 when 2 words cross
 */


function BoardCharToElement(c) {
  var inner = "";

  if (c.value !== null) {
    var num = "";

    for (var i = 0; i < c.char.length; i++) {
      var currentChar = c.char[i];
      currentChar.index = boardMap.length;

      if (currentChar.prev === null) {
        var currentwordIndex = currentChar.wordIndex;

        if (num === "") {
          num = wordElementsDown.length + wordElementsAcross.length + 1;
        }

        if (wordsActive[currentwordIndex].dir === 0) {
          wordElementsAcross.push({
            num: num,
            ele: wordsActive[currentwordIndex].element,
            clue: wordsActive[currentwordIndex].clue,
            answer: wordsActive[currentwordIndex].string,
            wordCount: wordsActive[currentwordIndex].wordCount
          });
        } else {
          wordElementsDown.push({
            num: num,
            ele: wordsActive[currentwordIndex].element,
            clue: wordsActive[currentwordIndex].clue,
            answer: wordsActive[currentwordIndex].string,
            wordCount: wordsActive[currentwordIndex].wordCount
          });
        }
      }
    }

    boardMap.push(c);
    inner = EleStr('input', [{
      a: 'type',
      v: ['text']
    }, {
      a: 'class',
      v: ['char']
    }, {
      a: 'maxlength',
      v: ['1']
    }, {
      a: 'data-letter',
      v: [c.value]
    }, {
      a: 'data-hint',
      v: [c.value]
    }, {
      a: 'placeholder',
      v: [c.value]
    }], EleStr('span', [{
      a: 'class',
      v: ['num']
    }], num));
  }

  return EleStr('div', [{
    a: 'class',
    v: ['square']
  }], inner);
}
/*
 * @param {Object} boardChar
 * @param {string} boardChar.value
 * @param {array} boardChar.char
 */


function BoardCharClick(boardChar) {
  if (boardChar.char.length > 1) {
    if (focusIndex >= boardChar.char.length - 1) {
      focusIndex = 0;
    } else {
      focusIndex++;
    }
  }
}
/*
 * @param {Object} boardChar
 * @param {string} boardChar.value
 * @param {array} boardChar.char
 */


function BoardCharFocus(boardChar) {
  if (!(boardChar.char[focusIndex] && boardChar.char[focusIndex].prev === focusChar)) {
    focusIndex = Math.max(0, boardChar.char.indexOf(focusChar));
  }

  var inputBoxes = document.getElementsByClassName('char'); //navigation via arrow keys

  this.onkeydown = function (e) {
    var key = e.keyCode || e.which; //left arrow or up - focus on prev square

    if (key === 37 || key === 38) {
      if (boardChar.char[focusIndex].prev != null) {
        focusChar = boardChar.char[focusIndex].prev;
        inputBoxes[focusChar.index].focus();
      }
    } //right arrow or down - focus on next square


    if (key === 39 || key === 40) {
      if (boardChar.char[focusIndex].next != null) {
        focusChar = boardChar.char[focusIndex].next;
        inputBoxes[focusChar.index].focus();
      }
    }
  };

  this.onkeyup = function (e) {
    var key = e.keyCode || e.which;
    var prevChar = boardChar.char[focusIndex].prev; //backspace and not first letter

    if (key === 8 && prevChar != null) {
      RemoveClass(inputBoxes[boardChar.char[focusIndex].index], 'correct');
      inputBoxes[prevChar.index].focus();
    } //backspace and is first letter


    if (key === 8 && prevChar === null) {
      RemoveClass(inputBoxes[boardChar.char[focusIndex].index], 'correct');
    }
  };

  this.oninput = function (e) {
    var nextChar = boardChar.char[focusIndex].next; //backspace at end of word

    if (e.inputType === 'deleteContentBackward' && nextChar === null) {
      inputBoxes[boardChar.char[focusIndex].index].value = "";
      RemoveClass(inputBoxes[boardChar.char[focusIndex].index], 'correct');
    } //normal text entry


    if (e.inputType !== 'deleteContentBackward' && nextChar !== null) {
      inputBoxes[nextChar.index].focus();
      RemoveClass(inputBoxes[boardChar.char[focusIndex].index], 'correct');
    }
  };
} //---------------------------------//
//   OBJECT DEFINITIONS            //
//---------------------------------//


function WordObj(wordData) {
  this.element = wordData.ele;
  this.string = wordData.value;
  this.char = wordData.value.split("");
  this.totalMatches = 0;
  this.effectiveMatches = 0;
  this.successfulMatches = [];
  this.clue = wordData.clue;
  this.wordCount = wordData.wordCount;
} //---------------------------------//
//   EVENTS                        //
//---------------------------------//


function RegisterEvents() {
  document.getElementById("btnReset").addEventListener('click', function () {
    Generate();
    Play();
  }, false);
}

RegisterEvents();

function RegisterChar(ele, boardChar) {
  ele.onclick = CreateCallback("click", boardChar);
  ele.onfocus = CreateCallback("focus", boardChar);
}

function CreateCallback(type, boardChar) {
  switch (type) {
    case "click":
      return function () {
        BoardCharClick(boardChar);
      };

    case "focus":
      return function () {
        BoardCharFocus(boardChar);
      };
  }
} //---------------------------------//
//   HELPER FUNCTIONS              //
//---------------------------------//


function EleStr(e, c, h) {
  h = h ? h : "";

  for (var i = 0, s = "<" + e + " "; i < c.length; i++) {
    s += c[i].a + "='" + ArrayToString(c[i].v, " ") + "' ";
  }

  return s + ">" + h + "</" + e + ">";
}

function ArrayToString(a, s) {
  if (a === null || a.length < 1) return "";
  if (s === null) s = ",";

  for (var r = a[0], i = 1; i < a.length; i++) {
    r += s + a[i];
  }

  return r;
}

function AddClass(ele, classStr) {
  ele.className = ele.className.replaceAll(' ' + classStr, '') + ' ' + classStr;
}

function RemoveClass(ele, classStr) {
  ele.className = ele.className.replaceAll(' ' + classStr, '');
}

function ToggleClass(ele, classStr) {
  var str = ele.className.replaceAll(' ' + classStr, '');
  ele.className = str.length === ele.className.length ? str + ' ' + classStr : str;
}

String.prototype.replaceAll = function (replaceThis, withThis) {
  var re = new RegExp(replaceThis, "g");
  return this.replace(re, withThis);
}; //==================================================//


$("#btnCheck").on('click', function () {
  $(this).blur();
  var AllCorrect = true; //clear values from incorrect boxes

  $(".square input").each(function () {
    if ($(this).attr('data-letter') !== $(this).val().toUpperCase()) {
      $(this).removeClass('correct');
      $(this).addClass('incorrect');
      AllCorrect = false;
    } else {
      $(this).addClass('correct');
      $(this).removeClass('incorrect');
    }
  });
});
$('#btnHint').on('click', function () {
  // Change this number to reveal more or less answers
  var hintFrequency = 8;
  $(this).addClass('disabled');
  var hints = $("[data-letter]").filter(function (index) {
    return (index + 1) % hintFrequency == 0;
  });
  hints.each(function () {
    $(this).val($(this).attr('data-letter')).addClass('correct');
  });
});
$(function () {
  GetWordsFromInput();
  Generate();
  Play();
});
},{"./questions.json":"tts/questions.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54096" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","tts/tts.js"], null)
//# sourceMappingURL=/tts.ef10d797.js.map