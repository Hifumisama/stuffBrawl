import { v4 as uuidv4 } from 'uuid';

export type MonsTrucType = 'feu' | 'glace' | 'électrique' | 'terre' | 'vol' | 'acier' | 'eau' | 'plante' | 'spectre';
export type MonsTrucRarity = 'commun' | 'rare' | 'épique' | 'légendaire';

export interface MonsTruc {
  id: string;
  name: string;
  types: MonsTrucType[];
  description: string;
  image: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
  };
  rarity: MonsTrucRarity;
  prompts: {
    positive: string;
    negative: string;
  };
}

/**
 * Interface pour les templates de prompts selon la rareté
 */
export interface PromptTemplate {
  positive: string;
  effects: number;
}

// Templates de base par rareté
export const PROMPT_TEMPLATES: Record<MonsTrucRarity, PromptTemplate> = {
  commun: {
    positive: "a cute pixel art creature, ({{object}}:{{objectWeight}}), {{stats}}, {{eyes}} with a {{expression}} look, chibi-like body with {{colors}}, {{effect1}}, {{effect2}}, white background, 8-bit style, game sprite, detailed pixel art, common rarity, kawaii style, pokemon-like design, {{description}}",
    effects: 2
  },
  rare: {
    positive: "a cute pixel art creature, ({{object}}:{{objectWeight}}), {{stats}}, {{eyes}} with a {{expression}} look, chibi-like body with {{colors}} and {{texture}}, {{effect1}}, {{effect2}}, {{effect3}}, white background, 8-bit style, game sprite, detailed pixel art, rare rarity, kawaii style, pokemon-like design, {{description}}",
    effects: 3
  },
  épique: {
    positive: "a cute pixel art creature, ({{object}}:{{objectWeight}}), {{stats}}, {{eyes}} with a {{expression}} look, chibi-like body with {{colors}} and {{texture}}, {{effect1}}, {{effect2}}, {{effect3}}, {{effect4}}, white background, 8-bit style, game sprite, detailed pixel art, epic rarity, kawaii style, pokemon-like design, {{description}}",
    effects: 4
  },
  légendaire: {
    positive: "a cute pixel art creature, ({{object}}:{{objectWeight}}), {{stats}}, {{eyes}} with a {{expression}} look, chibi-like body with {{colors}} and {{texture}}, {{effect1}}, {{effect2}}, {{effect3}}, {{effect4}}, {{effect5}}, white background, 8-bit style, game sprite, detailed pixel art, legendary rarity, kawaii style, pokemon-like design, {{description}}",
    effects: 5
  }
};

// Dictionnaires d'effets selon les types
export const EFFECTS_BY_TYPE: Record<MonsTrucType, string[]> = {
  feu: ["magical fire bubbles", "steam effects", "floating embers", "heat waves", "fire aura"],
  glace: ["magical cold air", "frozen particles", "ice crystals", "frost effects", "freezing aura"],
  électrique: ["electric sparks", "digital particles", "energy waves", "power surges", "electric aura"],
  terre: ["floating rocks", "earthy particles", "grounding effect", "natural aura", "stone patterns"],
  vol: ["floating feathers", "air currents", "wind effects", "hovering ability", "lightweight aura"],
  acier: ["metallic shine", "mechanical parts", "gear effects", "steel particles", "iron strength"],
  eau: ["water droplets", "flowing waves", "splash effects", "bubbling aura", "fluid movements"],
  plante: ["leaf particles", "flower petals", "growth effects", "photosynthesis glow", "natural harmony"],
  spectre: ["ghostly mist", "phantom particles", "ethereal glow", "spectral energy", "haunting aura"]
};

// Dictionnaires d'expressions selon les types
export const EXPRESSIONS_BY_TYPE: Record<MonsTrucType, string[]> = {
  feu: ["fiery", "passionate", "warm"],
  glace: ["cool", "icy", "calm"],
  électrique: ["shocked", "energetic", "sparky"],
  terre: ["grounded", "natural", "earthy"],
  vol: ["free", "airy", "soaring"],
  acier: ["stern", "metallic", "rigid"],
  eau: ["fluid", "refreshing", "flowing"],
  plante: ["lively", "blooming", "natural"],
  spectre: ["mysterious", "otherworldly", "ghostly"]
};

