from django.contrib import admin
from Champions.models import Champions

class ChampionsAdmin(admin.ModelAdmin):
    list_display = ('name', 'gamesplayed', 'winratio', 'popularity','gametype')
    list_filter = ('winratio',)
    fields = ('name', 'gamesplayed', 'winratio', 'popularity','gametype')

admin.site.register(Champions, ChampionsAdmin)


