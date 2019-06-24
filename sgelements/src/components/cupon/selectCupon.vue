<template>
    <div class="cupon-wrap">
        <div :class='{"showtree":showtree}' class='show_hide very-light-pink-two-color' @click='showHide()' >{{active.title}}</div>
        <div v-if='showtree' class='tree'>
            <div @click='setActive(items)' v-for = 'items in cuponlist' :key='items.value'>{{items.title}}</div>
        </div>  
    </div>
</template>

<script>
import { log } from 'util';
export default {
    props:{
        betSlipNumber:Number,
    },
    data(){
        return{
            showtree:false,
            active:{title: 'Ординар',value:'ordinar'},
        // из computed    cuponlist:[
        //         {title: 'Экспресс',value:'express'},
        //         {title: 'Ординар',value:'ordinar'}, 
        //     ]
        }
    },
    methods:{
        
        setActive(elem){
            this.$emit('change',elem)
            this.active = elem;
            this.showHide()
        },
        showHide(){
            
            
            if(this.showtree){
                this.showtree=false
            }else{
                this.showtree=true
            }
        }
    },
    computed:{
        cuponlist(){
            let List = [
                {title: 'Ординар',value:'ordinar'}, 
                {title: 'Экспресс',value:'express'},
            ]
            if(this.betSlipNumber>2){
                for(let i = 2;  i < this.betSlipNumber; i++){
                    List.push({
                        title:`Система ${i}/${this.betSlipNumber}`,
                        value:"system",
                        system:i
                    })
                }
            }
            return List
        }
       
    }
}
</script>

<style lang='scss'>
    .cupon-wrap{
        
        width: 93px;
        height: 24px;
        box-sizing: border-box;
        
        & .show_hide{
            position: relative;
            overflow: hidden;
            text-align: left;
            padding: 5px;
            height: 24px;
            border-radius: 5px;
            box-sizing: border-box;
        }
        & .show_hide:before{
            top:10px;
            cursor: pointer;
            content: "";
            width: 0;
            height: 0;
            position: absolute;
            right: 5px;
            border-top: 6px dashed;
            border-right: 5px solid transparent;
            border-left: 5px solid transparent;
        }
        .tree{

            box-shadow: 0 8px 16px 0 rgba(23, 38, 42, 0.25);
            border-radius: 10px;
            background-color: #fff;
            margin-top: 10px;
            position: absolute;
            z-index: 1;
            
            
            div{
                height: 24px;
                display: flex;
                align-items: center;
                text-align: left;
                padding: 5px;
                height: 24px;
                border-bottom:solid 1px #dadada;

                &:last-child{
                    border-bottom:inherit;
                }
            }
        } 
    }
</style>
