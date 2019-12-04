<template>
<body>
  <b-container>
	<b-row class="">
	<h1 class="text-center w-100 p-3 bg-secondary text-light">Warhammer Bernuly Calculator</h1>
	</b-row class=" ">
	<form class=" " id="id_form">Number of attacks:
		<b-row class=" ">
			<b-form-input class="input" placeholder="attack counter" v-model="input_atacs"></b-form-input>
		</b-row>
		<br>
		<b-row class="">
			<b-col class="">
				<label class="">To hit:</label>
				<select class="" type="text" v-model="v_slct_hit">
					<option>1+</option>
					<option>2+</option>
					<option>3+</option>
					<option>4+</option>	
					<option>5+</option>
					<option>6+</option>
				</select>
					<!-- {{v_slct_hit}} -->
			</b-col>
			<b-col class="">
				<label class="">To wound:</label>
				<select class="is-hovered" type="text" v-model="v_slct_wound">
					<option>1+</option>
					<option>2+</option>
					<option>3+</option>
					<option>4+</option>
					<option>5+</option>
					<option>6+</option>
				</select>
					<!-- {{v_slct_wound}} -->
			</b-col>
			<b-col class="">
				<label class="">Arm sv:</label>
				<select class="is-hovered" type="text" v-model="v_slct_arm">
					<option>No</option>
					<option>2+</option>
					<option>3+</option>
					<option>4+</option>
					<option>5+</option>
					<option>6+</option>
				</select>
				<!-- {{v_slct_arm}} -->
			</b-col>
			<b-col class="">Fnp:
					<select class="is-hovered" type="text" v-model="v_slct_fnp">
						<option>No</option>
						<option>2+</option>
						<option>3+</option>
						<option>4+</option>
						<option>5+</option>
						<option>6+</option>
					</select>
					<!-- {{v_slct_fnp}} -->
			</b-col>
		</b-row>
	</form>
	<br>
	<br>
	<b-row class="">
		<b-button block variant="primary" @click='roll()'>ROLL</b-button>
	</b-row>
	<b-row class="">
		Results:
	</b-row>
	<b-row class="text-center bg-secondary text-light">
		<b-col>{{ new_data }}</b-col>
	</b-row>
	<p>
	<NuxtLink to="/about">
		About page
	</NuxtLink>
	</p>
  </b-container>
</body>
</template>


<script>
export default {
	components: {
},
  data () {
    return {
		input_atacs: "3",
		v_slct_hit: '4+',
		v_slct_wound: '4+',
		v_slct_arm: 'No',
		v_slct_fnp: 'No',
		new_data: ""
	}
  },
	methods: {
		roll(){
			const data_form = [this.input_atacs,this.v_slct_hit,this.v_slct_wound,this.v_slct_arm,this.v_slct_fnp]
			// const data_to_funct = []
			// data_to_funct.push(data_form[0])
			const result = poll_funct(data_form)
			this.new_data = result
			// let { list_of_str, i_atk, i_hit, i_wnd, i_arm, i_fnp, dice_to_hit, dice_to_wund, dice_armor_save, dice_fnp } = param_funct(data_form);
			console.log(result)
			// console.log([this.v_slct_hit,this.v_slct_wound,this.v_slct_arm,this.v_slct_fnp,this.input_atacs])
		}
	}
}

