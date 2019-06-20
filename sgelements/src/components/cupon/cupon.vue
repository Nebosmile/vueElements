<template>
    <div class='cupon'>
        <div class='cupon_background'></div>
        <div class='cupon-content'>
            <div :class='{"showtree":showtree}' class='show_hide charcoal-grey-color border-radius-top cupon-header'>
                <div>
                    <div>
                        <span>Купон</span>
                        <span class='cupon-numbers'>2</span>
                    </div>
                    <div>Изменен 1 коэф.</div>
                </div>
                
            </div>
            <div class='very-light-pink-color'>
                <div class='cupon-instruments'>
                    <selectCupon></selectCupon>
                    <div @click='clearAll' class = 'clear-all very-light-pink-two-color'>Очистить все</div>
                </div>
            </div>
            <div class='charcoal-grey-color cupon-titles'>
                <div>
                    <div class='close-x'></div>
                    <div>Грузия - Гибралтар</div>
                </div>
                <div>
                    <img @click='goLive' src="./img/live.png" alt="">
                    <div class='info-wrap'>
                        <img @click='showInfo' src="./img/info.png" alt="">
                        <div class='info-detail border-radius overflow-hidden'> 
                            <div class='info-title viridian-color'>Футбол</div>
                            <div class= 'info-content  very-light-pink-color'>
                                <div>Суперкубок УЕФА</div>
                                <div>Не начался</div>
                                <div>ФК Ливерпуль - Челси ФК</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import selectCupon from './selectCupon.vue'

export default {
    components:{
        selectCupon
    },
    data(){
        return{
            showtree:true
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
        clearAll(){
            
            
        },
        goLive(){

        },
        showInfo(){

        }
    }
}
</script>

<style lang='scss'>
    .close-x{
        display: inline-block;
        position: relative;
        width: 14px;
        height: 14px;
        transform: rotate(45deg);
        margin-right: 10px;
        &::before, &::after{
            top:0;
            left:0;
            position: absolute;
            content:'';
            background-color: #fff;
            border-radius: 2px;
        }
        &::before{
            top:6px;
            height: 2px;
            width: 100%;
        }
        &::after{
            left:6px;
            height: 100%;
            width: 2px;
        }
    }
    .cupon-content{
        font-size: 12px;
        .cupon-instruments{
            width: 100%;
            font-size: 12px;
            display:flex;
            justify-content:space-between;
        }
        & > div{
            padding: 5px 10px 5px 10px;
            height: 24px;
            height: 24px;
            min-height: 34px;
            display: flex;
            align-items: center; 
            box-sizing: border-box;
        }

        & .clear-all{
            padding: 5px 5px 5px 20px;
            height: 24px;
            border-radius: 5px;
            box-sizing: border-box;
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
    .info-wrap{
        position: relative;

        .info-title{
            font-size: 13px;
        }

        .info-detail{
            display: none;
            position: absolute;
            right: 0;
            font-size:11px;

        }
        &:hover{
            .info-detail{
                display: block;
                z-index: 1;
            }
            
        }
    }
</style>
