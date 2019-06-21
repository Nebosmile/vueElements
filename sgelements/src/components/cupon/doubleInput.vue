<template>
    <div class='double-input white-color'>
        <input class="bold" :placeholder="options.placeholder" type="number" v-model='options.value'>
        <div @click="$emit('click', $event)" class='dusty-orange-color-text bold'>{{options.buttonName}}</div>
    </div>
</template>

<script>
export default {
    props:{
        options: Object
            // doubleInputOptions:{
            //     placeholder:'Ставка',
            //     buttonName:"MAX",
            //     value:''
            // },
    }
}
</script>

<style lang='scss'>
    .double-input{
        overflow: hidden;
        padding: 2px 15px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 260px;
        height: 40px;
        border-radius: 20px;
        border: solid 2px #abb9be;

        .dusty-orange-color-text{
            font-size: 14px;
        }

        input{
            font-size:14px;
            background-color: inherit;
            border: 0px solid;
            box-shadow: inherit;
            max-width: 180px;
            outline: none;
            height: 100%;
            border-right: solid 1px #abb9be;

            &::placeholder{
                font-weight: 200;
            }

        }
    }
</style>
