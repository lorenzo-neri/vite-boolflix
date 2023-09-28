import { reactive } from 'vue'
import axios from 'axios';

export const store = reactive({
    base_url: 'https://api.themoviedb.org/3/search/movie',
    api_key: '852e68c71e621d65c4ca1fa0807cf96e',
    movies: [],
    searchQuery: '',

    fetchData(url) {

        //console.log(this, this.base_url);
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
            })

            .catch(error => {
                console.log('Error:');
                console.error(error);
            })
    }
})