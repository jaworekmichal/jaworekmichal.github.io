import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        technologies: [
            {
                name: "s3",
                parent: "aws"
            },
            {
                name: "ec2",
                parent: "aws"
            },
            {
                name: "aws",
                parent: "cloud"
            },
            {
                name: "cloud"
            },
            {
                name: "vuex",
                parent: "vue"
            },
            {
                name: "vue",
                parent: "frontend"
            },
            {
                name: "frontend"
            }

        ],
        projects: [
            {
                name: "technology matrix",
                repo: "https://github.com/jaworekmichal/jaworekmichal.github.io",
                prod: "http://jaworekmichal.github.io",
                description: "This page",
                maturity: "poc", // "idea", "poc", "privateUse", "publicUse",
                technologies: ["vue", "vuex"]
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        modelToDisplay(){
            return {}
        }
    }
})
