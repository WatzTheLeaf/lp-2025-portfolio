<script setup lang="ts">
import { onMounted, ref } from 'vue'
import papI from '../assets/portfolio-AP.jpg'
import univI from '../assets/univ.jpg'
import bortechI from '../assets/borealis-tech.jpg'
import borgameI from '../assets/borealis-game.jpg'
import islefrontI from '../assets/isle_front.jpg'
import islebiomeI from '../assets/isle_biomes.jpg'

interface ProjectItem {
    image: string
    category: string
    title: string
    buttonText: string
    keypoints: string[]
    sections: ProjectSection[]
    role: string
}

interface ProjectSection {
    type: 'text-image' | 'image-text' | 'p'
    title: string
    text: string
    image: string
}

const portfolioItems = ref<ProjectItem[]>([
    {
        image: islefrontI,
        category: "Démonstrations",
        title: "Éditeur d'îles flottantes",
        buttonText: "Voir +",
        keypoints: ["Unreal Engine 5", "Custom Editor Mode", "Compute Shader HLSL", "Génération procédurale", "En cours de développement"],
        sections: [
            {
                type: "p",
                image: "",
                text: "J'ai commencé ce projet avec pour objectif de me confronter à des parties <b>plus avancées</b> du développement avec Unreal Engine 5, tout en travaillant le <b>développement d'outils</b>. L'objectif final est de proposer un mode éditeur custom, permettant la création d'un niveau rempli d'îles flottantes procédurales, de leur assigner un biome, et de générer leur décoration. D'un point de vue purement technique, je veux travailler avec les extensions d'éditeur, les <b>compute shaders</b>, les <b>meshs procéduraux</b>, et <b>Unreal PCG</b>. Le tout est empaqueté dans un plugin.",
                title: "Le but du projet"
            },
            {
                type: 'text-image',
                image: islefrontI,
                text: "La première étape consiste à créer un <b>mode éditeur personnalisé</b> permettant de générer les îles, ainsi que l'acteur représentant une île, <b>généré procéduralement</b> en se basant sur des paramètres donnés. Le but est de rendre le tout le plus simple possible, pour permettre à n'importe qui d'utiliser l'outil. L'outil prend lui aussi des paramètres afin de définir la taille de la carte par exemple.",
                title: "Le Mode Editeur Custom"
            },
            {
                type: "image-text",
                image: islebiomeI,
                text: "Dans un second temps, on utilise un <b>compute shader</b> pour générer un bruit de <b>Voronoi custom</b>, selon des paramètres voulus. On utilisera ensuite une mise à l'échelle de cette texture sur le niveau pour <b>déterminer le biome</b> de chaque île. Une fois le biome assigné, on pourra passer à l'étape suivante, la génération avec Unreal PCG.",
                title: "La génération des biomes"
            },
            {
                type:  "p",
                image: "",
                text: "Je travaille actuellement sur ce projet, les prochaines parties et des améliorations des existantes arriveront bientôt !",
                title: "À suivre ..."
            }
        ],
        role: "Programmeur (Tool)"
    },
    {
        image: "https://img.itch.zone/aW1nLzIwMTEwMDc3LnBuZw==/315x250%23c/gsWjDJ.png",
        category: "Jams",
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
        role: "Artiste & Programmeur"
    },
    {
        image: "https://img.itch.zone/aW1nLzE5NzUwNTk1LnBuZw==/original/ugzNc%2B.png",
        category: "Projets d'étude",
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
        role: "Programmeur"
    }
])
const selectedCategory = ref<string>('All')
const uniqueCategories = ref<string[]>([])
const filteredItems = ref<ProjectItem[]>([])

// Extract unique categories from items
onMounted(() => {
    uniqueCategories.value = Array.from(new Set(portfolioItems.value.map((item) => item.category)))
    filterItems()
})

const selectCategory = (category: string) => {
    selectedCategory.value = category
    filterItems()
}

const filterItems = () => {
    if (selectedCategory.value === 'All') {
        filteredItems.value = portfolioItems.value
    } else {
        filteredItems.value = portfolioItems.value.filter(
            (item) => item.category === selectedCategory.value
        )
    }
}
</script>

