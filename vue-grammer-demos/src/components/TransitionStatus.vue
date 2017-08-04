<template>
	<div id="transition-status">
		<h1 title="Click Me !" @click="showStatus" :class="status ? 'styleStatus' : ''">Transition Status</h1>

		<div class="skin-box">
			<span class="changeSkin">更换皮肤</span>
			<input class="jscolor" id="changeColor" @change="updateSkinColor()" value="F0FFEB">
		</div>

		<div id="transition-status-box" v-if="status">
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
		
	</div>
</template>

<script>
var Color = net.brehaut.Color
export default {
	data() {
		return {
			status: false,
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
	mounted: function() {
		this.updateSkinColor();
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
		showStatus: function() {
			this.status = !this.status;
		},
		updateColor: function() {
			this.color = new Color(this.colorQuery).toRGB();
			this.colorQuery = ''
		},
		updateSkinColor: function() {
			var value = document.getElementById('changeColor').value;
			document.body.style.backgroundColor = '#' + value;
		}
	}
}
</script>

<style scoped>

h1:hover {
    font-style: italic;
    font-size: 40px;
    color: grey;
}

.skin-box {
	position: absolute;
	top: 10px;
	left: 10px;
}

.changeSkin {
	margin-right: 10px;
	font-size: 15px;
	font-weight: bold;
	font-style: oblique;
}

.styleStatus {
    color: cadetblue;
    background: black;
    width: 50%;
    height: 100%;
    margin: 25px auto;
    padding: 10px;
    font-size: 40px;
    border-radius: 50%;
    box-shadow: 10px 10px 5px darkslategrey;
}

.example-2-css {
	width: 50px;
	height: 50px;
	display: inline-block;
}

</style>
