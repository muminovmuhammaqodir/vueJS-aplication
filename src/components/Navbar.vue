<template>
	<div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
		<a class="d-flex align-items-center text-dark text-decoration-none">
			<img :src="logo" alt="logo" style="width: 100px; cursor: pointer" @click="toHomePage" />
		</a>

		<nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
			<template v-if="isLoggedIn">
				<RouterLink
					:to="{ name: 'createArticle' }"
					class="me-3 pt-3 text-dark text-decoration-none"
				>
					Create Article
				</RouterLink>

				<RouterLink :to="{ name: 'login' }" class="me-3 pt-3 text-dark text-decoration-none">{{
					currentUser.username
				}}</RouterLink>
				<RouterLink :to="{ name: 'login' }" class="me-3 py-2 text-dark text-decoration-none">
					<button @click="logOuthandler" class="btn btn-danger">Logout</button>
				</RouterLink>
			</template>
			<template v-if="isAnonymous">
				<RouterLink :to="{ name: 'login' }" class="me-3 py-2 text-dark text-decoration-none"
					>Login</RouterLink
				>
				<RouterLink :to="{ name: 'register' }" class="me-3 py-2 text-dark text-decoration-none"
					>Register</RouterLink
				>
			</template>
		</nav>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { logo } from '../contstants';
import { gettersTypes } from '../modules/types';
export default {
	data() {
		return {
			logo,
		};
	},
	computed: {
		...mapGetters({
			currentUser: gettersTypes.currentUser,
			isLoggedIn: gettersTypes.isLoggedIn,
			isAnonymous: gettersTypes.isAnonymous,
		}),
	},
	methods: {
		toHomePage() {
			this.$router.push({ name: 'home' });
		},
		logOuthandler() {
			this.$store.dispatch('logout');
			this.$router.push({ name: 'login' });
		},
	},
};
</script>

<style></style>