<template>
    <section class="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <!-- Projects Section -->
        <div class="container mx-auto mb-20 lg:mb-32 shadow-lg p-8 dark:bg-slate-800 rounded-2xl">
            <!-- Projects Header -->
            <div class="text-center max-w-2xl mx-auto mb-12">
                <h2 class="text-slate-900 dark:text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight transition-colors duration-300">
                    {{$t('text.recent_projects')}}
                </h2>
                <p class="text-slate-600 dark:text-slate-400 text-base sm:text-lg transition-colors duration-300">
                    {{ $t('text.recent_projects_desc') }}
                </p>
            </div>
            
            <!-- Category Filter -->
            <div v-if="portfolioItems.length > 0" class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
                <button
                    v-for="category in ['All', ...uniqueCategories]"
                    :key="category"
                    @click="selectCategory(category)"
                    :class="{
                        'bg-blue-600 text-white shadow-lg': selectedCategory === category,
                        'text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700': selectedCategory !== category
                    }"
                    class="px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-200 transform hover:scale-105"
                >
                    {{ category }}
                </button>
            </div>

            <div v-else class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
                <p class="text-slate-600 dark:text-slate-300 text-base sm:text-xl leading-relaxed transition-colors duration-300">{{ $t('text.project_not_found') }}</p>
            </div>
            
            <!-- Portfolio Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
                <div v-for="item in filteredItems" :key="item.title" class="group">
                    <div class="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg dark:shadow-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl">
                        <div class="overflow-hidden">
                            <img 
                                :src="item.image" 
                                :alt="item.title"
                                class="w-full h-48 sm:h-56 object-cover transition-transform duration-300" 
                            />
                        </div>
                        <div class="p-6 sm:p-8">
                            <span class="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wide transition-colors duration-300">
                                {{ item.role }}
                            </span>
                            <h3 class="text-slate-900 dark:text-white text-xl sm:text-2xl font-bold mt-2 mb-4 transition-colors duration-300">
                                {{ item.title }}
                            </h3>
                            <ul class="space-y-1 mb-4">
                                <li v-for="point in item.keypoints" :key="point" class="text-slate-600 dark:text-slate-400 text-md transition-colors duration-300">
                                    • {{ point }}
                                </li>
                            </ul>
                            <button
                                @click="$emit('change-view', 'Details', item)"
                                class="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white border border-slate-200 dark:border-slate-600 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                            >
                                {{ item.buttonText }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- About Me Section -->
        <div class="container mx-auto">
            <div class="bg-white dark:bg-slate-800 p-8 sm:p-12 lg:p-16 rounded-2xl shadow-lg dark:shadow-2xl transition-all duration-300">
                <!-- About Me Highlight -->
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <div class="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6 rounded-full"></div>
                    <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300">
                        {{$t('text.about_me')}}
                    </h2>
                    <p class="text-slate-600 dark:text-slate-300 text-base sm:text-xl leading-relaxed transition-colors duration-300">
                        {{$t('text.about_me_desc')}}
                    </p>
                    <div class="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-6 rounded-full"></div>
                </div>
                
                <!-- About Me Content - Text + Image -->
                <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16">
                    <div class="lg:w-1/2 space-y-4">
                        <h2 class="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                            {{$t('text.from_passion')}}
                        </h2>
                        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-xl transition-colors duration-300">
                            {{$t('text.from_passion_desc')}}
                        </p>
                    </div>
                    <div class="lg:w-1/2">
                        <img 
                            class="rounded-xl shadow-lg w-full h-auto sm:h-80 sm:object-cover transition-transform duration-300 hover:scale-105" 
                            v-bind:src="papI"
                            alt="About me image"
                        >
                    </div>
                </div>
                
                <!-- About Me Content - Image + Text (Reversed) -->
                <div class="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 mb-16">
                    <div class="lg:w-1/2 space-y-4">
                        <h2 class="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                            {{$t('text.to_school')}}
                        </h2>
                        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-xl transition-colors duration-300">
                            {{$t('text.to_school_desc')}}
                        </p>
                    </div>
                    <div class="lg:w-1/2">
                        <img 
                            class="rounded-xl shadow-lg w-full h-auto sm:h-80 sm:object-cover transition-transform duration-300 hover:scale-105" 
                            v-bind:src="univI"
                            alt="About me image"
                        >
                    </div>
                </div>

                <!-- About Me Content - Outro -->
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                        {{$t('text.and_more')}}
                    </h2>
                    <p class="text-slate-600 dark:text-slate-300 text-base sm:text-xl leading-relaxed transition-colors duration-300">
                        {{$t('text.and_more_desc')}}
                    </p>
                    <div class="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-6 rounded-full"></div>
                </div>

                <!-- About Me Contact Section -->
                <div class="text-center max-w-3xl mx-auto">
                    
                    <!-- Contact Icons -->
                    <div class="flex flex-wrap justify-center gap-8 p-8 mb-8 rounded-2xl items-center border-2 border-blue-600 dark:border-blue-400">

                        <h2 class="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
                            Contact: 
                        </h2>

                        <!-- Mail Icon -->
                        <a href="mailto:pinaud-l@proton.me"
                        class="text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110 bg-blue-600 dark:bg-blue-400 rounded-xl p-2"
                        aria-label="Send me an email">
                            <image src="/mail-pencil.svg" class="h-16 w-16"/>
                        </a>

                        <!-- LinkedIn Icon -->
                        <a href="https://www.linkedin.com/in/louis-pinaud" target="_blank" rel="noopener" 
                        class="text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-110 bg-blue-600 dark:bg-blue-400 rounded-xl p-2"
                        aria-label="Profil LinkedIn">
                            <image src="/linkedin.svg" class="h-16 w-16"/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>