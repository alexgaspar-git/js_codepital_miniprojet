// # Bienvenu à Codepital:
// >Dans cet exercice nous aurons des malades qui iront ce faire débuger chez un doctor. Le doctor les diagnostiquera et leur préscrira un remède. Par la suite les malades irons à la pharmacie afin d'acheter leur remède puis le prendrons et seront guérri.
// ​
// ## Description des patients
// >les malades ont un nom, une maladie, de l'argent, une poche, un état de santé,ils savent aller à un endroit, prendre un médicamment et payer. Au début, les patients sont dans un salle d'attente. 
// ​
// |nom|maladie|argent|poche|etatSante|traitement|goTo|takeCare|paye|
// |---|---|---|---|---|---|---|---|---|
// |Marcus|mal indenté|100|vide|malade
// |Optimus|unsave|200|vide|malade
// |Sangoku|404|80|vide|malade
// |DarthVader|azmatique|110|vide|malade
// |Semicolon|syntaxError|60|vide|malade
// ​

class Patient {
    constructor (nom, maladie, argent, poche, etat) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etat = etat;
        this.traitement = () => {
        };
        this.goTo = (x) => {
            x.personnes.push(this);
            console.log(`${this.nom} est allé à ${x.nom}`);
        };
        this.prendreMedoc = () => {
        };
    }
}


let marcus = new Patient ("Marcus", "mal indenté", 100, "vide", "malade")
let optimus = new Patient ("Optimus", "unsave", 200, "vide", "malade")
let sangoku = new Patient ("Sangoku", "404", 80, "vide", "malade")
let darthVader = new Patient ("DarthVader", "azmatique", 110, "vide", "malade")
let semicolon = new Patient ("Semicolon", "synthaxError", 60, "vide", "malade")

let pharmacie = {
    nom: "Pharmasisi la famille",
    personnes: [],
    ctrl_maj_f: 60,
    saveOnFocusChange: 100,
    checkLinkRelation: 35,
    ventoline: 40,
    f12_doc: 20,
}

let cimetiere = [];
let ksaara = [];

// ## Description du doctor
// >Le doctor lui reçoit les patients dans son cabinet. Tout d'abord il les diagnostiques puis se fait payer avant de préscrire un traitement. Attention le doctor fait à chaque fois sortir le patient de son cabinet avant de prendre le suivant. Dans son cabinet il y a son chat de race sphynx pour garder un environemment stérile. Son chat miaule toutes les deux secondes dans la console(bonus). La consultation coûte 50€. Les patients son dans un état de traitement avant de sortir du cabinet.

