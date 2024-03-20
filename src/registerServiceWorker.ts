/* eslint-disable no-console */
// Cette ligne désactive temporairement les avertissements de la console dans ESLint, un outil d'analyse de code statique pour identifier les problèmes avec le code JavaScript.

import { register } from "register-service-worker";
// Cette ligne importe la fonction `register` depuis le module 'register-service-worker'.
// Cette fonction est utilisée pour enregistrer un Service Worker, qui est un script exécuté par le navigateur Web en arrière-plan, séparé de la page web.

if (process.env.NODE_ENV === "production") {
  // Cette condition vérifie si l'environnement de l'application est défini sur 'production'.
  // Généralement, les Service Workers sont activés seulement en production pour éviter des comportements inattendus pendant le développement.

  register(`${process.env.BASE_URL}service-worker.js`, {
    // Appelle la fonction `register` avec l'URL du Service Worker basée sur la variable d'environnement BASE_URL.
    // Le fichier 'service-worker.js' est le fichier contenant la logique du Service Worker.

    ready() {
      // Callback appelé lorsque le Service Worker est prêt.
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
      // Affiche un message dans la console indiquant que l'application est servie depuis le cache par un Service Worker.
      // Cela signifie que le Service Worker est installé et actif.
    },

    registered() {
      // Callback appelé une fois que le Service Worker a été enregistré.
      console.log("Service worker has been registered.");
      // Affiche un message dans la console confirmant l'enregistrement du Service Worker.
    },

    cached() {
      // Callback appelé une fois que le contenu a été mis en cache par le Service Worker.
      console.log("Content has been cached for offline use.");
      // Affiche un message dans la console indiquant que le contenu a été mis en cache pour une utilisation hors ligne.
    },

    updatefound() {
      // Callback appelé quand une nouvelle mise à jour du Service Worker est trouvée.
      console.log("New content is downloading.");
      // Affiche un message dans la console indiquant que du nouveau contenu est en cours de téléchargement.
    },

    updated(registration) {
      // Crée une notification que l'utilisateur peut cliquer pour rafraîchir la page.
      let refreshNotification = document.createElement("div");
      refreshNotification.style.position = "fixed";
      refreshNotification.style.bottom = "20px";
      refreshNotification.style.left = "20px";
      refreshNotification.style.padding = "10px";
      refreshNotification.style.backgroundColor = "#f44336";
      refreshNotification.style.color = "white";
      refreshNotification.style.borderRadius = "5px";
      refreshNotification.style.cursor = "pointer";
      refreshNotification.innerText =
        "Nouveau contenu disponible. Cliquez pour rafraîchir.";

      // Ajoute un événement 'click' à la notification qui rafraîchira la page.
      refreshNotification.addEventListener("click", () => {
        if (registration && registration.waiting) {
          // Envoie un message au Service Worker pour lui dire de sauter l'attente et de prendre le contrôle immédiatement.
          registration.waiting.postMessage({ type: "SKIP_WAITING" });
        }
        window.location.reload();
      });

      // Ajoute la notification au corps du document.
      document.body.appendChild(refreshNotification);
    },

    offline() {
      // Callback appelé lorsque aucune connexion Internet n'est trouvée et que l'application s'exécute en mode hors ligne.
      console.log(
        "No internet connection found. App is running in offline mode."
      );
      // Affiche un message dans la console indiquant que l'application fonctionne en mode hors ligne.
    },

    error(error) {
      // Callback appelé en cas d'erreur lors de l'enregistrement du Service Worker.
      console.error("Error during service worker registration:", error);
      // Affiche l'erreur dans la console.
    },
  });
}
