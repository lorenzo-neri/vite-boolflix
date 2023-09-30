<script>
import { store } from './store.js';
import AppNavbar from './components/AppNavbar.vue'

export default {

  name: 'App',
  components: {
    AppNavbar,
  },

  data() {
    return {
      store,
    }
  },

  methods: {

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

<template>
  <AppNavbar />

  <!-- MAIN -->
  <div class="container p-3">
    <div class="row row-cols-2 row-cols-md-3">

      <div id="card_container" class="col p-3" v-for="(result, index) in  store.results " :key="index">


        <!-- TODO#1 -->
        <div v-if="store.results.length > 0">
          <!-- TODO#1 -->



          <div class="card">
            <div id="card_poster">

              <img
                :src="result.poster_path ? (store.url_poster + store.size_poster + result.poster_path) : 'https://picsum.photos/405/607'"
                :alt="result.title || result.name">

            </div>


            <!-- CARD IN DISPLAY NONE -->
            <div id="card_info" class="text-white">

              <div class="card-body">

                <!-- TTILE -->
                <h5 class="card-title">
                  <strong>Titolo:</strong> {{ result.title || result.name }}
                </h5>

                <!-- ORIGINAL TITLE -->
                <p class="card-text">
                  <span v-if="result.original_title != result.title || result.original_name != result.name">
                    <strong>Titolo Originale:</strong> {{ result.original_title || result.original_name }}
                  </span>
                </p>

                <!-- LANGUAGE -->
                <p class="card-text">
                  <strong>Lingua: </strong>
                  <span v-if="result.original_language == 'en'">

                    <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/united_kingdom_flags_flag_17079.png'"
                      :alt="result.original_language">
                  </span>
                  <span v-else-if="result.original_language == 'es'">

                    <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/spain_flags_flag_17068.png'"
                      :alt="result.original_language">
                  </span>
                  <span v-else-if="result.original_language == 'it'">

                    <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/italy_flags_flag_17018.png'"
                      :alt="result.original_language">
                  </span>
                  <span v-else-if="result.original_language == 'fr'">

                    <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/france_flags_flag_16999.png'"
                      :alt="result.original_language">
                  </span>
                  <span v-else-if="result.original_language == 'de'">

                    <img :src="'https://cdn.icon-icons.com/icons2/97/PNG/256/germany_flags_flag_17001.png'"
                      :alt="result.original_language">
                  </span>

                  <span v-else> {{ result.original_language }}</span>
                </p>

                <!-- VOTE -->
                <p class="card-text">
                  <strong>Voto: </strong>
                  <span v-for="star in voteOneToFive(result.vote_average)">
                    <svg xmlns="http://www.w3.org/2000/svg" height="0.75em" viewBox="0 0 576 512">
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        style="fill: rgb(229, 193, 30);" />
                    </svg>
                  </span>

                  <span v-for="star in (5 - voteOneToFive(result.vote_average))">
                    <svg xmlns="http://www.w3.org/2000/svg" height="0.75em" viewBox="0 0 576 512">
                      <path
                        d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
                        style="fill: rgb(255, 255, 255);" />
                    </svg>
                  </span>
                </p>

                <!-- OVERVIEW -->
                <p class="card-text">
                  <strong>Overview:</strong> {{ result.overview }}
                </p>

              </div>
            </div>
          </div>
          <!-- /.card -->


        </div>
        <!-- v-if="store.results.length > 0 -->


        <!-- TODO#1 -->
        <div v-else class="text-white bg-danger">
          Non ci sono film disponibili
        </div>
        <!-- TODO#1 -->


      </div>
      <!-- /.col -->

    </div>
    <!-- /.row -->

  </div>
  <!-- /.container -->
</template>

<style lang="scss" scoped></style>