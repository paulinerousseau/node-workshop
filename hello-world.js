// first programm

console.log ("Hello World!");

setTimeout(function(){console.log("Hello World Again!")},10000);

//Write a piece of code using setTimeout that 
//prints “Hello World!” every 10 seconds forever.

function forever (){console.log ("Hello World!")
    setTimeout(forever, 10000);
};

forever();






