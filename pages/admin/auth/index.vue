<template>
    <div>
        <form>
            <AppControlInput type="email">E-Mail Address</AppControlInput>
            <AppControlInput type="password">Password</AppControlInput>
            <AppButton type="submit">{{
                isLogin ? 'Login' : 'Sign Up'
            }}</AppButton>
            <AppButton
                type="button"
                btn-style="bg-pink-400"
                style="margin-left: 10px"
                @click="isLogin = !isLogin"
            >
                Switch to {{ isLogin ? 'Signup' : 'Login' }}
            </AppButton>
        </form>
    </div>
</template>

<script>
import AppButton from '~/components/UI/AppButton.vue'
import AppControlInput from '~/components/UI/AppControlInput.vue'
export default {
    name: 'AdminAuthPage',
    components: {
        AppControlInput,
        AppButton,
    },
    data() {
        return {
            isLogin: true,
        }
    },
}
</script>
