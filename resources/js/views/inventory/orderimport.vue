<template>
  <section>
    <b-collapse
      aria-id="contentIdForA11y2"
      class="panel"
      animation="slide"
      v-model="isOpen"
    >
      <template #trigger>
        <div
          class="panel-heading"
          role="button"
          aria-controls="contentIdForA11y2"
        >
          <strong>Pending Purchases / Sales ...</strong>
        </div>
      </template>
      <p class="panel-tabs">
        <a :class="activeTab == 'purchases' ? 'is-active' : ''"
          @click="activeTab = 'purchases'">Purchases</a>
        <a :class="activeTab == 'sales' ? 'is-active' : ''"
          @click="activeTab = 'sales'">Sales</a>
      </p>
      <div class="panel-block">
        <table v-if="activeTab == 'purchases'" class="table is-striped is-narrow is-hoverable">
            <thead>
                <tr>
                  <th># Cards</th>
                  <th>Order ID</th>
                  <th>Price</th>
                  <th>Seller</th>
                  <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="purchase in purchases" v-bind:key="purchase.id">
                  <td>{{ purchase.cards_number }}</td>
                  <td>{{ purchase.order_id }}</td>
                  <td>{{ currencyHelper.stringify(purchase.price) }}</td>
                  <td>{{ purchase.seller }}</td>
                  <td>
                    <b-icon
                        icon="import"
                        size="is-small">
                    </b-icon>
                  </td>
                </tr>
            </tbody>
        </table>
        <table v-if="activeTab == 'sales'" class="table is-striped is-narrow is-hoverable">
            <thead>
                <tr>
                  <th># Cards</th>
                  <th>Order ID</th>
                  <th>Price</th>
                  <th>Buyer</th>
                  <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="sale in sales" v-bind:key="sale.id">
                  <td>{{ sale.cards_number }}</td>
                  <td>{{ sale.order_id }}</td>
                  <td>{{ currencyHelper.stringify(sale.price) }}</td>
                  <td>{{ sale.buyer }}</td>
                  <td>
                    <b-icon
                        icon="import"
                        size="is-small">
                    </b-icon>
                  </td>
                </tr>
            </tbody>
        </table>
      </div>
    </b-collapse>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      activeTab: "purchases",
      purchases: window.specendData.orders.purchases,
      sales: window.specendData.orders.sales,
    };
  },
};
</script>
