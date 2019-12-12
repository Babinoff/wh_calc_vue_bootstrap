<template>
<body>
  <b-container>
	<b-row class="">
	<h1 class="text-center w-100 p-3 bg-secondary text-light">Warhammer Bernuly Calculator</h1>
	</b-row>
	<form class=" " id="id_form">
		<b-row class="p-1">
			Number of attacks:
		</b-row>
		<b-row class=" ">
			<b-form-input class="input" placeholder="attack counter" v-model="input_atacs"></b-form-input>
		</b-row>
		<b-row class="text-center">
			<b-col class="">
				<label class="">To hit:</label>
			</b-col>
			<b-col class="">
				<label class="">To wound:</label>
			</b-col>
			<b-col class="">
				<label class="">Arm sv:</label>
			</b-col>
			<b-col class="">
				<label class="">Fnp:</label>
			</b-col>
		</b-row>
		<b-row class="text-center">
			<b-col class="">
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
			<b-col class="">
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
	<b-row class="">
		<b-button block variant="primary" @click='roll()'>ROLL</b-button>
	</b-row>
	<b-row class="p-1">
		Results:
	</b-row>
	<b-table class="text-center" fixed sticky-header head-variant="dark" striped hover :items="items"></b-table>

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
		input_atacs: "55",
		v_slct_hit: '2+',
		v_slct_wound: '2+',
		v_slct_arm: 'No',
		v_slct_fnp: 'No',
		new_data: "",
		items: [{wound:"", from:'', to:""}]
	}
  },
	methods: {
		roll(){
			const data_form = [this.input_atacs,this.v_slct_hit,this.v_slct_wound,this.v_slct_arm,this.v_slct_fnp]
			// const data_to_funct = []
			// data_to_funct.push(data_form[0])
			const result_and_answer = poll_funct(data_form)
			this.new_data = result_and_answer[1]
			this.items = result_and_answer[0]
			// this.items = [{wound:"1", from: '0', to: "10" },{wound:"2", from: '10', to: "5" },{wound:"3", from: '50', to: "100" }]
			// let { list_of_str, i_atk, i_hit, i_wnd, i_arm, i_fnp, dice_to_hit, dice_to_wund, dice_armor_save, dice_fnp } = param_funct(data_form);
			console.log(result_and_answer)
			// console.log([this.v_slct_hit,this.v_slct_wound,this.v_slct_arm,this.v_slct_fnp,this.input_atacs])
		}
	}
}


//#region comands functions
function poll_funct(data_form) {
	let text_answer = ""
	let string_list = [];
	let dice_to_hit = { "1+": 1, "2+": 100 / 6 * 5 / 100, "3+": 100 / 6 * 4 / 100, "4+": 100 / 6 * 3 / 100, "5+": 100 / 6 * 2 / 100, "6+": 100 / 6 * 1 / 100 };
	let dice_to_wund = { "1+": 6, "2+": 5, "3+": 4, "4+": 3, "5+": 2, "6+": 1 };
	let dice_armor_save = { "No": null, "2+": 1, "3+": 2, "4+": 3, "5+": 4, "6+": 5 };
	let dice_fnp = { "No": null, "2+": 1, "3+": 2, "4+": 3, "5+": 4, "6+": 5 };
	const i_atk = to_int(data_form[0]);
		if (i_atk <= 100) {
			const i_hit = data_form[1]
			const i_wnd = data_form[2]
			const i_arm = data_form[3]
			const i_fnp = data_form[4]
			const atk = i_atk;
			const hit = dice_to_hit[i_hit];
			const wnd = dice_to_wund[i_wnd];
			const arm = dice_armor_save[i_arm];
			const fnp = dice_fnp[i_fnp];
			const brn_p = dice_drop(hit, wnd, arm, fnp);
			// test_text += "\n brn_p = " + brn_p; // TEST TEXT
			let ok_nums_list = [[0],[0]];
			let brnpsum = [];
			const n = atk;
			const reducer = (accumulator, currentValue) => accumulator + currentValue;
			for (const k of Array(atk).keys()) { //+1 нужно из за начала списка с 0
				const brn_f = 100 * brn(brn_p, k, n);
				// console.log(brn_f)
				brnpsum.push(brn_f);
				const brn_reduce = brnpsum.reduce(reducer)
				// const itogo_int = to_int(Math.round(brn_reduce));
				let itogo_int = Math.floor(brn_reduce)
				const itogo_float = to_float_two(brn_reduce);
				ok_nums_list.push([itogo_int, itogo_float]);
			}
			ok_nums_list.shift()
			let zero_to = 0
			let zero_wound = 0
			let hundred_from = 0
			let hundred_wound = 0
			let count = 0
			// console.log(ok_nums_list.length)
			let result_list_test = []
			let list_of_object = []
			for (const [i, num] of ok_nums_list.entries()) {
				let num_minus_one = 0
				let current_num = num[0]
				// let i_or_range = i
				// Переделать логику для проверки соответвия двух значений и создания 0-10 групп вундов 
				// bootstrap@4.4.1 requires a peer of jquery@1.9.1
				if (i != 0) {
					num_minus_one = ok_nums_list[i - 1][0]
					count+=1
				}
				let f_boll = false
				let t_boll = false
				for (const obj of list_of_object){
					if (current_num == obj["from"]){
						obj["atk"].push(i)
						f_boll = true
					}
				}
				if (f_boll == false){
					if (num_minus_one != current_num){
					list_of_object.push(create_object(i, num_minus_one+1, current_num))
					}
					else{
					list_of_object.push(create_object(i, num_minus_one, current_num))
					}
				}
				// if (current_num == 0){
				// 	zero_wound = i
				// }
				// else if (i != 0 && num_minus_one == 0) {
				// 	zero_to = current_num
				// }
				// else if (i != 0 && num_minus_one != 100 && current_num == 100) {
				// 		hundred_from = num_minus_one
				// 		hundred_wound = i
				// 	}
				// else if (i != 0 && num_minus_one != 100 && current_num != 100) {
				// 	if (current_num != num_minus_one){
				// 		num_minus_one += 1
				// 	}
				// 	string_list.push(result_pack(i, num_minus_one, current_num))	
				// }
				// else {
				// 	console.log("how you see this? post me a leter")
				// }
				// result_list_test.push([i, num_minus_one, current_num])
					// string_list.push(result_pack(i, ok_nums_list[i - 1][0], num[0]))
				}
			for (const [i, obj] of list_of_object.entries()) {
				const atks = obj["atk"]
				if (atks.length > 1){
					const start_atk = atks[0]
					const end_atk = atks[atks.length-1]
					string_list.push(result_pack(start_atk +" - "+ end_atk, obj["from"], obj["to"]))
				}
				else{
					string_list.push(result_pack(atks[0], obj["from"], obj["to"]))
				}
			}
			// string_list.unshift(result_pack(0 +" - "+ zero_wound, 0, zero_to))
			// string_list.push(result_pack(hundred_wound +" - "+ i_atk, hundred_from, 100))
			console.log(list_of_object)
			}
			// text_answer += string_list.join("\n");
		else {
			text_answer += "\n Слишком большое значение атак,\n максимальное количество атак 100 \n";
		}
		
	return [string_list, text_answer];
}

// pakc value to dict
function result_pack(wound_value, from_value, to_value){
	return {wound: wound_value, from: from_value, to: to_value}
}

function create_object(i, from_value, to_value){
	return {"atk": [i], "from": from_value, "to": to_value}
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

function to_float_two(string) {
	return string.toFixed(2)
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
