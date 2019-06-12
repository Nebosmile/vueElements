<template>
    <div class="league_wrap">
        <div v-for = "item in league" :key="item.id">
            <div  v-for =  "elem in item.competitions" :key="elem.id">
                {{`${item.title} ${elem.title}`}}
                <game :leagueid='elem.id'></game>
            </div>
        </div>
    </div>
</template>

<script>

import game from '@/components/game.vue'

export default {
    props:{
        itemid: Number
    },
    components: {
        game
    },
    data(){
        return {
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
            ],
        }
    },
    methods:{
        getInfo(){//запрос на свою лигу
            console.log(this.$props.itemid);
            
        }
    },
    mounted(){
        this.getInfo()
    }

}
</script>

<style>

</style>
