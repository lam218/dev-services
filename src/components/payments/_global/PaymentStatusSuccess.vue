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
                <img src="../../../assets/tick.svg" class="dcww-payments-status__icon--large">
                <h1 class="dcww-payments-status__title">Payment successful</h1>
                <div class="dcww-field-summary-list">
                    <div class="dcww-field-summary-item">
                        <div class="dcww-field-summary-item__label">Quotation number</div>
                        <div class="dcww-field-summary-item__value">1234567890</div>
                    </div>
                    <div class="dcww-field-summary-item">
                        <div class="dcww-field-summary-item__label">Cardholder name</div>
                        <div class="dcww-field-summary-item__value">J.Smith</div>
                    </div>
                    <div class="dcww-field-summary-item">
                        <div class="dcww-field-summary-item__label">Customer number</div>
                        <div class="dcww-field-summary-item__value">00000000</div>
                    </div>
                    <div class="dcww-field-summary-item">
                        <div class="dcww-field-summary-item__label">Amount</div>
                        <div class="dcww-field-summary-item__value">£123.45</div>
                    </div>
                    <div class="dcww-field-summary-item">
                        <div class="dcww-field-summary-item__label">Date</div>
                        <div class="dcww-field-summary-item__value">28/11/2019</div>
                    </div>
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
  name: "PaymentStatusSuccess"
};
</script>
<style>
.dcww-payments-status__icon--large {
    width: 56px;
    padding: 20px 0;
}

.dcww-field-summary-list {
    text-align: left;
}

.dcww-field-summary-item {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    margin-bottom: 10px;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 20px 1fr 20px 1fr 20px 1fr 20px 1fr 20px 1fr;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 20px;
}

.dcww-field-summary-item__label {
    -ms-grid-column: 1;
    -ms-grid-column-span: 6;
    grid-column: 1/7;
    -ms-grid-row: 1;
    grid-row: 1;
    padding-left: 10px;
}

.dcww-field-summary-item__value {
    -ms-grid-column: 1;
    -ms-grid-column-span: 6;
    grid-column: 1/7;
    -ms-grid-row: 2;
    grid-row: 2;
    padding-left: 10px;
    font-weight: 700;
}


@media only screen and (min-width: 768px) {
    .dcww-payments-status__icon--large {
        padding: 30px 0;
    }

    .dcww-field-summary-item {
        -ms-grid-columns: (1fr)[12];
        grid-template-columns: repeat(12, 1fr);
    }
    
    .dcww-field-summary-item__label {
        padding-left: 20px;
        -ms-grid-column: 2;
        -ms-grid-column-span: 4;
        grid-column: 2/6;
    }

    .dcww-field-summary-item__value {
        -ms-grid-column: 6;
        -ms-grid-column-span: 6;
        grid-column: 6/12;
        -ms-grid-row: 1;
        grid-row: 1;
    }

}

@media only screen and (min-width: 1024px) {
    .dcww-payments-status__icon--large {
        padding: 50px 0;
    }

    .dcww-field-summary-item__label {
        -ms-grid-column: 3;
        -ms-grid-column-span: 3;
        grid-column: 3/6;
    }
}

</style>