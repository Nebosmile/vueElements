<template>
    <div class="cupon-wrap">
        <div :class='{"showtree":showtree}' class='show_hide very-light-pink-two-color' @click='showHide()' >{{active.title}}</div>
        <div v-if='showtree' class='tree'>
            <div @click='setActive(items)' v-for = 'items in cuponlist' :key='items.value'>{{items.title}}</div>
        </div>  
    </div>
</template>

<script>
export default {
    data(){
        return{
            showtree:false,
            active:{title: 'Экспресс',value:'express'},
            cuponlist:[
                {title: 'Экспресс',value:'express'},
                {title: 'Не Экспресс',value:'noexpress'}, 
            ]
        }
    },
    methods:{
        setActive(elem){
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
    }
}
</script>

<style lang='scss'>
    .cupon-wrap{
        
        width: 88px;
        
        & .show_hide{
            overflow: hidden;
            text-align: left;
            padding: 5px;
            height: 24px;
            border-radius: 5px;
            box-sizing: border-box;
        }
        & .show_hide:before{
            top:10px;
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
