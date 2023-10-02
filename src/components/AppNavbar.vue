<script>
import { store } from '../store.js';

export default {

    name: 'AppNavbar',
    components: {

    },

    data() {
        return {
            store,
        }
    },

    methods: {
        searchMovies() {
            store.results = [];
            store.fetchMovies(this.store.userSearch);
            store.fetchTvs(this.store.userSearch);
            store.userSearch = '';
            store.fetchMovies = false
            store.fetchTvs = false
        },

    },

    created() {
        //ad app caricata mostrami i risultati richiesti per non lasciare pagina vuota
        this.store.userSearch = 'Back to the Future';
        this.searchMovies();
    },

}
</script>

<template>
    <header class="bg-black">

        <div class="container p-3">
            <div class="row p-2">

                <div class="col d-flex justify-content-start align-items-center">

                    <h1 class="text-danger text-center m-0">BOOLFIX</h1>

                </div>
                <!-- /.col -->

                <div class="col d-flex justify-content-start align-items-center">

                    <div class="input-group">
                        <input @keyup.enter="searchMovies" name="searchBar" id="searchBar" v-model="this.store.userSearch"
                            type="search" class="form-control border-0" placeholder="Cerca un film o una serie TV" />
                        <button @click="searchMovies" class="btn btn-danger">
                            Cerca
                        </button>
                    </div>
                    <!-- /.input-group -->

                </div>
                <!-- /.col -->

            </div>
            <!-- /.row -->
        </div>
    </header>
</template>

<style lang="scss" scoped></style>