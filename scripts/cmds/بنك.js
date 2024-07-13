let mon, txt, num, query1, query2, fail, times_completed, time, boxes = [], timed, timeTo, timer, bank;

resetHTML()
doFinal()

setTimeout(function () {
	timed.checked = true;
},100)




async function start () {
	resetHTML();
	mon = document.getElementById("monitor");
	txt = document.getElementById("startuptext");
	boxes = []

	txt.innerText = "Device booting up..."
	await sleep( randInt(1, 6) * 1000 );
	
	txt.innerText = "Dialing..."
	await sleep( randInt(1, 6) * 1000 );

	txt.innerText = "Establishing connection..."
	await sleep( randInt(1, 6) * 1000 );

	txt.innerText = "Doing some hackermans stuff..."
	await sleep( randInt(1, 6) * 1000 );

	
	txt.innerText = "Access code flagged; requires human captcha input..."
	await sleep( randInt(1, 6) * 1000 );
	
	times_completed = 0;
	let challenges = [doFleeca, doPaleto, doVault];
	challenges[bank.value]();
}

async function doFleeca() {
	setupBoxes();
	await sleep(1000);
	document.querySelectorAll(".box").forEach( function (elm) {
		elm.classList.add("box-shrink");
	});
	await sleep(2500);

	setupChallenge();
	if (timed.checked) fail = setTimeout(doFail, timeTo.value*1000);
	timed.disabled = true;
	timeTo.disabled = true;
	time = Date.now();
	askShapes();
}

async function doPaleto() {
	//
}

async function doVault() {
	//
}

function resetHTML () {
	document.body.innerHTML = `
	<div id="toolbar" style="width:700px;margin:10px auto 0;">
		<span id="reset" class="reset">Play/Reset ⟳</span>                   |
		<label>
			<input type="checkbox" id="timed" onclick="timeTo.disabled = !timeTo.disabled" ${timed?.checked?"checked":""}></input>
			<input type="text" id="time" style="width:30px;" value="${timeTo?timeTo.value:5}"></input>
			Timed
		</label>
		<select id="bank" name="bank" style="position:relative;left:30px;">
			<option value="0" ${bank?.value==0?"selected":""} >		Fleeca		</option>
			<option value="1" ${bank?.value==1?"selected":""} >		Paleto		</option>
			<option value="2" ${bank?.value==2?"selected":""} >		The Vault	</option>
		</select>
		<span id="splits" style="position:relative;left:200px;"> |
			<span id="split1"></span> |
			<span id="split2"></span> |
			<span id="split3"></span> |
			<span id="split4"></span> |
			<span id="goodjob" hidden> Good Job!</span>
		</span>
	</div>
	<div id="monitor">
		<img src="anon.png" id="anon"></img>
		<h3 id="startuptext"> </h3>
	</div>
    <script src="script.js"></script>
	`;
	timed = document.getElementById("timed");
	timeTo = document.getElementById('time');
	bank = document.getElementById("bank");
}

function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randInt (min,max) {
    return Math.floor((Math.random() * (max+1 -min)) +min);
}

function randArr (arr) {
	return arr.sort( () => 0.5 - Math.random() )
}

function randFrom (arr) {
	let excludes = Object.values(arguments); excludes.shift();
	let choice;
	do { choice = arr[randInt(0, arr.length-1)]; }
	while (excludes.includes(choice));
	return choice;
}

function setupBoxes () {
	num = randArr([1, 2, 3, 4]);
	//console.log(num)

	mon.innerHTML = `
	<div id="boxes">
		<div class="box"> <p>${num[0]}</p> </div>
		<div class="box"> <p>${num[1]}</p> </div>
		<div class="box"> <p>${num[2]}</p> </div>
		<div class="box"> <p>${num[3]}</p> </div>
	</div>
	`;
}

function setupChallenge () {
	mon.innerHTML = `
	<div id="boxes">
		<svg id="box1" width="150" height="150" style="margin: 0 15px 0;"></svg>
		<svg id="box2" width="150" height="150" style="margin: 0 15px 0;"></svg>
		<svg id="box3" width="150" height="150" style="margin: 0 15px 0;"></svg>
		<svg id="box4" width="150" height="150" style="margin: 0 15px 0;"></svg>
	</div>
	<div style="height:50px"></div>
	<div id="entertext">
		<svg id="timerline" width="750" height="20">
			<line x1="0" y1="10" x2="750" y2="10" style="stroke:#77625C;stroke-width:4;" />
			<line x1="0" y1="10" x2="750" y2="10" style="stroke:#C5A089;stroke-width:5;" />
		</svg>
		<h4 id="query"> ENTER -blank- (#) AND -blank- (#) </h4>
		<div id="input-container">
			<p id="answertext"> Answer </p>
			<img id="padlock" src=padlock.svg style="height:15px;transform:translateY(15px);"></img>
			<p id="input" class="input-placeholder" contenteditable></p>
		</div>
		<hr>
	</div>
	`;

	if (timed.checked) {
		timer = setInterval( function () {
			let speed = timeTo.value * 2.7
			document.getElementById("timerline").innerHTML = `
			<svg id="timerline" width="750" height="20">
				<line x1="0" y1="10" x2="750" y2="10" style="stroke:#77625C;stroke-width:4;" />
				<line x1="${(Date.now() - time)/speed}" y1="10" x2="${750-(Date.now() - time)/speed}" y2="10" style="stroke:#C5A089;stroke-width:5;" />
			</svg>
			`
		}, 10)
	}

	createBoxes();
}

