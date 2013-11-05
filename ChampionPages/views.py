from django.shortcuts import render_to_response
from ChampionPages.models import GAMETYPE_CHOICES,NAME_CHOICES, ChampionSynergy2s, Chmpgamel
from django.http import Http404
from django.core import serializers
import json as simplejson

gamedict = dict(GAMETYPE_CHOICES)
namedict = dict(NAME_CHOICES)


def Champions_Page(resquest, name):
	if not (name in namedict):
		raise Http404
	q = Chmpgamel.objects.filter(name=name)
	context = [{'name': i.name, 'gametype': i.gametype, 'position': i.position, 'gamesplayed': [i.gamesplayed15Min,i.gamesplayed16Min,i.gamesplayed17Min,i.gamesplayed18Min,i.gamesplayed19Min,i.gamesplayed20Min,i.gamesplayed21Min,i.gamesplayed22Min,i.gamesplayed23Min,i.gamesplayed24Min,i.gamesplayed25Min,i.gamesplayed26Min,i.gamesplayed27Min,i.gamesplayed28Min,i.gamesplayed29Min,i.gamesplayed30Min,i.gamesplayed31Min,i.gamesplayed32Min,i.gamesplayed33Min,i.gamesplayed34Min,i.gamesplayed35Min,i.gamesplayed36Min,i.gamesplayed37Min,i.gamesplayed38Min,i.gamesplayed39Min,i.gamesplayed40Min,i.gamesplayed41Min,i.gamesplayed42Min,i.gamesplayed43Min,i.gamesplayed44Min,i.gamesplayed45Min,i.gamesplayed46Min,i.gamesplayed47Min,i.gamesplayed48Min,i.gamesplayed49Min,i.gamesplayed50Min,i.gamesplayed51Min,i.gamesplayed52Min,i.gamesplayed53Min,i.gamesplayed54Min,i.gamesplayed55Min], 'winRatio': [i.winratio15Min,i.winratio16Min,i.winratio17Min,i.winratio18Min,i.winratio19Min,i.winratio20Min,i.winratio21Min,i.winratio22Min,i.winratio23Min,i.winratio24Min,i.winratio25Min,i.winratio26Min,i.winratio27Min,i.winratio28Min,i.winratio29Min,i.winratio30Min,i.winratio31Min,i.winratio32Min,i.winratio33Min,i.winratio34Min,i.winratio35Min,i.winratio36Min,i.winratio37Min,i.winratio38Min,i.winratio39Min,i.winratio40Min,i.winratio41Min,i.winratio42Min,i.winratio43Min,i.winratio44Min,i.winratio45Min,i.winratio46Min,i.winratio47Min,i.winratio48Min,i.winratio49Min,i.winratio50Min,i.winratio51Min,i.winratio52Min,i.winratio53Min,i.winratio54Min,i.winratio55Min]} for i in q ]     #filter(gametype=gametype)
	gamelengthwinrate=simplejson.dumps(context)
	return render_to_response('ChampionPage.html', {'gamelengthwinrate':str(gamelengthwinrate),'Champion':name})

def Champions(request):
	return render_to_response('Champion.html',{'Names':namedict})