import type { ProjectItem } from "../types/project-item";

import bortechI from '../assets/borealis-tech.jpg'
import borgameI from '../assets/borealis-game.jpg'
import islefrontI from '../assets/isle_front.jpg'
import islebiomeI from '../assets/isle_biomes.jpg'
import islefrontbiomeI from '../assets/isle_biomes_editor.jpg'

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
                text: "J'ai commencé ce projet pour comprendre le développement d'outils à l'intérieur d'Unreal 5. L'objectif est de proposer un mode éditeur custom, permettant la création d'un niveau rempli d'îles flottantes procédurales, et de leur assigner un biome sous forme de tag.",
                title: "Le but du projet"
            },
            {
                type: 'text-image',
                image: islefrontbiomeI,
                text: "La première étape consiste à créer un <b>mode éditeur personnalisé</b> permettant de générer les îles, ainsi que l'acteur représentant une île, <b>généré procéduralement</b> en se basant sur des paramètres donnés.",
                title: "Le Mode Editeur Custom"
            },
            {
                type: "image-text",
                image: islebiomeI,
                text: "Dans un second temps, on utilise un <b>compute shader</b> pour générer un bruit de <b>Voronoi custom</b>, selon des paramètres voulus. On utilisera ensuite une mise à l'échelle de cette texture sur le niveau pour <b>déterminer le biome</b> de chaque île.",
                title: "La génération des biomes"
            },
            {
                type:  "p",
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
                text: "Durant la création de ce jeu, j'ai deux tâches principales à remplir : je suis en charge de la création de la majorité des <b>assets 3D</b> et de <b>l'assemblage</b>, surtout entre l'UI et le reste du jeu. C'est un défi pour l'équipe, car tenons à produire tous les éléments du jeu nous-même. C'est l'occasion d'explorer une partie plus artistique que j'ai moins l'habitude de pratiquer.",
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
                text: "Mon année d'étude au Québec comportait un projet réalisé en équipe comprenant des artistes étudiants au NAD UQAC et des étudiants programmeurs du DIM UQAC. \" Borealis \" est un prototype résultant de ce travail. Celui-ci est téléchargeable depuis <a href='https://tomdouaud.itch.io/borealis'> sa page itchio</a>."
            },
            {
                type: "p",
                title: "Gameplay",
                text: "Dans un premier temps, je suis amené à <b>développer des mécaniques de gameplay</b> que l'ensemble des membres ont validées en réunion. Je suis surtout en charge de l'implémentation et l'optimisation des plateformes et des portes."
            },
            {
                type: "text-image",
                title: "Mon rôle (2ème partie)",
                image: bortechI,
                text: "Alors que le projet avance, nous sommes contraints de <b>réorganiser l'équipe</b> suite à certaines difficultés. Je réalise désormais <b>les builds</b>, une partie de l'<b>intégration</b>, la <b>détection</b> et <b>correction des bugs</b> et des <b>problèmes d'optimisation</b>."
            }
        ],
        role: "Programmeur",
        linktext: "Essayer",
        link: "https://tomdouaud.itch.io/borealis"
    }
]