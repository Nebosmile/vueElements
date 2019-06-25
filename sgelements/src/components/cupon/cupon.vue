<template>
    <div :class='{"show":!showtree}' class='cupon lato'>
        <div class='cupon_background'></div>
        <div class=''>
            <div  :class='{"showtree":showtree}' class='show_hide charcoal-grey-color border-radius-top cupon-header'>
                <div>
                    <div>
                        <span>Купон</span>
                        <span class='cupon-numbers dusty-orange-color'>{{cupon_number}}</span>
                    </div>
                    <div class='show_hide_b_wrap'>
                        <div v-if='showtree'>Изменен 1 коэф.</div>
                        <div @click='showHide' class='show_hide_button'></div>

                    </div>

                </div>

            </div>
            <div class='hidewrapitem' v-if='(!showtree && betslip.length>0)'>
                <div class='cupon-content' >
                    <div class='very-light-pink-color'>
                        <div class='cupon-instruments'>
                        <selectCupon @change="change_type" v-if='betslip.length >= 2' :betSlipNumber='betslip.length'></selectCupon>
                            <div @click='clearAll' class = 'clear-all very-light-pink-two-color'>
                                <span>&#128465;</span>   Очистить все
                            </div>
                        </div>
                    </div>
                    <div v-for = '(item, name, index) in options' :key='name'>
                        <oneCupon @clear=clearOne(key) :options="item" :index='index' :active='betSlipType'></oneCupon>
                    </div>
                    <div class='bet-info-wrap'>
                        <div class='very-light-pink-color cupon-bet-block'>
                            <div class = 'cupon-bet-block-content'>
                                <doubleInput v-if='(betSlipType.value!="ordinar")' @click='setMax' :options="doubleInputOptions"></doubleInput>
                                <cuponOptions></cuponOptions>
                                <div class='bet-coficient'>
                                    <div>Общий коэфициент</div>
                                    <div class='bold'>{{final_coefficient}}</div>
                                </div>
                                <div class='bet-winnings'>
                                    <div>Возможный выигрыш</div>
                                    <div class='bold'>100 000 грн</div>
                                </div>
                                <sbbuttons :plain='plain'>СДЕЛАТЬ СТАВКУ</sbbuttons>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    </div>
</template>

<script>


import oneCupon from './oneCupon.vue';
import selectCupon from './selectCupon.vue';
import sbbuttons from '@/components/buttons/sb-button.vue';
import doubleInput from './doubleInput.vue';
import cuponOptions from './cuponOptions.vue';


export default {
    props:{
        options:Object // должно быть из store  но пока через props
    },
    components:{
        oneCupon,
        selectCupon,
        sbbuttons,
        doubleInput,
        cuponOptions
    },
    data(){
        return{
            betSlipType:{
                title: 'Ординар',
                value:'ordinar'
            },
            doubleInputOptions:{
                placeholder:'Ставка',
                buttonName:"MAX",
                value:''
            },
            betslip:
            [
                {
                    coeff: 1.12,
                    id: 48596896,
                    type: "Over",
                    value: "0.5",
                    teams:[
                        {
                            id: 372711,
                            title: "Грузия1",
                            type: "home"
                        },
                        {
                            id: 403193,
                            title: "Гибралтар1",
                            type: "away"
                        }

                    ]
                },
                                {
                    coeff: 2.11,
                    id: 48196896,
                    type: "Over",
                    value: "0.5",
                    teams:[
                        {
                            id: 372711,
                            title: "Грузия2",
                            type: "home"
                        },
                        {
                            id: 403193,
                            title: "Гибралтар2",
                            type: "away"
                        }

                    ]
                },
                {
                    coeff: 4.52,
                    id: 48596596,
                    type: "Over",
                    value: "0.5",
                    teams:[
                        {
                            id: 372711,
                            title: "Грузия3",
                            type: "home"
                        },
                        {
                            id: 403193,
                            title: "Гибралтар3",
                            type: "away"
                        }

                    ]
                },
            ],
            showtree:true,
            upData:[
                                {
                    coeff: 1.52,
                    id: 48596896,
                    type: "Over",
                    value: "0.5",
                    teams:[
                        {
                            id: 372711,
                            title: "Грузия1",
                            type: "home"
                        },
                        {
                            id: 403193,
                            title: "Гибралтар1",
                            type: "away"
                        }

                    ]
                },
                                {
                    coeff: 2.01,
                    id: 48196896,
                    type: "Over",
                    value: "0.5",
                    teams:[
                        {
                            id: 372711,
                            title: "Грузия2",
                            type: "home"
                        },
                        {
                            id: 403193,
                            title: "Гибралтар2",
                            type: "away"
                        }

                    ]
                },
                {
                    coeff: 4.12,
                    id: 48596596,
                    type: "Over",
                    value: "0.5",
                    teams:[
                        {
                            id: 372711,
                            title: "Грузия3",
                            type: "home"
                        },
                        {
                            id: 403193,
                            title: "Гибралтар3",
                            type: "away"
                        }

                    ]
                },
            ]
        }
    },
    methods:{
        change_type(e){
            this.betSlipType=e;
        },
        update(){

        },
        showHide(){

            if(this.showtree){
                this.showtree=false
            }else{
                this.showtree=true
            }
        },
        clearAll(){
            // чистим store
            // this.betslip=[];

        },
        clearOne(index){
            // удаляем из stort по ключу
            // this.betslip.splice(index, 1);
        },
        setMax(){
            // пока не знаю откуда берется.
            this.doubleInputOptions.value=100;
        },

    },
    computed:{
        showObj(){

        },
        plain(){
            if(this.doubleInputOptions.value){
                return true
            }
            return false;
        },
        final_coefficient(){
            let final = 0;
            for(let key in this.options){
                final+=this.options[key].outcomes.coeff;
            }
            return final.toFixed(2);
        },
        cupon_number(){
            return this.betslip.length
        },
        updateObj(){
            let obj={}
            this.betslip.forEach((item)=>{
                obj[item.id]={
                    title:`${item.teams[0].title} - ${item.teams[1].title}`,
                    coeff:item.coeff
                }
            })
        }


    }
}
</script>

