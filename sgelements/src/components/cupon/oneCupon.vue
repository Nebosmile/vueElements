<template>
    <div class = 'onecupon-wrap'>
            <div class='charcoal-grey-color cupon-titles'>
                <div>
                    <div @click="$emit('clear')" class='close-x'>&#10006;</div>
                    <div>{{title}}</div>
                </div>
                <div>
                    <div>
                        <img @click='goLive' src="./img/live.png" alt="">
                    </div>
                    <!-- <div @click='showHide' class='show_hide_button'></div> -->
                    <info :options='infoOptions'></info>
                </div>
            </div>
            <div class='white-color' :class='{ordinar: (active.value == "ordinar")}'>
                <div  class='cupon-result '>
                    <div>
                        <div class='bold'>Результат:</div>
                        <div>основное время победа Тоттенхем</div>
                    </div>
                    <div>
                        <div class='line-through'>2.15</div>
                        <div class='bold'>{{options.coeff}}</div>
                    </div>
                </div>
                <div v-if ='(active.value == "ordinar")'>
                    <doubleInput @click='setMax' :options='doubleInputOptions'></doubleInput>
                    <div>Возм. выигрыш :100 000 грн.</div>
                </div>

                    
            </div>

    </div>
</template>

<script>

import doubleInput from './doubleInput.vue';
import info from './info.vue';



export default {
    props:{
        options:Object,
        index:Number,
        active:Object
    },
    components:{
        doubleInput,
        info
    },
    data(){
        return{
            showtree:false,
            doubleInputOptions:{
                placeholder:'Ставка',
                buttonName:"MAX",
                value:''
            },
        }
    },
    methods:{
        showHide(){

            if(this.showtree){
                this.showtree=false
            }else{
                this.showtree=true
            }
        },
        makeBet(){
           
        },
        setMax(){
            this.doubleInputOptions.value=100;
        },
        goLive(){

        },
    },
    computed:{
        title(){
            return `${this.options.teams[0].title} - ${this.options.teams[1].title}`
        },
        infoOptions(){

            let obj={
                sport:{title:"Футбол",value:"footboll"},
            }
            return{
                sport:{title:"Футбол",value:"footboll"},
                leagua:'Суперкубок1 УЕФА',
                status: "Не начался",//'prematch'
                comands:`${this.options.teams[0].title} - ${this.options.teams[1].title}`
            }
            
        },
        plain(){
            if(this.doubleInputOptions.value){
                return true
            }
            return false;
        },
    }
}
</script>

<style lang='scss'>
    .onecupon-wrap{
        & >div{
            padding: 5px 10px 5px 10px;
            min-height: 34px;
            display: flex;
            align-items: center; 
            box-sizing: border-box;
        }

        .cupon-result{
            width: 100%;
        }
        .ordinar{
            .cupon-result div{
                padding-right: 5px;
                box-sizing: border-box;
            }
            & >div{
                width: 50%;
                
                .double-input input{
                    width: 80px;
                }
            }

        } 



        .cupon-bet-block{
            width: 100%;
            padding: 10px;
            display: flex;
            box-sizing: border-box;
            justify-content:center;
        }
        .bet-info-wrap{
            padding: 0;
            width: 100%;
            min-height: 34px;
        }
    }
</style>
