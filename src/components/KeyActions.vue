<template>
  <div>
    <h1>Key Actions CTA</h1>
    <input type="text" placeholder="dummy for keyboard focus"/>
    <hooper ref="hooper" 
      :center-mode="true" 
      :settings="defaultSettings" 
      @slide="handleSlide"
      @updated="handleUpdate">
      <slide
          v-for="action in actions"
          v-bind:key="action.key">
            <div class="slide--content">
                <img class="slide--image" :src="action.image" alt="image"/>
                <div class="slide--title-container">
                    <a class="slide--link" :href="action.link" @focus="activateSlide(action.key)">
                      <h3 class="slide--title">
                          {{action.title}}
                      </h3>
                      <div class="box-sideways">
                        <svg viewBox="0 0 32 32" height="32px" width="32px">
                          <path
                            d="M12.70725,15.293 C12.31625,14.902 11.68425,14.902 11.29325,15.293 C10.90225,15.684 10.90225,16.316 11.29325,16.707 L15.29325,20.707 C15.48825,20.902 15.74425,21 16.00025,21 C16.25625,21 16.51225,20.902 16.70725,20.707 L20.70725,16.707 C21.09825,16.316 21.09825,15.684 20.70725,15.293 C20.31625,14.902 19.68425,14.902 19.29325,15.293 L17.00025,17.586 L17.00025,12 C17.00025,11.448 16.55325,11 16.00025,11 C15.44725,11 15.00025,11.448 15.00025,12 L15.00025,17.586 L12.70725,15.293 Z"
                          />
                        </svg>
                      </div>
                    </a>
                </div>
                <p class="slide--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </div>

      </slide>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>        
    </hooper>
    <input type="text" placeholder="dummy for keyboard focus"/>
  </div>
</template>

<script>
// TODO
// Add arrow on link h3 and make it animate on hover or "is-active" of the panel
// Correct images
// custom navigation arrows (or can we re-purpose ones from Hooper?)
// look at issue with mobile width/positioning

import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: "key-actions",
  props: {
  },
  mounted() {
    this.activateSlide(2);
  },
  data: function() {
    return {
      defaultSettings: {
        itemsToShow: 1,
        breakpoints: {
          576: { 
            // tablet
            itemsToShow: 1.75
          },
          992: { 
            // laptop/desktop
            itemsToShow: 3.5
          }      
        }
      },
      actions: [
        {
          key: 0,
          title: 'First Item',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
          link: 'http://www.google.co.uk',
          image: '/icon1.png'
        },
        {
          key: 1,
          title: 'Second Item',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
          link: 'http://www.google.co.uk',
          image: '/icon1.png'
        },
        {
          key: 2,
          title: 'Third Item',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
          link: 'http://www.google.co.uk',
          image: '/icon1.png'
        },
        {
          key: 3,
          title: 'Fourth Item',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
          link: 'http://www.google.co.uk',
          image: '/icon1.png'
        },
        {
          key: 4,
          title: 'Fifth Item',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
          link: 'http://www.google.co.uk',
          image: '/icon1.png'
        },
      ]         
    }
  },
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
  methods: {
    activateSlide(itemId) {
      this.$refs.hooper.slideTo(itemId);
    },
    handleSlide(payload){
      this.$refs.hooper.$children[payload.currentSlide].$el.querySelector('.slide--link').focus();
    },
    handleUpdate(){
      this.$refs.hooper.updateWidth();
    }
  }
};
</script>

<style lang="scss">
.hooper{
  width: 90%;
  height: 350px;
  margin:auto;

  &-pagination {
    width: 50%;
    margin-top: 30px;
  }

  &-indicators {
    width: 100%;
    justify-content: space-between;

    li {
      flex: 1;
    }
  }

  &-indicator {
    width: 100%;
    border-radius: 0;
    background: #ebeff1;

    &.is-active {
      background: #b2c2c7;
    }
  }
}

.hooper-nav {
  width: 60%;
  margin: auto;
  display: flex;
}
.slide{
  &--content {
    height: 237px;
    margin: 20px;
    padding: 30px;
    text-align: left;

    .is-current & {
      min-height: 237px;
      background: rgb(255, 255, 255);
      box-shadow: 20px 20px 80px 0px rgba(0, 93, 129, 0.14);
      border-radius: 5px;  
      }

      &:hover {
        svg {
          animation: moveArrowSideways 1s ease-in-out 3;
        }
      }
  }

  &--title {
    margin:0;
    width: 240px;
    height: 25px;
    color: rgb(9, 51, 63);
    font-size: 16px;
    font-family: Nunito-SemiBold, Arial;
    font-weight: 600;
    letter-spacing: 0.3px;
    line-height: 25px;
  }

  &--link {
    display: flex;
    text-decoration: none;
  }

  &--image {
    width: 65px;
  }

}

.box-sideways {
  margin: 0;
  height: 32px;
  width: 32px;
  background: white;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  svg {
    fill: #b2c2c7;
    position: absolute;
    right: 0;
    transform: translateX(0) rotate(-90deg);
  }
}

@keyframes moveArrowSideways {
  0% {
    transform: translateX(0) rotate(-90deg);
  }
  30% {
    transform: translateX(30px) rotate(-90deg);
    opacity: 0;
  }
  35% {
    opacity: 0;
    transform: translateX(-30px) rotate(-90deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(-90deg);
  }
}
</style>