<script type="text/babel">
  import Date__Local from '@ctx-core/date/Date__Local.svelte'
	export let post
</script>

<section class="post intro PostIntro">
  <header>
    <p class="date"><span><Date__Local date="{post.txt__date}"></Date__Local></span></p>
    <h2><a href="{post.path}">{post.metadata.title}</a></h2>
  </header>
  <div class="content">
    {@html post.metadata.intro}
		<p class="more"><a href="/posts/{post.slug}">Full post&hellip;</a></p>
  </div>
</section>
