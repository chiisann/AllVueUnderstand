/* eslint-disable no-console */
var Understand = {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<div class="notification" @mousemove="count++">you have {{ count }} messages.</div>'
}

var Face = {
  template: `
  <div class="face">
    <i class="fas fa-grin-squint header-icon" v-on:mouseenter="color" v-on:mouseleave="nocolor" v-bind:class="{ rotate: on}"></i>
  </div>`,

  data: function() {
    return {
      on: false
    }
  },

  methods: {
    color: function() {
      this.on = true
    },
    nocolor: function() {
      this.on = false
    }
  }
}

var Face2 = {
  template: `
  <div class="face">
    <i class="fas fa-grin-tongue-squint header-icon" v-on:mouseenter="color" v-on:mouseleave="nocolor" v-bind:class="{ rotate2: on}"></i>
  </div>`,

  data: function() {
    return {
      on: false
    }
  },

  methods: {
    color: function() {
      this.on = true
    },
    nocolor: function() {
      this.on = false
    }
  }
}

var Border = {
  data: function () {
    return {
      show: false
    }
  },
  template: `
  <div class="border-container" v-on:mouseenter="stretch">
    <div class="border-style" v-if="show">
      <slot></slot>
    </div>
  </div>`,

  methods: {
    stretch: function() {
      this.show = true
    }
  }
}

var Box = {
  data: function () {
    return {
      show: false
    }
  },
  template: `
  <div class="box" v-on:mouseenter="on" v-on:mouseleave="off">
    <div class="box-icon"  v-bind:class ="{ 'box-light' : show }">
     <i class="fas fa-question"></i>
    </div>
    <div class="box-text"  v-bind:class ="{ 'box-light' : show }">
      <slot></slot>
    </div>
  </div>
  `,

  methods: {
    on: function() {
      this.show = true
      console.log("eeeeeeee")
    },
    off: function() {
      this.show = false
    }
  }
}

var EnergyBar = {
  template: `
  <div class="energy-back" @mousemove="width++; check()">
    <div class="energy" v-bind:style="{ width: width + '%'}"></div>
    <div class="cont-energy">
      <i class="fas fa-lightbulb icon" v-bind:class="{ flash : on }"></i>
      <div class="energy-big">
        {{ width }} <br>%
      </div>
      <div class="energy-text">
        Give your brain a light. WEA <br>
        Please move your mouse on this section. 
        Afterwards, you will able to see growing line.
        <br> By CHII
      </div>
    </div>
    </div>
    `,

  data: function() {
    return {
      width: 0,
      backgroundColor: 'yellow',
      on: false,
    }
  },

  methods: {
    check: function() {
      if(70 <= this.width && this.width < 100){
        this.on = true
      }else if(this.width == 100){
        this.width = 0
        this.on = false
      }
    },
  }
}

new Vue({
  el: '#app',
  components: {
    'understand': Understand,
    'face': Face,
    'face2': Face2,
    'border': Border,
    'box': Box,
    'energybar': EnergyBar
  },
})

//v-bind : classやstyleを与える