const App = {
	data() {
		return {
			placeholder: 'Введите название заметки',
			title: 'Список заметок',
			inputValue: '',
			notes: []
		}
	},
	methods: {
		// inputChangeHandler(event) {
		// 	this.inputValue = event.target.value.trim()
		// },
		addNewNote() {
			if (this.inputValue.trim() !== '') {
				this.notes.push(this.inputValue)
				this.inputValue = ''
			}
		},
		toUpperCase(item) {
			return item.toUpperCase()
		},
		removeNote(index, event) {
			this.notes.splice(index, 1)
		}
	},
	// computed: {
	// 	doubleCountComputed() {
	// 		return this.notes.length * 2
	// 	}
	// },
	// watch: {
	// 	inputValue(value) {
	// 	}
	// }
}

Vue.createApp(App).mount('#app')