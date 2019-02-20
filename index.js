function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  const upRank = document.getElementById('app').querySelectorAll('ul.ranked-list');
  
  for (let i = 0; i < upRank.length; i++) {
    upRank[i].innerHTML =  ((parseInt(upRank[i].innerHTML)) + n)
  }
}

function deepestChild() {
  var lis=document.getElementById("grand-node").querySelectorAll("div");
  var test;
  for(let i=0;i<lis.length-1;i++) {
    test=lis[i].querySelector("div");
  }
return test;


}