var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition;

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(content);
    speak();
}

function speak() {
    var synth = window.speachSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    var UtterThis = new speechSynthesisUtterance(speak_data);
    synth.speak(UtterThis);
    Webcam.attach(camera);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90,
});
camera = document.getElementById("camera");
