import { reactive } from 'vue'
import axios from 'axios';

export const store = reactive({
    url_movies: 'https://api.themoviedb.org/3/search/movie',
    url_tvs: 'https://api.themoviedb.org/3/search/tv',
    api_key: '852e68c71e621d65c4ca1fa0807cf96e',
    movies: [],
    tvs: [],
    userSearch: '',
    results: [],

    fetchMovies(query) {

        //console.log(this, this.url_movies);
        axios
            .get(this.url_movies, {
                params: {

                    api_key: this.api_key,

                    query: query,

                }

            }).then(response => {
                console.log(response);

                this.movies = response.data.results
                console.log(this.movies);

                this.results.push(...response.data.results)

                /* this.userSearch.push(...this.movies);
                console.log('FILM' + this.userSearch); */
            })

            .catch(error => {
                console.log('Error:');
                console.error(error);
            })
    },

    fetchTvs(query) {

        axios
            .get(this.url_tvs, {
                params: {

                    api_key: this.api_key,

                    query: query,

                }

            }).then(response => {
                console.log(response);

                this.tvs = response.data.results
                console.log(this.tvs);

                this.results.push(...response.data.results)

            })

            .catch(error => {
                console.log('Error:');
                console.error(error);
            })
    }
})