<style lang='scss'>

        .show_hide_b_wrap{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .show_hide_button{
            margin-left: 10px;
            position: relative;
            height: 20px;
            width: 20px;
            box-sizing: border-box;
            font-size: 12px;
            line-height: 0;


            &:before {
                margin: 0;
                cursor: pointer;
                content: "";
                width: 0;
                height: 0;
                position: absolute;
                top: 8px;
                left: 5px;
                border-top: 6px dashed;
                border-right: 5px solid transparent;
                border-left: 5px solid transparent;
            }
    }
    .showtree{
        .show_hide_button:before {
            border-top: 0;
            border-bottom: 6px dashed;
            border-right: 5px solid transparent;
            border-left: 5px solid transparent;
        }
    }
.cupon{
    .sb-button{
        font-size: 18px;
    }
    .hidewrapitem{
        position: relative;
        z-index: 2;
        overflow: hidden;
    }
    // .cupon-content{
    //     transition: margin-top 0.5s;
    //     margin-top:-100vh;
    // }
    &.show{
        .cupon_background{
            position: fixed;
            left:0;
            top:0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.9;
            background-color: #232d33;
        }
        .cupon-content{
            margin-top:0;
        }
    }
}

.cupon-header{
    font-size:12px;
    & >div{
        padding: 13px ;
        box-sizing: border-box;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    .cupon-numbers{
        text-align: center;
        display: inline-block;
        box-sizing: border-box;
        padding: 1px;
        width: 14px;
        height: 14px;
        max-width: 14px;
        max-height: 14px;
        margin-top: -10px;
        border-radius: 7px;
        font-size: 9px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        top: -6px;
        margin: 0 4px;
        position: relative;

    }
}
    .close-x{
        font-size: 15px;
        margin-right: 10px;
    }
    .cupon-content{

        text-align: left;
        font-size: 12px;
        .cupon-instruments{
            width: 100%;
            font-size: 12px;
            display:flex;
            justify-content:space-between;
            padding: 5px 10px 5px 10px;
            min-height: 36px;
            align-items: center;
            box-sizing: border-box;
        }
            & .clear-all{
                padding: 5px 5px 5px 10px;
                height: 24px;
                border-radius: 5px;
                box-sizing: border-box;

            span{
                position: relative;
                top:3px;
                font-size: 20px;
                line-height: 0;
            }
        }
    }
    .cupon-titles{
        justify-content: space-between;
        & >div{
            display:flex;
            justify-content: space-between;
            align-items: center;

            img{
                margin-left: 10px;
            }
        }
    }

    .cupon-result, .cupon-total {
        display: flex;
        justify-content:space-between;
    }
    .cupon-bet-block{
        display: flex;
        justify-content: center;
        padding: 10px 10px 20px;
    }
    .cupon-bet-block-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 260px;
        justify-content: space-between;

        & >div{
            width: 100%;
        }
        .sb-button{
            width: 100%;
            height: 48px;
        }
    }
    .bet-coficient, .bet-winnings {
        display: flex;
        min-height: 25px;
        margin: 5px 0;
        justify-content:space-between;
    }
    .bet-coficient{
        margin-top:20px;
        border-bottom: solid 1px #abb9be;
    }

</style>
