<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-sheet color="transparent" class="d-flex py-3">
            <v-icon small color="light-blue lighten-2" class="mr-2">fas fa-file-medical</v-icon>
            <div class="font-weight-bold text-h6">Medicine</div>

            <v-spacer></v-spacer>
            <v-sheet color="transparent" class="hidden-xs">
              <v-btn
                color="light-blue lighten-2"
                outlined
                @click="$refs.medicineCarousel.prev()"
                class="mr-1"
              >
                <v-icon small>fas fa-chevron-left</v-icon>
              </v-btn>

              <v-btn
                class="mr-1"
                color="light-blue lighten-2"
                outlined
                @click="$refs.medicineCarousel.next()"
              >
                <v-icon small>fas fa-chevron-right</v-icon>
              </v-btn>
              <v-btn color="light-blue lighten-2" class="text-capitalize" outlined>See All</v-btn>
            </v-sheet>
            <v-sheet color="transparent" class="hidden-sm-and-up">
              <v-btn
                small
                color="light-blue lighten-2"
                outlined
                @click="$refs.medicineCarousel.prev()"
              >
                <v-icon small>fas fa-chevron-left</v-icon>
              </v-btn>

              <v-btn
                small
                color="light-blue lighten-2"
                outlined
                @click="$refs.medicineCarousel.next()"
              >
                <v-icon small>fas fa-chevron-right</v-icon>
              </v-btn>
              <v-btn
                small
                color="light-blue lighten-2"
                class="text-capitalize"
                outlined
                to="/products"
              >See All</v-btn>
            </v-sheet>
          </v-sheet>

          <VueSlickCarousel v-bind="settings" ref="medicineCarousel">
            <div v-for="item in productMedicine" :key="item.id" class="width focuseOutlineNone">
              <v-card outlined>
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
                <v-card-title
                  class="font-weight-bold text-subtitle-2 pt-0 pb-0"
                >MRP: {{ item.newMrp }}</v-card-title>

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
            </div>
          </VueSlickCarousel>
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
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "MedicineSlider",
  data() {
    return {
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        rows: 2,

        responsive: [
          {
            breakpoint: 1263,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
              arrows: false
            }
          },
          {
            breakpoint: 959,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false,
              arrows: false
            }
          },
          {
            breakpoint: 599,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false
            }
          }
        ]
      },
      productMedicine: [
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
          Dose: "100mg"
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
          Dose: "200mg"
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
          Dose: "300mg"
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
          Dose: "400mg"
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
          Dose: "500mg"
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
          Dose: "500mg"
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
          Dose: "500mg"
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
          Dose: "500mg"
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
          Dose: "500mg"
        },
        {
          id: 10,
          category: "medicine",
          name: "Chu Chu Wet Wipes Cylinder",
          oldMrp: "60 TK (per pata)",
          newMrp: "50 TK (per pata)",
          image: "/images/product/medicine/1.webp",
          Generic: "azithromycin",
          Type: "Tablet",
          Quantity: "12's pack",
          PiecesPerPata: "5",
          Dose: "500mg"
        }
      ],
      dialog: false,
      product: null
    };
  },
  methods: {
    openDialog(id) {
      this.dialog = true;

      this.productMedicine.map(product => {
        if (product.id === id) {
          this.product = product;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$sm-breakpoint: 600px;
$md-breakpoint: 960px;

@mixin xs {
  @media only screen and (max-width: $sm-breakpoint - 1) {
    @content;
  }
}

@include xs {
  .width {
    width: 100% !important;
  }
}

@mixin sm {
  @media screen and (min-width: $sm-breakpoint) and (max-width: $md-breakpoint - 1) {
    @content;
  }
}

@include sm {
  .width {
    width: 99% !important;
  }
}

@mixin md-up {
  @media only screen and (min-width: $md-breakpoint) {
    @content;
  }
}

@include md-up {
  .width {
    width: 99% !important;
  }
}

.focuseOutlineNone:focus {
  outline: none;
}
</style>