<template>
    <div class='menulist'>
        <div  v-for = "item in menu" :key='item.id' >
            <sportType :options="item"></sportType>
            
        </div>
    </div>
</template>

<script>


import sportType from '@/components/sportType.vue'
export default {
    components: {
        sportType
    },
    data(){
        return{

            menu:[
                {id: 10121, title: "Футбол", weight: 200, view: "football", alias: "football"},
                {id: 10126, title: "Теніс", weight: 150, view: "tennis", alias: "tennis"},
                {id: 10122, title: "Баскетбол", weight: 125, view: "basketball", alias: "basketball"},
                {id: 10143, title: "Хокей", weight: 110, view: "ice_hockey", alias: "ice_hockey"},
                {id: 10125, title: "Гандбол", weight: 102, view: "football", alias: "handball"},
                {id: 10135, title: "Бокс/ММА", weight: 101, view: "boxing", alias: "boxing"},
                {id: 10139, title: "Регбі", weight: 100, view: "football", alias: "rugby"},
                {id: 10129, title: "Американський Футбол", weight: 100, view: "basketball", alias: "american_football"},
                {id: 10140, title: "Снукер", weight: 100, view: "football", alias: "snooker"},
                {id: 10132, title: "Хокей на Траві", weight: 100, view: "basketball", alias: "field_hockey"},
                {id: 10124, title: "Футзал", weight: 100, view: "football", alias: "futsal"},
                {id: 10128, title: "Австралійський Футбол", weight: 100, view: "basketball", alias: "aussie_rules"},
                {id: 10130, title: "Бейсбол", weight: 100, view: "basketball", alias: "baseball"}

            ]
            
            
        }
    }


    
}
</script>

<style lang="scss">
       .menulist{
        max-width: 285px;
        text-align: left;

    }   
        .sports{
            border: solid 1px #000;
        }
        .show_hide{
            position: relative;
            
        
            &:before {
                cursor: pointer;
                content: "";
                width: 0;
                height: 0;
                position: absolute;
                top: 10px;
                right: 10px;
                border-top: 6px dashed;
                border-right: 6px solid transparent;
                border-left: 6px solid transparent;
            }

        &.showtree{
            background-color: #85969d;

            &:before {
                border-top: 0;
                border-bottom: 6px dashed;
                border-right: 6px solid transparent;
                border-left: 6px solid transparent;
            }
        }
    }


        .show_hide{
            padding-left:10px;
        }
        .league_wrap{
            .show_hide{
                padding-left:20px;
                background-color: #98d2a2;
            }
        }
        .game_wrap{
            padding-left:30px;
        }

</style>



