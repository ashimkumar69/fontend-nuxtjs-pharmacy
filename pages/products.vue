<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-sheet color="transparent">
          <v-row>
            <v-col lg="3" class="py-0 py-lg-2">
              <v-list color="transparent" dark>
                <v-list-item class="pl-0">
                  <v-list-item-icon class="mr-0">
                    <v-icon small color="light-blue lighten-2">fas fa-file-medical</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="text--primary text-h6">All Medicine</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>

            <v-col cols="12" lg="4" class="py-0 py-lg-2">
              <v-select
                color="light-blue lighten-2"
                v-model="select"
                :items="categories"
                item-text="name"
                item-value="tag"
                return-object
                label="Medicien Categories"
                dense
                outlined
              ></v-select>
            </v-col>
            <v-col cols="12" lg="5" class="py-0 py-lg-2">
              <v-text-field
                color="light-blue lighten-2"
                v-model="form.message"
                append-icon="mdi-magnify"
                outlined
                dense
                clear-icon="mdi-close-circle"
                clearable
                label="Search"
                type="text"
                @click:append="searchIt"
                @click:clear="clearSearch"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-sheet>

        <transition-group
          name="list-complete"
          class="list-complete"
          tag="section"
          mode="out-in"
          :duration="{ enter: 800, leave: 800 }"
        >
          <v-card outlined v-for="item in filteredItems" :key="item.id" class="list-complete-item">
            <v-img height="200px" :src="item.image"></v-img>
            <v-card-subtitle class="pb-0 text-capitalize">{{ item.category}}</v-card-subtitle>
            <v-card-title
              class="font-weight-bold text-subtitle-2 pb-0 pt-0"
            >{{ item.name | str_limit(34) }}</v-card-title>
            <v-card-title
              v-if="item.oldMrp"
              class="font-weight-bold text-subtitle-2 text-decoration-line-through pt-0 pb-0"
            >MRP: {{ item.oldMrp }}</v-card-title>
            <v-card-title
              v-else
              class="font-weight-bold text-subtitle-2 text-decoration-line-through pt-0 pb-0"
            >MRP: 0</v-card-title>
            <v-card-title class="font-weight-bold text-subtitle-2 pt-0 pb-0">MRP: {{ item.newMrp }}</v-card-title>

            <v-card-actions class="pt-0">
              <v-row align="center" justify="end" class="px-2">
                <v-btn
                  color="light-blue lighten-2 "
                  class="text-capitalize"
                  outlined
                  @click.stop="openDialog(item.id)"
                >Details</v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </transition-group>
        <div class="text-center">
          <v-dialog v-model="dialog" width="500">
            <v-card>
              <v-card-title>Product Details</v-card-title>
              <v-img v-if="product" height="200px" :src="product.image"></v-img>
              <v-card-text>
                <v-simple-table>
                  <tbody v-if="product">
                    <tr>
                      <td>Category: {{ product.category }}</td>
                    </tr>
                    <tr>
                      <td>Name: {{ product.name }}</td>
                    </tr>
                    <tr v-if="product.oldMrp">
                      <td class="text-decoration-line-through">MRP: {{ product.oldMrp }}</td>
                    </tr>
                    <tr v-else>
                      <td class="text-decoration-line-through">MRP: 0</td>
                    </tr>
                    <tr>
                      <td>MRP: {{ product.newMrp }}</td>
                    </tr>
                    <tr>
                      <td>Generic: {{ product.Generic }}</td>
                    </tr>
                    <tr>
                      <td>Type: {{ product.Type }}</td>
                    </tr>
                    <tr>
                      <td>Quantity: {{ product.Quantity }}</td>
                    </tr>
                    <tr>
                      <td>Pieces Per Pata: {{ product.PiecesPerPata }}</td>
                    </tr>
                    <tr>
                      <td>Dose: {{ product.Dose }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="light-blue lighten-2" text @click="dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-col>
      <v-col cols="12">
        <div class="text-center">
          <v-pagination dark color="light-blue lighten-2" v-model="page" :length="6"></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      page: 1,
      filterProjects: [
        {
          id: 1,
          category: "medicine",
          name: "Chu Chu Wet Wipes Cylinder Chu Chu Wet Wipes Cylinder",
          // oldMrp: "60 TK (per pata)",
          newMrp: "50 TK (per pata)",
          image: "/images/product/medicine/1.webp",
          Generic: "azithromycin",
          Type: "Tablet",
          Quantity: "12's pack",
          PiecesPerPata: "5",
          Dose: "100mg",
          tags: ["all", "tag1"]
        },
        {
          id: 2,
          category: "medicine",
          name: "Chu Chu Wet Wipes Cylinder (Chu Chu)",
          oldMrp: "60 TK (per pata)",
          newMrp: "50 TK (per pata)",
          image: "/images/product/medicine/2.webp",
          Generic: "azithromycin",
          Type: "Tablet",
          Quantity: "12's pack",
          PiecesPerPata: "5",
          Dose: "200mg",
          tags: ["all", "tag2"]
        },
        {
          id: 3,
          category: "medicine",
          name: "Chu Chu Wet Wipes Cylinder",
          oldMrp: "60 TK (per pata)",
          newMrp: "50 TK (per pata)",
          image: "/images/product/medicine/3.webp",
          Generic: "azithromycin",
          Type: "Tablet",
          Quantity: "12's pack",
          PiecesPerPata: "5",
          Dose: "300mg",
          tags: ["all", "tag1"]
        },
        {
          id: 4,
          category: "medicine",
          name: "Chu Chu Wet Wipes Cylinder",
          oldMrp: "60 TK (per pata)",
          newMrp: "50 TK (per pata)",
          image: "/images/product/medicine/4.webp",
          Generic: "azithromycin",
          Type: "Tablet",
          Quantity: "12's pack",
          PiecesPerPata: "5",
          Dose: "400mg",
          tags: ["all", "tag2"]
        },
        {
          id: 5,
          category: "medicine",
          name: "Chu Chu Wet Wipes Cylinder",
          oldMrp: "60 TK (per pata)",
          newMrp: "50 TK (per pata)",
          image: "/images/product/medicine/1.webp",
          Generic: "azithromycin",
          Type: "Tablet",
          Quantity: "12's pack",
          PiecesPerPata: "5",
          Dose: "500mg",
          tags: ["all", "tag1"]
        },
        {
          id: 6,
          category: "medicine",
          name: "Chu Chu Wet Wipes Cylinder",
          oldMrp: "60 TK (per pata)",
          newMrp: "50 TK (per pata)",
          image: "/images/product/medicine/1.webp",
          Generic: "azithromycin",
          Type: "Tablet",
          Quantity: "12's pack",
          PiecesPerPata: "5",
          Dose: "500mg",
          tags: ["all", "tag2"]
        },
        {
          id: 7,
          category: "medicine",
          name: "Chu Chu Wet Wipes Cylinder",
          oldMrp: "60 TK (per pata)",
          newMrp: "50 TK (per pata)",
          image: "/images/product/medicine/1.webp",
          Generic: "azithromycin",
          Type: "Tablet",
          Quantity: "12's pack",
          PiecesPerPata: "5",
          Dose: "500mg",
          tags: ["all", "tag1"]
        },
        {
          id: 8,
          category: "medicine",
          name: "Chu Chu Wet Wipes Cylinder",
          oldMrp: "60 TK (per pata)",
          newMrp: "50 TK (per pata)",
          image: "/images/product/medicine/1.webp",
          Generic: "azithromycin",
          Type: "Tablet",
          Quantity: "12's pack",
          PiecesPerPata: "5",
          Dose: "500mg",
          tags: ["all", "tag2"]
        },
        {
          id: 9,
          category: "medicine",
          name: "Chu Chu Wet Wipes Cylinder",
          oldMrp: "60 TK (per pata)",
          newMrp: "50 TK (per pata)",
          image: "/images/product/medicine/1.webp",
          Generic: "azithromycin",
          Type: "Tablet",
          Quantity: "12's pack",
          PiecesPerPata: "5",
          Dose: "500mg",
          tags: ["all", "tag1"]
        }
      ],
      currentTag: "all",
      dialog: false,
      product: null,
      categories: [
        { tag: "all", name: "All" },
        { tag: "tag1", name: "HTML" },
        { tag: "tag2", name: "Nuxtjs" }
      ],
      select: { tag: "all", name: "All" },
      form: {
        message: null
      }
    };
  },
  computed: {
    filteredItems() {
      const filter = this.currentTag;
      return this.filterProjects.filter(function(item) {
        return item.tags.indexOf(filter) !== -1;
      });
    }
  },
  methods: {
    openDialog(id) {
      this.dialog = true;

      this.filterProjects.map(product => {
        if (product.id === id) {
          this.product = product;
        }
      });
    },
    searchIt() {},
    clearSearch() {
      this.form.message = "";
    }
  },
  watch: {
    select(categories) {
      this.currentTag = categories.tag;
    }
  }
};
</script>

