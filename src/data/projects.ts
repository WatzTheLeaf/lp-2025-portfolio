import type { ProjectItem } from "../types/project-item";

import bortechI from '../assets/borealis-tech.jpg'
import borgameI from '../assets/borealis-game.jpg'
import islefrontI from '../assets/isle_front.jpg'
import islebiomeI from '../assets/isle_biomes.jpg'
import islefrontbiome from '../assets/isle_biomes_editor.jpg'

export const projects: ProjectItem[] = [
    {
        image: islefrontI,
        category: "Jeux vidéo",
        title: "Éditeur d'îles flottantes",
        buttonText: "Voir +",
        keypoints: ["Unreal Engine 5", "Custom Editor Mode", "Compute Shader", "Génération procédurale"],
        sections: [
            {
                type: "p",
                image: "",
                text: "J'ai commencé ce projet pour me confronter à des parties <b>plus avancées</b> du développement avec Unreal Engine 5, tout en travaillant le <b>développement d'outils</b>. L'objectif est de proposer un mode éditeur custom, permettant la création d'un niveau rempli d'îles flottantes procédurales, et de leur assigner un biome sous forme de tag. D'un point de vue purement technique, je veux travailler avec les <b>extensions d'éditeur</b>, les <b>compute shaders</b>, et les <b>meshs procéduraux</b>. Le tout est empaqueté dans un plugin disponible sur <a href='https://github.com/WatzTheLeaf/IslesGenPlugin'>GitHub</a>.",
                title: "Le but du projet"
            },
            {
                type: 'text-image',
                image: islefrontbiome,
                text: "La première étape consiste à créer un <b>mode éditeur personnalisé</b> permettant de générer les îles, ainsi que l'acteur représentant une île, <b>généré procéduralement</b> en se basant sur des paramètres donnés. Le but est de rendre le tout le plus simple possible, pour permettre à n'importe qui d'utiliser l'outil. L'outil prend lui aussi des paramètres afin de définir la taille de la carte par exemple.",
                title: "Le Mode Editeur Custom"
            },
            {
                type: "image-text",
                image: islebiomeI,
                text: "Dans un second temps, on utilise un <b>compute shader</b> pour générer un bruit de <b>Voronoi custom</b>, selon des paramètres voulus. On utilisera ensuite une mise à l'échelle de cette texture sur le niveau pour <b>déterminer le biome</b> de chaque île. Un second menu permet de visualiser et assigner les biomes en fonction de la texture créée.",
                title: "La génération des biomes"
            },
            {
                type:  "p",
                image: "",
                text: "À partir de ce point, une carte formée de meshs est générée et il est possible de l'utiliser comme bon nous semble. On peut, par exemple, convertir les meshs en version statique et les décorer avec Unreal PCG. L'outil permet de générer beaucoup d'îles en même temps, ce qui permet de gagner du temps tout en gardant le contrôle de la génération.",
                title: ""
            }
        ],
        role: "Programmeur (Tool)",
        linktext: "Source",
        link: "https://github.com/WatzTheLeaf/IslesGenPlugin"
    },
    {
        image: "https://img.itch.zone/aW1nLzIwMTEwMDc3LnBuZw==/315x250%23c/gsWjDJ.png",
        category: "Jeux vidéo",
        title: "WonderJam - Soundbound",
        buttonText: "Voir +",
        keypoints: ["Unreal Engine", "Travail d'équipe", "Jouable"],
        sections: [
            {
                type: "p",
                title: "Wonderjam d'hiver 2025",
                text: "La Wonderjam a lieu 2 fois par an à l'Université du Québec à Chicoutimi. En 48h, les équipes de 7 personnes maximum doivent créer un jeu selon un thème commun et 3 contraintes tirées au sort. Le classement est déterminé par un jury mixte formé en partie de professionnels du secteur.",
                image: ""
            },
            {
                type: "text-image",
                title: "SoundBound",
                text: "Je participe avec 5 équipiers à la WonderJam d'Hiver 2025 sur le thème général \" Frontières \". Nos trois contraintes évoquent un jeu de musique, avec des éléments de personnalisation et du crafting. Nous avons conçu le jeu comme un mélange entre un Idle Game et un jeu de rythme. Le jeu est <a href='https://oridoshi.itch.io/soundboundwdjh2025'>en ligne sur itch.io</a>. Sur 20 jeux en concours, nous obtenons une <b>4e place</b> et une <b>mention honorable</b>.",
                image: "https://img.itch.zone/aW1nLzIwMTEwMDc3LnBuZw==/315x250%23c/gsWjDJ.png"
            },
            {
                type: "image-text",
                title: "L'expérience",
                text: "Durant la création de ce jeu, j'ai deux tâches principales à remplir : je suis en charge de la création de la majorité des <b>assets 3D</b> et de <b>l'assemblage</b>, surtout entre l'UI et le reste du jeu. C'est un défi pour l'équipe, car nous sommes tous des programmeurs en formation, mais nous tenons à produire tous les éléments du jeu nous-même. Pour ma part, c'est l'occasion d'explorer une partie plus artistique que j'ai moins l'habitude de pratiquer. J'interviens également sur la partie <b>gameplay</b> durant le relais nocturne de l'équipe.",
                image: "https://img.itch.zone/aW1hZ2UvMzM2Nzc1Mi8yMDEwOTYxOS5wbmc=/original/nf%2BzOH.png"
            }
        ],
        role: "Artiste & Programmeur",
        linktext: "Essayer",
        link: "https://oridoshi.itch.io/soundboundwdjh2025"
    },
    {
        image: "https://img.itch.zone/aW1nLzE5NzUwNTk1LnBuZw==/original/ugzNc%2B.png",
        category: "Jeux vidéo",
        title: "Borealis",
        buttonText: "Voir +",
        keypoints: ["Unreal Engine", "Travail en équipe pluridisciplinaire", "Prototype jouable"],
        sections: [
            {
                type: "text-image",
                title: "Pourquoi ce projet ?",
                image: borgameI,
                text: "Mon année d'étude au Québec comportait un projet réalisé en équipe comprenant des artistes étudiants au NAD UQAC et des étudiants programmeurs du DIM UQAC (dont je fais partie). \" Borealis \" est un prototype résultant de ce travail réalisé sous l'encadrement de professionnels et d'enseignants. Celui-ci est téléchargeable depuis <a href='https://tomdouaud.itch.io/borealis'> sa page itchio</a>."
            },
            {
                type: "p",
                title: "Mon rôle (1ère partie)",
                image: "",
                text: "Dans un premier temps, je suis amené à <b>développer des mécaniques de gameplay</b> que l'ensemble des membres ont validées en réunion. Je suis surtout en charge de l'implémentation des plateformes et des portes. À mon arrivée, un peu de code blueprint existait, qu'il m'a fallu <b>traduire en C++, nettoyer et optimiser</b>."
            },
            {
                type: "text-image",
                title: "Mon rôle (2ème partie)",
                image: bortechI,
                text: "Dans un second temps, alors que le projet avance, nous sommes contraints de <b>réorganiser le fonctionnement de l'équipe</b> suite à certaines difficultés. Mon <b>nouveau rôle</b> est beaucoup plus général, et comprend la responsabilité des <b>builds</b>. Je réalise une partie de l'<b>intégration</b>, la <b>détection</b> et <b>correction des bugs</b> et des <b>problèmes d'optimisation</b>. Je suis également en charge d'assurer le <b>support</b> et la <b>communication avec les artistes</b> au besoin."
            }
        ],
        role: "Programmeur",
        linktext: "Essayer",
        link: "https://tomdouaud.itch.io/borealis"
    }
]