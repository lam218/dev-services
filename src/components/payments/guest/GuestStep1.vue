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
                <div class="dcww-payments-form__content-inner">
                    <p class="dcww-payments-form__text">To make a payment, please enter your quotation number below:</p>
                </div>
                
                <form id="dcwwForm">
                    <div class="dcww-fieldset">
                        <div class="dcww-fieldset__row">
                            <div class="dcww-field">
                                <label class="dcww-field__label">Quotation number</label>
                                <input type="text" class="dcww-field__input" placeholder="Quotation number">
                                <p class="dcww-field__validation">Validation message</p>
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
  name: "GuestStep1"
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
@import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");

h1 {
    font-family: 'Nunito', sans-serif;
    color: #0072bc;
    margin: 0;
    padding: 0;
}

h2 {
    font-family: 'Nunito', sans-serif;
    color: #09333f;
    font-weight: 300;
    margin: 0;
    padding: 0;
}

h3 {
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
}

p {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #09333f;
    font-weight: 300;
}

label {
    font-family: 'Open Sans', sans-serif;
}

input {
    font-family: 'Open Sans', sans-serif;
    color: #09333f;
    font-weight: 300;
}

.dcww-payments {
    background: #65858f;
    height: 100vh;
}

.dcww-payments-header {
    display: flex;
    background: #65858f;
    color: white;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
}

.dcww-payments-footer {
    background: #65858f;
    padding: 50px 10px 30px;
}

.dcww-payments-form {
  background: #65858f;
}

.dcww-payments-form__title {
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: 600;
    grid-column: 1/7;
    grid-row: 2;
}

.dcww-payments-form__sub-title {
    margin-bottom: 5px;
    font-size: 18px;
    grid-column: 1/7;
    grid-row: 1;
}

.dcww-payments-form__container {
    background: white;
    color: #09333f;
    max-width: 1190px;
    margin: 0 auto;
    padding: 30px 10px 50px;
}

.dcww-payments-form__header {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 20px;
}

.dcww-payments-form__content {
    padding-top: 30px;
}

.dcww-payments-form__content-inner {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 20px;
}

.dcww-payments-form__text {
    grid-column: 1/7;
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
}

.dcww-payments__link {
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    color: white;
    text-decoration: none;
}

.dcww-payments__link:visited {
    color: white;
}

.dcww-payments__link--image {
    width: 110px;
}

.dcww-logo {
    display: block;
    max-width: 100%;
    height: auto;
}

.dcww-line {
    display: block;
    border: none;
    border-bottom: 1px solid #b2c2c7;
    margin: 0;
    grid-column: 1/7;
    grid-row: 3;
}

.dcww-legal-copy {
    max-width: 1190px;
    margin: auto;
}

.dcww-legal-copy > p {
    font-family: 'Nunito', sans-serif;
}

.dcww-legal-copy__text {
    margin-bottom: 20px;
    color: white;
}

.dcww-legal-copy__copyright {
    color: white;
}

.dcww-fieldset {
    padding-top: 30px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 20px;
}

.dcww-fieldset__fields {
    grid-column: 1/7;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 20px;
}

.dcww-fieldset__row {
    padding-left: 10px;
    grid-column: 1/6;
}

.dcww-fieldset__row + .dcww-fieldset__row {
    margin-top: 30px;
}

.dcww-fieldset__actions {
    position: relative;
    display: flex;
    flex-flow: row;
    grid-column: 1/7;
    grid-row: 2;
    border-top: 1px solid #b2c2c7;
    margin-top: 30px;
    padding-top: 30px;
}

.dcww-field {
    display: flex;
    flex-flow: column;
}

.dcww-field__label {
    font-family: 'Nunito', sans-serif;
    margin-bottom: 15px;
}

.dcww-field__input {
    min-height: 60px;
    border-radius: 4px;
    font-size: 1rem;
    padding: 18px;
    border: 0;
    box-shadow: 0 0 0 1px #65858f;
    line-height: normal;
    max-width: 285px;
}

.dcww-field__input--mini {
    max-width: 100px;
}

.dcww-field__input:invalid {
    box-shadow: 0 0 0 2px #c74e48;
}