<style lang="scss" scoped>
$sm-breakpoint: 600px;
$md-breakpoint: 960px;
$lg-breakpoint: 1264px;

@mixin xs {
  @media only screen and (max-width: $sm-breakpoint - 1) {
    @content;
  }
}

@include xs {
  .list-complete-item {
    width: 100%;
  }
}

@mixin sm {
  @media screen and (min-width: $sm-breakpoint) and (max-width: $md-breakpoint - 1) {
    @content;
  }
}

@include sm {
  .list-complete-item {
    width: 49%;
  }
}

@mixin md-up {
  @media screen and (min-width: $md-breakpoint) and (max-width: $lg-breakpoint - 1) {
    @content;
  }
}

@include md-up {
  .list-complete-item {
    width: 24.7%;
  }
}

@mixin lg-up {
  @media only screen and (min-width: $lg-breakpoint) {
    @content;
  }
}

@include lg-up {
  .list-complete-item {
    width: 24.8%;
  }
}

// filter

.list-complete {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
}

.list-complete-item {
  transition: transform 1s;
  margin: 1px;
}
//filter trnanzition animation

.list-complete-enter {
  transform: scale(0.8) translateY(-80px);
  opacity: 0;
}

.list-complete-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.list-complete-leave-active {
  position: absolute;
  z-index: -1;
}
</style>
