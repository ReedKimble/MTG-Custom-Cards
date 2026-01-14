// Define the sets and their card data (same as script.js)
const sets = {
    'Eternia': {
        name: 'Eternia',
        folder: 'Mini-Sets/Eternia',
        cards: [
            'Adam, Prince of Eternia.png',
            'Battle Cat.png',
            'Beast Man.png',
            'Bored to Death.png',
            'By the Power of Grayskull!.png',
            'By the Power of Hugs.png',
            'Castle Grayskull.png',
            'Cloning Fevor.png',
            'Cringer.png',
            'Dig \'Em Up.png',
            'Duncan, Man-at-Arms.png',
            'Eternia Crown.png',
            'Evil-Lyn.png',
            'Fisto.png',
            'Give Me a Hand.png',
            'HEYEAYEA What\'s Going On_.png',
            'Havoc Staff.png',
            'He-Man and Battle Cat, Masters of the Universe.png',
            'He-Man, Master of the Universe.png',
            'Know Your Own Strength.png',
            'Library of Eternia.png',
            'MEKANECK.png',
            'Man-E-Faces.png',
            'Mer-Man.png',
            'Moss-Man.png',
            'Oh No You Don\'t!.png',
            'Orko.png',
            'Picnic-Pals Bicycle.png',
            'Plotting Patiently.png',
            'Ram Man.png',
            'Shiny Ball, Pretty.png',
            'Skeletor.png',
            'Snake Mountain.png',
            'Stratos.png',
            'Sword of Power.png',
            'Teela, Royal Guard Captain.png',
            'The Sorceress.png',
            'Thought So.png',
            'Trap Jaw.png',
            'Tri-Klops.png',
            'Trolla.png',
            'Until We Meet Again.png'
        ]
    },
    'Urza-and-the-Ozolith': {
        name: 'Urza and the Ozolith',
        folder: 'Mini-Sets/Urza-and-the-Ozolith',
        cards: [
            'Affinity Inversion.png',
            'Affinity Sink.png',
            'Arcbound Construct.png',
            'Arcbound Demon.png',
            'Arcbound Dragon.png',
            'Arcbound Falcon.png',
            'Arcbound Hound.png',
            'Arcbound Hunter.png',
            'Arcbound Kraken.png',
            'Arcbound Mutagenist.png',
            'Arcbound Ornithopter.png',
            'Arcbound Phantom.png',
            'Arcbound Saproling.png',
            'Arcbound Soldier.png',
            'Arcbound Sovereign.png',
            'Drain Affinity.png',
            'Goblin Construct.png',
            'Overpower Ozobound.png',
            'Ozo-fed Tendrils.png',
            'Ozobound Conversion Field.png',
            'Ozobound Diffusion Orb.png',
            'Ozobound Fogger.png',
            'Ozobound Gemstone.png',
            'Ozobound Ifrit.png',
            'Ozobound Infuser.png',
            'Ozobound Longsword.png',
            'Ozobound Reclaimer.png',
            'Ozobound Reconstitution Wand.png',
            'Ozobound Warg.png',
            'Ozobound Zombie.png',
            'Ozodetonation.png',
            'Ozolith Absorption Ward.png',
            'Ozolith Bond Rejection.png',
            'Ozolith Breeding Ground.png',
            'Ozolith Core Matrix.png',
            'Ozolith Energy Urn.png',
            'Ozolith Factory.png',
            'Ozolith Field.png',
            'Ozolith Fountain.png',
            'Ozolith Fracture.png',
            'Ozolith Incubation Chamber.png',
            'Ozolith Infusion Overload.png',
            'Ozolith Inversion Engine.png',
            'Ozolith Phantom.png',
            'Ozolith Proliferator.png',
            'Ozolith Reactor.png',
            'Ozolith Reassembler.png',
            'Ozolith Reclimation.png',
            'Ozolith Regenerator.png',
            'Ozolith Replicator.png',
            'Ozolith Research Station.png',
            'Ozolith Rootstone.png',
            'Ozolith Volcano.png',
            'Phantom Construct.png',
            'Reclaim the Ozobound.png',
            'Sovereign Upkeep.png',
            'Squawker Construct.png',
            'Urza, Ozolith Master.png',
            'Urza\'s Genesis Protocol.png',
            'Urza\'s Retreat.png',
            'Vivian, Ozobound Warden.png'
        ]
    },
    'Sword-of-Truth': {
        name: 'Sword of Truth',
        folder: 'Mini-Sets/Sword-of-Truth',
        cards: [
            'Agaden Reach.png',
            'Agiel.png',
            'Anger\'s Embrace.png',
            'Aydindril.png',
            'Berdine, Lord Rahl\'s Favorite.png',
            'Book of Counted Shadows.png',
            'Box of Serpents.png',
            'Brother of The Order.png',
            'Cara, Friend of Richard.png',
            'Chase, Boundary Warden.png',
            'Dacra.png',
            'Dark Forest Sliph.png',
            'Darken Rahl.png',
            'Devotion Square.png',
            'D\'Haran Soldiers.png',
            'Emperor Jagang.png',
            'fuer grissa ost drauka.png',
            'Grizzled Boundary Warden.png',
            'Han Channeling Ring.png',
            'Journey Book.png',
            'Kahlan Amnell.png',
            'Lord Rahl\'s Dagger.png',
            'Mord-Sith Guard.png',
            'Mord-Sith Hunter.png',
            'Mord-Sith Initiate.png',
            'Mord-Sith Ritual.png',
            'Naming the Seeker.png',
            'Nathan Rahl.png',
            'Nicci, Death\'s Mistress.png',
            'Night Stone.png',
            'Rada\'Han.png',
            'Richard Rahl.png',
            'Samuel, Former Seeker.png',
            'Seeker\'s Inquisition.png',
            'Seeker\'s Insight.png',
            'Short-Tailed Gar.png',
            'Shota, Witch Woman.png',
            'Sisters of the Dark.png',
            'Sisters of the Light.png',
            'Sliph Well.png',
            'Sliph\'s Emergency Exit.png',
            'Stone of Tears.png',
            'Summon Shadow People.png',
            'Temple of the Winds.png',
            'The Barrier.png',
            'The Boxes of Orden.png',
            'The People\'s Palace.png',
            'The Sword of Truth.png',
            'Travel by Sliph.png',
            'Traverse the Underworld.png',
            'Truth Telling.png',
            'Verna Sauventreen.png',
            'Wizard Protector.png',
            'Wizard\'s Keep.png',
            'Zeddicus Zu\'l Zorander.png'
        ]
    }
};

