import { Operation } from "./Operation";

export class Calculator {

    private firstOperating: number;
    private secondOperating: number;
    private operator: Operation;

    public constructor() {
        this.firstOperating = 0;
        this.secondOperating = 0;
        this.operator = Operation.None;
    }

    public reset() {
        this.firstOperating = 0;
        this.secondOperating = 0;
        this.operator = Operation.None;
    }
}