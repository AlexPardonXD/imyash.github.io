function moveButton() {
    var button = document.getElementById('no-btn');
    var maxX = window.innerWidth - button.clientWidth;
    var maxY = window.innerHeight - button.clientHeight;
  
    var x = Math.floor(Math.random() * maxX);
    var y = Math.floor(Math.random() * maxY);
  
    button.style.left = x + 'px';
    button.style.top = y + 'px';
  }
  
  function runAway(event) {
    var button = document.getElementById('no-btn');
    var cursorX = event.clientX;
    var cursorY = event.clientY;
  
    // Check if cursor is close to the button
    var buttonRect = button.getBoundingClientRect();
    var distance = Math.sqrt(
      Math.pow(cursorX - (buttonRect.left + buttonRect.width / 2), 2) +
      Math.pow(cursorY - (buttonRect.top + buttonRect.height / 2), 2)
    );
  
    // If close, move the button away
    if (distance < 100) {
      moveButton();
    }
  }
  
  function grantWish() {
    // Redirect to the new page with the gif and text
    window.location.href = "wish-granted.html";
  }
  