let currentCardIndex = 0;
let currentCards = [];
let currentSet = null;

// Get URL parameter
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Load cards on page load
document.addEventListener('DOMContentLoaded', () => {
    const setKey = getUrlParameter('set');
    
    if (!setKey || !sets[setKey]) {
        window.location.href = 'index.html';
        return;
    }
    
    currentSet = sets[setKey];
    currentCards = currentSet.cards;
    
    // Set title
    document.getElementById('set-title').textContent = currentSet.name;
    
    // Load cards
    const cardsGrid = document.getElementById('cards-grid');
    
    currentCards.forEach((cardFile, index) => {
        const cardItem = document.createElement('div');
        cardItem.className = 'card-item';
        cardItem.onclick = () => openLightbox(index);
        
        const cardName = cardFile.replace('.png', '');
        const cardPath = `${currentSet.folder}/${cardFile}`;
        
        cardItem.innerHTML = `
            <img src="${cardPath}" alt="${cardName}" loading="lazy">
            <div class="card-name">${cardName}</div>
        `;
        
        cardsGrid.appendChild(cardItem);
    });
    
    // Setup lightbox controls
    document.querySelector('.close-lightbox').onclick = closeLightbox;
    document.getElementById('prev-btn').onclick = showPrevCard;
    document.getElementById('next-btn').onclick = showNextCard;
    
    // Close lightbox on background click
    document.getElementById('lightbox').onclick = (e) => {
        if (e.target.id === 'lightbox') {
            closeLightbox();
        }
    };
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('lightbox');
        if (lightbox.style.display !== 'none') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                showPrevCard();
            } else if (e.key === 'ArrowRight') {
                showNextCard();
            }
        }
    });
});

function openLightbox(index) {
    currentCardIndex = index;
    updateLightbox();
    document.getElementById('lightbox').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function updateLightbox() {
    const cardFile = currentCards[currentCardIndex];
    const cardPath = `${currentSet.folder}/${cardFile}`;
    const cardName = cardFile.replace('.png', '');
    
    document.getElementById('lightbox-img').src = cardPath;
    document.getElementById('lightbox-img').alt = cardName;
    document.getElementById('card-counter').textContent = 
        `${currentCardIndex + 1} / ${currentCards.length}`;
    
    // Update button states
    document.getElementById('prev-btn').disabled = currentCardIndex === 0;
    document.getElementById('next-btn').disabled = currentCardIndex === currentCards.length - 1;
}

function showPrevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateLightbox();
    }
}

function showNextCard() {
    if (currentCardIndex < currentCards.length - 1) {
        currentCardIndex++;
        updateLightbox();
    }
}
