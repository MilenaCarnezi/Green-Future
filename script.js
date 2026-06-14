document.addEventListener('DOMContentLoaded', () => {
    const btnDica = document.getElementById('btn-dica');
    const textoDica = document.getElementById('texto-dica');

    // Lista de dicas ecológicas focadas em tecnologia
    const dicasVerdes = [
        "Ative o 'Modo Escuro' em telas AMOLED. Isso reduz drasticamente o consumo de energia do seu dispositivo.",
        "Reduza a resolução de streaming de vídeos (como YouTube) quando estiver apenas ouvindo. Menos dados transferidos significam menos carga nos servidores mundiais.",
        "Configure seu computador para entrar em modo de suspensão após 5 minutos de inatividade em vez de usar protetores de tela complexos.",
        "Antes de descartar um celular antigo, procure pontos de coleta seletiva de lixo eletrônico (E-lixo) na sua cidade para reciclagem de minerais raros.",
        "Cancele a assinatura de newsletters e propagandas que você nunca abre. Menos e-mails armazenados diminuem a pegada dos data centers.",
        "Dê preferência para armazenar arquivos muito pesados em HDs externos locais em vez de manter tudo em nuvem síncrona sem necessidade.",
        "Ao comprar um eletrodoméstico ou gadget novo, verifique sempre a etiqueta de eficiência energética."
    ];

    btnDica.addEventListener('click', () => {
        // Sorteia um índice da nossa lista de dicas
        const indiceAleatorio = Math.floor(Math.random() * dicasVerdes.length);
        
        // Aplica um pequeno efeito visual de troca de texto
        textoDica.style.opacity = 0;
        
        setTimeout(() => {
            textoDica.textContent = dicasVerdes[indiceAleatorio];
            textoDica.style.opacity = 1;
        }, 200);
    });
});