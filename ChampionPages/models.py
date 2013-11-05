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

NAME_CHOICES = (
	("Annie","Annie"),
	("Olaf","Olaf"),
	("Galio","Galio"),
	("TwistedFate","Twisted Fate"),
	("XinZhao","Xin Zhao"),
	("Urgot","Urgot"),
	("LeBlanc","LeBlanc"),
	("Vladimir","Vladimir"),
	("Fiddlesticks","Fiddlesticks"),
	("Kayle","Kayle"),
	("MasterYi","Master Yi"),
	("Alistar","Alistar"),
	("Ryze","Ryze"),
	("Sion","Sion"),
	("Sivir","Sivir"),
	("Soraka","Soraka"),
	("Teemo","Teemo"),
	("Tristana","Tristana"),
	("Warwick","Warwick"),
	("Nunu","Nunu"),
	("MissFortune","Miss Fortune"),
	("Ashe","Ashe"),
	("Tryndamere","Tryndamere"),
	("Jax","Jax"),
	("Morgana","Morgana"),
	("Zilean","Zilean"),
	("Singed","Singed"),
	("Evelynn","Evelynn"),
	("Twitch","Twitch"),
	("Karthus","Karthus"),
	("ChoGath","Cho'Gath"),
	("Amumu","Amumu"),
	("Rammus","Rammus"),
	("Anivia","Anivia"),
	("Shaco","Shaco"),
	("DrMundo","DrMundo"),
	("Sona","Sona"),
	("Kassadin","Kassadin"),
	("Irelia","Irelia"),
	("Janna","Janna"),
	("Gangplank","Gangplank"),
	("Corki","Corki"),
	("Karma","Karma"),
	("Taric","Taric"),
	("Veigar","Veigar"),
	("Trundle","Trundle"),
	("Swain","Swain"),
	("Caitlyn","Caitlyn"),
	("Blitzcrank","Blitzcrank"),
	("Malphite","Malphite"),
	("Katarina","Katarina"),
	("Nocturne","Nocturne"),
	("Maokai","Maokai"),
	("Renekton","Renekton"),
	("JarvanIV","JarvanIV"),
	("Elise","Elise"),
	("Orianna","Orianna"),
	("Wukong","Wukong"),
	("Brand","Brand"),
	("LeeSin","LeeSin"),
	("Vayne","Vayne"),
	("Rumble","Rumble"),
	("Cassiopeia","Cassiopeia"),
	("Skarner","Skarner"),
	("Heimerdinger","Heimerdinger"),
	("Nasus","Nasus"),
	("Nidalee","Nidalee"),
	("Udyr","Udyr"),
	("Poppy","Poppy"),
	("Gragas","Gragas"),
	("Pantheon","Pantheon"),
	("Ezreal","Ezreal"),
	("Mordekaiser","Mordekaiser"),
	("Yorick","Yorick"),
	("Akali","Akali"),
	("Kennen","Kennen"),
	("Garen","Garen"),
	("Leona","Leona"),
	("Malzahar","Malzahar"),
	("Talon","Talon"),
	("Riven","Riven"),
	("KogMaw","KogMaw"),
	("Shen","Shen"),
	("Lux","Lux"),
	("Xerath","Xerath"),
	("Shyvana","Shyvana"),
	("Ahri","Ahri"),
	("Graves","Graves"),
	("Fizz","Fizz"),
	("Volibear","Volibear"),
	("Rengar","Rengar"),
	("Varus","Varus"),
	("Nautilus","Nautilus"),
	("Viktor","Viktor"),
	("Sejuani","Sejuani"),
	("Fiora","Fiora"),
	("Ziggs","Ziggs"),
	("Lulu","Lulu"),
	("Draven","Draven"),
	("Hecarim","Hecarim"),
	("KhaZix","KhaZix"),
	("Darius","Darius"),
	("Jayce","Jayce"),
	("Diana","Diana"),
	("Syndra","Syndra"),
	("Zyra","Zyra"),
	("Zed","Zed"),
	("Vi","Vi"),
	("Nami","Nami"),
	("Thresh","Thresh"),
)

