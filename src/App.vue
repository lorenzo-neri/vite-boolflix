<script>
import { store } from './store.js';

export default {

  name: 'App',
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
      const roundedVoteOneToFive = Math.ceil(voteOnetoFive)
      return roundedVoteOneToFive
    }
  },

  created() {
  },

}
</script>

<template>
  <div class="container p-3">

    <h1 class="text-danger text-center">BOOLFIX</h1>

    <div class="row p-2">
      <div class="col">

        <div class="input-group mb-3">
          <input @keyup.enter="searchMovies" name="searchBar" id="searchBar" v-model="this.store.userSearch" type="search"
            class="form-control border-0" placeholder="Cerca film per nome" />
          <button @click="searchMovies" class="btn btn-danger">
            Cerca
          </button>
        </div>
        <!-- /.input-group -->

      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6">

      <div class="col p-3" v-for="(result, index) in  store.results " :key="index">

        <div class="card">

          <img
            :src="result.poster_path ? (store.url_poster + store.size_poster + result.poster_path) : 'https://imgs.search.brave.com/QXgNOKYWDmC_MpGFNuS03j-USyTt5GCVoehACdyZHUM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9iZWVi/b20uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzAyL25l/dGZsaXgtbm90LXdv/cmtpbmcuanBnP3c9/NzAwJmg9NDg3JmNy/b3A9MSZxdWFsaXR5/PTc1'"
            :alt="result.title || result.name">

          <div class="card-body">
            <h5 class="card-title">
              {{ result.title || result.name }}
            </h5>
            <p class="card-text">Titolo Originale: {{ result.original_title || result.original_name }}</p>

            <!-- LANGUAGE -->
            <p class="card-text">
              <span v-if="result.original_language == 'en'">
                Lingua:
                <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/united_kingdom_flags_flag_17079.png'"
                  :alt="result.original_language">
              </span>
              <span v-else-if="result.original_language == 'es'">
                Lingua:
                <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/spain_flags_flag_17068.png'"
                  :alt="result.original_language">
              </span>
              <span v-else-if="result.original_language == 'it'">
                Lingua:
                <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/italy_flags_flag_17018.png'"
                  :alt="result.original_language">
              </span>
              <span v-else-if="result.original_language == 'fr'">
                Lingua:
                <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/france_flags_flag_16999.png'"
                  :alt="result.original_language">
              </span>
              <span v-else-if="result.original_language == 'de'">
                Lingua:
                <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/germany_flags_flag_17001.png'"
                  :alt="result.original_language">
              </span>

              <span v-else> Lingua: {{ result.original_language }}</span>
            </p>

            <p class="card-text">Voto: {{ voteOneToFive(result.vote_average) }}</p>
          </div>
        </div>
        <!-- /.card -->

      </div>
      <!-- /.col -->

    </div>
    <!-- /.row -->

  </div>
  <!-- /.container -->
</template>

<style lang="scss" scoped></style>