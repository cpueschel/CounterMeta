from django.conf.urls import patterns, include, url
from Champions.views import Champions_list
from ChampionPages.views import Champions_Page, Champions
from tooltips.views import Champion_Tooltip_Request
from django.conf import settings


# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'CounterMeta.views.home', name='home'),
    # url(r'^CounterMeta/', include('CounterMeta.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
    # (r'^Champions/$', Champions_list),
    (r'^Champions/overall/(?P<gametype>[\w\-]+)/$', Champions_list),
    (r'^Champions/(?P<name>[\w\-]+)/$', Champions_Page),
    (r'^Champions/$', Champions),
    (r'^Champions/(?P<name>[\w\-]+)/(?P<gametype>[\w\-]+)/tooltip/$', Champion_Tooltip_Request),
    (r'^items/(?P<itemnumber>[\w\-]+)/$', Champions_Page),
    (r'^items/$', Champions_Page),
)

if settings.DEBUG:
    # static files (images, css, javascript, etc.)
    urlpatterns += patterns('',
        (r'^media/(?P<path>.*)$', 'django.views.static.serve', {
        'document_root': settings.MEDIA_ROOT}))