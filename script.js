function newItem(){

  //javascript
  //1. Adding a new item to the list of items: 
     
     let inputValue = $( '#input' ).val();
     let li = $( '<li></li>' ).append(inputValue);
  
     if (inputValue === '') {
      alert("You must write something!");
    } else {
      $( '#list' ).prepend(li);
    }
  
  //2. Crossing out an item from the list of items:
    
    li.on( 'dblclick', function crossOut() {
      li.toggleClass( 'strike' )});
  
  //3(i). Adding the delete button "X": 
  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    
    let delItem = function deleteListItem () {
      li.addClass( 'delete' )
    }
    li.append( $( '<crossOutButton></crossOutButton>' ).append(document.createTextNode("X")).on ( 'click', delItem));
     //li.append(crossOutButton.on( 'click', delItem));

     // 4. Reordering the items: 
     $( '#list' ).sortable();
  
  }
    
    
     /*
    // jQuery Code
    //1. Adding a new item to the list:
    
      let li = $('<li></li>');
      let inputValue = $('#input').val();
      li.append(inputValue);
    
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li);
      }
    //2. Crossing an item out:
      function crossOut() {
            li.toggleClass("strike");
        }
    
        li.on("dblclick", function crossOut() {
            li.toggleClass("strike");
        });
    //3. Adding a delete button
      let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);
    
    //   crossOutButton.on("click", deleteListItem);
    //   function deleteListItem(){
    // 		li.addClass("delete")
    // 	}
       $('#list').sortable();
    */