 $(function() {
         var nowColor = '#ff0000'; //default color
         //圖形變數--用來控制opacity
         var $gaming_pro_light = $('#gaming-pro-light-group path');
         var $outer_right_upper_light = $('#outer-right-upper-light-group path');
         var $outer_right_lower_light = $('#outer-right-lower-light-group path');
         var $msi_a_light = $('#msi-a-light-group path');
         var $msi_b_light = $('#msi-b-light-group');
         var $audio_boost_light = $('#audio-boost-light-group path');
         var $center_light = $('#center-light-group path');
         var $x299_top_light = $('#x299-top-light-group path');
         var $all_light_path = $('#gaming-pro-light-group path, #outer-right-upper-light-group path, #outer-right-lower-light-group path, #msi-a-light-group path, #msi-b-light-group, #audio-boost-light-group path, #center-light-group path, #x299-top-light-group path');
         var $level_one = $('#outer-right-upper-light-path-3, #x299-top-light-group path');
         var $level_two = $('#outer-right-upper-light-path-2, #gaming-pro-light-svg-4, #gaming-pro-light-svg-5');
         var $level_three = $('#outer-right-upper-light-path-1, #gaming-pro-light-svg-1, #gaming-pro-light-svg-2, #gaming-pro-light-svg-3');
         var $level_four = $('#outer-right-lower-light-path-5, #center-light-group path');
         var $level_five = $('#outer-right-lower-light-path-4, #audio-boost-light-svg-3');
         var $level_six = $('#outer-right-lower-light-path-3, #msi-a-light-group path, #audio-boost-light-svg-2');
         var $level_seven = $('#outer-right-lower-light-path-2, #msi-b-light-group, #audio-boost-light-svg-1');
         var $level_eight = $('#outer-right-lower-light-path-1');
         //漸層變數--用來控制color
         var $gaming_pro_light_gradient = $('#gaming-pro-light-group .gaming-pro-light-gradient stop');
         var $outer_right_upper_light_gradient = $('#outer-right-upper-light-group .outer-right-upper-light-gradient stop');
         var $outer_right_lower_light_gradient = $('#outer-right-lower-light-group .outer-right-lower-light-gradient stop');
         var $msi_a_light_group_gradient = $('#msi-a-light-group .msi-a-light-gradient stop');
         var $msi_b_light_group_gradient = $('#msi-b-light-group_2 stop');
         var $audio_boost_light_group_gradient = $('#audio-boost-light-group .audio-boost-light-gradient stop');
         var $center_light_group_gradient = $('#center-light-group .center-light-gradient stop');
         var $x299_top_light_group_gradient = $('#x299-top-light-group .x299-top-light-gradient stop');
         var $outer_upper_light_1 = $('.outer-right-upper-light-gradient:nth-of-type(1) stop');
         var $outer_upper_light_2 = $('.outer-right-upper-light-gradient:nth-of-type(2) stop');
         var $outer_upper_light_3 = $('.outer-right-upper-light-gradient:nth-of-type(3) stop');
         var $outer_lower_light_1 = $('.outer-right-lower-light-gradient:nth-of-type(1) stop');
         var $outer_lower_light_2 = $('.outer-right-lower-light-gradient:nth-of-type(2) stop');
         var $outer_lower_light_3 = $('.outer-right-lower-light-gradient:nth-of-type(3) stop');
         var $outer_lower_light_4 = $('.outer-right-lower-light-gradient:nth-of-type(4) stop');
         var $outer_lower_light_5 = $('.outer-right-lower-light-gradient:nth-of-type(5) stop');
         var $all_light_gradient = $('.gaming-pro-light-gradient stop, .outer-right-upper-light-gradient stop, .outer-right-lower-light-gradient stop, .msi-a-light-gradient stop, #msi-b-light-group_2 stop, .audio-boost-light-gradient stop, .center-light-gradient stop, .x299-top-light-gradient stop');
         var $all_light_gradient_part = [$gaming_pro_light_gradient, $outer_upper_light_1, $outer_upper_light_2, $outer_upper_light_3, $outer_lower_light_1, $outer_lower_light_2, $outer_lower_light_3, $outer_lower_light_4, $outer_lower_light_5, $msi_a_light_group_gradient, $msi_b_light_group_gradient, $audio_boost_light_group_gradient, $center_light_group_gradient, $x299_top_light_group_gradient];
         var $effect_buttons = $('#light-effect ul li');
         var effect = 'No-animation';
         var stack_timer_open = false;
         var random_timer_open = false;
         var wave_open = false;
         var meteor_open = false;
         var rainbow_open = false;
         var x; //timer
         var y; //timer
         var z; //timer
         var speed = 2250;

         var demo = new iro.ColorWheel("#colorpicker", {
             color: "#ff0000", //初始顏色
         });
         // Create a new function to use for the watch callback
         // When it is called, it will be passed the color object documented above
         function watchFunction(color) {
             // For this example, we'll just log the color's HEX value to the developer console
             // console.log(color.hexString);
             nowColor = color.hexString;
             // console.log(nowColor);
             $all_light_gradient.velocity({ stopColor: nowColor });
         }; //watchFunction END



         function resetLights() {
           try{
             $all_light_path.velocity('stop', true)
                 .velocity({ opacity: 1 }, { duration: 1 });
             $all_light_gradient.velocity('stop', true)
                 .velocity({ stopColor: nowColor }, { duration: 1 });
           }
           catch(e){
             console.log(e);
           }

         }

         function removeRainbow() {
             $msi_a_light_group_gradient.removeClass('light_rainbow_1');
             $msi_b_light_group_gradient.removeClass('light_rainbow_2');
             $outer_lower_light_5.removeClass('light_rainbow_3');
             $outer_lower_light_4.removeClass('light_rainbow_4');
             $outer_lower_light_3.removeClass('light_rainbow_5');
             $outer_lower_light_2.removeClass('light_rainbow_6');
             $outer_lower_light_1.removeClass('light_rainbow_7');
             $outer_upper_light_3.removeClass('light_rainbow_8');
             $outer_upper_light_2.removeClass('light_rainbow_9');
             $outer_upper_light_1.removeClass('light_rainbow_10');
             $x299_top_light_group_gradient.removeClass('light_rainbow_11');
             $gaming_pro_light_gradient.removeClass('light_rainbow_12');
             $audio_boost_light_group_gradient.removeClass('light_rainbow_13');
             $center_light_group_gradient.removeClass('light_rainbow_14');
         }

         function resetTimer() {
             if (stack_timer_open == true) {
                 clearTimeout(x);
                 console.log('clearStack');
                 stack_timer_open = false;
             } else if (random_timer_open == true) {
                 clearInterval(y);
                 console.log('clearRandom');
                 random_timer_open == false;
                 //$all_light_path.velocity('stop', true).velocity({ opacity: 1 }, { duration: 1 });
             } else if (rainbow_open == true) {
                 console.log('clearrainbow');
                 removeRainbow();
                 rainbow_open = false;
                 resetLights();
             } else if (wave_open == true) {
                 console.log('ClearWave');
                 resetLights();
             } else if (meteor_open == true) {
                 console.log('Clearmeteor');
                 //$all_light_path.velocity('stop', true).velocity({ opacity: 1 }, { duration: 1 });
                 meteor_open = false;
                 resetLights();
             } else {
                 resetLights();
             };
         }
         /*---Effect---*/
         var doBreathingEffect = function(destory) {
           if (destory <= 0) { // terminal case
              return 1;
            } else { // block to execute
              $all_light_path.velocity({ opacity: 0 }, { delay: 0, duration: 1300 })
                  .velocity({ opacity: 1 }, { delay: 0, duration: 1300, complete: doBreathingEffect });
              //return (destory * factorial(destory - 1));
            }


         };
         var doFlashingEffect = function(destory) {
           if(destory <= 0){
             return;
           }
           else{
             $all_light_path.velocity({ opacity: 1 }, { duration: 200, delay: 500 })
                 .velocity({ opacity: 0 }, { duration: 300, delay: 100, complete: doFlashingEffect });
           }
         };
         var doFlashing2Effect = function(destory) {
           if(destory <= 0){
             return;
           }
           else{
             $all_light_path.velocity({ opacity: 1 }, { duration: 200, delay: 400 })
                 .velocity({ opacity: 0 }, { duration: 130, delay: 50 })
                 .velocity({ opacity: 1 }, { duration: 130, delay: 50 })
                 .velocity({ opacity: 0 }, { duration: 130, delay: 50, complete: doFlashing2Effect });
           }
         };
         var effects_array = ['Breathing', 'Flashing', 'Double-Flashing'];
         var randomEffect = function(destory) {
           if(destory <= 0){
             return;
           }
           else{
             var effect = effects_array[Math.floor(Math.random() * effects_array.length)];
             //$all_light_path.velocity('stop', true).velocity({ opacity: 0 }, { duration: 1 });
             console.log(effect + 'random');
             $().mysticlight.setEffect(effect);
             //randomEffect();
           }
         }
         var doStackEffect = function (destory) {
             if(destory <= 0){
               return;
             }
             else{
               var t = 95;
               $msi_a_light.delay(0).velocity({ opacity: 1 }, { duration: 250 }).velocity({ opacity: 0 }, { duration: 500 });
               $msi_b_light.delay(0).velocity({ opacity: 1 }, { duration: 250 }).velocity({ opacity: 0 }, { duration: 500 });
               $('#outer-right-lower-light-path-1').delay(t * 1).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
               $('#outer-right-lower-light-path-2').delay(t * 2).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
               $('#outer-right-lower-light-path-3').delay(t * 3).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
               $('#outer-right-lower-light-path-4').delay(t * 4).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
               $('#outer-right-lower-light-path-5').delay(t * 5).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
               $('#outer-right-upper-light-path-1').delay(t * 6).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
               $('#outer-right-upper-light-path-2').delay(t * 7).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
               $('#outer-right-upper-light-path-3').delay(t * 8).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
               $x299_top_light.delay(800).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
               $gaming_pro_light.delay(900).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
               $audio_boost_light.delay(1000).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
               $center_light.delay(1000).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
               x = setTimeout(doStackEffect, speed);
               //doStackEffect();
             }
         }; //doStack END
         function force() {
             var t = 100;
             $msi_b_light.delay(t * 0).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $msi_a_light.delay(t * 1).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $('#outer-right-lower-light-path-1').delay(t * 1).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $('#outer-right-lower-light-path-2').delay(t * 2).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $('#outer-right-lower-light-path-3').delay(t * 3).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $('#outer-right-lower-light-path-4').delay(t * 4).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $('#outer-right-lower-light-path-5').delay(t * 5).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $('#outer-right-upper-light-path-1').delay(t * 6).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $('#outer-right-upper-light-path-2').delay(t * 7).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $('#outer-right-upper-light-path-3').delay(t * 8).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $x299_top_light.delay(t * 9).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $gaming_pro_light.delay(t * 10).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $center_light.delay(t * 11).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $audio_boost_light.delay(t * 12).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500, complete: back });
         }

         function back() {
             var t = 100;
             $audio_boost_light.delay(t * 0).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $center_light.delay(t * 1).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $gaming_pro_light.delay(t * 2).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $x299_top_light.delay(t * 3).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $('#outer-right-upper-light-path-3').delay(t * 4).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $('#outer-right-upper-light-path-2').delay(t * 5).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $('#outer-right-upper-light-path-1').delay(t * 6).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $('#outer-right-lower-light-path-5').delay(t * 7).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $('#outer-right-lower-light-path-4').delay(t * 8).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $('#outer-right-lower-light-path-3').delay(t * 9).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $('#outer-right-lower-light-path-2').delay(t * 10).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $('#outer-right-lower-light-path-1').delay(t * 11).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $msi_a_light.delay(t * 12).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500 });
             $msi_b_light.delay(t * 13).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: 0 }, { duration: 500, complete: doWaveMarqueeEffect });
         }
         var doWaveMarqueeEffect = function (destory) {
             if(destory <= 0){
               return;
             }
             else{
               force();
             }
           }

          var Meteor_t = 95;
          var Meteor_i = 13;
          var opacity_control = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
          var doMeteorEffect = function (destory) {
            if(destory < 0){
              return;
            }
            else{
              $msi_a_light.delay(0).velocity({ opacity: 1 }, { duration: 250 }).velocity({ opacity: opacity_control[0] }, { duration: 500 });
              $msi_b_light.delay(0).velocity({ opacity: 1 }, { duration: 250 }).velocity({ opacity: opacity_control[1] }, { duration: 500 });
              $('#outer-right-lower-light-path-1').delay(Meteor_t * 1).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[2] }, { duration: 500 });
              $('#outer-right-lower-light-path-2').delay(Meteor_t * 2).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[3] }, { duration: 500 });
              $('#outer-right-lower-light-path-3').delay(Meteor_t * 3).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[4] }, { duration: 500 });
              $('#outer-right-lower-light-path-4').delay(Meteor_t * 4).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[5] }, { duration: 500 });
              $('#outer-right-lower-light-path-5').delay(Meteor_t * 5).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[6] }, { duration: 500 });
              $('#outer-right-upper-light-path-1').delay(Meteor_t * 6).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[7] }, { duration: 500 });
              $('#outer-right-upper-light-path-2').delay(Meteor_t * 7).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[8] }, { duration: 500 });
              $('#outer-right-upper-light-path-3').delay(Meteor_t * 8).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[9] }, { duration: 500 });
              $x299_top_light.delay(800).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[10] }, { duration: 500 });
              $gaming_pro_light.delay(830).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[11] }, { duration: 500 });
              $audio_boost_light.delay(900).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[12] }, { duration: 500 });
              $center_light.delay(900).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[13] }, { duration: 500, complete: doMeteorEffect });
              Meteor_i = Meteor_i - 1
              opacity_control[Meteor_i] = 1;
              console.log(opacity_control[Meteor_i]);
              if (Meteor_i < 0) {
                  Meteor_i = 13;
                  $all_light_path.velocity({ opacity: 0 });
                  opacity_control = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
              }
            }
          };
          var doLightningEffect = function(destory) {
            if(destory < 0){
              return;
            }
            else{
              var i = Math.floor(Math.random() * $all_light_gradient_part.length),
                  ii = Math.floor(Math.random() * $all_light_gradient_part.length),
                  iii = Math.floor(Math.random() * $all_light_gradient_part.length),
                  delay = Math.floor(Math.random() * 50),
                  delay2 = Math.floor(Math.random() * 200),
                  delay3 = Math.floor(Math.random() * 100),
                  delay4 = Math.floor(Math.random() * 300);
              $all_light_gradient_part[i].velocity({ stopColor: '#ffffff' }, { duration: 0, delay: delay2 })
                  .velocity({ stopColor: '#ff0000' }, { duration: 1, delay: delay, complete: doLightningEffect });
              $all_light_gradient_part[ii].velocity({ stopColor: '#ffffff' }, { duration: 0, delay: delay3 })
                  .velocity({ stopColor: '#ff0000' }, { duration: 1, delay: delay, complete: doLightningEffect });
              $all_light_gradient_part[iii].velocity({ stopColor: '#ffffff' }, { duration: 0, delay: delay4 })
                  .velocity({ stopColor: '#ff0000' }, { duration: 1, delay: delay, complete: doLightningEffect });
            }
          };
          var level_array = [$level_one, $level_two, $level_three, $level_four, $level_five, $level_six, $level_seven, $level_eight];
          var mysticlight_light_back_lights = level_array.length,
              index_old = mysticlight_light_back_lights - 1;
          var doPOPEffect = function(destory) {
            if(destory < 0){
              return;
            }
            else{
              var index_new = Math.floor(Math.random() * mysticlight_light_back_lights),
                  duration = Math.floor(Math.random() * 10),
                  counter = 0;
              if (index_new > index_old) {
                  for (var i = index_old; i <= index_new; i++) {
                      if (i < index_new) {
                          level_array[i].velocity({ opacity: 0 }, { duration: duration, delay: counter * 75 });
                      } else {
                          level_array[i].velocity({ opacity: 0 }, { duration: duration, delay: counter * 75, complete: doPOPEffect });
                      }
                      counter++;
                  }
              } else {
                  for (var i = index_old; i >= index_new; i--) {
                      if (i > index_new) {
                          level_array[i].velocity({ opacity: 1 }, { duration: duration, delay: counter * 75 });
                      } else {
                          level_array[i].velocity({ opacity: 1 }, { duration: duration, delay: counter * 75, complete: doPOPEffect });
                      }
                      counter++;
                  }
              }
              index_old = index_new;
            }
          };
          var color_array = ['#cc00ff', '#0000ff', '#ff0000'];
          var randomColor = function(destory) {
            if(destory < 0){
              return;
            }
            else{
              var random_color = color_array[Math.floor(Math.random() * 3)];
              var delay = Math.floor(Math.random() * 300);
              var duration = Math.floor(Math.random() * 500);
              $all_light_gradient.velocity({ stopColor: random_color }, { duration: duration, delay: delay, complete: randomColor });
            }
          };
          var doRapEffect = function (destory) {
            var random_color = color_array[Math.floor(Math.random() * 3)];
            if(destory < 0){
              return;
            }
            else{
              var i = Math.floor(Math.random() * $all_light_gradient_part.length),
                  ii = Math.floor(Math.random() * $all_light_gradient_part.length);
              var delay1 = Math.floor(Math.random() * 90),
                  delay2 = Math.floor(Math.random() * 200),
                  delay3 = Math.floor(Math.random() * 300);
              $all_light_gradient_part[i].velocity({ stopColor: '#ffffff' }, { duration: 0, delay: delay2 }).velocity({ stopColor: random_color }, { duration: 1, delay: delay1, complete: doRapEffect });
              $all_light_gradient_part[ii].velocity({ stopColor: '#ffffff' }, { duration: 0, delay: delay3 }).velocity({ stopColor: random_color }, { duration: 1, delay: delay1, complete: doRapEffect });
            }
          };
          var doJazzEffect = function(destory) {
            if(destory < 0){
              return;
            }
            else{
              var op = Math.random();
              var op2 = Math.random();
              var delay = Math.floor(Math.random() * 500),
                  delay2 = Math.floor(Math.random() * 500),
                  duration = Math.floor(Math.random() * 900),
                  duration2 = Math.floor(Math.random() * 900);
              $all_light_path.velocity({ opacity: op }, { duration: duration, delay: delay })
                  .velocity({ opacity: op2 }, { duration: duration2, delay: delay2, complete: doJazzEffect });
            }
          };
          var doPlayEffect = function(destory) {
            if(destory < 0){
              return;
            }
            else{
              random_color = color_array[Math.floor(Math.random() * 3)];
              delay = Math.floor(Math.random() * 300);
              duration = Math.floor(Math.random() * 500);
              $all_light_gradient.velocity({ stopColor: random_color }, { duration: duration, delay: delay, complete: doPlayEffect });
            }
          };
          var doMovieEffect = function(destory) {
            if(destory < 0){
              return;
            }
            else{
              var index_new = Math.floor(Math.random() * mysticlight_light_back_lights),
                  duration = Math.floor(Math.random() * 10),
                  counter = 0;
              if (index_new > index_old) {
                  for (var i = index_old; i <= index_new; i++) {
                      if (i < index_new) {
                          level_array[i].velocity({ opacity: 0 }, { duration: duration, delay: counter * 75 });
                      } else {
                          level_array[i].velocity({ opacity: 0 }, { duration: duration, delay: counter * 75, complete: doMovieEffect });
                      }
                      counter++;
                  }
              } else {
                  for (var i = index_old; i >= index_new; i--) {
                      if (i > index_new) {
                          level_array[i].velocity({ opacity: 1 }, { duration: duration, delay: counter * 75 });
                      } else {
                          level_array[i].velocity({ opacity: 1 }, { duration: duration, delay: counter * 75, complete: doMovieEffect });
                      }
                      counter++;
                  }
              }
              index_old = index_new;
            }
          };
         /*---end of effect ---*/

         // Watch the color picker using the callback function we just created
         demo.watch(watchFunction);
         $.fn.extend({
                 mysticlight: {
                     init: function(effect) {
                         // Add effect button listener
                         $effect_buttons.on('click', function() {

                             var $this = $(this);
                             $effect_buttons.removeClass('active');
                             $this.addClass('active');
                             $().mysticlight.setEffect('Off');
                             resetTimer();
                             doBreathingEffect(-1);
                             doFlashingEffect(-1);
                             doFlashing2Effect(-1);
                             randomEffect(-1);
                             doWaveMarqueeEffect(-1);
                             doMeteorEffect(-1);
                             doLightningEffect(-1);
                             doPOPEffect(-1);
                             randomColor(-1);
                             doRapEffect(-1);
                             doJazzEffect(-1);
                             doPlayEffect(-1);
                             doMovieEffect(-1 );
                             effect = $(this).data('effect');
                             $().mysticlight.setEffect(effect);
                             return this;
                         });

                     },
                     setEffect: function(effect) {
                         console.log(effect);
                         switch (effect) {
                             case 'No-animation':
                                 colorPickerShow();
                                 $all_light_path.velocity('finish');
                                 $all_light_path.velocity('stop', true).velocity({ opacity: 1 });
                                 $all_light_gradient.stop().velocity({ stopColor: nowColor });
                                 console.log(nowColor)
                                 break;
                             case 'Breathing':
                                 doBreathingEffect();
                                 break;
                             case 'Flashing':
                                 colorPickerShow();
                                 doFlashingEffect();
                                 break;
                             case 'Double-Flashing':
                                 colorPickerShow();
                                 doFlashing2Effect();
                                 break;
                             case 'Random':
                                 random_timer_open = true;
                                 randomEffect();
                                 y = setInterval(randomEffect, 5000);
                                 break;
                             case 'Stack':
                                 colorPickerShow();
                                 stack_timer_open = true;
                                 $all_light_path.velocity({ opacity: 0 });
                                 doStackEffect();
                                 break;
                             case 'Wave-Marquee':
                                 wave_open = true;
                                 colorPickerShow();
                                 $all_light_path.velocity({ opacity: 0 });
                                 doWaveMarqueeEffect();
                                 break;
                             case 'Cpu_tem':
                                 colorPickerHide();
                                 $all_light_gradient.velocity({ stopColor: '#000' });
                                 $outer_right_upper_light_gradient.velocity({ stopColor: '#0000ff' }, { duration: 500 });
                                 $outer_right_lower_light_gradient.velocity({ stopColor: '#0000ff' }, { duration: 500 });
                                 $msi_a_light_group_gradient.velocity({ stopColor: '#0000ff' }, { duration: 500 });
                                 $msi_b_light_group_gradient.velocity({ stopColor: '#0000ff' }, { duration: 500 });
                                 break;
                             case 'Meteor':
                                 meteor_open = true;
                                 colorPickerShow();
                                 $all_light_path.velocity({ opacity: 0 });
                                 doMeteorEffect();
                                 break;
                             case 'Lightning':
                                 colorPickerHide();
                                 $all_light_gradient.velocity({ stopColor: '#ff0000' });
                                 doLightningEffect();
                                 break;
                             case 'Rainbow':
                                 colorPickerHide();
                                 rainbow_open = true;
                                 $msi_a_light_group_gradient.addClass('light_rainbow_1');
                                 $msi_b_light_group_gradient.addClass('light_rainbow_2');
                                 $outer_lower_light_5.addClass('light_rainbow_3');
                                 $outer_lower_light_4.addClass('light_rainbow_4');
                                 $outer_lower_light_3.addClass('light_rainbow_5');
                                 $outer_lower_light_2.addClass('light_rainbow_6');
                                 $outer_lower_light_1.addClass('light_rainbow_7');
                                 $outer_upper_light_3.addClass('light_rainbow_8');
                                 $outer_upper_light_2.addClass('light_rainbow_9');
                                 $outer_upper_light_1.addClass('light_rainbow_10');
                                 $x299_top_light_group_gradient.addClass('light_rainbow_11');
                                 $gaming_pro_light_gradient.addClass('light_rainbow_12');
                                 $audio_boost_light_group_gradient.addClass('light_rainbow_13');
                                 $center_light_group_gradient.addClass('light_rainbow_14');
                                 break;
                             case 'POP':
                                 colorPickerHide();
                                 $gaming_pro_light_gradient.velocity({ stopColor: '#ff0000' });
                                 $outer_right_upper_light_gradient.velocity({ stopColor: '#ff0000' });
                                 $x299_top_light_group_gradient.velocity({ stopColor: '#ff0000' });
                                 $msi_a_light_group_gradient.velocity({ stopColor: '#cc00ff' });
                                 $outer_lower_light_1.velocity({ stopColor: '#cc00ff' });
                                 $outer_lower_light_2.velocity({ stopColor: '#cc00ff' });
                                 $outer_lower_light_3.velocity({ stopColor: '#cc00ff' });
                                 $('#audio-boost-light-svg-3 stop').velocity({ stopColor: '#cc00ff' });
                                 $('#audio-boost-light-svg-2 stop').velocity({ stopColor: '#cc00ff' });
                                 $outer_lower_light_4.velocity({ stopColor: '#0066ff' });
                                 $outer_lower_light_5.velocity({ stopColor: '#0066ff' });
                                 $('#audio-boost-light-svg-1 stop').velocity({ stopColor: '#0066ff' });
                                 $msi_b_light_group_gradient.velocity({ stopColor: '#0066ff' });
                                 $all_light_path.velocity({ opacity: 0 });
                                 $all_light_path.velocity({ opacity: 0 });
                                 doPOPEffect();
                                 break;
                             case 'RAP':
                                 colorPickerHide();
                                 randomColor();
                                 break;
                             case 'JAZZ':
                                 doJazzEffect();
                                 break;
                             case 'Play':
                                 colorPickerHide();
                                 var color = ['#cc00ff', '#0000ff', '#ff0000'];
                                 var random_color = color[Math.floor(Math.random() * 3)];
                                 var delay = Math.floor(Math.random() * 300);
                                 var duration = Math.floor(Math.random() * 500);
                                 doPlayEffect();
                                 break;
                             case 'Movie':
                                 colorPickerShow();
                                 var level = [$level_one, $level_two, $level_three, $level_four, $level_five, $level_six, $level_seven, $level_eight]
                                 $all_light_path.velocity({ opacity: 0 });
                                 var mysticlight_light_back_lights = level.length,
                                     index_old = mysticlight_light_back_lights - 1;
                                 $all_light_path.velocity({ opacity: 0 });
                                 doMovieEffect();
                                 break;
                             case 'Off':
                                 colorPickerHide();
                                 //$all_light_path.velocity('stop', true).velocity({ opacity: 0 });
                                 //$all_light_gradient.velocity('stop', true);
                                 break;
                         } //switch END
                         function colorPickerHide() { $('#colorpicker').stop().velocity({ visibility: "hidden" }) };
                         function colorPickerShow() { $('#colorpicker').stop().velocity({ display: "block" }) };
                     }
                 }
             }) //extendEnd
     }) //JQEND
 $(function() {
     $().mysticlight.init();
 })
