import { reactive } from 'vue'
import axios from 'axios';

export const store = reactive({
    url_movies: 'https://api.themoviedb.org/3/search/movie',
    url_tvs: 'https://api.themoviedb.org/3/search/tv',

    url_poster: 'https://image.tmdb.org/t/p/',
    size_poster: 'w342/',

    url_credits_tvs: `https://api.themoviedb.org/3/tv/`, // + {series_id}/credits

    api_key: '852e68c71e621d65c4ca1fa0807cf96e',
    movies: [],
    tvs: [],
    userSearch: '',
    results: [],

    creditsTvs: [],

    showErrorMessage: false,

    fetchMovies(query) {

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



                if (this.results.length == 0) {
                    this.showErrorMessage = true;
                } else {
                    this.showErrorMessage = false;
                }

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

                this.tvs = response.data.results;
                console.log(this.tvs);

                this.results.push(...response.data.results);



                if (this.results.length == 0) {
                    this.showErrorMessage = true;
                } else {
                    this.showErrorMessage = false;
                }

            })

            .catch(error => {
                console.log('Error:');
                console.error(error);
            })
    },

    fetchCreditsTvs(id) {

        axios
            .get(this.url_credits_tvs, {
                params: {

                    api_key: this.api_key,

                    credits: '/credits',

                }

            }).then(response => {
                //console.log(response);

                this.creditsTvs = response.data.cast;
                console.log(this.creditsTvs);

                //this.results.push(...response.data.results);

            })

            .catch(error => {
                console.log('Error:');
                console.error(error);
            })
    }
})