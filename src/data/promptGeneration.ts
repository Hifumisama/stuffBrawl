import { 
  MonsTruc, 
  MonsTrucType, 
  MonsTrucRarity, 
  PROMPT_TEMPLATES,
  EFFECTS_BY_TYPE,
  EXPRESSIONS_BY_TYPE,
  COLORS_BY_TYPE,
  TEXTURES_BY_TYPE,
  TYPE_COMBO_EFFECTS 
} from './monsTrucs';

/**
 * Interface pour les options d'ajustement des prompts
 */
export interface PromptEditorOptions {
  objectEmphasis: number; // 1.0 - 2.0
  cutenessLevel: number; // 1 - 10
  dynamicEffects: number; // 1 - 10
  colorSaturation: number; // 1 - 10
  backgroundComplexity: number; // 1 - 5
}

/**
 * Interface pour le résultat des prompts générés
 */
export interface SDXLPrompt {
  positive: string;
  negative: string;
}

/**
 * Interface pour les résultats de la traduction par LLM
 */
export interface LLMTranslationResult {
  translatedDescription: string;
  extractedObject: string;
}

/**
 * Interface pour les options d'appel au LLM
 */
export interface LLMOptions {
  apiKey?: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
}

/**
 * Classe pour la génération de prompts SDXL à partir de MonsTrucs
 */
export class PromptGenerator {
  private readonly negativeFeedback = "photorealistic, 3D, blurry, low quality, dark background, complex background, realistic textures, too human-like, scary, creepy";

  /**
   * Obtient des poids dynamiques basés sur les stats
   */
  private getDynamicWeights(monsTruc: MonsTruc) {
    return {
      objectWeight: 1.7 + (monsTruc.rarity === 'légendaire' ? 0.2 : monsTruc.rarity === 'épique' ? 0.1 : 0),
      // Plus la vitesse est élevée, plus l'objet est "dynamique"
      dynamicEffectWeight: 1.0 + (monsTruc.stats.speed / 100 * 0.5),
      // Plus l'attaque est élevée, plus les effets sont intenses
      effectIntensity: 1.0 + (monsTruc.stats.attack / 100 * 0.5)
    };
  }

  /**
   * Obtient la description des stats en fonction des valeurs
   */
  private getStatDescription(stats: MonsTruc['stats']): string {
    if (stats.attack > 80 && stats.defense < 50) return "strong attacks with fragile body";
    if (stats.hp > 100 && stats.attack < 50) return "extremely durable with weak attacks";
    if (stats.speed > 80) return "very fast with fragile body";
    if (stats.defense > 70 && stats.speed < 30) return "very durable but slow";
    return "balanced fighter";
  }

  /**
   * Obtient la description des yeux en fonction des types
   */
  private getEyesDescription(types: MonsTrucType[]): string {
    // Trouver le type principal
    const mainType = types[0];
    const eyesList = EXPRESSIONS_BY_TYPE[mainType] || ["expressive", "curious", "playful"];
    
    return eyesList[Math.floor(Math.random() * eyesList.length)] + " eyes";
  }

  /**
   * Obtient l'expression en fonction des types
   */
  private getExpressionFromTypes(types: MonsTrucType[]): string {
    const expressionsByType: Record<MonsTrucType, string[]> = {
      feu: ["intense", "passionate", "lively"],
      glace: ["cool", "calm", "reserved"],
      électrique: ["energetic", "shocked", "vibrant"],
      terre: ["grounded", "stable", "natural"],
      vol: ["free", "airy", "soaring"],
      acier: ["stern", "solid", "industrial"],
      eau: ["fluid", "refreshing", "flowing"],
      plante: ["lively", "blooming", "natural"],
      spectre: ["mysterious", "eerie", "unsettling"]
    };
    
    // Prendre l'expression du premier type
    const type = types[0];
    const expressions = expressionsByType[type] || ["playful", "cute", "friendly"];
    
    return expressions[Math.floor(Math.random() * expressions.length)];
  }

  /**
   * Obtient les couleurs en fonction des types
   */
  private getColorsFromTypes(types: MonsTrucType[]): string {
    const mainType = types[0];
    const colorsList = COLORS_BY_TYPE[mainType] || ["vibrant colors", "bright patterns", "colorful designs"];
    
    return colorsList[Math.floor(Math.random() * colorsList.length)];
  }

  /**
   * Obtient la texture en fonction des types
   */
  private getTextureFromTypes(types: MonsTrucType[]): string {
    const mainType = types[0];
    const texturesList = TEXTURES_BY_TYPE[mainType] || ["smooth texture", "detailed surface", "pixel texture"];
    
    return texturesList[Math.floor(Math.random() * texturesList.length)];
  }

