document.addEventListener("DOMContentLoaded", function() {
    // Récupérer la balise <select> et toutes ses options
    const selectElement = document.getElementById("selectAuthor");
    const options = Array.from(selectElement.options); // Convertir les options en tableau pour les trier

    // Extraire la première option qui n'a pas besoin d'être triée (Sélectionner un auteur)
    const firstOption = options.shift();

    // Trier les options restantes par texte affiché (innerText)
    options.sort((a, b) => a.text.localeCompare(b.text));

    // Réinsérer la première option non triée (Sélectionner un auteur)
    options.unshift(firstOption);

    // Vider les options actuelles du <select>
    selectElement.innerHTML = "";

    // Réinsérer les options triées dans le <select>
    options.forEach(option => {
        selectElement.appendChild(option);
    });
});
