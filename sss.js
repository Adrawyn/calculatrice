document.addEventListener('DOMContentLoaded', function(){ 
	let output = ""
  
  function refreshOutput() {
    if (document.getElementById("resultat") == "0") {
      document.getElementById("resultat").innerHTML = output.replace("0", "")
    } else {
      document.getElementById("resultat").innerHTML = output
    }
  }
  
  for (let index = 0; index < 10; index++){

    let button_number = document.getElementById(''+index);
    button_number.addEventListener('click', function() {
    	output = output + index
      refreshOutput()
    })

  }
  
  function register(id, callback) {
    let bouton = document.getElementById(id) // Retourne l'élement HTML qui possède cet attribut ID
    
    bouton.addEventListener('click', callback) // Ecoute les clicks et éxécute le callback
  }
  
	// Bouton AC
  
  register("AC", function() {
    output = "0"
    refreshOutput()
  })
  
  // Bouton CE
  
  register("CE", function() {
    output = output.slice(0, output.length - 1)
    
    if ( output.length == 0 ) {
      output = "0"
    }
    
    refreshOutput()
  })
  
  // Bouton /
  	
  register("/", function() {
    output = output + "/"
    
    refreshOutput()
  })
  
  // Bouton *
  
  register("*", function() {
    output = output + "*"
    
    refreshOutput()
  })
  
  // Bouton +
  
  register("+", function() {
    output = output + "+"
    
    refreshOutput()
  })
  
  // Bouton -
  
  register("-", function() {
    output = output + "-"
    
    refreshOutput()
  })
  
  // Bouton =
  register("=", function () {
    
    output = ''+eval(output) // "10 * 10" => 10*10 => 100
    
    refreshOutput()
  })
  // Bouton .
  register(".", function() {
    output = output + "."
    
    refreshOutput()
  })
  
  
  // Bouton %
  register("%", function() {
    output = output + "%"
    
    refreshOutput()
  })
  
}, false);