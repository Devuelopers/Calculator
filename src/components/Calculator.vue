<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Calculator",
});
</script>

<template>
    <div class="calculator center">
        <table class="calculator_table">
            <tr>
                <td class="calculator_header" colspan="5">
                    <b>Calculator</b>
                </td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss">
@import "../style/Calculator";
</style>
