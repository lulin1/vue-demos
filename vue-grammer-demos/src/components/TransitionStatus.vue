<template>
	<div id="transition-status">
		<h1>Transition Status</h1>

		<div id="example-1">
			<input type="number" v-model="number" step="20">
			<p>{{animatedNumber}}</p>
		</div>

		<div id="example-2">
			<input type="text" v-model="colorQuery" placeholder="Enter a color" v-on:keyup.enter="updateColor">
			<button v-on:click="updateColor">Update</button>
			<p>Preview:</p>
			<span :style="{ backgroundColor: tweenedCSSColor}" class="example-2-css"></span>
			<p>{{ tweenedCSSColor }}</p>
		</div>

	</div>
</template>

<script>
var Color = net.brehaut.Color
export default {
	data() {
		return {
			number: 0,
			animatedNumber: 0,
			color: {
				red: 0,
				green: 0,
				blue: 0,
				alpha: 1
			},
			colorQuery: '',
			tweenedColor: {}
		}
	},
	created: function() {
		this.tweenedColor = Object.assign({}, this.color);
	},
	watch: {
		number: function(newValue, oldValue) {
			var vm = this;
			function animate() {
				if (TWEEN.update()) {
					requestAnimationFrame(animate)
				}
			}

			new TWEEN.Tween({ tweeningNumber: oldValue })
				.easing(TWEEN.Easing.Quadratic.Out)
				.to({ tweeningNumber: newValue }, 500)
				.onUpdate(function() {
					vm.animatedNumber = this.tweeningNumber.toFixed(0)
				})
				.start()

			animate()
		},
		color: function() {
			function animate() {
				if (TWEEN.update()) {
					requestAnimationFrame(animate)
				}
			}

			new TWEEN.Tween(this.tweenedColor)
				.to(this.color, 750)
				.start()

			animate();
		}
	},
	computed: {
		tweenedCSSColor: function() {
			return new Color( {
				red: this.tweenedColor.red,
				green: this.tweenedColor.green,
				blue: this.tweenedColor.blue,
				alpha: this.tweenedColor.alpha
			}).toCSS()
		}
	},
	methods: {
		updateColor: function() {
			this.color = new Color(this.colorQuery).toRGB();
			this.colorQuery = ''
		}
	}
}
</script>

<style scoped>
.example-2-css {
	width: 50px;
	height: 50px;
	display: inline-block;
}
</style>
