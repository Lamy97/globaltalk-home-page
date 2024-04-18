document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner les éléments du DOM
    let openHam = document.querySelector("#openHam");
    let closeHam = document.querySelector("#closeHam");
    let navigationItems = document.querySelector(".mainMenu");
    let firstSection = document.querySelector(".first-section");
    let footer = document.querySelector("footer");

    // Vérifiez que les éléments ont été correctement trouvés
    if (openHam && closeHam && navigationItems && firstSection && footer) {
        // Fonction pour gérer les événements du menu hamburger
        const hamburgerEvent = (navigation, close, open) => {
            navigationItems.style.display = navigation;
            closeHam.style.display = close;
            openHam.style.display = open;

            // Toggle hidden class for first section and footer
            firstSection.classList.toggle('hidden');
            footer.classList.toggle('hidden');
        };

        // Ajouter des écouteurs d'événements
        openHam.addEventListener("click", () => {
            hamburgerEvent("flex", "block", "none");
        });

        closeHam.addEventListener("click", () => {
            hamburgerEvent("none", "none", "block");
        });

        // Ajuster la visibilité du menu en fonction de la taille de l'écran
        window.addEventListener("resize", function() {
            if (window.innerWidth > 768) {
                navigationItems.style.display = "flex";
                firstSection.classList.remove('hidden');
                footer.classList.remove('hidden');
            } else {
                if (navigationItems.style.display === "flex") {
                    navigationItems.style.display = "none";
                    openHam.style.display = "block";
                    closeHam.style.display = "none";
                    firstSection.classList.add('hidden');
                    footer.classList.add('hidden');
                }
            }
        });

        // Initialisation de l'affichage au chargement
        if (window.innerWidth > 768) {
            navigationItems.style.display = "flex";
            openHam.style.display = "none";
            closeHam.style.display = "block";
            firstSection.classList.remove('hidden');
            footer.classList.remove('hidden');
        } else {
            navigationItems.style.display = "none";
            openHam.style.display = "block";
            closeHam.style.display = "none";
            firstSection.classList.add('hidden');
            footer.classList.add('hidden');
        }
    } else {
        console.error("Un ou plusieurs éléments du DOM n'ont pas pu être trouvés");
    }
});
