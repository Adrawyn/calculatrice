document.addEventListener('DOMContentLoaded', function(){ 
	let output = ""
  
  function refreshOutput() {
    if (document.getElementById("resultat") == "0") {
      document.getElementById("resultat").innerHTML = output.replace("0", "")
    } else {
      document.getElementById("resultat").innerHTML = output
    }
  }
  
  function setOutput(newoutput) {
    
    if (output == "0" && newoutput != "0"){
      output = newoutput.replace("0", "")
    } else {
      output = newoutput
    }
    
  }
  
  for (let index = 0; index < 10; index++){

    let button_number = document.getElementById(''+index);
    button_number.addEventListener('click', function() {
    	setOutput(output + index)
      refreshOutput()
    })

  }
  
  function register(id, callback) { // Crée une fonction nommé register, qui enregistre un bouton, avec comme arguments l'id du bouton ainsi que la fonction à éxécuter lors d'un click.  callback = renvoie l'appel de la fonction
    let bouton = document.getElementById(id) // Retourne l'élement HTML qui possède cet attribut ID
    
    bouton.addEventListener('click', callback) // Ecoute les clicks et éxécute le callback.
  }
  
	// Bouton AC
  
  register("AC", function() {// renvoie la fonction crée vers l'id choisi
    setOutput("0")
    refreshOutput()
  })
  
  // Bouton CE
  
  register("CE", function() {// renvoie la fonction crée vers l'id choisi
    setOutput(output.slice(0, output.length - 1)) //enléve -1 a chaque click sur CE
    
    if ( output.length == 0 ) { // si il n'y a plus de nombres, 
      setOutput("0")            // affiche 0
    }
    
    refreshOutput() // actualise le resultat 
  })
  
  // Bouton /
  	
  register("/", function() { // renvoie la fonction crée vers l'id choisi
    setOutput(output + "/") // Pour une division
    
    refreshOutput()
  })
  
  // Bouton *
  
  register("*", function() {
    setOutput(output + "*") // Pour une multiplication
    
    refreshOutput()
  })
  
  // Bouton +
  
  register("+", function() {
    setOutput(output + "+") // Pour une addition
    
    refreshOutput()
  })
  
  // Bouton -
  
  register("-", function() {
    setOutput(output + "-") // pour une soustraction
    
    refreshOutput()
  })
  
  // Bouton =
  register("=", function () {
    
    setOutput(''+eval(output)) // "10 * 10" => 10*10 => 100
    
    refreshOutput()
  })
  
  // Bouton .
  
  register(".", function() {
    setOutput(output + ".") // Pour rendre le nombre décimal
    
    refreshOutput()
  })
  
  // Bouton %
  
  register("%", function() {
   	setOutput( output + "%") // C'est pas un pourcentage ! C'est un modulo, c'est mon poto !
    
    refreshOutput()
  })
  
}, false);