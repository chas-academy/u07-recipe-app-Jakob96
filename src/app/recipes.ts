//Interface generated with http://json2ts.com

export interface Recipies {
    q:     string;
    from:  number;
    to:    number;
    more:  boolean;
    count: number;
    hits:  Hit[];
}

interface Hit {
    recipe:     Recipe;
    bookmarked: boolean;
    bought:     boolean;
}

interface Recipe {
    uri:             string;
    label:           string;
    image:           string;
    source:          string;
    url:             string;
    shareAs:         string;
    yield:           number;
    dietLabels:      string[];
    healthLabels:    string[];
    cautions:        string[];
    ingredientLines: string[];
    ingredients:     Ingredient[];
    calories:        number;
    totalWeight:     number;
    totalTime:       number;
    cuisineType:     string[];
    mealType:        string[];
    dishType:        string[];
    totalNutrients:  { [key: string]: Total };
    totalDaily:      { [key: string]: Total };
    digest:          Digest[];
}

interface Digest {
    label:        string;
    tag:          string;
    schemaOrgTag: null | string;
    total:        number;
    hasRDI:       boolean;
    daily:        number;
    unit:         Unit;
    sub?:         Digest[];
}

enum Unit {
    Empty = "%",
    G = "g",
    Kcal = "kcal",
    Mg = "mg",
    Μg = "µg",
}

interface Ingredient {
    text:         string;
    weight:       number;
    foodCategory: string;
    foodId:       string;
    image:        string;
}

interface Total {
    label:    string;
    quantity: number;
    unit:     Unit;
}