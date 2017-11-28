(function() {
    'use strict'

    angular.module('client.site')
        .controller('rightBoxController', RightBoxController)
    RightBoxController.$inject = ['$log', 'friendService']

    function RightBoxController($log, friendService) {
        let vm = this
        
        vm.faqs = null
        vm.friendsList = null

        init() 

        function init() {
            friendService.readAll().then(response => { $log.log(response);
                vm.friendsList = response })
            
                vm.faqs = {
                sound: "Adjusting the Sound Adjust various sound settings. Models with color audio system Use the selector knob to make and enter selections. 1. Press the Sound button. 2. Select a sound mode to change, and adjust it using the selector knob. 3. Press the Back button to exit the menu. Models with Display Audio Make and enter selections using the touchscreen. 1. From the audio screen, select MENU. 2. Select Sound. 3. Select the tabs to change the sound mode and adjust the setting. 4. Select OK when complete.",
                bluetooth: "Searching for Music Use the selector knob to search for tracks stored on the device. 1. From the audio screen, press the selector knob. 2. Select a category. 3. Select the track you want to play.",
                jumpStart: "Jump Starting Turn off the power to electric devices, such as audio and lights. Turn off the engine, then open the hood. 1. Connect the first jumper cable to your vehicle’s battery (+) terminal. 2. Connect the other end of the first jumper cable to the booster battery (+) terminal. Use a 12-volt booster battery only. 3. Connect the second jumper cable to the booster battery (-) terminal. 4. Connect the other end of the second jumper cable to the engine mounting bolt as shown. Do not connect this jumper cable to any other part. 5. If your vehicle is connected to another vehicle, start the assisting vehicle’s engine and increase its rpm slightly. 7. Attempt to start your vehicle’s engine. If it turns over slowly, make sure that the jumper cables have good metal-to-metal contact."

            }
        }
        $log.log(vm.friendsList)
    }
})();
