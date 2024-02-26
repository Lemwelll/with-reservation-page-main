<template>
  <v-row
    no-gutters
    class="pa-4 fill-height"
    justify="center"
    align-content="center"
  >
    <v-col cols="12" xxl="6" xl="6" lg="6">
      <v-card>
        <v-row no-gutters class="pa-4">
          <v-col cols="4">
            <v-icon size="200">mdi-account-circle-outline</v-icon>
          </v-col>

          <v-col cols="8">
            <v-row no-gutters class="fill-height" align-content="center">
              <v-col cols="12">
                Full Name: <span class="font-weight-black"> </span>
              </v-col>

              <v-col cols="12">
                Phone Number: <span class="font-weight-black"> </span>
              </v-col>

              <v-col cols="12">
                Email: <span class="font-weight-black"> </span>
              </v-col>

              <v-col cols="12">
                <v-switch
                  v-model="isAdmin"
                  hide-details
                  inset
                  label="Admin Mode"
                ></v-switch>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const { isAdmin } = useLocalAuth();
</script>
