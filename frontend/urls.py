from django.urls import path
from .views import IndexView, EnterInfoView

app_name='frontend'

urlpatterns = [

    path('', IndexView.as_view(), name='index'),
    path('enterInfo/', EnterInfoView.as_view(), name='enterInfo')

]

