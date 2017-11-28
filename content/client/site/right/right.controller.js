(function () {

"use strict"

angular.module('client.site', ['ui-router'])

angular.module('client.site').controller('carManual', CarManual)

CarManual.$inject[]

function CarManual () {
    var vm = this
    vm.faqs = null

    init()

    function init () {
        vm.faqs = {
            sound: "Adjusting the Sound Adjust various sound settings. Models with color audio system Use the selector knob to make and enter selections. 1. Press the Sound button. 2. Select a sound mode to change, and adjust it using the selector knob. 3. Press the Back button to exit the menu. Models with Display Audio Make and enter selections using the touchscreen. 1. From the audio screen, select MENU. 2. Select Sound. 3. Select the tabs to change the sound mode and adjust the setting. 4. Select OK when complete.",
            bluetooth: "Searching for Music Use the selector knob to search for tracks stored on the device. 1. From the audio screen, press the selector knob. 2. Select a category. 3. Select the track you want to play."
        }
    }
}
})();