<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Create Category</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <client-only>
                <ValidationObserver ref="observer">
                  <v-form ref="form">
                    <ValidationProvider v-slot="{ errors }" name="name" rules="required">
                      <v-text-field
                        color="light-blue lighten-2"
                        prepend-icon="fas fa-user"
                        v-model="form.name"
                        :error-messages="errors"
                        label="Name"
                        required
                      ></v-text-field>
                    </ValidationProvider>
                  </v-form>
                </ValidationObserver>
              </client-only>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn text @click="submit" class="text-capitalize">Create</v-btn>
              <v-spacer></v-spacer>
              <v-btn text @click="clear" class="text-capitalize">Reset Form</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Categories-Create",
  data() {
    return {
      form: {
        name: null
      }
    };
  },
  methods: {
    submit() {
      this.$refs.observer.validate();
      this.$refs.form.reset();
    },
    clear() {
      this.$refs.form.reset();
      this.$refs.observer.reset();
    }
  }
};
</script>

<style lang="scss" scoped>
.height {
  height: 100%;
}
</style>