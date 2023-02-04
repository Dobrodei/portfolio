export default {
	tableEl: {
		tableBody: document.querySelector('#tbody'),
		selectProduct: document.querySelector('#productSelect'),
		filterBtns: document.querySelectorAll('a[data-value]'),
		badgeNew: document.querySelector('#badge-new'),
	},
	displayTable: function (data) {
		this.tableEl.tableBody.innerHTML = ''
		data.forEach(item => {
			let productText

			if (item.productValue == 'course-html') {
				productText = 'Html course'
			} else if (item.productValue == 'course-js') {
				productText = 'Javascript course'
			} else if (item.productValue == 'course-vue') {
				productText = 'VUE course'
			} else if (item.productValue == 'course-php') {
				productText = 'PHP course'
			} else {
				productText = 'Wordpress course'
			}

			let template = `
       <tr class="tbody__tr" id="${item.id}">
         <th scope="row"> ${item.id} </th> 
         <td> ${item.date.noFullDate} </td> 
         <td> ${productText} </td> 
         <td> ${item.nameValue} </td> 
         <td> ${item.emailValue} </td> 
         <td> ${item.phoneValue} </td> 
         <td><div class="badge badge-pill badge-${item.status}"></div></td> 
         <td><a href="edit.html#${item.id}" data-edit> Edit </a></td> 
        </tr>
      `
			this.tableEl.tableBody.insertAdjacentHTML('beforeend', template)
		})
	},
	scoreNewItem: function (data) {
		const newItem = data.filter(item => item.status == 'new')
		this.tableEl.badgeNew.innerText = newItem.length
	},
}
