import model from "./../model.js";
import view from "./table.view.js";

function initTable() {
  view.displayTable(model.arrRequest);
  view.scoreNewItem(model.arrRequest);
}
initTable()

function filterItems(valueBtn, valueSelect) {
  let arrFilter;
  if (valueBtn !== 'all' && valueSelect == 'all') {

    arrFilter = model.arrRequest.filter(item => item.status == valueBtn)

  } else if (valueBtn == 'all' && valueSelect !== 'all') {

    arrFilter = model.arrRequest.filter(item => item.productValue == valueSelect)

  } else if (valueBtn !== 'all' && valueSelect !== 'all') {

    arrFilter = model.arrRequest.filter(item => item.productValue == valueSelect && item.status == valueBtn)

  } else {
    return view.displayTable(model.arrRequest)
  }

  view.displayTable(arrFilter)
}

view.tableEl.filterBtns.forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    const target = e.target;
    const targetAttr = target.dataset.value;

    view.tableEl.filterBtns.forEach(btn => btn.classList.remove('active'))
    view.tableEl.filterBtns.forEach(btn => btn.dataset.value == targetAttr ? btn.classList.add('active') : null);

    filterItems(targetAttr, view.tableEl.selectProduct.value)
  })
})

view.tableEl.selectProduct.addEventListener('change', function (e) {
  const target = e.target;
  const targetValue = target.value;

  let targetBtnValue = Array.from(view.tableEl.filterBtns).find(btn => btn.classList.contains('active'))

  filterItems(targetBtnValue.dataset.value, targetValue)
})