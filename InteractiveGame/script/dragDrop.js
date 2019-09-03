var draggingObject;

function handleDragStar(e) {
  draggingObject = this;
  e.dataTransfer.setData('text/html', this.innerHTML);
  var dragIcon = document.createElement('img');
  var imageName = this.firstChild.id;
  dragIcon.src = imageName + '.png';
  e.dataTransfer.setDragImage(dragIcon, -10, 10);
}

var itemBoxes = document.querySelectorAll('.inventory-box');
[].forEach.call(itemBoxes, function(itemBoxe) {
  itemBox.addEventListener('dragstar', handleDragStar);
  itemBox.addEventListener('dragover', handleDragOver);
  itemBox.addEventListener('drop', handleDrop);
});