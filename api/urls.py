from django.urls import path
from api.views import InterviewViewSet, AdminViewSet

from django.views.decorators.csrf import csrf_exempt

app_name="api"

urlpatterns = [
    path('enterInfo/', AdminViewSet.as_view({'get': 'list', 'post' :'create'}, name="enterInfo")),
    path('interview/', InterviewViewSet.as_view({'get': 'list'}, name="list")),
    path('interview/<int:pk>/', InterviewViewSet.as_view({'get': 'list'}, name="individual"))
         ]