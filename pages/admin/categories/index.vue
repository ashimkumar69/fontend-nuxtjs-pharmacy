<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-data-table
            :search="search"
            :headers="headers"
            :items="desserts"
            sort-by="name"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-toolbar-title>Categories</v-toolbar-title>

                <v-spacer></v-spacer>
                <v-col cols="4">
                  <v-text-field
                    v-model="search"
                    color="light-blue lighten-2"
                    append-icon="mdi-magnify"
                    outlined
                    dense
                    clear-icon="mdi-close-circle"
                    clearable
                    label="Categories Search"
                    type="text"
                    @click:append="searchIt"
                    @click:clear="clearSearch"
                    class="mr-2"
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="light-blue lighten-2"
                      dark
                      class="mb-2 text-capitalize"
                      v-bind="attrs"
                      v-on="on"
                    >Create</v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.name" label="Category Name"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.product" label="Product"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.created_at" label="Created At"></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                      <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
              <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>



<script>
export default {
  data: () => ({
    dialog: false,
    search: "",
    headers: [
      {
        text: "Category Name",
        align: "start",
        value: "name"
      },
      { text: "Products", value: "product", filterable: false },
      { text: "Created At", value: "created_at", filterable: false },
      { text: "Actions", value: "actions", sortable: false, filterable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      product: 0,
      created_at: 0
    },
    defaultItem: {
      name: "",
      product: 0,
      created_at: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Category" : "Edit Category";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          product: 1,
          created_at: 2
        },
        {
          name: "Ice cream sandwich",
          product: 2,
          created_at: 3
        },
        {
          name: "Eclair",
          product: 159,
          created_at: 6.0
        },
        {
          name: "Cupcake",
          product: 159,
          created_at: 6.0
        },
        {
          name: "Gingerbread",
          product: 159,
          created_at: 6.0
        },
        {
          name: "Jelly bean",
          product: 159,
          created_at: 6.0
        },
        {
          name: "Lollipop",
          product: 159,
          created_at: 6.0
        },
        {
          name: "Honeycomb",
          product: 159,
          created_at: 6.0
        },
        {
          name: "Donut",
          product: 159,
          created_at: 6.0
        },
        {
          name: "KitKat",
          product: 159,
          created_at: 6.0
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
    searchIt() {},
    clearSearch() {}
  }
};
</script>