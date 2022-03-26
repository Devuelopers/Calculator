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
            <tr>
                <td colspan="3">
                    <input class="display_input" id="display_input" type="text" value="0" />
                </td>
                <td>
                    <input type="reset" id="btn_reset" value="AC" class="calculator_button" />
                </td>
                <td>
                    <center>
                        <input type="button" value="=" id="btn_igual" class="calculator_button" />
                    </center>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="button" value="7" id="btn_7" class="calculator_button" />
                </td>
                <td>
                    <input type="button" value="8" id="btn_8" class="calculator_button" />
                </td>
                <td>
                    <input type="button" value="9" id="btn_9" class="calculator_button" />
                </td>
                <td>
                    <input type="button" value="+" id="btn_add" class="calculator_button" />
                </td>
                <td>
                    <input type="button" value="-" name="btn_sub" class="calculator_button" />
                </td>
            </tr>
            <tr>
                <td>
                    <input type="button" value="4" id="btn_4" class="calculator_button" />
                </td>
                <td>
                    <input type="button" value="5" id="btn_5" class="calculator_button" />
                </td>
                <td>
                    <input type="button" value="6" id="btn_6" class="calculator_button" />
                </td>
                <td>
                    <input type="button" value="*" id="btn_mult" class="calculator_button" />
                </td>
                <td>
                    <input type="button" value="/" id="btn_divi" class="calculator_button" />
                </td>
            </tr>
            <tr>
                <td>
                    <input type="button" value="1" id="btn_1" class="calculator_button" />
                </td>
                <td>
                    <input type="button" value="2" id="btn_2" class="calculator_button" />
                </td>
                <td>
                    <input type="button" value="3" id="btn_3" class="calculator_button" />
                </td>
                <td>
                    <input type="button" value="0" id="btn_0" class="calculator_button" />
                </td>
                <td>
                    <input type="button" value="." id="btn_dot" class="calculator_button" />
                </td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss">
@import "../style/Calculator";
</style>
