// Define the sets and their card data
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
            "Dig 'Em Up.png",
            'Duncan, Man-at-Arms.png',
            'Eternia Crown.png',
            'Evil-Lyn.png',
            'Fisto.png',
            'Give Me a Hand.png',
            "HEYEAYEA What's Going On_.png",
            'Havoc Staff.png',
            'He-Man and Battle Cat, Masters of the Universe.png',
            'He-Man, Master of the Universe.png',
            'Know Your Own Strength.png',
            'Library of Eternia.png',
            'MEKANECK.png',
            'Man-E-Faces.png',
            'Mer-Man.png',
            'Moss-Man.png',
            "Oh No You Don't!.png",
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
            "Urza's Genesis Protocol.png",
            "Urza's Retreat.png",
            'Vivian, Ozobound Warden.png'
        ]
    },
    'Sword-of-Truth': {
        name: 'Sword of Truth',
        folder: 'Mini-Sets/Sword-of-Truth',
        cards: [
            'Agaden Reach.png',
            'Agiel.png',
            "Anger's Embrace.png",
            'Aydindril.png',
            "Berdine, Lord Rahl's Favorite.png",
            'Book of Counted Shadows.png',
            'Box of Serpents.png',
            'Brother of The Order.png',
            'Cara, Friend of Richard.png',
            'Chase, Boundary Warden.png',
            'Dacra.png',
            'Dark Forest Sliph.png',
            'Darken Rahl.png',
            'Devotion Square.png',
            "D'Haran Soldiers.png",
            'Emperor Jagang.png',
            'fuer grissa ost drauka.png',
            'Grizzled Boundary Warden.png',
            'Han Channeling Ring.png',
            'Journey Book.png',
            'Kahlan Amnell.png',
            "Lord Rahl's Dagger.png",
            'Mord-Sith Guard.png',
            'Mord-Sith Hunter.png',
            'Mord-Sith Initiate.png',
            'Mord-Sith Ritual.png',
            'Naming the Seeker.png',
            'Nathan Rahl.png',
            "Nicci, Death's Mistress.png",
            'Night Stone.png',
            "Rada'Han.png",
            'Richard Rahl.png',
            'Samuel, Former Seeker.png',
            "Seeker's Inquisition.png",
            "Seeker's Insight.png",
            'Short-Tailed Gar.png',
            'Shota, Witch Woman.png',
            'Sisters of the Dark.png',
            'Sisters of the Light.png',
            'Sliph Well.png',
            "Sliph's Emergency Exit.png",
            'Stone of Tears.png',
            'Summon Shadow People.png',
            'Temple of the Winds.png',
            'The Barrier.png',
            'The Boxes of Orden.png',
            "The People's Palace.png",
            'The Sword of Truth.png',
            'Travel by Sliph.png',
            'Traverse the Underworld.png',
            'Truth Telling.png',
            'Verna Sauventreen.png',
            'Wizard Protector.png',
            "Wizard's Keep.png",
            "Zeddicus Zu'l Zorander.png"
        ]
    }
};

// Load sets on page load
document.addEventListener('DOMContentLoaded', () => {
    const setsGrid = document.getElementById('sets-grid');
    
    Object.keys(sets).forEach(setKey => {
        const set = sets[setKey];
        const setCard = document.createElement('a');
        setCard.className = 'set-card';
        setCard.href = `viewer.html?set=${encodeURIComponent(setKey)}`;
        
        setCard.innerHTML = `
            <h2>${set.name}</h2>
            <p>${set.cards.length} cards</p>
        `;
        
        setsGrid.appendChild(setCard);
    });
});

// Export sets for use in viewer
if (typeof window !== 'undefined') {
    window.MTG_SETS = sets;
}
