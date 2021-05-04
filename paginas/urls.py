from django.urls import path
from django.urls.resolvers import URLPattern
from .views import IndexView

urlpatterns = [
  path('', IndexView.as_view(), name='inicio'),
  
]