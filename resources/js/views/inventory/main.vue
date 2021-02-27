<template>
  <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
          <p class="modal-card-title">Inventory</p>
      </header>
      <section class="modal-card-body">
        <inv-order-import></inv-order-import>
        <div class="box"></div>
        <h4 class="title is-4">Current inventory</h4>
        <table class="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Set</th>
                  <th>Foil</th>
                  <th>Condition</th>
                  <th>Purchase price</th>
                  <th>Sell price</th>
                  <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="card in inventory" v-bind:key="card.id">
                  <td>{{ card.count }}</td>
                  <td>{{ card.name }}</td>
                  <td>{{ card.set }}</td>
                  <td>{{ card.foil }}</td>
                  <td>{{ card.condition }}</td>
                  <td>{{ currencyHelper.stringify(card.price_purchase) }}</td>
                  <td>{{ currencyHelper.stringify(card.price_sell) }}</td>
                  <td>
                    <b-icon
                        icon="plus-circle-outline"
                        size="is-small">
                    </b-icon>
                    <b-icon
                        icon="minus-circle-outline"
                        size="is-small">
                    </b-icon>
                  </td>
                </tr>
            </tbody>
        </table>
      </section>
      <footer class="modal-card-foot">
          <b-button
              label="Back"
              @click="$parent.close()" />
      </footer>
  </div>
</template>
<script>
const default_layout = "default";


export default {
  computed: {},
  data() {
      return {
          isInventoryModalActive: false,
          inventory: window.specendData.inventory
      }
  }
};
</script>
