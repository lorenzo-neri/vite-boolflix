<script>
import { store } from './store.js';

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
            store.userSearch = ''
        },

        voteOneToFive(vote) {
            const roundedVote = Math.ceil(vote);
            const voteOnetoFive = roundedVote / 2;
            const roundedVoteOneToFive = Math.ceil(voteOnetoFive);
            return Number(roundedVoteOneToFive)
        }
    },

    created() {
    },

}
</script>

<template></template>

<style lang="scss" scoped></style>