let doctor = {
    nom: "Hugues",
    argent: 1000,
    cabinet: [chat = {
        nom: "m'nou",
        race: "sphynx",
        miauler() {
            setInterval(() => {
                console.log(`${this.nom} fait miaou`);
            }, 2000);
        },
    },],
    diagnostique() {
        if (this.cabinet.length == 2) {
            switch (this.cabinet[1].maladie) {
                case "mal indenté":
                    console.log(`La maladie de ${this.cabinet[1].nom} est ${this.cabinet[1].maladie}`);
                    console.log(`Le traitement de ${this.cabinet[1].nom} est ctrl+maj+f`);
                    this.cabinet[1].traitement = () => {
                        if (pharmacie.ctrl_maj_f <= this.cabinet[1].argent) {
                            this.cabinet[1].argent -= pharmacie.ctrl_maj_f
                            console.log(`${this.cabinet[1].nom} à acheté son médoc`)
                            this.cabinet[1].poche = "ctrl+maj+f";
                        } else if (pharmacie.ctrl_maj_f > this.cabinet[1].argent) {
                            console.log(`${this.cabinet[1].nom} est trop pauvre`);
                        }
                    }
                    this.cabinet[1].prendreMedoc = () => {
                        if (this.cabinet[1].poche == "vide") {
                            this.etat = "mort";
                            console.log(`${this.cabinet[1].nom} meurt`);
                            cimetiere.push(this.cabinet[1]);
                        } else {
                            this.etat = "gueri";
                            console.log(`${this.cabinet[1].nom} prend son ${this.cabinet[1].poche} et est désormais guérit! Il fait la fête.`);
                            ksaara.push(this.cabinet[1]);
                        }
                    };
                    this.cabinet[1].argent -= 50;
                    console.log(`${this.cabinet[1].nom} à payé le docteur`);
                    console.log(`${this.cabinet[1].nom} à ${this.cabinet[1].argent} euros actuellement`);
                    console.log(`${this.cabinet[1].nom} à quitté le cabinet`);
                    this.cabinet[1].goTo(pharmacie);
                    this.cabinet[1].traitement();
                    this.cabinet[1].prendreMedoc();
                    this.cabinet.splice(1, 1);
                    this.diagnostique();
                    break;
                case "unsave":
                    console.log(`La maladie de ${this.cabinet[1].nom} est ${this.cabinet[1].maladie}`);
                    console.log(`Le traitement de ${this.cabinet[1].nom} est saveOnFocusChange`);
                    this.cabinet[1].traitement = () => {
                        if (pharmacie.saveOnFocusChange <= this.cabinet[1].argent) {
                            this.cabinet[1].argent -= pharmacie.saveOnFocusChange
                            console.log(`${this.cabinet[1].nom} à acheté son médoc`)
                            this.cabinet[1].poche = "saveOnFocusChange";
                        } else if (pharmacie.saveOnFocusChange > this.cabinet[1].argent) {
                            console.log(`${this.cabinet[1].nom} est trop pauvre`);
                        }
                    };
                    this.cabinet[1].prendreMedoc = () => {
                        if (this.cabinet[1].poche == "vide") {
                            this.etat = "mort";
                            console.log(`${this.cabinet[1].nom} meurt`);
                            cimetiere.push(this.cabinet[1]);
                        } else {
                            this.etat = "gueri";
                            console.log(`${this.cabinet[1].nom} prend son ${this.cabinet[1].poche} et est désormais guérit! Il fait la fête.`);
                            ksaara.push(this.cabinet[1]);
                        }
                    };
                    this.cabinet[1].argent -= 50;
                    console.log(`${this.cabinet[1].nom} à payé le docteur`);
                    console.log(`${this.cabinet[1].nom} à ${this.cabinet[1].argent} euros actuellement`);
                    console.log(`${this.cabinet[1].nom} à quitté le cabinet`);
                    this.cabinet[1].goTo(pharmacie);
                    this.cabinet[1].traitement();
                    this.cabinet[1].prendreMedoc();
                    this.cabinet.splice(1, 1);
                    this.diagnostique();
                    break;
                case "404":
                    console.log(`La maladie de ${this.cabinet[1].nom} est ${this.cabinet[1].maladie}`);
                    console.log(`Le traitement de ${this.cabinet[1].nom} est checkLinkRelation`);
                    this.cabinet[1].traitement = () => {
                        if (pharmacie.saveOnFocusChange <= this.cabinet[1].argent) {
                            this.cabinet[1].argent -= pharmacie.checkLinkRelation
                            console.log(`${this.cabinet[1].nom} à acheté son médoc`)
                            this.cabinet[1].poche = "checkLinkRelation";
                        } else if (pharmacie.saveOnFocusChange > this.cabinet[1].argent) {
                            console.log(`${this.cabinet[1].nom} est trop pauvre`);
                        }
                    };
                    this.cabinet[1].prendreMedoc = () => {
                        if (this.cabinet[1].poche == "vide") {
                            this.etat = "mort";
                            console.log(`${this.cabinet[1].nom} meurt`);
                            cimetiere.push(this.cabinet[1]);
                        } else {
                            this.etat = "gueri";
                            console.log(`${this.cabinet[1].nom} prend son ${this.cabinet[1].poche} et est désormais guérit! Il fait la fête.`);
                            ksaara.push(this.cabinet[1]);
                        }
                    };
                    this.cabinet[1].argent -= 50;
                    console.log(`${this.cabinet[1].nom} à payé le docteur`);
                    console.log(`${this.cabinet[1].nom} à ${this.cabinet[1].argent} euros actuellement`);
                    console.log(`${this.cabinet[1].nom} à quitté le cabinet`);
                    this.cabinet[1].goTo(pharmacie);
                    this.cabinet[1].traitement();
                    this.cabinet[1].prendreMedoc();
                    this.cabinet.splice(1, 1);
                    this.diagnostique();
                    break;
                case "azmatique":
                    console.log(`La maladie de ${this.cabinet[1].nom} est ${this.cabinet[1].maladie}`);
                    console.log(`Le traitement de ${this.cabinet[1].nom} est ventoline`);
                    this.cabinet[1].traitement = () => {
                        if (pharmacie.ventoline <= this.cabinet[1].argent) {
                            this.cabinet[1].argent -= pharmacie.ventoline
                            console.log(`${this.cabinet[1].nom} à acheté son médoc`)
                            this.cabinet[1].poche = "ventoline";
                        } else if (pharmacie.ventoline > this.cabinet[1].argent) {
                            console.log(`${this.cabinet[1].nom} est trop pauvre`);
                        }
                    };
                    this.cabinet[1].prendreMedoc = () => {
                        if (this.cabinet[1].poche == "vide") {
                            this.etat = "mort";
                            console.log(`${this.cabinet[1].nom} meurt`);
                            cimetiere.push(this.cabinet[1]);
                        } else {
                            this.etat = "gueri";
                            console.log(`${this.cabinet[1].nom} prend son ${this.cabinet[1].poche} et est désormais guérit! Il fait la fête.`);
                            ksaara.push(this.cabinet[1]);
                        }
                    };
                    this.cabinet[1].argent -= 50;
                    console.log(`${this.cabinet[1].nom} à payé le docteur`);
                    console.log(`${this.cabinet[1].nom} à ${this.cabinet[1].argent} euros actuellement`);
                    console.log(`${this.cabinet[1].nom} à quitté le cabinet`);
                    this.cabinet[1].goTo(pharmacie);
                    this.cabinet[1].traitement();
                    this.cabinet[1].prendreMedoc();
                    this.cabinet.splice(1, 1);
                    this.diagnostique();
                    break;
                case "synthaxError":
                    console.log(`La maladie de ${this.cabinet[1].nom} est ${this.cabinet[1].maladie}`);
                    console.log(`Le traitement de ${this.cabinet[1].nom} est f12+doc`);
                    this.cabinet[1].traitement = () => {
                        if (pharmacie.f12_doc <= this.cabinet[1].argent) {
                            this.cabinet[1].argent -= pharmacie.f12_doc
                            console.log(`${this.cabinet[1].nom} à acheté son médoc`)
                            this.cabinet[1].poche = "f12+doc";
                        } else if (pharmacie.f12_doc > this.cabinet[1].argent) {
                            console.log(`${this.cabinet[1].nom} est trop pauvre`);
                        }
                    };
                    this.cabinet[1].prendreMedoc = () => {
                        if (this.cabinet[1].poche == "vide") {
                            this.etat = "mort";
                            console.log(`${this.cabinet[1].nom} meurt`);
                            cimetiere.push(this.cabinet[1]);
                        } else {
                            this.etat = "gueri";
                            console.log(`${this.cabinet[1].nom} prend son ${this.cabinet[1].poche} et est désormais guérit! Il fait la fête.`);
                            ksaara.push(this.cabinet[1]);
                        }
                    };
                    this.cabinet[1].argent -= 50;
                    console.log(`${this.cabinet[1].nom} à payé le docteur`);
                    console.log(`${this.cabinet[1].nom} à ${this.cabinet[1].argent} euros actuellement`);
                    console.log(`${this.cabinet[1].nom} à quitté le cabinet`);
                    this.cabinet[1].goTo(pharmacie);
                    this.cabinet[1].traitement();
                    this.cabinet[1].prendreMedoc();
                    this.cabinet.splice(1, 1);
                    this.diagnostique();
                    break;  
                default: 
                    break;
            }
        } else if (this.cabinet.length < 2) {
            if (this.patientIn.length > 0) {
                console.log(`Dans la salle d'attente il y a ${this.patientIn.length} personnes`);
                this.cabinet.push(this.patientIn[0]);
                console.log(`${this.cabinet[1].nom} est rentré dans le cabinet`);
                this.patientIn.splice(0, 1);
                this.diagnostique();
            } else {
                console.log(`le cabinet est fermé`);
            }
        }
    },
    patientIn: [marcus,optimus,sangoku,darthVader,semicolon],
    patientOut: [],
}

