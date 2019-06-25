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
                        <div v-if='options.outcomes.last' class='line-through'>{{options.outcomes.last}}</div>
                        <div :class="{up :(options.outcomes.changeLine=='up'),down:(options.outcomes.changeLine=='down')}" class='bold'>{{options.outcomes.coeff}}</div>
                        
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

            return{
                sport:{title:this.options.sportTitle,value:this.options.view},
                league:this.options.league,
                status:{ title:"Не начался",value:this.options.status},//'prematch'
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
            & >div{
                padding-right: 10px;
            }
            & .down, & .up {
                position: relative;
            }
            .down::before{
                content:'';
                right: -15px;
                bottom: 4px;
                height: 0;
                border-right: 5px solid transparent;
                border-left: 5px solid transparent;
                position:absolute;
                border-bottom: 0;
                border-top: 6px dashed #f23b38;

            }
            .up::before{
                content:'';
                right: -15px;
                bottom: 4px;
                width: 0;
                height: 0;
                border-right: 5px solid transparent;
                border-left: 5px solid transparent;
                position:absolute;
                border-bottom: 6px dashed #23945c;
                border-top: 0;
            }
        }
        .ordinar{
            .cupon-result{
                .down::before{
                    content:'';
                    right: -10px;
                    bottom: 0;
                }
                .up::before{
                    content:'';
                    right: -10px;
                    bottom: 0;
                }
            }
            .cupon-result > div{
                margin-right: 5px;
                padding-right: 0;
                box-sizing: border-box;
            }
            & >div{
                width: 50%;

                .double-input input{
                    width: 50%;
                    min-width: 80px;
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
