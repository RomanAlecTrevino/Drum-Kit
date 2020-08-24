// Get Keys to toggle class
const key = document.querySelectorAll('.key');

function removeTransition(event) {
    // Guard Clause
    if(event.propertyName !== 'transform') return;
    console.log(event.propertyName);
    
    this.classList.remove('playing');
}

const playAudio = (event) => {
    // Set audioKey equal to the keyCode of the key pressed if it is associated a sound
    const audioKey = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    // Add Guard Clause to ensure that a valid key was pressed or stop the function
    if(!audioKey) return;

    // .currentTime returns the start time of the audio upon activation 
    // This sets the audio's time to 0:00 when called so that it can be repeat called quickly
    audioKey.currentTime = 0;
    // .play() plays the associated audio
    audioKey.play();
    key.classList.toggle('playing');
};

// Get Event Listeners on Keypress
window.addEventListener('keydown', playAudio);

key.forEach(key => key.addEventListener('transitionend', removeTransition));

