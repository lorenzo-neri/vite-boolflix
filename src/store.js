import { reactive } from 'vue'
import axios from 'axios';

export const store = reactive({
    base_url: 'https://api.themoviedb.org/3/search/movie?api_key=852e68c71e621d65c4ca1fa0807cf96e&query=back+to+the+future',

    fetchData() {

        //console.log(this, this.base_url);
        axios
            .get(this.base_url, {
                params: {

                    // archetype: this.archetypeSelected,

                    // offset: this.offset,

                    // num: this.limit,
                }
            }).then(response => {
                console.log(response);

                this.movie = response.data.results
                console.log(this.movie);
            })

            .catch(error => {
                console.log('Error:');
                console.error(error);
            })
    }
})