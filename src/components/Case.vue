<template>
  <button class="case" v-bind:class="`case--${status}`" @click="handleSelectCase(status, caseNumber)">
    <svg class="case__nextIcon" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg" >
      <path d="M12.4536518,8.69541757 C11.8487827,8.07880352 11.8487827,7.0790746 12.4536518,6.46246054 C13.0585208,5.84584649 14.0392073,5.84584649 14.6440763,6.46246054 L24,16.0000526 L14.6441796,25.5375395 C14.0393105,26.1541535 13.0586241,26.1541535 12.453755,25.5375395 C11.848886,24.9209254 11.848886,23.9211965 12.453755,23.3045824 L19.619151,16.0000526 L12.4536518,8.69541757 Z" fill="currentColor"></path>
    </svg>
    <div class="case__details">
      <span class="case__name">{{ name }}</span>
      <span class="case__caseNumber">{{ caseNumber }}</span>
    </div>
    <div class="case__status">

      <svg  v-if="status === 1" class="case__statusIcon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M19,22.1874638 C19,22.9608994 18.7062502,23.6230071 18.11875,24.1737872 C17.5312498,24.7245673 16.825,24.9999571 16,24.9999571 C15.175,24.9999571 14.4687502,24.7245673 13.88125,24.1737872 C13.2937498,23.6230071 13,22.9608994 13,22.1874638 C13,21.4140281 13.2937498,20.7519205 13.88125,20.2011404 C14.4687502,19.6503603 15.175,19.3749705 16,19.3749705 C16.825,19.3749705 17.5312498,19.6503603 18.11875,20.2011404 C18.7062502,20.7519205 19,21.4140281 19,22.1874638 Z M13.3375,7.87890415 C13.3375,7.64452953 13.4249998,7.43945208 13.6,7.26367125 C13.7750002,7.08789042 13.9874998,7 14.2375,7 L17.7625,7 C18.0125002,7 18.2249998,7.08789042 18.4,7.26367125 C18.5750002,7.43945208 18.6625,7.64452953 18.6625,7.87890415 L18.1375,17.4413814 C18.1375,17.675756 18.0500002,17.8691149 17.875,18.0214581 C17.6999998,18.1738013 17.4875002,18.2499732 17.2375,18.2499732 L14.7625,18.2499732 C14.5124998,18.2499732 14.3000002,18.1738013 14.125,18.0214581 C13.9499998,17.8691149 13.8625,17.675756 13.8625,17.4413814 L13.3375,7.87890415 Z" fill="currentColor"></path>   
      </svg>

      <svg  v-if="status === 2 || status === 3" class="case__statusIcon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4557352,2.40610638 C12.7837693,1.96179563 13.4098786,1.86753482 13.8541893,2.19556897 C14.2985001,2.52360312 14.3927609,3.14971237 14.0647267,3.59402312 L6.82972843,13.3935745 L2.2873556,8.77920407 C1.8999139,8.38562133 1.9048922,7.75247592 2.29847494,7.36503422 C2.69205768,6.97759252 3.32520308,6.98257082 3.71264479,7.37615356 L6.6119057,10.3213684 L12.4557352,2.40610638 Z" fill="currentColor"></path>
      </svg>

      <svg v-if="status === 4 || status === 5" class="case__statusIcon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.4895924,8.5753788 L16.500272,14.586272 L22.5104076,8.5753788 C22.8708916,8.21489484 23.4381227,8.1871653 23.8304139,8.49219019 L23.9246212,8.5753788 C24.3151455,8.96590309 24.3151455,9.59906807 23.9246212,9.98959236 L23.9246212,9.98959236 L17.914272,16.000272 L23.9246212,22.0104076 C24.3151455,22.4009319 24.3151455,23.0340969 23.9246212,23.4246212 C23.5340969,23.8151455 22.9009319,23.8151455 22.5104076,23.4246212 L16.500272,17.414272 L10.4895924,23.4246212 C10.1291084,23.7851052 9.56187734,23.8128347 9.16958614,23.5078098 L9.0753788,23.4246212 C8.68485451,23.0340969 8.68485451,22.4009319 9.0753788,22.0104076 L9.0753788,22.0104076 L15.086272,16.000272 L9.0753788,9.98959236 C8.68485451,9.59906807 8.68485451,8.96590309 9.0753788,8.5753788 C9.46590309,8.18485451 10.0990681,8.18485451 10.4895924,8.5753788 Z" fill="currentColor"></path>
      </svg>

      {{ statusMessage }}
    </div>
  </button>
</template>

<script>
export default {
  name: 'Case',
  props: {
    caseNumber: String,
    handleSelectCase: Function,
    name: String,
    status: Number,
    statusMessage: String,
  }
}
</script>

<style lang="scss">
.case {
  position: relative;
  display: flex;
  flex-flow: column;
  min-height: 5.625rem;
  padding: 1rem 3rem 1rem 1rem;
  width: 100%;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 0.625rem 4rem 0.625rem 0.625rem;
  }

  @media (min-width: 768px) {
    flex-flow: row;
  }

  &:hover {
    .case__nextIcon {
      transform: translate(0.25rem, -50%);
      transition: ease-in-out transform 0.3s;
    }
  }

  // Action required
  &--1 {
    background-color: #fef3e8;
    color: #f68b1f;
    transition: all ease-in-out 0.25s;

    &:hover {
      background-color: darken(#fef3e8, 5%);
    }
  }

  // Recieved expression of interest
  &--2 {
    background-color: #e8f3ec;
    color: #1a8c44;
    transition: all ease-in-out 0.25s;

    &:hover {
      background-color: darken(#e8f3ec, 5%);
    }
  }

  // Completed and rejected
  &--3,
  &--4 {
    background-color: #ebeff1;
    color: #09333f;
    transition: all ease-in-out 0.25s;

    &:hover {
      background-color: darken(#ebeff1, 5%);
    }
  }

  // Cancelled
  &--5 {
    background-color: #fdefee;
    color: #f15f56;
    transition: all ease-in-out 0.25s;

    &:hover {
      background-color: darken(#fdefee, 5%);
    }
  }

  &__nextIcon {
    position: absolute;
    top: 50%;
    right: 1rem;
    width: 1.75rem;
    height: 1.75rem;
    transform: translate(0, -50%);
    color: black;
    transition: ease-in-out transform 0.2s;
  }

  &__details {
    display: flex;
    max-width: 18.25rem;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    flex-flow: column;

    @media (min-width: 768px) {
      padding: 0 1.875rem;
    }
  }

  &__name {
    color: black;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  
  }

  &__caseNumber {
    display: block;
    margin-top: 0.25rem;
    color: black;
  }

  &__status {
    display: flex;
    flex-flow: row;
    padding: 0.5rem 0;
    font-weight: 600;
    align-items: center;

    @media (min-width: 768px) {
      border-left: 1px solid currentColor;
      padding-left: 1rem;
    }
  }

  &__statusIcon {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 0.5rem;
    color: currentColor;
  }
}
</style>
