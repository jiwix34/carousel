//on initialise une variable globale.
var profilAfficher;
//on appelle une fonction au chargement de la page.
$(window).load(function(){
	profilAfficher = $("#profils div[name=fabrice]");
	// on ecoute le click sur tout les td du tableau qui a pour id liste.
	$("#liste td").click(function(){
		//on stocke dans la variable l'attibut name de la cellule sur laquelle on a cliqué.
		var nom = $(this).attr("name");
				//on recupere l'index de la cellule sur laquelle on clique
		var idx = $(this).index();
		//on recupere l'index du parent de la cellule sur laquelle on clique et on soustrait 1 a l'index pour que le premier apprenant commence avec son index a zéro.
		var idxp = $(this).parent().index()-1;
		//on fait une multiplication par 2 car il y a deux colones.
		var index = idx+idxp*2;
		
		//on gere la position de l'element afficher en multipliant 'lindex de l'apprenant * la hauteur du viewport
		$("#carouzel").css({top : -(index*500)+"px"});
		//on cache l'ancien profil qui etait affiché (cette ligne ne sera pas affecter au premier chargement de la page)
		$(profilAfficher).hide();
		//tu affectes à l'attribut name au resultat de la variable qui se trouve dans la div avec #profils
		$("#profils div[name="+nom+"]").show();
		// on stocke le precedent profil qui etait affiché.
		profilAfficher = $("#profils div[name="+nom+"]");
	});
});

