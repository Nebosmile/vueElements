<template>
    <div>   
        <div :class='{"showtree":showtree}' class='show_hide sports' @click='showHide()' >{{options.title}}</div>
        <div v-if='showtree'>
            <div >
                <league  v-for =  "elem in league" :key="elem.id" :leagueobj='elem'></league>
            </div>
        </div>
        
        
    </div>
</template>

<script>

import league from '@/components/league.vue'
export default {
    components: {
        league,
    },
    props:{
        options:Object
    },
    data(){
        return{
            showtree:false,
            league:[//id: 10126, title: "Теніс"
                {"id":970077,"title":"ATP 250","alias":"ATP 250","weight":85,"competitions":
                    [
                        {"id":18755,"title":"Штутґарт, Німеччина","weight":50}
                    ]
                },
                {"id":970083,"title":"WTA Iнтернешнл","alias":"WTA International","weight":56,"competitions":
                    [
                        {"id":19506,"title":"Ноттінгем, Великобританія","weight":50}
                    ]
                },
                {"id":970078,"title":"ATП Челленджер","alias":"ATP Challenger","weight":32,"competitions":
                    [
                        {"id":19097,"title":"Ліон, Франція","weight":50}
                    ]
                },
                {"id":970085,"title":"ITF Чоловіки","alias":"ITF Men","weight":30,"competitions":
                    [
                        {"id":25076,"title":"Уельва, Іспанія","weight":50},
                        {"id":25077,"title":"Акко, Ізраїль","weight":50}
                    ]
                },
                {"id":970086,"title":"ITF Жінки","alias":"ITF Women","weight":25,"competitions":
                    [
                        {"id":21276,"title":"Барселона, Іспанія","weight":50},
                        {"id":21204,"title":"Амаранте, Португалія","weight":50},
                        {"id":21772,"title":"Манчестер, Великобританія","weight":50},
                        {"id":21950,"title":"Преров, Чехія","weight":50},
                        {"id":21989,"title":"Рома, Італія","weight":50},
                        {"id":22247,"title":"Уеслі-Чепєл, США","weight":50},
                        {"id":21804,"title":"Мінськ, Білорусь","weight":50},
                        {"id":24592,"title":"Табарка, Туніс","weight":50},
                        {"id":21189,"title":"Акко, Ізраїль","weight":50}
                    ]
                }
            ]
        }
    },
    
    methods:{
        showHide(){
            
            if(this.showtree){
                this.showtree=false
            }else{
                this.showtree=true
            }
        }
    }    
}
</script>

<style lang="css">



</style>
