<script>
    import { word, notValidLetters, currentLetter, validLetters, attempts } from './../variables';

    let inputLetter;
    let valid;
  
    function checkLetter() {
        if($word.indexOf(inputLetter) != -1) {
            valid = true;
            if($validLetters.indexOf(inputLetter) == -1) {
                for(let i=0; i < $word.length; i++){
                    if($word[i]==inputLetter){
                        validLetters.update(contents => [...contents, inputLetter]);
                    }
                }
            }
        } else {
            valid = false;
            if ($notValidLetters.indexOf(inputLetter) === -1) {
                notValidLetters.update(contents => [...contents, inputLetter]);
                if(inputLetter != '') {
                    attempts.update((n => n + 1));
                }
            }
        }

        inputLetter='';
    }



</script>

<div>
    <input type="text" bind:value={inputLetter} on:keyup={checkLetter}>
</div>

<style>
    div {
        margin: 1rem;
        position: relative;
        z-index: 2;
    }

    input {
        font-size: 6rem;
        width: 6rem;
        text-align: center;
        padding: 0 1rem;
        display: block;
        line-height: 1;
        height: 6rem;
        border: 0;
        margin: auto;
        box-shadow: 14px 13px 0px -1px rgb(0 0 0 / 30%);
    }
</style>