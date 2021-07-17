// Place in iife
(function ()
{
  // Get reference for ul
  var $list = $("ul");
  // Get reference for input form
  var $newItemInput = $("#newItemForm");
  // Get reference for button to add new item
  var $newItemButton = $("#newItem");

  // Function to add new item to span element
  function updateCounter()
  {
    // Gets the numver of items in the list
    var items = $("li[class!=complete]").length;
    // Updates the counter
    $("#numItems").text(items);
  }
  // Call function
  updateCounter();

  // Show button when page is first loaded
  $newItemButton.show();
  // Hide form when page is first loaded
  $newItemInput.hide();
  // This event listener shows the form when user clicks on button
  $("#showForm").on("click", function()
  {
    // Hide the button
    $newItemButton.hide();
    // Show the form
    $newItemInput.show();
  });

  // This event listener executes when the user submits the item they want
  $newItemInput.on("submit", function(e)
  {
    // Prevents the page from loading
    e.preventDefault();
    // Gets the value of the text
    var text = $("input:text").val();
    // Adds item to the list
    $list.append("<li>" + text + "</li>");
    // Empties the text input
    $("input:text").val("");
    // Calls updateCounter() when a user submits new item
    updateCounter();
  });

  /*
    This event listener gets executed when user clicks on the list. Uses event
    Delegation
  */
  $list.on("click", "li", function(e)
  {
    // Caches element
    var $this = $(this);

      // Animates current element
      $this.animate(
        {
          // Sets opacity to 0
          opacity: 0.0,
          // Create padding
          paddingLeft: "+=180"
          // Animates for 500 milliseconds and call anonymous function
        }, 500, "swing", function()
        {
          // Removes current element
          this.remove();
          // Updates counter
          updateCounter();
        });
  });
}());
