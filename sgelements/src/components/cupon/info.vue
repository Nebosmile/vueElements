<template>
    <div class='info-wrap'>
        <img src="./img/info.png" alt="">
        <div class='info-detail border-radius overflow-hidden'> 
            <div class='info-title viridian-color'>
                <img src="./img/football.png" alt="">
                <div class=''>{{options.sport.title}}</div>
            </div>
            
            <div class= 'info-content  very-light-pink-color'>
                <div>{{options.leagua}}</div>
                <div>{{options.status}}</div>
                <div>{{options.comands}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        options:Object
            // infoOptions:{
            //     sport:{title:"Футбол",value:"footboll"},
            //     leagua:'Суперкубок УЕФА',
            //     state:'Не начался',
            //     comands:'ФК Ливерпуль - Челси ФК'
            // },
    }
}
</script>

<style lang='scss'>
       .info-wrap{
        
            position: relative;
        
            .info-detail{
                box-shadow: 0 8px 16px 0 rgba(23, 38, 42, 0.25);
                min-width: 153px;
                display: none;
                position: absolute;
                right: 0;
                font-size:11px;
            }

            .info-title{
                display: flex;
                box-sizing: border-box;
                padding: 10px 10px;
                font-size: 13px;
                min-height: 40px;

                img{
                    margin: 0 10px 0 0;
                }
            }
            .info-content{
                padding: 10px;
                color: #000;
            }

            &:hover{
                .info-detail{
                    display: block;
                    z-index: 1;
                }
                
            }
    }
</style>