//#region comands functions
function poll_funct(data_form) {
	let text_answer = ""
	let dice_to_hit = { "1+": 1, "2+": 100 / 6 * 5 / 100, "3+": 100 / 6 * 4 / 100, "4+": 100 / 6 * 3 / 100, "5+": 100 / 6 * 2 / 100, "6+": 100 / 6 * 1 / 100 };
	let dice_to_wund = { "1+": 6, "2+": 5, "3+": 4, "4+": 3, "5+": 2, "6+": 1 };
	let dice_armor_save = { "No": null, "2+": 1, "3+": 2, "4+": 3, "5+": 4, "6+": 5 };
	let dice_fnp = { "No": null, "2+": 1, "3+": 2, "4+": 3, "5+": 4, "6+": 5 };
	const i_atk = to_int(data_form[0]);
		if (i_atk <= 100){
			const i_hit = data_form[1]
			const i_wnd = data_form[2]
			const i_arm = data_form[3]
			const i_fnp = data_form[4]
			let atk = i_atk;
			let hit = dice_to_hit[i_hit];
			let wnd = dice_to_wund[i_wnd];
			let arm = dice_armor_save[i_arm];
			let fnp = dice_fnp[i_fnp];
			let brn_p = dice_drop(hit, wnd, arm, fnp);
			// test_text += "\n brn_p = " + brn_p; // TEST TEXT
			let ok_nums_list = [];
			let brnpsum = [];
			let n = atk;
			const reducer = (accumulator, currentValue) => accumulator + currentValue;
			for (const k of Array(atk + 1).keys()) { //+1 нужно из за начала списка с 0
				let brn_f = 100 * brn(brn_p, k, n);
				brnpsum.push(brn_f);
				let itogo_int = to_int(Math.round(brnpsum.reduce(reducer)));
				// test_text += "\n itogo_int = " + itogo_int; // TEST TEXT
				let itogo_float = brnpsum.reduce(reducer);
				// test_text += "\n itogo_float = " + itogo_float; // TEST TEXT 
				ok_nums_list.push([itogo_int, itogo_float]);
			}
			let string_list = [""];
			for (const [i, num] of ok_nums_list.entries()) {
				if (i == 0) {
					string_list.push(i + " wound s 0" + " to " + ok_nums_list[0][0]);
				}
				else {
					string_list.push(i + " wound s " + ok_nums_list[i - 1][0] + " to " + num[0]);
				}

			}
			text_answer += string_list.join("\n");
		}
		else {
			text_answer += "\n Слишком большое значение атак,\n максимальное количество атак 100 \n";
		}
	return text_answer;
}


function roll_funct2(b_text, list_of_str, text_answer, sprt) {
	list_of_str = b_text.split(sprt);
	if (list_of_str.length == 2 & b_text.split(sprt)[1] <= 100) {
		let dic_string_list = rand_dice2(b_text.split(sprt)[1]);
		text_answer += dict_to_string(dic_string_list);
	}
	else if (list_of_str.length > 2 & b_text.split(sprt)[1] <= 100 & b_text.split(sprt)[2] <= 100) {
		let dic_string_list = rand_dice2(b_text.split(sprt)[1], b_text.split(sprt)[2]);
		text_answer += dict_to_string(dic_string_list);
	}
	else{
		text_answer += "Слишком большие значения, максимальное количество граней кубика 100, максимальное количество бросков 100."
	}
	test_text += "list_of_str.length: " + list_of_str.length + "\n"; // TEST TEXT
	return text_answer;// return { list_of_str, text_answer };
}
//#endregion comands functions
//#region core func
function fc(n) {
	if (n === 0 || n === 1) {
		return 1;
	}
	return n * fc(n - 1);
}


function brn(p, k, n) {
	return (fc(n) / (fc(k) * fc(n - k))) * (p ** k * (1 - p) ** (n - k))
}


function dice_drop(dice_to_hit, dice_to_wund, dice_armor_save, dice_fnp) {
	let value_p = ""
	if (dice_armor_save == null & dice_fnp == null) {
		value_p = dice_to_hit / 6 * dice_to_wund
	}
	else if (dice_armor_save != null & dice_fnp == null) { value_p = dice_to_hit / 6 * dice_to_wund / 6 * dice_armor_save }
	else if (dice_armor_save == null & dice_fnp != null) { value_p = dice_to_hit / 6 * dice_to_wund / 6 * dice_fnp }
	else if (dice_armor_save != null & dice_fnp != null) { value_p = dice_to_hit / 6 * dice_to_wund / 6 * dice_armor_save / 6 * dice_fnp }
	else { value_p = "how do you get whis? post me a later" }
	return value_p
}


function to_int(string) {
	return parseInt(string, 10)
}


function rand_dice2(max, count = "1"){
	let dice_list_result = []
	let dice_dic_results = {}
	let count_int = to_int(count)
	for (const k of Array(count_int).keys()){
		dice_list_result.push(Math.floor(Math.random() * max) + 1)
	}
	for (const dice of dice_list_result){
		dice_dic_results[dice] = []
	}
	for (const dice of dice_list_result){
		dice_dic_results[dice].push(dice)
	}
	return dice_dic_results;
}


function dict_to_string(dic_string_list){
	let string_list = []
	for (keys_and_items of Object.entries(dic_string_list)){
		string_list.push("```" + "_[" + keys_and_items.join("]=[") + "]_" + "```" + "*" + "общее количество: " + keys_and_items[1].length + "*")
	}
	let one_string = string_list.join("\n")
	return one_string;
}
//#endregion  core func

</script>
