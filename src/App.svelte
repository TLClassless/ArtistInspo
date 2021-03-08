<script>
	let src="img/placeholder.svg"
	import{Card} from './components/Components.js'
</script>
<body>
	<div>
		<Card></Card>
	</div>
</body>
<style>
	body {
		max-width: 450px;
		max-height: 900px;
		min-height: 600px;
		overflow: hidden;
	}

	@media screen and (min-width: 800px) {
		body {
			box-shadow: 0 0 50px 15px grey;
			display: flex;
		}
	}

	@media screen and (min-height:1000px) {
		body {
			margin-top: 3%;
		}
	}
</style>