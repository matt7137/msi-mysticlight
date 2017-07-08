 $(function() {
         var nowColor = '#ff0000', //預設顏色
         //圖形變數--用來控制opacity
         $gaming_pro_light = $('#gaming-pro-light-group path'),
         $outer_right_upper_light = $('#outer-right-upper-light-group path'),
         $outer_right_lower_light = $('#outer-right-lower-light-group path'),
         $msi_a_light = $('#msi-a-light-group path'),
         $msi_b_light = $('#msi-b-light-group'),
         $audio_boost_light = $('#audio-boost-light-group path'),
         $center_light = $('#center-light-group path'),
         $x299_top_light = $('#x299-top-light-group path'),
         $all_light_path = $('#gaming-pro-light-group path, #outer-right-upper-light-group path, #outer-right-lower-light-group path, #msi-a-light-group path, #msi-b-light-group, #audio-boost-light-group path, #center-light-group path, #x299-top-light-group path'),
         $level_one = $('#outer-right-upper-light-path-3, #x299-top-light-group path'),
         $level_two = $('#outer-right-upper-light-path-2, #gaming-pro-light-svg-4, #gaming-pro-light-svg-5'),
         $level_three = $('#outer-right-upper-light-path-1, #gaming-pro-light-svg-1, #gaming-pro-light-svg-2, #gaming-pro-light-svg-3'),
         $level_four = $('#outer-right-lower-light-path-5, #center-light-group path'),
         $level_five = $('#outer-right-lower-light-path-4, #audio-boost-light-svg-3'),
         $level_six = $('#outer-right-lower-light-path-3, #msi-a-light-group path, #audio-boost-light-svg-2'),
         $level_seven = $('#outer-right-lower-light-path-2, #msi-b-light-group, #audio-boost-light-svg-1'),
         $level_eight = $('#outer-right-lower-light-path-1'),
         //漸層變數--用來控制color
         $gaming_pro_light_gradient = $('#gaming-pro-light-group .gaming-pro-light-gradient stop'),
         $outer_right_upper_light_gradient = $('#outer-right-upper-light-group .outer-right-upper-light-gradient stop'),
         $outer_right_lower_light_gradient = $('#outer-right-lower-light-group .outer-right-lower-light-gradient stop'),
         $msi_a_light_group_gradient = $('#msi-a-light-group .msi-a-light-gradient stop'),
         $msi_b_light_group_gradient = $('#msi-b-light-group_2 stop'),
         $audio_boost_light_group_gradient = $('#audio-boost-light-group .audio-boost-light-gradient stop'),
         $center_light_group_gradient = $('#center-light-group .center-light-gradient stop'),
         $x299_top_light_group_gradient = $('#x299-top-light-group .x299-top-light-gradient stop'),
         $outer_upper_light_1 = $('.outer-right-upper-light-gradient:nth-of-type(1) stop'),
         $outer_upper_light_2 = $('.outer-right-upper-light-gradient:nth-of-type(2) stop'),
         $outer_upper_light_3 = $('.outer-right-upper-light-gradient:nth-of-type(3) stop'),
         $outer_lower_light_1 = $('.outer-right-lower-light-gradient:nth-of-type(1) stop'),
         $outer_lower_light_2 = $('.outer-right-lower-light-gradient:nth-of-type(2) stop'),
         $outer_lower_light_3 = $('.outer-right-lower-light-gradient:nth-of-type(3) stop'),
         $outer_lower_light_4 = $('.outer-right-lower-light-gradient:nth-of-type(4) stop'),
         $outer_lower_light_5 = $('.outer-right-lower-light-gradient:nth-of-type(5) stop'),
         $all_light_gradient = $('.gaming-pro-light-gradient stop, .outer-right-upper-light-gradient stop, .outer-right-lower-light-gradient stop, .msi-a-light-gradient stop, #msi-b-light-group_2 stop, .audio-boost-light-gradient stop, .center-light-gradient stop, .x299-top-light-gradient stop'),
         $all_light_gradient_part = [$gaming_pro_light_gradient, $outer_upper_light_1, $outer_upper_light_2, $outer_upper_light_3, $outer_lower_light_1, $outer_lower_light_2, $outer_lower_light_3, $outer_lower_light_4, $outer_lower_light_5, $msi_a_light_group_gradient, $msi_b_light_group_gradient, $audio_boost_light_group_gradient, $center_light_group_gradient, $x299_top_light_group_gradient],
         $effect_buttons = $('#light-effect ul li'),
         effect = 'No-animation',
         stack_timer_open = false,
         random_timer_open = false,
         wave_open = false,
         meteor_open = false,
         rainbow_open = false,
         x, //timer
         y, //timer
         speed = 2250,
         doLightningEffect = false,
         doBreathingEffect = false,
         doFlashingEffect = false,
         doFlashing2Effect = false,
         doStackEffect = false,
         doPOPEffect = false,
         doMovieEffect = false,
         doMeteorEffect = false;

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

         function resetLights() {
           try{
             $all_light_path.velocity('stop', true)
                 .velocity({ opacity: 1 }, { duration: 1 });
             $all_light_gradient.velocity('stop', true)
                 .velocity({ stopColor: nowColor }, { duration: 1 });
           }
             catch(e){

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
                             resetTimer();
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
                                 doBreathingEffect = function(stop = false) {
                                   if(stop){
                                     return;
                                   }
                                     $all_light_path.velocity({ opacity: 0 }, { delay: 0, duration: 1300 })
                                         .velocity({ opacity: 1 }, { delay: 0, duration: 1300, complete: doBreathingEffect });
                                 };
                                 doBreathingEffect();
                                 break;
                             case 'Flashing':
                                 colorPickerShow();
                                 doFlashingEffect = function(stop = false) {
                                   if(stop){
                                     return;
                                   }
                                     $all_light_path.velocity({ opacity: 1 }, { duration: 200, delay: 500 })
                                         .velocity({ opacity: 0 }, { duration: 300, delay: 100, complete: doFlashingEffect });
                                 };
                                 doFlashingEffect();
                                 break;
                             case 'Double-Flashing':
                                 colorPickerShow();
                                 doFlashing2Effect = function(stop = false) {
                                   if(stop){
                                     return;
                                   }
                                     $all_light_path.velocity({ opacity: 1 }, { duration: 200, delay: 400 })
                                         .velocity({ opacity: 0 }, { duration: 130, delay: 50 })
                                         .velocity({ opacity: 1 }, { duration: 130, delay: 50 })
                                         .velocity({ opacity: 0 }, { duration: 130, delay: 50, complete: doFlashing2Effect });
                                 };
                                 doFlashing2Effect();
                                 break;
                             case 'Random':
                                 random_timer_open = true;
                                 var effects = ['Breathing', 'Flashing', 'Double-Flashing'];
                                 var randomEffect = function(stop = false) {
                                     var effect = effects[Math.floor(Math.random() * effects.length)];
                                     //$all_light_path.velocity('stop', true).velocity({ opacity: 0 }, { duration: 1 });
                                     console.log(effect + 'random');
                                     $().mysticlight.setEffect(effect);
                                 }
                                 randomEffect();
                                 y = setInterval(randomEffect, 5000);
                                 break;
                             case 'Stack':
                                 colorPickerShow();
                                 stack_timer_open = true;
                                 $all_light_path.velocity({ opacity: 0 });

                                 function doStackEffect(stop = false) {
                                   if(stop){
                                     return;
                                   }
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
                                 }; //doStack END
                                 doStackEffect();
                                 break;
                             case 'Wave-Marquee':
                                 wave_open = true;
                                 colorPickerShow();
                                 $all_light_path.velocity({ opacity: 0 });
                                 function force() {
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
                                  function doWaveMarqueeEffect(stop = false) {
                                     var t = 100;
                                     force();

                                   }
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
                                 var t = 95;
                                 var i = 13;
                                 var opacity_control = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
                                 function doMeteorEffect(stop = false) {
                                   if(stop){
                                     return;
                                   }
                                     $msi_a_light.delay(0).velocity({ opacity: 1 }, { duration: 250 }).velocity({ opacity: opacity_control[0] }, { duration: 500 });
                                     $msi_b_light.delay(0).velocity({ opacity: 1 }, { duration: 250 }).velocity({ opacity: opacity_control[1] }, { duration: 500 });
                                     $('#outer-right-lower-light-path-1').delay(t * 1).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[2] }, { duration: 500 });
                                     $('#outer-right-lower-light-path-2').delay(t * 2).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[3] }, { duration: 500 });
                                     $('#outer-right-lower-light-path-3').delay(t * 3).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[4] }, { duration: 500 });
                                     $('#outer-right-lower-light-path-4').delay(t * 4).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[5] }, { duration: 500 });
                                     $('#outer-right-lower-light-path-5').delay(t * 5).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[6] }, { duration: 500 });
                                     $('#outer-right-upper-light-path-1').delay(t * 6).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[7] }, { duration: 500 });
                                     $('#outer-right-upper-light-path-2').delay(t * 7).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[8] }, { duration: 500 });
                                     $('#outer-right-upper-light-path-3').delay(t * 8).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[9] }, { duration: 500 });
                                     $x299_top_light.delay(800).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[10] }, { duration: 500 });
                                     $gaming_pro_light.delay(830).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[11] }, { duration: 500 });
                                     $audio_boost_light.delay(900).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[12] }, { duration: 500 });
                                     $center_light.delay(900).velocity({ opacity: 1 }, { duration: 500 }).velocity({ opacity: opacity_control[13] }, { duration: 500, complete: doMeteorEffect });
                                     i = i - 1
                                     opacity_control[i] = 1;
                                     console.log(opacity_control[i]);
                                     if (i < 0) {
                                         i = 13;
                                         $all_light_path.velocity({ opacity: 0 });
                                         opacity_control = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
                                     }

                                 };
                                 doMeteorEffect();
                                 break;
                             case 'Lightning':
                                 colorPickerHide();
                                 $all_light_gradient.velocity({ stopColor: '#ff0000' });
                                 doLightningEffect = function(stop = false) {
                                     if(stop){
                                       return;
                                     }
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
                                 };
                                 doLightningEffect();
                                 break;
                             case 'Rainbow':

                                 rainbow_open = true;
                                 setRainbow();
                                 //console.log($msi_a_light_group_gradient.hasClass('aaaaaaaaaaaaa'));
                                 //console.log($center_light_group_gradient);
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
                                 var level = [$level_one, $level_two, $level_three, $level_four, $level_five, $level_six, $level_seven, $level_eight]
                                 $all_light_path.velocity({ opacity: 0 });
                                 var mysticlight_light_back_lights = level.length,
                                     index_old = mysticlight_light_back_lights - 1;
                                 $all_light_path.velocity({ opacity: 0 });
                                 doPOPEffect = function(stop = false) {
                                   if(stop){
                                     return;
                                   }
                                     var index_new = Math.floor(Math.random() * mysticlight_light_back_lights),
                                         duration = Math.floor(Math.random() * 10),
                                         counter = 0;
                                     if (index_new > index_old) {
                                         for (var i = index_old; i <= index_new; i++) {
                                             if (i < index_new) {
                                                 level[i].velocity({ opacity: 0 }, { duration: duration, delay: counter * 75 });
                                             } else {
                                                 level[i].velocity({ opacity: 0 }, { duration: duration, delay: counter * 75, complete: doPOPEffect });
                                             }
                                             counter++;
                                         }
                                     } else {
                                         for (var i = index_old; i >= index_new; i--) {
                                             if (i > index_new) {
                                                 level[i].velocity({ opacity: 1 }, { duration: duration, delay: counter * 75 });
                                             } else {
                                                 level[i].velocity({ opacity: 1 }, { duration: duration, delay: counter * 75, complete: doPOPEffect });
                                             }
                                             counter++;
                                         }
                                     }
                                     index_old = index_new;
                                 };
                                 doPOPEffect();
                                 break;
                             case 'RAP':
                                 colorPickerHide();
                                 var color = ['#cc00ff', '#0000ff', '#ff0000'];
                                 var random_color = color[Math.floor(Math.random() * 3)];
                                 var delay = Math.floor(Math.random() * 300);
                                 var duration = Math.floor(Math.random() * 500);
                                 var randomColor = function(stop = false) {
                                     random_color = color[Math.floor(Math.random() * 3)];
                                     delay = Math.floor(Math.random() * 300);
                                     duration = Math.floor(Math.random() * 500);
                                     $all_light_gradient.velocity({ stopColor: random_color }, { duration: duration, delay: delay, complete: randomColor });
                                     doRapEffect();
                                 };
                                 randomColor();
                                 function doRapEffect(stop = false) {
                                     var i = Math.floor(Math.random() * $all_light_gradient_part.length),
                                         ii = Math.floor(Math.random() * $all_light_gradient_part.length);
                                     var delay1 = Math.floor(Math.random() * 90),
                                         delay2 = Math.floor(Math.random() * 200),
                                         delay3 = Math.floor(Math.random() * 300);
                                     $all_light_gradient_part[i].velocity({ stopColor: '#ffffff' }, { duration: 0, delay: delay2 }).velocity({ stopColor: random_color }, { duration: 1, delay: delay1, complete: doRapEffect });
                                     $all_light_gradient_part[ii].velocity({ stopColor: '#ffffff' }, { duration: 0, delay: delay3 }).velocity({ stopColor: random_color }, { duration: 1, delay: delay1, complete: doRapEffect });
                                 };
                                 break;
                             case 'JAZZ':
                                 var doJazzEffect = function(stop = false) {
                                     var op = Math.random();
                                     var op2 = Math.random();
                                     var delay = Math.floor(Math.random() * 500),
                                         delay2 = Math.floor(Math.random() * 500),
                                         duration = Math.floor(Math.random() * 900),
                                         duration2 = Math.floor(Math.random() * 900);
                                     $all_light_path.velocity({ opacity: op }, { duration: duration, delay: delay })
                                         .velocity({ opacity: op2 }, { duration: duration2, delay: delay2, complete: doJazzEffect });
                                 };
                                 doJazzEffect();
                                 break;
                             case 'Play':
                                 colorPickerHide();
                                 var color = ['#cc00ff', '#0000ff', '#ff0000'];
                                 var random_color = color[Math.floor(Math.random() * 3)];
                                 var delay = Math.floor(Math.random() * 300);
                                 var duration = Math.floor(Math.random() * 500);
                                 var doPlayEffect = function(stop = false) {
                                     random_color = color[Math.floor(Math.random() * 3)];
                                     delay = Math.floor(Math.random() * 300);
                                     duration = Math.floor(Math.random() * 500);
                                     $all_light_gradient.velocity({ stopColor: random_color }, { duration: duration, delay: delay, complete: doPlayEffect });
                                 };
                                 doPlayEffect();
                                 break;
                             case 'Movie':
                                 colorPickerShow();
                                 var level = [$level_one, $level_two, $level_three, $level_four, $level_five, $level_six, $level_seven, $level_eight]
                                 $all_light_path.velocity({ opacity: 0 });
                                 var mysticlight_light_back_lights = level.length,
                                     index_old = mysticlight_light_back_lights - 1;
                                 $all_light_path.velocity({ opacity: 0 });
                                 doMovieEffect = function(stop = false) {
                                   if(stop){
                                     return;
                                   }
                                     var index_new = Math.floor(Math.random() * mysticlight_light_back_lights),
                                         duration = Math.floor(Math.random() * 10),
                                         counter = 0;
                                     if (index_new > index_old) {
                                         for (var i = index_old; i <= index_new; i++) {
                                             if (i < index_new) {
                                                 level[i].velocity({ opacity: 0 }, { duration: duration, delay: counter * 75 });
                                             } else {
                                                 level[i].velocity({ opacity: 0 }, { duration: duration, delay: counter * 75, complete: doMovieEffect });
                                             }
                                             counter++;
                                         }
                                     } else {
                                         for (var i = index_old; i >= index_new; i--) {
                                             if (i > index_new) {
                                                 level[i].velocity({ opacity: 1 }, { duration: duration, delay: counter * 75 });
                                             } else {
                                                 level[i].velocity({ opacity: 1 }, { duration: duration, delay: counter * 75, complete: doMovieEffect });
                                             }
                                             counter++;
                                         }
                                     }
                                     index_old = index_new;
                                 };
                                 doMovieEffect();
                                 break;
                             case 'Off':
                                 colorPickerHide();
                                 try{
                                   $all_light_path.velocity('stop', true).velocity({ opacity: 0 });
                                   $all_light_gradient.velocity('stop', true);
                                 }
                                 catch(e){

                                 }
                                 break;
                         } //switch END
                         function colorPickerHide() { $('#colorpicker').stop().velocity({ visibility: "hidden" }) };
                         function colorPickerShow() { $('#colorpicker').stop().velocity({ display: "block" }) };
                         function setRainbow() {
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
                         }
                     }
                 }
             }); //extendEnd
     }); //JQEND
 $(function() {
     $().mysticlight.init();
 })
