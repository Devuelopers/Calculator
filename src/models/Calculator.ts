import { Operation, convertValueToOperation } from "./Operation";

export class Calculator {

    private firstOperating: number;
    private secondOperating: number;
    private operationResult: number;
    private operator: Operation;

    public constructor() {
        this.firstOperating = 0;
        this.secondOperating = 0;
        this.operationResult = 0;
        this.operator = Operation.None;
    }

    public reset() {
        this.firstOperating = 0;
        this.secondOperating = 0;
        this.operator = Operation.None;
    }

    public getResult(): string {
        return this.operationResult.toString();
    }

    public operation(op: string, displayValue: string): boolean {

        this.operator = convertValueToOperation(op);

        if (this.operator === Operation.None) {
            return false;
        }

        if (displayValue.indexOf(".") === -1) {
            this.firstOperating = parseInt(displayValue);
        }
        else {
            this.firstOperating = parseFloat(displayValue);
        }

        return true;
    }

    public calculate(displayValue: string): boolean {

        if (displayValue.indexOf(".") === -1) {
            this.secondOperating = parseInt(displayValue);
        }
        else {
            this.secondOperating = parseFloat(displayValue);
        }

        switch (this.operator) {

            case Operation.Add:
                this.operationResult = this.firstOperating + this.secondOperating;
                break;
            case Operation.Subtract:
                this.operationResult = this.firstOperating - this.secondOperating;
                break;
            case Operation.Multiply:
                this.operationResult = this.firstOperating * this.secondOperating;
                break;
            case Operation.Divide:
                this.operationResult = this.firstOperating / this.secondOperating;
                break;
            default:
                return false;
        }


        return true;
    }
}