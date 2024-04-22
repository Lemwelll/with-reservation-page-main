<template>
  <v-row no-gutters>
    <v-col cols="12" xxl="6" xl="6" lg="6" md="6" class="fill-height">
      <v-row no-gutters>
        <v-col cols="12">
          <v-col cols="12">
            <v-form
              v-model="valid"
              @submit.prevent="
                signup({
                  id: form.id,
                  firstName: form.firstName,
                  lastName: form.lastName,
                  email: form.email,
                  password: form.password,
                })
              "
            >
              <v-row no-gutters class="pa-8">
                <v-col cols="12" class="text-h4 fontweight-black">
                  UIC Bookstore Reservation System
                </v-col>
                <v-col cols="12" class="text-h4 fontweight-black mb-8">
                  (Fr. Selga Campus)
                </v-col>
                <v-col cols="12" xxl="8" xl="8" lg="8" class="my-2">
                  <v-text-field
                    v-model="form.firstName"
                    label="First Name"
                    :rules="[requiredInput]"
                    hint="Juan"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xxl="8" xl="8" lg="8" class="my-2">
                  <v-text-field
                    v-model="form.lastName"
                    label="Last Name"
                    :rules="[requiredInput]"
                    hint="Luna"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xxl="8" xl="8" lg="8" class="my-2">
                  <v-text-field
                    v-model="form.email"
                    label="Email Address"
                    :rules="[requiredInput, validEmail]"
                    hint="We recommend using your work email"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xxl="8" xl="8" lg="8" class="my-2">
                  <v-text-field
                    v-model="form.id"
                    label="ID Number/Student ID"
                    :rules="[requiredInput]"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xxl="8" xl="8" lg="8" class="my-2">
                  <v-text-field
                    v-model="form.password"
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
                      label="I want to receive email about future updates, and events."
                      hide-details
                      :rules="[requiredInput]"
                    ></v-checkbox>
                  </v-row>
                </v-col>

                <v-col
                  cols="12"
                  class="text-subtitle-2 font-weight-bold mb-4 px-2"
                >
                  By creating an account, you agree to the Terms of use and
                  Privacy Policy.
                </v-col>

                <v-col cols="12" class="mt-2">
                  <v-btn
                    size="small"
                    rounded="lg"
                    class="font-weight-bold"
                    elevation="2"
                    :disabled="!valid"
                    type="submit"
                  >
                    create an account
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-col>
      </v-row>
    </v-col>

    <v-col
      cols="12"
      xxl="6"
      xl="6"
      lg="6"
      md="6"
      class="d-md-block d-sm-none d-none"
    >
      <v-img src="/img-1.svg" height="100vh" cover></v-img>
    </v-col>
  </v-row>
</template>

<script setup>
import useUtils from "~/composables/useUtils";
const { requiredInput, validEmail, minPasswordLength } = useUtils();
const valid = ref(false);
const show = ref(false);
const form = ref({
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});

const { signup: createNewUser } = useLocalAuth();

async function signup({ id = "", email = "", password = "", firstName ="", lastName="" }) {
  try {
    await createNewUser({ id, email, password, firstName, lastName });
    
  } catch (error) {}
}

definePageMeta({
  layout: "plain",
});
</script>
