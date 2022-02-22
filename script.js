const newCursor = "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoppng.com%2Ffree-image%2Fcool-roblox-cursor-PNG-free-PNG-Images_72520&psig=AOvVaw3pxKemIS5WqJAhqblT7zLD&ust=1645639039223000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDA6qXxk_YCFQAAAAAdAAAAABAD"


document.getElementById("button1").addEventListener("click", function() {
    document.getElementById("box-2").style.height = "250px";
});

document.getElementById("button2").addEventListener("click", function() {
    document.getElementById("box-2").style.backgroundColor = "blue";
});

document.getElementById("button3").addEventListener("click", function() {
    document.getElementById("box-2").classList.remove("fade-trans")
    document.getElementById("box-2").style.opacity = "50%";
});

document.getElementById("button4").addEventListener("click", function() {
    const box2 = document.getElementById("box-2")
    box2.style.height = "150px";
    box2.style.backgroundColor = "darkorange";
    box2.style.opacity = "100%";
    box2.classList.remove("hover")
    box2.classList.remove("fade-trans")

});

document.getElementById("button5").addEventListener("click", function() {
    const box2 = document.getElementById("box-2")
    box2.classList.add("hover")
})

document.getElementById("button6").addEventListener("click", function() {
    const box2 = document.getElementById("box-2")
    box2.classList.add("fade-trans")
    box2.style.opacity = "0%"
})

function testFunction(number) {
    if (number === 4) {
        console.log("The number is 4")
    } else if (number === 5) {
        console.log("The number is 5")
    } else {
        console.log("The number is not 4 or 5")
    }
}

function oddOrEven(number) {
    if (number % 2 === 0) {
        console.log("even")
    } else console.log("odd")
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];

function forLoop() {
    for (i = 0; i < 8; i++) {
        oddOrEven(array[i]);
    }
}