function createBoxes () {
	let digits = randArr([1, 2, 3, 4]);
	let colors = ["WHITE", "BLACK", "RED", "ORANGE", "YELLOW", "GREEN", "BLUE", "PURPLE"];
	let shapes = ["SQUARE", "RECTANGLE", "TRIANGLE", "CIRCLE"];

	for (let i = 1; i < 5; i++) {
		let elm = document.getElementById("box"+i);
		let props = {
			backgroundColor: randFrom(colors),
			shape: randFrom(shapes),
			colorText: randFrom(colors),
			shapeText: randFrom(shapes),
			number: i,
		}
		props.shapeColor = randFrom(colors, props.backgroundColor);
		props.textColor = randFrom(colors, props.shapeColor);
		props.numberColor = randFrom(colors, props.shapeColor, props.textColor);
		boxes.push(props);

		elm.style.backgroundColor = props.backgroundColor
		elm.innerHTML = `
			<${getShape(props.shape, props.shapeColor)}/>

			<text class="stroke-text smooth-16 text"   x="50%" y="60"  text-anchor="middle" fill="${props.textColor}">${props.colorText}</text>
			<text class="stroke-text smooth-16 text"   x="50%" y="110" text-anchor="middle" fill="${props.textColor}">${props.shapeText}</text>
			<text class="stroke-text smooth-16 number" x="50%" y="85"  text-anchor="middle" fill="${props.numberColor}"> ${props.number}</text>
		`
	}
}

function getShape (sh, shc) {
	let shared = `style="fill:${shc};stroke:grey;stroke-width:2;"`
	switch (sh) {
		case "SQUARE":
			return "rect x='15' y='15' width='120' height='120' " + shared;
		case "RECTANGLE":
			return "rect x='15' y='45' width='120' height='60' " + shared;
		case "TRIANGLE":
			return "polygon points='15,135 135,135 75,15' " + shared;
		case "CIRCLE":
			return `circle cx="75" cy="75" r="60" stroke="grey" stroke-width="5" fill="${shc}"`
	}
}

function askShapes () {
	let input = document.getElementById("input");
	let query = document.getElementById("query");

	input.onkeyup = input.onkeydown = function (e) {
		if (!this.innerText) this.classList.add("input-placeholder");
		else {this.classList.remove("input-placeholder");}

		if (this.innerText.length > 18) if (e.key != "Backspace") e.preventDefault();
		if (e.key == "Enter" && e.type == "keydown") {e.preventDefault(); submit(this.innerText);}
	}

	let possibleQueries = ["THE BACKGROUND COLOR", "THE SHAPE", "SHAPE COLOR", "COLOR TEXT", "SHAPE TEXT", "THE TEXT COLOR", "NUMBER COLOR", "THE NUMBER"]
	query1 = [
		randFrom(possibleQueries),
		randFrom([1, 2, 3, 4])
	]
	query2 = [
		randFrom(possibleQueries),
		randFrom([1, 2, 3, 4], query1[1])
	]
	query.innerText = `ENTER ${query1[0]} (${query1[1]}) AND ${query2[0]} (${query2[1]})`


	input.focus();
}


function submit (answer) {
	answer = answer.split(" ")
	let possibleQueries = ["THE BACKGROUND COLOR", "THE SHAPE", "SHAPE COLOR", "COLOR TEXT", "SHAPE TEXT", "THE TEXT COLOR", "NUMBER COLOR", "THE NUMBER"]
	let queryEquivalents = ["backgroundColor", "shape", "shapeColor", "colorText", "shapeText", "textColor", "numberColor", "number"]
	let pass = 0;

	if (
		answer[0].toLowerCase() == String (boxes [
			num.indexOf(query1[1])
		] [queryEquivalents [
			possibleQueries
			.indexOf(query1[0])
		]]).toLowerCase()
	) pass++;
	if (
		answer[1].toLowerCase() == String( boxes [
			num.indexOf(query2[1])
		] [queryEquivalents [
			possibleQueries
			.indexOf(query2[0])
		]]).toLowerCase()
	) pass++;

	if (answer[0] == "de" && answer[1] == "bug") pass = 2

	

	if (pass == 2) {
		clearTimeout(fail);
		postTime();
		if (times_completed == 4) doSuccess();
		else challenge();
	}
	else {
		clearTimeout(fail);
		doFail()
	}
}

function doFail () {
	//console.log("fail");
	postTime();
	mon.innerHTML = `
	<img src=denied.png style="height:50px;filter:grayscale(100)brightness(100);"></img>
	<h3>The system didn't accept your answers</h3>
	`
	doFinal()
}

function postTime () {
	clearInterval(timer)
	document.getElementById("split" + (++times_completed)).innerText = (
		Math.round ( (Date.now() - time) / 100 ) /10 ) + "s"
}

function doSuccess () {
	//console.log("success");
	mon.innerHTML = `
	<img src="anon.png" id="anon"></img>
	<h3> The system has been bypassed. </h3>
	`
	document.getElementById("goodjob").hidden = false
	doFinal()
}

function doFinal () {
	let reset = document.getElementById("reset");
	reset.classList.add("active-reset");
	reset.onclick = function (e) {
		start()
	}
	timed.disabled = false;
	timeTo.disabled = false;
}