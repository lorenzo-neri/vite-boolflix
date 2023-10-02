<script>
import { store } from '../store.js';
import Card from './Card.vue'

export default {

    name: 'AppMain',
    components: {
        Card,
    },

    data() {
        return {
            store,
        }
    },

    methods: {
    },

    created() {
    },

}
</script>

<template>
    <!-- MAIN -->
    <div class="container p-3">


        <div class="row row-cols-2 row-cols-md-3">

            <div class="col p-3" v-for="(result, index) in  store.results " :key="index">

                <Card :rPoster="result.poster_path" :UrlPoster="store.url_poster" :sizePoster="store.size_poster"
                    :rTitle="result.title || result.name" :rOriginalTitle="result.original_title ||
                        result.original_name" :rLanguage="result.original_language" :rVote="result.vote_average"
                    :rOverview="result.overview" />


            </div>
            <!-- /.col -->

        </div>
        <!-- /.row -->

    </div>
    <!-- /.container -->
</template>

<style lang="scss" scoped></style>