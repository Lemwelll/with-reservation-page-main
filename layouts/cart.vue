<template>
  <v-app>
    <v-app-bar class="px-2" elevation="1">
      <span
        class="font-weight-bold"
        style="cursor: pointer"
        @click="useRouter().push({ name: 'home' })"
      >
        UIC Bookstore Reservation System
      </span>
      <v-spacer></v-spacer>
      <v-btn icon class="mx-1">
        <v-icon color="primary">mdi-bell-outline</v-icon>
      </v-btn>
      <v-btn icon class="mx-1" :to="{ name: 'cart' }">
        <v-badge :content="items.length" color="primary">
          <v-icon color="primary">mdi-cart-outline</v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon class="mr-2" :to="{ name: 'account' }">
        <v-icon color="primary">mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>

    <v-footer app height="88" color="primary" style="border-width: thin">
      <v-row no-gutters class="fill-height" align-content="center">
        <v-col cols="6" class="text-h6 font-weight-bold">
          Total Payment: {{ formatNumberIntoString(total) }}
        </v-col>

        <v-col cols="6">
          <v-row no-gutters justify="end">
            <v-btn
              small
              variant="outlined"
              rounded="xl"
              :disabled="!items.length"
              @click="proceedToReservation(reservation)"
            >
              Click to Confirm Reservation
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup>
const { items, total } = useCart();
const { formatNumberIntoString } = useUtils();

const { addReservationItem, reservation } = useReservation();

function proceedToReservation(item) {
  addReservationItem(item);
  items.value = [];
}
</script>
