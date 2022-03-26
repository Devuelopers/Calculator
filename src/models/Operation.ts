export enum Operation {
    Add = '+',
    Subtract = '-',
    Multiply = '*',
    Divide = '/',
    None = ''
}

export function convertValueToOperation(value: string): Operation {

    if (value === '+') {
        return Operation.Add;
    } else if (value === '-') {
        return Operation.Subtract;
    } else if (value === '*') {
        return Operation.Multiply;
    } else if (value === '/') {
        return Operation.Divide;
    }

    return Operation.None;
}