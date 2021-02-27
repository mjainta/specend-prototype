<template>
  <div>
    <b-button
      label="Import purchases / sales"
      type="is-primary"
      size="is-medium"
      @click="isModalActive = true" />
    <b-modal
      v-model="isModalActive"
      has-modal-card
      :can-cancel="false">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Purchases / Sales</p>
        </header>
        <section class="modal-card-body">
        <nav class="panel">
          <p class="panel-heading">
            Repositories
          </p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input class="input" type="text" placeholder="Search">
              <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <p class="panel-tabs">
            <a class="is-active">All</a>
            <a>Public</a>
            <a>Private</a>
            <a>Sources</a>
            <a>Forks</a>
          </p>
          <a class="panel-block is-active">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            bulma
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            marksheet
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            minireset.css
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            jgthms.github.io
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-code-branch" aria-hidden="true"></i>
            </span>
            daniellowtw/infboard
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-code-branch" aria-hidden="true"></i>
            </span>
            mojs
          </a>
          <label class="panel-block">
            <input type="checkbox">
            remember me
          </label>
          <div class="panel-block">
            <button class="button is-link is-outlined is-fullwidth">
              Reset all filters
            </button>
          </div>
        </nav>
        </section>
        <footer class="modal-card-foot">
          <b-button
            label="Back"
            @click="isModalActive = false" />
        </footer>
      </div>
    </b-modal>
  </div>
</template>
<script>
const default_layout = "default";


export default {
  computed: {},
  data() {
      return {
          isModalActive: false,
          purchases: window.specendData.orders.purchases,
          sales: window.specendData.orders.sales
      }
  }
};
</script>
