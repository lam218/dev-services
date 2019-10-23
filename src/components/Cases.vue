<template>
  <div class="cases">
    <div class="cases__container">
      <!-- Loading -->
      <div v-if="isLoading">
        Loading...
      </div>
      <!-- Error -->
      <div v-if="!isLoading && error">
        Error message to go here
      </div>
      <div v-if="!isLoading && !error" class="cases__listing">
        <!-- Filters -->
        <Filters 
          :clearFilters="clearFilters"
          :toggleFilters="toggleFilters"
          :searchTerm="searchTerm"
          :showClearFilters="showClearFilters"
          :showFilters="showFilters"
          :statusMessage="statusMessage"
          :status="status"
          @change="handleChange"
        />
        <!-- Listings -->
        <div class="cases__content">
          <a href="#" class="cases__new">
            New application
            <svg class="cases__newIcon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.2499613,13.8749836 C23.5885023,13.8749836 23.8814704,13.9986814 24.1288654,14.2460765 C24.3762605,14.4934715 24.4999583,14.7864396 24.4999583,15.1249806 L24.4999583,16.3749776 C24.4999583,16.7135187 24.3762605,17.0064868 24.1288654,17.2538818 C23.8814704,17.5012768 23.5885023,17.6249747 23.2499613,17.6249747 L17.6249747,17.6249747 L17.6249747,23.2499613 C17.6249747,23.5885023 17.5012768,23.8814704 17.2538818,24.1288654 C17.0064868,24.3762605 16.7135187,24.4999583 16.3749776,24.4999583 L15.1249806,24.4999583 C14.7864396,24.4999583 14.4934715,24.3762605 14.2460765,24.1288654 C13.9986814,23.8814704 13.8749836,23.5885023 13.8749836,23.2499613 L13.8749836,17.6249747 L8.24999702,17.6249747 C7.91145596,17.6249747 7.61848791,17.5012768 7.37109287,17.2538818 C7.12369782,17.0064868 7,16.7135187 7,16.3749776 L7,15.1249806 C7,14.7864396 7.12369782,14.4934715 7.37109287,14.2460765 C7.61848791,13.9986814 7.91145596,13.8749836 8.24999702,13.8749836 L13.8749836,13.8749836 L13.8749836,8.24999702 C13.8749836,7.91145596 13.9986814,7.61848791 14.2460765,7.37109287 C14.4934715,7.12369782 14.7864396,7 15.1249806,7 L16.3749776,7 C16.7135187,7 17.0064868,7.12369782 17.2538818,7.37109287 C17.5012768,7.61848791 17.6249747,7.91145596 17.6249747,8.24999702 L17.6249747,13.8749836 L23.2499613,13.8749836 Z" fill="currentColor"></path>
            </svg>
          </a>
          <ul class="cases__list">
            <li class="cases__item" v-for="(item, index) in filteredList" :key="index">
              <Case 
                v-bind="item"
                :handleSelectCase="handleSelectCase"
              />
            </li>
          </ul>
          <!-- Pagination -->
          <Pagination 
            v-if="pageCount > 1 && filteredList.length !== 0"
            :previousPage="previousPage"
            :nextPage="nextPage"
            :pageNumber="pageNumber"
            :pageCount="pageCount"
          />
          <!-- No results -->
          <div v-if="filteredList.length === 0" class="cases__noResults">
            No results message to go here
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../public/main.css';

import axios from 'axios';
import Moment from 'moment';

import Case from './Case';
import Filters from './Filters';
import Pagination from './Pagination';

const pageSize =  10;

export default {
  name: 'Cases',
  components: {
    Case,
    Filters,
    Pagination,
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      error: false,
      isLoading: true,
      pageNumber: 0,
      pageCount: 0,
      payload: [],
      showFilters: false,
      searchTerm: '',
      status: 0,
    }
  },
  computed: {
    filteredList() {
      // Search name and caseNumber
      const searchedList = this.payload.filter(item => {
        return item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) 
        || item.caseNumber.toLowerCase().includes(this.searchTerm.toLowerCase());
      });

      // Status filter
      const filteredList = this.status !== 0 
      ? searchedList.filter(item => item.status === this.status)
      : searchedList;

      // Pagination
      const pageLength = filteredList.length;
      this.pageCount = Math.ceil(pageLength / pageSize);

      const start = this.pageNumber * pageSize;
      const end = start + pageSize;

      const results = filteredList.slice(start, end);

      return results;
    },
    showClearFilters() {
      return this.status !== 0 || this.searchTerm !== "";
    },
    statusMessage() {
      const allCases = this.status === 0 && this.searchTerm === '' 
      ? this.payload.length 
      : this.filteredList.length;

      let statusMessage = [
        `All ${allCases} cases`,
        `${this.filteredList.length} Action required cases`,
        `${this.filteredList.length} Pending cases`,
        `${this.filteredList.length} Completed cases`,
        `${this.filteredList.length} Cancelled cases`,
        `${this.filteredList.length} Rejected cases`,
      ];

      return statusMessage[this.status];
    },
  },
  methods: {
    handleChange(value, type) {
      this[type] = value
    },
    fetchData() {
      axios.get('https://www.mocky.io/v2/5d88969d330000b611d7d9ef')
      .then(response => {
        if (response.status === 200) {
          this.payload = this.sortData(response.data.payload);
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.error = true;
        }
      })
      .catch(error => {
        this.isLoading = false;
        this.error = true;
        // eslint-disable-next-line
        console.log(error);
      })
    },
    nextPage() {
      if ((this.pageNumber + 1) >= this.pageCount) return;

      this.pageNumber++;
    },
    previousPage() {
      if (this.pageNumber <= 0) return;

      this.pageNumber--;
    },
    sortData(data) {
      return data.sort((a,b) => {
        return a.status - b.status || new Moment(a.date).format('YYYYMMDD') - new Moment(b.date).format('YYYYMMDD')
      });
    },
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    clearFilters() {
      this.searchTerm = '';
      this.status = 0;
    },
    handleSelectCase(status, caseNumber) {
      this.$router.push({ 
        name: 'case-overview', 
        params: { 
          status: status,
          caseNumber: caseNumber,
        } 
      });
    },
  },
};
</script>

<style lang="scss">
  // Atoms - TODO use default classes
  .input {
    min-height: 60px;
    border-radius: 4px;
    font-size: 1rem;
    padding: 18px;
    width: 100%;
    box-shadow: 0 0 0 1px #65858f;
    border: 0;
    -webkit-appearance: none;
    line-height: normal;
  }

  .dropdown {
    width: 100%;

    &__select {
      border-width: 1px;
      border-color: #65858f;
    }
  }

  // Cases listing
  .cases {
    margin-top: 10rem;

    &__container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    &__content {
      @media (min-width: 768px) {
        max-width: 81%;
        margin: 0 auto;
      }
    }

    &__new {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.1rem;
      border: 2px dashed #b2c2c7;
      border-radius: 5px;
      margin-top: 3.125rem;
      font-weight: 600;
      text-decoration: none;
      color: black;
      transition: ease-in-out 0.25s all;

      &:visited {
        color: black;
      }

      &:hover {
        border-color: #009edb;
        background-color: darken(#fff, 2.5%);
      }
    }

    &__newIcon {
      width: 2rem;
      height: 2rem;
    }

    &__listing {
      margin-top: 1.313rem;
    }

    &__list {
      margin-top: 1.25rem;
      padding: 0;
      list-style: none;
    }

    &__item {
      padding: 0;
      margin: 0;

      & + & {
        margin-top: 1.25rem;
      }

      &::before {
        display: none;
      }
    }
  }
</style>
