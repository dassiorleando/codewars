function alphabetPosition(text) {
    // Lower case of text
    text = text.toLowerCase();
    // All alphabet letters
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var positions = [];
  
    text.split('').filter(function(element) {
      var index = alphabet.indexOf(element); // Index of the element in the alphabet
      // We get rid of special characters while saving the existing position 
      if(index !== -1) return positions.push(index + 1);
    });
    
    return positions.join(' ');
  }