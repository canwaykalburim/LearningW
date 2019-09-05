game.things = (function() {
  var items = {
    hammer: {
      name: 'hammer',
      effects: {
        'player_inventory': {
          message: "<p>둔기를 선택했습니다</p>",
          object: "addItem",
          subject: "deleteItem"
        },
        'monster': {
          message: "<p>몬스터를 둔기로 공격했습니다.</p><p>몬스터가 화난 것 같습니다.</p>",
          subject: 'deleteItem'
        },
        'empty': {
          message: "<p>둔기를 내려놓았습니다.</p>",
          object: "addItem",
          subject: "deleteItem"
        }
      }
    },
    monster: {
      name: 'monster',
      effects: {
        'player_inventory': {
          message: "<p>몬스터를 움직일 수는 없습니다.</p>"
        }
      }
    }
  };

  var get = function(name) {
    return this.items[name];
  };

  var dropItemInto = function(itemNode, target) {
    var sourceContext = itemNode.parentElement.parentElement.id;
    if(sourceContext !== target) {
      var item = itemNode.firstChild.id;
      var itemObject = this.get(item);

      if(target === 'player_inventory') {
        var effects = itemObject.effects[target];
      }else if(game.slide.getInventory(target)) {
        var effects = itemObject.effects[game.slide,getInventory(target)];
      }else {
        var effects = itemObject.effects['empty'];
      };

      var targetObject;
      if(!!effects.object === true){
        if(target === "player_inventory") {
          targetObject = game.player_inventory;
        }else{
          targetObject = gam.slide;
        };
        targetObject[effects.object](itemObject);
      };
      if(!!effects.subject === true) {
        if(sourceContext === "player_inventory") {
          var sourceObject = game.player_inventory;
        }else{
          var sourceObject = game.slide;
        };
        sourceObject[effects.subject](itemObject);
      };
      if(!!effects.message === true){
        game.slide.setText(effects.message);
      };
      game.screen.draw();
    };
  };

  return {
    items : items,
    get : get,
    dropItemInto : dropItemInto
  }
})();

game.slide = (function() {
  var inventory = {
    slide1: 'hammer',
    slide2: 'monster',
    slide3: null
  };

  var addItem = function(item) {
    inventory[game.slide.currentSlide()] = item.name;
  };

  var deleteItem = function(item) {
    inventory[game.slide.currentSlide()] = null;
  };

  var findTextNode = function(slideId) {
    return document.querySelector("#" + slideId + " .slide-text .event-text");
  };

  var getInventory = function(slideId) {
    return inventory[slideId];
  };

  var setText = function(message, slideId) {
    if(!!slideId === false){
      slideId = currentSlide();
    }
    return findTextNode(slideId).innerHTML = message;
  };

  var currentSlide = function() {
    return game.stepsTaken[game.stepsTaken.length - 1];
  };

  var draw = function(slideId) {
    if(!slideId === true) {
      slideId = this.currentSlide();
    };

    var item = inventory[slideId];
    var inventoryBox = document.querySelector('#'+slideId+' .inventory-box');

    if(item === null) {
      inventoryBox.innerHTML = "";
      inventoryBox.classList.add("empty");
    }
    else{
      inventoryBox.innerHTML = "<img src='"+item+".png' alt='"+item+"' class='item' id='"+item+"'>";
      inventoryBox.classList.remove("empty");
    }
  };

  return {
    addItem: addItem,
    deleteItem: deleteItem,
    setText: setText,
    getInventory: getInventory,
    draw: draw,
    currentSlide: currentSlide
  };
})();