.dcww-field__validation {
    visibility: visible;
    margin-top: 10px;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    color: #c74e48;
}

.dcww-button {
    align-items: center;
    box-sizing: border-box;
    border-radius: 4px;
    display: inline-flex;
    line-height: 1.75;
    font-size: 18px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    padding: 9px 20px;
    transition: all 0.25s ease-in-out;
    text-align: center;
    cursor: pointer;
}

.dcww-button--primary {
    background-color: #009edb;
    color: #fff;
    border: none;
}

.dcww-button--primary:hover {
    background-color: #00b0f5;
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,.15);
    box-shadow: 0 5px 10px 0 rgba(0,0,0,.15);
    color: #fff;
}

.dcww-button--secondary {
    background: #fff;
    border: 2px solid #009edb;
    color: #0072bc;
}

.dcww-button--secondary:hover {
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,.15);
    box-shadow: 0 5px 10px 0 rgba(0,0,0,.15);
    color: #009edb;
}

.dcww-button--chevron {
    padding-right: 45px;
    background-image: url('../../../assets/chevron-right.svg');
    background-size: 32px 32px;
    background-position: 95% 50%;
    background-repeat: no-repeat;
    color: #fff;
}

.dcww-button--right {
    margin-left: auto;
}

.dcww-button--left {
    margin-right: auto;
}


@media only screen and (min-width: 768px) {
    .dcww-payments-header {
        justify-content: flex-start;
        padding: 20px;
    }

    .dcww-payments-header__links {
        padding: 0 60px;
    }

    .dcww-payments-form__container {
        padding: 30px 0 70px;
        grid-template-columns: repeat(12, 1fr);
    }

    .dcww-payments-form__header {
        grid-template-columns: repeat(12, 1fr);
    }

    .dcww-payments-form__content {
        padding-top: 40px;
        grid-column: 2/12;
    }

    .dcww-payments-form__content-inner {
        grid-template-columns: repeat(12, 1fr);
    }

    .dcww-payments-form__text {
        grid-column: 2/12;
        font-size: 22px;
    }

    .dcww-payments-footer {
        padding: 70px 20px 40px;
    }

    .dcww-payments__link {
        font-size: 18px;
    }

    .dcww-payments-form {
        padding: 0 20px;
    }

    .dcww-payments-form__title {
        margin-bottom: 30px;
        font-size: 30px;
        grid-column: 2/12;
    }

    .dcww-payments-form__sub-title {
        margin-bottom: 10px;
        font-size: 22px;
        grid-column: 2/12;
    }

    .dcww-line {
        grid-column: 2/12;
    }

    .dcww-field__input {
        width: 330px;
    }

    .dcww-fieldset {
        padding-top: 40px;
        grid-template-columns: repeat(12, 1fr);
    }

    .dcww-fieldset__fields {
        grid-column: 1/13;
        grid-template-columns: repeat(12, 1fr);
    }

    .dcww-fieldset__actions {
        margin-top: 40px;
        padding-top: 40px;
        grid-column: 2/12;
    }

    .dcww-fieldset__row {
        padding-left: 20px;
        grid-column: 2/12;
    }
}


@media only screen and (min-width: 1024px) {
    .dcww-payments-form__container {
        padding-bottom: 80px;
    }

    .dcww-payments__link--image {
        width: 140px;
    }

    .dcww-legal-copy {
        display: grid;
        grid-template-columns: 75% 25%;
    }

    .dcww-legal-copy__text {
        margin-bottom: 0;
    }

    .dcww-legal-copy__copyright {
        text-align: right;
    }

    .dcww-payments-form__title {
        font-size: 35px;
    }

    .dcww-field__input {
        width: 360px;
    }

    .dcww-payments-form__content {
        padding-top: 50px;
    }

    .dcww-payments-form__text {
        padding-left: 0;
        grid-column: 3/12;
    }

    .dcww-fieldset {
        padding-top: 50px;
    }

    .dcww-fieldset__actions {
        margin-top: 50px;
        padding-top: 50px;
    }

    .dcww-fieldset__row {
        grid-column: 3/12;
    }

}

</style>