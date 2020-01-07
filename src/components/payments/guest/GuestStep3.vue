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
                <h1 class="dcww-payments-form__title">Your payment details</h1>
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
                        <div class="dcww-fieldset__fields">
                            <div class="dcww-fieldset__row dcww-grid-row-1">
                                <div class="dcww-field">
                                    <label class="dcww-field__label">Cardholder name</label>
                                    <input type="text" class="dcww-field__input" placeholder="Cardholder name">
                                    <p class="dcww-field__validation">Validation message</p>
                                </div>
                            </div>
                            <div class="dcww-fieldset__row dcww-grid-row-2">
                                <div class="dcww-field">
                                    <label class="dcww-field__label">Card number</label>
                                    <input type="number" class="dcww-field__input" placeholder="Card number">
                                    <p class="dcww-field__validation">Validation message</p>
                                </div>
                            </div>
                            <div class="dcww-fieldset__row dcww-grid-row-3">
                                <div class="dcww-field">
                                    <label class="dcww-field__label">Start date</label>
                                    <div class="dcww-field__input-date">
                                        <select class="dcww-field__dropdown dcww-field__dropdown--mini" name='expireMM' id='expireMM'>
                                            <option value=''>MM</option>
                                            <option value='01'>01</option>
                                            <option value='02'>02</option>
                                            <option value='03'>03</option>
                                            <option value='04'>04</option>
                                            <option value='05'>05</option>
                                            <option value='06'>06</option>
                                            <option value='07'>07</option>
                                            <option value='08'>08</option>
                                            <option value='09'>09</option>
                                            <option value='10'>10</option>
                                            <option value='11'>11</option>
                                            <option value='12'>12</option>
                                        </select> 
                                        <select class="dcww-field__dropdown dcww-field__dropdown--mini" name='expireYY' id='expireYY'>
                                            <option value=''>YYYY</option>
                                            <option value='19'>2019</option>
                                            <option value='20'>2020</option>
                                            <option value='21'>2021</option>
                                        </select> 
                                    </div>
                                    <p class="dcww-field__validation">Validation message</p>
                                </div>
                            </div>
                            <div class="dcww-fieldset__row dcww-grid-row-4">
                                <div class="dcww-field">
                                    <label class="dcww-field__label">Expiry date</label>
                                    <div class="dcww-field__input-date">
                                        <select class="dcww-field__dropdown dcww-field__dropdown--mini" name='expireMM' id='expireMM'>
                                            <option value=''>MM</option>
                                            <option value='01'>01</option>
                                            <option value='02'>02</option>
                                            <option value='03'>03</option>
                                            <option value='04'>04</option>
                                            <option value='05'>05</option>
                                            <option value='06'>06</option>
                                            <option value='07'>07</option>
                                            <option value='08'>08</option>
                                            <option value='09'>09</option>
                                            <option value='10'>10</option>
                                            <option value='11'>11</option>
                                            <option value='12'>12</option>
                                        </select> 
                                        <select class="dcww-field__dropdown dcww-field__dropdown--mini" name='expireYY' id='expireYY'>
                                            <option value=''>YYYY</option>
                                            <option value='19'>2019</option>
                                            <option value='20'>2020</option>
                                            <option value='21'>2021</option>
                                        </select> 
                                    </div>
                                    <p class="dcww-field__validation">Validation message</p>
                                </div>
                            </div>
                            <div class="dcww-fieldset__row dcww-grid-row-5">
                                <div class="dcww-field">
                                    <label class="dcww-field__label">CV2</label>
                                    <input type="number" class="dcww-field__input dcww-field__input--mini" placeholder="CV2" maxlength="10">
                                    <p class="dcww-field__validation">Validation message</p>
                                </div>
                            </div>                        
                        </div>

                        <div class="dcww-fieldset__actions">
                            <input type="button" value="Back" class="dcww-button dcww-button--secondary dcww-button--left" />
                            <input type="button" value="Pay" class="dcww-button dcww-button--primary dcww-button--chevron dcww-button--right" />
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
  name: "GuestStep3"
};
</script>
<style>

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance:textfield;
}

.dcww-field__dropdown {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #fff url('../../../assets/chevron-down.svg') no-repeat 95% 50%;
    background-size: 32px;
    border-radius: 4px;
    -webkit-box-shadow: 0 0 0 1px #65858f;
    box-shadow: 0 0 0 1px #65858f;
    border: 0;
    min-height: 60px;
    margin-left: 10px;
    padding: 18px 35px 18px 20px;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    color: #09333f;
    line-height: normal;
}

.dcww-field__dropdown:first-child {
    margin-left: 0;
}

.dcww-field__dropdown--mini {
    width: 100px;
}

</style>