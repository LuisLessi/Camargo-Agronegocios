<template>

    <body>
        <div class="container">
            <div class="row">
                <div class="col-6 col-md-6">
                    <h1 class="mt-5" style="color: white; font-size: 30px;">Fale Conosco</h1>
                    <p>Você precisa de mais informações? Verifique o que outras pessoas estão dizendo sobre nosso
                        produto.</p>
                    <div class="container texto-icon">
                        <img src="../assets/location-icon-blue.svg" style="color: white;
                        max-width: 7%;" class="mb-5">
                        <p>Localização <br>
                            Rua Graça Aranha, 94, Caravagio. Cep 88509-440, Lages/Sc</p>
                    </div>
                    <div class="container texto-icon">
                        <img src="../assets/whats-icon.svg" style="color: white;
                        max-width: 5%;" class="mb-5">
                        <p class="mt-5">&nbsp Fale Conosco<br>
                            &nbsp Camargo Agronegócios
                            (49) 98402-3763 <br><br>
                            &nbsp atendimento@camargoagronegocios.com.br</p>
                    </div>
                </div>

                <div class="col-6 col-md-6">
                    <div class="card mt-5 mb-5" style="background-color: white;">
                        <div class="row">
                            <div class="col-6 col-md-6 mt-3">
                                <label for="">Nome*</label><br>
                                <input v-model="error" type="text" class="form-control"
                                    aria-describedby="inputGroup-sizing-sm" placeholder="Primeiro nome">


                            </div>
                            <div class="col-6 col-md-6 mt-3">
                                <label for="">Assunto*</label><br>
                                <input v-model="assunto" type="text" class="form-control"
                                    aria-describedby="inputGroup-sizing-sm" placeholder="Assunto">
                            </div>
                            <div class="col-12 col-md-12 mt-3">
                                <label for="">Email*</label><br>
                                <input v-model="email" type="email" class="form-control"
                                    aria-describedby="inputGroup-sizing-sm" placeholder="name@example.com">
                                    
                                <div v-if="error === '11'">
                                    <p style="color: black;">Email inválido inválido</p>
                                </div>

                            </div>

                            <div class="col-12 col-md-12 mt-3">
                                <label for="">Mensagem*</label><br>
                                <textarea v-model="email" type="text" class="form-control"
                                    aria-describedby="inputGroup-sizing-sm" placeholder="name@example.com"
                                    rows="5"></textarea>
                            </div>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            <button class="button_submit btn btn-success btn-lg mt-5 ms-5 mb-4">Enviar Mensagem</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    methods: {
        data: {
            errors: [],
            name: "",
            email: "",
            assunto: "",
            error: "1"
        },
        checkForm: function (e) {
            this.errors = [];

            if (!this.validEmail(this.email)) {
                this.error = true
            }
            e.preventDefault();
        },

        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}

</script>

<style scoped>
body {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)), url('../assets/background-contacts.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
}

p {
    color: white;
}

.texto-icon {
    display: flex;
    justify-content: flex-start;
}
.button_submit{
  background-color: var(--color-background-button);
  color: black;
  font-family: 'Laro';
  font-weight: bold;
  width: 70%;
}
</style>