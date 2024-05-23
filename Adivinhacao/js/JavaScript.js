<script>
        let randomNumber;
        let attempts;
        const maxAttempts = 2;

        function initializeGame() {
            randomNumber = Math.floor(Math.random() * 10);
            attempts = 0;
            document.getElementById('message').textContent = '';
            document.getElementById('guessInput').value = '';
            document.getElementById('guessInput').disabled = false;
            document.getElementById('guessForm').reset();
        }

        document.getElementById('guessForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const guess = parseInt(document.getElementById('guessInput').value);
            attempts++;

            if (guess === randomNumber) {
                document.getElementById('message').textContent = 'Parabéns! Você acertou o número!';
                document.getElementById('guessInput').disabled = true;
            } else {
                if (attempts < maxAttempts) {
                    document.getElementById('message').textContent = 'Número errado. Tente novamente!';
                } else {
                    document.getElementById('message').textContent = 'Número errado. Você esgotou suas tentativas. O número era ' + randomNumber;
                    document.getElementById('guessInput').disabled = true;
                }
            }
        });

        document.getElementById('resetButton').addEventListener('click', function() {
            initializeGame();
        });

        initializeGame();
    </script>