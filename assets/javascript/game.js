$(function () {

var character1 = {
				name:'Obi Wan Kenobi',
				HP: '400',
				baseAtkPwr:'8',
				counterAtk:'17'
				};

var character2 = {
				name:'Luke Skywalker',
				HP: '360',
				baseAtkPwr:'7',
				counterAtk:'19'
				};

var character3 = {
				name:'Mace Windu',
				HP: '380',
				baseAtkPwr:'6',
				counterAtk:'20'
				};

var character4 = {
				name: 'Yoda',
				HP: '420',
				baseAtkPwr:'7',
				counterAtk:'22'
				};

console.log(character1);
console.log(character2);
console.log(character3);
console.log(character4);

var hero = {};
var currentEnemy = {};

var enemy1 = {};
var enemy2 = {};
var enemy3 = {};

var enemyHP = 0;
var enemyATK = 0;




var heroImg = $('#obiWan');
var currentEnemyImg = $('#obiWan');

var enemyImg1 = $('#obiWan');
var enemyImg2 = $('#obiWan');
var enemyImg3 = $('#obiWan');

var wins = 0;

function reset ()
{
	$('#atkBtn').hide();

	hero = {};
	currentEnemy = {};

	enemy1 = {};
	enemy2 = {};
	enemy3 = {};

	enemyHP = 0;
	enemyATK = 0;

	heroImg = $('#obiWan');
	currentEnemyImg = $('#obiWan');

	enemyImg1 = $('#obiWan');
	enemyImg2 = $('#obiWan');
	enemyImg3 = $('#obiWan');

	wins = 0;




$('#obiWan').click(function()
{
	hero = character1;
	heroImg = $('#obiWan');
	enemyImg1 = $('#lukeSkywalker');
	enemy1 = character2;
	enemyImg2 = $('#maceWindu');
	enemy2 = character3;
	enemyImg3 = $('#yoda');
	enemy3 = character4;
	charSelect(hero);

});

$('#lukeSkywalker').click(function()
{
	hero = character2;
	heroImg = $('#lukeSkywalker');
	enemyImg1 = $('#obiWan');
	enemy1 = character1;
	enemyImg2 = $('#maceWindu');
	enemy2 = character3;
	enemyImg3 = $('#yoda');
	enemy3 = character4;
	charSelect(hero);
});

$('#maceWindu').click(function()
{
	hero = character3;
	heroImg = $('#maceWindu');
	enemyImg1 = $('#lukeSkywalker');
	enemy1 = character2;
	enemyImg2 = $('#obiWan');
	enemy2 = character1;
	enemyImg3 = $('#yoda');
	enemy3 = character4;
	charSelect(hero);
});

$('#yoda').click(function()
{
	hero = character4;
	heroImg = $('#yoda');
	enemyImg1 = $('#lukeSkywalker');
	enemy1 = character2;
	enemyImg2 = $('#maceWindu');
	enemy2 = character3;
	enemyImg3 = $('#obiWan');
	enemy3 = character1;
	charSelect(hero);

});




function charSelect(hero)
{
	console.log("you've chosen "+ hero.name);

	var baseATK = parseInt(hero.baseAtkPwr);
	var totalATK = parseInt(hero.baseAtkPwr);
	var heroHP = parseInt(hero.HP);


	console.log("this character has a base attack power of "+baseATK);
	console.log("this character has a total of "+heroHP+" hit points");


	$('#availableCharacters').html("");

	$('#yourCharacter').append(heroImg);

	$('#availableEnemies').append(enemyImg1);
	$('#availableEnemies').append(enemyImg2);
	$('#availableEnemies').append(enemyImg3);



	enemyImg1.click(function(){
		currentEnemy = enemy1;
		currentEnemyImg = enemyImg1;
		$('#availableEnemies').html(enemyImg2);
		$('#availableEnemies').append(enemyImg3);
		enemySelect(currentEnemy);
	});

	enemyImg2.click(function(){
		currentEnemy = enemy2;
		currentEnemyImg = enemyImg2;
		$('#availableEnemies').html(enemyImg1);
		$('#availableEnemies').append(enemyImg3);
		enemySelect(currentEnemy);
	});

	enemyImg3.click(function(){
		currentEnemy = enemy3;
		currentEnemyImg = enemyImg3;
		$('#availableEnemies').html(enemyImg1);
		$('#availableEnemies').append(enemyImg2);
		enemySelect(currentEnemy);
	});



	function enemySelect(enemy)
		{
			enemy = currentEnemy;
			$('#currentEnemy').append(currentEnemyImg);	
			enemyHP = parseInt(enemy.HP);
			enemyATK = parseInt(enemy.counterAtk);
			$('#score').html('Enemy HP: '+enemyHP+'<br>');
			$('#score').append('Your HP: '+heroHP);
				console.log(enemyHP);
				console.log(heroHP);

				$('#atkBtn').show();




			$('#atkBtn').click(function(){
				console.log(totalATK);
				enemyHP = enemyHP - totalATK;
				heroHP = heroHP - enemyATK;

				totalATK = totalATK + baseATK;

				$('#score').html('Enemy HP: '+enemyHP+'<br>');
				$('#score').append('Your HP: '+heroHP);

				if (heroHP < 1)
				{
					$('#end').html('You lose!');
					reset();
					
				}

				else if (enemyHP < 1)
				{
					$('#end').html('You have won this battle...');
					$('#currentEnemy').html("Current Enemy: ");	

					wins++;
					console.log(wins);
					$('#atkBtn').hide();

					if(wins === 3)
					{
						alert("you win!");
						reset();
					}

					else{
						enemyImg1.click(function(){
							currentEnemy = enemy1;
							currentEnemyImg = enemyImg1;
							enemySelect(currentEnemy);
						});

						enemyImg2.click(function(){
							currentEnemy = enemy2;
							currentEnemyImg = enemyImg2;
							enemySelect(currentEnemy);
						});

						enemyImg3.click(function(){
							currentEnemy = enemy3;
							currentEnemyImg = enemyImg3;
							enemySelect(currentEnemy);
						});
					}


				}

			});





		}

}
}

reset();

});