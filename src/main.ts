import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'

const userLang = navigator.language || navigator.language
console.log(userLang)
//const locale = userLang.startsWith('fr') ? 'fr' : 'en'

const i18n = createI18n({
    locale: /*locale*/ 'fr',
    fallbackLocale: 'fr',
    messages: {
        en:{
            button:{
                continue: "Continue"
            },
            text: {
                
            }
        },
        fr:{
            button:{
                continue: "Accéder"
            },
            text: {
                portfolio: "Portfolio de développeur",
                name: "Louis \"Watz\" PINAUD",
                from_passion: "De la passion ...",
                from_passion_desc: "Quand on est passionné de jeu vidéo, comme moi, il y a des chances accrues que l'on se dise un jour, au cours d'une partie : \" Tiens ! Tout ça pourrait être encore plus fun avec cette idée en plus ! \" C'est de cette façon que j'ai fait mes premiers pas à 15 ans dans le domaine du jeu, et même dans le développement en général. Cela a, plus encore, été mon seul moyen d'expression créative pendant quelques années, et je ne l'échangerai pour rien au monde. J'ai passé pas mal de temps à découvrir ce nouvel univers, avec pour rêve d'en faire mon métier. De projet en projet, je continue aujourd'hui à explorer différents aspects du jeu vidéo.",
                to_school: "... à l'université ...",
                to_school_desc: "C'est avec ces idées en tête que j'ai choisi et effectué mes études supérieures. J'ai ainsi été diplômé d'un B.U.T. (Bac+3) Informatique français et d'un Baccalauréat en développement de jeux vidéo (Eq Bac+3) de l'Université du Québec en 2025. En plus d'une expérience internationale, cela a été l'occasion pour moi d'apprendre plus amplement à développer avec des moteurs ou encore de comprendre la conception d'un jeu. Plus encore, les projets réalisés durant mes études constituent une première base d'expérience sérieuse de travail en équipe de développement de jeux.",
                about_me: "Qui suis-je ?",
                project_not_found: "Aucun projet trouvé.",
                recent_projects: "Projets Actuels",
                recent_projects_desc: "Retrouvez ici les projets sur lesquels j'ai récemment travaillé. Pour en apprendre plus sur moi, c'est à la section suivante.",
                and_more: "... et plus ?",
                and_more_desc: "Actuellement, je suis à la recherche d'un emploi en tant que développeur junior dans le domaine du jeu. Si vous lisez ces lignes, il y a des chances que vous travailliez vous-même dans ce domaine. Si mon profil vous intéresse, je serais ravi d'échanger avec vous selon vos disponibilités.",
                about_me_desc: "Je m'appelle Louis. Je suis passionné de jeu vidéo depuis l'enfance, et ça ne m'est jamais passé ! De mes premiers pas dans le modding sur Minecraft jusqu'à aujourd'hui, je n'ai cessé de me rapprocher de mon objectif : pouvoir un jour travailler dans le jeu vidéo. Et oui, je suis plus motivé que jamais !",
                back_to_portfolio: "← Retour au Portfolio",
                proj_not_found: "Project introuvable."
            }
        }
    }
})
createApp(App).use(i18n).mount('#app')