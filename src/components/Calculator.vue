<script lang="ts">
import { defineComponent } from 'vue';
import { Calculator } from '../models';

export default defineComponent({
    name: "Calculator",
    methods: {
        reset: function (isRest: boolean) {

            if (isRest) {
                this.calculator.reset();
            }

            this.displayValue = "0";
            this.isNumberFloat = false;
        },
        concatNumber: function (number: string) {

            if (this.displayValue.length >= 23) {
                return;
            }

            if (this.displayValue === "0") {
                this.displayValue = number;
            } else {
                this.displayValue += number;
            }
        },
        addDotToNumber: function () {
            if (this.isNumberFloat) {
                return;
            }

            if (this.displayValue.indexOf(".") === -1) {

                this.displayValue += ".";
            }

            this.isNumberFloat = true;
        },
        operation: function (operation: string) {

            this.calculator.operation(operation, this.displayValue);
            this.reset(false);
        },
        calculate: function () {
            this.calculator.calculate(this.displayValue);
            this.displayValue = this.calculator.getResult();
        },
    },
    data() {
        return {
            calculator: new Calculator(),
            displayValue: '0',
            isNumberFloat: false,
        }
    },
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
                    <input v-model="displayValue" class="display_input" id="display_input" />
                </td>
                <td>
                    <input
                        @click="reset(true)"
                        type="reset"
                        id="btn_reset"
                        value="AC"
                        class="calculator_button"
                    />
                </td>
                <td>
                    <input
                        type="button"
                        value="="
                        @click="calculate"
                        id="btn_igual"
                        class="calculator_button"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <input
                        type="button"
                        @click="concatNumber('7')"
                        value="7"
                        id="btn_7"
                        class="calculator_button"
                    />
                </td>
                <td>
                    <input
                        type="button"
                        @click="concatNumber('8')"
                        value="8"
                        id="btn_8"
                        class="calculator_button"
                    />
                </td>
                <td>
                    <input
                        type="button"
                        value="9"
                        @click="concatNumber('9')"
                        id="btn_9"
                        class="calculator_button"
                    />
                </td>
                <td>
                    <input
                        type="button"
                        value="+"
                        id="btn_add"
                        @click="operation('+')"
                        class="calculator_button"
                    />
                </td>
                <td>
                    <input
                        type="button"
                        value="-"
                        name="btn_sub"
                        @click="operation('-')"
                        class="calculator_button"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <input
                        type="button"
                        value="4"
                        id="btn_4"
                        @click="concatNumber('4')"
                        class="calculator_button"
                    />
                </td>
                <td>
                    <input
                        type="button"
                        value="5"
                        id="btn_5"
                        @click="concatNumber('5')"
                        class="calculator_button"
                    />
                </td>
                <td>
                    <input
                        type="button"
                        value="6"
                        id="btn_6"
                        @click="concatNumber('6')"
                        class="calculator_button"
                    />
                </td>
                <td>
                    <input
                        type="button"
                        value="*"
                        @click="operation('*')"
                        id="btn_mult"
                        class="calculator_button"
                    />
                </td>
                <td>
                    <input
                        type="button"
                        value="/"
                        @click="operation('/')"
                        id="btn_divi"
                        class="calculator_button"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <input
                        type="button"
                        value="1"
                        id="btn_1"
                        @click="concatNumber('1')"
                        class="calculator_button"
                    />
                </td>
                <td>
                    <input
                        type="button"
                        value="2"
                        id="btn_2"
                        @click="concatNumber('2')"
                        class="calculator_button"
                    />
                </td>
                <td>
                    <input
                        type="button"
                        value="3"
                        id="btn_3"
                        @click="concatNumber('3')"
                        class="calculator_button"
                    />
                </td>
                <td>
                    <input
                        type="button"
                        value="0"
                        id="btn_0"
                        @click="concatNumber('0')"
                        class="calculator_button"
                    />
                </td>
                <td>
                    <input
                        type="button"
                        value="."
                        @click="addDotToNumber"
                        id="btn_dot"
                        class="calculator_button"
                    />
                </td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss">
@import "../style/Calculator";
</style>
