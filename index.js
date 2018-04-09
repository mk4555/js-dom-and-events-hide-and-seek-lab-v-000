function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  let list = document.getElementById('app').querySelectorAll('.ranked-list')
  for (let i=0; i<list.length; i++) {
    list[i].innerHTML = i + n
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
