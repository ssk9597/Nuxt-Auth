<template>
    <div>
        <form @submit.prevent="userLogin">
            <div>
                <label>メールアドレス</label>
                <input type="text" v-model="login.email" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" v-model="login.password" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            login: {
                email: '',
                password: '',
            },
        };
    },
    methods: {
        async userLogin() {
            await this.$auth.loginWith('local', { data: this.login }).then(
                response => {
                    return response;
                },
                error => {
                    return error;
                }
            );
        },
    },
};
</script>