#Use for Table and a Chart
class ChampionSynergy2s(models.Model):
	name = models.CharField(max_length=30)
	synname1 = models.CharField(max_length=30)
	gamesplayed = models.IntegerField()
	winratio = models.FloatField()
	popularity = models.FloatField()
	gametype = models.CharField(max_length = 20, choices = GAMETYPE_CHOICES,default = 'NORMAL')

# Make into a graph of win rate vs gamelength
class Chmpgamel(models.Model):
	name = models.CharField(max_length=30)
	gametype = models.CharField(max_length = 20, choices = GAMETYPE_CHOICES,default = 'NORMAL')
	position = models.CharField(max_length=30)
	gamesplayed15Min = models.IntegerField()
	winratio15Min = models.FloatField()

	gamesplayed16Min = models.IntegerField()
	winratio16Min = models.FloatField()

	gamesplayed17Min = models.IntegerField()
	winratio17Min = models.FloatField()

	gamesplayed18Min = models.IntegerField()
	winratio18Min = models.FloatField()

	gamesplayed19Min = models.IntegerField()
	winratio19Min = models.FloatField()

	gamesplayed20Min = models.IntegerField()
	winratio20Min = models.FloatField()

	gamesplayed21Min = models.IntegerField()
	winratio21Min = models.FloatField()

	gamesplayed22Min = models.IntegerField()
	winratio22Min = models.FloatField()

	gamesplayed23Min = models.IntegerField()
	winratio23Min = models.FloatField()

	gamesplayed24Min = models.IntegerField()
	winratio24Min = models.FloatField()

	gamesplayed25Min = models.IntegerField()
	winratio25Min = models.FloatField()

	gamesplayed26Min = models.IntegerField()
	winratio26Min = models.FloatField()

	gamesplayed27Min = models.IntegerField()
	winratio27Min = models.FloatField()

	gamesplayed28Min = models.IntegerField()
	winratio28Min = models.FloatField()

	gamesplayed29Min = models.IntegerField()
	winratio29Min = models.FloatField()

	gamesplayed30Min = models.IntegerField()
	winratio30Min = models.FloatField()

	gamesplayed31Min = models.IntegerField()
	winratio31Min = models.FloatField()

	gamesplayed32Min = models.IntegerField()
	winratio32Min = models.FloatField()

	gamesplayed33Min = models.IntegerField()
	winratio33Min = models.FloatField()

	gamesplayed34Min = models.IntegerField()
	winratio34Min = models.FloatField()

	gamesplayed35Min = models.IntegerField()
	winratio35Min = models.FloatField()

	gamesplayed36Min = models.IntegerField()
	winratio36Min = models.FloatField()

	gamesplayed37Min = models.IntegerField()
	winratio37Min = models.FloatField()

	gamesplayed38Min = models.IntegerField()
	winratio38Min = models.FloatField()

	gamesplayed39Min = models.IntegerField()
	winratio39Min = models.FloatField()

	gamesplayed40Min = models.IntegerField()
	winratio40Min = models.FloatField()

	gamesplayed41Min = models.IntegerField()
	winratio41Min = models.FloatField()

	gamesplayed42Min = models.IntegerField()
	winratio42Min = models.FloatField()

	gamesplayed43Min = models.IntegerField()
	winratio43Min = models.FloatField()

	gamesplayed44Min = models.IntegerField()
	winratio44Min = models.FloatField()

	gamesplayed45Min = models.IntegerField()
	winratio45Min = models.FloatField()

	gamesplayed46Min = models.IntegerField()
	winratio46Min = models.FloatField()

	gamesplayed47Min = models.IntegerField()
	winratio47Min = models.FloatField()

	gamesplayed48Min = models.IntegerField()
	winratio48Min = models.FloatField()

	gamesplayed49Min = models.IntegerField()
	winratio49Min = models.FloatField()

	gamesplayed50Min = models.IntegerField()
	winratio50Min = models.FloatField()

	gamesplayed51Min = models.IntegerField()
	winratio51Min = models.FloatField()

	gamesplayed52Min = models.IntegerField()
	winratio52Min = models.FloatField()

	gamesplayed53Min = models.IntegerField()
	winratio53Min = models.FloatField()

	gamesplayed54Min = models.IntegerField()
	winratio54Min = models.FloatField()

	gamesplayed55Min = models.IntegerField()
	winratio55Min = models.FloatField()

