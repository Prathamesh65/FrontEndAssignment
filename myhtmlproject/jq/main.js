
window.onload = function () {
app= new Vue({
	el:'#rot',
	data: {
		movies: [
		'Harry Potter'
		],
		newMovie:""
	},
	methods: {
		addMovie: function(){
			return this.movies.push(this.newMovie)
			this.newMovie = ''
		}
	},
	computed: {
		Npreview: function(){
			if (this.newMovie.length > 1){
				return this.newMovie
			}

		}
	}

})
}
