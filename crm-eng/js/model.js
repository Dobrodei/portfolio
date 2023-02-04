export default {
  arrRequest: localStorage.getItem('arrRequest') ? JSON.parse(localStorage.getItem('arrRequest')) : [],
  addItem: function (nameValue, phoneValue, emailValue, productValue) {
    let id = 0;

    if (this.arrRequest.length > 0) {
      let lastIndex = this.arrRequest.length - 1;
      id = this.arrRequest[lastIndex].id + 1;
    }

    this.arrRequest.push({
      id: id,
      nameValue: nameValue,
      phoneValue: phoneValue,
      emailValue: emailValue,
      productValue: productValue,
      status: 'new',
      date: this.getCurrentData()
    })

    this.updateLS(this.arrRequest)
  },
  updateLS: function (data) {
    localStorage.setItem('arrRequest', JSON.stringify(data));
  },
  getCurrentData: function () {
    const date = new Date();
    let nowDay = date.getDate();
    let nowMonth = date.getMonth() + 1;
    let nowYear = date.getFullYear();
    let nowHours = date.getHours();
    let nowMin = date.getMinutes();
    let nowSec = date.getSeconds();


    const noFullDate = `${nowDay}.${nowMonth}.${nowYear}`
    const fullDate = `${nowYear}-${nowMonth}-${nowDay} ${nowHours}:${nowMin}:${nowSec}`

    return {
      noFullDate: noFullDate,
      fullDate: fullDate
    }
  },
}