<template>
  <div>
    <div class="link-container">
      <h2>Hovering on the whole panel does the animation and does it infinitely</h2>
      <div class="link">
        <p
          class="link__text"
        >Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <div class="box-diagonal">
          <svg viewBox="0 0 32 32" height="32px" width="32px">
            <path
              d="M12.70725,15.293 C12.31625,14.902 11.68425,14.902 11.29325,15.293 C10.90225,15.684 10.90225,16.316 11.29325,16.707 L15.29325,20.707 C15.48825,20.902 15.74425,21 16.00025,21 C16.25625,21 16.51225,20.902 16.70725,20.707 L20.70725,16.707 C21.09825,16.316 21.09825,15.684 20.70725,15.293 C20.31625,14.902 19.68425,14.902 19.29325,15.293 L17.00025,17.586 L17.00025,12 C17.00025,11.448 16.55325,11 16.00025,11 C15.44725,11 15.00025,11.448 15.00025,12 L15.00025,17.586 L12.70725,15.293 Z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="form-container">
      <h2>Hovering on the whole panel does the animation just three times</h2>
      <div class="form">
        <p class="form__label">Self Service form</p>
        <div class="form__info">
          <div class="form__text">
            <h3>Notification of change of address</h3>
            <p>Lorem ipsum dolar sit amet lorem ipsum dolar sit amet.</p>
          </div>
          <div class="box-sideways">
            <svg viewBox="0 0 32 32" height="32px" width="32px">
              <path
                d="M12.70725,15.293 C12.31625,14.902 11.68425,14.902 11.29325,15.293 C10.90225,15.684 10.90225,16.316 11.29325,16.707 L15.29325,20.707 C15.48825,20.902 15.74425,21 16.00025,21 C16.25625,21 16.51225,20.902 16.70725,20.707 L20.70725,16.707 C21.09825,16.316 21.09825,15.684 20.70725,15.293 C20.31625,14.902 19.68425,14.902 19.29325,15.293 L17.00025,17.586 L17.00025,12 C17.00025,11.448 16.55325,11 16.00025,11 C15.44725,11 15.00025,11.448 15.00025,12 L15.00025,17.586 L12.70725,15.293 Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="download-container">
      <h2>Hovering on the whole panel does the animation</h2>
      <div class="download">
        <img
          class="download__image"
          src="http://accessible-news.co.uk/wp-content/uploads/2017/09/Welsh-Water-276x400.png"
        />
        <div class="download__text">
          <h2 class="download__text-title">Student information leaflet</h2>
          <p class="download__text-para">Lorem ipsum dolar sit amet lorem ipsum dolar sit amet.</p>
          <div class="download__download">
            <p>PDF, 249kb</p>
            <div class="box-down">
              <svg viewBox="0 0 32 32" height="32px" width="32px">
                <path
                  d="M12.70725,15.293 C12.31625,14.902 11.68425,14.902 11.29325,15.293 C10.90225,15.684 10.90225,16.316 11.29325,16.707 L15.29325,20.707 C15.48825,20.902 15.74425,21 16.00025,21 C16.25625,21 16.51225,20.902 16.70725,20.707 L20.70725,16.707 C21.09825,16.316 21.09825,15.684 20.70725,15.293 C20.31625,14.902 19.68425,14.902 19.29325,15.293 L17.00025,17.586 L17.00025,12 C17.00025,11.448 16.55325,11 16.00025,11 C15.44725,11 15.00025,11.448 15.00025,12 L15.00025,17.586 L12.70725,15.293 Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="download-container">
      <h2>Hovering on the PDF does the animation</h2>
      <div class="download download--hover">
        <img
          class="download__image"
          src="http://accessible-news.co.uk/wp-content/uploads/2017/09/Welsh-Water-276x400.png"
        />
        <div class="download__text">
          <h2 class="download__text-title">Student information leaflet</h2>
          <p class="download__text-para">Lorem ipsum dolar sit amet lorem ipsum dolar sit amet.</p>
          <div class="download__download">
            <p>PDF, 249kb</p>
            <div class="box-down">
              <svg viewBox="0 0 32 32" height="32px" width="32px">
                <path
                  d="M12.70725,15.293 C12.31625,14.902 11.68425,14.902 11.29325,15.293 C10.90225,15.684 10.90225,16.316 11.29325,16.707 L15.29325,20.707 C15.48825,20.902 15.74425,21 16.00025,21 C16.25625,21 16.51225,20.902 16.70725,20.707 L20.70725,16.707 C21.09825,16.316 21.09825,15.684 20.70725,15.293 C20.31625,14.902 19.68425,14.902 19.29325,15.293 L17.00025,17.586 L17.00025,12 C17.00025,11.448 16.55325,11 16.00025,11 C15.44725,11 15.00025,11.448 15.00025,12 L15.00025,17.586 L12.70725,15.293 Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "arrows"
};
</script>

