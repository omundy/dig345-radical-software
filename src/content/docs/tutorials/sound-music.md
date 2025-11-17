---
title: Sound & Music
description: Create sound and music with code
layout: default
# draft: true
lastUpdated: 2025-11-14
# sidebar:
#   order: 3
#   label: Create sound and music with code
---



This introduction to audio in the browser covers the fundamentals of Tone.js and Strudel libraries for creating dynamic music.

- [HTML5 audio](#html5-audio)
- [Tone.js](#tonejs)
- [strudel](#strudel)





## HTML5 audio

The HTML `<audio>` element simplays plays pre-recorded audio files within a web page. The following will display controls to play an audio source.


<audio controls>
  <source src="/dig345-radical-software/sounds/gong_1.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>





## Tone.js

[Tone.js](https://tonejs.github.io/) is a Web Audio framework for creating interactive music in the browser.

First, import tone.js in a web page...

```html
<script src="http://unpkg.com/tone"></script>
```

Then, you can create a synth to play tones. <button class="tonejs1" style="float:right">Play</button> 

```js
// create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();
// play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");
```


This example will play three notes in succession. <button class="tonejs2" style="float:right">Play</button>

```js
const synth = new Tone.Synth().toDestination();
const now = Tone.now();                             // save current time
synth.triggerAttackRelease("C4", "8n", now);        // play now
synth.triggerAttackRelease("E4", "8n", now + 0.5);  // play after 500 ms
synth.triggerAttackRelease("G4", "8n", now + 1);    // play after 1 s
```


Tone.js can create oscillators and change the frequency of signals in real time. <button class="tonejs3" style="float:right">Play</button>

```js
const osc = new Tone.Oscillator().toDestination();
osc.frequency.value = "C4";       // start at "C4"
osc.frequency.rampTo("C2", 2);    // ramp to "C2" over 2 seconds
osc.start().stop("+3");           // start the oscillator for 2 seconds
```

<script src="http://unpkg.com/tone"></script>
<script>
  document.querySelector(".tonejs1").addEventListener("click", ()=>{
    // create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();
    // play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");
  })
  document.querySelector(".tonejs2").addEventListener("click", ()=>{
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    synth.triggerAttackRelease("C4", "8n", now);
    synth.triggerAttackRelease("E4", "8n", now + 0.5);
    synth.triggerAttackRelease("G4", "8n", now + 1);
  });
  document.querySelector(".tonejs3").addEventListener("click", ()=>{
    const osc = new Tone.Oscillator().toDestination();
    // start at "C4"
    osc.frequency.value = "C4";
    // ramp to "C2" over 2 seconds
    osc.frequency.rampTo("C2", 2);
    // start the oscillator for 2 seconds
    osc.start().stop("+3");
  });
</script>  

👉 Explore the [Tone.js introduction](https://tonejs.github.io/) to see more examples. (:05)




## Strudel 

- Strudel is a live coding platform that lets you write expressive dynamic music in the browser. 
- Strudel is a JavaScript port of [tidalcycles](https://tidalcycles.org/), a popular live coding language for music. Both are free/open source software.
- Click play on embedded examples or press the REPL button to open them in the interactive [Strudel REPL](https://strudel.cc), then continue on for a tutorial.




<!-- 
Embed reference
https://strudel.cc/technical-manual/project-start/ 
-->
<style>
  iframe { margin: 1rem 0; width: 100%; height: 200px; }
</style>
<script src="https://unpkg.com/@strudel/embed@latest"></script>




<strudel-repl>
<!--
setcps(1)
n("<0 1 2 3 4>*8").scale('G4 minor')
  .s("gm_lead_6_voice")
  .clip(sine.range(.2,.8).slow(8))
  .jux(rev)
  .room(2)
  .sometimes(add(note("12")))
  .lpf(perlin.range(200,20000).slow(4))
  // @version 1.0
-->
</strudel-repl>



<strudel-repl>
<!--
// "coastline" @by eddyflux
// @version 1.0
samples('github:eddyflux/crate')
setcps(.75)
let chords = chord("<Bbm9 Fm9>/4").dict('ireal')
stack(
  stack( // DRUMS
    s("bd").struct("<[x*<1 2> [~@3 x]] x>"),
    s("~ [rim, sd:<2 3>]").room("<0 .2>"),
    n("[0 <1 3>]*<2!3 4>").s("hh"),
    s("rd:<1!3 2>*2").mask("<0 0 1 1>/16").gain(.5)
  ).bank('crate')
  .mask("<[0 1] 1 1 1>/16".early(.5))
  , // CHORDS
  chords.offset(-1).voicing().s("gm_epiano1:1")
  .phaser(4).room(.5)
  , // MELODY
  n("<0!3 1*2>").set(chords).mode("root:g2")
  .voicing().s("gm_acoustic_bass"),
  chords.n("[0 <4 3 <2 5>>*2](<3 5>,8)")
  .anchor("D5").voicing()
  .segment(4).clip(rand.range(.4,.8))
  .room(.75).shape(.3).delay(.25)
  .fm(sine.range(3,8).slow(8))
  .lpf(sine.range(500,1000).slow(8)).lpq(5)
  .rarely(ply("2")).chunk(4, fast(2))
  .gain(perlin.range(.6, .9))
  .mask("<0 1 1 0>/16")
)
.late("[0 .01]*4").late("[0 .01]*2").size(4)
-->
</strudel-repl>



## 👉 Getting started with Strudel

You don't have to know much about music (trust me!) to start using Studel:

1. Click play below. This plays the `casio` sound in a continuous loop.
1. Within the quotes, add a `space` and another `casio`. Press `ctl+enter` each time you update. 
1. Some sounds have different samples. Add `:1` after the second `casio` to play a different sample in the sound.
1. Change your sounds to `"casio insect casio:1 metal"`


<strudel-repl>
<!--
sound("casio")
-->
</strudel-repl>

<details>
<summary>Outcome</summary>

<strudel-repl>
<!--
sound("casio insect casio:1 metal")
-->
</strudel-repl>

</details>



## 👉 Strudel drum machine


1. Many music software use *bpm* (beats per minute), [Strudel](https://strudel.cc/understand/cycles/) (like [Tidal](https://tidalcycles.org/docs/reference/cycles/)) uses *cycles* to set music tempo. By default a cycle plays 30 times per minute (every 2 seconds or `.5` times per second). Press play below and you will hear a *bass drum* (kick) playing at 30 bpm (1 beat per cycle).
1. A way to increase the tempo is by adding beats per cycle (bps). Change the code below to `"bd sd bd rim"` ([*kick*, *snare*, *kick*, and *rim*](https://strudel.cc/learn/samples/#default-samples)) and press `ctl+enter` to change to the tempo to 120 bpm (30 cycles/minute * 4 beats).
1. You can play multiple sounds at once by wrapping the phrase in square brackets `[]` and using a comma in between tracks. Update your sound to look like this: `"[bd sd bd rim, hh*8]"` and update. You will hear the the original sound as well as a high hat playing twice as fast as before.
1. The other method to change the tempo is to update the speed the cycle runs. An intuitive way to do this is to use the intended bpm divided by the perceived beats per second. If you add `setcpm(120/4)` to the top of the code you will notice no change, because the cycle is already 30 and you haven't changed the beats. Change change the code to `setcpm(90/4)` and you will hear the beat at 90 bpm in 4/4 music rhythm (a.k.a. "common time").

<strudel-repl>
<!--
sound("bd")
-->
</strudel-repl>

<details>
<summary>Outcome</summary>

<strudel-repl>
<!--
setcpm(90/4)
sound("[bd sd bd rim, hh*8]")
-->
</strudel-repl>

</details>





## More Strudel samples

<strudel-repl>
<!--
note("c e g b g e")
.fm(4)
.fmh("<1 2 1.5 1.61>")
._scope()
-->
</strudel-repl>

In addition to the [sampling](https://strudel.cc/learn/samples/) engine and [MIDI control](https://strudel.cc/learn/input-output/), strudel comes with a [synthesizer](https://strudel.cc/learn/synths/) to create sounds on the fly.





<strudel-repl>
<!--
samples('github:yaxu/clean-breaks')
s("amen/4").fit().chop(32)
-->
</strudel-repl>

You can also [load and cut samples](https://strudel.cc/recipes/recipes/) from the web.




<strudel-repl>
<!--
enableMotion()
// Create a simple melody
$:n("0 1 3 5")
.scale("C:major")
// Use tilt (gravity) to control filter
.lpf(gravityY.range(200, 2000)) // tilt forward/back for filter cutoff
// Use rotation to control effects
.room(rotZ.range(0, 0.8)) // rotate device for reverb amount
.gain(oriX.range(0.2, 0.8)) // tilt left/right for volume
.sound("sawtooth")
-->
</strudel-repl>

Run this one in your browser on your phone to control it with [device motion](https://strudel.cc/learn/devicemotion/).




## 👉 Continue learning

1. Strudel has an [excellent tutorial](https://strudel.cc/workshop/getting-started/) that introduces several fundamentals of the language and making music in general. 
1. Explore works by others using Strudel
   - [DJ Dave](https://www.instagram.com/dj_dave____/reels/)
   - Check out the [Strudel showcase](https://strudel.cc/intro/showcase/)



## Related works and tools

- [Critical Web Design Index #sound](https://criticalwebdesign.github.io/index/#sound)
- Ableton's [Learning Music](https://learningmusic.ableton.com/) and [Learning Synths](https://learningsynths.ableton.com/)
- [websynths.com](https://www.websynths.com/)
- [Acid Machine](https://errozero.co.uk/acid-machine/)
- [Pure Data](https://puredata.info/) (see: Miller Puckette - [Theory and Techniques of Electronic Music](https://msp.ucsd.edu/techniques.htm))
- [tonematrix.audiotool.com](https://tonematrix.audiotool.com/)
- [Touch Designer](https://derivative.ca/)




