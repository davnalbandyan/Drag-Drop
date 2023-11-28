"use strict"

let lists = document.querySelectorAll(".list");

let leftSide = document.getElementById("left");
let rightSide = document.getElementById("right");

lists.forEach(item => {
    item.addEventListener("dragstart",function(e){
        let selected = e.target;

        rightSide.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        rightSide.addEventListener("drop",function(e){
            rightSide.appendChild(selected);
            selected = null
        })

        leftSide.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        leftSide.addEventListener("drop",function(e){
            leftSide.appendChild(selected);
            selected = null
        })
    })
})