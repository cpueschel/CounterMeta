from django.db import models

# Summoner Page
class Summoner(models.Model):
	name = models.CharField(max_length=30)
	dateAccountCreated = models.DateField()

	#Number of Games Played for Each Game Type
	#Calculate Time played from this
	gamesplayed_overall = models.IntegerField()
	gamesplayed_Ranked5s = models.IntegerField()
	gamesplayed_Team5s = models.IntegerField()
	gamesplayed_Team3s = models.IntegerField()
	gamesplayed_Normal5s = models.IntegerField()
	gamesplayed_Normal3s = models.IntegerField()
	gamesplayed_Dominion = models.IntegerField()

	winratio = models.FloatField()
	
class SummonerRecentGames(models.Model):
	gametype = models.CharField(max_length = 20)
	spell1 = models.IntegerField()
	spell2 = models.IntegerField()
	spell2 = models.IntegerField()
