<template>
  <div class="dcww-payments">

    <header class="dcww-payments-header">
        <a class="dcww-payments__link dcww-payments__link--image" href="https://www.dwrcymru.com/"><img src="../../../assets/dcww.png" alt="logo" class="dcww-logo"></a>
        <div class="dcww-payments-header__links">
            <a class="dcww-payments__link" href="">Cymraeg</a>
        </div>
    </header>

    <main class="dcww-payments-form">
        <div class="dcww-payments-form__container">
            <div class="dcww-payments-status">
                <img src="../../../assets/caution.svg" class="dcww-payments-status__icon--large">
                <h1 class="dcww-payments-status__title">Payment Error</h1>
                <p class="dcww-payments-status__message">Unfortunately, your payment was declined.</p>
                <p class="dcww-payments-status__message">Please call an agent on:</p>
                <div class="dcww-payments-status__contact">
                    <img src="../../../assets/caution.svg" class="dcww-payments-status__icon-error">
                    <a class="dcww-payments-status__contact-tel" href="tel:08000520145">0800 052 0145</a>
                </div>
            </div>
        </div>
    </main>

    <footer class="dcww-payments-footer">
      <div class="dcww-legal-copy">
          <p class="dcww-legal-copy__text">
              Dŵr Cymru Cyf, a limited company registered in Wales No. 2366777. Registered office: Pentwyn Road, Nelson, Treharris, Mid Glamorgan CF46 6LY.
          </p>
          <p class="dcww-legal-copy__copyright">© Dŵr Cymru Cyf 2019</p>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: "PaymentStatusError"
};
</script>
<style>

.dcww-payments-status {
    grid-column: 1/13;
    text-align: center;
}

.dcww-payments-status__title {
    padding-bottom: 20px;
    font-size: 18px;
}

.dcww-payments-status__message {
    padding-bottom: 20px;
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    font-weight: 300;
    color: #09333f;
}

.dcww-payments-status__contact {
    display: flex;
    align-items: center;
    justify-content: center;
}

.dcww-payments-status__contact-tel {
    padding-left: 5px;
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    color: #009edb;
}

.dcww-payments-status__contact-tel:visited {
    color: #009edb;
}


@media only screen and (min-width: 768px) {
    .dcww-payments-status__title {
        padding-bottom: 30px;
        font-size: 24px;
    }

    .dcww-payments-status__message {
        padding-bottom: 30px;
        font-size: 22px;
    }

    .dcww-payments-status__contact-tel {
        padding-left: 10px;
        font-size: 24px;
    }

}

@media only screen and (min-width: 1024px) {
    .dcww-payments-status {
        padding: 0;
    }

    .dcww-payments-status__title {
        padding-bottom: 30px;
        font-size: 28px;
    }

    .dcww-payments-status__contact-tel {
        font-size: 28px;
    }
}

</style>