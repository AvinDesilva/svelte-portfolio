<script>
  import { changeTheme } from '../themeStore.ts'; // Adjust the path as necessary
</script>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: var(--primary-color);
  }

  .title {
    font-size: 2.5em;
    color: var(--secondary-color);
    margin-left: 5rem;
  }

  .dice-icon {
    font-size: 1.5em;
    cursor: pointer;
    margin-right: 5rem;
    background: none;
    border: none;
    padding: 0;
  }

    .dice-icon img {
    width: 3em;
    height: 3em;
  }
</style>

<div class="header">
  <div class="title">Bored Ape's Ledger</div>
    <button class="dice-icon" on:click={changeTheme}>
    <img src="dice-gamble-gambling-svgrepo-com.svg" alt="Change Theme">
  </button>
</div>
