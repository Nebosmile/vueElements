<template>
    <div class="cupon-options">
        <div :class='{"showtree":showtree}' class='show_hide very-light-pink-two-color' @click='showHide()' >
            <div>
                <img src="./img/gear.png" alt="">
                <div>{{active.title}}</div>
            </div>
        </div>
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
            active:{title: 'Всегда спрашивать при изминении коєффициентов',value:'allwaysAsk'},
            cuponlist:[
                {title: 'Всегда спрашивать при изминении коєффициентов',value:'allwaysAsk'},
                {title: 'Не спрашивать',value:'notAsk'}, 
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

<style lang="scss">
    .cupon-options{
        margin: 10px 0;
        width: 260px;
        font-size:11px;
        text-align: left;
        & .show_hide{
            position: relative;
            width: 260px;
            overflow: hidden;
            display: flex;
            align-items: center;
            text-align: left;
            padding: 4px 10px;
            height: 34px;
            border-radius: 5px;
            box-sizing: border-box;
            font-size:11px;

            & >div{
                display: flex;
                align-items: center;
            }
            img{
                margin-right: 5px;
            }
        }
        & .show_hide:before{
            top:13px;
            cursor: pointer;
            content: "";
            width: 0;
            height: 0;
            position: absolute;
            right: 10px;
            border-top: 6px dashed;
            border-right: 5px solid transparent;
            border-left: 5px solid transparent;

            
        }
        .tree{
            max-width: 260px;
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
