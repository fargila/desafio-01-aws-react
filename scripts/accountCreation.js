
        // Função para carregar dados do localStorage e preencher o formulário
        function loadFormData() {
            const name = localStorage.getItem('name');
            const email = localStorage.getItem('email');
            const password = localStorage.getItem('password');
            const confirmPassword = localStorage.getItem('confirmPassword');

            if (name) document.getElementById('name').value = name;
            if (email) document.getElementById('email').value = email;
            if (password) document.getElementById('password').value = password;
            if (confirmPassword) document.getElementById('confirmPassword').value = confirmPassword;
        }

        // Função para validar se a senha e a confirmação de senha são iguais
        function validatePasswords() {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('A senha e a confirmação da senha não coincidem.');
                return false; // Impede o envio do formulário
            }
            return true; // Permite o envio do formulário
        }

        // Função para salvar dados do formulário no localStorage
        function saveFormData() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            localStorage.setItem('confirmPassword', confirmPassword);
        }

        // Carregar dados do localStorage quando a página é carregada
        window.addEventListener('load', loadFormData);

        // Validar e salvar dados do formulário quando ele é enviado
        document.getElementById('accountCreationForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o envio padrão do formulário
            
            if (validatePasswords()) {
                saveFormData();
                alert('Dados salvos com sucesso!');
            }
        });
