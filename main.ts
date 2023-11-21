var clc = require("cli-color");
var prompt = require("prompt-sync")();

// Crie um programa que peça ao usuário para inserir um número e o exiba na tela.
let number: number;
console.log("Digite um número: ");
number = parseInt(prompt("") || "0");
console.log("O número digitado é: " + number);

//Desenvolva um programa que calcule a soma de dois números inseridos pelo usuário.
let number1: number, number2: number, sum: number;
console.log("Digite o primeiro número: ");
number1 = parseInt(prompt("") || "0");
console.log("Digite o segundo número: ");
number2 = parseInt(prompt("") || "0");
sum = number1 + number2;
console.log("A soma dos dois números é: " + sum);

//Elabore um programa que verifique se um número é par ou ímpar.
let number100: number, isEven: boolean;
console.log("Digite um número: ");
number = parseInt(prompt("") || "0");
isEven = number % 2 === 0;
console.log("O número é " + (isEven ? "par" : "ímpar"));

//Faça um programa que receba três números e mostre o maior deles.
let number101: number, number102: number, number103: number, max: number;
console.log("Digite o primeiro número: ");
number101 = parseInt(prompt("") || "0");
console.log("Digite o segundo número: ");
number102 = parseInt(prompt("") || "0");
console.log("Digite o terceiro número: ");
number103 = parseInt(prompt("") || "0");
max = Math.max(number101, number102, number103);
console.log("O maior número é: " + max);

//Crie um programa que calcule o fatorial de um número.
function factorial(n: number): number {
    if (n === 0 || n === 1) {
       return 1;
    }
    return n * factorial(n - 1);
   }
   
   let number105: number, result: number;
   console.log("Digite um número: ");
   number105 = parseInt(prompt("") || "0");
   result = factorial(number105);
   console.log("O fatorial de " + number105 + " é: " + result);

//Desenvolva um programa que converta graus Celsius para Fahrenheit.
let celsius: number, fahrenheit: number;
console.log("Digite a temperatura em graus Celsius: ");
celsius = parseInt(prompt("") || "0");
fahrenheit = (celsius * 9) / 5 + 32;
console.log("A temperatura em Fahrenheit é: " + fahrenheit);

//Escreva um programa que imprima os primeiros N números primos.
function isPrime(n: number): boolean {
    if (n <= 1) {
       return false;
    }
    for (let i = 2; i < n; i++) {
       if (n % i === 0) {
         return false;
       }
    }
    return true;
   }
   
   let count: number, num: number, conta: number;
   console.log("Digite a quantidade de números primos a serem exibidos: ");
   count = parseInt(prompt("") || "0");
   conta = 0;
   num = 2;
   while (conta < count) {
    if (isPrime(num)) {
       console.log(num);
       conta++;
    }
    num++;
   }

//Faça um programa que conte quantas vogais há em uma palavra.
function countVowels(word: string): number {
    let conte = 0;
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < word.length; i++) {
       if (vowels.includes(word[i])) {
         conte++;
       }
    }
    return conte;
   }
   
   let word: string, vowelCount: number;
   console.log("Digite uma palavra: ");
   word = prompt("") || "";
   vowelCount = countVowels(word);
   console.log("A quantidade de vogais na palavra é: " + vowelCount);

//Crie um programa que inverta a ordem dos dígitos de um número.
function countCharacters(input: string): { letters: number, numbers: number } {
    let letters = 0, numbers = 0;
    for (let i = 0; i < input.length; i++) {
       if ((input[i] >= 'a' && input[i] <= 'z') || (input[i] >= 'A' && input[i] <= 'Z')) {
         letters++;
       } else if (input[i] >= '0' && input[i] <= '9') {
         numbers++;
       }
    }
    return { letters, numbers };
   }
   
   let input: string, quantidade: { letters: number, numbers: number };
   console.log("Digite uma string: ");
   input = prompt("") || "";
   quantidade = countCharacters(input);
   console.log("A quantidade de letras é: " + quantidade.letters);
   console.log("A quantidade de números é: " + quantidade.numbers);

//Elabore um programa que determine se um ano é bissexto.
function isLeapYear(year: number): boolean {
    if (year % 4 !== 0) {
       return false;
    } else if (year % 100 !== 0) {
       return true;
    } else if (year % 400 !== 0) {
       return false;
    }
    return true;
   }
   
   let year: number, isBissexto: boolean;
   console.log("Digite o ano: ");
   year = parseInt(prompt("") || "0");
   isBissexto = isLeapYear(year);
   console.log("O ano " + year + " é bissexto: " + isBissexto);

//Desenvolva um programa que gere a sequência de Fibonacci até o N-ésimo termo.
function criarFibo(n: number): number[] {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
       sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
   }
   
   let n: number, fibo: number[];
   console.log("Digite o N-ésimo termo da sequência de Fibonacci: ");
   n = parseInt(prompt("") || "0");
   fibo = criarFibo(n);
   console.log("A sequência de Fibonacci até o " + n + "-ésimo termo é: " + fibo.join(", "));

//Faça um programa que verifique se uma palavra é um palíndromo.
function é(str: string): boolean {
    let reverse = str.split("").reverse().join("");
    return str === reverse;
   }
   
   let str: string;
   console.log("Digite a palavra que você deseja verificar: ");
   str = prompt("") || "";
   if (é(str)) {
    console.log("A palavra '" + str + "' é um palíndromo.");
   } else {
    console.log("A palavra '" + str + "' não é um palíndromo.");
   }

//Escreva um programa que ordene uma lista de números.
function numberpequeno(numbers: number[]): number[] {
    return numbers.sort((a, b) => a - b);
   }
   
   let numbers: number[];
   console.log("Digite os números que você deseja ordenar, separados por vírgulas: ");
   numbers = prompt("")
    .split(",")
    .map(Number);
   let sortedNumbers = numberpequeno(numbers);
   console.log("A lista ordenada de números é: " + sortedNumbers.join(", "));

//Crie um programa que simule o jogo da forca, onde o usuário tenta adivinhar uma palavra secreta.
function getSecretWord(): string {
    const words: string[] = ["casa", "computador", "arvore", "lua"];
    return words[Math.floor(Math.random() * words.length)];
   }
   
   function playHangman(): void {
    const secretWord: string = getSecretWord();
    let attempts: number = 5;
    let guessedWord: string = secretWord.split("").map(() => "_").join("");
   
    console.log("Bem-vindo ao jogo da forca! Tente adivinhar a palavra secreta: " + guessedWord);
   
    while (attempts > 0 && guessedWord !== secretWord) {
       const guess: string = prompt("Digite uma letra para adivinhar: ").toLowerCase();
       if (secretWord.includes(guess)) {
         guessedWord = secretWord.split("").map(letter => (letter === guess ? letter : letter === letter ? letter : "_")).join("");
         console.log("Você acertou! A palavra secreta agora é: " + guessedWord);
       } else {
         attempts--;
         console.log("Você errou! Tente novamente. Você tem " + attempts + " tentativas restantes.");
       }
    }
   
    if (guessedWord === secretWord) {
       console.log("Parabéns! Você acertou a palavra secreta! A palavra era: " + secretWord);
    } else {
       console.log("Que pena! Você não conseguiu adivinhar a palavra secreta. A palavra era: " + secretWord);
    }
   }
   
   playHangman();