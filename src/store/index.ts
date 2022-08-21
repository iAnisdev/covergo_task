
import { createStore } from 'vuex'
import { countries } from './countries'
import { country, pkg } from './interfaces'
import { packages } from './packages'

export const store = createStore({
    state(){
        return {
            userInfo: {
                name: '',
                age: 0,
                country: {}  as country,
                package: {} as pkg
            },
            countries,
            packages
        }
    },
    getters: {
        getUserInfo(state: any){
            return state.userInfo
        },
        getCountries(state: any){
            return state.countries
        },
        getPackages(state: any){
            return state.packages
        },
    },
    mutations: {
        setUserInfo(state: any, userInfo: any){
            state.userInfo = userInfo
        },
        setCountry(state: any, country: any){
            state.userInfo.country = country
        },
        setPackage(state: any, pkg: any){
            state.userInfo.package = pkg
        },
        setPackages(state: any, packages: any){
            state.packages = packages
        }
    },
    actions:{
        setCountry(context: any, country: any){
            context.commit('setCountry', country)
        },
        setPackage(context: any, pkg: any){
            context.commit('setPackage', pkg)
        },
        updatePackages(context: any){
            const packages = context.state.packages.map((pkg: any) => {
                pkg = {...pkg}
                return {
                    ...pkg,
                    additional_price: pkg.price * pkg.additional / 100 * context.state.userInfo.country.rate
                }
            })
            context.commit('setPackages', packages)
        },
        resetStore(context: any){
            context.commit('setUserInfo', {
                name: '',
                age: 0,
                country: {} as country,
                package: {} as pkg
            })
        }
    }
})