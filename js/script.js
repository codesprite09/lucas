document.getElementById('botao-traduzir').addEventListener('click', function() {
    const palavra = document.getElementById('input-palavra').value;
    const resultado = document.getElementById('traducao');

    // Simulação de tradução
    const dicionario = {
        'cachorro': 'dog',
        'gato': 'cat',
        'casa': 'house',
        'carro': 'car'
    };

    if (dicionario[palavra]) {
        resultado.innerText = dicionario[palavra];
    } else {
        resultado.innerText = 'Palavra não encontrada.';
    }
});

