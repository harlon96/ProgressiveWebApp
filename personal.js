// You can code JavaScript here

function speak() {
    var voice = new SpeechSynthesisUtterance();
    voice.text = "This app is still under construction.";
    speechSynthesis.speak(voice);
}
