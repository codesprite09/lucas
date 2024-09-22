document.getElementById('botao-traduzir').addEventListener('click', function() {
    const palavra = document.getElementById('input-palavra').value.toLowerCase();
    const resultado = document.getElementById('traducao');
    const exemplo = document.getElementById('exemplo');
    const imagem = document.getElementById('imagem');

    // Dicionário diversificado com traduções e exemplos
    const dicionario = {
        'cachorro': {
            traducao: { en: 'dog', fr: 'chien' },
            slang: { en: 'pup', fr: 'chiot' },
            exemplo: {
                en: 'The dog is barking.',
                fr: 'Le chien aboie.',
                slang: {
                    en: 'The pup is barking loudly!',
                    fr: 'Le chiot aboie fort!'
                }
            },
            imagem: 'https://raw.githubusercontent.com/codesprite09/lucas/refs/heads/main/img/cachorro.webp'
        },
        'gato': {
            traducao: { en: 'cat', fr: 'chat' },
            slang: { en: 'kitty', fr: 'minou' },
            exemplo: {
                en: 'The cat is sleeping.',
                fr: 'Le chat dort.',
                slang: {
                    en: 'The kitty is snoozing.',
                    fr: 'Le minou fait la sieste.'
                }
            },
            imagem: 'https://raw.githubusercontent.com/codesprite09/lucas/refs/heads/main/img/gato.jpg'
        },
        'casa': {
            traducao: { en: 'house', fr: 'maison' },
            slang: { en: 'crib', fr: 'baraque' },
            exemplo: {
                en: 'The house is big.',
                fr: 'La maison est grande.',
                slang: {
                    en: 'The crib is huge!',
                    fr: 'La baraque est énorme!'
                }
            },
            imagem: 'https://raw.githubusercontent.com/codesprite09/lucas/refs/heads/main/img/casa.jpeg'
        },
        'carro': {
            traducao: { en: 'car', fr: 'voiture' },
            slang: { en: 'ride', fr: 'bagnole' },
            exemplo: {
                en: 'The car is fast.',
                fr: 'La voiture est rapide.',
                slang: {
                    en: 'The ride is super fast!',
                    fr: 'La bagnole est super rapide!'
                }
            },
            imagem: 'https://raw.githubusercontent.com/codesprite09/lucas/refs/heads/main/img/carro.jpeg'
        },
        // Adicione mais palavras conforme necessário
    };

    if (dicionario[palavra]) {
        const traducoes = dicionario[palavra].traducao;
        const slang = dicionario[palavra].slang;
        document.getElementById('traducao-ingles').innerText = `${traducoes.en} (slang: ${slang.en})`;
        document.getElementById('traducao-frances').innerText = `${traducoes.fr} (slang: ${slang.fr})`;
        
        exemplo.innerHTML = `
            <strong>Exemplo Formal:</strong> ${dicionario[palavra].exemplo.en} <br>
            <strong>Exemplo em Slang:</strong> ${dicionario[palavra].exemplo.slang.en} <br>
            <strong>Exemplo Formal (Fr):</strong> ${dicionario[palavra].exemplo.fr} <br>
            <strong>Exemplo em Slang (Fr):</strong> ${dicionario[palavra].exemplo.slang.fr}
        `;
        imagem.src = dicionario[palavra].imagem;
        imagem.style.display = 'block';
    } else {
        resultado.innerText = 'Palavra não encontrada.';
        exemplo.innerText = 'Exemplo de uso: ';
        imagem.style.display = 'none';
    }
});
