from django.db import models

# Create your models here.
GAMETYPE_CHOICES = (
	('ARAM' , "ARAM"),
	('NORMAL_3x3' , "Normal_3v3"),
	('ODIN_UNRANKED' , "Dominion"),
	('NORMAL' , "Normal_5v5"),
	('RANKED_TEAM_3x3' , "Ranked_Team_3v3"),
	('RANKED_TEAM_5x5' , "Ranked_Team_5v5"),
    ('RANKED_SOLO_5x5' , "Ranked_5v5"),
)
class Champions(models.Model):
	name = models.CharField(max_length=30)
	gamesplayed = models.IntegerField()
	winratio = models.FloatField()
	popularity = models.FloatField()
	gametype = models.CharField(max_length = 20, choices = GAMETYPE_CHOICES,default = 'NORMAL')

