<template>
  <div class="contact">
    <div class="contact__description">
      <h5 class="contact__title">Contact us to renew quotation {{ caseNumber }}</h5>
      <span class="contact__body">Your quote expired on 21st September 2019. Please speak to one of our agents to renew this quote or cancel your application.</span>
    </div>
    <div class="contact__details">
      <a href="tel:08000520130" class="contact__number">
        <svg  class="contact__numberIcon" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.3315961,7.86775241 C24.542671,7.89120535 24.7068406,7.98501607 24.8241042,8.14918563 C24.9413679,8.31335519 25,8.48925096 25,8.67687293 C25,11.6319218 24.2612378,14.3758957 22.7837134,16.9087948 C21.3296419,19.3713355 19.3713355,21.3296419 16.9087948,22.7837134 C14.3758957,24.2612378 11.6319218,25 8.67687293,25 C8.48925096,25 8.31335519,24.9413679 8.14918563,24.8241042 C7.98501607,24.7068406 7.89120535,24.542671 7.86775241,24.3315961 L7.02345273,20.6729642 C6.97654737,20.4853422 7,20.2977197 7.09381104,20.1100977 C7.18762229,19.9224757 7.3283389,19.7934853 7.51596087,19.723127 L11.456026,18.0345277 C11.6201956,17.9641694 11.7960914,17.9465798 11.9837133,17.9817589 C12.1713353,18.0169381 12.3237787,18.1166122 12.4410423,18.2807817 L14.1648208,20.3915309 C15.548534,19.7583062 16.7739415,18.9022803 17.8410423,17.8234528 C18.9081431,16.7446252 19.7583062,15.5250816 20.3915309,14.1648208 L18.2807817,12.4058632 C18.1400651,12.2885995 18.0462539,12.1420195 17.9993485,11.9661237 C17.9524432,11.790228 17.9641694,11.6084688 18.0345277,11.4208469 L19.723127,7.48078172 C19.7934853,7.31661216 19.9224757,7.18762229 20.1100977,7.09381104 C20.2977197,7 20.4853422,6.97654737 20.6729642,7.02345273 L24.3315961,7.86775241 Z" fill="currentColor"></path>
        </svg>
        0800 052 0130
      </a>
      <div class="contact__opening">
        9:00am - 4:00pm, Mon-Fri
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  props: {
    caseNumber: String,
  }
}
</script>

<style scoped lang="scss">
div + .contact {
  margin-top: 1.25rem;
}

.contact {
  display: flex;
  background-color: #f5f7f8;
  color: #09333f;
  padding: 1.25rem;

  &__description {
    flex: 1;
  }

  &__details {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-flow: column;
    flex: 1;
  }

  &__title {
    margin: 0;
  }

  &__body {
    display: block;
    margin-top: 1rem;
  }

  &__number {
    display: flex;
    align-items: center;
    font-weight: 200;
    text-decoration: none;
    font-size: 2rem;
    color: #09333f;
  }

  &__numberIcon {
    width: 2rem;
    height: 2rem;
    color: #65858f;
  }

  &__openings {
    font-weight: 200;
  }
}
</style>
