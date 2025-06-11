export default function Home() {
    return (
        <div>
		
		
		    <body>
	    <div class="snowflake"></div>
    <div class="snowflake"></div>
    <div class="snowflake"></div>
    <div class="snowflake"></div>
    <div class="snowflake"></div>
    <div class="snowflake"></div>
    <div class="snowflake"></div>
    <div class="snowflake"></div>
    <div class="snowflake"></div>
    <div class="snowflake"></div>
        <section>
            <form id="loginForm">
                <h1>Bem Vindo! ^^</h1>
                <div class="inputbox">
                    <ion-icon name="username-outline"></ion-icon>
                    <input type="text" id="username" required placeholder="">
                    <label for="">Usuário</label>
                </div>
                <div class="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" id="password" required placeholder="">
                    <label for="">Senha</label>
                </div>
                <div class="forget">
                    <label for=""><input type="checkbox" id="rememberMe001">Lembrar de Mim</label>
                    <!--label for=""><input type="checkbox" class="persist-checkbox" id="rememberMe001">Lembrar de Mim</label-->
                    <a href="#">Esqueci a Senha</a>
                </div>
                <button>Iniciar</button>
                <div class="register">
                    <p>Não tem uma conta? <a href="#">Registrar</a></p>
                </div>
            </form>
        </section>
        <!--script src="../../script/persistCheckbox.js"></script-->
        <script src="../../script/rememberMe.js"></script>
    </body>
		
		
		
		</div>
    )
}