const container = document.querySelector('.container')
document.getElementById("clear").addEventListener("click", clear);

let size = 20

document.getElementById("clear").addEventListener("click", clear);

function draw(size){
    for(i = 0; i < size; i++){
    
        let row = document.createElement('div')
        row.classList.add('row')       
        container.append(row)

        for(j = 0; j < size; j++){
            let box = document.createElement('div')
            box.classList.add('box')
            box.addEventListener('mouseover', (e) => {
                let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
                console.log(randomColor)
                console.log(e.target)
                e.target.setAttribute('style', `background:${randomColor}`)
            });
            row.append(box)
        }
    }
}

function clear(){
    let boxes = document.querySelectorAll('.box')
    let rows = document.querySelectorAll('.row')

    for(i = 0; i < boxes.length; i++){
        boxes[i].classList.remove('filled')
    }

    let newSize = parseInt(prompt("Enter a new size"))
    
    while(isNaN(newSize) || newSize > 100 || newSize <= 1){
        newSize = prompt("Enter a new size")
    }

    size = newSize

    for(i = 0; i < rows.length; i++){
        rows[i].remove()
    }

    draw(size)
}

draw(size);