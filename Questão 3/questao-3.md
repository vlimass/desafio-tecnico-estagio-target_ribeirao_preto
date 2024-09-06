## 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA); Ao final do processamento, qual será o valor da variável SOMA?

Vemos que o código executa uma soma cumulativa, que começa com valor 0 (SOMA = 0) e a cada iteração do loop acrescenta o valor da variável K, até a última iteração quando K = 12 (pois é até K < INDICE e INDICE = 12). Assim, podemos verificar as seguintes iterações do algoritmo: 

```
K = 1 // antes do while
K += 1, logo K = 2 // na primeira iteração 
// Temos para SOMA, que começa SOMA = 0: 
SOMA = 2 + 3 + 4 + ... + 11 + 12 = 77
```

**Resultado: 77**

*É possível verificar o algoritmo no código do arquivo `questao-3.js`*