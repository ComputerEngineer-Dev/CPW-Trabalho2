//Validação do formulário de contato
document.getElementById('form-contato')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
    if(nome && email) {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entrarei em contato pelo email ${email}.`);
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});

//Botão de detalhes do projeto
document.querySelectorAll('.projeto-detalhes-btn').forEach(button => {
    button.addEventListener('click', function() {
        const projeto = this.closest('.projeto-card');
        const titulo = projeto.querySelector('h3').textContent;
        
        alert(`Você clicou no projeto: ${titulo}.`);
    });
});

//Efeito de digitação no título
const titulos = document.querySelectorAll('.main-title');
if(titulos.length > 0) {
    const tituloPrincipal = titulos[0];
    const textoOriginal = tituloPrincipal.textContent;
    let i = 0;
    
    function typeWriter() {
        if (i < textoOriginal.length) {
            tituloPrincipal.textContent = textoOriginal.substring(0, i+1);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Iniciar a animação
    tituloPrincipal.textContent = '';
    setTimeout(typeWriter, 500);
}

// Navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});