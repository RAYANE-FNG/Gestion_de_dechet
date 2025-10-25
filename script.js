// Formulaire contact
function handleSubmit(e){
    e.preventDefault();
    const name = document.getElementById('name').value || 'Anonyme';
    alert(`Merci ${name} !\nVotre message a été reçu (maquette).`);
  }
  
  // Signalement rapide via prompt
  function signalerDepot(){
    const location = prompt("Entrez l'adresse du dépôt sauvage");
    if(location) alert(`Merci ! Votre signalement pour "${location}" a été enregistré.`);
  }
  
  // Télécharger le PDF Guides & Ressources
  function downloadPDF(){
    const link = document.createElement('a');
    link.href = 'assets/guides.pdf'; // Chemin vers ton PDF
    link.download = 'EcoCollect_Fiches_Pratiques.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  // Fonctions pour ouvrir le modal interactif des fonctionnalités
  function openModal(feature){
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    
    if(feature === 'signalement'){
      body.innerHTML = `
        <h4>Signalement facile</h4>
        <p>Remplissez le formulaire pour signaler un dépôt sauvage :</p>
        <input type="text" placeholder="Adresse" style="width:80%;padding:8px;margin:8px 0;border-radius:6px;border:1px solid #ccc;">
        <br>
        <button class="cta" onclick='alert("Signalement envoyé !")'>Envoyer</button>
      `;
    }
    else if(feature === 'calendrier'){
      body.innerHTML = `
        <h4>Calendrier intelligent</h4>
        <p>Choisissez le type de déchet pour voir les dates de collecte :</p>
        <select id="typeDechet" style="width:80%;padding:8px;margin:8px 0;border-radius:6px;border:1px solid #ccc;">
          <option value="">-- Sélectionner un type --</option>
          <option value="organiques">Déchets organiques</option>
          <option value="plastiques">Plastiques</option>
          <option value="papier">Papier / Carton</option>
          <option value="verre">Verre</option>
          <option value="metal">Métal</option>
        </select>
        <div id="datesCollecte" style="margin-top:12px;font-weight:bold;color:#00796b;"></div>
        <br>
        <button class="cta" onclick="addReminder()">Ajouter un rappel</button>
      `;
      document.getElementById('typeDechet').addEventListener('change', function(){
        const type = this.value;
        const datesDiv = document.getElementById('datesCollecte');
        let dates = '';
        switch(type){
          case 'organiques': dates = 'Collecte disponible : Lundi et Jeudi'; break;
          case 'plastiques': dates = 'Collecte disponible : Mardi et Vendredi'; break;
          case 'papier': dates = 'Collecte disponible : Mercredi et Samedi'; break;
          case 'verre': dates = 'Collecte disponible : Jeudi'; break;
          case 'metal': dates = 'Collecte disponible : Mardi'; break;
          default: dates = '';
        }
        datesDiv.textContent = dates;
      });
    }
    else if(feature === 'guides'){
      body.innerHTML = `
        <h4>Guides & Ressources</h4>
        <p>Consultez des guides pour trier, réduire et réutiliser :</p>
        <ul>
          <li>Tri des plastiques</li>
          <li>Compostage des déchets organiques</li>
          <li>Réduction des emballages</li>
        </ul>
        <button class="cta" onclick="downloadPDF()">Télécharger le PDF</button>
      `;
    }
    
    modal.style.display = "block";
  }
  
  // Ajouter un rappel simulé pour le calendrier
  function addReminder(){
    const type = document.getElementById('typeDechet').value;
    if(type){
      alert(`Rappel ajouté pour le type de déchet : ${type}`);
    } else {
      alert("Veuillez sélectionner un type de déchet.");
    }
  }
  
  // Fermer le modal
  function closeModal(){
    document.getElementById('modal').style.display = "none";
  }
  
  // Fermer le modal en cliquant en dehors
  window.onclick = function(event){
    const modal = document.getElementById('modal');
    if(event.target == modal){
      modal.style.display = "none";
    }
  }