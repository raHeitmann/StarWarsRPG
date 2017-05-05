$(function() {


var character1 = {
				name:'Obi Wan Kenobi',
				HP: '180',
				baseAtkPwr:'8',
				counterAtk:'17'
				};

var character2 = {
				name:'Luke Skywalker',
				HP: '200',
				baseAtkPwr:'7',
				counterAtk:'19'
				};

var character3 = {
				name:'Mace Windu',
				HP: '170',
				baseAtkPwr:'6',
				counterAtk:'20'
				};

var character4 = {
				name: 'Yoda',
				HP: '160',
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




var heroImg = $('#obiWan');
var enemyImg1 = $('#obiWan');
var enemyImg2 = $('#obiWan');
var enemyImg3 = $('#obiWan');


$('#obiWan').click(function()
{
	hero = character1;
	heroImg = $('#obiWan');
	enemyImg1 = $('#lukeSkywalker');
	enemy1 = character2;
	enemyImg2 = $('#maceWindu');
	enemy2 = character3;
	enemyImg3 = $('#yoda');
	enemy4 = character4;
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
		$('#availableEnemies').html(enemyImg2);
		$('#availableEnemies').append(enemyImg3);
		enemySelect(currentEnemy);
	});

	enemyImg2.click(function(){
		currentEnemy = enemy2;
		$('#availableEnemies').html(enemyImg1);
		$('#availableEnemies').append(enemyImg3);
		enemySelect(currentEnemy);
	});

	enemyImg3.click(function(){
		currentEnemy = enemy3;
		$('#availableEnemies').html(enemyImg1);
		$('#availableEnemies').append(enemyImg2);
		enemySelect(currentEnemy);
	});

	function enemySelect(enemy)
		{
			enemy = currentEnemy;
			console.log(enemy);	

			var enemyHP = parseInt(enemy.HP);
			var enemyATK = parseInt(enemy.counterAtk);

				console.log(enemyHP);
				console.log(heroHP);

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
				}

				else if (enemyHP < 0)
				{
					$('#end').html('You have won this battle...');
				}

			});

		}

}


});