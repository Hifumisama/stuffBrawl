import { v4 as uuidv4 } from 'uuid';

export type MonsTrucType = 'feu' | 'glace' | 'électrique' | 'terre' | 'plastique' | 'acier' | 'irrégulier' | 'rangement' | 'horrifique';

export interface MonsTruc {
  id: string;
  name: string;
  types: MonsTrucType[];
  description: string;
  image: string;
}

export const monsThings: MonsTruc[] = [
  {
    id: uuidv4(),
    name: 'Barbulle',
    types: ['feu', 'plastique'],
    description: 'Un barbecue qui a la particularité de pulvériser des bulles enflammées sur quiconque ne pose pas de viande de qualité sur son grill.',
    image: '/images/monsthing/barbulle.png'
  },
  {
    id: uuidv4(),
    name: 'Aspiratruc',
    types: ['électrique', 'irrégulier'],
    description: 'Un aspirateur qui aspire non seulement la poussière mais aussi les mauvaises décisions de vie. Attention à ne pas trop l\'utiliser, il pourrait aspirer votre motivation !',
    image: '/images/monsthing/aspiratruc.png'
  },
  {
    id: uuidv4(),
    name: 'Cafétombe',
    types: ['feu', 'acier'],
    description: 'Une cafetière qui transforme le café en énergie pure. Son café est si fort qu\'il peut réveiller les morts... ou les endormir encore plus profondément.',
    image: '/images/monsthing/cafetombe.png'
  },
  {
    id: uuidv4(),
    name: 'Frigomystère',
    types: ['glace', 'rangement'],
    description: 'Un frigo qui garde vos aliments frais mais aussi vos secrets bien au frais. Il a la fâcheuse tendance à transformer vos légumes en sculptures de glace.',
    image: '/images/monsthing/refrigerateur.png'
  },
  {
    id: uuidv4(),
    name: 'Psychofone',
    types: ['électrique', 'plastique'],
    description: 'Un téléphone qui capte non seulement les ondes mais aussi les pensées des gens autour. Malheureusement, il capte surtout les pensées négatives...',
    image: '/images/monsthing/telephone.png'
  },
  {
    id: uuidv4(),
    name: 'Amourson',
    types: ['plastique', 'irrégulier'],
    description: 'Une peluche qui grandit chaque fois qu\'on lui fait un câlin. Attention à ne pas trop l\'aimer, elle pourrait devenir plus grande que votre maison !',
    image: '/images/monsthing/peluche.png'
  },
  {
    id: uuidv4(),
    name: 'OpéraVapeur',
    types: ['feu', 'acier'],
    description: 'Une bouilloire qui chante des opéras quand elle bout. Son aria préférée ? "La Flûte Enchantée" de Mozart, bien sûr !',
    image: '/images/monsthing/bouilloire.png'
  },
  {
    id: uuidv4(),
    name: 'Génialampe',
    types: ['électrique', 'plastique'],
    description: 'Une lampe qui éclaire non seulement votre pièce mais aussi vos idées les plus folles. Attention, elle a tendance à s\'éteindre pile au moment où vous avez une idée géniale.',
    image: '/images/monsthing/lampe.png'
  },
  {
    id: uuidv4(),
    name: 'Confortuaire',
    types: ['plastique', 'horrifique'],
    description: 'Un coussin qui s\'adapte à la forme de votre corps... un peu trop bien. Il a tendance à vous garder prisonnier de son confort moelleux.',
    image: '/images/monsthing/coussin.png'
  },
  {
    id: uuidv4(),
    name: 'Chronocaprice',
    types: ['acier', 'irrégulier'],
    description: 'Une horloge qui ralentit le temps quand vous vous amusez et l\'accélère quand vous travaillez. Elle a un sens de l\'humour très particulier.',
    image: '/images/monsthing/horloge.png'
  },
  {
    id: uuidv4(),
    name: 'Pyrotype',
    types: ['plastique', 'feu'],
    description: 'Un clavier qui corrige automatiquement vos fautes d\'orthographe... mais vous le fait payer de manière.... intense !',
    image: '/images/monsthing/clavier.png'
  },
  {
    id: uuidv4(),
    name: 'Chaisecapade',
    types: ['plastique', 'horrifique'],
    description: 'Cette chaise à horreur que l\'on pose son derrière dessus, donc elle prend les devants et ses jampes à son cou',
    image: '/images/monsthing/chaise.png'
  },
  {
    id: uuidv4(),
    name: 'Zappétit',
    types: ['électrique', 'plastique'],
    description: 'Une télé qui change de chaîne toute seule pour regarder ce qu\'elle préfère. Elle adore les chaînes culinaires, bien qu\'elle soit incapable de cuisiner...',
    image: '/images/monsthing/television.png'
  },
  {
    id: uuidv4(),
    name: 'Echoverre',
    types: ['glace', 'irrégulier'],
    description: 'Un miroir qui montre votre reflet... mais avec 24h de retard. C\'est pratique pour vérifier si vous avez bien fermé la porte hier.',
    image: '/images/monsthing/miroir.png'
  },
  {
    id: uuidv4(),
    name: 'Styloflemme',
    types: ['plastique', 'irrégulier'],
    description: 'Un stylo qui écrit... ou pas, selon son humeur du moment ! Mais quand il est dans un bon jour, vous écrirez des best-seller à coup sûr !',
    image: '/images/monsthing/stylo.png'
  },
  {
    id: uuidv4(),
    name: 'Parapaspluie',
    types: ['plastique', 'irrégulier'],
    description: 'Un parapluie qui crée son propre microclimat. Il pleut toujours des bonbons chez lui, mais uniquement les jours où vous êtes au régime.',
    image: '/images/monsthing/parapluie.png'
  },
  {
    id: uuidv4(),
    name: 'Inutilisac',
    types: ['plastique', 'rangement'],
    description: 'Un sac qui contient toujours exactement ce dont vous n\'avez pas besoin. Il a un talent particulier pour cacher vos clés quand vous êtes pressé.',
    image: '/images/monsthing/sac.png'
  }
]; 