// Dictionnaires de couleurs selon les types
export const COLORS_BY_TYPE: Record<MonsTrucType, string[]> = {
  feu: ["red and orange glowing accents", "fiery red patterns", "warm color tones"],
  glace: ["ice blue patterns", "frost white details", "cold color tones"],
  électrique: ["electric blue energy", "yellow lightning patterns", "electric color tones"],
  terre: ["earthen brown patterns", "natural green details", "organic color tones"],
  vol: ["sky blue patterns", "cloud white details", "lightweight color tones"],
  acier: ["metallic silver patterns", "steel gray details", "reflective color tones"],
  eau: ["ocean blue patterns", "aquatic teal details", "flowing color gradients"],
  plante: ["leaf green patterns", "flower-inspired details", "natural color tones"],
  spectre: ["purple mist patterns", "ghostly teal details", "ethereal color tones"]
};

// Dictionnaires de textures selon les types
export const TEXTURES_BY_TYPE: Record<MonsTrucType, string[]> = {
  feu: ["flickering texture", "flame-like surface", "heat-warped details"],
  glace: ["frost details", "crystalline structure", "icy surface"],
  électrique: ["static-charged surface", "energized texture", "conductive details"],
  terre: ["rough natural texture", "organic surface", "earthy details"],
  vol: ["feathered texture", "lightweight surface", "air-current patterns"],
  acier: ["metallic plating", "mechanical joints", "riveted details"],
  eau: ["fluid texture", "rippling surface", "water-like reflections"],
  plante: ["leafy texture", "organic growth patterns", "natural fibrous details"],
  spectre: ["misty texture", "ethereal surface", "partially transparent details"]
};

// Combinaisons de types créant des effets spéciaux
export const TYPE_COMBO_EFFECTS: Record<string, string[]> = {
  "feu+électrique": ["electrified flames", "lightning fire", "plasma arcs"],
  "glace+eau": ["frozen waves", "ice floes", "cryo-liquid flows"],
  "feu+acier": ["molten metal drips", "forge effects", "heated steel"],
  "électrique+vol": ["lightning wings", "static-charged feathers", "thunderstorm flight"],
  "vol+spectre": ["phantom wings", "ethereal flight", "ghostly levitation"],
  "glace+électrique": ["cryo-electric arcs", "frozen lightning", "icy discharges"],
  "terre+acier": ["reinforced earthen structure", "metal-infused stone", "industrial natural hybrid"],
  "eau+spectre": ["phantom tides", "ghostly waters", "spectral whirlpools"],
  "feu+vol": ["phoenix-like flames", "burning wings", "soaring embers"],
  "eau+plante": ["hydroponic growth", "dew-covered leaves", "aquatic gardens"]
};

