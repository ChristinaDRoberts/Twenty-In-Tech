from django.urls import path
from api.views import InterviewViewSet

from django.views.decorators.csrf import csrf_exempt

app_name="api"

urlpatterns = [
    path('interview/', InterviewViewSet.as_view({'get': 'list', 'post': 'create'}), name="listInt"),
    path('interview/<int:pk>/', InterviewViewSet.as_view({'get': 'list'}), name="indInt")
]