<script>
    let count = 0;
    let clickPower = 1;
    let upgradesCost = 10;
    let autoClickerUnlocked = false;
    let autoClickerCost = 100;
    let autoClickerCount = 0;
  
    let autoClicker2Unlocked = false;
    let autoClicker2Cost = 1000;
    let autoClicker2Count = 0;
  
    // Function to buy the standard auto-clicker
    function buyAutoClicker() {
      if (count >= autoClickerCost) {
        count -= autoClickerCost;
        autoClickerCount++;
        autoClickerCost *= 2; // Double the cost
        autoClickerUnlocked = true;
      }
    }

    // Function to buy upgrades
    function buyUpgrade() {
      if (count >= upgradesCost) {
        count -= upgradesCost; // Deduct the cost
        clickPower *= 2;       // Double the click power
        upgradesCost *= 2;     // Double the cost for the next upgrade
      } else {
        alert("Not enough clicks to buy the upgrade!");
      }
    }
  
    // Function to buy the second auto-clicker
    function buyAutoClicker2() {
      if (count >= autoClicker2Cost) {
        count -= autoClicker2Cost;
        autoClicker2Count++;
        autoClicker2Cost *= 3; // Triple the cost
        autoClicker2Unlocked = true;
      }
    }
  
    // Reactive declarations for unlocking auto-clickers
    $: autoClickerUnlocked = count >= 50 || autoClickerUnlocked;
    $: autoClicker2Unlocked = count >= 500 || autoClicker2Unlocked;
  
    // Increment clicks smoothly
    function updateAutoClickers() {
      // First auto-clicker (10 clicks per second)
      if (autoClickerCount > 0) {
        count += autoClickerCount * 10; // Add 10 clicks per second per auto-clicker
      }
      
      // Second auto-clicker (faster, more powerful)
      if (autoClicker2Count > 0) {
        count += autoClicker2Count * 100; // Add 100 clicks per second per auto-clicker
      }
      
      count = Math.floor(count); // Ensure count remains an integer
    }
  
    // Set up interval to update auto-clickers
    setInterval(updateAutoClickers, 1000); // Update every 1 second
</script>

<div class="container">
  <button class="main-button" on:click={() => count += clickPower}>
    {Math.floor(count)}: clicks
  </button>
  <button class="upgrade-button" on:click={buyUpgrade}>
    Buy Upgrade (Cost: {upgradesCost} clicks)
  </button>
  <button
    class="auto-clicker {autoClickerUnlocked ? '' : 'hidden'}"
    on:click={buyAutoClicker}
  >
    Buy Auto-Clicker (Cost: {autoClickerCost}) ({autoClickerCount} active)
</button>
<button
    class="auto-clicker2 {autoClicker2Unlocked ? '' : 'hidden'}"
    on:click={buyAutoClicker2}>Buy Better-Autoclicker (Cost: {autoClicker2Cost}) ({autoClicker2Count} active)
</button>
</div>
  
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
            color: aliceblue;
			background-color: darkslategrey;
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
    border-radius: 8px;
		background-color: darkseagreen;
    cursor: pointer;
      }

    .auto-clicker2 {
        margin-top: 20px;
        font-size: 20px;
        padding: 10px 15px;
        border: none;
        border-radius: 8;
        background-color: indigo;
        cursor: pointer;
    }
    
  

	 .hidden {
    display: none;
  }
     
    
    
  </style>
  

