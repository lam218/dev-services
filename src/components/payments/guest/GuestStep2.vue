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
            <div class="dcww-payments-form__header">
                <h2 class="dcww-payments-form__sub-title">Pay for quotation</h2>
                <h1 class="dcww-payments-form__title">Your quote</h1>
                <hr class="dcww-line">
            </div>

            <div class="dcww-payments-form__content">
                <div class="dcww-field-summary-list">
                    <div class="dcww-field-summary-item">
                        <div class="dcww-field-summary-item__label">Quotation number</div>
                        <div class="dcww-field-summary-item__value">1234567890</div>
                    </div>
                    <div class="dcww-field-summary-item">
                        <div class="dcww-field-summary-item__label">Amount</div>
                        <div class="dcww-field-summary-item__value">£123.45</div>
                    </div>
                </div>
                
                <form id="dcwwForm">
                    <div class="dcww-fieldset">
                        <div class="dcww-fieldset__row">
                            <div class="dcww-checkbox-field">
                                <input type="checkbox" class="dcww-checkbox-field__checkbox" name="accept" value="1">
                                <input type="hidden" name="accept_checked" value="1">
                                <label class="dcww-checkbox-field__label">I accept and want to pay for this quotation</label>
                            </div>
                        </div>

                        <div class="dcww-fieldset__actions">
                        <input type="button" value="Back" class="dcww-button dcww-button--secondary dcww-button--left" />
                        <input type="button" value="Next" class="dcww-button dcww-button--primary dcww-button--chevron dcww-button--right" />
                        </div>
                    </div>
                </form>
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
  name: "GuestStep2"
};
</script>
<style>
input[type=checkbox] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
}

input[type=checkbox]:checked~label:before {
    background: #0072bc;
    border: 1px solid #0072bc;
}

input[type=checkbox]:checked~label:after {
    display: block;
}

.dcww-checkbox-field {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    cursor: pointer;
}

.dcww-checkbox-field__checkbox {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    cursor: pointer;
}

.dcww-checkbox-field__label {
    position: relative;
    cursor: pointer;
    display: inline-block;
    text-indent: -34px;
    padding: 10px 0 10px 34px;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.9;
    pointer-events: none;
}

.dcww-checkbox-field__label::before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    height: 20px;
    width: 20px;
    background: #ebeff1;
    border: 1px solid #b2c2c7;
    border-radius: 2px;
}

.dcww-checkbox-field__label::after {
    display: none;
    content: "";
    position: absolute;
    left: 8px;
    top: 17px;
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
        transform: rotate(45deg);
}

</style>