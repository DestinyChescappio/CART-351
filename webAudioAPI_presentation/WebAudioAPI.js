//INTRO: 
//using fetch API in javascript to bring in audio file and work with it here using audio web API
//once audio file is fetched = process it as a node (and do other cool stuff; changing playback speed, filters, reverb,etc.)

const ctx = new AudioContext(); //create audio context first and assign to variable 
let playSound =null;
let isPlaying = false;
let myAudio; //declare an audio variable 
const biquadFilter = ctx.createBiquadFilter();


fetch("barkingDog.mp3") //fetch and pass it through the audio file we are using 
.then(data => data.arrayBuffer())//since fetch returns a promise object, we can call .then (take data from mp3 file and put it in a buffer)
.then(arrayBuffer => ctx.decodeAudioData(arrayBuffer)) //decode data that's now in the buffer
.then(decodedAudio => {
    myAudio = decodedAudio;
});


//in short: fetch audio file, get it into a buffer, then decode it
//now define a function called playback 
function playback() {
    const playSound = ctx.createBufferSource() //playSound is a buffer source 
    playSound.buffer = myAudio; //assign audio variable as buffer property 
    playSound.connect(ctx.destination); //connect playSound to audio context destination 
    playSound.start(ctx.currentTime);
}

function applyFilter () {
    //const audioCtx = new AudioContext();

    let biquadExample = document.querySelector("#biquadExample");
    let biquadMediaSource = ctx.createMediaElementSource(biquadExample);

//set up the different audio nodes we will use for the app
//const analyser = audioCtx.createAnalyser();
//const distortion = audioCtx.createWaveShaper();
//const gainNode = audioCtx.createGain();

//const convolver = audioCtx.createConvolver(); //declaring the nodes

// connect the nodes together

// source = audioCtx.createMediaStreamSource(stream);
// source.connect(analyser);
// analyser.connect(distortion);
// distortion.connect(biquadFilter);
// biquadFilter.connect(convolver);
// convolver.connect(gainNode);
// gainNode.connect(audioCtx.destination);
biquadMediaSource.connect(biquadFilter);
biquadFilter.connect(ctx.destination);



// Manipulate the Biquad filter

biquadFilter.type = "lowshelf";
//biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = 25;
biquadFilter.detune.value = 100;

}

function changeFreq(e){
    console.log(e.target.value)
    biquadFilter.frequency.value = parseInt(e.target.value);

}

//loop node
function enableLoop(){
    console.log("loop");

    if(isPlaying === false){
        isPlaying = true;
        playSound = ctx.createBufferSource() //playsound is buffer

        playSound.buffer = myAudio; //assign audio variable as buffer property 
        playSound.connect(ctx.destination); //connect playSound to audio context destination 
        playSound.start(ctx.currentTime);
        }
        //loop true;
        playSound.loop = true;
    }

function disableLoop(){
    console.log("no-loop");
    
    //loop true;
    playSound.loop = false;
    isPlaying =false;
}

//volume node
function getVolume() {
    alert(myAudio.volume);
}

function setHalfVolume() {
    myAudio.volume = 0.2;
}

function setFullVolume() {
    myAudio.volume = 1.0;
}






//audio is fetched, now it is an audioNode and now we can process it to do cool fx 

//RESOURCES:
//https://freesound.org/people/livvy0221/sounds/467258/

// https://www.youtube.com/watch?v=3NgVlAscdcA