AFRAME.registerComponent('camaleon', {
  schema: {
    interval: { type: 'number', default: 1000 },
    defaultColor: { type: 'color', default: '#fff' }
  },
  
  init: function() {
    var el = this.el
    var interval = this.data.interval
    
    var colors = ["red", "green", "blue", "yellow", "#feadae"]
    
    var i = 0
    
    el.setAttribute('color', colors[0])
    
    this.colorInterval = setInterval(function(){
      i = (i + 1) % colors.length
      el.setAttribute('color', colors[i])
    }, interval)
  },
  
  update: function() {},
  
  remove: function() {
    var el = this.el
    var defaultColor = this.data.defaultColor
    
    clearInterval(this.colorInterval)
    el.setAttribute('color', defaultColor)
  }
})

document.querySelector('a-torus').setAttribute('camaleon', 'defaultColor: skyblue; interval: 1000;')


setTimeout(function(){
  document.querySelector('a-torus').removeAttribute('camaleon')
}, 4000)
