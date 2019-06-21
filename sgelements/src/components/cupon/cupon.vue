<template>
    <div :class='{"show":!showtree}' class='cupon lato'>
        <div class='cupon_background'></div>
        <div class=''>
            <div  :class='{"showtree":showtree}' class='show_hide charcoal-grey-color border-radius-top cupon-header'>
                <div>
                    <div>
                        <span>Купон</span>
                        <span class='cupon-numbers dusty-orange-color'>2</span>
                    </div>
                    <div class='show_hide_b_wrap'>
                        <div v-if='showtree'>Изменен 1 коэф.</div>
                        <div @click='showHide' class='show_hide_button'></div>
                        
                    </div>
                    
                </div>
                
            </div>
            <div class='hidewrapitem'>
                <div class='cupon-content' >
                    <div class='very-light-pink-color'>
                        <div class='cupon-instruments'>
                        <selectCupon></selectCupon>
                            <div @click='clearAll' class = 'clear-all very-light-pink-two-color'>
                                <span>&#128465;</span>   Очистить все
                            </div>
                        </div>
                    </div>
                    <div class='charcoal-grey-color cupon-titles'>
                        <div>
                            <div class='close-x'>&#10006;</div>
                            <div>Грузия - Гибралтар</div>
                        </div>
                        <div>
                            <img @click='goLive' src="./img/live.png" alt="">
                            <info :options='infoOptions'></info>
                            
                        </div>
                    </div>
                    <div class='cupon-result white-color'>
                        <div>
                            <div class='bold'>Результат:</div>
                            <div>основное время победа Тоттенхем</div>
                        </div>
                        <div class='bold'>1.94</div>
                    </div>
                    <div class='charcoal-grey-color cupon-titles'>
                        <div>
                            <div class='close-x'>&#10006;</div>
                            <div>Грузия - Гибралтар</div>
                        </div>
                        <div>
                            <info :options='infoOptions'></info>
                        </div>
                    </div>
                    <div class='cupon-total white-color'>
                        <div>
                            <div class='bold'>Тотал:</div>
                            <div>больше 1.5</div>
                        </div>
                        <div>
                            <div class='line-through'>1.94</div>
                            <div class='bold'>3.54</div>
                        </div>
                        
                    </div>
                    <div class='very-light-pink-color cupon-bet-block'>
                        <div class = 'cupon-bet-block-content'>
                            <doubleInput @click='setMax' :options="doubleInputOptions"></doubleInput>
                            <cuponOptions></cuponOptions>
                            <div class='bet-coficient'>
                                <div>Общий коэфициент</div>
                                <div class='bold'>5.67</div>
                            </div>
                            <div class='bet-winnings'>
                                <div>Возможный выигрыш</div>
                                <div class='bold'>100 000 грн</div>
                            </div>
                            <sbbuttons @click='makeBet' :plain='plain'>СДЕЛАТЬ СТАВКУ</sbbuttons>
                            
                        </div>
                        
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>

import selectCupon from './selectCupon.vue';
import doubleInput from './doubleInput.vue';
import cuponOptions from './cuponOptions.vue';
import info from './info.vue';
import sbbuttons from '@/components/buttons/sb-button.vue';

export default {
    components:{
        selectCupon,
        doubleInput,
        cuponOptions,
        sbbuttons,
        info
    },
    data(){
        return{
            infoOptions:{
                sport:{title:"Футбол",value:"footboll"},
                leagua:'Суперкубок1 УЕФА',
                state:'Не начался',
                comands:'ФК Ливерпуль - Челси ФК'
            },
            doubleInputOptions:{
                placeholder:'Ставка',
                buttonName:"MAX",
                value:''
            },
            showtree:true
        }
    },
    methods:{
        makeBet(){
           
        },
        setMax(){
            this.doubleInputOptions.value=100;
        },
        showHide(){

            if(this.showtree){
                this.showtree=false
            }else{
                this.showtree=true
            }
        },
        clearAll(){
            
            
        },
        goLive(){

        },
    },
    computed:{
        plain(){
            if(this.doubleInputOptions.value){
                return true
            }
            return false;
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
    .hidewrapitem{
        position: relative;
        z-index: 2;
        overflow: hidden;
    }
    .cupon-content{
        transition: margin-top 0.5s;
        margin-top:-100vh;
    }
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
        }
        & > div{
            padding: 5px 10px 5px 10px;
            min-height: 34px;
            display: flex;
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

        .cupon-bet-block{
            padding: 10px;
            box-sizing: border-box;
            justify-content:center;
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
    .cupon-bet-block-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 260px;
        
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
        margin: 15px 0;
        justify-content:space-between;
    }
    .bet-coficient{
        margin-top:30px;
        border-bottom: solid 1px #abb9be;
    }
    
</style>
