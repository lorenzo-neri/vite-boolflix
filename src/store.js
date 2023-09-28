import { reactive } from 'vue'
import axios from 'axios';

export const store = reactive({
    url_movies: 'https://api.themoviedb.org/3/search/movie',
    url_tvs: 'https://api.themoviedb.org/3/search/tv',
    api_key: '852e68c71e621d65c4ca1fa0807cf96e',
    movies: [],
    tvs: [],
    searchQuery: [],

    fetchData(url) {

        //console.log(this, this.url_movies);
        axios
            .get(url, {
                params: {

                    api_key: this.api_key,

                    query: this.searchQuery,

                }

            }).then(response => {
                console.log(response);

                this.movies = response.data.results
                console.log(this.movies);

                this.searchQuery.push(...this.movies);
                console.log('FILM' + this.searchQuery);
            })

            .catch(error => {
                console.log('Error:');
                console.error(error);
            })
    }
})