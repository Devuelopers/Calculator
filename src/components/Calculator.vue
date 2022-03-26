<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Calculator",
});
</script>

<template>
    <form name="frm_calc" acton>
        <center>
            <table width="200" cellpadding="3" cellspacing="5"
                style="color:#FFB90F; background-color:#000000; border:2pt solid #FFB90F">
                <tr>
                    <td colspan="5" align="center" bgColor="#FFB90F">
                        <Font Face="Verdana" Size="4" Color="#000000"><b>Calculadora</b></font>
                    </td>
                </tr>
            </table>
        </center>
    </form>
</template>

<style lang="scss">
@import "../style/Calculator";
</style>
