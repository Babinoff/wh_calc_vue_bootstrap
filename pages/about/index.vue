<template>
  <div class="content has-text-primary column is-6">
	<div class='calculator-button-container'>
		<div>
			<button class="button">Button</button>
		</div>
		<div class='calculator-button-row'>
			<button class='button is-medium is-info hvr-wobble-vertical' @click='addExpression("2+")'>2+</button>
			<button class='button is-medium is-info hvr-wobble-vertical' @click='addExpression("3+")'>3+</button>
			<button class='button is-medium is-info hvr-wobble-vertical' @click='addExpression("4+")'>4+</button>
			<button class='button is-medium is-info hvr-wobble-vertical' @click='addExpression("5+")'>5+</button>
			<button class='button is-medium is-info hvr-wobble-vertical' @click='addExpression("6+")'>6+</button>
		</div>
		<p>
			<NuxtLink to="/" class="button is-medium is-info hvr-wobble-vertical">
				Another button
			</NuxtLink>
		</p>
		<p>
			<NuxtLink to="/">
				Back to calc
			</NuxtLink>
		</p>
		<input class="scroll-test" placeholder="ввод текста" ref="myTestField">
		<!-- <p>Введённое сообщение: {{ message }}</p> -->
			<p>Тестовый текст: {{ new_data }}</p>
		<!-- <input type="text" size="40"> -->
		<p>
			<output name="result">0</output>
		</p>
	</div>
	
  </div>
</template>
<script>
// new Vue ({
//     created () {
//         console.log(this.$refs.myTestField.value)
//     }
// })
export default {
	components: {
	},
	data: function () {
    return {
		value: 0,
		new_data: "текст",
		}
	},
	methods: {
		addExpression(e) {
		if ( Number.isInteger(this.value) )
		this.value = ''; 
		this.value += e;
		console.log(this.$refs.myTestField.value)
		this.value += this.$refs.myTestField.value;
		this.new_data += this.$refs.myTestField.value;
		}
	}
	
}
</script>

<style>

</style>