<template>
  <v-row no-gutters>
    <v-col
      cols="12"
      xxl="6"
      xl="6"
      lg="6"
      md="6"
      class="fill-height d-md-block d-sm-none d-none"
    >
      <v-img src="/img.svg" height="100vh" cover></v-img>
    </v-col>

    <v-col cols="12" xxl="6" xl="6" lg="6" md="6">
      <v-row no-gutters class="pa-8 fill-height">
        <v-form v-model="valid" @submit.prevent="submit(email, password)">
          <v-col cols="12" class="text-h4 font-weight-black mb-8">
            UIC Bookstore Online Reservation System
          </v-col>
          <v-col cols="12" class="text-h5 mb-6"> Sign In </v-col>
          <v-col cols="12" xxl="8" xl="8" lg="8" justify-self="center">
            <v-row no-gutters>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  label="Email Address"
                  :rules="[(v) => !!v || 'Required', validEmail]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="my-2">
                <v-text-field
                  v-model="password"
                  :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[requiredInput, minPasswordLength]"
                  :type="show ? 'text' : 'password'"
                  name="input-10-2"
                  label="Password"
                  hint="At least 8 characters"
                  class="input-group--focused"
                  @click:append-inner="show = !show"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="text-subtitle-2 font-weight-bold mb-4">
                <v-row no-gutters justify="center">
                  <v-checkbox
                    density="compact"
                    class="text-subtitle-2"
                    label="Remember me"
                    hide-details
                  ></v-checkbox>
                </v-row>
              </v-col>
              <v-col cols="12" class="text-subtitle-2 font-weight-bold mb-4">
                <v-row no-gutters justify="end">
                  <nuxt-link :to="{ name: 'forgot-password' }"
                    >Forgot your password</nuxt-link
                  >
                </v-row>
              </v-col>
              <v-col cols="12" class="mt-2">
                <v-row no-gutters>
                  <v-col cols="12" xxl="6" xl="6" lg="6">
                    <v-btn
                      block
                      size="small"
                      rounded="lg"
                      class="font-weight-bold"
                      elevation="2"
                      :disabled="!valid"
                      type="submit"
                    >
                      Sign In
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" class="text-subtitle-2 font-weight-bold mb-4">
                Don't have an account?
                <nuxt-link :to="{ name: 'sign-up' }">Sign Up</nuxt-link>
              </v-col>
            </v-row>
          </v-col>
        </v-form>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import useUtils from "~/composables/useUtils";
definePageMeta({
  layout: "plain",
});
const { requiredInput, validEmail, minPasswordLength } = useUtils();
const show = ref(false);
const valid = ref(false);
const email = ref("");
const password = ref("");

async function submit() {
  await useRouter().push({
    name: "home",
  });
}
</script>
