const draged = document.querySelectorAll('.drag');
const item = document.querySelectorAll('.item');


let draggedItem = null;
for (let i = 0; i < item.length; i++) {
    const list_item = item[i];
    list_item.addEventListener('dragstart', function() {
        draggedItem = list_item;
        setTimeout(function() {
            list_item.style.display = 'none';
        }, 0)
    });
    list_item.addEventListener('dragend', function() {
        setTimeout(function() {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    })
    for (let j = 0; j < draged.length; j++) {
        const drag = draged[j];
        drag.addEventListener('dragover', function(e) {
            e.preventDefault();

        });
        drag.addEventListener('dragenter', function(e) {
            e.preventDefault;
            this.style.backgroundColor = 'rgba(0,0,0,0.8)';
        });
        drag.addEventListener('dragleave', function() {
            this.style.backgroundColor = ('rgba(0,0,0,0.1');
        });
        drag.addEventListener('drop', function() {
            // console.log(drop);
            this.append(draggedItem);
            this.style.backgroundColor = 'rgba(0,0,0,0.1)'
        });
    }
}