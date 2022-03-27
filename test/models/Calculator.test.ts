import { Calculator } from '../../src/models';

test('Test validation to operations', () => {

    let calculator = new Calculator();

    expect(calculator.operation('+', '1')).toBeTruthy();
    expect(calculator.operation('+', '1.5')).toBeTruthy();
    expect(calculator.operation('', '1')).toBeFalsy();
});

test('Test rest', () => {

    let calculator = new Calculator();

    calculator.operation('+', '1');
    calculator.reset();
    expect(calculator.calculate('2')).toBeFalsy();
});

test('Test Sum of integers calculation', () => {

    let calculator = new Calculator();

    calculator.operation('+', '1');
    expect(calculator.calculate('2')).toBeTruthy();
    expect(calculator.getResult()).toBe('3');
});

test('Test Sum of floats calculation', () => {

    let calculator = new Calculator();

    calculator.operation('+', '1.5');
    expect(calculator.calculate('2')).toBeTruthy();
    expect(calculator.getResult()).toBe('3.5');
});

test('Test Substraction of integers calculation', () => {

    let calculator = new Calculator();

    calculator.operation('-', '2');
    expect(calculator.calculate('1')).toBeTruthy();
    expect(calculator.getResult()).toBe('1');
});

test('Test Substractionm of floats calculation', () => {

    let calculator = new Calculator();

    calculator.operation('-', '2.5');
    expect(calculator.calculate('1')).toBeTruthy();
    expect(calculator.getResult()).toBe('1.5');
});

test('Test Multiply of integers calculation', () => {

    let calculator = new Calculator();

    calculator.operation('*', '2');
    expect(calculator.calculate('2')).toBeTruthy();
    expect(calculator.getResult()).toBe('4');
});

test('Test Multiply of floats calculation', () => {

    let calculator = new Calculator();

    calculator.operation('*', '2.5');
    expect(calculator.calculate('2.5')).toBeTruthy();
    expect(calculator.getResult()).toBe('6.25');
});

test('Test Division of integers calculation', () => {

    let calculator = new Calculator();

    calculator.operation('/', '4');
    expect(calculator.calculate('2')).toBeTruthy();
    expect(calculator.getResult()).toBe('2');
});

test('Test Division of floats calculation', () => {

    let calculator = new Calculator();

    calculator.operation('/', '2.5');
    expect(calculator.calculate('2.5')).toBeTruthy();
    expect(calculator.getResult()).toBe('1');
});


test('Test Invalid operation calculation', () => {

    let calculator = new Calculator();

    calculator.operation('', '2.5');
    expect(calculator.calculate('2.5')).toBeFalsy();
    expect(calculator.getResult()).toBe('0');
});