<script type="text/babel">
import Date__Local from '@ctx-core/date/Date__Local.svelte'
export let post
</script>

<section class="post intro PostIntro">
  <header>
    <p class="date"><span><Date__Local date="{post.txt__date}"></Date__Local></span></p>
    <h2><a href="{post.path}">{post.frontmatter.title}</a></h2>
  </header>
</section>
