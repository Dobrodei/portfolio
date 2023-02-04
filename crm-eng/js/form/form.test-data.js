const testData = (function () {
  class PersonData {
    constructor(name, phone, email, course) {
      this.name = name,
        this.phone = phone,
        this.email = email,
        this.course = course
    }
  }

  const arrPersonData = [
    new PersonData('Kirill Sturlis', '+175293748524', 'Ksmail@mail.ru', 'course-html'),
    new PersonData('Pol wops', '+175293128524', 'Kasmail@mail.ru', 'course-js'),
    new PersonData('Vem all', '+175293748524', 'Ksmassl@mail.ru', 'course-vue'),
    new PersonData('User', '+171293748524', 'Ksmaadl@mail.ru', 'course-php'),
    new PersonData('John Arch', '+1752931228524', 'Kdasamail@mail.ru', 'course-wordpress'),
    new PersonData('Kir Sty', '+175293748524', 'Ksmail@mail.ru', 'course-html'),
    new PersonData('Kella Main', '+175293128524', 'Ksmaiasl@mail.ru', 'course-js'),
    new PersonData('Kirill Tot', '+175293748524', 'Ksaaamail@mail.ru', 'course-vue')
  ]

  function randomNum(max, min = 0) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function initFunc() {
    const num = randomNum(arrPersonData.length - 1);
    const item = arrPersonData[num];

    document.querySelector('#name').value = item.name;
    document.querySelector('#phone').value = item.phone;
    document.querySelector('#email').value = item.email;
    document.querySelector('#product').value = item.course;
  }

  return {
    init: initFunc
  }
})();
testData.init()

export default testData