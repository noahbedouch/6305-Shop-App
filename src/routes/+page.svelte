<script>
    import { userData } from '../data';
    import { timecard, customItems, inventory, safety, teamName } from '../config';
    import { goto } from '$app/navigation';

    function goToLogin() {
        goto('./auth');
    }
    </script>
    
    {#if $userData.type !== ""}
    <div class="2xl:mx-96 xl:mx-70 lg:mx-48 md:mx-32 mx-4 flex flex-col">
        <h1 class="text-main font-sans md:text-7xl text-5xl text-center my-4">{teamName}</h1>
        <div class="grid md:grid-cols-2 grid-cols-1">
        {#if inventory && $userData.type == "member"}
          <a class="bg-main text-main-text md:text-2xl mx-10 my-5 md:py-10 py-4 rounded text-center hover:bg-accent hover:brightness-95 active:brightness-90" href="./rooms">Inventory</a>
        {:else if inventory}
          <a class="bg-main text-main-text md:text-2xl mx-10 my-5 md:py-10 py-4 rounded text-center hover:bg-accent hover:brightness-95 active:brightness-90" href="./rooms">Inventory</a>
        {/if}
        {#if safety && $userData.type == "member"}
          <a class="bg-main text-main-text md:text-2xl mx-10 my-5 md:py-10 py-4 rounded text-center hover:bg-accent hover:brightness-95 active:brightness-90" href="./safety/report">Safety Report</a>
        {:else if safety}
          <a class="bg-main text-main-text md:text-2xl mx-10 my-5 md:py-10 py-4 rounded text-center hover:bg-accent hover:brightness-95 active:brightness-90" href="./safety/menu">Safety Report</a>
        {/if}
        {#if timecard && $userData.type == "member"}
          <button class="bg-main text-main-text md:text-2xl mx-10 my-5 md:py-10 py-4 rounded hover:bg-accent hover:brightness-95 active:brightness-90">Check In</button>
        {:else if timecard}
        <a class="bg-main text-main-text md:text-2xl mx-10 my-5 md:py-10 py-4 rounded text-center hover:bg-accent hover:brightness-95 active:brightness-90" href="./rooms">Check In</a>
        {/if}
        {#each customItems as item}
          <a class="bg-main text-main-text md:text-2xl mx-10 my-5 md:py-10 py-4 rounded text-center hover:bg-accent hover:brightness-95 active:brightness-90" href="{item.link}" target="_blank">{item.name}</a>
        {/each}
      </div>
    </div>
    {:else}
    <div class="2xl:mx-96 xl:mx-70 lg:mx-48 md:mx-32 mx-4 flex flex-col">
        <h1 class="text-main font-sans md:text-7xl text-5xl text-center my-4">Loading...</h1>
    </div>
    {/if}