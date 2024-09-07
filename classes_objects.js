class Rectangle {
  constructor(largeur, longeur) {
    this.largeur = largeur;
    this.longeur = longeur;
  }

  air() {
    return this.largeur * this.longeur;
  }
}

class Carre extends Rectangle {
  constructor(largeur) {
    super(largeur, largeur);
  }
}

const monCarre = new Carre(12);
console.log(monCarre.air());

// -----------------------------------------------
class Personne {
  constructor(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
  }

  nomComplet() {
    return this.prenom + " " + this.nom;
  }
}

class Employee extends Personne {
  constructor(prenom, nom, salaire) {
    super(prenom, nom);
    this.salaire = salaire;
  }

  gagneParAn() {
    return 12 * this.salaire;
  }
}

class Cadre extends Employee {
  constructor(prenom, nom, salaire) {
    super(prenom, nom, salaire);
  }

  statut() {
    return 'Cadre'
  }
}

const julie = new Cadre("Julie", "LACRESSE", 2000);
console.log(`${julie.nomComplet()} gagne ${julie.gagneParAn()}€ par an et est ${julie.statut()}`);