doctor.diagnostique();
doctor.cabinet[0].miauler();
console.log(ksaara);
console.log(cimetiere);

// ​
// |nom|argent|cabinet|diagnostique|patienTIn|patientOut
// |---|---|---|---|---|---|
// |Debugger|0|[chat]
// ​
// ### Grille des diagnostiques
// |maladie|traitement|
// |---|---|
// |mal indenté|`ctrl+maj+f`|
// |unsave|`saveOnFocusChange`|
// |404|`CheckLinkRelation`|
// |azmatique|`Ventoline`|
// |syntaxError|`f12+doc`|
// ​
// ## La pharmacie
// >Les patients iront par après à la pharmacie et recevront leur traitement s'ils ont assez d'argent. Dans le cas ou ils ont assez d'argent ils seront alors en bonne santé sinon ils seront mort et il faudra alors les pousser dans un cimetière.



// ​
// ### Tarif des traitements
// |Traitement|prix|
// |---|---|
// |`ctrl+maj+f`|60€
// |`saveOnFocusChange`|100€
// |`CheckLinkRelation`|35€
// |`Ventoline`|40€
// |`f12+doc`|20€
// ​
// # Vérification
// >Grâce à votre débugger suivé à la trace l'évolution de chacun de vos patients. Vérifier bien qu'il quitte à chaque fois la salle d'attente avant d'entrer dans le cabinet et qu'ils sortent bien du cabinet avant de laisser quelqu'un d'autre entré.