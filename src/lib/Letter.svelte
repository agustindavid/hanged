<script>
    import { validLetters } from './../variables';

    export let letter;
    let auxArray = $validLetters;
    console.log(auxArray);

</script>

<div>
    <span>
        {#if $validLetters.indexOf(letter) != -1}
            {letter}
        {/if}            

    </span>
</div>

<style>
    div {
        margin: 1rem auto;
        position: relative;
        z-index: 2;
    }

    span {
        font-size: 4rem;
        border: 0;
        border-bottom: 2px solid #fff;
        width: 4rem;
        text-align: center;
        padding: 0 1rem;
        display: block;
        line-height: 1;
        height: 4rem;
    }

    @media screen and (max-width: 767px) {
        span {
            font-size: 1rem;
            border: 0;
            border-bottom: 2px solid #fff;
            width: auto;
            text-align: center;
            padding: 0 1rem;
            display: block;
            line-height: 1;
            height: auto;
            min-height: 2rem;
        }
    }
</style>