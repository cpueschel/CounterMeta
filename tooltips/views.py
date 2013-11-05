from django.shortcuts import render_to_response
from django.http import Http404
from ChampionPages.models import GAMETYPE_CHOICES,NAME_CHOICES

gamedict = dict(GAMETYPE_CHOICES)
namedict = dict(NAME_CHOICES)

def Champion_Tooltip_Request(resquest, name, gametype):
	if not (name in namedict):
		raise Http404
	if not (gametype in gamedict):
		raise Http404	
	return render_to_response('tooltip.html', {'Champion':name})