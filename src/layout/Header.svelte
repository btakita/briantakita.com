<script>
	import Nav from '@briantakita/web/src/layout/Nav.svelte'
	import { __subheader } from '@briantakita/web/src/layout/store'
</script>

<header class="header">
  <div class="content-wrap">
    <div class="logo">
      <h1><a href="/app/briantakita.com/static">Brian Takita</a></h1>
    </div>
  </div>
	<Nav></Nav>
</header>
<h2 class="subheader content-wrap">
	{@html $__subheader || ''}
</h2>

<style type="text/scss">
  @import '~@briantakita/web/src/css/variables';
	.header {
		margin: 0 0 1em;
		background: $color__header;
		color: $color__text;
		h1 {
			font-size: 2rem;
			text-align: left;
			font-weight: 700;
			margin: 0;
		}
		a {
			color: $color__text;
			text-decoration: none;
			&:hover {
				text-decoration: none;
			}
		}
	}
	.subheader {
		font-size: 3rem;
		text-align: center;
	}
</style>
