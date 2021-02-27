<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">
          SpecEnd
        </p>
        <p class="subtitle">
          The backend for your specs
        </p>
      </div>
    </section>
    <div class="container">
      <h3 class="title"># Actions</h3>
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile is-vertical box notification is-info">
            <p class="title">View inventory</p>
            <p class="subtitle">Check out your inventory</p>
            <div class="content">
              <b-button
                label="Launch inventory"
                type="is-white"
                size="is-medium"
                @click="isInventoryModalActive = true" />
              <p>In the inventory you can view your specs. You can find out your profit for each card.</p>
            </div>
          </div>
          <div class="tile is-vertical box notification is-success">
            <p class="title">Import</p>
            <p class="subtitle">Import purchases and sales</p>
            <div class="content">
              <p>Import new inventory from purchases with a single click. Update your inventory after a sale.</p>
            </div>
          </div>
          <div class="tile is-vertical box notification is-warning">
            <p class="title">Statistics</p>
            <p class="subtitle">Gather insights about your business activities</p>
            <div class="content">
              <p>View statistics on your inventory and sales. Check when you sell the most cards and your profit trend.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal
        v-model="isInventoryModalActive"
        has-modal-card
        full-screen
        :can-cancel="false">
        <inventory></inventory>
    </b-modal>
  </div>
</template>
<script>
const default_layout = "default";


export default {
  computed: {},
  data() {
      return {
          message:'Hello World!',
          isInventoryModalActive: false,
      }
  }
};
</script>
