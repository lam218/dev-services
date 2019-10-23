<template>
  <div class="outer-container">
    <div>
      <h2>Location pin</h2>
      <p>Animated like Queen's wave, repeated twice</p>
      <svg class="location" height="64px" width="64px" viewBox="0 0 64px 64px">
        <path
          d="M14.2913322,32 C9.89133223,32 5.41833223,35.492 4.35133223,39.761 L0.231332227,56.239 C-0.835667773,60.508 1.89133223,64 6.29133223,64 L57.7093322,64 C62.1083322,64 64.8363322,60.508 63.7693322,56.239 L59.6493322,39.761 C58.5823322,35.492 54.1083322,32 49.7093322,32 L14.2913322,32 Z"
          fill="#E4D2D8"
          class="location__base"
        />
        <path
          d="M32.0003322,24.25 C28.9623322,24.25 26.5003322,21.788 26.5003322,18.75 C26.5003322,15.712 28.9623322,13.25 32.0003322,13.25 C35.0373322,13.25 37.5003322,15.712 37.5003322,18.75 C37.5003322,21.788 35.0373322,24.25 32.0003322,24.25 M48.2113322,9.375 C46.5193322,6.51 44.2393322,4.232 41.3753322,2.539 C38.5113322,0.846 35.3863322,0 32.0003322,0 C28.6153322,0 25.4903322,0.846 22.6253322,2.539 C19.7603322,4.232 17.4823322,6.51 15.7893322,9.375 C14.0963322,12.24 13.2503322,15.365 13.2503322,18.75 C13.2503322,20.833 13.5103322,22.672 14.0313322,24.268 C14.5523322,25.862 15.5613322,27.832 17.0593322,30.176 C18.1003322,31.803 20.2493322,34.961 23.5043322,39.648 C26.1733322,43.425 28.3543322,46.55 30.0473322,49.023 C30.5023322,49.674 31.1543322,50 32.0003322,50 C32.8463322,50 33.4973322,49.674 33.9533322,49.023 L40.4963322,39.648 C43.7513322,34.961 45.8993322,31.803 46.9413322,30.176 C48.4383322,27.832 49.4483322,25.862 49.9693322,24.268 C50.4893322,22.672 50.7503322,20.833 50.7503322,18.75 C50.7503322,15.365 49.9033322,12.24 48.2113322,9.375"
          fill="#7E4356"
          class="location__pointer"
        />
      </svg>
    </div>
    <div>
      <h2>Submit meter reading</h2>
      <p>One cycle</p>
      <svg class="meter" height="64px" width="64px" viewBox="0 0 64px 64px">
        <g fill="#8ABD43" opacity="0.2">
          <circle id="Oval" cx="32" cy="32" r="32" class="meter__circle" />
        </g>
        <g
          xmlns="http://www.w3.org/2000/svg"
          id="Group-13"
          transform="translate(9.333333, 27.666667)"
        >
          <rect
            class="meter__rect1"
            id="Rectangle"
            fill="#8ABD43"
            x="0"
            y="0.303914569"
            width="5.33333333"
            height="8"
            rx="2"
          />
          <rect
            class="meter__rect2"
            id="Rectangle"
            fill="#8ABD43"
            x="8"
            y="0.333333333"
            width="5.33333333"
            height="8"
            rx="2"
          />
          <rect
            class="meter__rect3"
            id="Rectangle"
            fill="#8ABD43"
            x="16"
            y="0.333333333"
            width="5.33333333"
            height="8"
            rx="2"
          />
          <rect
            class="meter__rect4"
            id="Rectangle"
            fill="#8ABD43"
            x="24"
            y="0.333333333"
            width="5.33333333"
            height="8"
            rx="2"
          />
          <rect
            class="meter__rect5"
            id="Rectangle"
            fill="#8ABD43"
            x="32"
            y="0.333333333"
            width="5.33333333"
            height="8"
            rx="2"
          />
          <rect
            class="meter__rect6"
            id="Rectangle"
            fill="#55767F"
            x="40"
            y="0.333333333"
            width="5.33333333"
            height="8"
            rx="2"
          />
        </g>
      </svg>
    </div>
    <div>
      <h2>Issue</h2>
      <p>Repeated 3 times</p>
      <svg class="warning" height="90px" width="90px" viewBox="0 0 90px 90px">
        <g
          xmlns="http://www.w3.org/2000/svg"
          id="icon-/-large-/-issue"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="Group-20" transform="translate(-3.000000, 0.000000)" fill="#F5711D">
            <path
              d="M35.4477369,9.06115266 L60.4540703,51.5719195 C61.5741482,53.476052 60.9385464,55.9276589 59.0344139,57.0477369 C58.4197074,57.409329 57.7195045,57.6 57.0063334,57.6 L6.99366657,57.6 C4.78452757,57.6 2.99366657,55.809139 2.99366657,53.6 C2.99366657,52.8868289 3.1843376,52.1866261 3.54592971,51.5719195 L28.5522631,9.06115266 C29.6723411,7.15702017 32.123948,6.52141837 34.0280805,7.64149631 C34.6142952,7.98632847 35.1029047,8.474938 35.4477369,9.06115266 Z"
              id="Rectangle"
              opacity="0.2"
              class="warning__triangle"
            />
            <g id="Group-4" transform="translate(22.400000, 0.000000)">
              <path
                d="M9.6,0 C14.3454575,-8.71726393e-16 18.1924108,3.84695336 18.1924108,8.59241081 C18.1924108,8.90942913 18.1748662,9.22620451 18.1398573,9.54128385 L14.9300713,38.4293581 C14.6283009,41.1452917 12.3326473,43.2 9.6,43.2 C6.86735273,43.2 4.57169908,41.1452917 4.26992867,38.4293581 L1.06014265,9.54128385 C0.536094541,4.82485087 3.93469398,0.576601573 8.65112696,0.0525534643 C8.9662063,0.0175446484 9.28298169,5.82353191e-17 9.6,0 Z"
                id="Rectangle"
                class="warning__exclaim"
              />
              <circle id="Oval" cx="9.6" cy="57.6" r="6.4" class="warning__exclaim" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "more-animations"
};
</script>

