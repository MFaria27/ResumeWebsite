/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

// @ts-ignore
var pJS = function(tag_id, params){

    var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');
  
    /* particles.js variables with default values */
    this.pJS = {
      canvas: {
        el: canvas_el,
        // @ts-ignore
        w: canvas_el.offsetWidth,
        // @ts-ignore
        h: canvas_el.offsetHeight
      },
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#fff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#ff0000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: '',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 1,
          random: false,
          anim: {
            enable: false,
            speed: 2,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: 20,
          random: false,
          anim: {
            enable: false,
            speed: 20,
            size_min: 0,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 100,
          color: '#fff',
          opacity: 1,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 3000,
            rotateY: 3000
          }
        },
        array: []
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab:{
            distance: 100,
            line_linked:{
              opacity: 1
            }
          },
          bubble:{
            distance: 200,
            size: 80,
            duration: 0.4
          },
          repulse:{
            distance: 200,
            duration: 0.4
          },
          push:{
            particles_nb: 4
          },
          remove:{
            particles_nb: 2
          }
        },
        mouse:{}
      },
      retina_detect: false,
      fn: {
        interact: {},
        modes: {},
        vendors:{}
      },
      tmp: {}
    };
  
    var pJS = this.pJS;
  
    /* params settings */
    if(params){
      // @ts-ignore
      Object.deepExtend(pJS, params);
    }
  
    // @ts-ignore
    pJS.tmp.obj = {
      size_value: pJS.particles.size.value,
      size_anim_speed: pJS.particles.size.anim.speed,
      move_speed: pJS.particles.move.speed,
      line_linked_distance: pJS.particles.line_linked.distance,
      line_linked_width: pJS.particles.line_linked.width,
      mode_grab_distance: pJS.interactivity.modes.grab.distance,
      mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
      mode_bubble_size: pJS.interactivity.modes.bubble.size,
      mode_repulse_distance: pJS.interactivity.modes.repulse.distance
    };
  
  
    // @ts-ignore
    pJS.fn.retinaInit = function(){
  
      if(pJS.retina_detect && window.devicePixelRatio > 1){
        // @ts-ignore
        pJS.canvas.pxratio = window.devicePixelRatio; 
        // @ts-ignore
        pJS.tmp.retina = true;
      } 
      else{
        // @ts-ignore
        pJS.canvas.pxratio = 1;
        // @ts-ignore
        pJS.tmp.retina = false;
      }
  
      // @ts-ignore
      pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
      // @ts-ignore
      pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;
  
      // @ts-ignore
      pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
      // @ts-ignore
      pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
      // @ts-ignore
      pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
      // @ts-ignore
      pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
      // @ts-ignore
      pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
      // @ts-ignore
      pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
      // @ts-ignore
      pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
      // @ts-ignore
      pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
      // @ts-ignore
      pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;
  
    };
  
  
  
    /* ---------- pJS functions - canvas ------------ */
  
    // @ts-ignore
    pJS.fn.canvasInit = function(){
      // @ts-ignore
      pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
    };
  
    // @ts-ignore
    pJS.fn.canvasSize = function(){
  
      // @ts-ignore
      pJS.canvas.el.width = pJS.canvas.w;
      // @ts-ignore
      pJS.canvas.el.height = pJS.canvas.h;
  
      if(pJS && pJS.interactivity.events.resize){
  
        window.addEventListener('resize', function(){
  
            // @ts-ignore
            pJS.canvas.w = pJS.canvas.el.offsetWidth;
            // @ts-ignore
            pJS.canvas.h = pJS.canvas.el.offsetHeight;
  
            /* resize canvas */
            // @ts-ignore
            if(pJS.tmp.retina){
              // @ts-ignore
              pJS.canvas.w *= pJS.canvas.pxratio;
              // @ts-ignore
              pJS.canvas.h *= pJS.canvas.pxratio;
            }
  
            // @ts-ignore
            pJS.canvas.el.width = pJS.canvas.w;
            // @ts-ignore
            pJS.canvas.el.height = pJS.canvas.h;
  
            /* repaint canvas on anim disabled */
            if(!pJS.particles.move.enable){
              // @ts-ignore
              pJS.fn.particlesEmpty();
              // @ts-ignore
              pJS.fn.particlesCreate();
              // @ts-ignore
              pJS.fn.particlesDraw();
              // @ts-ignore
              pJS.fn.vendors.densityAutoParticles();
            }
  
          /* density particles enabled */
          // @ts-ignore
          pJS.fn.vendors.densityAutoParticles();
  
        });
  
      }
  
    };
  
  
    // @ts-ignore
    pJS.fn.canvasPaint = function(){
      // @ts-ignore
      pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
    };
  
    // @ts-ignore
    pJS.fn.canvasClear = function(){
      // @ts-ignore
      pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
    };
  
  
    /* --------- pJS functions - particles ----------- */
  
    // @ts-ignore
    pJS.fn.particle = function(color, opacity, position){
  
      /* size */
      this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
      if(pJS.particles.size.anim.enable){
        this.size_status = false;
        this.vs = pJS.particles.size.anim.speed / 100;
        if(!pJS.particles.size.anim.sync){
          this.vs = this.vs * Math.random();
        }
      }
  
      /* position */
      this.x = position ? position.x : Math.random() * pJS.canvas.w;
      this.y = position ? position.y : Math.random() * pJS.canvas.h;
  
      /* check position  - into the canvas */
      if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
      else if(this.x < this.radius*2) this.x = this.x + this.radius;
      if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
      else if(this.y < this.radius*2) this.y = this.y + this.radius;
  
      /* check position - avoid overlap */
      if(pJS.particles.move.bounce){
        // @ts-ignore
        pJS.fn.vendors.checkOverlap(this, position);
      }
  
      /* color */
      this.color = {};
      if(typeof(color.value) == 'object'){
  
        if(color.value instanceof Array){
          var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
          // @ts-ignore
          this.color.rgb = hexToRgb(color_selected);
        }else{
          if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
            // @ts-ignore
            this.color.rgb = {
              r: color.value.r,
              g: color.value.g,
              b: color.value.b
            }
          }
          if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
            // @ts-ignore
            this.color.hsl = {
              h: color.value.h,
              s: color.value.s,
              l: color.value.l
            }
          }
        }
  
      }
      else if(color.value == 'random'){
        // @ts-ignore
        this.color.rgb = {
          r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
          g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
          b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
        }
      }
      else if(typeof(color.value) == 'string'){
        this.color = color;
        this.color.rgb = hexToRgb(this.color.value);
      }
  
      /* opacity */
      this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
      if(pJS.particles.opacity.anim.enable){
        this.opacity_status = false;
        this.vo = pJS.particles.opacity.anim.speed / 100;
        if(!pJS.particles.opacity.anim.sync){
          this.vo = this.vo * Math.random();
        }
      }
  
      /* animation - velocity for speed */
      var velbase = {}
      switch(pJS.particles.move.direction){
        case 'top':
          velbase = { x:0, y:-1 };
        break;
        case 'top-right':
          velbase = { x:0.5, y:-0.5 };
        break;
        case 'right':
          velbase = { x:1, y:-0 };
        break;
        case 'bottom-right':
          velbase = { x:0.5, y:0.5 };
        break;
        case 'bottom':
          velbase = { x:0, y:1 };
        break;
        case 'bottom-left':
          velbase = { x:-0.5, y:1 };
        break;
        case 'left':
          velbase = { x:-1, y:0 };
        break;
        case 'top-left':
          velbase = { x:-0.5, y:-0.5 };
        break;
        default:
          velbase = { x:0, y:0 };
        break;
      }
  
      if(pJS.particles.move.straight){
        // @ts-ignore
        this.vx = velbase.x;
        // @ts-ignore
        this.vy = velbase.y;
        if(pJS.particles.move.random){
          this.vx = this.vx * (Math.random());
          this.vy = this.vy * (Math.random());
        }
      }else{
        // @ts-ignore
        this.vx = velbase.x + Math.random()-0.5;
        // @ts-ignore
        this.vy = velbase.y + Math.random()-0.5;
      }
  
      // var theta = 2.0 * Math.PI * Math.random();
      // this.vx = Math.cos(theta);
      // this.vy = Math.sin(theta);
  
      this.vx_i = this.vx;
      this.vy_i = this.vy;
  
      
  
      /* if shape is image */
  
      var shape_type = pJS.particles.shape.type;
      if(typeof(shape_type) == 'object'){
        // @ts-ignore
        if(shape_type instanceof Array){
          // @ts-ignore
          var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
          this.shape = shape_selected;
        }
      }else{
        this.shape = shape_type;
      }
  
      if(this.shape == 'image'){
        var sh = pJS.particles.shape;
        this.img = {
          src: sh.image.src,
          ratio: sh.image.width / sh.image.height
        }
        if(!this.img.ratio) this.img.ratio = 1;
        // @ts-ignore
        if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined){
          // @ts-ignore
          pJS.fn.vendors.createSvgImg(this);
          // @ts-ignore
          if(pJS.tmp.pushing){
            // @ts-ignore
            this.img.loaded = false;
          }
        }
      }
  
      
  
    };
  
  
    // @ts-ignore
    pJS.fn.particle.prototype.draw = function() {
  
      var p = this;
  
      if(p.radius_bubble != undefined){
        var radius = p.radius_bubble; 
      }else{
        var radius = p.radius;
      }
  
      if(p.opacity_bubble != undefined){
        var opacity = p.opacity_bubble;
      }else{
        var opacity = p.opacity;
      }
  
      if(p.color.rgb){
        var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
      }else{
        var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
      }
  
      // @ts-ignore
      pJS.canvas.ctx.fillStyle = color_value;
      // @ts-ignore
      pJS.canvas.ctx.beginPath();
  
      switch(p.shape){
  
        case 'circle':
          // @ts-ignore
          pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
        break;
  
        case 'edge':
          // @ts-ignore
          pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
        break;
  
        case 'triangle':
          // @ts-ignore
          pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
        break;
  
        case 'polygon':
          // @ts-ignore
          pJS.fn.vendors.drawShape(
            // @ts-ignore
            pJS.canvas.ctx,
            p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
            p.y - radius / (2.66/3.5), // startY
            radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
            pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
            1 // sideCountDenominator
          );
        break;
  
        case 'star':
          // @ts-ignore
          pJS.fn.vendors.drawShape(
            // @ts-ignore
            pJS.canvas.ctx,
            p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
            p.y - radius / (2*2.66/3.5), // startY
            radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
            pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
            2 // sideCountDenominator
          );
        break;
  
        case 'image':
  
          function draw(){
            // @ts-ignore
            pJS.canvas.ctx.drawImage(
              img_obj,
              p.x-radius,
              p.y-radius,
              radius*2,
              radius*2 / p.img.ratio
            );
          }
  
          // @ts-ignore
          if(pJS.tmp.img_type == 'svg'){
            var img_obj = p.img.obj;
          }else{
            // @ts-ignore
            var img_obj = pJS.tmp.img_obj;
          }
  
          if(img_obj){
            draw();
          }
  
        break;
  
      }
  
      // @ts-ignore
      pJS.canvas.ctx.closePath();
  
      if(pJS.particles.shape.stroke.width > 0){
        // @ts-ignore
        pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
        // @ts-ignore
        pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
        // @ts-ignore
        pJS.canvas.ctx.stroke();
      }
      
      // @ts-ignore
      pJS.canvas.ctx.fill();
      
    };
  
  
    // @ts-ignore
    pJS.fn.particlesCreate = function(){
      for(var i = 0; i < pJS.particles.number.value; i++) {
        // @ts-ignore
        pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
      }
    };
  
    // @ts-ignore
    pJS.fn.particlesUpdate = function(){
  
      for(var i = 0; i < pJS.particles.array.length; i++){
  
        /* the particle */
        // @ts-ignore
        var p = pJS.particles.array[i];
  
        // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
        // var f = -BANG_SIZE / d;
        // if ( d < BANG_SIZE ) {
        //     var t = Math.atan2( dy, dx );
        //     p.vx = f * Math.cos(t);
        //     p.vy = f * Math.sin(t);
        // }
  
        /* move the particle */
        if(pJS.particles.move.enable){
          var ms = pJS.particles.move.speed/2;
          p.x += p.vx * ms;
          p.y += p.vy * ms;
        }
  
        /* change opacity status */
        if(pJS.particles.opacity.anim.enable) {
          if(p.opacity_status == true) {
            if(p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
            p.opacity += p.vo;
          }else {
            if(p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
            p.opacity -= p.vo;
          }
          if(p.opacity < 0) p.opacity = 0;
        }
  
        /* change size */
        if(pJS.particles.size.anim.enable){
          if(p.size_status == true){
            if(p.radius >= pJS.particles.size.value) p.size_status = false;
            p.radius += p.vs;
          }else{
            if(p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
            p.radius -= p.vs;
          }
          if(p.radius < 0) p.radius = 0;
        }
  
        /* change particle position if it is out of canvas */
        if(pJS.particles.move.out_mode == 'bounce'){
          var new_pos = {
            x_left: p.radius,
            x_right:  pJS.canvas.w,
            y_top: p.radius,
            y_bottom: pJS.canvas.h
          }
        }else{
          // @ts-ignore
          var new_pos = {
            x_left: -p.radius,
            x_right: pJS.canvas.w + p.radius,
            y_top: -p.radius,
            y_bottom: pJS.canvas.h + p.radius
          }
        }
  
        if(p.x - p.radius > pJS.canvas.w){
          p.x = new_pos.x_left;
          p.y = Math.random() * pJS.canvas.h;
        }
        else if(p.x + p.radius < 0){
          p.x = new_pos.x_right;
          p.y = Math.random() * pJS.canvas.h;
        }
        if(p.y - p.radius > pJS.canvas.h){
          p.y = new_pos.y_top;
          p.x = Math.random() * pJS.canvas.w;
        }
        else if(p.y + p.radius < 0){
          p.y = new_pos.y_bottom;
          p.x = Math.random() * pJS.canvas.w;
        }
  
        /* out of canvas modes */
        switch(pJS.particles.move.out_mode){
          case 'bounce':
            if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
            else if (p.x - p.radius < 0) p.vx = -p.vx;
            if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
            else if (p.y - p.radius < 0) p.vy = -p.vy;
          break;
        }
  
        /* events */
        if(isInArray('grab', pJS.interactivity.events.onhover.mode)){
          // @ts-ignore
          pJS.fn.modes.grabParticle(p);
        }
  
        if(isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)){
          // @ts-ignore
          pJS.fn.modes.bubbleParticle(p);
        }
  
        if(isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)){
          // @ts-ignore
          pJS.fn.modes.repulseParticle(p);
        }
  
        /* interaction auto between particles */
        if(pJS.particles.line_linked.enable || pJS.particles.move.attract.enable){
          for(var j = i + 1; j < pJS.particles.array.length; j++){
            // @ts-ignore
            var p2 = pJS.particles.array[j];
  
            /* link particles */
            if(pJS.particles.line_linked.enable){
              // @ts-ignore
              pJS.fn.interact.linkParticles(p,p2);
            }
  
            /* attract particles */
            if(pJS.particles.move.attract.enable){
              // @ts-ignore
              pJS.fn.interact.attractParticles(p,p2);
            }
  
            /* bounce particles */
            if(pJS.particles.move.bounce){
              // @ts-ignore
              pJS.fn.interact.bounceParticles(p,p2);
            }
  
          }
        }
  
  
      }
  
    };
  
    // @ts-ignore
    pJS.fn.particlesDraw = function(){
  
      /* clear canvas */
      // @ts-ignore
      pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  
      /* update each particles param */
      // @ts-ignore
      pJS.fn.particlesUpdate();
  
      /* draw each particle */
      for(var i = 0; i < pJS.particles.array.length; i++){
        // @ts-ignore
        var p = pJS.particles.array[i];
        p.draw();
      }
  
    };
  
    // @ts-ignore
    pJS.fn.particlesEmpty = function(){
      pJS.particles.array = [];
    };
  
    // @ts-ignore
    pJS.fn.particlesRefresh = function(){
  
      /* init all */
      // @ts-ignore
      cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
      // @ts-ignore
      cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
      // @ts-ignore
      pJS.tmp.source_svg = undefined;
      // @ts-ignore
      pJS.tmp.img_obj = undefined;
      // @ts-ignore
      pJS.tmp.count_svg = 0;
      // @ts-ignore
      pJS.fn.particlesEmpty();
      // @ts-ignore
      pJS.fn.canvasClear();
      
      /* restart */
      // @ts-ignore
      pJS.fn.vendors.start();
  
    };
  
  
    /* ---------- pJS functions - particles interaction ------------ */
  
    // @ts-ignore
    pJS.fn.interact.linkParticles = function(p1, p2){
  
      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);
  
      /* draw a line between p1 and p2 if the distance between them is under the config distance */
      if(dist <= pJS.particles.line_linked.distance){
  
        var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;
  
        if(opacity_line > 0){        
          
          /* style */
          // @ts-ignore
          var color_line = pJS.particles.line_linked.color_rgb_line;
          // @ts-ignore
          pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
          // @ts-ignore
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
          
          /* path */
          // @ts-ignore
          pJS.canvas.ctx.beginPath();
          // @ts-ignore
          pJS.canvas.ctx.moveTo(p1.x, p1.y);
          // @ts-ignore
          pJS.canvas.ctx.lineTo(p2.x, p2.y);
          // @ts-ignore
          pJS.canvas.ctx.stroke();
          // @ts-ignore
          pJS.canvas.ctx.closePath();
  
        }
  
      }
  
    };
  
  
    // @ts-ignore
    pJS.fn.interact.attractParticles  = function(p1, p2){
  
      /* condensed particles */
      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);
  
      if(dist <= pJS.particles.line_linked.distance){
  
        var ax = dx/(pJS.particles.move.attract.rotateX*1000),
            ay = dy/(pJS.particles.move.attract.rotateY*1000);
  
        p1.vx -= ax;
        p1.vy -= ay;
  
        p2.vx += ax;
        p2.vy += ay;
  
      }
      
  
    }
  
  
    // @ts-ignore
    pJS.fn.interact.bounceParticles = function(p1, p2){
  
      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy),
          dist_p = p1.radius+p2.radius;
  
      if(dist <= dist_p){
        p1.vx = -p1.vx;
        p1.vy = -p1.vy;
  
        p2.vx = -p2.vx;
        p2.vy = -p2.vy;
      }
  
    }
  
  
    /* ---------- pJS functions - modes events ------------ */
  
    // @ts-ignore
    pJS.fn.modes.pushParticles = function(nb, pos){
  
      // @ts-ignore
      pJS.tmp.pushing = true;
  
      for(var i = 0; i < nb; i++){
        pJS.particles.array.push(
          // @ts-ignore
          new pJS.fn.particle(
            pJS.particles.color,
            pJS.particles.opacity.value,
            {
              'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
              'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
            }
          )
        )
        if(i == nb-1){
          if(!pJS.particles.move.enable){
            // @ts-ignore
            pJS.fn.particlesDraw();
          }
          // @ts-ignore
          pJS.tmp.pushing = false;
        }
      }
  
    };
  
  
    // @ts-ignore
    pJS.fn.modes.removeParticles = function(nb){
  
      pJS.particles.array.splice(0, nb);
      if(!pJS.particles.move.enable){
        // @ts-ignore
        pJS.fn.particlesDraw();
      }
  
    };
  
  
    // @ts-ignore
    pJS.fn.modes.bubbleParticle = function(p){
  
      /* on hover event */
      if(pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)){
  
        // @ts-ignore
        var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
            // @ts-ignore
            dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
            ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;
  
        function init(){
          p.opacity_bubble = p.opacity;
          p.radius_bubble = p.radius;
        }
  
        /* mousemove - check ratio */
        if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
  
          // @ts-ignore
          if(ratio >= 0 && pJS.interactivity.status == 'mousemove'){
            
            /* size */
            if(pJS.interactivity.modes.bubble.size != pJS.particles.size.value){
  
              if(pJS.interactivity.modes.bubble.size > pJS.particles.size.value){
                var size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);
                if(size >= 0){
                  p.radius_bubble = size;
                }
              }else{
                var dif = p.radius - pJS.interactivity.modes.bubble.size,
                    // @ts-ignore
                    size = p.radius - (dif*ratio);
                if(size > 0){
                  p.radius_bubble = size;
                }else{
                  p.radius_bubble = 0;
                }
              }
  
            }
  
            /* opacity */
            // @ts-ignore
            if(pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value){
  
              // @ts-ignore
              if(pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value){
                // @ts-ignore
                var opacity = pJS.interactivity.modes.bubble.opacity*ratio;
                // @ts-ignore
                if(opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity){
                  p.opacity_bubble = opacity;
                }
              }else{
                // @ts-ignore
                var opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;
                // @ts-ignore
                if(opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity){
                  p.opacity_bubble = opacity;
                }
              }
  
            }
  
          }
  
        }else{
          init();
        }
  
  
        /* mouseleave */
        // @ts-ignore
        if(pJS.interactivity.status == 'mouseleave'){
          init();
        }
      
      }
  
      /* on click event */
      else if(pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)){
  
  
        // @ts-ignore
        if(pJS.tmp.bubble_clicking){
          // @ts-ignore
          var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
              // @ts-ignore
              dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
              dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
              // @ts-ignore
              time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;
  
          if(time_spent > pJS.interactivity.modes.bubble.duration){
            // @ts-ignore
            pJS.tmp.bubble_duration_end = true;
          }
  
          if(time_spent > pJS.interactivity.modes.bubble.duration*2){
            // @ts-ignore
            pJS.tmp.bubble_clicking = false;
            // @ts-ignore
            pJS.tmp.bubble_duration_end = false;
          }
        }
  
  
        // @ts-ignore
        function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){
  
          if(bubble_param != particles_param){
  
            // @ts-ignore
            if(!pJS.tmp.bubble_duration_end){
              if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
                if(p_obj_bubble != undefined) var obj = p_obj_bubble;
                else var obj = p_obj;
                if(obj != bubble_param){
                  var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
                  if(id == 'size') p.radius_bubble = value;
                  if(id == 'opacity') p.opacity_bubble = value;
                }
              }else{
                if(id == 'size') p.radius_bubble = undefined;
                if(id == 'opacity') p.opacity_bubble = undefined;
              }
            }else{
              if(p_obj_bubble != undefined){
                var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),
                    dif = bubble_param - value_tmp;
                    value = bubble_param + dif;
                if(id == 'size') p.radius_bubble = value;
                if(id == 'opacity') p.opacity_bubble = value;
              }
            }
  
          }
  
        }
  
        // @ts-ignore
        if(pJS.tmp.bubble_clicking){
          /* size */
          process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
          /* opacity */
          // @ts-ignore
          process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
        }
  
      }
  
    };
  
  
    // @ts-ignore
    pJS.fn.modes.repulseParticle = function(p){
  
      // @ts-ignore
      if(pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {
  
        // @ts-ignore
        var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
            // @ts-ignore
            dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);
  
        var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},
            repulseRadius = pJS.interactivity.modes.repulse.distance,
            velocity = 100,
            repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);
        
        var pos = {
          x: p.x + normVec.x * repulseFactor,
          y: p.y + normVec.y * repulseFactor
        }
  
        if(pJS.particles.move.out_mode == 'bounce'){
          if(pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
          if(pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
        }else{
          p.x = pos.x;
          p.y = pos.y;
        }
      
      }
  
  
      else if(pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {
  
        // @ts-ignore
        if(!pJS.tmp.repulse_finish){
          // @ts-ignore
          pJS.tmp.repulse_count++;
          // @ts-ignore
          if(pJS.tmp.repulse_count == pJS.particles.array.length){
            // @ts-ignore
            pJS.tmp.repulse_finish = true;
          }
        }
  
        // @ts-ignore
        if(pJS.tmp.repulse_clicking){
  
          var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);
  
          // @ts-ignore
          var dx = pJS.interactivity.mouse.click_pos_x - p.x,
              // @ts-ignore
              dy = pJS.interactivity.mouse.click_pos_y - p.y,
              d = dx*dx + dy*dy;
  
          var force = -repulseRadius / d * 1;
  
          function process(){
  
            var f = Math.atan2(dy,dx);
            p.vx = force * Math.cos(f);
            p.vy = force * Math.sin(f);
  
            if(pJS.particles.move.out_mode == 'bounce'){
              var pos = {
                x: p.x + p.vx,
                y: p.y + p.vy
              }
              if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
              else if (pos.x - p.radius < 0) p.vx = -p.vx;
              if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
              else if (pos.y - p.radius < 0) p.vy = -p.vy;
            }
  
          }
  
          // default
          if(d <= repulseRadius){
            process();
          }
  
          // bang - slow motion mode
          // if(!pJS.tmp.repulse_finish){
          //   if(d <= repulseRadius){
          //     process();
          //   }
          // }else{
          //   process();
          // }
          
  
        }else{
  
          // @ts-ignore
          if(pJS.tmp.repulse_clicking == false){
  
            p.vx = p.vx_i;
            p.vy = p.vy_i;
          
          }
  
        }
  
      }
  
    }
  
  
    // @ts-ignore
    pJS.fn.modes.grabParticle = function(p){
  
      // @ts-ignore
      if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){
  
        // @ts-ignore
        var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
            // @ts-ignore
            dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);
  
        /* draw a line between the cursor and the particle if the distance between them is under the config distance */
        if(dist_mouse <= pJS.interactivity.modes.grab.distance){
  
          var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;
  
          if(opacity_line > 0){
  
            /* style */
            // @ts-ignore
            var color_line = pJS.particles.line_linked.color_rgb_line;
            // @ts-ignore
            pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
            // @ts-ignore
            pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
            //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
            
            /* path */
            // @ts-ignore
            pJS.canvas.ctx.beginPath();
            // @ts-ignore
            pJS.canvas.ctx.moveTo(p.x, p.y);
            // @ts-ignore
            pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
            // @ts-ignore
            pJS.canvas.ctx.stroke();
            // @ts-ignore
            pJS.canvas.ctx.closePath();
  
          }
  
        }
  
      }
  
    };
  
  
  
    /* ---------- pJS functions - vendors ------------ */
  
    // @ts-ignore
    pJS.fn.vendors.eventsListeners = function(){
  
      /* events target element */
      if(pJS.interactivity.detect_on == 'window'){
        // @ts-ignore
        pJS.interactivity.el = window;
      }else{
        // @ts-ignore
        pJS.interactivity.el = pJS.canvas.el;
      }
  
  
      /* detect mouse pos - on hover / click event */
      if(pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable){
  
        /* el on mousemove */
        // @ts-ignore
        pJS.interactivity.el.addEventListener('mousemove', function(e){
  
          // @ts-ignore
          if(pJS.interactivity.el == window){
            var pos_x = e.clientX,
                pos_y = e.clientY;
          }
          else{
            var pos_x = e.offsetX || e.clientX,
                pos_y = e.offsetY || e.clientY;
          }
  
          // @ts-ignore
          pJS.interactivity.mouse.pos_x = pos_x;
          // @ts-ignore
          pJS.interactivity.mouse.pos_y = pos_y;
  
          // @ts-ignore
          if(pJS.tmp.retina){
            // @ts-ignore
            pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
            // @ts-ignore
            pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
          }
  
          // @ts-ignore
          pJS.interactivity.status = 'mousemove';
  
        });
  
        /* el on onmouseleave */
        // @ts-ignore
        pJS.interactivity.el.addEventListener('mouseleave', function(e){
  
          // @ts-ignore
          pJS.interactivity.mouse.pos_x = null;
          // @ts-ignore
          pJS.interactivity.mouse.pos_y = null;
          // @ts-ignore
          pJS.interactivity.status = 'mouseleave';
  
        });
  
      }
  
      /* on click event */
      if(pJS.interactivity.events.onclick.enable){
  
        // @ts-ignore
        pJS.interactivity.el.addEventListener('click', function(){
  
          // @ts-ignore
          pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
          // @ts-ignore
          pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
          // @ts-ignore
          pJS.interactivity.mouse.click_time = new Date().getTime();
  
          if(pJS.interactivity.events.onclick.enable){
  
            switch(pJS.interactivity.events.onclick.mode){
  
              case 'push':
                if(pJS.particles.move.enable){
                  // @ts-ignore
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                }else{
                  if(pJS.interactivity.modes.push.particles_nb == 1){
                    // @ts-ignore
                    pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                  }
                  else if(pJS.interactivity.modes.push.particles_nb > 1){
                    // @ts-ignore
                    pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                  }
                }
              break;
  
              case 'remove':
                // @ts-ignore
                pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
              break;
  
              case 'bubble':
                // @ts-ignore
                pJS.tmp.bubble_clicking = true;
              break;
  
              case 'repulse':
                // @ts-ignore
                pJS.tmp.repulse_clicking = true;
                // @ts-ignore
                pJS.tmp.repulse_count = 0;
                // @ts-ignore
                pJS.tmp.repulse_finish = false;
                setTimeout(function(){
                  // @ts-ignore
                  pJS.tmp.repulse_clicking = false;
                }, pJS.interactivity.modes.repulse.duration*1000)
              break;
  
            }
  
          }
  
        });
          
      }
  
  
    };
  
    // @ts-ignore
    pJS.fn.vendors.densityAutoParticles = function(){
  
      if(pJS.particles.number.density.enable){
  
        /* calc area */
        // @ts-ignore
        var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
        // @ts-ignore
        if(pJS.tmp.retina){
          // @ts-ignore
          area = area/(pJS.canvas.pxratio*2);
        }
  
        /* calc number of particles based on density area */
        var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;
  
        /* add or remove X particles */
        var missing_particles = pJS.particles.array.length - nb_particles;
        // @ts-ignore
        if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
        // @ts-ignore
        else pJS.fn.modes.removeParticles(missing_particles);
  
      }
  
    };
  
  
    // @ts-ignore
    pJS.fn.vendors.checkOverlap = function(p1, position){
      for(var i = 0; i < pJS.particles.array.length; i++){
        // @ts-ignore
        var p2 = pJS.particles.array[i];
  
        var dx = p1.x - p2.x,
            dy = p1.y - p2.y,
            dist = Math.sqrt(dx*dx + dy*dy);
  
        if(dist <= p1.radius + p2.radius){
          p1.x = position ? position.x : Math.random() * pJS.canvas.w;
          p1.y = position ? position.y : Math.random() * pJS.canvas.h;
          // @ts-ignore
          pJS.fn.vendors.checkOverlap(p1);
        }
      }
    };
  
  
    // @ts-ignore
    pJS.fn.vendors.createSvgImg = function(p){
  
      /* set color to svg element */
      // @ts-ignore
      var svgXml = pJS.tmp.source_svg,
          rgbHex = /#([0-9A-F]{3,6})/gi,
          // @ts-ignore
          coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
            if(p.color.rgb){
              var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
            }else{
              var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
            }
            return color_value;
          });
  
      /* prepare to create img with colored svg */
      var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
          DOMURL = window.URL || window.webkitURL || window,
          url = DOMURL.createObjectURL(svg);
  
      /* create particle img obj */
      var img = new Image();
      img.addEventListener('load', function(){
        p.img.obj = img;
        p.img.loaded = true;
        DOMURL.revokeObjectURL(url);
        // @ts-ignore
        pJS.tmp.count_svg++;
      });
      img.src = url;
  
    };
  
  
    // @ts-ignore
    pJS.fn.vendors.destroypJS = function(){
      // @ts-ignore
      cancelAnimationFrame(pJS.fn.drawAnimFrame);
      // @ts-ignore
      canvas_el.remove();
      // @ts-ignore
      pJSDom = null;
    };
  
  
    // @ts-ignore
    pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){
  
      // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
      var sideCount = sideCountNumerator * sideCountDenominator;
      var decimalSides = sideCountNumerator / sideCountDenominator;
      var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
      var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
      c.save();
      c.beginPath();
      c.translate(startX, startY);
      c.moveTo(0,0);
      for (var i = 0; i < sideCount; i++) {
        c.lineTo(sideLength,0);
        c.translate(sideLength,0);
        c.rotate(interiorAngle);
      }
      //c.stroke();
      c.fill();
      c.restore();
  
    };
  
    // @ts-ignore
    pJS.fn.vendors.exportImg = function(){
      // @ts-ignore
      window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
    };
  
  
    // @ts-ignore
    pJS.fn.vendors.loadImg = function(type){
  
      // @ts-ignore
      pJS.tmp.img_error = undefined;
  
      if(pJS.particles.shape.image.src != ''){
  
        if(type == 'svg'){
  
          var xhr = new XMLHttpRequest();
          xhr.open('GET', pJS.particles.shape.image.src);
          xhr.onreadystatechange = function (data) {
            if(xhr.readyState == 4){
              if(xhr.status == 200){
                // @ts-ignore
                pJS.tmp.source_svg = data.currentTarget.response;
                // @ts-ignore
                pJS.fn.vendors.checkBeforeDraw();
              }else{
                console.log('Error pJS - Image not found');
                // @ts-ignore
                pJS.tmp.img_error = true;
              }
            }
          }
          xhr.send();
  
        }else{
  
          var img = new Image();
          img.addEventListener('load', function(){
            // @ts-ignore
            pJS.tmp.img_obj = img;
            // @ts-ignore
            pJS.fn.vendors.checkBeforeDraw();
          });
          img.src = pJS.particles.shape.image.src;
  
        }
  
      }else{
        console.log('Error pJS - No image.src');
        // @ts-ignore
        pJS.tmp.img_error = true;
      }
  
    };
  
  
    // @ts-ignore
    pJS.fn.vendors.draw = function(){
  
      if(pJS.particles.shape.type == 'image'){
  
        // @ts-ignore
        if(pJS.tmp.img_type == 'svg'){
  
          // @ts-ignore
          if(pJS.tmp.count_svg >= pJS.particles.number.value){
            // @ts-ignore
            pJS.fn.particlesDraw();
            // @ts-ignore
            if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
            // @ts-ignore
            else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
          }else{
            //console.log('still loading...');
            // @ts-ignore
            if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
          }
  
        }else{
  
          // @ts-ignore
          if(pJS.tmp.img_obj != undefined){
            // @ts-ignore
            pJS.fn.particlesDraw();
            // @ts-ignore
            if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
            // @ts-ignore
            else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
          }else{
            // @ts-ignore
            if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
          }
  
        }
  
      }else{
        // @ts-ignore
        pJS.fn.particlesDraw();
        // @ts-ignore
        if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
        // @ts-ignore
        else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
      }
  
    };
  
  
    // @ts-ignore
    pJS.fn.vendors.checkBeforeDraw = function(){
  
      // if shape is image
      if(pJS.particles.shape.type == 'image'){
  
        // @ts-ignore
        if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){
          // @ts-ignore
          pJS.tmp.checkAnimFrame = requestAnimFrame(check);
        }else{
          //console.log('images loaded! cancel check');
          // @ts-ignore
          cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
          // @ts-ignore
          if(!pJS.tmp.img_error){
            // @ts-ignore
            pJS.fn.vendors.init();
            // @ts-ignore
            pJS.fn.vendors.draw();
          }
          
        }
  
      }else{
        // @ts-ignore
        pJS.fn.vendors.init();
        // @ts-ignore
        pJS.fn.vendors.draw();
      }
  
    };
  
  
    // @ts-ignore
    pJS.fn.vendors.init = function(){
  
      /* init canvas + particles */
      // @ts-ignore
      pJS.fn.retinaInit();
      // @ts-ignore
      pJS.fn.canvasInit();
      // @ts-ignore
      pJS.fn.canvasSize();
      // @ts-ignore
      pJS.fn.canvasPaint();
      // @ts-ignore
      pJS.fn.particlesCreate();
      // @ts-ignore
      pJS.fn.vendors.densityAutoParticles();
  
      /* particles.line_linked - convert hex colors to rgb */
      // @ts-ignore
      pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);
  
    };
  
  
    // @ts-ignore
    pJS.fn.vendors.start = function(){
  
      if(isInArray('image', pJS.particles.shape.type)){
        // @ts-ignore
        pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
        // @ts-ignore
        pJS.fn.vendors.loadImg(pJS.tmp.img_type);
      }else{
        // @ts-ignore
        pJS.fn.vendors.checkBeforeDraw();
      }
  
    };
  
  
  
  
    /* ---------- pJS - start ------------ */
  
  
    // @ts-ignore
    pJS.fn.vendors.eventsListeners();
  
    // @ts-ignore
    pJS.fn.vendors.start();
    
  
  
  };
  
  /* ---------- global functions - vendors ------------ */
  
  // @ts-ignore
  Object.deepExtend = function(destination, source) {
    for (var property in source) {
      if (source[property] && source[property].constructor &&
       source[property].constructor === Object) {
        destination[property] = destination[property] || {};
        arguments.callee(destination[property], source[property]);
      } else {
        destination[property] = source[property];
      }
    }
    return destination;
  };
  
  // @ts-ignore
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame ||
      // @ts-ignore
      window.webkitRequestAnimationFrame ||
      // @ts-ignore
      window.mozRequestAnimationFrame    ||
      // @ts-ignore
      window.oRequestAnimationFrame      ||
      // @ts-ignore
      window.msRequestAnimationFrame     ||
      function(callback){
        window.setTimeout(callback, 1000 / 60);
      };
  })();
  
  // @ts-ignore
  window.cancelRequestAnimFrame = ( function() {
    return window.cancelAnimationFrame         ||
      // @ts-ignore
      window.webkitCancelRequestAnimationFrame ||
      // @ts-ignore
      window.mozCancelRequestAnimationFrame    ||
      // @ts-ignore
      window.oCancelRequestAnimationFrame      ||
      // @ts-ignore
      window.msCancelRequestAnimationFrame     ||
      clearTimeout
  } )();
  
  // @ts-ignore
  function hexToRgb(hex){
    // By Tim Down - http://stackoverflow.com/a/5624139/3493650
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    // @ts-ignore
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
       return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  };
  
  // @ts-ignore
  function clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
  };
  
  // @ts-ignore
  function isInArray(value, array) {
    return array.indexOf(value) > -1;
  }
  
  
  /* ---------- particles.js functions - start ------------ */
  
  // @ts-ignore
  window.pJSDom = [];
  
  // @ts-ignore
  window.particlesJS = function(tag_id, params){
  
    //console.log(params);
  
    /* no string id? so it's object params, and set the id with default id */
    if(typeof(tag_id) != 'string'){
      params = tag_id;
      tag_id = 'particles-js';
    }
  
    /* no id? set the id to default id */
    if(!tag_id){
      tag_id = 'particles-js';
    }
  
    /* pJS elements */
    var pJS_tag = document.getElementById(tag_id),
        pJS_canvas_class = 'particles-js-canvas-el',
        // @ts-ignore
        exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);
  
    /* remove canvas if exists into the pJS target tag */
    if(exist_canvas.length){
      while(exist_canvas.length > 0){
        // @ts-ignore
        pJS_tag.removeChild(exist_canvas[0]);
      }
    }
  
    /* create canvas element */
    var canvas_el = document.createElement('canvas');
    canvas_el.className = pJS_canvas_class;
  
    /* set size canvas */
    canvas_el.style.width = "100%";
    canvas_el.style.height = "100%";
  
    /* append canvas */
    // @ts-ignore
    var canvas = document.getElementById(tag_id).appendChild(canvas_el);
  
    /* launch particle.js */
    if(canvas != null){
      // @ts-ignore
      pJSDom.push(new pJS(tag_id, params));
    }
  
  };
  
  // @ts-ignore
  window.particlesJS.load = function(tag_id, path_config_json, callback){
  
    /* load json config */
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path_config_json);
    xhr.onreadystatechange = function (data) {
      if(xhr.readyState == 4){
        if(xhr.status == 200){
          // @ts-ignore
          var params = JSON.parse(data.currentTarget.response);
          // @ts-ignore
          window.particlesJS(tag_id, params);
          if(callback) callback();
        }else{
          console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
          console.log('Error pJS - File config not found');
        }
      }
    };
    xhr.send();
  
};