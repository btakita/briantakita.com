<script context="module">
	export async function preload({ params, query }) {
	  const response = await this.fetch('posts.json')
    const posts = await response.json()
    return { posts }
	}
</script>

<script>
  import { __class__layout, __prepend__footer } from '@briantakita/layout/store'
  import PostIntro from '@briantakita/posts/PostIntro.svelte'
	export let segment = ''
  export let posts
  __class__layout.set('articles')
  __prepend__footer.set(`<div class="nav"><a href="/blog/archive"> « Blog Archives</a></div>`)
</script>

<div class="posts">
  {#each posts as post}
    <PostIntro {post}></PostIntro>
  {/each}
</div>
