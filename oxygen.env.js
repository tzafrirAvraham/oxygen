module.exports = {

    emulator: {


        capabilities: {
            "deviceName": "Pixel_2_API_30",
            "platformVersion": "11",
            "platformName": "Android",
            "appPackage": "il.co.pazgas.meters",
            "appActivity": "com.mobile.MainActivity",
            "automationName": "UIAutomator2",
            "autoGrantPermissions": true
            }



    },

    real_device:{


        capabilities: {
           "deviceName": "Galaxy_S21",
           "platformVersion": "13",
           "platformName": "Android",
           "appPackage": "com.sec.android.app.popupcalculator",
           "appActivity": "com.sec.android.app.popupcalculator.Calculator",
           "automationName": "UIAutomator2",
           "autoGrantPermissions": true
           }


    },
}