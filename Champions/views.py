from django.shortcuts import render_to_response
from Champions.models import Champions,GAMETYPE_CHOICES
from django.core import serializers
import json as simplejson
from django.http import Http404
from django.http import QueryDict

# import datetime

mdict = dict(GAMETYPE_CHOICES)


def Champions_list(resquest, gametype):


	if not (gametype in mdict):
		raise Http404

	q = Champions.objects.filter(gametype=gametype)
	# q = QueryDict(gametype = gametype)
	context = [{'Name': i.name, 'Total': i.gamesplayed,'Popularity': i.popularity, 'Win Ratio': i.winratio} for i in q ]     #filter(gametype=gametype)
	data=simplejson.dumps(context)

	return render_to_response('Champions.html', {'json': str(data), 'gametype':gametype})


# def current_datetime(request):
#     now = datetime.datetime.now()
#     return render_to_response('Champions.html', {'current_date': now})
