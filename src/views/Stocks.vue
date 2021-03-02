<template>
  <div class="Stocks">
    <div class="header">
      <Header title="Stocks" desc="Welcome Back" :date="true" />
    </div>
    <h1>Your stocks</h1>
    <div class="h2 mb-0"></div>
    <b-container>
      <b-alert v-if="total < 0" show variant="warning" dismissible fade
        >Some stocks are loosing money</b-alert
      >
      <b-alert v-else show variant="success" dismissible fade
        >You are winning money</b-alert
      >
    </b-container>
    <div class="table">
      <b-form-fieldset
        horizontal
        label="Rows per page"
        class="col-2"
        :label-size="5"
      >
        <b-form-select
          :options="[
            { text: 5, value: 5 },
            { text: 10, value: 10 }
          ]"
          v-model="perPage"
        >
        </b-form-select>
      </b-form-fieldset>
      <div class="table-responsive">
        <b-table
          fixed
          stacked="sm"
          class="banner"
          hover
          bordered
          :items="items"
          :filter="filter"
          :per-page="perPage"
          :current-page="currentPage"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
        >
          <template v-slot:cell(actions)="tasks">
            <b-button variant="danger" @click="deleteItem(tasks.item)"
              ><b-icon icon="trash" aria-hidden="true"></b-icon
            ></b-button>
            /
            <b-button a href="https://www.swedbank.se/" variant="primary">
              <b-icon icon="basket" aria-hidden="true"></b-icon
            ></b-button>
          </template>
          <template v-if="total < 0" v-slot:cell(stocks_trend_24h)="data">
            <p>
              <span
                ><b-icon
                  variant="danger"
                  icon="arrow-down"
                  aria-hidden="true"
                ></b-icon></span
              >{{ data.item.stocks_trend_24h }}
            </p>
          </template>
          <template v-else v-slot:cell(stocks_trend_24h)="data">
            <p>
              <span
                ><b-icon
                  variant="success"
                  icon="arrow-up"
                  aria-hidden="true"
                ></b-icon></span
              >{{ data.item.stocks_trend_24h }}
            </p>
          </template>
          <div>
            Sorting By: <b>{{ sortBy }}</b
            >, Sort Direction:
            <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
          </div>
        </b-table>
      </div>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination>
    </div>
    <div class="total">
      <h3>
        Total winst or loss 24h
        <span><input type="column" :value="total"/></span>SEK
      </h3>
    </div>
    <div class="search">
      <b-row>
        <b-col md="10">
          <b-form-input
            v-model="filter"
            type="search"
            placeholder="Search"
          ></b-form-input>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    components: {
      Header
    },
    data() {
      return {
        arrow: false,
        sortBy: 'name',
        sortDesc: false,
        fields: [
          { key: 'name', sortable: true },
          { key: 'stocks_owned', sortable: true },
          { key: 'stocks_price', sortable: true },
          { key: 'stocks_trend_1year', sortable: true },
          { key: 'stocks_trend_24h', sortable: true },
          { key: 'actions', sortable: false }
        ],
        perPage: 5,
        currentPage: 1,
        filter: '',
        items: [
          {
            name: 'SEB',
            stocks_owned: 15,
            stocks_price: 123,
            stocks_trend_1year: +10,
            stocks_trend_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_trend_1year: 'secondary',
              stocks_trend_24h: 'primary'
            }
          },
          {
            name: 'H&M AB',
            stocks_owned: 80,
            stocks_price: 306,
            stocks_trend_1year: 2590,
            stocks_trend_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_trend_1year: 'secondary',
              stocks_trend_24h: 'primary'
            }
          },
          {
            name: 'Telia',
            stocks_owned: 106,
            stocks_price: 103,
            stocks_trend_1year: -2210,
            stocks_trend_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_trend_1year: 'secondary',
              stocks_trend_24h: 'primary'
            }
          },
          {
            name: 'Volvo',
            stocks_owned: 12,
            stocks_price: 125,
            stocks_trend_1year: 1256,
            stocks_trend_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_trend_1year: 'secondary',
              stocks_trend_24h: 'primary'
            }
          },
          {
            name: 'NEL',
            stocks_owned: 86,
            stocks_price: 230,
            stocks_trend_1year: 459,
            stocks_trend_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_trend_1year: 'secondary',
              stocks_trend_24h: 'primary'
            }
          },
          {
            name: 'SAS',
            stocks_owned: 29,
            stocks_price: 415,
            stocks_trend_1year: -45,
            stocks_trend_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_trend_1year: 'secondary',
              stocks_trend_24h: 'primary'
            }
          },
          {
            name: 'Mowi',
            stocks_owned: 156,
            stocks_price: 156,
            stocks_trend_1year: 1562,
            stocks_trend_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_trend_1year: 'secondary',
              stocks_trend_24h: 'primary'
            }
          },
          {
            name: 'ICA',
            stocks_owned: 45,
            stocks_price: 94,
            stocks_trend_1year: 4586,
            stocks_trend_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_trend_1year: 'secondary',
              stocks_trend_24h: 'primary'
            }
          },
          {
            name: 'DNB',
            stocks_owned: 48,
            stocks_price: 456,
            stocks_trend_1year: -4569,
            stocks_trend_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_trend_1year: 'secondary',
              stocks_trend_24h: 'primary'
            }
          }
        ]
      }
    },

    computed: {
      rows() {
        return this.items.length
      },
      total() {
        return Object.values(this.items).reduce(
          (accumulator, value) =>
            accumulator +
            (value.stocks_trend_24h * value.stocks_owned * 100) / 100,
          0
        )
      }
    },
    methods: {
      deleteItem: function(task) {
        this.items.splice(this.items.indexOf(task), 1)
      }
    }
  }
</script>

<style scoped>
  .Stocks {
    height: 100vh;
    width: 100%;
  }
  .total {
    float: right;
    margin-right: 10px;
    margin-top: 30px;
  }
  .search {
    float: left;
    margin-top: 30px;
  }
  span input {
    text-align: center;
    background-color: #dee2e6;
  }
  .table {
    width: 100%;
  }
  @media (max-width: 375px) {
    h3 {
      align-content: center;
    }
  }
</style>
