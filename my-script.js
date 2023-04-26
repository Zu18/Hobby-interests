console.log("JavaScript is working!");

const myImage2 = document.querySelector("#img-2");

myImage2.onclick = () => {
  const mySrc = myImage2.getAttribute("src");
  if (mySrc === "https://picsum.photos/id/1039/600/300") {
    myImage2.setAttribute("src", "https://picsum.photos/id/287/600/300");
  } else {
    myImage2.setAttribute("src", "https://picsum.photos/id/1039/600/300");
  }
};

const myImage1 = document.querySelector("#img-1");

myImage1.onclick = () => {
  const mySrc = myImage1.getAttribute("src");
  if (mySrc === "https://picsum.photos/id/24/600/300") {
    myImage1.setAttribute("src", "https://picsum.photos/id/367/600/300");
  } else {
    myImage1.setAttribute("src", "https://picsum.photos/id/24/600/300");
  }
};