<script>
  import InputLetter from './lib/InputLetter.svelte';
  import Letter from './lib/Letter.svelte';
  import { word, notValidLetters, validLetters, attempts, wordString } from './variables';
  import {fly} from 'svelte/transition';

  let countries = [
    'venezuela',
    'mexico',
    'colombia',
    'canada',
    'panama',
    'italia',
  ]


  let fruits = [
    'manzana',
    'mandarina',
    'sandia',
    'banana',
    'pera',
    'papaya',
  ]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

  let inputWord;
  let visible=false;

  inputWord = '';

  function getWord(){
    let wordArray=inputWord.split('');
    word.set(wordArray);
    wordString.set(inputWord);
    visible = false;
  }

  function pickCountry(){
    inputWord = countries[getRandomInt(countries.length)];
    visible = false;  
    let wordArray=inputWord.split('');
    wordString.set(inputWord);
    word.set(wordArray);
  }

  function pickFruit(){
    inputWord = fruits[getRandomInt(fruits.length)];
    visible = false;  
    let wordArray=inputWord.split('');
    wordString.set(inputWord);
    word.set(wordArray);
  }

</script>

<main>
  <div class="wrap">
    {$validLetters}
    {#if $attempts > 10}
      <div class="courtain">
        Perdiste
      </div>
    {/if}
    {#if $validLetters.length > 0 }
      {#if $validLetters.length == $word.length}
        <div class="courtain won" style="background-image: url(/{$wordString}.png);">
          Ganaste.<br>
          La palabra era<br>
          {$wordString}
        </div>
      {/if}
    {/if}
  <div>
    {#if $notValidLetters.length > 0}
      <h2>Letras usadas:
        {#each $notValidLetters as notValidLetter}
          {#if notValidLetter != undefined}
              <span>{notValidLetter}</span>
          {/if}
        {/each}
    </h2>
    {/if}
  <div>
    {#if visible}
      <input type="text" bind:value={inputWord} on:change={getWord}>
    {/if}

    {#if !visible}
      <button on:click={pickCountry}>Elegir pais</button>
      <button on:click={pickFruit}>Elegir fruta</button>
    {/if}
  </div>

  <div>
    <InputLetter />
  </div>

  <div class="flex">
    {#each $word as letter, i }
      <Letter letter={letter} />
    {/each}
  </div>

  {#if $notValidLetters.length > 0}
  <div>
    <svg class="waves" transition:fly style="height: {15 * $attempts}vh ;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
    <defs>
    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g class="parallax">
    <use xlink:href="#gentle-wave" x="48" y="0" fill="#1877F2" />
    <use xlink:href="#gentle-wave" x="48" y="3" fill="#0076CE" />
    <use xlink:href="#gentle-wave" x="48" y="5" fill="#1E90FF" />
    <use xlink:href="#gentle-wave" x="48" y="7" fill="#0039a6" />
    </g>
    </svg>
    </div>  
    {/if}
  </div>
</main>

<style>
  main {
    height: 100vh;
  }

  .wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .flex {
    display: flex;
    position: relative;
    z-index: 2;
    max-width: 1280px;
    justify-content: center;
    margin: auto;
  }

  h2 {
    font-size: 2rem;
    position: relative;
    z-index: 2;
  }

  h2 > span {
    font-size: 3.5rem;
    border-right: 1px solid #000;
    padding: 0 1rem;
  }

  h2 > span:last-child {
    border-right: 0;
  }

  .courtain {
    width: 100vw;
    height: 100vh;
    top: 0;
    background-color: red;
    z-index: 9;
    left: 0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    font-size: 8rem;
    text-transform: uppercase;
    line-height: 1;
    background-size: cover;
    background-position: center center;
  }

  .courtain.won {
    background-color: blue;
  }

  .waves {
    position:absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height:15vh;
    min-height:100px;
    z-index: 0;
  }

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }

  .courtain {
    font-size: 3rem;
  }
}
</style>
