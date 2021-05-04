from django.urls import path
from django.urls.resolvers import URLPattern
from .views import IndexView

urlpatterns = [
  path('inicio/', IndexView.as_view(), name='inicio'),
  
]