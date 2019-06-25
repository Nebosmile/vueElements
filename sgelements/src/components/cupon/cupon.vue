<template>
    <div :class='{"show":!showtree}' class='cupon lato'>
        <div class='cupon_background'></div>
        <div class=''>
            <div  :class='{"showtree":showtree}' class='show_hide charcoal-grey-color border-radius-top cupon-header'>
                <div>
                    <div>
                        <span>Купон</span>
                        <span class='cupon-numbers dusty-orange-color'>{{cupon_number}}</span>
                        <div @click='update'>update</div>
                    </div>
                    <div class='show_hide_b_wrap'>
                        <div v-if='changeNumber>0'>Изменен {{changeNumber}} коэф.</div>
                        <div @click='showHide' class='show_hide_button'></div>

                    </div>

                </div>

            </div>
            <div class='hidewrapitem' v-if='(!showtree && cupon_number>0)'>
                <div class='cupon-content' >
                    <div class='very-light-pink-color'>
                        <div class='cupon-instruments'>
                        <selectCupon @change="change_type" v-if='cupon_number >= 2' :betSlipNumber='cupon_number'></selectCupon>
                            <div @click='clearAll' class = 'clear-all very-light-pink-two-color'>
                                <span>&#128465;</span>   Очистить все
                            </div>
                        </div>
                    </div>
                    <div v-for = '(item, name, index) in upData' :key='name'>
                        <oneCupon @clear=clearOne(name) :options="item" :index='index' :active='betSlipType'></oneCupon>
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
    // props:{
    //     options:Object // должно быть из store  но пока через props
    // },
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
            lastData:'',
            showtree:true,
            changeNumber:0,
            betslip:{
                49067900:{
                    bet:'',
                    view:"football",
                    sportTitle:"Футбол",
                    league:"Лига Чемпионов УЕФА. Квалификация",
                    status:"prematch",
                    teams:[
                        {
                            "id": 362872,
                            "type": "home",
                            "title": "Трe Пенн"
                        }, {
                            "id": 336567,
                            "type": "away",
                            "title": "ФК Санта Колома"
                        }
                    ],
                    markets:{
                        "id": 20659423,
                        "period": "T2",
                        "type": "MatchResult"
                    },
                    outcomes:{
                        "id": 49067900,
                        "coeff": 3.9,
                        "value": "2.5",
                        "type": "Over"
                    }
                },
                49067902:{
                    bet:'',
                    view:"football",
                    sportTitle:"Футбол",
                    league:"Лига Чемпионов УЕФА. Квалификация",
                    status:"prematch",
                    teams:[
                        {
                            "id": 362872,
                            "type": "home",
                            "title": "Трe Пенн1"
                        }, {
                            "id": 336567,
                            "type": "away",
                            "title": "ФК Санта Колома1"
                        }
                    ],
                    markets:{
                        "id": 20659423,
                        "period": "T2",
                        "type": "MatchResult"
                    },
                    outcomes:{
                        "id": 49067900,
                        "coeff": 3.9,
                        "value": "2.5",
                        "type": "Over"
                    }
                },
                49061904:{
                    bet:'',
                    view:"football",
                    sportTitle:"Футбол",
                    league:"Лига Чемпионов УЕФА. Квалификация2",
                    status:"prematch",
                    teams:[
                        {
                            "id": 362872,
                            "type": "home",
                            "title": "Трe Пенн2"
                        }, {
                            "id": 336567,
                            "type": "away",
                            "title": "ФК Санта Колома2"
                        }
                    ],
                    markets:{
                        "id": 20659423,
                        "period": "T2",
                        "type": "MatchResult"
                    },
                    outcomes:{
                        "id": 49067900,
                        "coeff": 3.9,
                        "value": "2.5",
                        "type": "Over"
                    }
                }
            },
            betslipUp:{
                49067900:{
                    bet:'',
                    view:"football",
                    sportTitle:"Футбол",
                    league:"Лига Чемпионов УЕФА. Квалификация",
                    status:"prematch",
                    teams:[
                        {
                            "id": 362872,
                            "type": "home",
                            "title": "Трe Пенн"
                        }, {
                            "id": 336567,
                            "type": "away",
                            "title": "ФК Санта Колома"
                        }
                    ],
                    markets:{
                        "id": 20659423,
                        "period": "T2",
                        "type": "MatchResult"
                    },
                    outcomes:{
                        "id": 49067900,
                        "coeff": 2.9,
                        "value": "2.5",
                        "type": "Over"
                    }
                },
                49067902:{
                    bet:'',
                    view:"football",
                    sportTitle:"Футбол",
                    league:"Лига Чемпионов УЕФА. Квалификация",
                    status:"prematch",
                    teams:[
                        {
                            "id": 362872,
                            "type": "home",
                            "title": "Трe Пенн1"
                        }, {
                            "id": 336567,
                            "type": "away",
                            "title": "ФК Санта Колома1"
                        }
                    ],
                    markets:{
                        "id": 20659423,
                        "period": "T2",
                        "type": "MatchResult"
                    },
                    outcomes:{
                        "id": 49067900,
                        "coeff": 4.9,
                        "value": "2.5",
                        "type": "Over"
                    }
                },
                49061904:{
                    bet:'',
                    view:"football",
                    sportTitle:"Футбол",
                    league:"Лига Чемпионов УЕФА. Квалификация2",
                    status:"prematch",
                    teams:[
                        {
                            "id": 362872,
                            "type": "home",
                            "title": "Трe Пенн2"
                        }, {
                            "id": 336567,
                            "type": "away",
                            "title": "ФК Санта Колома2"
                        }
                    ],
                    markets:{
                        "id": 20659423,
                        "period": "T2",
                        "type": "MatchResult"
                    },
                    outcomes:{
                        "id": 49067900,
                        "coeff": 3.9,
                        "value": "2.5",
                        "type": "Over"
                    }
                }
            },
        }
    },
    methods:{
        change_type(e){
            this.betSlipType=e;
        },
        update(){
            this.betslip=this.betslipUp;
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
            this.betslip={};

        },
        clearOne(key){
            // удаляем из stort по ключу
            this.$delete(this.betslip,key)
        },
        setMax(){
            // пока не знаю откуда берется.
            this.doubleInputOptions.value=100;
        },

    },
    computed:{
        upData(){
            let obj={}
            if(!this.lastData){
                console.log(this.lastData)
                this.lastData = this.betslip;
                obj=this.betslip;
                this.changeNumber=0;
                return obj;
            }else if(this.lastData){
                for(let key in this.betslip){
                    if(this.lastData[key]){
                        let lastCoeff = this.lastData[key].outcomes.coeff;
                        let newCoeff = this.betslip[key].outcomes.coeff;
                        if(lastCoeff != newCoeff){
                            this.changeNumber++;
                            this.betslip[key].outcomes.last = lastCoeff;
                            this.betslip[key].outcomes.change = newCoeff - lastCoeff
                            if(newCoeff>lastCoeff){
                                this.betslip[key].outcomes.changeLine='up'
                            }else{
                                this.betslip[key].outcomes.changeLine='down'
                            }
                        }

                    } 
                }
                obj=this.betslip
                return obj;
            }
            
        },
        plain(){
            if( this.betSlipType.value!='ordinar' && this.doubleInputOptions.value){
                return true
            }
            return false;
        },
        final_coefficient(){
            let final = 0;
            for(let key in this.betslip){
                final+=this.betslip[key].outcomes.coeff;
            }
            return final.toFixed(2);
        },
        cupon_number(){
            return Object.keys(this.betslip).length
        },
        // updateObj(){
        //     let obj={}
        //     this.betslip.forEach((item)=>{
        //         obj[item.id]={
        //             title:`${item.teams[0].title} - ${item.teams[1].title}`,
        //             coeff:item.coeff
        //         }
        //     })
        // }


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
