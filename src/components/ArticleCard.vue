<template>
	<div class="col">
		<div class="card shadow-sm">
			<svg
				class="bd-placeholder-img card-img-top"
				width="100%"
				height="225"
				xmlns="http://www.w3.org/2000/svg"
				role="img"
				aria-label="Placeholder: Thumbnail"
				preserveAspectRatio="xMidYMid slice"
				focusable="false"
			>
				<title>Placeholder</title>
				<rect width="100%" height="100%" fill="#55595c"></rect>
			</svg>
			<div class="card-body">
				<p class="card-text fw-bold">
					{{ article.title }}
				</p>
				<p class="card-text" style="height: 120px; overflow: hidden">
					{{ article.description }}
				</p>
				<div class="card-footer p-0 pt-3 bg-white">
					<div class="d-flex justify-content-between align-items-center">
						<div class="btn-group">
							<button
								type="button"
								@click="articleDetailhandler"
								class="btn btn-sm btn-outline-primary"
							>
								Read
							</button>
							<button
								v-if="article.author.username == this.user.username"
								type="button"
								class="btn btn-sm btn-outline-secondary"
								@click="navigateHandler"
							>
								Edit
							</button>
							<button
								v-if="article.author.username == this.user.username"
								:disabled="isLoading"
								@click="DeleteHandler(article.slug)"
								type="button"
								class="btn btn-sm btn-outline-danger"
							>
								Delete
							</button>
						</div>
						<small class="text-body-secondary">{{
							new Date(article.createdAt).toLocaleString('us')
						}}</small>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	name: 'ArticleCard',
	props: {
		article: {
			type: Object,
			required: true,
		},
	},
	computed: {
		...mapState({
			user: state => state.auth.user,
			isLoading: state => state.control.isLoading,
		}),
	},
	methods: {
		articleDetailhandler() {
			return this.$router.push(`/article/${this.article.slug}`);
		},
		DeleteHandler() {
			return this.$store.dispatch('deletArticle', this.article.slug).then(() => {
				this.$store.dispatch('articles');
			});
		},
		navigateHandler() {
			return this.$router.push(`/edit-article/${this.article.slug}`);
		},
	},
};
</script>
<style></style>
