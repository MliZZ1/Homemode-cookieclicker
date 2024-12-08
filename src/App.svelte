<script>
    let count = 0;       // Total count of clicks
    let clickPower = 1;  // Amount added per click
    let upgradesCost = 10; // Initial cost for the first upgrade
    let autoClickerUnlocked = false;
    let autoClickerCost = 50;
    let autoClickerCount = 0;
	  let autoClickerInterval;


    function buyUpgrade() {
      if (count >= upgradesCost) {
        count -= upgradesCost; // Deduct the cost
        clickPower *= 2;       // Double the click power
        upgradesCost *= 2;     // Double the cost for the next upgrade
      } else {
        alert("Brokie can't afford an upgrade");
      }
    }

    function buyAutoClicker() {
        if (count >= autoClickerCost) {
            count -= autoClickerCost;
            autoClickerCount++;
            autoClickerCost *= 2;
        } else {
            alert("Card declined, forgot password... really");
        }
    }

$: if (autoClickerCount > 0 && !autoClickerInterval) {
    autoClickerInterval = setInterval(() => {
      count += autoClickerCount; // Add clicks based on the number of auto-clickers
    }, 100);
  }

  // Clean up the interval when no auto-clickers are active
  $: if (autoClickerCount === 0 && autoClickerInterval) {
    clearInterval(autoClickerInterval);
    autoClickerInterval = null;
  }
  </script>
  
  <style>
    
    .container {
      display: flex;
      justify-content: center;
          flex-direction: column;
      align-items: center;
      height: 100vh;
          position: relative;
    }
    .main-button {
          font-size: 55px;
      padding: 15px 30px;
			background-color: black;
			border-radius: 25px;
			border: none;
      margin-bottom: 20px;
			cursor: pointer;
      }
		
    .upgrade-button {
		font-size: 33px;
    padding: 10px 20px;
    position: absolute;
    bottom: 20px;
    right: 50%;
    transform: translateX(50%);
    background-color: darkcyan;
    border: none;
    border-radius: 4px;
    cursor: pointer;

      }

      .auto-clicker {
    margin-top: 20px;
    font-size: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
		background-color: darkseagreen;
    cursor: pointer;
    
  }

	 .hidden {
    display: none;
  }
      
  </style>
  
 
<div class="container">
  <button class="main-button" on:click={() => count += clickPower}>
    {count}: clicks
  </button>
  <button class="upgrade-button" on:click={buyUpgrade}>
    Buy Upgrade (Cost: {upgradesCost} clicks)
  </button>
  <button class="auto-clicker {autoClickerUnlocked ? '' : 'hidden'}" on:click={buyAutoClicker}>
    Buy Auto-Clicker (Cost: {autoClickerCost}) ({autoClickerCount} active)
  </button>
  {#if count >= 50 || autoClickerUnlocked}
    {autoClickerUnlocked = true}
  {/if}
</div>
  