<style lang="scss" scoped>
.link-container {
  padding: 30px;
  margin: 30px;
  background: #f5f7f8;
}
.link {
  margin: auto;
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background: #eaeef0;
  cursor: pointer;
  &__text {
    width: 90%;
    margin: 0;
    text-align: left;
  }
  &:hover {
    .box-diagonal {
      background: #65858f;
    }
    svg {
      animation: moveArrowDiagonal 1s ease-in-out infinite;
    }
  }
}
.box-diagonal {
  height: 32px;
  width: 32px;
  background: #b2c2c7;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  svg {
    fill: white;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(0) translateX(0) rotate(-145deg);
  }
}

@keyframes moveArrowDiagonal {
  0% {
    transform: translateY(0) translateX(0) rotate(-145deg);
  }
  30% {
    transform: translateY(-30px) translateX(30px) rotate(-145deg);
    opacity: 0;
  }
  35% {
    opacity: 0;
    transform: translateY(30px) translateX(-30px) rotate(-145deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translateX(0) rotate(-145deg);
  }
}
.form-container {
  padding: 30px;
  margin: 30px;
  background: #f5f7f8;
}

.form {
  padding: 30px;
  width: 760px;
  margin: auto;
  cursor: pointer;
  background: white;
  &__label {
    margin: -30px auto auto 0px;
    padding: 5px 10px;
    border-radius: 4px;
    width: 140px;
    background: #65858f;
    color: white;
  }
  &__info {
    display: flex;
    justify-content: space-between;
    p {
      margin: 0;
    }
  }
  &__text {
    text-align: left;
  }
  &:hover {
    .box-sideways {
      background: #65858f;
    }
    svg {
      animation: moveArrowSideways 1s ease-in-out 3;
    }
  }
}

.box-sideways {
  margin: 30px 0 0 0;
  height: 32px;
  width: 32px;
  background: #b2c2c7;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  svg {
    fill: white;
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
.download-container {
  border: 2px solid black;
  padding: 30px;
  margin: 30px;
}
.download {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 780px;
  margin: auto;

  &:hover {
    .box-down {
      background: #65858f;
    }
    svg {
      animation: moveArrowDown 1s ease-in-out;
    }
  }
  &__download {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    border-top: 1px solid #b2c2c7;
  }
  &__text {
    text-align: left;
    width: 260px;
    margin: auto;
  }
  &__text-para {
    padding: 0 0 30px 0;
    margin: 0;
  }
}
.download--hover {
  cursor: default;
  &:hover {
    .box-down {
      background: #65858f;
    }
    svg {
      animation: none;
    }
  }
  .download__download {
    cursor: pointer;
    &:hover {
      .box-down {
        background: #65858f;
      }
      svg {
        animation: moveArrowDown 1s ease-in-out;
      }
    }
  }
}

.box-down {
  height: 32px;
  width: 32px;
  background: #b2c2c7;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  svg {
    fill: white;
    position: absolute;
    transform: translateY(0);
  }
}

@keyframes moveArrowDown {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(30px);
    opacity: 0;
  }
  35% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>