  /**
   * Obtient des effets spéciaux combinés pour certaines paires de types
   */
  private getSpecialComboEffects(types: MonsTrucType[]): string[] {
    // Chercher si des combinaisons existent entre les types
    for (const combo in TYPE_COMBO_EFFECTS) {
      const comboTypes = combo.split('+') as MonsTrucType[];
      if (comboTypes.every(t => types.includes(t))) {
        return TYPE_COMBO_EFFECTS[combo];
      }
    }
    return [];
  }

  /**
   * Génère les effets en fonction des types et de la rareté
   */
  private getEffects(types: MonsTrucType[], rarity: MonsTrucRarity): string[] {
    const numEffects = PROMPT_TEMPLATES[rarity].effects;
    let allEffects: string[] = [];
    
    // Ajouter des effets spéciaux de combinaison si disponibles
    const comboEffects = this.getSpecialComboEffects(types);
    if (comboEffects.length > 0) {
      allEffects.push(...comboEffects);
    }
    
    // Ajouter des effets pour chaque type
    types.forEach(type => {
      if (EFFECTS_BY_TYPE[type]) {
        allEffects.push(...EFFECTS_BY_TYPE[type]);
      }
    });
    
    // Si pas assez d'effets, ajouter des génériques
    const genericEffects = ["magical sparkles", "floating particles", "glowing aura"];
    if (allEffects.length < numEffects) {
      allEffects.push(...genericEffects);
    }
    
    // Mélanger les effets pour plus de variété
    allEffects = this.shuffleArray(allEffects);
    
    // Sélectionner le nombre d'effets requis
    return allEffects.slice(0, numEffects);
  }

  /**
   * Mélange un tableau (algorithme de Fisher-Yates)
   */
  private shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  /**
   * Traduit une description et extrait l'objet en utilisant un LLM
   * Cette fonction est asynchrone et doit être implémentée avec le LLM de votre choix
   */
  async translateWithLLM(
    description: string, 
    options?: LLMOptions
  ): Promise<LLMTranslationResult> {
    // Cette fonction doit être implémentée avec le LLM de votre choix (OpenAI, Claude, etc.)
    // Exemple de prompt à envoyer au LLM:
    const prompt = `
    Translate the following description from French to English and extract the main object described:
    
    Description: "${description}"
    
    Output in this format:
    {
      "translatedDescription": "English translation here...",
      "extractedObject": "main object name in English"
    }
    `;
    
    // En attendant l'implémentation réelle, on renvoie un résultat fictif
    // IMPORTANT: Remplacer cette partie par un vrai appel à un LLM
    return {
      translatedDescription: "A magical object that has interesting properties",
      extractedObject: "magical object"
    };
  }

  /**
   * Fonction principale pour générer un prompt SDXL
   * en utilisant un LLM pour la traduction et l'extraction d'objet
   */
  async generatePrompt(monsTruc: MonsTruc, llmOptions?: LLMOptions): Promise<SDXLPrompt> {
    // Obtenir le template correspondant à la rareté
    const rarityTemplate = PROMPT_TEMPLATES[monsTruc.rarity];
    
    // Obtenir les paramètres dynamiques
    const weights = this.getDynamicWeights(monsTruc);
    const stats = this.getStatDescription(monsTruc.stats);
    const eyes = this.getEyesDescription(monsTruc.types);
    const expression = this.getExpressionFromTypes(monsTruc.types);
    const colors = this.getColorsFromTypes(monsTruc.types);
    const texture = this.getTextureFromTypes(monsTruc.types);
    const effects = this.getEffects(monsTruc.types, monsTruc.rarity);
    
    // Traduire la description et extraire l'objet avec un LLM
    const llmResult = await this.translateWithLLM(monsTruc.description, llmOptions);
    
    // Remplir le template
    let positivePrompt = rarityTemplate.positive
      .replace("{{object}}", llmResult.extractedObject)
      .replace("{{objectWeight}}", weights.objectWeight.toFixed(1))
      .replace("{{stats}}", stats)
      .replace("{{eyes}}", eyes)
      .replace("{{expression}}", expression)
      .replace("{{colors}}", colors)
      .replace("{{texture}}", texture || "detailed texture")
      .replace("{{description}}", llmResult.translatedDescription);
    
    // Remplacer les effets
    for (let i = 1; i <= rarityTemplate.effects; i++) {
      positivePrompt = positivePrompt.replace(`{{effect${i}}}`, effects[i-1] || "magical sparkles");
    }
    
    return {
      positive: positivePrompt,
      negative: this.negativeFeedback
    };
  }

  /**
   * Crée un prompt prêt à être utilisé avec Stable Diffusion XL
   */
  async createPromptString(monsTruc: MonsTruc, llmOptions?: LLMOptions): Promise<string> {
    const prompt = await this.generatePrompt(monsTruc, llmOptions);
    return prompt.positive;
  }
}

export default new PromptGenerator(); 