<style scoped  lang="scss">
.location {
  cursor: pointer;
  height: 100px;
  &__pointer {
    transform: translateY(10px);
  }
  &__base {
    transform: translateY(13px);
  }
  &:hover {
    .location__pointer {
      animation: pointer 1s 2;
    }
  }
}

@keyframes pointer {
  50% {
    transform: scale(-0.5, 1) translate(-94px, 0);
  }
}

.meter {
  cursor: pointer;
  &:hover {
    .meter__rect1 {
      animation: slideUp 0.2s;
    }
    .meter__rect2 {
      animation: slideUp 0.2s 0.1s;
    }
    .meter__rect3 {
      animation: slideUp 0.2s 0.2s;
    }
    .meter__rect4 {
      animation: slideUp 0.2s 0.3s;
    }
    .meter__rect5 {
      animation: slideUp 0.2s 0.4s;
    }
    .meter__rect6 {
      animation: slideUp 0.2s 0.5s;
    }
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(0);
  }
  49% {
    transform: translateY(-20px);
    opacity: 0;
  }
  51% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.warning {
  cursor: pointer;
  &__triangle {
    transform: translate(15px, 12.5px);
  }
  &__exclaim {
    transform: translate(15px, 12.5px);
  }
  &:hover {
    .warning__triangle {
      animation: triangle 1s;
    }
    .warning__exclaim {
      animation: exclaim 1s;
    }
  }
}

@keyframes triangle {
  0% {
    transform: scale(1) translate(15px, 12.5px);
  }
  50% {
    transform: scale(1.5) translateX(0);
  }
  100% {
    transform: scale(1) translate(15px, 12.5px);
  }
}

@keyframes exclaim {
  0% {
    transform: scale(1) translate(15px, 12.5px);
  }
  50% {
    transform: scale(0.8) translate(23px, 32px);
  }
  100% {
    transform: scale(1) translate(15px, 12.5px);
  }
}
</style>