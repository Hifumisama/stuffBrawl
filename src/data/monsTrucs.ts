import { v4 as uuidv4 } from 'uuid';

export type MonsTrucType = 'feu' | 'glace' | 'électrique' | 'terre' | 'plastique' | 'acier' | 'irrégulier' | 'rangement' | 'horrifique';
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
}

export const monsTrucs: MonsTruc[] = [
  {
    id: uuidv4(),
    name: 'Barbulle',
    types: ['feu', 'plastique'],
    description: 'Un barbecue qui a la particularité de pulvériser des bulles enflammées sur quiconque ne pose pas de viande de qualité sur son grill.',
    image: '/images/monstrucs/Barbulle.jpg',
    stats: {
      hp: 85,
      attack: 70,
      defense: 45,
      speed: 30
    },
    rarity: 'rare'
  },
  {
    id: uuidv4(),
    name: 'Aspiratruc',
    types: ['électrique', 'irrégulier'],
    description: 'Un aspirateur qui aspire non seulement la poussière mais aussi les mauvaises décisions de vie. Attention à ne pas trop l\'utiliser, il pourrait aspirer votre motivation !',
    image: '/images/monstrucs/Aspiratruc.jpg',
    stats: {
      hp: 75,
      attack: 65,
      defense: 50,
      speed: 40
    },
    rarity: 'commun'
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
    rarity: 'épique'
  },
  {
    id: uuidv4(),
    name: 'Frigomystère',
    types: ['glace', 'rangement'],
    description: 'Un frigo qui garde vos aliments frais mais aussi vos secrets bien au frais. Il a la fâcheuse tendance à transformer vos légumes en sculptures de glace.',
    image: '/images/monstrucs/FrigoMystere.jpg',
    stats: {
      hp: 100,
      attack: 45,
      defense: 80,
      speed: 20
    },
    rarity: 'rare'
  },
  {
    id: uuidv4(),
    name: 'Psychofone',
    types: ['électrique', 'plastique'],
    description: 'Un téléphone qui capte non seulement les ondes mais aussi les pensées des gens autour. Malheureusement, il capte surtout les pensées négatives...',
    image: '/images/monstrucs/Psychofone.jpg',
    stats: {
      hp: 65,
      attack: 85,
      defense: 40,
      speed: 70
    },
    rarity: 'épique'
  },
  {
    id: uuidv4(),
    name: 'Amourson',
    types: ['plastique', 'irrégulier'],
    description: 'Une peluche qui grandit chaque fois qu\'on lui fait un câlin. Attention à ne pas trop l\'aimer, elle pourrait devenir plus grande que votre maison !',
    image: '/images/monstrucs/Amourson.jpg',
    stats: {
      hp: 120,
      attack: 30,
      defense: 65,
      speed: 25
    },
    rarity: 'rare'
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
    rarity: 'commun'
  },
  {
    id: uuidv4(),
    name: 'Génialampe',
    types: ['électrique', 'plastique'],
    description: 'Une lampe qui éclaire non seulement votre pièce mais aussi vos idées les plus folles. Attention, elle a tendance à s\'éteindre pile au moment où vous avez une idée géniale.',
    image: '/images/monstrucs/Genialampe.jpg',
    stats: {
      hp: 60,
      attack: 90,
      defense: 35,
      speed: 75
    },
    rarity: 'épique'
  },
  {
    id: uuidv4(),
    name: 'Confortuaire',
    types: ['plastique', 'horrifique'],
    description: 'Un coussin qui s\'adapte à la forme de votre corps... un peu trop bien. Il a tendance à vous garder prisonnier de son confort moelleux.',
    image: '/images/monstrucs/Confortuaire.jpg',
    stats: {
      hp: 150,
      attack: 40,
      defense: 70,
      speed: 15
    },
    rarity: 'rare'
  },
  {
    id: uuidv4(),
    name: 'Chronocaprice',
    types: ['acier', 'irrégulier'],
    description: 'Une horloge qui ralentit le temps quand vous vous amusez et l\'accélère quand vous travaillez. Elle a un sens de l\'humour très particulier.',
    image: '/images/monstrucs/Chronocaprice.jpg',
    stats: {
      hp: 80,
      attack: 55,
      defense: 65,
      speed: 100
    },
    rarity: 'légendaire'
  },
  {
    id: uuidv4(),
    name: 'Pyrotype',
    types: ['plastique', 'feu'],
    description: 'Un clavier qui corrige automatiquement vos fautes d\'orthographe... mais vous le fait payer de manière.... intense !',
    image: '/images/monstrucs/Pyrotype.jpg',
    stats: {
      hp: 70,
      attack: 85,
      defense: 45,
      speed: 60
    },
    rarity: 'rare'
  },
  {
    id: uuidv4(),
    name: 'Chaisecapade',
    types: ['plastique', 'horrifique'],
    description: 'Cette chaise à horreur que l\'on pose son derrière dessus, donc elle prend les devants et ses jampes à son cou',
    image: '/images/monstrucs/Chaisecapade.jpg',
    stats: {
      hp: 65,
      attack: 45,
      defense: 50,
      speed: 95
    },
    rarity: 'commun'
  },
  {
    id: uuidv4(),
    name: 'Zappétit',
    types: ['électrique', 'plastique'],
    description: 'Une télé qui change de chaîne toute seule pour regarder ce qu\'elle préfère. Elle adore les chaînes culinaires, bien qu\'elle soit incapable de cuisiner...',
    image: '/images/monstrucs/Zappetit.jpg',
    stats: {
      hp: 85,
      attack: 70,
      defense: 55,
      speed: 40
    },
    rarity: 'commun'
  },
  {
    id: uuidv4(),
    name: 'Echoverre',
    types: ['glace', 'irrégulier'],
    description: 'Un miroir qui montre votre reflet... mais avec 24h de retard. C\'est pratique pour vérifier si vous avez bien fermé la porte hier.',
    image: '/images/monstrucs/Echoverre.jpg',
    stats: {
      hp: 95,
      attack: 65,
      defense: 85,
      speed: 25
    },
    rarity: 'épique'
  },
  {
    id: uuidv4(),
    name: 'Styloflemme',
    types: ['plastique', 'irrégulier'],
    description: 'Un stylo qui écrit... ou pas, selon son humeur du moment ! Mais quand il est dans un bon jour, vous écrirez des best-seller à coup sûr !',
    image: '/images/monstrucs/Styloflemme.jpg',
    stats: {
      hp: 55,
      attack: 75,
      defense: 35,
      speed: 80
    },
    rarity: 'commun'
  },
  {
    id: uuidv4(),
    name: 'Parapaspluie',
    types: ['plastique', 'irrégulier'],
    description: 'Un parapluie qui crée son propre microclimat. Il pleut toujours des bonbons chez lui, mais uniquement les jours où vous êtes au régime.',
    image: '/images/monstrucs/Parapaspluie.jpg',
    stats: {
      hp: 75,
      attack: 60,
      defense: 70,
      speed: 45
    },
    rarity: 'rare'
  },
  {
    id: uuidv4(),
    name: 'Inutilisac',
    types: ['plastique', 'rangement'],
    description: 'Un sac qui contient toujours exactement ce dont vous n\'avez pas besoin. Il a un talent particulier pour cacher vos clés quand vous êtes pressé.',
    image: '/images/monstrucs/Inutilisac.jpg',
    stats: {
      hp: 110,
      attack: 35,
      defense: 75,
      speed: 30
    },
    rarity: 'commun'
  }
]; 