export const monsTrucs: MonsTruc[] = [
  {
    id: uuidv4(),
    name: 'Barbulle',
    types: ['feu', 'vol'],
    description: 'Un barbecue qui a la particularité de pulvériser des bulles enflammées sur quiconque ne pose pas de viande de qualité sur son grill.',
    image: '/images/monstrucs/Barbulle.jpg',
    stats: {
      hp: 85,
      attack: 70,
      defense: 45,
      speed: 30
    },
    rarity: 'rare',
    prompts: {
      positive: "a cute pixel art creature, (barbecue:1.7), strong attacks with fragile body, mischievous eyes with a playful look, chibi-like body with red and orange glowing accents, magical fire bubbles, steam effects, floating embers, white background, 8-bit style, game sprite, detailed pixel art, rare rarity, kawaii style, pokemon-like design, a barbecue that sprays fire bubbles on anyone who doesn't put quality meat on its grill",
      negative: "photorealistic, 3D, blurry, low quality, dark background, complex background, realistic textures, too human-like, scary, creepy"
    }
  },
  {
    id: uuidv4(),
    name: 'Aspiratruc',
    types: ['électrique', 'eau'],
    description: 'Un aspirateur qui aspire non seulement la poussière mais aussi les mauvaises décisions de vie. Attention à ne pas trop l\'utiliser, il pourrait aspirer votre motivation !',
    image: '/images/monstrucs/Aspiratruc.jpg',
    stats: {
      hp: 75,
      attack: 65,
      defense: 50,
      speed: 40
    },
    rarity: 'commun',
    prompts: {
      positive: "a cute pixel art creature, (vacuum cleaner:1.7), balanced fighter, curious eyes with a mischievous look, chibi-like body with electric blue energy, swirling dust particles, suction effects, white background, 8-bit style, game sprite, detailed pixel art, common rarity, kawaii style, pokemon-like design, a vacuum cleaner that sucks not only dust but also bad life decisions, be careful not to use it too much, it might suck your motivation",
      negative: "photorealistic, 3D, blurry, low quality, dark background, complex background, realistic textures, too human-like, scary, creepy"
    }
  },
  {
    id: uuidv4(),
    name: 'Cafétombe',
    types: ['feu', 'acier'],
    description: 'Une cafetière qui transforme le café en énergie pure. Son café est si fort qu\'il peut réveiller les morts... ou les endormir encore plus profondément.',
    image: '/images/monstrucs/Cafetombe.jpg',
    stats: {
      hp: 90,
      attack: 75,
      defense: 60,
      speed: 45
    },
    rarity: 'épique',
    prompts: {
      positive: "a cute pixel art creature, (coffee maker:1.7), strong attacks with average speed, wise eyes with a knowing look, chibi-like body with glowing red accents and metallic details, magical coffee beans, steam effects, energy waves, coffee aroma particles, white background, 8-bit style, game sprite, detailed pixel art, epic rarity, kawaii style, pokemon-like design, a coffee maker that transforms coffee into pure energy, its coffee is so strong it can wake the dead... or put them to sleep even deeper",
      negative: "photorealistic, 3D, blurry, low quality, dark background, complex background, realistic textures, too human-like, scary, creepy"
    }
  },
  {
    id: uuidv4(),
    name: 'Frigomystère',
    types: ['glace', 'eau'],
    description: 'Un frigo qui garde vos aliments frais mais aussi vos secrets bien au frais. Il a la fâcheuse tendance à transformer vos légumes en sculptures de glace.',
    image: '/images/monstrucs/FrigoMystere.jpg',
    stats: {
      hp: 100,
      attack: 45,
      defense: 80,
      speed: 20
    },
    rarity: 'rare',
    prompts: {
      positive: "a cute pixel art creature, (refrigerator:1.7), extremely durable with weak attacks, cool eyes with a mysterious look, chibi-like body with ice blue patterns and frost details, magical cold air, frozen food items, ice crystals, white background, 8-bit style, game sprite, detailed pixel art, rare rarity, kawaii style, pokemon-like design, a fridge that keeps your food fresh but also your secrets well chilled, it has a tendency to turn your vegetables into ice sculptures",
      negative: "photorealistic, 3D, blurry, low quality, dark background, complex background, realistic textures, too human-like, scary, creepy"
    }
  },
  {
    id: uuidv4(),
    name: 'Psychofone',
    types: ['électrique', 'vol'],
    description: 'Un téléphone qui capte non seulement les ondes mais aussi les pensées des gens autour. Malheureusement, il capte surtout les pensées négatives...',
    image: '/images/monstrucs/Psychofone.jpg',
    stats: {
      hp: 65,
      attack: 85,
      defense: 40,
      speed: 70
    },
    rarity: 'épique',
    prompts: {
      positive: "a cute pixel art creature, (telephone:1.7), strong attacks with fragile body, mysterious eyes with a psychic glow, chibi-like body with electric blue patterns and holographic screen, floating in mid-air, thought bubbles, psychic waves, digital particles, energy aura, white background, 8-bit style, game sprite, detailed pixel art, epic rarity, kawaii style, pokemon-like design, a phone that captures not only waves but also the thoughts of people around, unfortunately, it mostly captures negative thoughts",
      negative: "photorealistic, 3D, blurry, low quality, dark background, complex background, realistic textures, too human-like, scary, creepy"
    }
  },
  {
    id: uuidv4(),
    name: 'Amourson',
    types: ['vol', 'eau'],
    description: 'Une peluche qui grandit chaque fois qu\'on lui fait un câlin. Attention à ne pas trop l\'aimer, elle pourrait devenir plus grande que votre maison !',
    image: '/images/monstrucs/Amourson.jpg',
    stats: {
      hp: 120,
      attack: 30,
      defense: 65,
      speed: 25
    },
    rarity: 'rare',
    prompts: {
      positive: "a cute pixel art creature, (plush:1.7), extremely durable with cute punches, loving eyes with a warm look, chibi-like body with soft pastel-colored fur and fluffy texture, growing size effect, heart-shaped patterns, floating hearts, white background, 8-bit style, game sprite, detailed pixel art, rare rarity, kawaii style, pokemon-like design, a plush that grows every time you give it a hug, be careful not to love it too much, it might become bigger than your house",
      negative: "photorealistic, 3D, blurry, low quality, dark background, complex background, realistic textures, too human-like, scary, creepy"
    }
  },
  {
    id: uuidv4(),
    name: 'OpéraVapeur',
    types: ['feu', 'acier'],
    description: 'Une bouilloire qui chante des opéras quand elle bout. Son aria préférée ? "La Flûte Enchantée" de Mozart, bien sûr !',
    image: '/images/monstrucs/OperaVapeur.jpg',
    stats: {
      hp: 70,
      attack: 60,
      defense: 55,
      speed: 50
    },
    rarity: 'commun',
    prompts: {
      positive: "a cute pixel art creature, (kettle:1.7), balanced fighter, musical eyes with a singing look, chibi-like body with musical note patterns, steam effects, floating musical symbols, white background, 8-bit style, game sprite, detailed pixel art, common rarity, kawaii style, pokemon-like design, a kettle that sings operas when it boils, its favorite aria? Mozart's 'The Magic Flute', of course",
      negative: "photorealistic, 3D, blurry, low quality, dark background, complex background, realistic textures, too human-like, scary, creepy"
    }
  },
  {
    id: uuidv4(),
    name: 'Génialampe',
    types: ['électrique', 'plante'],
    description: 'Une lampe qui éclaire non seulement votre pièce mais aussi vos idées les plus folles. Attention, elle a tendance à s\'éteindre pile au moment où vous avez une idée géniale.',
    image: '/images/monstrucs/Genialampe.jpg',
    stats: {
      hp: 60,
      attack: 90,
      defense: 35,
      speed: 75
    },
    rarity: 'épique',
    prompts: {
      positive: "a cute pixel art creature, (lamp:1.7), strong attacks with fragile body, bright eyes with a thoughtful look, chibi-like body with electric yellow energy and glowing patterns, light bulb effects, floating light particles, energy beams, illumination aura, white background, 8-bit style, game sprite, detailed pixel art, epic rarity, kawaii style, pokemon-like design, a lamp that illuminates not only your room but also your wildest ideas, be careful, it tends to turn off right when you have a brilliant idea",
      negative: "photorealistic, 3D, blurry, low quality, dark background, complex background, realistic textures, too human-like, scary, creepy"
    }
  },
  {
    id: uuidv4(),
    name: 'Confortuaire',
    types: ['vol', 'spectre'],
    description: 'Un coussin qui s\'adapte à la forme de votre corps... un peu trop bien. Il a tendance à vous garder prisonnier de son confort moelleux.',
    image: '/images/monstrucs/Confortuaire.jpg',
    stats: {
      hp: 150,
      attack: 40,
      defense: 70,
      speed: 15
    },
    rarity: 'rare',
    prompts: {
      positive: "a cute pixel art creature, (cushion:1.7), extremely durable with cute punches, mysterious eyes with a devious look, chibi-like body with soft pastel colors and plush texture, morphing shape, magical patterns, comfort aura, white background, 8-bit style, game sprite, detailed pixel art, rare rarity, kawaii style, pokemon-like design, a cushion that adapts to your body shape... a bit too well, it tends to keep you prisoner of its soft comfort",
      negative: "photorealistic, 3D, blurry, low quality, dark background, complex background, realistic textures, too human-like, scary, creepy"
    }
  },
  {
    id: uuidv4(),
    name: 'Chronocaprice',
    types: ['acier', 'eau'],
    description: 'Une horloge qui ralentit le temps quand vous vous amusez et l\'accélère quand vous travaillez. Elle a un sens de l\'humour très particulier.',
    image: '/images/monstrucs/Chronocaprice.jpg',
    stats: {
      hp: 80,
      attack: 55,
      defense: 65,
      speed: 100
    },
    rarity: 'légendaire',
    prompts: {
      positive: "a cute pixel art creature, (clock:1.7), fastest creature on earth, wise eyes with a knowing look, chibi-like body with golden clockwork patterns and intricate mechanical details, time distortion effects, floating clock hands, temporal particles, golden aura, time warping effects, dimensional ripples, white background, 8-bit style, game sprite, detailed pixel art, legendary rarity, kawaii style, pokemon-like design, a clock that slows down time when you're having fun and speeds it up when you're working, it has a very particular sense of humor",
      negative: "photorealistic, 3D, blurry, low quality, dark background, complex background, realistic textures, too human-like, scary, creepy"
    }
  },
  {
    id: uuidv4(),
    name: 'Pyrotype',
    types: ['vol', 'feu'],
    description: 'Un clavier qui corrige automatiquement vos fautes d\'orthographe... mais vous le fait payer de manière.... intense !',
    image: '/images/monstrucs/Pyrotype.jpg',
    stats: {
      hp: 70,
      attack: 85,
      defense: 45,
      speed: 60
    },
    rarity: 'rare',
    prompts: {
      positive: "a cute pixel art creature, (keyboard:1.7), strong attacks with fragile body, focused eyes with a determined look, chibi-like body with red and orange flame patterns and glowing keys, typing effects, floating keycaps, fire particles, white background, 8-bit style, game sprite, detailed pixel art, rare rarity, kawaii style, pokemon-like design, a keyboard that automatically corrects your spelling mistakes... but makes you pay for it in an intense way",
      negative: "photorealistic, 3D, blurry, low quality, dark background, complex background, realistic textures, too human-like, scary, creepy"
    }
  },
  {
    id: uuidv4(),
    name: 'Chaisecapade',
    types: ['vol', 'spectre'],
    description: 'Cette chaise à horreur que l\'on pose son derrière dessus, donc elle prend les devants et ses jampes à son cou',
    image: '/images/monstrucs/Chaisecapade.jpg',
    stats: {
      hp: 65,
      attack: 45,
      defense: 50,
      speed: 95
    },
    rarity: 'commun',
    prompts: {
      positive: "a cute pixel art creature, (chair:1.7), very fast with fragile body, playful eyes with a mischievous look, chibi-like body with dark wooden texture, running legs, magical carvings, white background, 8-bit style, game sprite, detailed pixel art, common rarity, kawaii style, pokemon-like design, a chair that runs away when you try to sit on it, taking its legs to its neck",
      negative: "photorealistic, 3D, blurry, low quality, dark background, complex background, realistic textures, too human-like, scary, creepy"
    }
  },
  {
    id: uuidv4(),
    name: 'Zappétit',
    types: ['électrique', 'plante'],
    description: 'Une télé qui change de chaîne toute seule pour regarder ce qu\'elle préfère. Elle adore les chaînes culinaires, bien qu\'elle soit incapable de cuisiner...',
    image: '/images/monstrucs/Zappetit.jpg',
    stats: {
      hp: 85,
      attack: 70,
      defense: 55,
      speed: 40
    },
    rarity: 'commun',
    prompts: {
      positive: "a cute pixel art creature, (TV:1.7), balanced fighter, expressive eyes with a food-loving gaze, chibi-like body with electric blue screen patterns, food channel effects, floating dishes, white background, 8-bit style, game sprite, detailed pixel art, common rarity, kawaii style, pokemon-like design, a TV that changes channels by itself to watch what it prefers, loves cooking channels, although it's unable to cook",
      negative: "photorealistic, 3D, blurry, low quality, dark background, complex background, realistic textures, too human-like, scary, creepy"
    }
  },
  {
    id: uuidv4(),
    name: 'Echoverre',
    types: ['glace', 'eau'],
    description: 'Un miroir qui montre votre reflet... mais avec 24h de retard. C\'est pratique pour vérifier si vous avez bien fermé la porte hier.',
    image: '/images/monstrucs/Echoverre.jpg',
    stats: {
      hp: 95,
      attack: 65,
      defense: 85,
      speed: 25
    },
    rarity: 'épique',
    prompts: {
      positive: "a cute pixel art creature, (mirror:1.7), extremely durable with weak attacks, mysterious eyes with a knowing look, chibi-like body with ice blue frame and reflective surface, time-delayed reflection effects, floating mirror shards, temporal particles, reflection aura, white background, 8-bit style, game sprite, detailed pixel art, epic rarity, kawaii style, pokemon-like design, a mirror that shows your reflection... but with a 24-hour delay, it's practical to check if you closed the door yesterday",
      negative: "photorealistic, 3D, blurry, low quality, dark background, complex background, realistic textures, too human-like, scary, creepy"
    }
  },
  {
    id: uuidv4(),
    name: 'Styloflemme',
    types: ['vol', 'eau'],
    description: 'Un stylo qui écrit... ou pas, selon son humeur du moment ! Mais quand il est dans un bon jour, vous écrirez des best-seller à coup sûr !',
    image: '/images/monstrucs/Styloflemme.jpg',
    stats: {
      hp: 55,
      attack: 75,
      defense: 35,
      speed: 80
    },
    rarity: 'commun',
    prompts: {
      positive: "a cute pixel art creature, (pen:1.7), strong attacks with fragile body, sleepy eyes with a relaxed look, chibi-like body with ink patterns, writing trails, floating ink droplets, white background, 8-bit style, game sprite, detailed pixel art, common rarity, kawaii style, pokemon-like design, a pen that writes... or not, depending on its mood, but when it's having a good day, you'll write bestsellers for sure",
      negative: "photorealistic, 3D, blurry, low quality, dark background, complex background, realistic textures, too human-like, scary, creepy"
    }
  },
  {
    id: uuidv4(),
    name: 'Parapaspluie',
    types: ['vol', 'eau'],
    description: 'Un parapluie qui crée son propre microclimat. Il pleut toujours des bonbons chez lui, mais uniquement les jours où vous êtes au régime.',
    image: '/images/monstrucs/Parapaspluie.jpg',
    stats: {
      hp: 75,
      attack: 60,
      defense: 70,
      speed: 45
    },
    rarity: 'rare',
    prompts: {
      positive: "a cute pixel art creature, (umbrella:1.7), balanced fighter, cheerful eyes with a playful look, chibi-like body with colorful fabric and rain patterns, candy rain effects, floating sweets, rainbow particles, white background, 8-bit style, game sprite, detailed pixel art, rare rarity, kawaii style, pokemon-like design, an umbrella that creates its own microclimate, it always rains candy at its place, but only on days when you're on a diet",
      negative: "photorealistic, 3D, blurry, low quality, dark background, complex background, realistic textures, too human-like, scary, creepy"
    }
  },
  {
    id: uuidv4(),
    name: 'Inutilisac',
    types: ['vol', 'eau'],
    description: 'Un sac qui contient toujours exactement ce dont vous n\'avez pas besoin. Il a un talent particulier pour cacher vos clés quand vous êtes pressé.',
    image: '/images/monstrucs/Inutilisac.jpg',
    stats: {
      hp: 110,
      attack: 35,
      defense: 75,
      speed: 30
    },
    rarity: 'commun',
    prompts: {
      positive: "a cute pixel art creature, (bag:1.7), extremely durable with weak attacks, mischievous eyes with a sly look, chibi-like body with soft fabric and storage patterns, storage effects, floating items, magical sparkles, white background, 8-bit style, game sprite, detailed pixel art, common rarity, kawaii style, pokemon-like design, a bag that always contains exactly what you don't need, it has a particular talent for hiding your keys when you're in a hurry",
      negative: "photorealistic, 3D, blurry, low quality, dark background, complex background, realistic textures, too human-like, scary, creepy"
    }
  }
]; 